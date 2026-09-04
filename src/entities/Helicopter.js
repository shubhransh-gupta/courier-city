import * as THREE from 'three';

export class Helicopter {
  constructor(scene, audioManager, initialPos = new THREE.Vector3(340, 0.4, -360)) {
    this.scene = scene;
    this.audioManager = audioManager;
    this.color = 0xf59e0b; // Amber / Gold for minimap

    this.position = new THREE.Vector3(initialPos.x, 0.4, initialPos.z);
    this.velocity = new THREE.Vector3(0, 0, 0);
    this.yaw = 0;
    this.pitch = 0;
    this.roll = 0;

    this.altitude = 0.4;
    this.speed = 0;
    this.speedKmh = 0;
    this.maxSpeed = 38; // ~135 km/h
    this.isAirborne = false;
    this.isHelicopter = true;

    this.radius = 3.2;

    this.initMesh();
  }

  initMesh() {
    this.mesh = new THREE.Group();
    this.mesh.position.copy(this.position);

    const bodyMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7, // Sky Blue executive livery
      metalness: 0.6,
      roughness: 0.3
    });
    const darkMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.8 });
    const glassMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.1,
      metalness: 0.9,
      transparent: true,
      opacity: 0.82
    });
    const metalMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, metalness: 0.9, roughness: 0.2 });

    // 1. Aerodynamic Cabin
    const cabinGeo = new THREE.SphereGeometry(1.6, 16, 12);
    cabinGeo.scale(1.0, 0.95, 1.8);
    const cabin = new THREE.Mesh(cabinGeo, bodyMat);
    cabin.position.y = 1.6;
    cabin.castShadow = true;
    this.mesh.add(cabin);

    // Front Bubble Cockpit Glass
    const cockpitGlass = new THREE.Mesh(new THREE.SphereGeometry(1.52, 14, 12, 0, Math.PI, 0, Math.PI / 1.5), glassMat);
    cockpitGlass.rotation.x = Math.PI / 2;
    cockpitGlass.position.set(0, 1.6, 0.8);
    this.mesh.add(cockpitGlass);

    // 2. Tail Boom & Fin
    const boomGeo = new THREE.CylinderGeometry(0.24, 0.42, 6.2, 10);
    boomGeo.rotateX(Math.PI / 2);
    const boom = new THREE.Mesh(boomGeo, bodyMat);
    boom.position.set(0, 1.8, -4.2);
    boom.castShadow = true;
    this.mesh.add(boom);

    // Vertical tail fin
    const fin = new THREE.Mesh(new THREE.BoxGeometry(0.12, 1.8, 1.2), bodyMat);
    fin.position.set(0, 2.3, -7.2);
    this.mesh.add(fin);

    // Horizontal stabilizer
    const horizStab = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.08, 0.6), darkMat);
    horizStab.position.set(0, 1.9, -6.5);
    this.mesh.add(horizStab);

    // 3. Main Rotor Assembly
    this.mainRotor = new THREE.Group();
    this.mainRotor.position.set(0, 3.2, 0);

    const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.8, 8), metalMat);
    mast.position.y = -0.3;
    this.mainRotor.add(mast);

    const rotorHub = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 0.15, 10), darkMat);
    this.mainRotor.add(rotorHub);

    // 4 Composite Rotor Blades
    for (let i = 0; i < 4; i++) {
      const bladeAngle = (i / 4) * Math.PI * 2;
      const blade = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.03, 5.2), darkMat);
      blade.position.set(Math.sin(bladeAngle) * 2.6, 0, Math.cos(bladeAngle) * 2.6);
      blade.rotation.y = bladeAngle;
      this.mainRotor.add(blade);
    }
    this.mesh.add(this.mainRotor);

    // 4. Tail Rotor Assembly
    this.tailRotor = new THREE.Group();
    this.tailRotor.position.set(0.22, 2.3, -7.2);

    for (let i = 0; i < 2; i++) {
      const tBlade = new THREE.Mesh(new THREE.BoxGeometry(0.08, 1.2, 0.02), darkMat);
      tBlade.rotation.z = (i / 2) * Math.PI;
      this.tailRotor.add(tBlade);
    }
    this.mesh.add(this.tailRotor);

    // 5. Tubular Landing Skids
    const skidGeo = new THREE.CylinderGeometry(0.09, 0.09, 4.4, 8);
    skidGeo.rotateX(Math.PI / 2);

    const leftSkid = new THREE.Mesh(skidGeo, darkMat);
    leftSkid.position.set(-1.25, 0.25, 0);
    const rightSkid = new THREE.Mesh(skidGeo, darkMat);
    rightSkid.position.set(1.25, 0.25, 0);

    // Struts connecting skids to fuselage
    [-0.9, 0.9].forEach(sz => {
      [-1.25, 1.25].forEach(sx => {
        const strut = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 1.1, 8), darkMat);
        strut.position.set(sx * 0.85, 0.75, sz);
        strut.rotation.z = sx > 0 ? -0.28 : 0.28;
        this.mesh.add(strut);
      });
    });

    this.mesh.add(leftSkid, rightSkid);

    // 6. Searchlight Pointing Downwards
    this.searchlight = new THREE.SpotLight(0xfffa65, 0, 80, Math.PI / 6, 0.5, 1.2);
    this.searchlight.position.set(0, 0.6, 1.5);
    this.searchlightTarget = new THREE.Object3D();
    this.searchlightTarget.position.set(0, -20, 10);
    this.mesh.add(this.searchlight, this.searchlightTarget);
    this.searchlight.target = this.searchlightTarget;

    // Projected ground shadow
    const shadowGeo = new THREE.PlaneGeometry(8, 8);
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

    this.mesh.userData = { vehicle: this, isHelicopter: true };
    this.scene.add(this.mesh);
  }

  update(dt, input, isPiloting) {
    if (isPiloting) {
      const fwd = input.getForward(); // W (+1), S (-1)
      const turn = input.getTurn();   // A (-1), D (+1)
      const ascend = input.isDown('Space');
      const descend = input.isDown('ShiftLeft');
      const boost = input.isSprinting();

      // 1. Vertical Lift & Hover
      if (ascend) {
        this.altitude = Math.min(180, this.altitude + (14.0 * (boost ? 1.5 : 1.0)) * dt);
        this.isAirborne = true;
      } else if (descend) {
        this.altitude = Math.max(0.4, this.altitude - 12.0 * dt);
        if (this.altitude <= 0.45) {
          this.altitude = 0.4;
          this.isAirborne = false;
        }
      }

      // 2. Horizontal Flight
      if (this.isAirborne) {
        // Forward/back motion
        const targetPitch = -fwd * 0.32;
        this.pitch += (targetPitch - this.pitch) * Math.min(1, dt * 4);

        const targetRoll = -turn * 0.28;
        this.roll += (targetRoll - this.roll) * Math.min(1, dt * 4);

        this.yaw -= turn * 1.8 * dt;

        const maxSpd = boost ? this.maxSpeed * 1.3 : this.maxSpeed;
        if (Math.abs(fwd) > 0.01) {
          this.speed += (fwd * maxSpd - this.speed) * Math.min(1, dt * 3.5);
        } else {
          // Hover damping
          this.speed *= Math.max(0, 1 - 2.5 * dt);
        }

        const forwardX = Math.sin(this.yaw);
        const forwardZ = Math.cos(this.yaw);
        this.position.x += forwardX * this.speed * dt;
        this.position.z += forwardZ * this.speed * dt;
      } else {
        // Grounded
        this.pitch = 0;
        this.roll = 0;
        this.speed = 0;
      }

      this.position.y = this.altitude;
      this.speedKmh = Math.round(Math.abs(this.speed) * 3.6);

      // Searchlight on at night or in flight
      this.searchlight.intensity = this.isAirborne ? 4.0 : 0;
      this.audioManager.updateEngine(this.isAirborne ? 0.85 : 0.2);
    }

    // Spin rotors continuously
    const rotorRPM = isPiloting ? 28 : (this.isAirborne ? 20 : 6);
    this.mainRotor.rotation.y += rotorRPM * dt;
    this.tailRotor.rotation.x += rotorRPM * 1.5 * dt;

    // Sync mesh position & orientation
    this.mesh.position.copy(this.position);
    this.mesh.rotation.set(this.pitch, this.yaw, this.roll);

    // Projected ground shadow
    if (this.shadow) {
      this.shadow.position.set(this.position.x, 0.04, this.position.z);
      const shadowScale = Math.max(0.25, 1.0 - (this.position.y * 0.01));
      this.shadow.scale.set(shadowScale, shadowScale, shadowScale);
      this.shadow.material.opacity = Math.max(0.05, 0.4 - (this.position.y * 0.003));
    }
  }

  getExitPosition() {
    const left = new THREE.Vector3(-3.2, 0, 0).applyAxisAngle(new THREE.Vector3(0, 1, 0), this.yaw);
    return new THREE.Vector3(
      this.position.x + left.x,
      this.position.y,
      this.position.z + left.z
    );
  }
}
