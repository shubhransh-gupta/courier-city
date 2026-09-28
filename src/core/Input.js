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

    // Touch controls state
    this.touchJoystick = { x: 0, y: 0 }; // Normalized -1 to 1 range
    this.touchButtons = {
      jump: false,
      enter: false,
      sprint: false,
      handbrake: false
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

    // Touch / trackpad support for camera control
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

    // Touch controls for gameplay
    window.addEventListener('touchstart', (e) => {
      this.handleTouchStart(e);
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      this.handleTouchMove(e);
    }, { passive: true });

    window.addEventListener('touchend', (e) => {
      this.handleTouchEnd(e);
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

  // Touch controls handlers
  handleTouchStart(e) {
    // Prevent scrolling when interacting with touch controls
    e.preventDefault();

    // Check if touch is on joystick area
    const touchX = e.touches[0].clientX;
    const touchY = e.touches[0].clientY;
    const joystickRect = document.querySelector('.touch-joystick')?.getBoundingClientRect();

    if (joystickRect &&
        touchX >= joystickRect.left &&
        touchX <= joystickRect.right &&
        touchY >= joystickRect.top &&
        touchY <= joystickRect.bottom) {
      this.updateJoystick(touchX, touchY);
    }

    // Check if touch is on buttons
    const buttons = ['jump', 'enter', 'sprint', 'handbrake'];
    const buttonIds = ['touch-btn-jump', 'touch-btn-enter', 'touch-btn-sprint', 'touch-btn-handbrake'];

    for (let i = 0; i < buttons.length; i++) {
      const btn = document.getElementById(buttonIds[i]);
      if (btn) {
        const rect = btn.getBoundingClientRect();
        if (touchX >= rect.left &&
            touchX <= rect.right &&
            touchY >= rect.top &&
            touchY <= rect.bottom) {
          this.touchButtons[buttons[i]] = true;
        }
      }
    }
  }

  handleTouchMove(e) {
    e.preventDefault();

    const touchX = e.touches[0].clientX;
    const touchY = e.touches[0].clientY;
    const joystickRect = document.querySelector('.touch-joystick')?.getBoundingClientRect();

    if (joystickRect &&
        touchX >= joystickRect.left &&
        touchX <= joystickRect.right &&
        touchY >= joystickRect.top &&
        touchY <= joystickRect.bottom) {
      this.updateJoystick(touchX, touchY);
    }
  }

  handleTouchEnd(e) {
    // Reset joystick to center
    this.touchJoystick.x = 0;
    this.touchJoystick.y = 0;

    // Reset all button states
    this.touchButtons.jump = false;
    this.touchButtons.enter = false;
    this.touchButtons.sprint = false;
    this.touchButtons.handbrake = false;
  }

  updateJoystick(touchX, touchY) {
    const joystickRect = document.querySelector('.touch-joystick')?.getBoundingClientRect();
    if (!joystickRect) return;

    // Calculate center of joystick
    const centerX = joystickRect.left + joystickRect.width / 2;
    const centerY = joystickRect.top + joystickRect.height / 2;

    // Calculate offset from center
    let dx = touchX - centerX;
    let dy = touchY - centerY;

    // Normalize to -1 to 1 range
    const maxRadius = Math.min(joystickRect.width, joystickRect.height) / 2;
    dx = Math.max(-1, Math.min(1, dx / maxRadius));
    dy = Math.max(-1, Math.min(1, dy / maxRadius));

    // Store normalized values
    this.touchJoystick.x = dx;
    this.touchJoystick.y = -dy; // Invert Y because screen coordinates increase downward
  }

  // W / Up is +1 (forward), S / Down is -1 (backward)
  getForward() {
    // Check keyboard first
    let f = 0;
    if (this.isDown('KeyW') || this.isDown('ArrowUp')) f += 1;
    if (this.isDown('KeyS') || this.isDown('ArrowDown')) f -= 1;

    // Then check touch controls (negative Y is forward in joystick coordinates)
    f += this.touchJoystick.y;

    // Clamp to -1 to 1 range
    return Math.max(-1, Math.min(1, f));
  }

  // D / Right is +1 (right), A / Left is -1 (left)
  getTurn() {
    // Check keyboard first
    let t = 0;
    if (this.isDown('KeyD') || this.isDown('ArrowRight')) t += 1;
    if (this.isDown('KeyA') || this.isDown('ArrowLeft')) t -= 1;

    // Then check touch controls (positive X is right in joystick coordinates)
    t += this.touchJoystick.x;

    // Clamp to -1 to 1 range
    return Math.max(-1, Math.min(1, t));
  }

  isSprinting() {
    return this.isDown('ShiftLeft') || this.isDown('ShiftRight') || this.touchButtons.sprint;
  }

  isJumping() {
    return this.isDown('Space') || this.touchButtons.jump;
  }

  isEntering() {
    return this.isDown('KeyF') || this.touchButtons.enter;
  }

  isHandbraking() {
    return this.isDown('Space') || this.touchButtons.handbrake; // Note: Space is used for both jump and handbrake in different contexts
  }
}
