import * as THREE from 'three';

export class CrowdSystem {
  constructor(scene) {
    this.scene = scene;
    this.pedestrians = [];

    this.palette = {
      clothes: [0x3b82f6, 0xef4444, 0x10b981, 0xf59e0b, 0x8b5cf6, 0xec4899, 0x06b6d4, 0x1e293b],
      pants: [0x1e293b, 0x334155, 0x475569, 0x64748b, 0x0f172a],
      skin: [0xffdbac, 0xf1c27d, 0xe0ac69, 0xc68642, 0x8d5524]
    };

    // Shared cached geometries
    this.torsoGeo = new THREE.CylinderGeometry(0.24, 0.28, 0.72, 8);
    this.headGeo = new THREE.SphereGeometry(0.2, 8, 8);
    this.hairGeo = new THREE.SphereGeometry(0.21, 8, 8, 0, Math.PI * 2, 0, Math.PI / 1.7);
    this.legGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.7, 6);
    this.armGeo = new THREE.CylinderGeometry(0.06, 0.06, 0.6, 6);

    // Shared cached materials
    this.shirtMats = this.palette.clothes.map(c => new THREE.MeshStandardMaterial({ color: c, roughness: 0.7 }));
    this.pantsMats = this.palette.pants.map(c => new THREE.MeshStandardMaterial({ color: c, roughness: 0.8 }));
    this.skinMats = this.palette.skin.map(c => new THREE.MeshStandardMaterial({ color: c, roughness: 0.6 }));
    this.hairMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.9 });

    this.spawnCrowds();
  }

  spawnCrowds() {
    // 1. Sidewalk walkers in Central Hub
    for (let i = 0; i < 22; i++) {
      const isEast = Math.random() > 0.5;
      const x = isEast ? 9.5 + Math.random() * 2 : -9.5 - Math.random() * 2;
      const z = (Math.random() - 0.5) * 220;
      this.createPedestrian(x, z, 'walking', z > 0 ? -1 : 1);
    }

    // 2. Chatting groups in Central Plaza
    const plazaSpots = [
      { x: 18, z: 18 }, { x: -18, z: 18 }, { x: 18, z: -18 }, { x: -18, z: -18 },
      { x: 28, z: 4 }, { x: -28, z: 4 }
    ];
    plazaSpots.forEach(pt => {
      const groupSize = 2 + Math.floor(Math.random() * 3);
      for (let g = 0; g < groupSize; g++) {
        const offsetAngle = (g / groupSize) * Math.PI * 2;
        const px = pt.x + Math.cos(offsetAngle) * 1.5;
        const pz = pt.z + Math.sin(offsetAngle) * 1.5;
        this.createPedestrian(px, pz, 'idle', 0, offsetAngle + Math.PI);
      }
    });

    // 3. Dancing Party Crowd at CLUB PULSE Rooftop (-80, -60)
    for (let d = 0; d < 18; d++) {
      const dx = -80 + (Math.random() - 0.5) * 16;
      const dz = -60 + (Math.random() - 0.5) * 16;
      this.createPedestrian(dx, dz, 'dancing', 0, Math.random() * Math.PI * 2, 7.5);
    }
  }

  createPedestrian(x, z, state = 'walking', dir = 1, initialYaw = 0, y = 0) {
    const group = new THREE.Group();
    group.position.set(x, y, z);

    const shirtMat = this.shirtMats[Math.floor(Math.random() * this.shirtMats.length)];
    const pantsMat = this.pantsMats[Math.floor(Math.random() * this.pantsMats.length)];
    const skinMat = this.skinMats[Math.floor(Math.random() * this.skinMats.length)];

    // Torso
    const torso = new THREE.Mesh(this.torsoGeo, shirtMat);
    torso.position.y = 1.05;
    torso.castShadow = true;
    group.add(torso);

    // Head
    const head = new THREE.Mesh(this.headGeo, skinMat);
    head.position.y = 1.55;
    group.add(head);

    // Hair
    const hair = new THREE.Mesh(this.hairGeo, this.hairMat);
    hair.position.y = 1.58;
    group.add(hair);

    // Legs
    const leftLeg = new THREE.Mesh(this.legGeo, pantsMat);
    leftLeg.position.set(-0.12, 0.35, 0);
    const rightLeg = new THREE.Mesh(this.legGeo, pantsMat);
    rightLeg.position.set(0.12, 0.35, 0);
    group.add(leftLeg, rightLeg);

    // Arms
    const leftArm = new THREE.Mesh(this.armGeo, shirtMat);
    leftArm.position.set(-0.32, 1.0, 0);
    const rightArm = new THREE.Mesh(this.armGeo, shirtMat);
    rightArm.position.set(0.32, 1.0, 0);
    group.add(leftArm, rightArm);

    this.scene.add(group);

    this.pedestrians.push({
      mesh: group,
      leftLeg,
      rightLeg,
      leftArm,
      rightArm,
      state,
      dir,
      speed: 1.2 + Math.random() * 0.4,
      animPhase: Math.random() * Math.PI * 2,
      baseY: y,
      baseX: x,
      baseZ: z
    });
  }

  update(dt, playerPos) {
    const time = performance.now() * 0.001;

    for (let i = 0; i < this.pedestrians.length; i++) {
      const p = this.pedestrians[i];

      // Distance check: only animate limbs if near the player (<80m)
      const isFar = playerPos && (
        Math.abs(p.mesh.position.x - playerPos.x) > 80 ||
        Math.abs(p.mesh.position.z - playerPos.z) > 80
      );

      if (p.isKnocked) continue;

      if (p.state === 'walking') {
        p.mesh.position.z += p.dir * p.speed * dt;
        p.mesh.rotation.y = p.dir > 0 ? 0 : Math.PI;

        if (Math.abs(p.mesh.position.z) > 220) {
          p.dir *= -1;
        }

        if (isFar) continue;

        p.animPhase += dt * 4.5;
        const swing = Math.sin(p.animPhase) * 0.55;
        p.leftLeg.rotation.x = swing;
        p.rightLeg.rotation.x = -swing;
        p.leftArm.rotation.x = -swing * 0.7;
        p.rightArm.rotation.x = swing * 0.7;
        p.mesh.position.y = p.baseY + Math.abs(Math.sin(p.animPhase * 2)) * 0.04;
      } else if (p.state === 'dancing') {
        if (isFar) continue;
        p.animPhase += dt * 8.0;
        // Club dance animations!
        const danceSwing = Math.sin(p.animPhase) * 0.4;
        const armWave = Math.cos(p.animPhase) * 0.8;
        p.mesh.rotation.y = Math.sin(p.animPhase * 0.5) * 0.6;
        p.mesh.position.y = p.baseY + Math.abs(Math.sin(p.animPhase * 2)) * 0.12;
        p.leftArm.rotation.x = -1.2 + armWave;
        p.rightArm.rotation.x = -1.2 - armWave;
        p.leftLeg.rotation.x = danceSwing * 0.5;
        p.rightLeg.rotation.x = -danceSwing * 0.5;
      } else {
        if (isFar) continue;
        // Idle breathing / chatting
        const breathe = Math.sin(time * 1.5 + p.animPhase) * 0.02;
        p.mesh.position.y = p.baseY + breathe;
        p.leftArm.rotation.x = Math.sin(time + p.animPhase) * 0.1;
        p.rightArm.rotation.x = -Math.sin(time + p.animPhase) * 0.1;
      }
    }
  }

  checkVehicleCollisions(vehicle, bloodVfx, hud, audioManager) {
    if (!vehicle || Math.abs(vehicle.currentSpeed || 0) < 3.0) return;

    const vehX = vehicle.position.x;
    const vehZ = vehicle.position.z;
    const hitRadius = (vehicle.radius || 1.4) + 0.6;
    const hitRadiusSq = hitRadius * hitRadius;

    for (let i = 0; i < this.pedestrians.length; i++) {
      const p = this.pedestrians[i];
      if (p.isKnocked) continue;

      const dx = p.mesh.position.x - vehX;
      const dz = p.mesh.position.z - vehZ;
      if (dx * dx + dz * dz < hitRadiusSq) {
        p.isKnocked = true;

        // Trigger beautiful floral tribute and petals!
        if (bloodVfx) {
          const hitDir = new THREE.Vector3(
            Math.sin(vehicle.yaw || 0),
            0.5,
            Math.cos(vehicle.yaw || 0)
          );
          bloodVfx.spawnHit(p.mesh.position, hitDir);
        }

        // Knocked down animation: lies peacefully
        p.mesh.rotation.z = Math.PI / 2;
        p.mesh.position.y = (p.baseY || 0) + 0.12;

        if (hud) {
          hud.showToast('🌸 Flower tribute placed on the road &middot; Drive safely in Bengaluru!');
        }

        if (audioManager && typeof audioManager.playCrash === 'function') {
          audioManager.playCrash();
        }

        // Recover after 12 seconds
        setTimeout(() => {
          p.isKnocked = false;
          p.mesh.rotation.z = 0;
          p.mesh.position.y = p.baseY || 0;
        }, 12000);
      }
    }
  }
}
