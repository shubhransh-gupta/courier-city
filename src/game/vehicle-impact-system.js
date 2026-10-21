/**
 * Courier City — Vehicle Driving & Pedestrian Impact Blood System
 * Allows driving Auto, Car, Bike, Bus, and renders blood particle splats when striking pedestrians.
 */

import * as THREE from "three";

const LT = 2 * Math.PI * 240; // Circular planet circumference (~1507.96)

function wrapX(x) {
  return ((x + LT * 0.5) % LT + LT) % LT - LT * 0.5;
}

export class VehicleImpactSystem {
  constructor() {
    this.ctx = null;
    this.player = null;
    this.scene = null;
    this.active = false;
    this.currentVehicleIndex = 0; // 0 = Walk, 1 = Auto, 2 = Roadster, 3 = Bullet, 4 = Bus
    this.activeVehicleMesh = null;
    this.vehicleMeshes = [];
    this.particles = [];
    this.splats = [];
    this.hitCooldowns = new WeakMap();

    this.configs = [
      { id: "walk", name: "Foot", icon: "🚶", speed: 3.5, hitRadius: 0.8 },
      { id: "auto", name: "Namma Auto", icon: "🛺", speed: 14.0, hitRadius: 2.2, horn: "autoHorn" },
      { id: "roadster", name: "Roadster", icon: "🏎️", speed: 22.0, hitRadius: 2.4, horn: "horn" },
      { id: "bullet", name: "Bullet 350", icon: "🏍️", speed: 17.0, hitRadius: 1.8, horn: "autoHorn" },
      { id: "bus", name: "Volvo Bus", icon: "🚌", speed: 12.0, hitRadius: 3.2, horn: "busHorn" }
    ];

    this.init();
  }

  init() {
    this.createBloodFlashOverlay();
    this.createVehicleDock();
    this.bindKeyboardShortcuts();
    this.waitForGameReady();
  }

  createBloodFlashOverlay() {
    if (document.getElementById("blood-flash")) return;
    const flash = document.createElement("div");
    flash.id = "blood-flash";
    document.body.appendChild(flash);
  }

