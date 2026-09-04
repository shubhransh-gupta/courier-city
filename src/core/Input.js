export class Input {
  constructor() {
    this.keys = {};
    this.mouse = {
      x: 0,
      y: 0,
      dx: 0,
      dy: 0,
      down: false,
      rightDown: false
    };

    window.addEventListener('keydown', (e) => {
      this.keys[e.code] = true;
    });

    window.addEventListener('keyup', (e) => {
      this.keys[e.code] = false;
    });

    window.addEventListener('mousedown', (e) => {
      if (e.button === 0) this.mouse.down = true;
      if (e.button === 2) this.mouse.rightDown = true;
    });

    window.addEventListener('mouseup', (e) => {
      if (e.button === 0) this.mouse.down = false;
      if (e.button === 2) this.mouse.rightDown = false;
    });

    window.addEventListener('mousemove', (e) => {
      if (this.mouse.down || this.mouse.rightDown) {
        this.mouse.dx = e.movementX || 0;
        this.mouse.dy = e.movementY || 0;
      }
    });

    // Touch / trackpad support
    let touchStartX = 0;
    let touchStartY = 0;
    window.addEventListener('touchstart', (e) => {
      if (e.touches.length > 0) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
      }
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (e.touches.length > 0) {
        this.mouse.dx = (e.touches[0].clientX - touchStartX) * 0.5;
        this.mouse.dy = (e.touches[0].clientY - touchStartY) * 0.5;
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
      }
    }, { passive: true });

    window.addEventListener('contextmenu', (e) => e.preventDefault());
  }

  isDown(code) {
    return !!this.keys[code];
  }

  // W / Up is +1 (forward), S / Down is -1 (backward)
  getForward() {
    let f = 0;
    if (this.isDown('KeyW') || this.isDown('ArrowUp')) f += 1;
    if (this.isDown('KeyS') || this.isDown('ArrowDown')) f -= 1;
    return f;
  }

  // D / Right is +1 (right), A / Left is -1 (left)
  getTurn() {
    let t = 0;
    if (this.isDown('KeyD') || this.isDown('ArrowRight')) t += 1;
    if (this.isDown('KeyA') || this.isDown('ArrowLeft')) t -= 1;
    return t;
  }

  isSprinting() {
    return this.isDown('ShiftLeft') || this.isDown('ShiftRight');
  }

  isJumping() {
    return this.isDown('Space');
  }

  clearDelta() {
    this.mouse.dx = 0;
    this.mouse.dy = 0;
  }
}
