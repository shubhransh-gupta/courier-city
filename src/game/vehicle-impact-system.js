/**
 * Courier City — Authentic Auto Rickshaw Cockpit Ride & Pedestrian Blood Impact System
 * Matches 100% ditto the native engine Auto Rickshaw summon (V), cockpit sitting (E),
 * driving physics (W/S/A/D/Space), engine audio, suspension, and pedestrian impact blood effects.
 */

import * as THREE from "three";

const LT = 2 * Math.PI * 240; // Planet circumference (~1507.96)

function wrapX(x) {
  return ((x + LT * 0.5) % LT + LT) % LT - LT * 0.5;
}

function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v));
}

export class VehicleImpactSystem {
  constructor() {
    this.ctx = null;
    this.player = null;
    this.scene = null;

    // Auto Rickshaw State
    this.auto = {
      mesh: null,
      x: 0,
      y: 0,
      z: 0,
      yaw: 0,
      pitch: 0,
      roll: 0,
      v: 0,
      steer: 0,
      yawRate: 0,
      bob: 0,
      shown: false,
      riding: false,
      hornHeld: false,
      lastHornTime: 0
    };

    // Blood Particles & Ground Splatters
    this.particles = [];
    this.splats = [];
    this.hitCooldowns = new WeakMap();
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
  }

  resizeCanvas() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  bindKeyboardShortcuts() {
    window.addEventListener("keydown", (e) => {
      if (e.repeat || !this.ctx || !this.player || this.player.orbit?.target > 0.5) return;

      // KeyV: Summon or dismiss the Auto Rickshaw
      if (e.code === "KeyV") {
        this.handleSummonKey();
      }

      // KeyE: Get in or get out of the Auto Rickshaw
      if (e.code === "KeyE") {
        this.handleInteractKey();
      }

      // KeyH or Space: Honk horn while inside auto
      if ((e.code === "KeyH" || e.code === "Space") && this.auto.riding) {
        this.honkAuto();
      }
    });
  }

  waitForGameContext() {
    const check = () => {
      if (window.__ctx && window.__ctx.player && window.__ctx.scene) {
        this.ctx = window.__ctx;
        this.player = window.__ctx.player;
        this.scene = window.__ctx.scene;

        this.buildAutoRickshawMesh();
        this.registerEngineInteractables();
        this.startLoop();
      } else {
        setTimeout(check, 250);
      }
    };
    check();
  }

