/**
 * Courier City — Vehicle Driving & Pedestrian Impact Blood System
 * Lightweight, zero-overhead extension. Preserves 100% of native diorama engine flow.
 */

const LT = 2 * Math.PI * 240; // Circular planet circumference (~1507.96)

function wrapX(x) {
  return ((x + LT * 0.5) % LT + LT) % LT - LT * 0.5;
}

export class VehicleImpactSystem {
  constructor() {
    this.ctx = null;
    this.player = null;
    this.inVehicle = false;
    this.hitCooldowns = new WeakMap();
    this.particles = [];
    this.splats = [];
    this.canvas = null;
    this.ctx2d = null;

    this.init();
  }

  init() {
    this.createDomElements();
    this.bindKeyboardShortcuts();
    this.waitForGameContext();
  }

  createDomElements() {
    // 1. Blood Flash Vignette
    if (!document.getElementById("blood-flash")) {
      const flash = document.createElement("div");
      flash.id = "blood-flash";
      document.body.appendChild(flash);
    }

    // 2. High-performance 2D Blood Particle Canvas Overlay
    if (!document.getElementById("blood-canvas")) {
      this.canvas = document.createElement("canvas");
      this.canvas.id = "blood-canvas";
      this.canvas.style.cssText = "position:fixed;inset:0;width:100vw;height:100vh;pointer-events:none;z-index:999;";
      document.body.appendChild(this.canvas);
      this.ctx2d = this.canvas.getContext("2d");
      this.resizeCanvas();
      window.addEventListener("resize", () => this.resizeCanvas());
    }

    // 3. Vehicle HUD Badge
    if (!document.getElementById("vehicle-badge")) {
      const badge = document.createElement("div");
      badge.id = "vehicle-badge";
      badge.className = "vehicle-hud-badge";
      badge.style.display = "none";
      badge.innerHTML = `<span>🛺 Namma Auto</span> <kbd>H</kbd> Honk <kbd>F</kbd> Exit`;
      document.body.appendChild(badge);
    }
  }

  resizeCanvas() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  bindKeyboardShortcuts() {
    window.addEventListener("keydown", (e) => {
      if (e.repeat) return;
      if (e.code === "KeyF") {
        this.toggleVehicle();
      }
      if (e.code === "KeyH") {
        this.honk();
      }
    });
  }

  toggleVehicle() {
    if (!this.player) return;
    this.inVehicle = !this.inVehicle;

    const badge = document.getElementById("vehicle-badge");
    if (this.inVehicle) {
      if (badge) badge.style.display = "flex";
      this.honk();
      this.ctx?.say?.("Mounted Namma Auto · Drive with WASD · H to Honk");
    } else {
      if (badge) badge.style.display = "none";
      this.ctx?.say?.("Walking on Foot");
    }
  }

  honk() {
    if (this.ctx?.audio) {
      try {
        this.ctx.audio.play("autoHorn", { volume: 0.7 });
      } catch (e) {}
    }
  }

  waitForGameContext() {
    const check = () => {
      if (window.__ctx && window.__ctx.player) {
        this.ctx = window.__ctx;
        this.player = window.__ctx.player;
        this.startLoop();
      } else {
        setTimeout(check, 300);
      }
    };
    check();
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
    if (!this.player) return;

    // 1. Vehicle Movement Speed Adjustment
    if (this.inVehicle) {
      const keys = this.player.keys;
      const isMoving = keys.has("KeyW") || keys.has("KeyS") || keys.has("KeyA") || keys.has("KeyD") ||
                       keys.has("ArrowUp") || keys.has("ArrowDown") || keys.has("ArrowLeft") || keys.has("ArrowRight");

      if (isMoving && !this.player.inOrbit) {
        this.player.speed = 13.5; // Auto Rickshaw transit speed

        let forward = 0;
        let right = 0;
        if (keys.has("KeyW") || keys.has("ArrowUp")) forward += 1;
        if (keys.has("KeyS") || keys.has("ArrowDown")) forward -= 1;
        if (keys.has("KeyD") || keys.has("ArrowRight")) right += 1;
        if (keys.has("KeyA") || keys.has("ArrowLeft")) right -= 1;

        if (forward !== 0 || right !== 0) {
          const moveAngle = this.player.yaw + Math.atan2(right, forward);
          const moveDist = 13.5 * dt * 0.65;
          this.player.x = wrapX(this.player.x + Math.sin(moveAngle) * moveDist);
          this.player.z = this.player.z + Math.cos(moveAngle) * moveDist;
        }
      }

      // Check collision with pedestrians
      if (this.ctx?.people?.people) {
        this.checkPedestrianCollisions();
      }
    }

    // 2. Render and update active blood particles
    if (this.particles.length > 0 || this.splats.length > 0) {
      this.renderBlood(dt);
    }
  }

