import * as THREE from 'three';

export class BloodVFX {
  constructor(scene) {
    this.scene = scene;
    this.particles = [];

    // Red blood splat materials
    this.bloodMat = new THREE.MeshBasicMaterial({ color: 0xd63031 });
    this.splatMat = new THREE.MeshBasicMaterial({
      color: 0x8b0000,
      transparent: true,
      opacity: 0.85,
      depthWrite: false
    });

    this.splatGeo = new THREE.CircleGeometry(0.35, 10);
  }

  spawnHit(pos, impactDirection = new THREE.Vector3(0, 1, 0)) {
    // 1. Splashing blood droplet particles
    for (let i = 0; i < 22; i++) {
      const size = 0.08 + Math.random() * 0.12;
      const p = new THREE.Mesh(new THREE.DodecahedronGeometry(size, 0), this.bloodMat);
      p.position.set(
        pos.x + (Math.random() - 0.5) * 0.4,
        pos.y + 0.8 + (Math.random() - 0.5) * 0.5,
        pos.z + (Math.random() - 0.5) * 0.4
      );

      // Explosive velocity
      const angle = Math.random() * Math.PI * 2;
      const speed = 3.5 + Math.random() * 6.5;
      const vx = Math.cos(angle) * speed + impactDirection.x * 4;
      const vy = 2.5 + Math.random() * 5.0;
      const vz = Math.sin(angle) * speed + impactDirection.z * 4;

      this.particles.push({
        mesh: p,
        vx, vy, vz,
        life: 1.0,
        decay: 0.8 + Math.random() * 0.6
      });

      this.scene.add(p);
    }

    // 2. Persistent ground blood stain puddle
    const splat = new THREE.Mesh(this.splatGeo, this.splatMat.clone());
    splat.rotation.x = -Math.PI / 2;
    splat.position.set(
      pos.x + (Math.random() - 0.5) * 0.5,
      0.035,
      pos.z + (Math.random() - 0.5) * 0.5
    );
    const scale = 0.8 + Math.random() * 1.4;
    splat.scale.set(scale, scale, scale);
    this.scene.add(splat);

    // Fade out puddle slowly after 15 seconds
    setTimeout(() => {
      let op = 0.85;
      const fadeInterval = setInterval(() => {
        op -= 0.05;
        if (splat.material) splat.material.opacity = op;
        if (op <= 0) {
          clearInterval(fadeInterval);
          this.scene.remove(splat);
        }
      }, 100);
    }, 15000);
  }

  update(dt) {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.life -= p.decay * dt;

      // Apply gravity
      p.vy -= 22 * dt;

      p.mesh.position.x += p.vx * dt;
      p.mesh.position.y += p.vy * dt;
      p.mesh.position.z += p.vz * dt;

      // Hit ground
      if (p.mesh.position.y <= 0.04) {
        p.mesh.position.y = 0.04;
        p.vx *= 0.5;
        p.vz *= 0.5;
      }

      if (p.life <= 0) {
        this.scene.remove(p.mesh);
        this.particles.splice(i, 1);
      }
    }
  }
}
