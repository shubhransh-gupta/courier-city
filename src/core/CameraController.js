import * as THREE from 'three';

export class CameraController {
  constructor(camera, domElement) {
    this.camera = camera;
    this.domElement = domElement;

    // View modes:
    // 'chase': Elevated 45-degree smooth trailing view
    // 'isometric': Classic Bruno Simon 3/4 isometric diorama view
    // 'topDown': High strategy navigation map view
    // 'free': Mouse orbital view
    this.viewMode = 'chase';

    // Camera parameters: Bruno Simon low-FOV diorama perspective
    this.yaw = 0;
    this.pitch = 0.82; // ~47 degree elevated look-down angle
    this.minPitch = 0.35;
    this.maxPitch = 1.45;

    this.distance = 16.0;
    this.targetDistance = 16.0;
    this.eyeHeight = 2.0;
    this.baseFov = 38;
    this.smoothingSpeed = 11;
    this.activePreset = 'diorama';

    // Camera position smoothing
    this.currentPosition = new THREE.Vector3(0, 14.0, 95.0);
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
      if (e.target === this.domElement) {
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
      this.targetDistance = Math.max(6.0, Math.min(50.0, this.targetDistance + e.deltaY * 0.015));
    }, { passive: true });

    // Keyboard controls (KeyI, KeyK, KeyJ, KeyL for camera orbit, Arrow keys reserved for vehicle driving!)
    window.addEventListener('keydown', (e) => {
      if (e.code === 'KeyI') {
        this.keys.up = true;
      } else if (e.code === 'KeyK') {
        this.keys.down = true;
      } else if (e.code === 'KeyJ') {
        this.keys.left = true;
      } else if (e.code === 'KeyL') {
        this.keys.right = true;
      } else if (e.code === 'KeyV') {
        this.toggleViewMode();
      }
    });

