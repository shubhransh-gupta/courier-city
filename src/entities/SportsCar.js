import * as THREE from 'three';

/**
 * SportsCar: Dangerous High-Performance Supercars & Luxury Beasts
 * Models:
 * - 'BUGATTI_VEYRON': French hypercar in two-tone Black & French Blue, quad-turbo W16, horseshoe chrome grille, active carbon rear wing, 210 km/h top speed.
 * - 'ASTON_MARTIN_DBS': British exotic grand tourer in British Racing Green or Silver Birch, wide aggressive slatted grille, swan doors styling, sculpted bonnet vents.
 * - 'MERCEDES_AMG_GT': German sports beast in Obsidian Black / Solarbeam Yellow, Panamericana vertical chrome grille, long muscular bonnet, AMG quad exhausts.
 */
export class SportsCar {
  constructor(scene, physicsWorld, audioManager, initialPos = new THREE.Vector3(0, 0, 0), modelType = 'BUGATTI_VEYRON') {
    this.scene = scene;
    this.physicsWorld = physicsWorld;
    this.audioManager = audioManager;
    this.modelType = modelType;
    this.color = (modelType === 'BUGATTI_VEYRON') ? 0x0284c7 : ((modelType === 'ASTON_MARTIN_DBS') ? 0x065f46 : 0xeab308);
    this.isSportsCar = true;

    // Movement state
    this.position = new THREE.Vector3(initialPos.x, 0, initialPos.z);
    this.velocity = new THREE.Vector3(0, 0, 0);
    this.yaw = 0;
    this.pitch = 0;
    this.roll = 0;
    this.currentSpeed = 0;
    this.speed = 0;
    this.speedKmh = 0;

    // Vertical physics
    this.verticalVelocity = 0;
    this.isAirborne = false;
    this.gravity = 25.0;

    // Hypercar / Supercar specs: brutal acceleration, razor-sharp downforce, drifting
    if (modelType === 'BUGATTI_VEYRON') {
      this.carName = 'Bugatti Veyron 16.4';
      this.maxSpeed = 48;       // ~172 km/h
      this.boostMaxSpeed = 62;  // ~223 km/h hypercar velocity
      this.acceleration = 36;   // 0-100 in 2.5s feel
      this.braking = 46;
      this.turnRate = 3.2;
      this.friction = 6.2;
      this.radius = 1.35;
    } else if (modelType === 'ASTON_MARTIN_DBS') {
      this.carName = 'Aston Martin DBS Superleggera';
      this.maxSpeed = 42;       // ~150 km/h
      this.boostMaxSpeed = 54;  // ~194 km/h
      this.acceleration = 32;
      this.braking = 42;
      this.turnRate = 3.4;
      this.friction = 5.8;
      this.radius = 1.35;
    } else { // MERCEDES_AMG_GT
      this.carName = 'Mercedes-AMG GT Black Series';
      this.maxSpeed = 40;       // ~144 km/h
      this.boostMaxSpeed = 52;  // ~187 km/h
      this.acceleration = 34;
      this.braking = 44;
      this.turnRate = 3.5;
      this.friction = 6.0;
      this.radius = 1.35;
    }

    this.reverseMaxSpeed = 14;
    this.steerAngle = 0;
    this.maxSteerAngle = 0.52;
    this.headlightsOn = false;

    this.initMesh();
  }

