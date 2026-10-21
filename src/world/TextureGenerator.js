import * as THREE from 'three';

/**
 * High-performance procedural HTML5 canvas texture generator.
 * Produces crisp, realistic textures without external asset files or network latency.
 */
export class TextureGenerator {
  static createMarbleTexture(size = 512) {
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');

    // Base off-white marble tone
    ctx.fillStyle = '#f8f9fa';
    ctx.fillRect(0, 0, size, size);

    // Subtle cloud noise
    const imgData = ctx.getImageData(0, 0, size, size);
    const data = imgData.data;
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const idx = (y * size + x) * 4;
        const noise = Math.sin(x * 0.04) * Math.cos(y * 0.04) * 8 + (Math.random() - 0.5) * 6;
        data[idx] = Math.min(255, Math.max(240, 248 + noise));
        data[idx + 1] = Math.min(255, Math.max(240, 248 + noise));
        data[idx + 2] = Math.min(255, Math.max(242, 250 + noise));
      }
    }
    ctx.putImageData(imgData, 0, 0);

    // Soft grey and golden mineral veins
    ctx.lineWidth = 1.5;
    for (let i = 0; i < 6; i++) {
      ctx.strokeStyle = i % 2 === 0 ? 'rgba(180, 185, 192, 0.22)' : 'rgba(215, 198, 175, 0.18)';
      ctx.beginPath();
      let cx = Math.random() * size;
      let cy = 0;
      ctx.moveTo(cx, cy);
      while (cy < size) {
        cx += (Math.random() - 0.5) * 28 + Math.sin(cy * 0.05) * 12;
        cy += Math.random() * 20 + 8;
        ctx.lineTo(cx, cy);
      }
      ctx.stroke();
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    return texture;
  }

  static createSandstoneTexture(colorHex = '#b33939', size = 512, isRed = true) {
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = colorHex;
    ctx.fillRect(0, 0, size, size);

    // Grain and sedimentary layers
    const imgData = ctx.getImageData(0, 0, size, size);
    const data = imgData.data;
    for (let y = 0; y < size; y++) {
      const layerNoise = Math.sin(y * 0.08) * 10;
      for (let x = 0; x < size; x++) {
        const idx = (y * size + x) * 4;
        const grain = (Math.random() - 0.5) * 18 + layerNoise;
        data[idx] = Math.min(255, Math.max(0, data[idx] + grain));
        data[idx + 1] = Math.min(255, Math.max(0, data[idx + 1] + grain * 0.8));
        data[idx + 2] = Math.min(255, Math.max(0, data[idx + 2] + grain * 0.6));
      }
    }
    ctx.putImageData(imgData, 0, 0);

    // Ashlar block mortar lines
    ctx.strokeStyle = isRed ? 'rgba(70, 20, 20, 0.35)' : 'rgba(120, 95, 60, 0.35)';
    ctx.lineWidth = 2;
    const rowHeight = 32;
    const blockWidth = 64;

    for (let y = 0; y < size; y += rowHeight) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(size, y);
      ctx.stroke();

      const offset = (y / rowHeight) % 2 === 0 ? 0 : blockWidth / 2;
      for (let x = offset; x < size; x += blockWidth) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x, y + rowHeight);
        ctx.stroke();
      }
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    return texture;
  }

  static createAsphaltTexture(size = 512) {
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');

    // Rich dark asphalt base
    ctx.fillStyle = '#2d3436';
    ctx.fillRect(0, 0, size, size);

    // Aggregate grain noise
    const imgData = ctx.getImageData(0, 0, size, size);
    const data = imgData.data;
    for (let i = 0; i < data.length; i += 4) {
      const grain = (Math.random() - 0.5) * 24;
      data[i] = Math.min(255, Math.max(20, data[i] + grain));
      data[i + 1] = Math.min(255, Math.max(20, data[i + 1] + grain));
      data[i + 2] = Math.min(255, Math.max(20, data[i + 2] + grain));
    }
    ctx.putImageData(imgData, 0, 0);

    // Center divider dashed yellow line
    ctx.strokeStyle = '#f1c40f';
    ctx.lineWidth = 10;
    ctx.setLineDash([40, 30]);
    ctx.beginPath();
    ctx.moveTo(size / 2, 0);
    ctx.lineTo(size / 2, size);
    ctx.stroke();

    // White outer boundary lines
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 6;
    ctx.setLineDash([]);
    ctx.beginPath();
    ctx.moveTo(24, 0);
    ctx.lineTo(24, size);
    ctx.moveTo(size - 24, 0);
    ctx.lineTo(size - 24, size);
    ctx.stroke();

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    return texture;
  }

  static createCobblestoneTexture(size = 512) {
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#dfe4ea';
    ctx.fillRect(0, 0, size, size);

    // Interlocking pavers
    ctx.strokeStyle = 'rgba(116, 125, 140, 0.4)';
    ctx.lineWidth = 2.5;

    const tileSize = 32;
    for (let y = 0; y < size; y += tileSize) {
      const shift = (y / tileSize) % 2 === 0 ? 0 : tileSize / 2;
      for (let x = 0; x < size; x += tileSize) {
        const stoneVal = 220 + Math.floor(Math.random() * 25);
        ctx.fillStyle = `rgb(${stoneVal}, ${stoneVal - 2}, ${stoneVal - 6})`;
        ctx.fillRect(x + shift + 2, y + 2, tileSize - 4, tileSize - 4);
        ctx.strokeRect(x + shift + 2, y + 2, tileSize - 4, tileSize - 4);
      }
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    return texture;
  }

  static createCopperPatinaTexture(size = 256) {
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');

    // Statue of Liberty verdigris oxidized green
    ctx.fillStyle = '#48b59e';
    ctx.fillRect(0, 0, size, size);

    const imgData = ctx.getImageData(0, 0, size, size);
    const data = imgData.data;
    for (let i = 0; i < data.length; i += 4) {
      const n = (Math.random() - 0.5) * 32;
      data[i] = Math.min(255, Math.max(40, 72 + n * 0.7));
      data[i + 1] = Math.min(255, Math.max(120, 181 + n));
      data[i + 2] = Math.min(255, Math.max(110, 158 + n * 0.8));
    }
    ctx.putImageData(imgData, 0, 0);

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    return texture;
  }

  static createRockTexture(size = 256) {
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#57606f';
    ctx.fillRect(0, 0, size, size);

    const imgData = ctx.getImageData(0, 0, size, size);
    const data = imgData.data;
    for (let i = 0; i < data.length; i += 4) {
      const n = (Math.random() - 0.5) * 45;
      data[i] = Math.min(255, Math.max(40, 87 + n));
      data[i + 1] = Math.min(255, Math.max(40, 96 + n));
      data[i + 2] = Math.min(255, Math.max(40, 111 + n));
    }
    ctx.putImageData(imgData, 0, 0);

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    return texture;
  }
}
