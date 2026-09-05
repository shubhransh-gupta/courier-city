import * as THREE from 'three';

export class CameraController {
  constructor(camera, domElement) {
    this.camera = camera;
    this.domElement = domElement;

    // View modes: 'chase' (rear view), 'free' (orbit), 'topDown' (overhead view)
    this.viewMode = 'chase'; // Start in elevated chase view so character is immediately visible!

    // Camera parameters: 45 degree elevated look-down view
    this.yaw = 0;
    this.pitch = 0.785; // 45 degree angle looking down towards player
    this.minPitch = 0.35; // Don't flip under ground
    this.maxPitch = 1.45; // Up to near-vertical top-down

    this.distance = 12.0; // Distance behind player
    this.targetDistance = 12.0;
    this.eyeHeight = 2.0;

    // Camera position smoothing - start right behind player
    this.currentPosition = new THREE.Vector3(0, 10.0, 92.0);
    this.currentLookAt = new THREE.Vector3(0, 1.0, 80.0);

    // Mouse drag orbit
    this.isDragging = false;
    this.lastMouseX = 0;
    this.lastMouseY = 0;

    this.keys = {
      up: false,
      down: false,
      left: false,
      right: false
    };

    this.initInputListeners();
  }

  initInputListeners() {
    window.addEventListener('mousedown', (e) => {
      if (e.target.tagName === 'CANVAS') {
        this.isDragging = true;
        this.lastMouseX = e.clientX;
        this.lastMouseY = e.clientY;
      }
    });

    window.addEventListener('mouseup', () => {
      this.isDragging = false;
    });

    window.addEventListener('mousemove', (e) => {
      if (this.isDragging) {
        const dx = e.clientX - this.lastMouseX;
        const dy = e.clientY - this.lastMouseY;

        this.yaw -= dx * 0.005;
        this.pitch = Math.max(this.minPitch, Math.min(this.maxPitch, this.pitch + dy * 0.005));

        this.lastMouseX = e.clientX;
        this.lastMouseY = e.clientY;
      }
    });

    window.addEventListener('contextmenu', (e) => {
      if (e.target.tagName === 'CANVAS') {
        e.preventDefault();
      }
    });

    window.addEventListener('wheel', (e) => {
      this.targetDistance = Math.max(3.5, Math.min(45, this.targetDistance + e.deltaY * 0.012));
    }, { passive: true });

    // Keyboard controls
    window.addEventListener('keydown', (e) => {
      if (e.code === 'ArrowUp' || e.code === 'KeyI') {
        this.keys.up = true;
      } else if (e.code === 'ArrowDown' || e.code === 'KeyK') {
        this.keys.down = true;
      } else if (e.code === 'ArrowLeft' || e.code === 'KeyJ') {
        this.keys.left = true;
      } else if (e.code === 'ArrowRight' || e.code === 'KeyL') {
        this.keys.right = true;
      } else if (e.code === 'KeyV') {
        this.toggleViewMode();
      }
    });

    window.addEventListener('keyup', (e) => {
      if (e.code === 'ArrowUp' || e.code === 'KeyI') {
        this.keys.up = false;
      } else if (e.code === 'ArrowDown' || e.code === 'KeyK') {
        this.keys.down = false;
      } else if (e.code === 'ArrowLeft' || e.code === 'KeyJ') {
        this.keys.left = false;
      } else if (e.code === 'ArrowRight' || e.code === 'KeyL') {
        this.keys.right = false;
      }
    });
  }

  toggleViewMode() {
    if (this.viewMode === 'chase') {
      this.viewMode = 'topDown';
      this.pitch = 1.38;
      this.targetDistance = 28.0;
    } else if (this.viewMode === 'topDown') {
      this.viewMode = 'free';
      this.pitch = 0.785;
      this.targetDistance = 12.0;
    } else {
      this.viewMode = 'chase';
      this.pitch = 0.785; // 45 degree default angle facing ground
      this.targetDistance = 12.0;
    }
  }

