import * as THREE from 'three';

/**
 * Motorbike: Royal Enfield Bullet 350
 * Classic Bangalore motorbike with teardrop tank, round chrome headlight,
 * dual spoke wheels, handlebars, exhaust pipe, and realistic leaning bank angles.
 */
export class Motorbike {
  constructor(scene, physicsWorld, audioManager, initialPos = new THREE.Vector3(0, 0, 0), color = 0x1e293b) {
    this.scene = scene;
    this.physicsWorld = physicsWorld;
    this.audioManager = audioManager;
    this.color = color;
    this.isMotorbike = true;

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

    // Motorbike specific specs: fast acceleration, agile leaning, tight turning
    this.maxSpeed = 32; // ~115 km/h
    this.boostMaxSpeed = 42;
    this.acceleration = 28;
    this.reverseMaxSpeed = 6;
    this.braking = 34;
    this.friction = 5.5;
    this.steerAngle = 0;
    this.maxSteerAngle = 0.58;
    this.turnRate = 3.2;
    this.headlightsOn = false;

    this.radius = 0.9;

    this.initMesh();
  }

  initMesh() {
    this.mesh = new THREE.Group();
    this.mesh.position.copy(this.position);

    // Materials
    const tankMat = new THREE.MeshStandardMaterial({
      color: this.color, // Jet black or forest green bullet
      metalness: 0.65,
      roughness: 0.25
    });

    const engineMat = new THREE.MeshStandardMaterial({
      color: 0x475569,
      metalness: 0.85,
      roughness: 0.3
    });

    const chromeMat = new THREE.MeshStandardMaterial({
      color: 0xf1f5f9,
      metalness: 0.95,
      roughness: 0.1
    });

    const seatMat = new THREE.MeshStandardMaterial({
      color: 0x1c1917,
      roughness: 0.85
    });

    const tireMat = new THREE.MeshStandardMaterial({ color: 0x171717, roughness: 0.9 });
    const rimMat = new THREE.MeshStandardMaterial({ color: 0xcbd5e1, metalness: 0.85, roughness: 0.2 });

    // 1. Engine & Crankcase (Central Block)
    const engineBlock = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.45, 0.6), engineMat);
    engineBlock.position.set(0, 0.45, 0);
    engineBlock.castShadow = true;
    this.mesh.add(engineBlock);

    // Cylinder fins
    const cylinder = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 0.32, 10), engineMat);
    cylinder.position.set(0, 0.7, 0.08);
    this.mesh.add(cylinder);

    // Chrome Exhaust pipe running to rear
    const exhaust = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.05, 1.3, 8), chromeMat);
    exhaust.rotation.x = Math.PI / 2 - 0.08;
    exhaust.position.set(0.22, 0.26, -0.4);
    this.mesh.add(exhaust);

    // 2. Fuel Tank (Classic Teardrop)
    const tankGeo = new THREE.BoxGeometry(0.38, 0.32, 0.7);
    const tank = new THREE.Mesh(tankGeo, tankMat);
    tank.position.set(0, 0.88, 0.3);
    tank.castShadow = true;
    this.mesh.add(tank);

    // Gold pin-stripe emblem badge on tank
    [-0.2, 0.2].forEach(tx => {
      const badge = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.1, 0.2), new THREE.MeshBasicMaterial({ color: 0xf59e0b }));
      badge.position.set(tx, 0.88, 0.3);
      this.mesh.add(badge);
    });

    // 3. Contoured Dual Seat
    const seatGeo = new THREE.BoxGeometry(0.34, 0.15, 0.75);
    const seat = new THREE.Mesh(seatGeo, seatMat);
    seat.position.set(0, 0.82, -0.32);
    seat.rotation.x = 0.08;
    this.mesh.add(seat);

    // Rear grab rail
    const grabRail = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.36, 6), chromeMat);
    grabRail.position.set(0, 0.88, -0.72);
    grabRail.rotation.z = Math.PI / 2;
    this.mesh.add(grabRail);

    // 4. Front Fork & Handlebars (Steering Pivot)
    this.frontFork = new THREE.Group();
    this.frontFork.position.set(0, 0.36, 0.88);

    // Handlebars
    const handlebar = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.8, 8), chromeMat);
    handlebar.position.set(0, 0.8, 0);
    handlebar.rotation.z = Math.PI / 2;
    this.frontFork.add(handlebar);

    // Chrome Rearview Mirrors
    [-0.38, 0.38].forEach(mx => {
      const mirror = new THREE.Mesh(new THREE.CircleGeometry(0.05, 8), chromeMat);
      mirror.position.set(mx, 0.95, 0.05);
      this.frontFork.add(mirror);
    });

    // Round Bullet Headlight
    const headlampMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.14, 12), chromeMat);
    headlampMesh.rotation.x = Math.PI / 2;
    headlampMesh.position.set(0, 0.68, 0.14);
    this.frontFork.add(headlampMesh);

    const headlampLens = new THREE.Mesh(new THREE.CircleGeometry(0.11, 12), new THREE.MeshBasicMaterial({ color: 0xfffa65 }));
    headlampLens.position.set(0, 0.68, 0.215);
    this.frontFork.add(headlampLens);

    // SpotLight for Night Driving
    this.spotLight = new THREE.SpotLight(0xfffa65, 0, 50, Math.PI / 6, 0.35);
    this.spotLight.position.set(0, 0.68, 0.22);
    this.spotLightTarget = new THREE.Object3D();
    this.spotLightTarget.position.set(0, 0, 25);
    this.frontFork.add(this.spotLightTarget);
    this.spotLight.target = this.spotLightTarget;
    this.frontFork.add(this.spotLight);

    // Front Fork Tubes
    [-0.09, 0.09].forEach(fx => {
      const tube = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.75, 6), chromeMat);
      tube.position.set(fx, 0.35, 0);
      tube.rotation.x = -0.15;
      this.frontFork.add(tube);
    });

    // Front Wheel
    this.wheelMeshes = [];
    const frontWheel = this.createSpokeWheel(tireMat, rimMat, chromeMat, 0.36, 0.12);
    this.frontFork.add(frontWheel);
    this.wheelMeshes.push(frontWheel);

    this.mesh.add(this.frontFork);

    // 5. Rear Swingarm & Rear Wheel
    const rearWheel = this.createSpokeWheel(tireMat, rimMat, chromeMat, 0.36, 0.14);
    rearWheel.position.set(0, 0.36, -0.85);
    this.mesh.add(rearWheel);
    this.wheelMeshes.push(rearWheel);

    // Rear mudguard & taillight
    const mudguard = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.15, 0.5), tankMat);
    mudguard.position.set(0, 0.6, -0.85);
    this.mesh.add(mudguard);

    const taillight = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.08, 0.05), new THREE.MeshBasicMaterial({ color: 0xef4444 }));
    taillight.position.set(0, 0.58, -1.11);
    this.mesh.add(taillight);

    this.scene.add(this.mesh);
  }

  createSpokeWheel(tireMat, rimMat, chromeMat, radius, width) {
    const wheelGroup = new THREE.Group();
    const tire = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, width, 16), tireMat);
    tire.rotation.z = Math.PI / 2;
    tire.castShadow = true;
    wheelGroup.add(tire);

    const rim = new THREE.Mesh(new THREE.CylinderGeometry(radius * 0.72, radius * 0.72, width + 0.02, 12), rimMat);
    rim.rotation.z = Math.PI / 2;
    wheelGroup.add(rim);

    // Spoke cross
    const spoke = new THREE.Mesh(new THREE.BoxGeometry(width + 0.03, radius * 1.3, 0.02), chromeMat);
    wheelGroup.add(spoke);

    return wheelGroup;
  }

  setHeadlights(on) {
    this.headlightsOn = on;
    if (this.spotLight) {
      this.spotLight.intensity = on ? 2.0 : 0;
    }
  }

  update(dt, input) {
    if (input) {
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
        this.currentSpeed *= Math.max(0, 1 - 4 * dt);
      }

      // Steering & Handlebars
      const targetSteer = -turnInput * this.maxSteerAngle;
      this.steerAngle += (targetSteer - this.steerAngle) * Math.min(1, dt * 14);
      if (this.frontFork) {
        this.frontFork.rotation.y = this.steerAngle;
      }

      const isMoving = Math.abs(this.currentSpeed) > 0.08 || throttle !== 0;
      if (isMoving) {
        const turnMult = (this.currentSpeed < -0.1) ? -1 : 1;
        const driftFactor = handbrake ? 1.5 : 1.0;
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
        const resolved = this.physicsWorld.resolveSphereCollision(finalX, this.position.y + 0.4, finalZ, this.radius);
        finalX = resolved.x;
        finalZ = resolved.z;
      }

      // World bounds (-560 to 560)
      const bound = 560;
      this.position.x = Math.max(-bound, Math.min(bound, finalX));
      this.position.z = Math.max(-bound, Math.min(bound, finalZ));

      // Audio engine update
      this.speed = Math.abs(this.currentSpeed);
      this.speedKmh = Math.round(this.speed * 3.6);
      if (this.audioManager) {
        this.audioManager.updateEngine(this.speed / this.maxSpeed, throttle !== 0);
      }

      // Realistic Bike Leaning into turns (roll)
      const speedRatio = Math.min(1, Math.abs(this.currentSpeed) / 18);
      const targetRoll = -this.steerAngle * speedRatio * 0.45;
      this.roll += (targetRoll - this.roll) * Math.min(1, dt * 10);

      // Spin wheels
      const wheelCircumference = Math.PI * 0.72;
      const wheelRotDelta = (this.currentSpeed * dt) / wheelCircumference * Math.PI * 2;
      this.wheelMeshes.forEach(w => {
        w.children[0].rotation.x += wheelRotDelta;
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
    const rightX = Math.cos(this.yaw) * 1.4;
    const rightZ = -Math.sin(this.yaw) * 1.4;
    return new THREE.Vector3(this.position.x + rightX, this.position.y, this.position.z + rightZ);
  }
}