  createVehicleDock() {
    if (document.getElementById("vehicle-dock")) return;
    const hud = document.getElementById("hud");
    if (!hud) return;

    const dock = document.createElement("div");
    dock.id = "vehicle-dock";
    dock.innerHTML = `
      <button class="v-dock-btn active" data-index="0" title="Walk on Foot">
        <span>🚶</span> <span class="v-name">Walk</span>
      </button>
      <button class="v-dock-btn" data-index="1" title="Drive Namma Auto">
        <span>🛺</span> <span class="v-name">Auto</span> <kbd>F</kbd>
      </button>
      <button class="v-dock-btn" data-index="2" title="Drive Bruno Roadster">
        <span>🏎️</span> <span class="v-name">Roadster</span> <kbd>F</kbd>
      </button>
      <button class="v-dock-btn" data-index="3" title="Ride Royal Enfield Bullet">
        <span>🏍️</span> <span class="v-name">Bullet</span> <kbd>F</kbd>
      </button>
      <button class="v-dock-btn" data-index="4" title="Drive BMTC Volvo City Bus">
        <span>🚌</span> <span class="v-name">Bus</span> <kbd>F</kbd>
      </button>
    `;

    hud.appendChild(dock);

    dock.querySelectorAll(".v-dock-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const index = parseInt(btn.dataset.index, 10);
        this.setVehicle(index);
      });
    });
  }

  bindKeyboardShortcuts() {
    window.addEventListener("keydown", (e) => {
      if (e.repeat) return;
      if (e.code === "KeyF") {
        const next = (this.currentVehicleIndex + 1) % this.configs.length;
        this.setVehicle(next);
      }
      if (e.code === "KeyH") {
        this.honk();
      }
    });
  }

  waitForGameReady() {
    const check = () => {
      if (window.__ctx && window.__ctx.player && window.__ctx.scene) {
        this.ctx = window.__ctx;
        this.player = window.__ctx.player;
        this.scene = window.__ctx.scene;
        this.build3DVehicles();
        this.startLoop();
      } else {
        setTimeout(check, 200);
      }
    };
    check();
  }

  build3DVehicles() {
    // 1. Auto Rickshaw Mesh
    const autoGroup = new THREE.Group();
    const yellowMat = new THREE.MeshLambertMaterial({ color: 0xfacc15 });
    const blackMat = new THREE.MeshLambertMaterial({ color: 0x18181b });
    const darkMat = new THREE.MeshLambertMaterial({ color: 0x27272a });
    const glassMat = new THREE.MeshLambertMaterial({ color: 0xa5f3fc, transparent: true, opacity: 0.75 });
    const wheelMat = new THREE.MeshLambertMaterial({ color: 0x09090b });

    // Chassis
    const chassis = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.45, 2.2), darkMat);
    chassis.position.y = 0.45;
    autoGroup.add(chassis);

    // Yellow Canopy
    const canopy = new THREE.Mesh(new THREE.BoxGeometry(1.36, 0.95, 1.4), yellowMat);
    canopy.position.set(0, 1.15, -0.2);
    autoGroup.add(canopy);

    // Windshield
    const windshield = new THREE.Mesh(new THREE.BoxGeometry(1.28, 0.65, 0.05), glassMat);
    windshield.position.set(0, 1.05, 0.55);
    autoGroup.add(windshield);

    // Wheels (3 wheels)
    const wheelGeo = new THREE.CylinderGeometry(0.28, 0.28, 0.16, 12);
    wheelGeo.rotateZ(Math.PI / 2);
    const frontWheel = new THREE.Mesh(wheelGeo, wheelMat);
    frontWheel.position.set(0, 0.28, 0.85);
    autoGroup.add(frontWheel);

    const rearWheelL = new THREE.Mesh(wheelGeo, wheelMat);
    rearWheelL.position.set(-0.68, 0.28, -0.65);
    autoGroup.add(rearWheelL);

    const rearWheelR = new THREE.Mesh(wheelGeo, wheelMat);
    rearWheelR.position.set(0.68, 0.28, -0.65);
    autoGroup.add(rearWheelR);

    // 2. Roadster Mesh
    const roadsterGroup = new THREE.Group();
    const redMat = new THREE.MeshLambertMaterial({ color: 0xdc2626 });
    const carBody = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.55, 3.8), redMat);
    carBody.position.y = 0.45;
    roadsterGroup.add(carBody);

    const cabin = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.55, 1.8), blackMat);
    cabin.position.set(0, 0.95, -0.2);
    roadsterGroup.add(cabin);

    // 4 Car Wheels
    const carWheelGeo = new THREE.CylinderGeometry(0.35, 0.35, 0.22, 12);
    carWheelGeo.rotateZ(Math.PI / 2);
    [[-0.9, 1.1], [0.9, 1.1], [-0.9, -1.1], [0.9, -1.1]].forEach(([x, z]) => {
      const w = new THREE.Mesh(carWheelGeo, wheelMat);
      w.position.set(x, 0.35, z);
      roadsterGroup.add(w);
    });

    // 3. Bullet 350 Motorcycle
    const bulletGroup = new THREE.Group();
    const bikeFrame = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.5, 1.8), blackMat);
    bikeFrame.position.y = 0.55;
    bulletGroup.add(bikeFrame);

    const tank = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.3, 0.65), new THREE.MeshLambertMaterial({ color: 0x15803d }));
    tank.position.set(0, 0.8, 0.1);
    bulletGroup.add(tank);

    const bikeWheelGeo = new THREE.CylinderGeometry(0.38, 0.38, 0.1, 14);
    bikeWheelGeo.rotateZ(Math.PI / 2);
    const bikeFWheel = new THREE.Mesh(bikeWheelGeo, wheelMat);
    bikeFWheel.position.set(0, 0.38, 0.8);
    bulletGroup.add(bikeFWheel);
    const bikeRWheel = new THREE.Mesh(bikeWheelGeo, wheelMat);
    bikeRWheel.position.set(0, 0.38, -0.8);
    bulletGroup.add(bikeRWheel);

    // 4. Volvo Bus Mesh
    const busGroup = new THREE.Group();
    const busBlueMat = new THREE.MeshLambertMaterial({ color: 0x1d4ed8 });
    const busBody = new THREE.Mesh(new THREE.BoxGeometry(2.4, 2.2, 7.5), busBlueMat);
    busBody.position.y = 1.6;
    busGroup.add(busBody);

    const busGlass = new THREE.Mesh(new THREE.BoxGeometry(2.42, 0.85, 6.8), glassMat);
    busGlass.position.set(0, 1.85, 0.2);
    busGroup.add(busGlass);

    // Bus Wheels (6 wheels)
    [[-1.2, 2.2], [1.2, 2.2], [-1.2, -1.8], [1.2, -1.8], [-1.2, -2.8], [1.2, -2.8]].forEach(([x, z]) => {
      const w = new THREE.Mesh(carWheelGeo, wheelMat);
      w.position.set(x, 0.35, z);
      busGroup.add(w);
    });

    this.vehicleMeshes = [null, autoGroup, roadsterGroup, bulletGroup, busGroup];
  }

  setVehicle(index) {
    if (index === this.currentVehicleIndex && this.activeVehicleMesh) return;

    // Remove old mesh
    if (this.activeVehicleMesh && this.activeVehicleMesh.parent) {
      this.activeVehicleMesh.parent.remove(this.activeVehicleMesh);
    }

    this.currentVehicleIndex = index;
    const cfg = this.configs[index];

    // Update Dock UI
    document.querySelectorAll(".v-dock-btn").forEach((btn, i) => {
      btn.classList.toggle("active", i === index);
    });

    if (index > 0 && this.vehicleMeshes[index]) {
      this.activeVehicleMesh = this.vehicleMeshes[index];
      if (this.scene) {
        this.scene.add(this.activeVehicleMesh);
      }
      this.honk();
      this.ctx?.say?.(`Mounted ${cfg.name} · Drive with WASD · H to Honk`);
    } else {
      this.activeVehicleMesh = null;
      this.ctx?.say?.("Walking on Foot");
    }
  }

  honk() {
    const cfg = this.configs[this.currentVehicleIndex];
    if (this.ctx && this.ctx.audio) {
      try {
        this.ctx.audio.play(cfg.horn || "horn", { volume: 0.6 });
      } catch (e) {}
    }
  }

  startLoop() {
    let lastTime = performance.now();

    const loop = (now) => {
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      this.update(dt);
      requestAnimationFrame(loop);
    };

    requestAnimationFrame(loop);
  }

  update(dt) {
    if (!this.player || !this.scene) return;

    const inVehicle = this.currentVehicleIndex > 0;
    const cfg = this.configs[this.currentVehicleIndex];

    // 1. Position vehicle mesh with player
    if (inVehicle && this.activeVehicleMesh) {
      this.activeVehicleMesh.position.set(this.player.x, this.player.y, this.player.z);
      this.activeVehicleMesh.rotation.y = this.player.yaw;

      // Accelerate driving speed when keys are held
      const keys = this.player.keys;
      const isMoving = keys.has("KeyW") || keys.has("KeyS") || keys.has("KeyA") || keys.has("KeyD") ||
                       keys.has("ArrowUp") || keys.has("ArrowDown") || keys.has("ArrowLeft") || keys.has("ArrowRight");

      if (isMoving && !this.player.inOrbit) {
        // Boost speed along movement direction
        const speedMultiplier = cfg.speed / 3.5;
        this.player.speed = cfg.speed;

        let forward = 0;
        let right = 0;
        if (keys.has("KeyW") || keys.has("ArrowUp")) forward += 1;
        if (keys.has("KeyS") || keys.has("ArrowDown")) forward -= 1;
        if (keys.has("KeyD") || keys.has("ArrowRight")) right += 1;
        if (keys.has("KeyA") || keys.has("ArrowLeft")) right -= 1;

        if (forward !== 0 || right !== 0) {
          const moveAngle = this.player.yaw + Math.atan2(right, forward);
          const moveDist = cfg.speed * dt * 0.7; // Controlled speed adjustment
          this.player.x = wrapX(this.player.x + Math.sin(moveAngle) * moveDist);
          this.player.z = this.player.z + Math.cos(moveAngle) * moveDist;
        }
      }
    }

    // 2. Check Pedestrian Hits & Trigger Blood
    if (inVehicle && this.ctx.people && this.ctx.people.people) {
      this.checkPedestrianCollisions(cfg);
    }

    // 3. Update active blood particles and splats
    this.updateBloodParticles(dt);
  }

  checkPedestrianCollisions(cfg) {
    const playerX = this.player.x;
    const playerZ = this.player.z;
    const playerY = this.player.y;
    const hitRadius = cfg.hitRadius;
    const now = performance.now();

    const people = this.ctx.people.people;
    for (let i = 0; i < people.length; i++) {
      const p = people[i];
      if (p.hidden) continue;

      // Check cooldown
      const lastHit = this.hitCooldowns.get(p) || 0;
      if (now - lastHit < 1800) continue; // 1.8s cooldown per person

      // Distance check on planet torus/cylinder
      const dx = wrapX(p.x - playerX);
      const dz = p.z - playerZ;
      const dist = Math.hypot(dx, dz);

      if (dist < hitRadius && Math.abs(p.y - playerY) < 2.0) {
        // STRIKE!
        this.hitCooldowns.set(p, now);
        this.handleHit(p, dx, dz, cfg);
        break; // Max 1 hit evaluation per frame
      }
    }
  }

  handleHit(person, dx, dz, cfg) {
    // 1. Calculate knockback impulse
    const knockAngle = Math.atan2(dx, dz);
    const knockDist = 3.2;
    person.x = wrapX(person.x + Math.sin(knockAngle) * knockDist);
    person.z = person.z + Math.cos(knockAngle) * knockDist;
    person.yaw = knockAngle + Math.PI;

    // 2. Visual affect on person: Flash clothing crimson red
    if (person.cols && person.cols[1]) {
      const origColor = person.cols[1].clone();
      person.cols[1].setHex(0xb91c1c); // Blood crimson
      setTimeout(() => {
        try { person.cols[1].copy(origColor); } catch (e) {}
      }, 1500);
    }

    // 3. Spawn Stylized Blood Particle Burst
    this.spawnBloodBurst(person.x, person.y + 0.8, person.z, knockAngle);

    // 4. Screen Red Flash Feedback
    const flash = document.getElementById("blood-flash");
    if (flash) {
      flash.classList.add("active");
      setTimeout(() => flash.classList.remove("active"), 280);
    }

    // 5. Floating Impact Pop-up
    this.spawnImpactPopup("⚠️ IMPACT!");

    // 6. Sound & Toast
    this.honk();
    if (this.ctx.audio) {
      try {
        this.ctx.audio.play("flutter", { volume: 0.8 });
      } catch (e) {}
    }

    if (this.ctx.toast) {
      this.ctx.toast("अपघात! वाहनाची धडक", `⚠️ Pedestrian Struck by ${cfg.name}!`, true);
    }
  }

  spawnBloodBurst(x, y, z, angle) {
    const count = 22;
    const bloodRedCols = [0x991b1b, 0xb91c1c, 0xdc2626, 0x7f1d1d];

    for (let i = 0; i < count; i++) {
      const size = 0.06 + Math.random() * 0.08;
      const geo = new THREE.BoxGeometry(size, size, size);
      const mat = new THREE.MeshLambertMaterial({
        color: bloodRedCols[Math.floor(Math.random() * bloodRedCols.length)]
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(x, y, z);
      this.scene.add(mesh);

      // Arc velocities
      const spread = (Math.random() - 0.5) * 4.5;
      const speed = 2.5 + Math.random() * 4.0;
      const vx = Math.sin(angle + (Math.random() - 0.5) * 1.2) * speed + spread;
      const vy = 2.0 + Math.random() * 4.5;
      const vz = Math.cos(angle + (Math.random() - 0.5) * 1.2) * speed + spread;

      this.particles.push({
        mesh,
        vx,
        vy,
        vz,
        groundY: y - 0.8,
        life: 1.0
      });
    }

    // Spawn ground blood splat decal
    this.spawnGroundBloodSplat(x, y - 0.78, z);
  }

  spawnGroundBloodSplat(x, y, z) {
    const splatRadius = 0.35 + Math.random() * 0.35;
    const geo = new THREE.CircleGeometry(splatRadius, 8);
    geo.rotateX(-Math.PI / 2);
    const mat = new THREE.MeshBasicMaterial({
      color: 0x7f1d1d,
      transparent: true,
      opacity: 0.85,
      depthWrite: false
    });
    const splat = new THREE.Mesh(geo, mat);
    splat.position.set(x, y + 0.02, z);
    this.scene.add(splat);

    this.splats.push({
      mesh: splat,
      life: 5.0, // Stays for 5 seconds
      maxLife: 5.0
    });
  }

  updateBloodParticles(dt) {
    // 1. Update flying particles
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.life -= dt * 1.2;

      p.vy -= 9.8 * dt; // Gravity
      p.mesh.position.x = wrapX(p.mesh.position.x + p.vx * dt);
      p.mesh.position.y += p.vy * dt;
      p.mesh.position.z += p.vz * dt;

      // Hit ground
      if (p.mesh.position.y <= p.groundY || p.life <= 0) {
        this.scene.remove(p.mesh);
        p.mesh.geometry.dispose();
        p.mesh.material.dispose();
        this.particles.splice(i, 1);
      }
    }

    // 2. Update fading ground splats
    for (let i = this.splats.length - 1; i >= 0; i--) {
      const s = this.splats[i];
      s.life -= dt;
      s.mesh.material.opacity = Math.max(0, (s.life / s.maxLife) * 0.85);

      if (s.life <= 0) {
        this.scene.remove(s.mesh);
        s.mesh.geometry.dispose();
        s.mesh.material.dispose();
        this.splats.splice(i, 1);
      }
    }
  }

  spawnImpactPopup(text) {
    const popup = document.createElement("div");
    popup.className = "impact-popup";
    popup.textContent = text;
    popup.style.left = `${window.innerWidth / 2 + (Math.random() - 0.5) * 80}px`;
    popup.style.top = `${window.innerHeight / 2 - 40}px`;
    document.body.appendChild(popup);
    setTimeout(() => popup.remove(), 1200);
  }
}

// Auto-initialize when ready
export function initVehicleImpactSystem() {
  if (window.__vehicleImpactSystem) return;
  window.__vehicleImpactSystem = new VehicleImpactSystem();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initVehicleImpactSystem);
} else {
  initVehicleImpactSystem();
}
