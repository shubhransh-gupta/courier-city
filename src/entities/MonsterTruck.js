import * as THREE from 'three';

/**
 * MonsterTruck: Badass 4x4 Off-Road Titan ("THE CRUSHER")
 * Massive 66-inch terra tires, raised roll-cage chassis, dual roof spotlights,
 * heavy shock absorbers, and raw crushing torque capable of driving over curbs!
 */
export class MonsterTruck {
  constructor(scene, physicsWorld, audioManager, initialPos = new THREE.Vector3(0, 0, 0)) {
    this.scene = scene;
    this.physicsWorld = physicsWorld;
    this.audioManager = audioManager;
    this.isMonsterTruck = true;
    this.color = 0xdc2626;
    this.carName = 'Titan 4x4 Monster Truck';

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

    // Heavy monster truck specs: colossal torque, unstoppable momentum
    this.maxSpeed = 34;       // ~122 km/h
    this.boostMaxSpeed = 44;
    this.acceleration = 28;
    this.reverseMaxSpeed = 12;
    this.braking = 36;
    this.friction = 5.0;
    this.steerAngle = 0;
    this.maxSteerAngle = 0.50;
    this.turnRate = 2.8;
    this.radius = 1.6;
    this.headlightsOn = false;

    this.initMesh();
  }