  buildAutoRickshawMesh() {
    if (this.auto.mesh) return;

    const autoGroup = new THREE.Group();
    autoGroup.name = "AutoRickshaw";

    // Cel-shaded palette
    const matGreen = new THREE.MeshBasicMaterial({ color: 0x1b4d3e }); // Classic Auto Green
    const matYellow = new THREE.MeshBasicMaterial({ color: 0xf7b32b }); // Auto Mustard Yellow
    const matBlack = new THREE.MeshBasicMaterial({ color: 0x231a26 }); // Dark Trim & Tyres
    const matChrome = new THREE.MeshBasicMaterial({ color: 0xd4d4d8 }); // Wheel rims / metal
    const matRoof = new THREE.MeshBasicMaterial({ color: 0xf4ecd8 }); // Cream Canvas Roof
    const matLight = new THREE.MeshBasicMaterial({ color: 0xfef08a }); // Headlight warm glow
    const matRed = new THREE.MeshBasicMaterial({ color: 0xdc2626 }); // Tail lights
    const matGlass = new THREE.MeshBasicMaterial({ color: 0x60a5fa, transparent: true, opacity: 0.45 });

    // 1. Lower Body / Chassis
    const lowerBody = new THREE.Mesh(new THREE.BoxGeometry(1.36, 0.45, 2.5), matGreen);
    lowerBody.position.set(0, 0.45, 0);
    autoGroup.add(lowerBody);

    // 2. Upper Body Hood / Front Cowl
    const upperCowl = new THREE.Mesh(new THREE.BoxGeometry(1.32, 0.52, 1.2), matYellow);
    upperCowl.position.set(0, 0.85, 0.55);
    autoGroup.add(upperCowl);

    // 3. Curved Canvas Canopy Roof
    const roof = new THREE.Mesh(new THREE.BoxGeometry(1.34, 0.08, 1.95), matRoof);
    roof.position.set(0, 1.76, -0.15);
    autoGroup.add(roof);

    // Roof Rib Supports (Pillars)
    const pillarGeom = new THREE.CylinderGeometry(0.025, 0.025, 0.88, 6);
    const p1 = new THREE.Mesh(pillarGeom, matBlack);
    p1.position.set(-0.62, 1.3, 0.65);
    autoGroup.add(p1);

    const p2 = new THREE.Mesh(pillarGeom, matBlack);
    p2.position.set(0.62, 1.3, 0.65);
    autoGroup.add(p2);

    const p3 = new THREE.Mesh(pillarGeom, matBlack);
    p3.position.set(-0.62, 1.3, -1.05);
    autoGroup.add(p3);

    const p4 = new THREE.Mesh(pillarGeom, matBlack);
    p4.position.set(0.62, 1.3, -1.05);
    autoGroup.add(p4);

    // 4. Windscreen Frame & Glass
    const glass = new THREE.Mesh(new THREE.BoxGeometry(1.22, 0.55, 0.03), matGlass);
    glass.position.set(0, 1.34, 0.68);
    autoGroup.add(glass);

    // 5. Front Headlight
    const headlight = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.08, 12), matLight);
    headlight.rotation.x = Math.PI / 2;
    headlight.position.set(0, 0.82, 1.2);
    autoGroup.add(headlight);

    // 6. Tail Lights
    const tailL = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.08, 0.04), matRed);
    tailL.position.set(-0.52, 0.56, -1.26);
    autoGroup.add(tailL);

    const tailR = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.08, 0.04), matRed);
    tailR.position.set(0.52, 0.56, -1.26);
    autoGroup.add(tailR);

    // 7. Wheels (1 Front, 2 Rear)
    const wheelGeom = new THREE.CylinderGeometry(0.28, 0.28, 0.16, 12);
    wheelGeom.rotateZ(Math.PI / 2);

    const frontWheel = new THREE.Mesh(wheelGeom, matBlack);
    frontWheel.position.set(0, 0.28, 1.05);
    autoGroup.add(frontWheel);

    const rearWheelL = new THREE.Mesh(wheelGeom, matBlack);
    rearWheelL.position.set(-0.62, 0.28, -0.68);
    autoGroup.add(rearWheelL);

    const rearWheelR = new THREE.Mesh(wheelGeom, matBlack);
    rearWheelR.position.set(0.62, 0.28, -0.68);
    autoGroup.add(rearWheelR);

    // Hubcaps
    const hubGeom = new THREE.CylinderGeometry(0.12, 0.12, 0.18, 8);
    hubGeom.rotateZ(Math.PI / 2);
    const hubF = new THREE.Mesh(hubGeom, matChrome);
    hubF.position.set(0, 0.28, 1.05);
    autoGroup.add(hubF);

    // 8. Driver Seat & Passenger Seat
    const driverSeat = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.15, 0.4), matBlack);
    driverSeat.position.set(0, 0.65, 0.12);
    autoGroup.add(driverSeat);

    const passengerSeat = new THREE.Mesh(new THREE.BoxGeometry(1.22, 0.18, 0.52), matBlack);
    passengerSeat.position.set(0, 0.68, -0.68);
    autoGroup.add(passengerSeat);

    // 9. Handlebars & Meter
    const handleBar = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.04, 0.04), matChrome);
    handleBar.position.set(0, 1.04, 0.58);
    autoGroup.add(handleBar);

    const meter = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.12, 0.08), matBlack);
    meter.position.set(0, 1.08, 0.62);
    autoGroup.add(meter);

    autoGroup.visible = false;
    this.scene.add(autoGroup);
    this.auto.mesh = autoGroup;
  }

  registerEngineInteractables() {
    if (!this.ctx || !this.ctx.interactables) return;

    // Check if auto interactables already exist
    const hasGetIn = this.ctx.interactables.some((i) => {
      const lbl = typeof i.label === "function" ? i.label(this.ctx) : i.label;
      return lbl && lbl.includes("Get in the auto");
    });

    if (!hasGetIn) {
      // 1. Get in the auto
      this.ctx.interactables.push({
        pos: () => (this.auto.shown && !this.auto.riding ? { x: this.auto.x, z: this.auto.z } : null),
        label: "Get in the auto",
        radius: 3.5,
        fn: () => this.enterAuto()
      });

      // 2. Get out of the auto
      this.ctx.interactables.push({
        pos: () => (this.auto.riding ? { x: this.player.x, z: this.player.z } : null),
        label: "Get out",
        radius: 5.0,
        fn: () => this.exitAuto()
      });
    }

    // Register KeyV hook in engine key map
    if (this.ctx.onKey) {
      this.ctx.onKey("KeyV", () => this.handleSummonKey());
    }
  }

  handleSummonKey() {
    if (!this.player || this.player.inOrbit || this.auto.riding) return;

    // If auto is already shown and nearby, dismiss it
    const distToAuto = this.auto.shown ? Math.hypot(this.auto.x - this.player.x, this.auto.z - this.player.z) : 1e9;
    if (this.auto.shown && distToAuto < 12) {
      this.auto.shown = false;
      if (this.auto.mesh) this.auto.mesh.visible = false;
      this.ctx?.say?.("the auto putters off");
      return;
    }

    // Spawn 4m directly in front of the player
    const fwdX = Math.sin(this.player.yaw);
    const fwdZ = Math.cos(this.player.yaw);
    let sx = this.player.x + fwdX * 4.0;
    let sz = this.player.z + fwdZ * 4.0;

    const groundH = this.ctx.physics?.groundAt ? this.ctx.physics.groundAt(sx, sz, this.player.y + 1) : this.player.y;
    if (groundH < -0.5) {
      this.ctx?.say?.("no auto will come out here");
      return;
    }

    if (this.ctx.physics?.collide) {
      [sx, sz] = this.ctx.physics.collide(sx, sz, 1.1, groundH, 1.8);
    }

    this.auto.x = sx;
    this.auto.z = sz;
    this.auto.y = groundH;
    this.auto.yaw = this.player.yaw + Math.PI / 2;
    this.auto.v = 0;
    this.auto.steer = 0;
    this.auto.pitch = 0;
    this.auto.roll = 0;
    this.auto.shown = true;

    if (this.auto.mesh) {
      this.auto.mesh.visible = true;
      this.syncMeshTransform();
    }

    this.honkAuto();
    this.ctx?.say?.("an auto pulls up · E to get in");
  }

  handleInteractKey() {
    if (this.auto.riding) {
      this.exitAuto();
      return;
    }

    if (this.auto.shown && !this.auto.riding) {
      const dist = Math.hypot(this.auto.x - this.player.x, this.auto.z - this.player.z);
      if (dist < 3.8) {
        this.enterAuto();
      }
    }
  }

  enterAuto() {
    if (!this.player || this.auto.riding) return;

    this.auto.riding = true;
    this.player.mode = "ride";
    this.player.yaw = 0;
    this.player.pitch = -0.06;

    // Built-in camera cockpit attachment hook
    this.player.ride = () => {
      const fwdX = Math.sin(this.auto.yaw);
      const fwdZ = Math.cos(this.auto.yaw);
      const b = 0.12;

      return {
        x: this.auto.x + fwdX * b,
        z: this.auto.z + fwdZ * b,
        y: this.auto.y + 1.4 + Math.sin(this.auto.bob) * 0.012,
        yaw: this.auto.yaw,
        lookYaw: clamp(this.player.yaw, -1.8, 1.8),
        roll: -this.auto.roll * 0.8
      };
    };

    // Engine sound start
    if (this.ctx.audio?.setEngine) {
      this.ctx.audio.setEngine(0.15);
    }

    this.ctx?.say?.("W throttle · S brake · A/D steer · Space horn · E get out");
  }

  exitAuto() {
    if (!this.player || !this.auto.riding) return;

    this.auto.riding = false;
    this.player.mode = "walk";
    this.player.ride = null;

    // Step out beside auto driver side
    const sinY = Math.sin(this.auto.yaw);
    const cosY = Math.cos(this.auto.yaw);
    let exitX = this.auto.x + cosY * 1.55;
    let exitZ = this.auto.z - sinY * 1.55;

    if (this.ctx.physics?.collide) {
      [exitX, exitZ] = this.ctx.physics.collide(exitX, exitZ, 0.35, this.auto.y);
    }

    const exitYaw = this.auto.yaw + clamp(this.player.yaw, -1.8, 1.8);
    this.player.setPose({ x: exitX, z: exitZ, yaw: exitYaw, pitch: this.player.pitch });

    this.auto.v = 0;
    if (this.ctx.audio?.setEngine) {
      this.ctx.audio.setEngine(null);
    }
    this.ctx?.say?.("");
  }

  honkAuto() {
    const now = performance.now();
    if (now - this.auto.lastHornTime < 300) return;
    this.auto.lastHornTime = now;

    if (this.ctx?.audio?.play) {
      try {
        this.ctx.audio.play("autoHorn", { x: this.auto.x, z: this.auto.z, volume: 1.0 });
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
    if (!this.player) return;

    // 1. Process Auto Driving Physics
    if (this.auto.shown) {
      this.updateAutoPhysics(dt);
    }

    // 2. Render and update active blood particles
    if (this.particles.length > 0 || this.splats.length > 0) {
      this.renderBlood(dt);
    }
  }

  updateAutoPhysics(dt) {
    const physics = this.ctx?.physics;
    const player = this.player;

    if (this.auto.riding) {
      const keys = player.keys;
      const throttle = keys.has("KeyW") || keys.has("ArrowUp");
      const brake = keys.has("KeyS") || keys.has("ArrowDown");

      let steerInput = 0;
      if (keys.has("KeyA") || keys.has("ArrowLeft")) steerInput -= 1;
      if (keys.has("KeyD") || keys.has("ArrowRight")) steerInput += 1;

      // Acceleration / Braking
      if (throttle) {
        this.auto.v += (this.auto.v < 0 ? 7.0 : 3.4 * (1.0 - this.auto.v / 9.5)) * dt;
      } else if (brake) {
        this.auto.v += (this.auto.v > 0.1 ? -8.0 : -2.2) * dt;
      } else {
        this.auto.v -= Math.sign(this.auto.v) * Math.min(Math.abs(this.auto.v), 1.4 * dt);
      }
      this.auto.v = clamp(this.auto.v, -2.6, 9.2);

      // Steering
      this.auto.steer += (steerInput * 0.55 - this.auto.steer) * Math.min(1.0, dt * 5.0);
      this.auto.yawRate = -this.auto.steer * this.auto.v / 1.7;
      this.auto.yaw += this.auto.yawRate * dt;

      // Position update
      const sinY = Math.sin(this.auto.yaw);
      const cosY = Math.cos(this.auto.yaw);
      let nextX = this.auto.x + sinY * this.auto.v * dt;
      let nextZ = this.auto.z + cosY * this.auto.v * dt;

      // Water / Sea check
      if (physics?.groundAt && physics.groundAt(nextX, nextZ, this.auto.y + 0.2) < -0.45) {
        nextX = this.auto.x;
        nextZ = this.auto.z;
        this.auto.v *= -0.2;
        this.ctx?.say?.("the sea is not a road");
      }

      // Obstacle collision
      if (physics?.collide) {
        const [cx, cz] = physics.collide(nextX, nextZ, 0.95, this.auto.y, 1.8, 0.4);
        const bump = Math.hypot(cx - nextX, cz - nextZ);
        if (bump > 0.02 && Math.abs(this.auto.v) > 2.5) {
          this.auto.v *= 0.55;
          this.ctx.audio?.play?.("bump", { x: cx, z: cz });
        } else if (bump > 0.02) {
          this.auto.v *= 0.9;
        }
        nextX = cx;
        nextZ = cz;
      }

      this.auto.x = wrapX(nextX);
      this.auto.z = nextZ;

      // Engine audio modulation
      if (this.ctx.audio?.setEngine) {
        const pitch = 0.15 + (Math.abs(this.auto.v) / 9.2) * 0.85 * (throttle ? 1.0 : 0.7);
        this.ctx.audio.setEngine(pitch);
      }

      // Suspension bobbing
      this.auto.bob += dt * (8.0 + Math.abs(this.auto.v) * 2.0);

      // Keep player position anchored to auto
      player.x = this.auto.x;
      player.z = this.auto.z;
      player.y = this.auto.y;
      player.yaw = clamp(player.yaw, -1.8, 1.8);

      // Check pedestrian blood strikes
      if (Math.abs(this.auto.v) > 1.2 && this.ctx?.people?.people) {
        this.checkPedestrianCollisions();
      }
    } else {
      this.auto.v = 0;
      this.auto.yawRate = 0;
      this.auto.steer *= 0.9;
    }

    // Ground elevation, pitch and roll
    if (physics?.groundAt) {
      const sinY = Math.sin(this.auto.yaw);
      const cosY = Math.cos(this.auto.yaw);
      const frontGround = physics.groundAt(this.auto.x + sinY * 0.9, this.auto.z + cosY * 0.9, this.auto.y + 0.5);
      const rearGround = physics.groundAt(this.auto.x - sinY * 0.85, this.auto.z - cosY * 0.85, this.auto.y + 0.5);
      const midGround = Math.max(physics.groundAt(this.auto.x, this.auto.z, this.auto.y + 0.5), (frontGround + rearGround) * 0.5);

      this.auto.y += (midGround - this.auto.y) * Math.min(1.0, dt * 14.0);
      const targetPitch = -Math.atan2(frontGround - rearGround, 1.75);
      this.auto.pitch += (targetPitch - this.auto.pitch) * Math.min(1.0, dt * 10.0);

      const targetRoll = clamp(-this.auto.yawRate * Math.abs(this.auto.v) * 0.012, -0.12, 0.12);
      this.auto.roll += (targetRoll - this.auto.roll) * Math.min(1.0, dt * 4.0);
    }

    this.syncMeshTransform();

    if (this.auto.riding && player.placeCamera) {
      player.placeCamera();
    }
  }

  syncMeshTransform() {
    if (!this.auto.mesh) return;
    const bobOffset = this.auto.riding ? Math.sin(this.auto.bob) * 0.012 : 0;
    this.auto.mesh.position.set(this.auto.x, this.auto.y + bobOffset, this.auto.z);
    this.auto.mesh.rotation.set(this.auto.pitch, this.auto.yaw, this.auto.roll, "YXZ");
  }

  checkPedestrianCollisions() {
    const px = this.auto.x;
    const pz = this.auto.z;
    const py = this.auto.y;
    const now = performance.now();
    const hitRadius = 2.4;

    const people = this.ctx.people.people;
    for (let i = 0; i < people.length; i++) {
      const p = people[i];
      if (p.hidden) continue;

      const lastHit = this.hitCooldowns.get(p) || 0;
      if (now - lastHit < 2200) continue; // 2.2s cooldown

      const dx = wrapX(p.x - px);
      const dz = p.z - pz;
      const dist = Math.hypot(dx, dz);

      if (dist < hitRadius && Math.abs(p.y - py) < 2.2) {
        this.hitCooldowns.set(p, now);
        this.handlePedestrianHit(p, dx, dz);
        break; // Max 1 hit per frame
      }
    }
  }

  handlePedestrianHit(person, dx, dz) {
    const angle = Math.atan2(dx, dz);

    // 1. Knockback impulse
    person.x = wrapX(person.x + Math.sin(angle) * 3.8);
    person.z = person.z + Math.cos(angle) * 3.8;
    person.yaw = angle + Math.PI;

    // 2. Flash clothing crimson red
    if (person.cols && person.cols[1]) {
      const orig = person.cols[1].clone();
      person.cols[1].setHex(0xb91c1c);
      setTimeout(() => {
        try { person.cols[1].copy(orig); } catch (e) {}
      }, 1600);
    }

    // 3. Spawn Blood Droplet Spray Particles
    this.spawnBloodBurst();

    // 4. Red Screen Vignette Flash
    const flash = document.getElementById("blood-flash");
    if (flash) {
      flash.classList.add("active");
      setTimeout(() => flash.classList.remove("active"), 260);
    }

    // 5. Floating Impact Indicator
    this.spawnImpactPopup("⚠️ IMPACT!");

    // 6. Audio
    this.honkAuto();
    if (this.ctx?.audio?.play) {
      try {
        this.ctx.audio.play("flutter", { volume: 0.8 });
      } catch (e) {}
    }
  }

  spawnBloodBurst() {
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight * 0.58;
    const count = 28;
    const bloodColors = ["#991b1b", "#b91c1c", "#dc2626", "#7f1d1d"];

    for (let i = 0; i < count; i++) {
      const speed = 120 + Math.random() * 260;
      const dir = Math.random() * Math.PI * 2;
      this.particles.push({
        x: cx + (Math.random() - 0.5) * 40,
        y: cy + (Math.random() - 0.5) * 30,
        vx: Math.cos(dir) * speed,
        vy: Math.sin(dir) * speed - 160,
        size: 3.5 + Math.random() * 5.0,
        color: bloodColors[Math.floor(Math.random() * bloodColors.length)],
        life: 0.8 + Math.random() * 0.4,
        maxLife: 1.2
      });
    }

    // Ground splatter decal
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

    // 1. Draw Ground Splatters
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
