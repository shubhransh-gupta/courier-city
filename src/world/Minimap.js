export class Minimap {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.range = 190; // Radar range (meters)

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
    this.lastDrawTime = 0;
  }

  update(playerPos, playerAngle, vehicles, gpsTarget = null) {
    if (!this.ctx) return;

    // Throttle Minimap 2D canvas redraw to ~25 FPS to save massive CPU/GPU fillrate
    const now = performance.now();
    if (now - this.lastDrawTime < 40) return;
    this.lastDrawTime = now;

    const ctx = this.ctx;
    const w = this.width;
    const h = this.height;
    const cx = w / 2;
    const cy = h / 2;
    const radarRadius = w / 2 - 3;

    ctx.clearRect(0, 0, w, h);

    // 1. Radar Circular Frame & Clip
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, radarRadius, 0, Math.PI * 2);
    ctx.fillStyle = '#0f172a'; // Deep radar dark background
    ctx.fill();
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = '#38bdf8';
    ctx.stroke();
    ctx.clip();

    // 2. Rotate map with player facing
    ctx.translate(cx, cy);
    ctx.rotate(-playerAngle);

    const scale = (w / 2) / this.range;
    const px = playerPos.x * scale;
    const pz = playerPos.z * scale;

    // Ground Grid / Rings
    ctx.strokeStyle = 'rgba(51, 65, 85, 0.4)';
    ctx.lineWidth = 1;
    [40 * scale, 80 * scale, 120 * scale, 160 * scale].forEach(r => {
      ctx.beginPath();
      ctx.arc(0, 0, r, 0, Math.PI * 2);
      ctx.stroke();
    });

    // Arterial Highways on radar
    ctx.fillStyle = '#334155';
    const roadW = 16 * scale;
    const roadLen = 1200 * scale;

    ctx.fillRect(-px - roadLen / 2, -pz - roadW / 2, roadLen, roadW);
    ctx.fillRect(-px - roadW / 2, -pz - roadLen / 2, roadW, roadLen);

    [-200, 200].forEach(coord => {
      const c = coord * scale;
      ctx.fillRect(-px - roadLen / 2, -pz + c - roadW / 2, roadLen, roadW);
      ctx.fillRect(-px + c - roadW / 2, -pz - roadLen / 2, roadW, roadLen);
    });

    // BDA Public Parks on radar
    ctx.fillStyle = '#15803d';
    ctx.fillRect(80 * scale - px - 25 * scale, 40 * scale - pz - 20 * scale, 50 * scale, 40 * scale);
    ctx.fillRect(-140 * scale - px - 25 * scale, 60 * scale - pz - 20 * scale, 50 * scale, 40 * scale);

    // Namma Metro Elevated Viaduct on radar (Green & Purple line along x = 24)
    const metroX = 24 * scale - px;
    ctx.fillStyle = '#16a34a';
    ctx.fillRect(metroX - 1.5, -pz - 60 * scale, 3, 320 * scale);
    ctx.fillStyle = '#7e22ce';
    ctx.fillRect(metroX - 0.6, -pz - 60 * scale, 1.2, 320 * scale);

    // Vidhana Soudha Grand Boulevard on radar
    ctx.fillStyle = '#f59e0b';
    ctx.fillRect(-240 * scale - px, -44 * scale - pz, 40 * scale, 10 * scale);

    // River on radar
    ctx.fillStyle = '#0284c7';
    ctx.fillRect(380 * scale - px - (35 * scale), -pz - (600 * scale), 70 * scale, 1200 * scale);

    // 3. Landmarks markers
    this.landmarks.forEach(lm => {
      const lx = (lm.x - playerPos.x) * scale;
      const lz = (lm.z - playerPos.z) * scale;

      // Only draw if within a reasonable distance
      if (Math.hypot(lx, lz) < radarRadius + 20) {
        ctx.save();
        ctx.translate(lx, lz);
        ctx.fillStyle = lm.color;
        ctx.beginPath();
        ctx.arc(0, 0, 4.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1.2;
        ctx.stroke();

        ctx.fillStyle = '#f8fafc';
        ctx.font = 'bold 8px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(lm.name.split(' ')[1] || lm.name, 0, -6);
        ctx.restore();
      }
    });

    // 4. Vehicle blips
    vehicles.forEach(veh => {
      const vx = (veh.position.x - playerPos.x) * scale;
      const vz = (veh.position.z - playerPos.z) * scale;

      ctx.save();
      ctx.translate(vx, vz);
      const hexCol = (veh.color !== undefined && veh.color !== null)
        ? '#' + veh.color.toString(16).padStart(6, '0')
        : (veh.isSportsCar ? '#0284c7' : (veh.isMonsterTruck ? '#dc2626' : (veh.isBmtcBus ? '#059669' : '#38bdf8')));
      ctx.fillStyle = hexCol;
      ctx.beginPath();
      ctx.arc(0, 0, 3.8, 0, Math.PI * 2);
      ctx.fill();
      ctx.lineWidth = 1.0;
      ctx.strokeStyle = '#ffffff';
      ctx.stroke();
      ctx.restore();
    });

    // 5. GPS NAVIGATION ROUTE & WAYPOINT
    let outOfBoundsGps = null;

    if (gpsTarget) {
      const tx = (gpsTarget.x - playerPos.x) * scale;
      const tz = (gpsTarget.z - playerPos.z) * scale;
      const totalDist = Math.hypot(gpsTarget.x - playerPos.x, gpsTarget.z - playerPos.z);
      const radarDist = Math.hypot(tx, tz);

      // Draw Animated Glowing GPS Route Trail
      ctx.save();
      // Route outer neon glow
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.4)';
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(tx, tz);
      ctx.stroke();

      // Route animated dash line
      ctx.strokeStyle = '#06b6d4';
      ctx.lineWidth = 2.8;
      ctx.setLineDash([5, 4]);
      ctx.lineDashOffset = -(now * 0.02) % 9;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(tx, tz);
      ctx.stroke();
      ctx.restore();

      if (radarDist <= radarRadius - 8) {
        // Target is INSIDE the radar bounds
        ctx.save();
        ctx.translate(tx, tz);

        // Pulsing radar ripple
        const pulse = (Math.sin(now * 0.008) + 1) * 0.5;
        ctx.beginPath();
        ctx.arc(0, 0, 6 + pulse * 6, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(6, 182, 212, 0.35)';
        ctx.fill();

        ctx.beginPath();
        ctx.arc(0, 0, 5, 0, Math.PI * 2);
        ctx.fillStyle = '#06b6d4';
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Target name & distance tag
        ctx.fillStyle = '#38bdf8';
        ctx.font = 'bold 9px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(`${gpsTarget.icon || '📍'} ${Math.round(totalDist)}m`, 0, -9);
        ctx.restore();
      } else {
        // Target is OUTSIDE the radar bounds -> save for perimeter indicator
        const angle = Math.atan2(tz, tx);
        outOfBoundsGps = {
          angle,
          dist: Math.round(totalDist),
          name: gpsTarget.name,
          icon: gpsTarget.icon || '📍'
        };
      }
    }

    ctx.restore(); // Restore radar rotation

    // 6. Draw Out-Of-Bounds Edge Directional Chevron Pointer
    if (outOfBoundsGps) {
      const edgeRadius = radarRadius - 12;
      // Note: in unrotated canvas space, outOfBoundsGps.angle needs to be offset by playerAngle
      const screenAngle = outOfBoundsGps.angle - playerAngle;
      const ex = cx + Math.cos(screenAngle) * edgeRadius;
      const ey = cy + Math.sin(screenAngle) * edgeRadius;

      ctx.save();
      ctx.translate(ex, ey);
      ctx.rotate(screenAngle);

      // Glowing waypoint arrow pointing outwards to destination
      ctx.fillStyle = '#06b6d4';
      ctx.beginPath();
      ctx.moveTo(8, 0);
      ctx.lineTo(-5, -6);
      ctx.lineTo(-2, 0);
      ctx.lineTo(-5, 6);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1.2;
      ctx.stroke();

      // Distance badge
      ctx.rotate(-screenAngle); // Keep text upright
      ctx.fillStyle = '#0f172a';
      ctx.beginPath();
      ctx.roundRect(-24, 7, 48, 14, 4);
      ctx.fill();
      ctx.strokeStyle = '#06b6d4';
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.fillStyle = '#38bdf8';
      ctx.font = 'bold 8px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(`${outOfBoundsGps.dist}m`, 0, 17);

      ctx.restore();
    }

    // 7. Central Player Arrow
    ctx.save();
    ctx.translate(cx, cy);
    ctx.fillStyle = '#ef4444';
    ctx.beginPath();
    ctx.moveTo(0, -7);
    ctx.lineTo(5, 5);
    ctx.lineTo(0, 3);
    ctx.lineTo(-5, 5);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 1.4;
    ctx.stroke();
    ctx.restore();

    ctx.restore(); // Balance initial ctx.save() at line 59
  }
}
