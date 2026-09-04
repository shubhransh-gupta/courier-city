import * as THREE from 'three';

export class Vehicle {
  constructor(scene, physicsWorld, audioManager, initialPos = new THREE.Vector3(0, 0, 0), color = 0xff4757) {
    this.scene = scene;
    this.physicsWorld = physicsWorld;
    this.audioManager = audioManager;
    this.color = color;

    // Movement state
    this.position = new THREE.Vector3(initialPos.x, 0, initialPos.z);
    this.velocity = new THREE.Vector3(0, 0, 0);
    this.yaw = 0;
    this.pitch = 0;
    this.roll = 0;
    this.currentSpeed = 0;
    this.speed = 0;
    this.speedKmh = 0;

    // Vertical physics (Gravity & Jump Ramps)
    this.verticalVelocity = 0;
    this.isAirborne = false;
    this.gravity = 25.0;

    // Handling specs
    this.maxSpeed = 28; // ~100 km/h
    this.boostMaxSpeed = 42; // ~150 km/h
    this.acceleration = 22;
    this.reverseMaxSpeed = 12;
    this.braking = 32;
    this.friction = 6.0;
    this.steerAngle = 0;
    this.maxSteerAngle = 0.55;
    this.turnRate = 2.6;
    this.headlightsOn = false;

    this.radius = 1.35;

    this.initMesh();
  }