  initMesh() {
    this.mesh = new THREE.Group();
    this.mesh.position.copy(this.position);

    const bodyMat = new THREE.MeshStandardMaterial({
      color: 0x991b1b, // Aggressive Dark Crimson Red
      metalness: 0.65,
      roughness: 0.3
    });

    const frameMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      metalness: 0.8,
      roughness: 0.3
    });

    const chromeMat = new THREE.MeshStandardMaterial({
      color: 0xf1f5f9,
      metalness: 0.95,
      roughness: 0.1
    });

    const springMat = new THREE.MeshStandardMaterial({
      color: 0xfacc15, // Bright yellow heavy coilover springs
      roughness: 0.3
    });

    const tireMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.95
    });

    const rimMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7, // Electric blue beadlock rims
      metalness: 0.7,
      roughness: 0.3
    });

    const glassMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.1,
      metalness: 0.9,
      transparent: true,
      opacity: 0.85
    });

    // 1. Raised Tubular Roll Cage & Chassis Subframe (Y = 0.7m to 1.4m)
    const subframe = new THREE.Mesh(new THREE.BoxGeometry(2.1, 0.4, 3.8), frameMat);
    subframe.position.y = 1.0;
    subframe.castShadow = true;
    this.mesh.add(subframe);

    // Heavy Drive Shafts & Differentials
    const driveShaft = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 3.2, 8), chromeMat);
    driveShaft.rotation.x = Math.PI / 2;
    driveShaft.position.y = 0.8;
    this.mesh.add(driveShaft);

    // 4 Heavy Coilover Suspension Struts (Yellow Springs)
    [
      [-1.1, 0.9, 1.4], [1.1, 0.9, 1.4],
      [-1.1, 0.9, -1.4], [1.1, 0.9, -1.4]
    ].forEach(([sx, sy, sz]) => {
      const strut = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 0.7, 8), springMat);
      strut.position.set(sx, sy, sz);
      this.mesh.add(strut);
    });

    // 2. High-Perched Custom Pickup Truck Body (Y = 1.3m to 2.3m)
    const cab = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.8, 2.2), bodyMat);
    cab.position.set(0, 1.7, -0.2);
    cab.castShadow = true;
    this.mesh.add(cab);

    // Muscular Hood
    const hood = new THREE.Mesh(new THREE.BoxGeometry(2.15, 0.65, 1.6), bodyMat);
    hood.position.set(0, 1.6, 1.35);
    hood.castShadow = true;
    this.mesh.add(hood);

    // Open Pickup Truck Bed
    const bed = new THREE.Mesh(new THREE.BoxGeometry(2.15, 0.5, 1.4), bodyMat);
    bed.position.set(0, 1.5, -1.75);
    this.mesh.add(bed);

    // Chrome Rollbar in truck bed with 4 Fog Lights
    const rollbar = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 2.1, 6), chromeMat);
    rollbar.rotation.z = Math.PI / 2;
    rollbar.position.set(0, 2.35, -1.1);
    this.mesh.add(rollbar);

    [-0.6, -0.2, 0.2, 0.6].forEach(fx => {
      const fogLight = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.1, 8), chromeMat);
      fogLight.rotation.x = Math.PI / 2;
      fogLight.position.set(fx, 2.45, -1.1);
      const fogLens = new THREE.Mesh(new THREE.CircleGeometry(0.1, 8), new THREE.MeshBasicMaterial({ color: 0xfacc15 }));
      fogLens.position.set(fx, 2.45, -1.045);
      this.mesh.add(fogLight, fogLens);
    });

    // Massive Front Push Bumper (BULLBAR)
    const bullbar = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.6, 0.35), chromeMat);
    bullbar.position.set(0, 1.25, 2.3);
    this.mesh.add(bullbar);

    // Windshield & Windows
    const windshield = new THREE.Mesh(new THREE.BoxGeometry(1.95, 0.62, 0.05), glassMat);
    windshield.position.set(0, 1.82, 0.85);
    windshield.rotation.x = 0.35;
    this.mesh.add(windshield);

    // Twin High Vertical Chrome Exhaust Stacks
    [-0.95, 0.95].forEach(ex => {
      const stack = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 1.4, 8), chromeMat);
      stack.position.set(ex, 2.35, -0.9);
      this.mesh.add(stack);
    });

    // 3. Four Massive 66-Inch Terra Monster Tires (Radius = 0.72m, Width = 0.65m)
    this.wheelMeshes = [];
    const tirePositions = [
      [-1.42, 0.72, 1.45],  // FL
      [1.42, 0.72, 1.45],   // FR
      [-1.42, 0.72, -1.45], // RL
      [1.42, 0.72, -1.45]   // RR
    ];

    tirePositions.forEach(([wx, wy, wz], idx) => {
      const wheelGroup = new THREE.Group();
      wheelGroup.position.set(wx, wy, wz);

      // Deep Tread Terra Tire
      const tireGeo = new THREE.CylinderGeometry(0.72, 0.72, 0.65, 16);
      const tire = new THREE.Mesh(tireGeo, tireMat);
      tire.rotation.z = Math.PI / 2;
      tire.castShadow = true;
      wheelGroup.add(tire);

      // Aggressive Deep Lug Treads around perimeter
      for (let t = 0; t < 12; t++) {
        const tread = new THREE.Mesh(new THREE.BoxGeometry(0.66, 0.08, 0.16), tireMat);
        tread.position.set(0, Math.sin((t * Math.PI * 2) / 12) * 0.73, Math.cos((t * Math.PI * 2) / 12) * 0.73);
        wheelGroup.add(tread);
      }

      // Electric Blue Beadlock Rim
      const rim = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.42, 0.68, 10), rimMat);
      rim.rotation.z = Math.PI / 2;
      wheelGroup.add(rim);

      const hubCap = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.72, 8), chromeMat);
      hubCap.rotation.z = Math.PI / 2;
      wheelGroup.add(hubCap);

      this.mesh.add(wheelGroup);
      this.wheelMeshes.push(wheelGroup);
    });

    // Heavy Spotlights
    this.leftSpot = new THREE.SpotLight(0xffffff, 0, 80, Math.PI / 4, 0.3);
    this.leftSpot.position.set(-0.8, 1.5, 2.3);
    this.leftSpotTarget = new THREE.Object3D();
    this.leftSpotTarget.position.set(-0.8, 0.1, 35);
    this.mesh.add(this.leftSpot, this.leftSpotTarget);
    this.leftSpot.target = this.leftSpotTarget;

    this.rightSpot = new THREE.SpotLight(0xffffff, 0, 80, Math.PI / 4, 0.3);
    this.rightSpot.position.set(0.8, 1.5, 2.3);
    this.rightSpotTarget = new THREE.Object3D();
    this.rightSpotTarget.position.set(0.8, 0.1, 35);
    this.mesh.add(this.rightSpot, this.rightSpotTarget);
    this.rightSpot.target = this.rightSpotTarget;

    this.mesh.userData = { vehicle: this };
    this.scene.add(this.mesh);
  }

  setHeadlights(on) {
    this.headlightsOn = on;
    const intensity = on ? 5.0 : 0;
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
          this.currentSpeed = Math.max(-this.reverseMaxSpeed, this.currentSpeed - this.acceleration * 0.6 * dt);
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

      const effectiveSpeed = Math.max(Math.abs(this.currentSpeed), (throttle !== 0) ? 3.0 : 0);
      if (effectiveSpeed > 0.1) {
        const turnMult = (this.currentSpeed < -0.1) ? -1 : 1;
        const driftFactor = handbrake ? 1.8 : 1.0;
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

      // Collision avoidance
      let finalX = proposedX;
      let finalZ = proposedZ;
      if (this.physicsWorld && this.physicsWorld.resolveSphereCollision) {
        const resolved = this.physicsWorld.resolveSphereCollision(finalX, this.position.y + 0.6, finalZ, this.radius);
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

      // Subtle suspension body roll & bounce
      const targetRoll = -this.steerAngle * (this.currentSpeed / this.maxSpeed) * 0.25;
      this.roll += (targetRoll - this.roll) * Math.min(1, dt * 8);

      // Spin wheels
      const wheelCircumference = Math.PI * 1.44;
      const wheelRotDelta = (this.currentSpeed * dt) / wheelCircumference * Math.PI * 2;
      this.wheelMeshes.forEach((w, i) => {
        w.children[0].rotation.x += wheelRotDelta;
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
    const rightX = Math.cos(this.yaw) * 2.2;
    const rightZ = -Math.sin(this.yaw) * 2.2;
    return new THREE.Vector3(this.position.x + rightX, this.position.y, this.position.z + rightZ);
  }
}
