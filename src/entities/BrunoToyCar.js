import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { brunoMaterials } from '../core/BrunoMaterialSystem.js';

/**
 * BrunoToyCar: Flagship stylized diorama toy car inspired by Bruno Simon's portfolio.
 * Features beveled body geometry, bouncy 4-wheel spring suspension, dynamic chassis roll/pitch,
 * interactive antenna wobble physics, tire skids, and responsive arcade drift dynamics.
 */
export class BrunoToyCar {
  constructor(scene, physicsWorld, audioManager, initialPos = new THREE.Vector3(0, 0, 0), colorHex = 0xef4444) {
    this.scene = scene;
    this.physicsWorld = physicsWorld;
    this.audioManager = audioManager;
    this.color = colorHex;
    this.carName = 'Bruno Simon Toy Roadster';
    this.isBrunoToyCar = true;

    // Movement state
    this.position = new THREE.Vector3(initialPos.x, 0, initialPos.z);
    this.velocity = new THREE.Vector3(0, 0, 0);
    this.yaw = 0;
    this.pitch = 0;
    this.roll = 0;
    this.currentSpeed = 0;
    this.speed = 0;
    this.speedKmh = 0;

    // Vertical physics & airborne states
    this.verticalVelocity = 0;
    this.isAirborne = false;
    this.gravity = 25.0;

    // Vehicle handling parameters (responsive, snappy, fun arcade physics)
    this.maxSpeed = 34;          // ~122 km/h
    this.boostMaxSpeed = 48;     // ~172 km/h
    this.reverseMaxSpeed = 14;   // ~50 km/h
    this.acceleration = 28;
    this.braking = 38;
    this.turnRate = 3.2;
    this.friction = 6.2;
    this.steerAngle = 0;
    this.maxSteerAngle = 0.54;   // ~31 degrees
    this.radius = 1.35;
    this.wheelRadius = 0.42;

    // Spring suspension simulation
    this.suspensionTravel = [0, 0, 0, 0]; // FL, FR, RL, RR vertical offsets
    this.chassisPitch = 0;
    this.chassisRoll = 0;
    this.antennaSwayX = 0;
    this.antennaSwayZ = 0;
    this.antennaVelX = 0;
    this.antennaVelZ = 0;

    this.headlightsOn = false;
    this.skidSystem = null;

    this.initMesh();
  }

  setSkidSystem(skidSystem) {
    this.skidSystem = skidSystem;
  }

  createRoundedRectShape(w, h, r) {
    const shape = new THREE.Shape();
    const x = -w / 2;
    const y = -h / 2;
    shape.moveTo(x + r, y);
    shape.lineTo(x + w - r, y);
    shape.quadraticCurveTo(x + w, y, x + w, y + r);
    shape.lineTo(x + w, y + h - r);
    shape.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    shape.lineTo(x + r, y + h);
    shape.quadraticCurveTo(x, y + h, x, y + h - r);
    shape.lineTo(x, y + r);
    shape.quadraticCurveTo(x, y, x + r, y);
    return shape;
  }

