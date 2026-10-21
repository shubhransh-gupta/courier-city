export class Minimap {
  constructor(canvasId, game = null) {
    this.canvas = document.getElementById(canvasId);
    this.game = game;
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.range = 190;

    this.globeRotation = 0;
    this.lastDrawTime = 0;
    this.pulsePhase = 0;

    this.landmarks = [
      { name: "⚡ Founder's (Stark)", x: -70, z: 130, color: '#38bdf8', icon: '⚡' },
      { name: '🎓 BNMIT', x: -140, z: 160, color: '#9f1239', icon: '🎓' },
      { name: '⛰️ KS Layout', x: -200, z: 180, color: '#c2410c', icon: '⛰️' },
      { name: '🇮🇳 Flag (55m)', x: 0, z: -20, color: '#f97316', icon: '🇮🇳' },
      { name: '🛩️ IAF HQ', x: 180, z: -240, color: '#0284c7', icon: '🛩️' },
      { name: '🎖️ Army HQ', x: -180, z: 220, color: '#15803d', icon: '🎖️' },
      { name: '🛕 Someshwara', x: -60, z: -160, color: '#d97706', icon: '🛕' },
      { name: '🐂 Bull Temple', x: 100, z: 180, color: '#78350f', icon: '🐂' },
      { name: '✨ ISKCON', x: 220, z: -120, color: '#eab308', icon: '✨' },
      { name: '🎓 BMS College', x: -120, z: -120, color: '#991b1b', icon: '🎓' },
      { name: '🔬 IISc', x: -60, z: 180, color: '#475569', icon: '🔬' },
      { name: '🏢 HSR BDA', x: 60, z: 100, color: '#0284c7', icon: '🏢' },
      { name: '🏢 Koramangala BDA', x: -100, z: 120, color: '#d97706', icon: '🏢' },
      { name: '🌳 HSR Park', x: 80, z: 40, color: '#16a34a', icon: '🌳' },
      { name: '🌳 Kora Park', x: -140, z: 60, color: '#15803d', icon: '🌳' },
      { name: '🏛️ Vidhana Soudha', x: -240, z: -40, color: '#f59e0b', icon: '🏛️' },
      { name: '🚊 Silk Board Metro', x: 24, z: 20, color: '#10b981', icon: '🚊' },
      { name: '🚊 HSR Metro', x: 24, z: 180, color: '#059669', icon: '🚊' },
      { name: '🏙️ UB City', x: -60, z: -100, color: '#eab308', icon: '🏙️' },
      { name: '🛍️ Orion Mall', x: 240, z: 320, color: '#ec4899', icon: '🛍️' },
      { name: '🌿 Lalbagh', x: -140, z: 280, color: '#16a34a', icon: '🌿' },
      { name: '✈️ Airport', x: 300, z: -380, color: '#2563eb', icon: '✈️' },
      { name: '🏰 Tipu Palace', x: -160, z: -80, color: '#b45309', icon: '🏰' },
      { name: '👑 Mysore Palace', x: -300, z: 120, color: '#f59e0b', icon: '👑' },
      { name: '🍲 Food Street', x: -40, z: 220, color: '#ef4444', icon: '🍲' },
      { name: '🏛️ Russell Mkt', x: 100, z: -140, color: '#991b1b', icon: '🏛️' }
    ];

    this.initInteraction();
  }

  setGame(game) {
    this.game = game;
  }

  initInteraction() {
    if (!this.canvas) return;
    this.canvas.style.cursor = 'pointer';

    const triggerOpen = (e) => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      if (this.game && this.game.fullMapOverlay) {
        this.game.fullMapOverlay.toggle(true);
      }
    };

    this.canvas.addEventListener('click', triggerOpen);
    this.canvas.addEventListener('touchend', triggerOpen);
  }

  update(playerPos, playerAngle, vehicles, gpsTarget = null) {
    if (!this.ctx || !playerPos) return;

    const now = performance.now();
    const dt = Math.min(0.05, (now - (this.lastDrawTime || now)) * 0.001);
    if (now - this.lastDrawTime < 33) return; // ~30 FPS throttle
    this.lastDrawTime = now;

    this.globeRotation += dt * 0.35;
    this.pulsePhase += dt * 3.5;

    const ctx = this.ctx;
    const w = this.width;
    const h = this.height;
    const cx = w / 2;
    const cy = h / 2;
    const radius = w / 2 - 6;

    ctx.clearRect(0, 0, w, h);

    // 1. Atmosphere Rim Glow (Radiant blue/cyan outer haze)
    const atmoGlow = ctx.createRadialGradient(cx, cy, radius * 0.85, cx, cy, radius + 5);
    atmoGlow.addColorStop(0, 'rgba(56, 189, 248, 0.45)');
    atmoGlow.addColorStop(0.6, 'rgba(14, 165, 233, 0.2)');
    atmoGlow.addColorStop(1, 'rgba(2, 132, 199, 0)');
    ctx.beginPath();
    ctx.arc(cx, cy, radius + 5, 0, Math.PI * 2);
    ctx.fillStyle = atmoGlow;
    ctx.fill();

    // 2. Realistic 3D Globe Body (Radial sphere lighting)
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.clip();

    // Deep ocean sphere gradient
    const oceanGrad = ctx.createRadialGradient(
      cx - radius * 0.35, cy - radius * 0.35, radius * 0.05,
      cx, cy, radius
    );
    oceanGrad.addColorStop(0, '#38bdf8');     // Bright sunlight specular
    oceanGrad.addColorStop(0.25, '#0284c7');  // Tropical blue ocean
    oceanGrad.addColorStop(0.7, '#0f172a');   // Deep ocean navy
    oceanGrad.addColorStop(1, '#020617');     // Twilight edge terminator
    ctx.fillStyle = oceanGrad;
    ctx.fillRect(0, 0, w, h);

    // 3. Rotating 3D Graticule (Curved Latitude and Longitude Lines)
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
    ctx.lineWidth = 1;

    // Latitude parallels
    [-0.6, -0.3, 0, 0.3, 0.6].forEach(lat => {
      const latY = cy + lat * radius * 0.9;
      const latR = Math.sqrt(Math.max(0, radius * radius - (latY - cy) * (latY - cy)));
      ctx.beginPath();
      ctx.ellipse(cx, latY, latR, latR * 0.28, 0, 0, Math.PI * 2);
      ctx.stroke();
    });

    // Rotating Longitude meridians
    for (let m = 0; m < 6; m++) {
      const lonAngle = this.globeRotation + (m / 6) * Math.PI * 2;
      const cosLon = Math.cos(lonAngle);
      if (cosLon > -0.1) {
        ctx.beginPath();
        ctx.ellipse(cx, cy, radius * Math.abs(cosLon), radius, 0, 0, Math.PI * 2);
        ctx.stroke();
      }
    }

    // 4. Stylized Rotating Landmasses (Continents & Bengaluru terrain)
    ctx.fillStyle = 'rgba(34, 197, 94, 0.32)';
    for (let c = 0; c < 4; c++) {
      const continentLon = this.globeRotation + (c / 4) * Math.PI * 2;
      const cX = cx + Math.sin(continentLon) * radius * 0.7;
      const cY = cy + Math.cos(continentLon * 1.5) * radius * 0.25;
      const cVis = Math.cos(continentLon);

      if (cVis > 0) {
        ctx.beginPath();
        ctx.ellipse(cX, cY, radius * 0.32 * cVis, radius * 0.24, 0.2, 0, Math.PI * 2);
        ctx.fill();

        // Subcontinent secondary patch
        ctx.beginPath();
        ctx.ellipse(cX - radius * 0.15 * cVis, cY + radius * 0.18, radius * 0.18 * cVis, radius * 0.14, -0.3, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // 5. Regional City Terrain & Roads on the Globe Face
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(-playerAngle);

    const scale = (radius * 0.75) / this.range;
    const px = playerPos.x * scale;
    const pz = playerPos.z * scale;

    // Arterial highways on local globe patch
    ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
    const roadW = Math.max(2, 14 * scale);
    const roadLen = 800 * scale;
    ctx.fillRect(-px - roadLen / 2, -pz - roadW / 2, roadLen, roadW);
    ctx.fillRect(-px - roadW / 2, -pz - roadLen / 2, roadW, roadLen);

    // Nearby landmarks on globe
    for (const lm of this.landmarks) {
      const lx = (lm.x - playerPos.x) * scale;
      const lz = (lm.z - playerPos.z) * scale;
      const distSq = lx * lx + lz * lz;

      if (distSq < radius * radius * 0.7) {
        ctx.beginPath();
        ctx.arc(lx, lz, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = lm.color || '#38bdf8';
        ctx.fill();
      }
    }

    // GPS route line to target
    if (gpsTarget) {
      const tx = (gpsTarget.x - playerPos.x) * scale;
      const tz = (gpsTarget.z - playerPos.z) * scale;
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 2;
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(tx, tz);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // Live Player Direction Heading Arrow
    ctx.beginPath();
    ctx.moveTo(0, -9);
    ctx.lineTo(5, 5);
    ctx.lineTo(0, 2);
    ctx.lineTo(-5, 5);
    ctx.closePath();
    ctx.fillStyle = '#ef4444';
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 1.2;
    ctx.stroke();

    ctx.restore();

    // 6. Live Pulsing Beacon Wave on Player Position (Sonar Ping)
    const waveRadius = 4 + (Math.sin(this.pulsePhase) + 1) * 8;
    const waveAlpha = Math.max(0, 1 - (waveRadius / 20));
    ctx.beginPath();
    ctx.arc(cx, cy, waveRadius, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(239, 68, 68, ${waveAlpha})`;
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // 7. Glass Sphere Curvature Specular Highlight (Tactile 3D Lens)
    const specGrad = ctx.createLinearGradient(cx - radius, cy - radius, cx + radius * 0.5, cy + radius * 0.5);
    specGrad.addColorStop(0, 'rgba(255, 255, 255, 0.45)');
    specGrad.addColorStop(0.3, 'rgba(255, 255, 255, 0.1)');
    specGrad.addColorStop(0.6, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = specGrad;
    ctx.beginPath();
    ctx.ellipse(cx - radius * 0.25, cy - radius * 0.35, radius * 0.65, radius * 0.38, -0.4, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();

    // 8. Outer Metallic / Cyan Bezel Frame
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.85)';
    ctx.stroke();

    // Compass North Marker
    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 9px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('N', cx, 11);
  }
}