  initMesh() {
    this.mesh = new THREE.Group();
    this.mesh.position.copy(this.position);

    // Common High-End Automotive Materials
    const darkInteriorMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.8 });
    const chromeMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, metalness: 0.95, roughness: 0.1 });
    const carbonMat = new THREE.MeshStandardMaterial({ color: 0x171717, roughness: 0.4, metalness: 0.6 });
    const glassMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.08, metalness: 0.9, transparent: true, opacity: 0.85 });
    const headlampGlowMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const tailGlowMat = new THREE.MeshBasicMaterial({ color: 0xef4444 });
    const brakeCaliperMat = new THREE.MeshStandardMaterial({ color: 0xef4444, roughness: 0.3 });
    const tireMat = new THREE.MeshStandardMaterial({ color: 0x141414, roughness: 0.9 });
    const rimMat = new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.85, roughness: 0.2 });

    if (this.modelType === 'BUGATTI_VEYRON') {
      // Iconic Two-Tone: French Racing Blue with Obsidian Black flanks
      const primaryBlue = new THREE.MeshStandardMaterial({ color: 0x0284c7, metalness: 0.75, roughness: 0.22 });
      const secondaryBlack = new THREE.MeshStandardMaterial({ color: 0x090d16, metalness: 0.8, roughness: 0.18 });

      // 1. Low sculpted wide body (Length 4.6m, Width 2.25m, Height 0.48m)
      const lowerBody = new THREE.Mesh(new THREE.BoxGeometry(2.25, 0.48, 4.6), secondaryBlack);
      lowerBody.position.y = 0.4;
      lowerBody.castShadow = true;
      this.mesh.add(lowerBody);

      // Central French Blue hood & roof curve
      const centerSpine = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.52, 4.3), primaryBlue);
      centerSpine.position.set(0, 0.52, -0.1);
      this.mesh.add(centerSpine);

      // Curved Teardrop Greenhouse (Cockpit)
      const cockpit = new THREE.Mesh(new THREE.BoxGeometry(1.65, 0.56, 2.3), secondaryBlack);
      cockpit.position.set(0, 0.96, -0.2);
      cockpit.castShadow = true;
      this.mesh.add(cockpit);

      // Windshield & Fastback Rear Glass
      const windshield = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.54, 0.06), glassMat);
      windshield.position.set(0, 0.96, 0.96);
      windshield.rotation.x = 0.52;
      const rearGlass = new THREE.Mesh(new THREE.BoxGeometry(1.45, 0.48, 0.06), glassMat);
      rearGlass.position.set(0, 0.95, -1.35);
      rearGlass.rotation.x = -0.48;
      this.mesh.add(windshield, rearGlass);

      // Signature Bugatti Horseshoe Chrome Grille
      const horseshoe = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.38, 0.12, 16, 1, false, 0, Math.PI), chromeMat);
      horseshoe.rotation.z = Math.PI;
      horseshoe.rotation.x = Math.PI / 2;
      horseshoe.position.set(0, 0.48, 2.31);
      const horseshoeFill = new THREE.Mesh(new THREE.BoxGeometry(0.72, 0.4, 0.08), carbonMat);
      horseshoeFill.position.set(0, 0.32, 2.31);
      this.mesh.add(horseshoe, horseshoeFill);

      // Dual Chrome Engine Air Intake Snorkels on roof (W16 quad-turbo cooling)
      [-0.45, 0.45].forEach(sx => {
        const snorkel = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.22, 0.8, 10), chromeMat);
        snorkel.rotation.x = Math.PI / 2 - 0.25;
        snorkel.position.set(sx, 1.25, -0.7);
        this.mesh.add(snorkel);
      });

      // Active Carbon Rear Wing
      const wing = new THREE.Mesh(new THREE.BoxGeometry(1.9, 0.06, 0.4), carbonMat);
      wing.position.set(0, 1.05, -2.15);
      const wingPostL = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.35, 0.1), carbonMat);
      wingPostL.position.set(-0.6, 0.9, -2.15);
      const wingPostR = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.35, 0.1), carbonMat);
      wingPostR.position.set(0.6, 0.9, -2.15);
      this.mesh.add(wing, wingPostL, wingPostR);

      // Headlights & Tail Quad Lights
      [-0.78, 0.78].forEach(hx => {
        const headlamp = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.12, 0.06), headlampGlowMat);
        headlamp.position.set(hx, 0.52, 2.29);
        const tailCircle = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 0.08, 12), tailGlowMat);
        tailCircle.rotation.x = Math.PI / 2;
        tailCircle.position.set(hx, 0.58, -2.31);
        this.mesh.add(headlamp, tailCircle);
      });

    } else if (this.modelType === 'ASTON_MARTIN_DBS') {
      // British Racing Green with Satin Aluminum accents
      const astonGreen = new THREE.MeshStandardMaterial({ color: 0x064e3b, metalness: 0.82, roughness: 0.24 });

      // Sculpted Muscular Body
      const body = new THREE.Mesh(new THREE.BoxGeometry(2.18, 0.5, 4.7), astonGreen);
      body.position.y = 0.42;
      body.castShadow = true;
      this.mesh.add(body);

      // Long aggressive hood with twin heat extraction vents
      const hood = new THREE.Mesh(new THREE.BoxGeometry(1.95, 0.2, 2.0), astonGreen);
      hood.position.set(0, 0.65, 1.2);
      hood.rotation.x = -0.06;
      this.mesh.add(hood);

      [-0.45, 0.45].forEach(vx => {
        const vent = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.04, 0.6), carbonMat);
        vent.position.set(vx, 0.76, 1.15);
        this.mesh.add(vent);
      });

      // Iconic Aston Martin Slatted Grille (Wide mouth)
      const grille = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.38, 0.06), chromeMat);
      grille.position.set(0, 0.38, 2.36);
      this.mesh.add(grille);

      // Fastback Greenhouse (Sleek British Coupe)
      const cabin = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.54, 2.2), darkInteriorMat);
      cabin.position.set(0, 0.94, -0.25);
      this.mesh.add(cabin);

      const windshield = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.54, 0.05), glassMat);
      windshield.position.set(0, 0.94, 0.86);
      windshield.rotation.x = 0.55;
      this.mesh.add(windshield);

      // Swept Integrated Ducktail Spoiler
      const ducktail = new THREE.Mesh(new THREE.BoxGeometry(1.85, 0.12, 0.3), carbonMat);
      ducktail.position.set(0, 0.78, -2.25);
      ducktail.rotation.x = 0.2;
      this.mesh.add(ducktail);

      // Sleek Slit LED Headlights
      [-0.75, 0.75].forEach(hx => {
        const headlamp = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.08, 0.06), headlampGlowMat);
        headlamp.position.set(hx, 0.58, 2.32);
        headlamp.rotation.y = (hx > 0 ? 0.2 : -0.2);
        this.mesh.add(headlamp);
      });

      // Continuous full-width LED rear light bar
      const tailBar = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.06, 0.05), tailGlowMat);
      tailBar.position.set(0, 0.68, -2.36);
      this.mesh.add(tailBar);

    } else { // MERCEDES_AMG_GT
      // Solarbeam Yellow with Matte Carbon Aerodynamics (Black Series)
      const amgYellow = new THREE.MeshStandardMaterial({ color: 0xeab308, metalness: 0.7, roughness: 0.25 });

      // Very Long Hood & Short Stubby Rear Deck (Front Mid-Engine proportions)
      const body = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.5, 4.6), amgYellow);
      body.position.y = 0.42;
      body.castShadow = true;
      this.mesh.add(body);

      // Massive Carbon Front Splitter
      const splitter = new THREE.Mesh(new THREE.BoxGeometry(2.28, 0.06, 0.5), carbonMat);
      splitter.position.set(0, 0.18, 2.35);
      this.mesh.add(splitter);

      // Panamericana Vertical Chrome Tooth Grille
      const amgGrille = new THREE.Mesh(new THREE.BoxGeometry(1.45, 0.42, 0.08), carbonMat);
      amgGrille.position.set(0, 0.44, 2.31);
      this.mesh.add(amgGrille);

      for (let i = -5; i <= 5; i++) {
        const slat = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.38, 0.09), chromeMat);
        slat.position.set(i * 0.12, 0.44, 2.32);
        this.mesh.add(slat);
      }

      // Compact Rearset Cockpit
      const cabin = new THREE.Mesh(new THREE.BoxGeometry(1.58, 0.54, 1.9), darkInteriorMat);
      cabin.position.set(0, 0.94, -0.45);
      this.mesh.add(cabin);

      const windshield = new THREE.Mesh(new THREE.BoxGeometry(1.48, 0.52, 0.05), glassMat);
      windshield.position.set(0, 0.94, 0.52);
      windshield.rotation.x = 0.56;
      this.mesh.add(windshield);

      // Huge GT3 Carbon Double-Deck Rear Wing
      const lowerWing = new THREE.Mesh(new THREE.BoxGeometry(1.9, 0.05, 0.35), carbonMat);
      lowerWing.position.set(0, 1.05, -2.05);
      const upperWing = new THREE.Mesh(new THREE.BoxGeometry(1.95, 0.05, 0.35), carbonMat);
      upperWing.position.set(0, 1.35, -2.05);

      [-0.65, 0.65].forEach(wx => {
        const strut = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.65, 0.2), carbonMat);
        strut.position.set(wx, 1.05, -2.05);
        this.mesh.add(strut);
      });
      this.mesh.add(lowerWing, upperWing);

      // AMG Quad Exhaust Tips
      [-0.55, -0.38, 0.38, 0.55].forEach(ex => {
        const pipe = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.15, 8), chromeMat);
        pipe.rotation.x = Math.PI / 2;
        pipe.position.set(ex, 0.28, -2.33);
        this.mesh.add(pipe);
      });

      // Sharp AMG LED Headlights
      [-0.76, 0.76].forEach(hx => {
        const amgLight = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.12, 0.08), headlampGlowMat);
        amgLight.position.set(hx, 0.56, 2.27);
        this.mesh.add(amgLight);
      });
    }

    // High Performance Wheels with Red Brembo Brake Calipers
    this.wheelMeshes = [];
    const wheelPositions = [
      [-1.12, 0.36, 1.45],  // FL
      [1.12, 0.36, 1.45],   // FR
      [-1.14, 0.38, -1.45], // RL (wider rear stance)
      [1.14, 0.38, -1.45]   // RR
    ];

    wheelPositions.forEach(([wx, wy, wz], idx) => {
      const wheelGroup = new THREE.Group();
      wheelGroup.position.set(wx, wy, wz);

      const isRear = wz < 0;
      const radius = isRear ? 0.40 : 0.38;
      const width = isRear ? 0.36 : 0.30;

      const tire = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, width, 16), tireMat);
      tire.rotation.z = Math.PI / 2;
      tire.castShadow = true;
      wheelGroup.add(tire);

      // Carbon-Ceramic Rim & Spokes
      const rim = new THREE.Mesh(new THREE.CylinderGeometry(radius * 0.72, radius * 0.72, width + 0.02, 10), rimMat);
      rim.rotation.z = Math.PI / 2;
      wheelGroup.add(rim);

      // Red Brake Caliper peeking through
      const caliper = new THREE.Mesh(new THREE.BoxGeometry(width * 0.8, 0.15, 0.12), brakeCaliperMat);
      caliper.position.set(0, radius * 0.45, 0);
      wheelGroup.add(caliper);

      this.mesh.add(wheelGroup);
      this.wheelMeshes.push(wheelGroup);
    });

    // Dual Forward Spotlights for Night Driving
    this.leftSpot = new THREE.SpotLight(0xffffff, 0, 75, Math.PI / 5, 0.25);
    this.leftSpot.position.set(-0.75, 0.55, 2.3);
    this.leftSpotTarget = new THREE.Object3D();
    this.leftSpotTarget.position.set(-0.75, 0.1, 35);
    this.mesh.add(this.leftSpot, this.leftSpotTarget);
    this.leftSpot.target = this.leftSpotTarget;

    this.rightSpot = new THREE.SpotLight(0xffffff, 0, 75, Math.PI / 5, 0.25);
    this.rightSpot.position.set(0.75, 0.55, 2.3);
    this.rightSpotTarget = new THREE.Object3D();
    this.rightSpotTarget.position.set(0.75, 0.1, 35);
    this.mesh.add(this.rightSpot, this.rightSpotTarget);
    this.rightSpot.target = this.rightSpotTarget;

    this.mesh.userData = { vehicle: this };
    this.scene.add(this.mesh);
  }

  setHeadlights(on) {
    this.headlightsOn = on;
    const intensity = on ? 4.5 : 0;
    this.leftSpot.intensity = intensity;
    this.rightSpot.intensity = intensity;
  }

  update(dt, input, isPlayerControlling) {
    if (isPlayerControlling && input) {
      const forward = (input.isDown('KeyW') || input.isDown('ArrowUp')) ? 1 : 0;
      const reverse = (input.isDown('KeyS') || input.isDown('ArrowDown')) ? 1 : 0;
      const steerLeft = (input.isDown('KeyA') || input.isDown('ArrowLeft')) ? 1 : 0;
      const steerRight = (input.isDown('KeyD') || input.isDown('ArrowRight')) ? 1 : 0;
      const handbrake = input.isDown('Space');
      const boost = input.isDown('ShiftLeft') || input.isDown('ShiftRight');

      const throttle = forward - reverse;
      const turnInput = steerLeft - steerRight;

      const currentMax = boost ? this.boostMaxSpeed : this.maxSpeed;

      if (throttle > 0) {
        if (this.currentSpeed < 0) {
          this.currentSpeed = Math.min(0, this.currentSpeed + this.braking * dt);
        } else {
          this.currentSpeed = Math.min(currentMax, this.currentSpeed + this.acceleration * dt);
        }
      } else if (throttle < 0) {
        if (this.currentSpeed > 0) {
          this.currentSpeed = Math.max(0, this.currentSpeed - this.braking * dt);
        } else {
          this.currentSpeed = Math.max(-this.reverseMaxSpeed, this.currentSpeed - this.acceleration * 0.7 * dt);
        }
      } else {
        if (this.currentSpeed > 0) {
          this.currentSpeed = Math.max(0, this.currentSpeed - this.friction * dt);
        } else if (this.currentSpeed < 0) {
          this.currentSpeed = Math.min(0, this.currentSpeed + this.friction * dt);
        }
      }

      if (handbrake) {
        // High speed drifting with handbrake
        this.currentSpeed *= Math.max(0, 1 - 2.5 * dt);
      }

      // Steering
      const targetSteer = -turnInput * this.maxSteerAngle;
      this.steerAngle += (targetSteer - this.steerAngle) * Math.min(1, dt * 14);

      const effectiveSpeed = Math.max(Math.abs(this.currentSpeed), (throttle !== 0) ? 3.0 : 0);
      if (effectiveSpeed > 0.1) {
        const turnMult = (this.currentSpeed < -0.1) ? -1 : 1;
        const driftFactor = handbrake ? 2.2 : 1.0;
        this.yaw += this.steerAngle * this.turnRate * turnMult * driftFactor * dt;
      }

      const fwdX = Math.sin(this.yaw);
      const fwdZ = Math.cos(this.yaw);

      const proposedX = this.position.x + fwdX * this.currentSpeed * dt;
      const proposedZ = this.position.z + fwdZ * this.currentSpeed * dt;

      // Surface height check
      const surfaceHeight = this.physicsWorld.getSurfaceHeight ? this.physicsWorld.getSurfaceHeight(proposedX, proposedZ, this.position.y) : 0;
      this.position.y = surfaceHeight;
      this.pitch *= Math.max(0, 1 - 6 * dt);

      // Collision avoidance with obstacles
      let finalX = proposedX;
      let finalZ = proposedZ;
      if (this.physicsWorld && this.physicsWorld.resolveSphereCollision) {
        const resolved = this.physicsWorld.resolveSphereCollision(finalX, this.position.y + 0.45, finalZ, this.radius);
        finalX = resolved.x;
        finalZ = resolved.z;
      }

      // World bounds
      const bound = 560;
      this.position.x = Math.max(-bound, Math.min(bound, finalX));
      this.position.z = Math.max(-bound, Math.min(bound, finalZ));

      // Audio engine update
      this.speed = Math.abs(this.currentSpeed);
      this.speedKmh = Math.round(this.speed * 3.6);
      if (this.audioManager) {
        this.audioManager.updateEngine(this.speed / this.maxSpeed, throttle !== 0);
      }

      // Body roll during high-g cornering
      const targetRoll = -this.steerAngle * (this.currentSpeed / this.maxSpeed) * 0.18;
      this.roll += (targetRoll - this.roll) * Math.min(1, dt * 8);

      // Spin wheels
      const wheelCircumference = Math.PI * 0.78;
      const wheelRotDelta = (this.currentSpeed * dt) / wheelCircumference * Math.PI * 2;
      this.wheelMeshes.forEach((w, i) => {
        w.children[0].rotation.x += wheelRotDelta;
        // Steer front wheels
        if (i < 2) {
          w.rotation.y = this.steerAngle;
        }
      });
    }

    // Update Three.js mesh transform
    this.mesh.position.copy(this.position);
    this.mesh.rotation.set(0, 0, 0);
    this.mesh.rotation.y = this.yaw;
    this.mesh.rotation.x = this.pitch;
    this.mesh.rotation.z = this.roll;
  }

  getExitPosition() {
    const rightX = Math.cos(this.yaw) * 1.8;
    const rightZ = -Math.sin(this.yaw) * 1.8;
    return new THREE.Vector3(this.position.x + rightX, this.position.y, this.position.z + rightZ);
  }
}