  setMode(mode) {
    if (mode === 'vehicle') {
      this.targetDistance = 14.5;
      this.eyeHeight = 2.0;
      if (this.viewMode === 'chase') this.pitch = 0.785; // 45 deg facing downward towards ground
    } else if (mode === 'airplane' || mode === 'helicopter') {
      this.targetDistance = 34.0;
      this.eyeHeight = 3.0;
      this.pitch = 0.75;
    } else {
      // On foot
      this.targetDistance = 11.0;
      this.eyeHeight = 1.8;
      if (this.viewMode === 'chase') this.pitch = 0.785; // 45 deg facing downward towards ground
    }
  }

  update(dt, targetPos, entityYaw = 0, speedKmh = 0) {
    if (!targetPos || !Number.isFinite(targetPos.x)) return;

    // 1. In 'chase' mode (default), strictly lock behind car or player back and smoothly track turns!
    if (this.viewMode === 'chase') {
      if (!this.isDragging && !this.keys.left && !this.keys.right) {
        let desiredYaw = entityYaw - Math.PI;
        let diff = desiredYaw - this.yaw;
        while (diff < -Math.PI) diff += Math.PI * 2;
        while (diff > Math.PI) diff -= Math.PI * 2;
        // Smoothly rotate camera with the vehicle's turn
        this.yaw += diff * Math.min(1, dt * 6.5);
      }
    }

    // 2. Keyboard pitch/yaw adjustments
    const keyRotSpeed = 2.0;
    if (this.keys.up) {
      this.pitch = Math.max(this.minPitch, this.pitch - keyRotSpeed * dt);
    }
    if (this.keys.down) {
      this.pitch = Math.min(this.maxPitch, this.pitch + keyRotSpeed * dt);
    }
    if (this.keys.left) {
      this.yaw += keyRotSpeed * dt;
    }
    if (this.keys.right) {
      this.yaw -= keyRotSpeed * dt;
    }

    // 3. Smooth zoom damping with exponential decay
    const zoomAlpha = 1 - Math.exp(-8 * dt);
    this.distance += (this.targetDistance - this.distance) * zoomAlpha;

    // 4. Smooth dynamic FOV
    const safeSpeed = (Number.isFinite(speedKmh) && speedKmh > 0) ? speedKmh : 0;
    const baseFov = 54;
    const extraFov = Math.min(safeSpeed * 0.12, 12);
    const targetFov = baseFov + extraFov;
    const fovAlpha = 1 - Math.exp(-5 * dt);
    const currentFov = (Number.isFinite(this.camera.fov) && this.camera.fov > 10) ? this.camera.fov : baseFov;
    this.camera.fov = currentFov + (targetFov - currentFov) * fovAlpha;
    this.camera.updateProjectionMatrix();

    // 5. Spherical camera offset calculations
    const safePitch = Math.max(this.minPitch, Math.min(this.maxPitch, this.pitch));
    const cosPitch = Math.cos(safePitch);
    const sinPitch = Math.sin(safePitch);

    const offsetX = Math.sin(this.yaw) * cosPitch * this.distance;
    const offsetY = sinPitch * this.distance + this.eyeHeight;
    const offsetZ = Math.cos(this.yaw) * cosPitch * this.distance;

    const minCamY = targetPos.y + 2.2;
    const desiredCamY = targetPos.y + offsetY;

    const desiredCamPos = new THREE.Vector3(
      targetPos.x + offsetX,
      Math.max(minCamY, desiredCamY),
      targetPos.z + offsetZ
    );

    // Frame-rate independent exponential smoothing (butter smooth, zero jitter)
    const posAlpha = 1 - Math.exp(-14 * dt);
    this.currentPosition.lerp(desiredCamPos, posAlpha);
    this.camera.position.copy(this.currentPosition);

    // Look at vehicle / character center with smooth exponential tracking
    const lookTargetY = targetPos.y + Math.min(1.2, this.eyeHeight * 0.6);
    const desiredLookAt = new THREE.Vector3(targetPos.x, lookTargetY, targetPos.z);
    const lookAlpha = 1 - Math.exp(-16 * dt);
    this.currentLookAt.lerp(desiredLookAt, lookAlpha);
    this.camera.lookAt(this.currentLookAt);
  }
}
