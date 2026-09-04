import * as THREE from 'three';

export class Airplane {
  constructor(scene, audioManager, initialPos = new THREE.Vector3(320, 0.4, -380)) {
    this.scene = scene;
    this.audioManager = audioManager;
    this.color = 0xff3838;

    this.position = new THREE.Vector3(initialPos.x, 0.4, initialPos.z);
    this.velocity = new THREE.Vector3(0, 0, 0);
    this.yaw = 0;
    this.pitch = 0;
    this.roll = 0;

    // Flight dynamics
    this.speed = 0;
    this.speedKmh = 0;
    this.maxSpeed = 46; // ~165 km/h
    this.takeoffSpeed = 10;
    this.altitude = 0.4;
    this.maxAltitude = 160;
    this.isAirborne = false;
    this.propeller = null;
    this.isAirplane = true;

    this.radius = 3.6;

    this.initMesh();
  }

  initMesh() {
    this.mesh = new THREE.Group();
    this.mesh.position.copy(this.position);

    const bodyMat = new THREE.MeshStandardMaterial({ color: 0xf8f9fa, roughness: 0.35, metalness: 0.1 });
    const trimMat = new THREE.MeshStandardMaterial({ color: 0xff3838, roughness: 0.4, metalness: 0.2 });
    const darkMat = new THREE.MeshStandardMaterial({ color: 0x222f3e, roughness: 0.8 });
    const glassMat = new THREE.MeshStandardMaterial({
      color: 0x0984e3,
      roughness: 0.1,
      metalness: 0.9,
      transparent: true,
      opacity: 0.8
    });

    // 1. Sleek Fuselage
    const fuseGeo = new THREE.CylinderGeometry(0.75, 0.42, 8.5, 14);
    fuseGeo.rotateX(Math.PI / 2);
    const fuselage = new THREE.Mesh(fuseGeo, bodyMat);
    fuselage.position.y = 1.1;
    fuselage.castShadow = true;
    this.mesh.add(fuselage);

    // Aerodynamic Nose Cone
    const noseGeo = new THREE.ConeGeometry(0.75, 1.6, 14);
    noseGeo.rotateX(-Math.PI / 2);
    const nose = new THREE.Mesh(noseGeo, trimMat);
    nose.position.set(0, 1.1, 4.8);
    this.mesh.add(nose);

    // Cockpit Bubble Canopy
    const canopyGeo = new THREE.SphereGeometry(0.72, 14, 12);
    canopyGeo.scale(1, 0.72, 2.0);
    const canopy = new THREE.Mesh(canopyGeo, glassMat);
    canopy.position.set(0, 1.7, 1.4);
    this.mesh.add(canopy);

    // 2. High Aspect Wings with Winglets
    const wingGeo = new THREE.BoxGeometry(13.2, 0.14, 1.9);
    const wings = new THREE.Mesh(wingGeo, bodyMat);
    wings.position.set(0, 1.1, 0.7);
    wings.castShadow = true;
    this.mesh.add(wings);

    // Red wingtips
    [-6.6, 6.6].forEach(wx => {
      const tip = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.6, 1.9), trimMat);
      tip.position.set(wx, 1.4, 0.7);
      this.mesh.add(tip);
    });

    // 3. Tail Unit (Stabilizers & Rudder)
    const horizTail = new THREE.Mesh(new THREE.BoxGeometry(4.2, 0.1, 1.1), trimMat);
    horizTail.position.set(0, 1.35, -3.6);
    this.mesh.add(horizTail);

    const vertTail = new THREE.Mesh(new THREE.BoxGeometry(0.12, 1.9, 1.4), trimMat);
    vertTail.position.set(0, 2.2, -3.7);
    this.mesh.add(vertTail);

    // 4. Spinning Propeller Assembly
    this.propeller = new THREE.Group();
    this.propeller.position.set(0, 1.1, 5.65);

    const spinner = new THREE.Mesh(new THREE.ConeGeometry(0.25, 0.5, 10), trimMat);
    spinner.rotateX(-Math.PI / 2);
    this.propeller.add(spinner);

    const bladeGeo = new THREE.BoxGeometry(0.16, 2.6, 0.04);
    const blade1 = new THREE.Mesh(bladeGeo, darkMat);
    const blade2 = new THREE.Mesh(bladeGeo, darkMat);
    blade2.rotation.z = Math.PI / 2;
    this.propeller.add(blade1, blade2);
    this.mesh.add(this.propeller);

    // 5. Tricycle Landing Gear
    const wheelMat = new THREE.MeshStandardMaterial({ color: 0x1e272e, roughness: 0.9 });
    const wheelGeo = new THREE.CylinderGeometry(0.35, 0.35, 0.22, 12);
    wheelGeo.rotateZ(Math.PI / 2);

    const leftWheel = new THREE.Mesh(wheelGeo, wheelMat);
    leftWheel.position.set(-1.6, 0.35, 0.7);
    const rightWheel = new THREE.Mesh(wheelGeo, wheelMat);
    rightWheel.position.set(1.6, 0.35, 0.7);
    const frontWheel = new THREE.Mesh(wheelGeo, wheelMat);
    frontWheel.position.set(0, 0.35, 3.8);
    this.mesh.add(leftWheel, rightWheel, frontWheel);

    // Ground Shadow projection
    const shadowGeo = new THREE.PlaneGeometry(9, 9);
    const shadowMat = new THREE.MeshBasicMaterial({
      color: 0x1e272e,
      transparent: true,
      opacity: 0.3,
      depthWrite: false
    });
    this.shadow = new THREE.Mesh(shadowGeo, shadowMat);
    this.shadow.rotation.x = -Math.PI / 2;
    this.shadow.position.y = 0.03;
    this.scene.add(this.shadow);

    this.mesh.userData = { vehicle: this, isAirplane: true };
    this.scene.add(this.mesh);
  }

  update(dt, input, isPiloting) {
    if (isPiloting) {
      const fwd = input.getForward();   // W = +1, S = -1
      const turn = input.getTurn();     // A = -1, D = +1
      const climbKey = input.isDown('Space') || input.isDown('ArrowDown');
      const descendKey = input.isDown('ShiftLeft') || input.isDown('ArrowUp');
      const boost = input.isSprinting();

      // 1. Throttle / Speed Dynamics
      if (fwd > 0) {
        const top = boost ? this.maxSpeed : this.maxSpeed * 0.85;
        this.speed = Math.min(top, this.speed + 16.0 * dt);
      } else if (fwd < 0) {
        this.speed = Math.max(0, this.speed - 18.0 * dt);
      } else {
        // Cruise throttle: when airborne, keep cruising!
        if (this.isAirborne) {
          const cruiseSpeed = 26.0;
          this.speed += (cruiseSpeed - this.speed) * Math.min(1, dt * 1.2);
        } else {
          this.speed = Math.max(0, this.speed - 5.0 * dt);
        }
      }

      // Check takeoff airspeed threshold
      if (this.speed > this.takeoffSpeed && (climbKey || this.altitude > 1.0)) {
        this.isAirborne = true;
      }

      // 2. Flight Pitch & Altitude
      if (this.isAirborne) {
        if (climbKey) {
          this.pitch = Math.min(0.42, this.pitch + 0.9 * dt);
          this.altitude = Math.min(this.maxAltitude, this.altitude + (16.0 + this.speed * 0.35) * dt);
        } else if (descendKey) {
          this.pitch = Math.max(-0.42, this.pitch - 0.9 * dt);
          this.altitude = Math.max(0.4, this.altitude - 16.0 * dt);
        } else {
          // Level flight attitude
          this.pitch *= Math.max(0, 1 - 3.5 * dt);
        }

        // 3. Bank & Yaw Steering
        if (turn !== 0) {
          const turnRate = 1.6;
          this.yaw -= turn * turnRate * dt;
          const targetRoll = -turn * 0.55;
          this.roll += (targetRoll - this.roll) * Math.min(1, dt * 6.0);
        } else {
          this.roll *= Math.max(0, 1 - 4.5 * dt);
        }

        // Landing touchdown
        if (this.altitude <= 0.45) {
          this.altitude = 0.4;
          this.pitch = 0;
          this.roll = 0;
          if (this.speed < this.takeoffSpeed) {
            this.isAirborne = false;
          }
        }
      } else {
        // Ground taxi steering
        this.yaw -= turn * 2.2 * dt;
        this.pitch = 0;
        this.roll = 0;
        this.altitude = 0.4;
      }

      // 4. Horizontal velocity vector
      const forwardX = Math.sin(this.yaw) * Math.cos(this.pitch);
      const forwardZ = Math.cos(this.yaw) * Math.cos(this.pitch);

      this.position.x += forwardX * this.speed * dt;
      this.position.y = this.altitude;
      this.position.z += forwardZ * this.speed * dt;

      this.speedKmh = Math.round(this.speed * 3.6);
      this.audioManager.updateEngine(Math.max(0.1, this.speed / this.maxSpeed));
    }

    // Spin propeller
    if (this.propeller) {
      const propSpeed = (this.speed + 12) * 2.5;
      this.propeller.rotation.z += propSpeed * dt;
    }

    // Sync 3D mesh
    this.mesh.position.copy(this.position);
    this.mesh.rotation.set(this.pitch, this.yaw, this.roll);

    // Projected ground shadow
    if (this.shadow) {
      this.shadow.position.set(this.position.x, 0.04, this.position.z);
      const shadowScale = Math.max(0.2, 1.0 - (this.position.y * 0.012));
      this.shadow.scale.set(shadowScale, shadowScale, shadowScale);
      this.shadow.material.opacity = Math.max(0.05, 0.35 - (this.position.y * 0.003));
    }
  }

  getExitPosition() {
    const left = new THREE.Vector3(-3.8, 0, 0).applyAxisAngle(new THREE.Vector3(0, 1, 0), this.yaw);
    return new THREE.Vector3(
      this.position.x + left.x,
      0.1,
      this.position.z + left.z
    );
  }
}
