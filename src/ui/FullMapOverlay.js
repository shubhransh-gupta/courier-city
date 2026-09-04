export class FullMapOverlay {
  constructor(game) {
    this.game = game;
    this.isOpen = false;

    this.landmarks = [
      { id: 'silkboard', name: '🌉 Silk Board Flyover Interchange', x: 0, z: 20, icon: '🌉', color: '#10b981', desc: 'Famous 2-tier flyover interchange, E-City Expressway & Namma Metro!' },
      { id: 'vidhana', name: '🏛️ Vidhana Soudha', x: -240, z: -40, icon: '🏛️', color: '#f59e0b', desc: 'Karnataka State Legislature with grand dome & Ashoka Lion Capital!' },
      { id: 'ubcity', name: '🏙️ UB City Tower (120m)', x: -60, z: -100, icon: '🏙️', color: '#eab308', desc: 'Luxury skyscraper, rooftop helipad & boutique amphitheatre piazza!' },
      { id: 'orion', name: '🛍️ Orion Mall & WTC Bangalore', x: 240, z: 320, icon: '🛍️', color: '#ec4899', desc: 'Contemporary glass shopping mall, 92m WTC tower & lake boardwalk!' },
      { id: 'lalbagh', name: '🌿 Lalbagh Royal Glass House', x: -140, z: 280, icon: '🌿', color: '#16a34a', desc: 'Crystal Palace conservatory, flower shows & Kempegowda rock tower!' },
      { id: 'nandihills', name: '⛰️ Nandi Hills Ghats & Viewpoint', x: 440, z: -460, icon: '⛰️', color: '#8b5cf6', desc: 'Drive/walk 75m winding ghat road to panoramic sunrise cliff!' },
      { id: 'townhall', name: '🏛️ Bangalore Town Hall', x: 40, z: 200, icon: '🏛️', color: '#f97316', desc: 'Historic 1935 neoclassical landmark with Tuscan colonnade columns!' },
      { id: 'koramangala', name: '☕ Koramangala Startup Hub', x: -120, z: 80, icon: '☕', color: '#b45309', desc: 'Third Wave Coffee, tech startup garages & 80 Feet Road!' },
      { id: 'hsr', name: '🌳 HSR Layout (27th Main)', x: 60, z: 60, icon: '🌳', color: '#059669', desc: 'Planned residential sectors, pink Tabebuia blooms & startup garages!' },
      { id: 'btm', name: '🍛 BTM Layout Food Street', x: -80, z: 160, icon: '🍛', color: '#dc2626', desc: 'BTM 2nd Stage, Sri Krishna Sagar dosa & filter coffee street!' },
      { id: 'airport', name: '✈️ International Airport & Runway', x: 300, z: -380, icon: '✈️', color: '#2563eb', desc: 'Take off in airplanes down the 280m runway!' },
      { id: 'helipad', name: '🚁 Airport Helipad', x: 340, z: -352, icon: '🚁', color: '#f59e0b', desc: 'Board the executive helicopter for vertical lift off!' },
      { id: 'zoo', name: '🦁 Wildlife Safari & City Zoo', x: -160, z: -140, icon: '🦁', color: '#65a30d', desc: 'Lion pride rock, giraffes, zebras and elephant pool!' },
      { id: 'bank', name: '🏦 Grand Reserve Bank', x: -60, z: 40, icon: '🏦', color: '#d97706', desc: 'Neoclassical vaults and armored cash transit truck!' },
      { id: 'school', name: '🏫 Springfield High Academy', x: -180, z: 120, icon: '🏫', color: '#b91c1c', desc: 'Red-brick academy, clock tower, buses and athletic field!' },
      { id: 'gas', name: '⛽ Ron Oil & Burger Diner', x: -100, z: 20, icon: '⛽', color: '#e11d48', desc: 'Gas pumps, 24/7 convenience mart and giant rooftop burger!' },
      { id: 'hospital', name: '🏥 Emergency Hospital & Police', x: 60, z: 140, icon: '🏥', color: '#0ea5e9', desc: 'Metro hospital helipad, ER ambulances and police cruisers!' },
      { id: 'yeti', name: '❄️ Yeti Cave & Glaciers', x: 35, z: -485, icon: '❄️', color: '#0284c7', desc: 'Mythical 4.2m Yeti in ice cavern & roaming polar bears!' },
      { id: 'eiffel', name: '🗼 Eiffel Tower (95m)', x: 180, z: 260, icon: '🗼', color: '#475569', desc: 'Ascend by lift to the 90m summit observation deck!' },
      { id: 'taj', name: '🕌 Taj Mahal', x: 320, z: -180, icon: '🕌', color: '#0284c7', desc: 'Marble masterpiece with reflecting pools & dome terrace!' },
      { id: 'liberty', name: '🗽 Statue of Liberty', x: 440, z: 80, icon: '🗽', color: '#10b981', desc: 'Liberty Island fortress with 48m torch balcony!' },
      { id: 'indiagate', name: '🏛️ India Gate', x: 0, z: -140, icon: '🏛️', color: '#d97706', desc: '42m Triumphal Arch with Amar Jawan Jyoti eternal flame!' }
    ];

    this.gpsTarget = this.landmarks[0]; // Default GPS targets the Silk Board Interchange!

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
            <h2>City Navigation Map</h2>
          </div>
          <button id="close-map-btn" class="map-close-btn">&times;</button>
        </div>

        <div class="map-canvas-wrapper">
          <canvas id="fullscreen-map-canvas" width="760" height="760"></canvas>
          <div id="map-tooltip" class="map-tooltip hidden"></div>
        </div>

        <div class="map-footer">
          <div class="map-legend">
            <span><span class="legend-dot" style="background:#10b981;"></span> 🌉 Silk Board</span>
            <span><span class="legend-dot" style="background:#f59e0b;"></span> 🏛️ Vidhana Soudha</span>
            <span><span class="legend-dot" style="background:#eab308;"></span> 🏙️ UB City</span>
            <span><span class="legend-dot" style="background:#ec4899;"></span> 🛍️ Orion</span>
            <span><span class="legend-dot" style="background:#16a34a;"></span> 🌿 Lalbagh</span>
            <span><span class="legend-dot" style="background:#8b5cf6;"></span> ⛰️ Nandi Hills</span>
            <span><span class="legend-dot" style="background:#b45309;"></span> ☕ Koramangala</span>
            <span><span class="legend-dot" style="background:#2563eb;"></span> ✈️ Airport</span>
          </div>
          <div class="map-hint">Click any landmark to set GPS navigation &middot; Press <kbd>M</kbd> to close</div>
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

      for (const lm of this.landmarks) {
        const lx = originX + lm.x * mapScale;
        const ly = originY + lm.z * mapScale;
        const distSq = (clickX - lx) * (clickX - lx) + (clickY - ly) * (clickY - ly);

        if (distSq < 22 * 22) {
          this.gpsTarget = lm;
          this.game.hud.showToast(`GPS set to ${lm.name}!`);
          this.render();
          break;
        }
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

    // Elevated Flyover overpass
    ctx.fillStyle = '#6366f1';
    ctx.fillRect(cx - 130 * scale, cy - 56 * scale, 260 * scale, 12 * scale);

    // Airport Runway
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(cx + 160 * scale, cy - 390 * scale, 280 * scale, 24 * scale);

    // Draw all landmark pins
    this.landmarks.forEach(lm => {
      const lx = cx + lm.x * scale;
      const ly = cy + lm.z * scale;
      const isTarget = (this.gpsTarget && this.gpsTarget.id === lm.id);

      // Outer beacon aura for airport & target
      if (lm.id === 'airport' || isTarget) {
        ctx.beginPath();
        ctx.arc(lx, ly, 18, 0, Math.PI * 2);
        ctx.fillStyle = isTarget ? 'rgba(239, 68, 68, 0.25)' : 'rgba(37, 99, 235, 0.25)';
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

    // Current player position marker
    if (this.game && this.game.player) {
      const pPos = this.game.player.position;
      const pYaw = this.game.player.rotation;
      const px = cx + pPos.x * scale;
      const py = cy + pPos.z * scale;

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