  initMesh() {
    this.mesh = new THREE.Group();
    this.mesh.position.copy(this.position);

    // Bruno Simon stylized tactile materials (soft matte satin clay & shiny chrome)
    const bodyPaintMat = brunoMaterials.get('redGradient');
    const roofCreamMat = brunoMaterials.enhanceMaterialWithBrunoShading(new THREE.MeshStandardMaterial({
      color: 0xfbf8f3,
      roughness: 0.42,
      metalness: 0.08
    }));

    const chromeMat = brunoMaterials.get('bodyMetal');
    const darkTrimMat = brunoMaterials.get('darkGray');
    const glassMat = brunoMaterials.get('carGlass');
    const headlampGlowMat = brunoMaterials.get('emissiveOrange');
    const tailLampMat = brunoMaterials.get('stopLights');
    const tireMat = brunoMaterials.enhanceMaterialWithBrunoShading(new THREE.MeshStandardMaterial({ color: 0x18181b, roughness: 0.92 }));
    const rimMat = brunoMaterials.get('bodyMetal');
    const caliperMat = brunoMaterials.get('redGradient');

    this.bodyMesh = new THREE.Group();
    this.proceduralBody = new THREE.Group();

    // 1. Lower Chassis with beveled edges (Smooth rounded rectangular extrusion)
    const chassisShape = this.createRoundedRectShape(2.1, 4.2, 0.35);
    const chassisExtrudeSettings = {
      depth: 0.52,
      bevelEnabled: true,
      bevelSegments: 4,
      bevelSize: 0.08,
      bevelThickness: 0.08
    };
    const chassisGeo = new THREE.ExtrudeGeometry(chassisShape, chassisExtrudeSettings);
    chassisGeo.rotateX(Math.PI / 2); // Orient horizontal along X-Z plane
    chassisGeo.translate(0, 0.48, 0);

    const lowerBody = new THREE.Mesh(chassisGeo, bodyPaintMat);
    lowerBody.castShadow = true;
    lowerBody.receiveShadow = true;
    this.proceduralBody.add(lowerBody);

    // Front sculpt hood slope
    const hoodShape = this.createRoundedRectShape(1.85, 1.5, 0.25);
    const hoodGeo = new THREE.ExtrudeGeometry(hoodShape, {
      depth: 0.32,
      bevelEnabled: true,
      bevelSegments: 3,
      bevelSize: 0.06,
      bevelThickness: 0.06
    });
    hoodGeo.rotateX(Math.PI / 2);
    hoodGeo.translate(0, 0.65, 1.05);
    const hood = new THREE.Mesh(hoodGeo, bodyPaintMat);
    hood.castShadow = true;
    this.proceduralBody.add(hood);

    // 2. Beveled Toy Cabin (Cream roof with rounded curved corners)
    const cabShape = this.createRoundedRectShape(1.65, 2.0, 0.32);
    const cabGeo = new THREE.ExtrudeGeometry(cabShape, {
      depth: 0.62,
      bevelEnabled: true,
      bevelSegments: 3,
      bevelSize: 0.08,
      bevelThickness: 0.08
    });
    cabGeo.rotateX(Math.PI / 2);
    cabGeo.translate(0, 1.15, -0.2);
    const cab = new THREE.Mesh(cabGeo, roofCreamMat);
    cab.castShadow = true;
    this.proceduralBody.add(cab);

    // Front Windshield (curved dark glossy glass)
    const windshieldGeo = new THREE.BoxGeometry(1.5, 0.52, 0.08);
    const windshield = new THREE.Mesh(windshieldGeo, glassMat);
    windshield.position.set(0, 1.08, 0.82);
    windshield.rotation.x = 0.42;
    this.proceduralBody.add(windshield);

    // Rear Window
    const rearWin = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.46, 0.08), glassMat);
    rearWin.position.set(0, 1.08, -1.22);
    rearWin.rotation.x = -0.38;
    this.proceduralBody.add(rearWin);

    // Side Windows
    [-0.83, 0.83].forEach(wx => {
      const sideWin = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.42, 1.45), glassMat);
      sideWin.position.set(wx, 1.08, -0.2);
      this.proceduralBody.add(sideWin);
    });

    // 3. Classic Toy Front Grille & Beveled Chrome Bumper
    const grille = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.32, 0.08), darkTrimMat);
    grille.position.set(0, 0.46, 2.18);
    this.proceduralBody.add(grille);

    // Slatted grille chrome accents
    for (let g = -0.5; g <= 0.5; g += 0.25) {
      const slat = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.24, 0.04), chromeMat);
      slat.position.set(g, 0.46, 2.22);
      this.proceduralBody.add(slat);
    }

    // Chrome Front Bumper with rounded ends
    const frontBumper = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 2.2, 12), chromeMat);
    frontBumper.rotation.z = Math.PI / 2;
    frontBumper.position.set(0, 0.32, 2.24);
    frontBumper.castShadow = true;
    this.proceduralBody.add(frontBumper);

    // Chrome Rear Bumper
    const rearBumper = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 2.2, 12), chromeMat);
    rearBumper.rotation.z = Math.PI / 2;
    rearBumper.position.set(0, 0.32, -2.22);
    rearBumper.castShadow = true;
    this.proceduralBody.add(rearBumper);

    // Chrome Roll-Bar Hoop behind Cabin
    const rollBarGeo = new THREE.TorusGeometry(0.68, 0.07, 10, 18, Math.PI);
    const rollBar = new THREE.Mesh(rollBarGeo, chromeMat);
    rollBar.position.set(0, 1.35, -1.25);
    rollBar.castShadow = true;
    this.proceduralBody.add(rollBar);

    // 4. Iconic Circular Toy Headlights (Warm glowing lenses)
    [-0.68, 0.68].forEach(hx => {
      // Headlight chrome bezel ring
      const bezel = new THREE.Mesh(new THREE.TorusGeometry(0.19, 0.05, 8, 16), chromeMat);
      bezel.position.set(hx, 0.56, 2.18);
      this.proceduralBody.add(bezel);

      // Glowing lens
      const lens = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.17, 0.06, 16), headlampGlowMat);
      lens.rotation.x = Math.PI / 2;
      lens.position.set(hx, 0.56, 2.2);
      this.proceduralBody.add(lens);
    });

    // Dual Red Tail Lights
    [-0.72, 0.72].forEach(tx => {
      const tail = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.16, 0.06), tailLampMat);
      tail.position.set(tx, 0.56, -2.18);
      this.proceduralBody.add(tail);
    });

    // Dual Chrome Exhaust Pipes
    [-0.45, 0.45].forEach(ex => {
      const exhaust = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.35, 12), chromeMat);
      exhaust.rotation.x = Math.PI / 2;
      exhaust.position.set(ex, 0.28, -2.28);
      this.proceduralBody.add(exhaust);
    });

    // 5. Bruno Simon Signature Toy Antenna with Wobbly Bobble Sphere on Top!
    this.antennaGroup = new THREE.Group();
    this.antennaGroup.position.set(0.72, 1.15, -1.8);

    const antennaBase = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, 0.14, 8), darkTrimMat);
    antennaBase.position.y = 0.07;
    this.antennaGroup.add(antennaBase);

    // Spring mast rod
    const mastGeo = new THREE.CylinderGeometry(0.02, 0.025, 0.95, 6);
    mastGeo.translate(0, 0.475, 0);
    this.antennaMast = new THREE.Mesh(mastGeo, chromeMat);
    this.antennaGroup.add(this.antennaMast);

    // Bright bobble ball on top
    const bobbleGeo = new THREE.SphereGeometry(0.12, 12, 12);
    const bobbleMat = new THREE.MeshStandardMaterial({ color: 0xff3b30, roughness: 0.3 });
    this.antennaBobble = new THREE.Mesh(bobbleGeo, bobbleMat);
    this.antennaBobble.position.y = 0.95;
    this.antennaBobble.castShadow = true;
    this.antennaMast.add(this.antennaBobble);

    this.proceduralBody.add(this.antennaGroup);

    // Add procedural body to bodyMesh
    this.bodyMesh.add(this.proceduralBody);

    // Load Bruno Simon's Official 3D GLTF Roadster
    this.loadOfficialModel();

    // Add main body to vehicle mesh
    this.mesh.add(this.bodyMesh);

    // 6. Chunky 4-Wheel Assembly with Suspension Travel Pivots
    this.wheelFL = this.createToyWheel(tireMat, rimMat, caliperMat);
    this.wheelFL.position.set(-1.12, 0.42, 1.25);

    this.wheelFR = this.createToyWheel(tireMat, rimMat, caliperMat);
    this.wheelFR.position.set(1.12, 0.42, 1.25);
    this.wheelFR.rotation.y = Math.PI;

    this.wheelRL = this.createToyWheel(tireMat, rimMat, caliperMat);
    this.wheelRL.position.set(-1.12, 0.42, -1.25);

    this.wheelRR = this.createToyWheel(tireMat, rimMat, caliperMat);
    this.wheelRR.position.set(1.12, 0.42, -1.25);
    this.wheelRR.rotation.y = Math.PI;

    this.mesh.add(this.wheelFL, this.wheelFR, this.wheelRL, this.wheelRR);

    // 7. Ground shadow contact plane
    const shadowGeo = new THREE.PlaneGeometry(2.7, 5.0);
    const shadowMat = new THREE.MeshBasicMaterial({
      color: 0x1e272e,
      transparent: true,
      opacity: 0.38,
      depthWrite: false
    });
    this.shadow = new THREE.Mesh(shadowGeo, shadowMat);
    this.shadow.rotation.x = -Math.PI / 2;
    this.shadow.position.y = 0.03;
    this.scene.add(this.shadow);

    this.mesh.userData = { vehicle: this };
    this.scene.add(this.mesh);
  }

  createToyWheel(tireMat, rimMat, caliperMat) {
    const wheelGroup = new THREE.Group();

    // Wheel spin pivot
    const spinPivot = new THREE.Group();
    spinPivot.name = 'spinPivot';

    // Chunky rubber tire with beveled cylindrical profile
    const tireGeo = new THREE.CylinderGeometry(0.42, 0.42, 0.36, 18);
    tireGeo.rotateZ(Math.PI / 2);
    const tire = new THREE.Mesh(tireGeo, tireMat);
    tire.castShadow = true;
    spinPivot.add(tire);

    // Deep-dish alloy wheel rim
    const rimGeo = new THREE.CylinderGeometry(0.28, 0.28, 0.38, 12);
    rimGeo.rotateZ(Math.PI / 2);
    const rim = new THREE.Mesh(rimGeo, rimMat);
    spinPivot.add(rim);

    // 5-Spoke silver wheel star
    for (let s = 0; s < 5; s++) {
      const spokeGeo = new THREE.BoxGeometry(0.05, 0.24, 0.06);
      const spoke = new THREE.Mesh(spokeGeo, rimMat);
      spoke.position.set(0.19, 0, 0);
      spoke.rotation.x = (s / 5) * Math.PI * 2;
      spinPivot.add(spoke);
    }

    // Chrome center hub cap
    const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.41, 10), rimMat);
    hub.rotateZ(Math.PI / 2);
    spinPivot.add(hub);

    wheelGroup.add(spinPivot);

    // Red brake caliper (stays stationary relative to steering)
    const caliper = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.16, 0.12), caliperMat);
    caliper.position.set(0.12, 0.2, 0);
    wheelGroup.add(caliper);

    return wheelGroup;
  }

  loadOfficialModel() {
    const base = import.meta.env.BASE_URL || './';
    const cleanBase = base.endsWith('/') ? base : base + '/';
    const loader = new GLTFLoader();
    loader.load(`${cleanBase}models/vehicle/oldSchool.glb`, (gltf) => {
      this.attachOfficialModel(gltf.scene);
    }, undefined, () => {
      loader.load(`${cleanBase}models/vehicle/defaultAntenna.glb`, (gltf2) => {
        this.attachOfficialModel(gltf2.scene);
      });
    });
  }

  attachOfficialModel(model) {
    if (!model) return;
    brunoMaterials.applyToModel(model);

    // Compute bounding box and normalize size
    const box = new THREE.Box3().setFromObject(model);
    const size = new THREE.Vector3();
    box.getSize(size);
    const center = new THREE.Vector3();
    box.getCenter(center);

    const maxDim = Math.max(size.x, size.y, size.z);
    const scale = 3.6 / maxDim;
    model.scale.set(scale, scale, scale);

    // Center horizontally and align tires with ground
    model.position.x = -center.x * scale;
    model.position.y = -box.min.y * scale + 0.05;
    model.position.z = -center.z * scale;

    // Detect animated nodes
    model.traverse((child) => {
      if (child.name && child.name.match(/stopLight|backLight/i)) {
        this.loadedStopLights = child;
      }
      if (child.name && child.name.match(/headlight/i)) {
        this.loadedHeadlights = child;
      }
      if (child.name && child.name.match(/antenna/i)) {
        this.loadedAntenna = child;
      }
    });

    if (this.proceduralBody) {
      this.proceduralBody.visible = false;
    }
    this.bodyMesh.add(model);
    this.officialModel = model;
  }

  update(dt, input, isPlayerControlling) {
    if (isPlayerControlling) {
      const fwdInput = input.getForward();
      const turnInput = input.getTurn();
      const handbrake = input.isJumping();
      const boost = input.isSprinting();

      const topSpeed = boost ? this.boostMaxSpeed : this.maxSpeed;

      // 1. Acceleration & Braking with responsive throttle
      if (fwdInput > 0) {
        if (this.currentSpeed < 0) {
          this.currentSpeed += this.braking * dt;
        } else if (this.currentSpeed < topSpeed) {
          this.currentSpeed += this.acceleration * (boost ? 1.5 : 1.0) * dt;
        }
      } else if (fwdInput < 0) {
        if (this.currentSpeed > 0) {
          this.currentSpeed -= this.braking * dt;
        } else if (this.currentSpeed > -this.reverseMaxSpeed) {
          this.currentSpeed -= this.acceleration * 0.8 * dt;
        }
      } else {
        // Natural rolling friction
        if (this.currentSpeed > 0) {
          this.currentSpeed = Math.max(0, this.currentSpeed - this.friction * dt);
        } else if (this.currentSpeed < 0) {
          this.currentSpeed = Math.min(0, this.currentSpeed + this.friction * dt);
        }
      }

      if (handbrake) {
        this.currentSpeed *= Math.max(0, 1 - 3.2 * dt);
      }

      // 2. Smooth, sharp, responsive arcade steering (Left = steer left, Right = steer right)
      const targetSteer = -turnInput * this.maxSteerAngle;
      this.steerAngle += (targetSteer - this.steerAngle) * Math.min(1, dt * 20.0);

      const isTryingToMove = (input.isDown('KeyW') || input.isDown('ArrowUp') || input.isDown('KeyS') || input.isDown('ArrowDown'));
      const effectiveSpeed = Math.max(Math.abs(this.currentSpeed), isTryingToMove ? 3.5 : 0);

      if (effectiveSpeed > 0.1) {
        const turnMult = (this.currentSpeed < -0.1) ? -1 : 1;
        const driftMultiplier = handbrake ? 1.9 : 1.0;
        this.yaw += this.steerAngle * this.turnRate * turnMult * driftMultiplier * dt;
      }

      // 3. Movement integration
      const fwdX = Math.sin(this.yaw);
      const fwdZ = Math.cos(this.yaw);

      const proposedX = this.position.x + fwdX * this.currentSpeed * dt;
      const proposedZ = this.position.z + fwdZ * this.currentSpeed * dt;

      // Surface elevation check (flyovers, ramps, ground)
      const surfaceHeight = this.physicsWorld.getSurfaceHeight ? this.physicsWorld.getSurfaceHeight(proposedX, proposedZ, this.position.y) : 0;
      const rampCheck = this.checkRamps(proposedX, proposedZ);
      const flyoverInfo = this.physicsWorld.getFlyoverAt ? this.physicsWorld.getFlyoverAt(proposedX, proposedZ, this.position.y) : null;

      if (rampCheck.onRamp) {
        this.position.y = rampCheck.height;
        this.pitch = -rampCheck.slope;
        this.isAirborne = false;
        this.verticalVelocity = this.currentSpeed * Math.sin(rampCheck.slope);
      } else if (surfaceHeight > 0.05) {
        this.position.y = surfaceHeight;
        this.verticalVelocity = 0;
        this.isAirborne = false;

        if (flyoverInfo && flyoverInfo.type === 'ramp') {
          const r = flyoverInfo.ramp;
          const deltaH = r.endHeight - r.startHeight;
          const deltaDist = r.endCoord - r.startCoord;
          const rampAngle = Math.atan2(deltaH, Math.abs(deltaDist));
          const fwdDot = r.axis === 'X' ? Math.sin(this.yaw) : Math.cos(this.yaw);
          const slopeDir = (deltaDist > 0 ? 1 : -1) * (deltaH > 0 ? 1 : -1);
          const targetPitch = -rampAngle * fwdDot * slopeDir * 0.7;
          this.pitch += (targetPitch - this.pitch) * Math.min(1, dt * 10);
        } else {
          this.pitch *= Math.max(0, 1 - 6 * dt);
        }
      } else if (this.isAirborne || this.position.y > surfaceHeight + 0.05) {
        this.isAirborne = true;
        this.verticalVelocity -= this.gravity * dt;
        this.position.y += this.verticalVelocity * dt;

        const roadFloor = Math.max(0.04, surfaceHeight);
        if (this.position.y <= roadFloor) {
          this.position.y = roadFloor;
          this.verticalVelocity = 0;
          this.isAirborne = false;
          this.pitch = 0;
        }
      } else {
        this.position.y = Math.max(0.04, surfaceHeight);
        this.pitch *= Math.max(0, 1 - 6 * dt);
      }

      // Flyover safety constraint
      let constrainedX = proposedX;
      let constrainedZ = proposedZ;
      if (this.physicsWorld.constrainToFlyover && (this.position.y > 1.0 || surfaceHeight > 1.0)) {
        const flyoverConstraint = this.physicsWorld.constrainToFlyover(proposedX, proposedZ, this.position.y, this.radius);
        constrainedX = flyoverConstraint.x;
        constrainedZ = flyoverConstraint.z;
        if (flyoverConstraint.constrained) {
          const nx = flyoverConstraint.normalX || 0;
          const nz = flyoverConstraint.normalZ || 0;
          const dot = fwdX * nx + fwdZ * nz;
          if (dot < 0) {
            const cross = fwdX * nz - fwdZ * nx;
            this.yaw += cross * dt * 4.0;
            this.currentSpeed *= 0.96;
          }
        }
      }

      // Obstacle collision resolution
      const resolved = this.resolveCollisions(constrainedX, constrainedZ);
      this.position.x = resolved.x;
      this.position.z = resolved.z;

      if (resolved.collided) {
        const impactSpeed = Math.abs(this.currentSpeed);
        if (impactSpeed > 2.5 && this.audioManager) {
          this.audioManager.playImpact(Math.min(1.4, impactSpeed / 12));
        }
        this.currentSpeed *= 0.35;
      }

      // 4. Audio Engine sound scaling
      const speedFraction = Math.abs(this.currentSpeed) / this.maxSpeed;
      if (this.audioManager) {
        this.audioManager.updateEngine(speedFraction);
        if (input.isDown('KeyH')) {
          this.audioManager.playHonk();
        }
      }

      // 5. Bruno Simon Toy-Car Suspension Dynamics
      // Chassis Roll: leans dynamically into/out of turns
      const speedRatio = Math.min(1.0, Math.abs(this.currentSpeed) / 16.0);
      const targetRoll = -this.steerAngle * speedRatio * 0.26;
      this.chassisRoll += (targetRoll - this.chassisRoll) * Math.min(1, dt * 10.0);

      // Chassis Pitch: squat on acceleration, dive on braking
      let targetPitchOffset = 0;
      if (fwdInput > 0 && Math.abs(this.currentSpeed) < topSpeed) {
        targetPitchOffset = 0.055 * (boost ? 1.5 : 1.0);
      } else if (fwdInput < 0 || handbrake) {
        targetPitchOffset = -0.085;
      }
      this.chassisPitch += (targetPitchOffset - this.chassisPitch) * Math.min(1, dt * 12.0);

      // 6. Antenna Bobble Spring Simulation
      // Antenna reacts to vehicle longitudinal & lateral G-forces
      const targetAntennaX = -this.steerAngle * speedRatio * 0.45;
      const targetAntennaZ = (fwdInput > 0 ? 0.35 : (fwdInput < 0 ? -0.4 : 0));
      this.antennaVelX += (targetAntennaX - this.antennaSwayX) * 35.0 * dt;
      this.antennaVelZ += (targetAntennaZ - this.antennaSwayZ) * 35.0 * dt;
      this.antennaVelX *= Math.max(0, 1 - 8.0 * dt);
      this.antennaVelZ *= Math.max(0, 1 - 8.0 * dt);
      this.antennaSwayX += this.antennaVelX * dt;
      this.antennaSwayZ += this.antennaVelZ * dt;

      if (this.antennaMast) {
        this.antennaMast.rotation.set(this.antennaSwayZ, 0, this.antennaSwayX);
      }

      // 7. Skidmarks & Tire Smoke on drift / hard cornering
      if (this.skidSystem) {
        const isHardCornering = Math.abs(this.steerAngle) > 0.22 && Math.abs(this.currentSpeed) > 8.0;
        const isDrifting = handbrake && Math.abs(this.currentSpeed) > 3.0;
        if (isDrifting || isHardCornering) {
          const rearLeftWorld = new THREE.Vector3(-1.12, 0.05, -1.25)
            .applyAxisAngle(new THREE.Vector3(0, 1, 0), this.yaw)
            .add(this.position);
          const rearRightWorld = new THREE.Vector3(1.12, 0.05, -1.25)
            .applyAxisAngle(new THREE.Vector3(0, 1, 0), this.yaw)
            .add(this.position);
          const alpha = isDrifting ? 0.95 : 0.65;
          this.skidSystem.addSkid(rearLeftWorld, rearRightWorld, alpha);
          this.skidSystem.emitSmoke(rearLeftWorld);
        } else {
          this.skidSystem.resetCurrentTrack();
        }
      }
    } else {
      this.chassisRoll *= Math.max(0, 1 - 8 * dt);
      this.chassisPitch *= Math.max(0, 1 - 8 * dt);
    }

    this.speed = Math.abs(this.currentSpeed);
    this.speedKmh = Math.round(this.speed * 3.6);

    // Sync mesh transform
    this.mesh.position.copy(this.position);
    this.mesh.rotation.y = this.yaw;

    // Apply bouncy suspension roll and pitch to the body mesh
    if (this.bodyMesh) {
      this.bodyMesh.rotation.set(this.pitch + this.chassisPitch, 0, this.chassisRoll);
    }

    // Sync official GLTF model components if loaded
    if (this.loadedAntenna) {
      this.loadedAntenna.rotation.set(this.antennaSwayZ, 0, this.antennaSwayX);
    }
    if (this.loadedHeadlights) {
      this.loadedHeadlights.visible = this.headlightsOn;
    }
    if (this.loadedStopLights) {
      const isBraking = isPlayerControlling && (input.getForward() < 0 || input.isDown('Space'));
      this.loadedStopLights.visible = isBraking;
    }

    // Wheel spin & steering kinematics
    const wheelSpin = (this.currentSpeed * dt) / this.wheelRadius;

    // Front wheels steer with steerAngle
    this.wheelFL.rotation.y = this.steerAngle;
    this.wheelFR.rotation.y = Math.PI + this.steerAngle;

    // Spin individual wheel hubs
    const flSpin = this.wheelFL.getObjectByName('spinPivot');
    const frSpin = this.wheelFR.getObjectByName('spinPivot');
    const rlSpin = this.wheelRL.getObjectByName('spinPivot');
    const rrSpin = this.wheelRR.getObjectByName('spinPivot');

    if (flSpin) flSpin.rotation.x += wheelSpin;
    if (frSpin) frSpin.rotation.x -= wheelSpin;
    if (rlSpin) rlSpin.rotation.x += wheelSpin;
    if (rrSpin) rrSpin.rotation.x -= wheelSpin;

    // Ground shadow follows car
    if (this.shadow) {
      this.shadow.position.set(this.position.x, this.position.y + 0.03, this.position.z);
      this.shadow.rotation.z = -this.yaw;
      const shadowScale = Math.max(0.4, 1.0 - (this.position.y * 0.15));
      this.shadow.scale.set(shadowScale, shadowScale, shadowScale);
    }
  }

  checkRamps(x, z) {
    const ramps = this.physicsWorld.ramps || [];
    for (const r of ramps) {
      const dx = x - r.x;
      const dz = z - r.z;

      if (r.rotY === 0) {
        if (Math.abs(dx) <= r.width / 2 && dz >= -r.length / 2 && dz <= r.length / 2) {
          const t = (dz + r.length / 2) / r.length;
          const h = t * r.height;
          const slope = Math.atan2(r.height, r.length);
          return { onRamp: true, height: h, slope };
        }
      } else {
        if (Math.abs(dz) <= r.width / 2 && dx >= -r.length / 2 && dx <= r.length / 2) {
          const t = (dx + r.length / 2) / r.length;
          const h = t * r.height;
          const slope = Math.atan2(r.height, r.length);
          return { onRamp: true, height: h, slope };
        }
      }
    }
    return { onRamp: false, height: 0, slope: 0 };
  }

  resolveCollisions(x, z) {
    if (this.physicsWorld && typeof this.physicsWorld.resolveSphereCollision === 'function') {
      return this.physicsWorld.resolveSphereCollision(x, this.position.y + 0.45, z, this.radius);
    }
    return { x, z, collided: false, isTree: false };
  }

  getExitPosition() {
    const leftX = -Math.cos(this.yaw) * 2.2;
    const leftZ = Math.sin(this.yaw) * 2.2;
    return new THREE.Vector3(this.position.x + leftX, this.position.y, this.position.z + leftZ);
  }
}
