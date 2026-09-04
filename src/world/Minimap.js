export class Minimap {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.range = 180; // Extended radar range for 1200m map

    this.landmarks = [
      { name: 'Taj', x: 320, z: -180, color: '#f8fafc' },
      { name: 'India Gate', x: 0, z: -140, color: '#f59e0b' },
      { name: 'Red Fort', x: -320, z: -260, color: '#ef4444' },
      { name: 'Rashtrapati', x: -340, z: 240, color: '#d97706' },
      { name: 'Eiffel', x: 180, z: 260, color: '#64748b' },
      { name: 'Liberty', x: 440, z: 80, color: '#10b981' },
      { name: 'Airport', x: 300, z: -380, color: '#3b82f6' }
    ];
  }

  update(playerPos, playerAngle, vehicles) {
    if (!this.ctx) return;
    const ctx = this.ctx;
    const w = this.width;
    const h = this.height;
    const cx = w / 2;
    const cy = h / 2;

    ctx.clearRect(0, 0, w, h);

    // Radar circular frame
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, w / 2 - 2, 0, Math.PI * 2);
    ctx.fillStyle = '#f8fafc';
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#cbd5e1';
    ctx.stroke();
    ctx.clip();

    // Rotate map with player facing
    ctx.translate(cx, cy);
    ctx.rotate(-playerAngle);

    const scale = (w / 2) / this.range;

    // Arterial highways on radar
    ctx.fillStyle = '#cbd5e1';
    const roadW = 16 * scale;
    const roadLen = 1100 * scale;
    const px = playerPos.x * scale;
    const pz = playerPos.z * scale;

    ctx.fillRect(-px - roadLen / 2, -pz - roadW / 2, roadLen, roadW);
    ctx.fillRect(-px - roadW / 2, -pz - roadLen / 2, roadW, roadLen);

    [-200, 200].forEach(coord => {
      const c = coord * scale;
      ctx.fillRect(-px - roadLen / 2, -pz + c - roadW / 2, roadLen, roadW);
      ctx.fillRect(-px + c - roadW / 2, -pz - roadLen / 2, roadW, roadLen);
    });

    // River on radar
    ctx.fillStyle = '#99f6e4';
    ctx.fillRect(380 * scale - px - (35 * scale), -pz - (600 * scale), 70 * scale, 1200 * scale);

    // Landmarks markers
    this.landmarks.forEach(lm => {
      const lx = (lm.x - playerPos.x) * scale;
      const lz = (lm.z - playerPos.z) * scale;

      ctx.save();
      ctx.translate(lx, lz);
      ctx.fillStyle = lm.color;
      ctx.beginPath();
      ctx.arc(0, 0, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#1e293b';
      ctx.lineWidth = 1.2;
      ctx.stroke();

      ctx.fillStyle = '#0f172a';
      ctx.font = '8px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(lm.name, 0, -7);
      ctx.restore();
    });

    // Vehicle blips
    vehicles.forEach(veh => {
      const vx = (veh.position.x - playerPos.x) * scale;
      const vz = (veh.position.z - playerPos.z) * scale;

      ctx.save();
      ctx.translate(vx, vz);
      ctx.fillStyle = '#' + veh.color.toString(16).padStart(6, '0');
      ctx.beginPath();
      ctx.arc(0, 0, 4.0, 0, Math.PI * 2);
      ctx.fill();
      ctx.lineWidth = 1.2;
      ctx.strokeStyle = '#ffffff';
      ctx.stroke();
      ctx.restore();
    });

    ctx.restore();

    // Central player arrow
    ctx.save();
    ctx.translate(cx, cy);
    ctx.fillStyle = '#ff4757';
    ctx.beginPath();
    ctx.moveTo(0, -6);
    ctx.lineTo(4.5, 4.5);
    ctx.lineTo(0, 2.5);
    ctx.lineTo(-4.5, 4.5);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 1.2;
    ctx.stroke();
    ctx.restore();
  }
}