    window.addEventListener('keyup', (e) => {
      if (e.code === 'KeyI') {
        this.keys.up = false;
      } else if (e.code === 'KeyK') {
        this.keys.down = false;
      } else if (e.code === 'KeyJ') {
        this.keys.left = false;
      } else if (e.code === 'KeyL') {
        this.keys.right = false;
      }
    });
  }

  toggleViewMode() {
    if (this.viewMode === 'chase') {
      this.viewMode = 'isometric';
      this.pitch = 0.82;
      this.targetDistance = 20.0;
    } else if (this.viewMode === 'isometric') {
      this.viewMode = 'topDown';
      this.pitch = 1.38;
      this.targetDistance = 32.0;
    } else if (this.viewMode === 'topDown') {
      this.viewMode = 'free';
      this.pitch = 0.82;
      this.targetDistance = 16.0;
    } else {
      this.viewMode = 'chase';
      this.pitch = 0.82;
      this.targetDistance = 16.0;
    }
  }

  setMode(mode) {
    if (mode === 'vehicle') {
      this.targetDistance = 18.0;
      this.eyeHeight = 2.0;
      if (this.viewMode === 'chase' || this.viewMode === 'isometric') this.pitch = 0.82;
    } else if (mode === 'airplane' || mode === 'helicopter') {
      this.targetDistance = 36.0;
      this.eyeHeight = 3.5;
      this.pitch = 0.78;
    } else {
      // On foot
      this.targetDistance = 13.0;
      this.eyeHeight = 1.8;
      if (this.viewMode === 'chase' || this.viewMode === 'isometric') this.pitch = 0.82;
    }
  }

  setCustomView(params = {}) {
    if (params.distance !== undefined) {
      this.targetDistance = Math.max(5.0, Math.min(60.0, params.distance));
      this.distance = this.targetDistance;
    }
    if (params.pitch !== undefined) {
      this.pitch = Math.max(this.minPitch, Math.min(this.maxPitch, params.pitch));
    }
    if (params.eyeHeight !== undefined) {
      this.eyeHeight = Math.max(0.2, Math.min(12.0, params.eyeHeight));
    }
    if (params.fov !== undefined) {
      this.baseFov = Math.max(20, Math.min(85, params.fov));
      this.camera.fov = this.baseFov;
      this.camera.updateProjectionMatrix();
    }
    if (params.smoothing !== undefined) {
      this.smoothingSpeed = Math.max(3.0, Math.min(30.0, params.smoothing));
    }
    if (params.viewMode !== undefined) {
      this.viewMode = params.viewMode;
    }
    if (params.preset !== undefined) {
      this.activePreset = params.preset;
    }
  }

  applyPreset(presetKey) {
    const presets = {
      diorama: { pitch: 0.82, distance: 16.0, eyeHeight: 2.0, fov: 38, viewMode: 'chase', smoothing: 11 },
      isometric: { pitch: 0.82, distance: 20.0, eyeHeight: 2.0, fov: 38, viewMode: 'isometric', smoothing: 10 },
      closeChase: { pitch: 0.45, distance: 10.0, eyeHeight: 1.4, fov: 48, viewMode: 'chase', smoothing: 15 },
      topDown: { pitch: 1.45, distance: 34.0, eyeHeight: 3.0, fov: 42, viewMode: 'topDown', smoothing: 10 },
      cockpit: { pitch: 0.32, distance: 6.2, eyeHeight: 1.2, fov: 55, viewMode: 'chase', smoothing: 18 },
      free: { pitch: 0.82, distance: 16.0, eyeHeight: 2.0, fov: 38, viewMode: 'free', smoothing: 12 }
    };
    if (presets[presetKey]) {
      this.activePreset = presetKey;
      this.setCustomView({ ...presets[presetKey], preset: presetKey });
      return presets[presetKey];
    }
    return null;
  }

  getSettings() {
    return {
      distance: Math.round(this.distance * 10) / 10,
      pitch: Math.round(this.pitch * 100) / 100,
      pitchDegrees: Math.round((this.pitch * 180) / Math.PI),
      eyeHeight: Math.round(this.eyeHeight * 10) / 10,
      fov: Math.round(this.baseFov),
      smoothing: Math.round(this.smoothingSpeed),
      viewMode: this.viewMode,
      activePreset: this.activePreset
    };
  }

  setPhysicsWorld(physicsWorld) {
    this.physicsWorld = physicsWorld;
  }

  resetToTarget(targetPos, entityYaw = null) {
    if (!targetPos) return;
    if (entityYaw !== null && this.viewMode === 'chase') {
      this.yaw = entityYaw - Math.PI;
    }
    const safePitch = Math.max(this.minPitch, Math.min(this.maxPitch, this.pitch));
    const cosPitch = Math.cos(safePitch);
    const sinPitch = Math.sin(safePitch);

    const offsetX = Math.sin(this.yaw) * cosPitch * this.distance;
    const offsetY = sinPitch * this.distance + this.eyeHeight;
    const offsetZ = Math.cos(this.yaw) * cosPitch * this.distance;

    this.currentPosition.set(
      targetPos.x + offsetX,
      targetPos.y + offsetY,
      targetPos.z + offsetZ
    );
    this.camera.position.copy(this.currentPosition);

    const lookTargetY = targetPos.y + Math.min(1.2, this.eyeHeight * 0.6);
    this.currentLookAt.set(targetPos.x, lookTargetY, targetPos.z);
    this.camera.lookAt(this.currentLookAt);
  }

  update(dt, targetPos, entityYaw = 0, speedKmh = 0, isDriving = false) {
    if (!targetPos || !Number.isFinite(targetPos.x)) return;

    // 1. View Mode yaw updates
    if (this.viewMode === 'chase') {
      if (isDriving && !this.isDragging && !this.keys.left && !this.keys.right) {
        let desiredYaw = entityYaw - Math.PI;
        let diff = desiredYaw - this.yaw;
        while (diff < -Math.PI) diff += Math.PI * 2;
        while (diff > Math.PI) diff -= Math.PI * 2;
        // Smoothly follow vehicle orientation
        this.yaw += diff * Math.min(1, dt * 5.5);
      }
    } else if (this.viewMode === 'isometric') {
      // Classic fixed 3/4 isometric perspective
      const desiredYaw = -Math.PI * 0.25; // 45 degree angle
      let diff = desiredYaw - this.yaw;
      while (diff < -Math.PI) diff += Math.PI * 2;
      while (diff > Math.PI) diff -= Math.PI * 2;
      this.yaw += diff * Math.min(1, dt * 6.0);
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

    // 4. Low-FOV Diorama lens (Bruno Simon style: user customizable base, gentle speed expansion)
    const safeSpeed = (Number.isFinite(speedKmh) && speedKmh > 0) ? speedKmh : 0;
    const baseFov = this.baseFov || 38;
    const extraFov = Math.min(safeSpeed * 0.1, 8);
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

    const minCamY = targetPos.y + 1.2;
    const desiredCamY = targetPos.y + offsetY;

    const desiredCamPos = new THREE.Vector3(
      targetPos.x + offsetX,
      Math.max(minCamY, desiredCamY),
      targetPos.z + offsetZ
    );

    // 6. Building & Wall Occlusion Avoidance:
    // If a building lies between the camera and the car, pull the camera closer
    // and elevate slightly so the player never loses sight of their vehicle.
    if (this.physicsWorld && this.physicsWorld.obstacles) {
      const rayStart = new THREE.Vector3(targetPos.x, targetPos.y + 1.2, targetPos.z);
      const rayDir = new THREE.Vector3().subVectors(desiredCamPos, rayStart);
      const totalDist = rayDir.length();
      if (totalDist > 0.1) {
        rayDir.normalize();
        let closestHit = totalDist;

        for (let i = 0; i < this.physicsWorld.obstacles.length; i++) {
          const obs = this.physicsWorld.obstacles[i];
          if (obs.isRamp) continue; // Don't occlude for ground ramps

          let tmin = 0;
          let tmax = closestHit;
          let hit = true;

          const axes = [
            { start: rayStart.x, dir: rayDir.x, min: obs.minX, max: obs.maxX },
            { start: rayStart.y, dir: rayDir.y, min: obs.minY, max: obs.maxY },
            { start: rayStart.z, dir: rayDir.z, min: obs.minZ, max: obs.maxZ }
          ];

          for (let a = 0; a < 3; a++) {
            const ax = axes[a];
            if (Math.abs(ax.dir) < 0.000001) {
              if (ax.start < ax.min || ax.start > ax.max) {
                hit = false;
                break;
              }
            } else {
              const invD = 1.0 / ax.dir;
              let t1 = (ax.min - ax.start) * invD;
              let t2 = (ax.max - ax.start) * invD;
              if (t1 > t2) { const tmp = t1; t1 = t2; t2 = tmp; }
              tmin = Math.max(tmin, t1);
              tmax = Math.min(tmax, t2);
              if (tmin > tmax) {
                hit = false;
                break;
              }
            }
          }

          if (hit && tmin > 0.8 && tmin < closestHit) {
            closestHit = tmin;
          }
        }

        if (closestHit < totalDist) {
          const safeDist = Math.max(4.0, closestHit - 0.7);
          desiredCamPos.copy(rayStart).addScaledVector(rayDir, safeDist);
          // Elevate camera slightly to look over building facade into alleyway
          desiredCamPos.y = Math.max(desiredCamPos.y, targetPos.y + 3.2);
        }
      }
    }

    // Frame-rate independent exponential smoothing
    const smoothRate = this.smoothingSpeed || 11.0;
    const posAlpha = 1 - Math.exp(-smoothRate * dt);
    this.currentPosition.lerp(desiredCamPos, posAlpha);
    this.camera.position.copy(this.currentPosition);

    // Look at vehicle / character center with smooth exponential tracking
    const lookTargetY = targetPos.y + Math.min(1.2, this.eyeHeight * 0.6);
    const desiredLookAt = new THREE.Vector3(targetPos.x, lookTargetY, targetPos.z);
    const lookAlpha = 1 - Math.exp(-(smoothRate + 3.0) * dt);
    this.currentLookAt.lerp(desiredLookAt, lookAlpha);
    this.camera.lookAt(this.currentLookAt);
  }
}