  checkPedestrianCollisions() {
    const px = this.player.x;
    const pz = this.player.z;
    const py = this.player.y;
    const now = performance.now();
    const hitRadius = 2.4;

    const people = this.ctx.people.people;
    for (let i = 0; i < people.length; i++) {
      const p = people[i];
      if (p.hidden) continue;

      const lastHit = this.hitCooldowns.get(p) || 0;
      if (now - lastHit < 2000) continue; // 2s cooldown

      const dx = wrapX(p.x - px);
      const dz = p.z - pz;
      const dist = Math.hypot(dx, dz);

      if (dist < hitRadius && Math.abs(p.y - py) < 2.2) {
        this.hitCooldowns.set(p, now);
        this.handleHit(p, dx, dz);
        break; // Max 1 hit per frame
      }
    }
  }

  handleHit(person, dx, dz) {
    const angle = Math.atan2(dx, dz);

    // 1. Knockback impulse
    person.x = wrapX(person.x + Math.sin(angle) * 3.6);
    person.z = person.z + Math.cos(angle) * 3.6;
    person.yaw = angle + Math.PI;

    // 2. Flash clothing crimson red
    if (person.cols && person.cols[1]) {
      const orig = person.cols[1].clone();
      person.cols[1].setHex(0xb91c1c);
      setTimeout(() => {
        try { person.cols[1].copy(orig); } catch (e) {}
      }, 1600);
    }

    // 3. Spawn Stylized Blood Particle Burst
    this.spawnBloodBurst();

    // 4. Red Screen Vignette Flash
    const flash = document.getElementById("blood-flash");
    if (flash) {
      flash.classList.add("active");
      setTimeout(() => flash.classList.remove("active"), 260);
    }

    // 5. Floating Impact Indicator
    this.spawnImpactPopup("⚠️ IMPACT!");

    // 6. Audio & Toast
    this.honk();
    if (this.ctx?.audio) {
      try {
        this.ctx.audio.play("flutter", { volume: 0.8 });
      } catch (e) {}
    }

    if (this.ctx?.toast) {
      this.ctx.toast("अपघात! वाहनाची धडक", "⚠️ Pedestrian Struck!", true);
    }
  }

  spawnBloodBurst() {
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight * 0.58;
    const count = 26;
    const bloodColors = ["#991b1b", "#b91c1c", "#dc2626", "#7f1d1d"];

    for (let i = 0; i < count; i++) {
      const speed = 120 + Math.random() * 260;
      const dir = Math.random() * Math.PI * 2;
      this.particles.push({
        x: cx + (Math.random() - 0.5) * 40,
        y: cy + (Math.random() - 0.5) * 30,
        vx: Math.cos(dir) * speed,
        vy: Math.sin(dir) * speed - 160, // Initial upward arc
        size: 3.5 + Math.random() * 5.0,
        color: bloodColors[Math.floor(Math.random() * bloodColors.length)],
        life: 0.8 + Math.random() * 0.4,
        maxLife: 1.2
      });
    }

    // Ground splat circle on screen bottom
    this.splats.push({
      x: cx + (Math.random() - 0.5) * 120,
      y: cy + 60 + (Math.random() - 0.5) * 40,
      r: 25 + Math.random() * 30,
      life: 4.5,
      maxLife: 4.5
    });
  }

  renderBlood(dt) {
    if (!this.ctx2d) return;
    const g = this.ctx2d;
    g.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // 1. Draw Ground Splats
    for (let i = this.splats.length - 1; i >= 0; i--) {
      const s = this.splats[i];
      s.life -= dt;
      const alpha = Math.max(0, (s.life / s.maxLife) * 0.75);

      g.save();
      g.fillStyle = `rgba(127, 29, 29, ${alpha})`;
      g.beginPath();
      g.ellipse(s.x, s.y, s.r, s.r * 0.45, 0, 0, Math.PI * 2);
      g.fill();
      g.restore();

      if (s.life <= 0) {
        this.splats.splice(i, 1);
      }
    }

    // 2. Draw Flying Blood Droplets
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.life -= dt;
      p.vy += 420 * dt; // Gravity
      p.x += p.vx * dt;
      p.y += p.vy * dt;

      const alpha = Math.max(0, p.life / p.maxLife);
      g.save();
      g.globalAlpha = alpha;
      g.fillStyle = p.color;
      g.beginPath();
      g.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      g.fill();
      g.restore();

      if (p.life <= 0) {
        this.particles.splice(i, 1);
      }
    }
  }

  spawnImpactPopup(text) {
    const popup = document.createElement("div");
    popup.className = "impact-popup";
    popup.textContent = text;
    popup.style.left = `${window.innerWidth / 2 + (Math.random() - 0.5) * 60}px`;
    popup.style.top = `${window.innerHeight * 0.45}px`;
    document.body.appendChild(popup);
    setTimeout(() => popup.remove(), 900);
  }
}

export function initVehicleImpactSystem() {
  if (window.__vehicleImpactSystem) return;
  window.__vehicleImpactSystem = new VehicleImpactSystem();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initVehicleImpactSystem);
} else {
  initVehicleImpactSystem();
}
