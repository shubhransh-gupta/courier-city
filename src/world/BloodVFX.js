import * as THREE from 'three';

/**
 * FlowerTributeVFX (formerly BloodVFX)
 * Replaces violent blood effects with serene, culturally respectful flower tributes
 * and fluttering floral petal showers when a collision occurs in the Garden City.
 */
export class BloodVFX {
  constructor(scene) {
    this.scene = scene;
    this.particles = [];
    this.tributes = [];

    // Cheerful, serene floral palette (Bengaluru flower market marigolds, roses & jasmine)
    this.petalColors = [
      0xf59e0b, // Saffron Marigold
      0xf43f5e, // Rose Red
      0xfb7185, // Pink Blossom
      0xeab308, // Golden Sunflower
      0xfef08a, // Jasmine White
      0xd946ef, // Purple Lotus
      0xec4899  // Bougainvillea Magenta
    ];

    this.petalMats = this.petalColors.map(c => new THREE.MeshStandardMaterial({
      color: c,
      roughness: 0.6,
      side: THREE.DoubleSide
    }));

    // Pre-create petal geometry: curved delicate petal
    this.petalGeo = new THREE.PlaneGeometry(0.18, 0.26);

    // Flower ground tribute wreath geometry & materials
    this.flowerCenterMat = new THREE.MeshBasicMaterial({ color: 0xf59e0b });
    this.flowerPetalMat = new THREE.MeshBasicMaterial({ color: 0xf43f5e });
    this.flowerWhiteMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    this.leafMat = new THREE.MeshBasicMaterial({ color: 0x16a34a });
  }

  spawnHit(pos, impactDirection = new THREE.Vector3(0, 1, 0)) {
    // 1. Fluttering flower petal shower bursting upward and swirling
    const petalCount = 28;
    for (let i = 0; i < petalCount; i++) {
      const mat = this.petalMats[i % this.petalMats.length];
      const petal = new THREE.Mesh(this.petalGeo, mat);
      petal.position.set(
        pos.x + (Math.random() - 0.5) * 0.6,
        pos.y + 0.6 + Math.random() * 0.8,
        pos.z + (Math.random() - 0.5) * 0.6
      );

      // Random 3D orientation
      petal.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      // Gentle upward fountain explosion with air swirl
      const angle = Math.random() * Math.PI * 2;
      const speed = 2.0 + Math.random() * 4.0;
      const vx = Math.cos(angle) * speed + (impactDirection.x || 0) * 1.5;
      const vy = 3.0 + Math.random() * 4.5;
      const vz = Math.sin(angle) * speed + (impactDirection.z || 0) * 1.5;

      this.particles.push({
        mesh: petal,
        vx, vy, vz,
        rotSpeedX: (Math.random() - 0.5) * 8.0,
        rotSpeedY: (Math.random() - 0.5) * 8.0,
        rotSpeedZ: (Math.random() - 0.5) * 8.0,
        life: 1.0,
        decay: 0.35 + Math.random() * 0.25 // Lasts ~3-4 seconds fluttering
      });

      this.scene.add(petal);
    }

    // 2. Beautiful Ground Floral Tribute Wreath (Garland of Marigolds & Roses)
    const tributeGroup = new THREE.Group();
    const groundY = Math.max(0.045, pos.y ? pos.y : 0.045);
    tributeGroup.position.set(pos.x, groundY, pos.z);

    // A. Green leaves backdrop
    for (let l = 0; l < 8; l++) {
      const leaf = new THREE.Mesh(new THREE.PlaneGeometry(0.35, 0.6), this.leafMat);
      leaf.rotation.x = -Math.PI / 2;
      leaf.rotation.z = (l / 8) * Math.PI * 2;
      leaf.position.x = Math.cos(leaf.rotation.z) * 0.55;
      leaf.position.z = Math.sin(leaf.rotation.z) * 0.55;
      tributeGroup.add(leaf);
    }

    // B. Outer ring of colorful marigold flower heads
    const ringCount = 10;
    for (let r = 0; r < ringCount; r++) {
      const theta = (r / ringCount) * Math.PI * 2;
      const flowerColor = r % 2 === 0 ? this.flowerCenterMat : this.flowerPetalMat;
      const bud = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.08, 8), flowerColor);
      bud.position.set(Math.cos(theta) * 0.65, 0.04, Math.sin(theta) * 0.65);
      tributeGroup.add(bud);
    }

    // C. Inner white jasmine flower ring
    for (let j = 0; j < 6; j++) {
      const theta = (j / 6) * Math.PI * 2 + 0.2;
      const jasmine = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.06, 6), this.flowerWhiteMat);
      jasmine.position.set(Math.cos(theta) * 0.32, 0.05, Math.sin(theta) * 0.32);
      tributeGroup.add(jasmine);
    }

    // D. Central Golden Bloom
    const centralBloom = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.1, 10), this.flowerCenterMat);
    centralBloom.position.set(0, 0.06, 0);
    tributeGroup.add(centralBloom);

    this.scene.add(tributeGroup);

    // Keep ground tribute for 20 seconds, then fade out gently
    setTimeout(() => {
      let scale = 1.0;
      const fadeInterval = setInterval(() => {
        scale -= 0.05;
        if (tributeGroup) tributeGroup.scale.set(scale, scale, scale);
        if (scale <= 0.05) {
          clearInterval(fadeInterval);
          this.scene.remove(tributeGroup);
        }
      }, 80);
    }, 18000);
  }

  update(dt) {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.life -= p.decay * dt;

      // Soft air-resistance and gentle gravity for fluttering petals
      p.vy -= 9.8 * dt; // gentle gravity
      p.vx *= Math.max(0, 1 - 1.5 * dt); // air drag
      p.vz *= Math.max(0, 1 - 1.5 * dt);

      p.mesh.position.x += p.vx * dt;
      p.mesh.position.y += p.vy * dt;
      p.mesh.position.z += p.vz * dt;

      // Petal tumble/swirl
      p.mesh.rotation.x += p.rotSpeedX * dt;
      p.mesh.rotation.y += p.rotSpeedY * dt;
      p.mesh.rotation.z += p.rotSpeedZ * dt;

      // Petal settles on ground
      if (p.mesh.position.y <= 0.05) {
        p.mesh.position.y = 0.05;
        p.vx = 0;
        p.vy = 0;
        p.vz = 0;
        p.rotSpeedX = 0;
        p.rotSpeedZ = 0;
      }

      if (p.life <= 0) {
        this.scene.remove(p.mesh);
        this.particles.splice(i, 1);
      }
    }
  }
}