  initMesh() {
    this.mesh = new THREE.Group();
    this.mesh.position.copy(this.position);

    // High quality automotive styling (Aerodynamic sports sedan)
    const bodyMat = new THREE.MeshStandardMaterial({
      color: this.color,
      metalness: 0.55,
      roughness: 0.28
    });
    const roofMat = new THREE.MeshStandardMaterial({
      color: 0x111625,
      metalness: 0.7,
      roughness: 0.2
    });
    const darkMat = new THREE.MeshStandardMaterial({
      color: 0x1e272e,
      roughness: 0.6
    });
    const chromeMat = new THREE.MeshStandardMaterial({
      color: 0xf1f2f6,
      metalness: 0.95,
      roughness: 0.1
    });
    const glassMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.1,
      metalness: 0.9,
      transparent: true,
      opacity: 0.85
    });
    const lightMat = new THREE.MeshBasicMaterial({ color: 0xfffa65 });
    const tailLightMat = new THREE.MeshBasicMaterial({ color: 0xff2e2e });
    const tireMat = new THREE.MeshStandardMaterial({ color: 0x1e2022, roughness: 0.9 });
    const rimMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, metalness: 0.85, roughness: 0.2 });

    // 1. Sleek sculpted body
    const bodyGeo = new THREE.BoxGeometry(2.1, 0.55, 4.4);
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    body.position.y = 0.5;
    body.castShadow = true;
    body.receiveShadow = true;
    this.mesh.add(body);

    // Front splitter
    const splitter = new THREE.Mesh(new THREE.BoxGeometry(2.15, 0.08, 0.4), darkMat);
    splitter.position.set(0, 0.24, 2.15);
    this.mesh.add(splitter);

    // Hood scoop / slope
    const hoodGeo = new THREE.BoxGeometry(1.9, 0.35, 1.4);
    const hood = new THREE.Mesh(hoodGeo, bodyMat);
    hood.position.set(0, 0.62, 1.25);
    hood.rotation.x = -0.08;
    this.mesh.add(hood);

    // 2. Aerodynamic Cabin
    const cabinGeo = new THREE.BoxGeometry(1.68, 0.62, 2.3);
    const cabin = new THREE.Mesh(cabinGeo, roofMat);
    cabin.position.set(0, 1.05, -0.2);
    cabin.castShadow = true;
    this.mesh.add(cabin);

    // Front Windshield (Sleek angle)
    const frontWindshield = new THREE.Mesh(new THREE.BoxGeometry(1.55, 0.58, 0.05), glassMat);
    frontWindshield.position.set(0, 1.05, 0.98);
    frontWindshield.rotation.x = 0.45;
    this.mesh.add(frontWindshield);

    // Rear Windshield
    const rearWindshield = new THREE.Mesh(new THREE.BoxGeometry(1.55, 0.58, 0.05), glassMat);
    rearWindshield.position.set(0, 1.05, -1.38);
    rearWindshield.rotation.x = -0.45;
    this.mesh.add(rearWindshield);

    // Side Windows
    const sideWinGeo = new THREE.BoxGeometry(0.05, 0.42, 1.6);
    const leftSideWin = new THREE.Mesh(sideWinGeo, glassMat);
    leftSideWin.position.set(-0.85, 1.05, -0.2);
    const rightSideWin = new THREE.Mesh(sideWinGeo, glassMat);
    rightSideWin.position.set(0.85, 1.05, -0.2);
    this.mesh.add(leftSideWin, rightSideWin);

    // Side Mirrors
    const mirrorGeo = new THREE.BoxGeometry(0.28, 0.16, 0.12);
    const leftMirror = new THREE.Mesh(mirrorGeo, bodyMat);
    leftMirror.position.set(-0.98, 0.95, 0.85);
    const rightMirror = new THREE.Mesh(mirrorGeo, bodyMat);
    rightMirror.position.set(0.98, 0.95, 0.85);
    this.mesh.add(leftMirror, rightMirror);

    // 3. Front Grille & Sporty Spoiler
    const spoilerGeo = new THREE.BoxGeometry(1.8, 0.08, 0.35);
    const spoiler = new THREE.Mesh(spoilerGeo, darkMat);
    spoiler.position.set(0, 1.05, -2.2);
    this.mesh.add(spoiler);

    const spoilerWingLeft = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.28, 0.1), darkMat);
    spoilerWingLeft.position.set(-0.6, 0.9, -2.2);
    const spoilerWingRight = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.28, 0.1), darkMat);
    spoilerWingRight.position.set(0.6, 0.9, -2.2);
    this.mesh.add(spoilerWingLeft, spoilerWingRight);

    // Quad chrome exhaust tips
    [-0.55, -0.35, 0.35, 0.55].forEach(ex => {
      const exhaust = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.3, 8), chromeMat);
      exhaust.rotation.x = Math.PI / 2;
      exhaust.position.set(ex, 0.34, -2.25);
      this.mesh.add(exhaust);
    });

    // 4. Headlights (Angled modern LEDs)
    const headlightGeo = new THREE.BoxGeometry(0.42, 0.15, 0.06);
    const leftHeadlight = new THREE.Mesh(headlightGeo, lightMat);
    leftHeadlight.position.set(-0.72, 0.58, 2.21);
    leftHeadlight.rotation.y = -0.15;
    const rightHeadlight = new THREE.Mesh(headlightGeo, lightMat);
    rightHeadlight.position.set(0.72, 0.58, 2.21);
    rightHeadlight.rotation.y = 0.15;
    this.mesh.add(leftHeadlight, rightHeadlight);

    // Headlight Spotlights
    this.leftSpot = new THREE.SpotLight(0xfffa65, 0, 40, Math.PI / 5, 0.4, 1);
    this.leftSpot.position.set(-0.72, 0.58, 2.2);
    this.leftSpotTarget = new THREE.Object3D();
    this.leftSpotTarget.position.set(-0.72, 0.1, 18);
    this.mesh.add(this.leftSpot, this.leftSpotTarget);
    this.leftSpot.target = this.leftSpotTarget;

    this.rightSpot = new THREE.SpotLight(0xfffa65, 0, 40, Math.PI / 5, 0.4, 1);
    this.rightSpot.position.set(0.72, 0.58, 2.2);
    this.rightSpotTarget = new THREE.Object3D();
    this.rightSpotTarget.position.set(0.72, 0.1, 18);
    this.mesh.add(this.rightSpot, this.rightSpotTarget);
    this.rightSpot.target = this.rightSpotTarget;

    // Taillight bar
    const tailBar = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.1, 0.06), tailLightMat);
    tailBar.position.set(0, 0.62, -2.21);
    this.mesh.add(tailBar);

    // 5. Wheels
    this.frontLeftWheel = this.createWheelMesh(tireMat, rimMat);
    this.frontLeftWheel.position.set(-1.08, 0.38, 1.3);
    this.frontRightWheel = this.createWheelMesh(tireMat, rimMat);
    this.frontRightWheel.position.set(1.08, 0.38, 1.3);
    this.frontRightWheel.rotation.y = Math.PI;

    this.rearLeftWheel = this.createWheelMesh(tireMat, rimMat);
    this.rearLeftWheel.position.set(-1.08, 0.38, -1.3);
    this.rearRightWheel = this.createWheelMesh(tireMat, rimMat);
    this.rearRightWheel.position.set(1.08, 0.38, -1.3);
    this.rearRightWheel.rotation.y = Math.PI;

    this.mesh.add(this.frontLeftWheel, this.frontRightWheel, this.rearLeftWheel, this.rearRightWheel);

    // Ground shadow
    const shadowGeo = new THREE.PlaneGeometry(2.6, 5.0);
    const shadowMat = new THREE.MeshBasicMaterial({
      color: 0x1e272e,
      transparent: true,
      opacity: 0.35,
      depthWrite: false
    });
    this.shadow = new THREE.Mesh(shadowGeo, shadowMat);
    this.shadow.rotation.x = -Math.PI / 2;
    this.shadow.position.y = 0.03;
    this.scene.add(this.shadow);

    this.mesh.userData = { vehicle: this };
    this.scene.add(this.mesh);
  }

  createWheelMesh(tireMat, rimMat) {
    const group = new THREE.Group();
    const tireGeo = new THREE.CylinderGeometry(0.42, 0.42, 0.32, 16);
    tireGeo.rotateZ(Math.PI / 2);
    const tire = new THREE.Mesh(tireGeo, tireMat);
    tire.castShadow = true;
    group.add(tire);

    // Alloy rims
    const rimGeo = new THREE.CylinderGeometry(0.26, 0.26, 0.34, 8);
    rimGeo.rotateZ(Math.PI / 2);
    const rim = new THREE.Mesh(rimGeo, rimMat);
    group.add(rim);

    return group;
  }

  setHeadlights(on) {
    this.headlightsOn = on;
    const intensity = on ? 4.5 : 0;
    this.leftSpot.intensity = intensity;
    this.rightSpot.intensity = intensity;
  }

  update(dt, input, isPlayerControlling) {
    if (isPlayerControlling) {
      const fwdInput = input.getForward();
      const turnInput = input.getTurn();
      const handbrake = input.isJumping();
      const boost = input.isSprinting();

      const topSpeed = boost ? this.boostMaxSpeed : this.maxSpeed;

      // Acceleration & Braking
      if (fwdInput > 0) {
        if (this.currentSpeed < 0) {
          this.currentSpeed += this.braking * dt;
        } else if (this.currentSpeed < topSpeed) {
          this.currentSpeed += this.acceleration * (boost ? 1.6 : 1.0) * dt;
        }
      } else if (fwdInput < 0) {
        if (this.currentSpeed > 0) {
          this.currentSpeed -= this.braking * dt;
        } else if (this.currentSpeed > -this.reverseMaxSpeed) {
          this.currentSpeed -= this.acceleration * 0.75 * dt;
        }
      } else {
        if (this.currentSpeed > 0) {
          this.currentSpeed = Math.max(0, this.currentSpeed - this.friction * dt);
        } else if (this.currentSpeed < 0) {
          this.currentSpeed = Math.min(0, this.currentSpeed + this.friction * dt);
        }
      }

      if (handbrake) {
        this.currentSpeed *= Math.max(0, 1 - 3 * dt);
      }

      // Steering
      const targetSteer = -turnInput * this.maxSteerAngle;
      this.steerAngle += (targetSteer - this.steerAngle) * Math.min(1, dt * 10);

      if (Math.abs(this.currentSpeed) > 0.3) {
        const turnMult = this.currentSpeed >= 0 ? 1 : -1;
        const driftFactor = handbrake ? 1.8 : 1.0;
        this.yaw += this.steerAngle * this.turnRate * turnMult * driftFactor * dt;
      }

      // Proposed horizontal movement
      const fwdX = Math.sin(this.yaw);
      const fwdZ = Math.cos(this.yaw);

      const proposedX = this.position.x + fwdX * this.currentSpeed * dt;
      const proposedZ = this.position.z + fwdZ * this.currentSpeed * dt;

      // Check Surface / Flyover / Ramp elevation
      const surfaceHeight = this.physicsWorld.getSurfaceHeight ? this.physicsWorld.getSurfaceHeight(proposedX, proposedZ, this.position.y) : 0;

      // Check stunt ramp jump elevation
      const rampCheck = this.checkRamps(proposedX, proposedZ);

      if (rampCheck.onRamp) {
        // Car climbs up stunt ramp smoothly!
        this.position.y = rampCheck.height;
        this.pitch = -rampCheck.slope; // Tilt nose up
        this.isAirborne = false;
        this.verticalVelocity = this.currentSpeed * Math.sin(rampCheck.slope);
      } else if (surfaceHeight > 0.05) {
        // Driving on an elevated flyover or climbing a flyover ramp!
        this.position.y = surfaceHeight;
        this.verticalVelocity = 0;
        this.isAirborne = false;
        this.pitch *= Math.max(0, 1 - 6 * dt);
      } else if (this.isAirborne || this.position.y > surfaceHeight + 0.05) {
        // Airborne jump trajectory through the air!
        this.isAirborne = true;
        this.verticalVelocity -= this.gravity * dt;
        this.position.y += this.verticalVelocity * dt;

        if (this.position.y <= surfaceHeight) {
          this.position.y = surfaceHeight;
          this.verticalVelocity = 0;
          this.isAirborne = false;
          this.pitch = 0;
        }
      } else {
        this.position.y = surfaceHeight;
        this.pitch *= Math.max(0, 1 - 6 * dt);
      }

      // Obstacle collision
      const resolved = this.resolveCollisions(proposedX, proposedZ);
      this.position.x = resolved.x;
      this.position.z = resolved.z;

      if (resolved.collided) {
        this.currentSpeed *= 0.35;
      }

      // Audio engine update
      const speedFraction = Math.abs(this.currentSpeed) / this.maxSpeed;
      this.audioManager.updateEngine(speedFraction);

      if (input.isDown('KeyH')) {
        this.audioManager.playHonk();
      }
    }

    this.speed = Math.abs(this.currentSpeed);
    this.speedKmh = Math.round(this.speed * 3.6);

    // Sync mesh position & orientation
    this.mesh.position.copy(this.position);
    this.mesh.rotation.set(this.pitch, this.yaw, this.roll);

    // Wheels rotation
    const wheelSpin = (this.currentSpeed * dt) / 0.42;
    this.frontLeftWheel.rotation.x += wheelSpin;
    this.frontRightWheel.rotation.x -= wheelSpin;
    this.rearLeftWheel.rotation.x += wheelSpin;
    this.rearRightWheel.rotation.x -= wheelSpin;

    this.frontLeftWheel.rotation.y = this.steerAngle;
    this.frontRightWheel.rotation.y = Math.PI + this.steerAngle;

    if (this.shadow) {
      this.shadow.position.set(this.position.x, this.position.y + 0.03, this.position.z);
      const shadowScale = Math.max(0.4, 1.0 - (this.position.y * 0.15));
      this.shadow.scale.set(shadowScale, shadowScale, shadowScale);
    }
  }

  checkRamps(x, z) {
    const ramps = this.physicsWorld.ramps || [];
    for (const r of ramps) {
      // Check if inside ramp rectangle
      const dx = x - r.x;
      const dz = z - r.z;

      if (r.rotY === 0) {
        // Ramp along Z axis (0 to r.length)
        if (Math.abs(dx) <= r.width / 2 && dz >= -r.length / 2 && dz <= r.length / 2) {
          const t = (dz + r.length / 2) / r.length; // 0 at start to 1 at ramp peak
          const h = t * r.height;
          const slope = Math.atan2(r.height, r.length);
          return { onRamp: true, height: h, slope };
        }
      } else {
        // Ramp along X axis
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
    let finalX = x;
    let finalZ = z;
    let collided = false;

    const obstacles = this.physicsWorld.obstacles || [];
    const r = this.radius;
    const vehicleY = this.position.y;

    for (const b of obstacles) {
      if (b.isRamp) continue; // Don't block ramp entrance!

      // 3D vertical clearance: If car is completely above or below obstacle, skip horizontal collision!
      const minY = b.y - b.hy;
      const maxY = b.y + b.hy;
      if (vehicleY + 1.4 < minY || vehicleY > maxY + 0.5) {
        continue;
      }

      const closestX = Math.max(b.x - b.hx, Math.min(finalX, b.x + b.hx));
      const closestZ = Math.max(b.z - b.hz, Math.min(finalZ, b.z + b.hz));

      const dx = finalX - closestX;
      const dz = finalZ - closestZ;
      const distSq = dx * dx + dz * dz;

      if (distSq < r * r) {
        collided = true;
        const dist = Math.sqrt(distSq);
        if (dist > 0.0001) {
          const overlap = r - dist;
          finalX += (dx / dist) * overlap;
          finalZ += (dz / dist) * overlap;
        } else {
          finalX += r;
        }
      }
    }

    return { x: finalX, z: finalZ, collided };
  }

  getExitPosition() {
    const left = new THREE.Vector3(-2.4, 0, 0).applyAxisAngle(new THREE.Vector3(0, 1, 0), this.yaw);
    return new THREE.Vector3(
      this.position.x + left.x,
      this.position.y,
      this.position.z + left.z
    );
  }
}
