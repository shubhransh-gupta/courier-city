export class FullMapOverlay {
  constructor(game) {
    this.game = game;
    this.isOpen = false;

    this.landmarks = [
      { id: 'founders_stark', name: "⚡ Founder's Building (Stark Tower)", x: -70, z: 130, icon: '⚡', color: '#38bdf8', desc: "Futuristic Stark Tower with cantilevered penthouse flight deck & Arc Reactor in BTM Layout!" },
      { id: 'bnmit', name: '🎓 BNM Institute of Technology (BNMIT)', x: -140, z: 160, icon: '🎓', color: '#9f1239', desc: 'Premier engineering campus with academic quad & 34m campanile tower!' },
      { id: 'ks_layout', name: '⛰️ Kumaraswamy Layout (KS Layout)', x: -200, z: 180, icon: '⛰️', color: '#c2410c', desc: 'Hilltop layout terrace, panoramic views & Sri Kumaraswamy Temple!' },
      { id: 'indian_flag', name: '🇮🇳 Monumental Indian National Flag (55m)', x: 0, z: -20, icon: '🇮🇳', color: '#f97316', desc: '55m high Tiranga waving over Amar Jawan Jyoti and Central Plaza!' },
      { id: 'iaf_hq', name: '🛩️ Indian Air Force (IAF) HQ Command', x: 180, z: -240, icon: '🛩️', color: '#0284c7', desc: 'IAF Training Command HQ with supersonic MiG-21 / Tejas jet & radar dome!' },
      { id: 'army_hq', name: '🎖️ Indian Army Cantonment & ASC Centre', x: -180, z: 220, icon: '🎖️', color: '#15803d', desc: 'Army Cantonment HQ with battle tank memorial, sentry towers & parade ground!' },
      { id: 'someshwara_temple', name: '🛕 Sri Someshwara Chola Temple', x: -60, z: -160, icon: '🛕', color: '#d97706', desc: 'Ancient Dravidian temple with 32m 5-tier Rajagopuram, Kalasas & Kalyani tank!' },
      { id: 'bull_temple', name: '🐂 Dodda Basavana Gudi (Bull Temple)', x: 100, z: 180, icon: '🐂', color: '#78350f', desc: 'Sacred Basavanagudi shrine with monolithic black granite Nandi & Deepasthambha!' },
      { id: 'iskcon_temple', name: '✨ ISKCON Bangalore Sri Radha Krishna', x: 220, z: -120, icon: '✨', color: '#eab308', desc: 'White marble temple atop Hare Krishna hill with soaring gold Shikhara!' },
      { id: 'bms_college', name: '🎓 BMS College of Engineering (1946)', x: -120, z: -120, icon: '🎓', color: '#991b1b', desc: 'Historic red-brick engineering quad with 38m clock tower & library!' },
      { id: 'iisc_campus', name: '🔬 IISc Heritage Science Campus', x: -60, z: 180, icon: '🔬', color: '#475569', desc: 'Classical colonial stone science quad with Tuscan colonnade & research hall!' },
      { id: 'hsr_bda_complex', name: '🏢 HSR BDA Shopping Complex', x: 60, z: 100, icon: '🏢', color: '#0284c7', desc: '4-story civic commercial complex with Bangalore One, bank & shops!' },
      { id: 'koramangala_bda_complex', name: '🏢 Koramangala BDA Hub', x: -100, z: 120, icon: '🏢', color: '#d97706', desc: 'Koramangala commercial centre with stores, cafes & civic plaza!' },
      { id: 'hsr_bda_park', name: '🌳 HSR Sector 2 BDA Public Park', x: 80, z: 40, icon: '🌳', color: '#16a34a', desc: 'BDA park with red-earth walking track, gazebo bandstand & Tabebuia blooms!' },
      { id: 'koramangala_bda_park', name: '🌳 Koramangala 4th Block BDA Park', x: -140, z: 60, icon: '🌳', color: '#15803d', desc: 'Landscaped public walking gardens with ornamental gazebo & benches!' },
      { id: 'indiranagar_bda_park', name: '🌳 Indiranagar Defence BDA Park', x: 120, z: -60, icon: '🌳', color: '#059669', desc: 'Serene BDA park with jogging trail, fountain & flowering trees!' },
      { id: 'silkboard_metro', name: '🚊 Silk Board Metro Station', x: 24, z: 20, icon: '🚊', color: '#10b981', desc: 'Elevated Namma Metro station connecting Outer Ring Road & Hosur Road!' },
      { id: 'hsr_metro', name: '🚊 HSR Layout Metro Station', x: 24, z: 180, icon: '🚊', color: '#059669', desc: 'Elevated modern station with canopy concourse & 27th Main connectivity!' },
      { id: 'vidhana', name: '🏛️ Vidhana Soudha', x: -240, z: -40, icon: '🏛️', color: '#f59e0b', desc: 'Karnataka State Legislature with 50m illuminated dome & grand boulevard!' },
      { id: 'ubcity', name: '🏙️ UB City Tower (120m)', x: -60, z: -100, icon: '🏙️', color: '#eab308', desc: 'Luxury skyscraper, rooftop helipad & boutique amphitheatre piazza!' },
      { id: 'orion', name: '🛍️ Orion Mall & WTC Bangalore', x: 240, z: 320, icon: '🛍️', color: '#ec4899', desc: 'Contemporary glass shopping mall, 92m WTC tower & lake boardwalk!' },
      { id: 'lalbagh', name: '🌿 Lalbagh Royal Glass House', x: -140, z: 280, icon: '🌿', color: '#16a34a', desc: 'Crystal Palace conservatory, flower shows & Kempegowda rock tower!' },
      { id: 'nandihills', name: '⛰️ Nandi Hills Ghats & Viewpoint', x: 440, z: -460, icon: '⛰️', color: '#8b5cf6', desc: 'Drive/walk 75m winding ghat road to panoramic sunrise cliff!' },
      { id: 'airport', name: '✈️ International Airport & Runway', x: 300, z: -380, icon: '✈️', color: '#2563eb', desc: 'Take off in airplanes down the 280m runway!' },
      { id: 'tipu_palace', name: "🏰 Tipu Sultan's Summer Palace", x: -160, z: -80, icon: '🏰', color: '#b45309', desc: 'Historic 1791 Indo-Islamic teakwood palace & museum in Kalasipalya!' },
      { id: 'mysore_palace', name: '👑 Mysore Palace (Amba Vilas)', x: -300, z: 120, icon: '👑', color: '#f59e0b', desc: 'Grand royal palace with 42m golden dome, pink chhatris & 100k night lights!' },
      { id: 'vvpuram_food', name: '🍲 V.V. Puram Food Street (Thindi Beedi)', x: -40, z: 220, icon: '🍲', color: '#ef4444', desc: 'Bengaluru street food hub: VB Bakery, Hot Butter Dosa, Gulkand & Filter Coffee!' },
      { id: 'russell_market', name: '🏛️ Russell Market & Commercial St', x: 100, z: -140, icon: '🏛️', color: '#991b1b', desc: 'Colonial 1927 clock tower & bustling Commercial Street shopping alleys!' }
    ];

    // Default target: Vidhana Soudha!
    this.gpsTarget = this.landmarks.find(l => l.id === 'vidhana') || this.landmarks[0];

    this.createDom();
    this.initEvents();
  }

  createDom() {
    this.overlay = document.createElement('div');
    this.overlay.id = 'full-map-overlay';
    this.overlay.className = 'map-overlay-hidden';

    this.overlay.innerHTML = `
      <div class="map-modal">
        <div class="map-header">
          <div class="map-title-group">
            <span class="map-badge">NAMMA BENGALURU GPS</span>
            <h2>Interactive City Navigation Map</h2>
          </div>
          <div style="display: flex; gap: 8px; align-items: center;">
            <button id="close-map-btn" class="map-close-btn">&times;</button>
          </div>
        </div>

        <div class="map-canvas-wrapper">
          <canvas id="fullscreen-map-canvas" width="760" height="760"></canvas>
          <div id="map-tooltip" class="map-tooltip hidden"></div>
        </div>

        <div class="map-footer">
          <div class="map-legend">
            <span><span class="legend-dot" style="background:#38bdf8;"></span> ⚡ Founder's (Stark)</span>
            <span><span class="legend-dot" style="background:#9f1239;"></span> 🎓 BNMIT</span>
            <span><span class="legend-dot" style="background:#c2410c;"></span> ⛰️ KS Layout</span>
            <span><span class="legend-dot" style="background:#f97316;"></span> 🇮🇳 Flag</span>
            <span><span class="legend-dot" style="background:#0284c7;"></span> 🛩️ IAF HQ</span>
            <span><span class="legend-dot" style="background:#15803d;"></span> 🎖️ Army HQ</span>
            <span><span class="legend-dot" style="background:#d97706;"></span> 🛕 Someshwara Temple</span>
            <span><span class="legend-dot" style="background:#78350f;"></span> 🐂 Bull Temple</span>
            <span><span class="legend-dot" style="background:#991b1b;"></span> 🎓 BMS College</span>
            <span><span class="legend-dot" style="background:#16a34a;"></span> 🌳 BDA Parks</span>
            <span><span class="legend-dot" style="background:#0284c7;"></span> 🏢 BDA Complexes</span>
            <span><span class="legend-dot" style="background:#10b981;"></span> 🚊 Namma Metro</span>
            <span><span class="legend-dot" style="background:#f59e0b;"></span> 🏛️ Vidhana Soudha</span>
            <span><span class="legend-dot" style="background:#b45309;"></span> 🏰 Tipu Palace</span>
            <span><span class="legend-dot" style="background:#f59e0b;"></span> 👑 Mysore Palace</span>
            <span><span class="legend-dot" style="background:#ef4444;"></span> 🍲 Food Street</span>
            <span><span class="legend-dot" style="background:#991b1b;"></span> 🏛️ Russell Market</span>
          </div>
          <div class="map-hint" style="font-weight: 600; color: #0284c7;">
            🎯 Tap ANYWHERE or on any landmark to set GPS directions on your Minimap &middot; Press <kbd>M</kbd> to return to driving
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(this.overlay);
    this.canvas = document.getElementById('fullscreen-map-canvas');
    this.ctx = this.canvas.getContext('2d');
  }

  initEvents() {
    window.addEventListener('keydown', (e) => {
      if (e.code === 'KeyM') {
        this.toggle();
      }
    });

    const closeBtn = document.getElementById('close-map-btn');
    if (closeBtn) closeBtn.addEventListener('click', () => this.toggle(false));

    this.canvas.addEventListener('click', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const clickX = (e.clientX - rect.left) * (this.canvas.width / rect.width);
      const clickY = (e.clientY - rect.top) * (this.canvas.height / rect.height);

      const mapScale = this.canvas.width / 1300;
      const originX = this.canvas.width / 2;
      const originY = this.canvas.height / 2;

      let nearestLandmark = null;
      let minDistanceSq = 24 * 24;

      for (const lm of this.landmarks) {
        const lx = originX + lm.x * mapScale;
        const ly = originY + lm.z * mapScale;
        const distSq = (clickX - lx) * (clickX - lx) + (clickY - ly) * (clickY - ly);

        if (distSq < minDistanceSq) {
          minDistanceSq = distSq;
          nearestLandmark = lm;
        }
      }

      if (nearestLandmark) {
        this.gpsTarget = nearestLandmark;
        this.game.hud.showToast(`GPS Route set to ${nearestLandmark.name}! Following on Minimap.`);
      } else {
        // Clicked open ground / street -> Create Custom Waypoint Pin
        const worldX = Math.round((clickX - originX) / mapScale);
        const worldZ = Math.round((clickY - originY) / mapScale);

        this.gpsTarget = {
          id: 'custom_pin',
          name: `📍 Custom Waypoint (${worldX}, ${worldZ})`,
          x: worldX,
          z: worldZ,
          icon: '📍',
          color: '#06b6d4',
          desc: 'Custom GPS navigation waypoint'
        };
        this.game.hud.showToast(`GPS Waypoint set to (${worldX}, ${worldZ})! Follow the Minimap trail.`);
      }

      this.render();

      // Notify game to update in-world 3D waypoint beacon
      if (this.game && this.game.onGpsTargetChanged) {
        this.game.onGpsTargetChanged(this.gpsTarget);
      }
    });
  }

  toggle(forceState = null) {
    this.isOpen = (forceState !== null) ? forceState : !this.isOpen;
    if (this.isOpen) {
      this.overlay.classList.remove('map-overlay-hidden');
      this.render();
    } else {
      this.overlay.classList.add('map-overlay-hidden');
    }
  }

  render() {
    if (!this.isOpen || !this.ctx) return;
    const ctx = this.ctx;
    const w = this.canvas.width;
    const h = this.canvas.height;
    const cx = w / 2;
    const cy = h / 2;
    const scale = w / 1300;

    // Background terrain
    ctx.fillStyle = '#e2e8f0';
    ctx.fillRect(0, 0, w, h);

    // River
    ctx.fillStyle = '#99f6e4';
    ctx.fillRect(cx + 340 * scale, 0, 80 * scale, h);

    // Arterial Highways
    ctx.fillStyle = '#94a3b8';
    ctx.fillRect(cx - 10 * scale, 0, 20 * scale, h); // N-S Spine
    ctx.fillRect(0, cy - 10 * scale, w, 20 * scale); // E-W Highway

    [-200, 200].forEach(c => {
      ctx.fillRect(cx + (c - 8) * scale, 0, 16 * scale, h);
      ctx.fillRect(0, cy + (c - 8) * scale, w, 16 * scale);
    });

    // BDA Public Parks on map
    ctx.fillStyle = '#86efac';
    ctx.fillRect(cx + (80 - 35) * scale, cy + (40 - 30) * scale, 70 * scale, 60 * scale);   // HSR Park
    ctx.fillRect(cx + (-140 - 32) * scale, cy + (60 - 27) * scale, 65 * scale, 55 * scale); // Koramangala Park
    ctx.fillRect(cx + (120 - 30) * scale, cy + (-60 - 25) * scale, 60 * scale, 50 * scale); // Indiranagar Park

    // Namma Metro Elevated Viaduct Corridor (x = 24, z = -60 to 260)
    ctx.fillStyle = '#16a34a'; // Green line
    ctx.fillRect(cx + (24 - 3) * scale, cy - 60 * scale, 6 * scale, 320 * scale);
    ctx.fillStyle = '#7e22ce'; // Purple stripe
    ctx.fillRect(cx + (24 - 1) * scale, cy - 60 * scale, 2 * scale, 320 * scale);

    // Grand Vidhana Soudha Ceremonial Boulevard (x = -200 to -240 at z = -40)
    ctx.fillStyle = '#fbbf24';
    ctx.fillRect(cx - 240 * scale, cy - 48 * scale, 40 * scale, 16 * scale);

    // Airport Runway
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(cx + 160 * scale, cy - 390 * scale, 280 * scale, 24 * scale);

    // Active Player Position
    let px = cx, py = cy;
    let playerPos = null;
    if (this.game && this.game.player) {
      playerPos = (this.game.player.isDriving && this.game.activeVehicle)
        ? this.game.activeVehicle.position
        : this.game.player.position;
      px = cx + playerPos.x * scale;
      py = cy + playerPos.z * scale;
    }

    // Draw active GPS navigation route line from player to target
    if (this.gpsTarget && playerPos) {
      const tx = cx + this.gpsTarget.x * scale;
      const ty = cy + this.gpsTarget.z * scale;

      ctx.save();
      ctx.strokeStyle = '#06b6d4';
      ctx.lineWidth = 3.5;
      ctx.setLineDash([8, 6]);
      ctx.beginPath();
      ctx.moveTo(px, py);
      ctx.lineTo(tx, ty);
      ctx.stroke();

      // Distance tag midway along route line
      const midX = (px + tx) / 2;
      const midY = (py + ty) / 2;
      const distM = Math.round(Math.hypot(this.gpsTarget.x - playerPos.x, this.gpsTarget.z - playerPos.z));

      ctx.fillStyle = '#0f172a';
      ctx.beginPath();
      ctx.roundRect(midX - 32, midY - 11, 64, 22, 6);
      ctx.fill();
      ctx.fillStyle = '#38bdf8';
      ctx.font = 'bold 11px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(`${distM}m`, midX, midY + 4);
      ctx.restore();
    }

    // Draw all landmark pins
    this.landmarks.forEach(lm => {
      const lx = cx + lm.x * scale;
      const ly = cy + lm.z * scale;
      const isTarget = (this.gpsTarget && this.gpsTarget.id === lm.id);

      // Outer beacon aura for airport & target
      if (lm.id === 'airport' || isTarget) {
        ctx.beginPath();
        ctx.arc(lx, ly, 18, 0, Math.PI * 2);
        ctx.fillStyle = isTarget ? 'rgba(6, 182, 212, 0.35)' : 'rgba(37, 99, 235, 0.25)';
        ctx.fill();
      }

      ctx.beginPath();
      ctx.arc(lx, ly, 11, 0, Math.PI * 2);
      ctx.fillStyle = lm.color;
      ctx.fill();
      ctx.lineWidth = 2.5;
      ctx.strokeStyle = '#ffffff';
      ctx.stroke();

      // Icon & Name Tag
      ctx.fillStyle = '#0f172a';
      ctx.font = 'bold 11px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(`${lm.icon} ${lm.name.split(' ')[1] || lm.name}`, lx, ly - 15);
    });

    // If target is a custom pin, render custom pin marker
    if (this.gpsTarget && this.gpsTarget.id === 'custom_pin') {
      const tx = cx + this.gpsTarget.x * scale;
      const ty = cy + this.gpsTarget.z * scale;

      ctx.beginPath();
      ctx.arc(tx, ty, 20, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(6, 182, 212, 0.35)';
      ctx.fill();

      ctx.beginPath();
      ctx.arc(tx, ty, 12, 0, Math.PI * 2);
      ctx.fillStyle = '#06b6d4';
      ctx.fill();
      ctx.lineWidth = 2.5;
      ctx.strokeStyle = '#ffffff';
      ctx.stroke();

      ctx.fillStyle = '#0f172a';
      ctx.font = 'bold 12px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(this.gpsTarget.name, tx, ty - 16);
    }

    // Current player position marker
    if (this.game && this.game.player) {
      const pYaw = (this.game.player.isDriving && this.game.activeVehicle)
        ? this.game.activeVehicle.yaw
        : this.game.player.rotation;

      ctx.save();
      ctx.translate(px, py);
      ctx.rotate(-pYaw);

      // Pulsing player indicator
      ctx.beginPath();
      ctx.arc(0, 0, 8, 0, Math.PI * 2);
      ctx.fillStyle = '#ef4444';
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#ffffff';
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(0, -12);
      ctx.lineTo(6, 6);
      ctx.lineTo(0, 3);
      ctx.lineTo(-6, 6);
      ctx.closePath();
      ctx.fillStyle = '#dc2626';
      ctx.fill();
      ctx.restore();
    }
  }

  getGpsDirection(playerPos) {
    if (!this.gpsTarget || !playerPos) return null;

    const dx = this.gpsTarget.x - playerPos.x;
    const dz = this.gpsTarget.z - playerPos.z;
    const distance = Math.round(Math.sqrt(dx * dx + dz * dz));
    const targetAngle = Math.atan2(dx, dz);

    return {
      name: this.gpsTarget.name,
      icon: this.gpsTarget.icon,
      distance,
      angle: targetAngle
    };
  }
}
