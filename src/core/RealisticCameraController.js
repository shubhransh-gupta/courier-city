import * as THREE from 'three';

/**
 * RealisticCameraController
 * Implements grounded, momentum-based camera behavior with:
 * - Increased inertia and weight to reduce snappy/floaty feel
 * - Slower response to make camera feel heavy and grounded
 * - Subtle camera lag that simulates operator inertia
 * - Reduced over-responsiveness to input
 */
export class RealisticCameraController {
  constructor(camera, domElement) {
    this.camera = camera;
    this.domElement = domElement;

    // View modes
    this.viewMode = 'chase'; // chase, isometric, topDown, free

    // Camera parameters for realistic, weighted feel
    this.yaw = 0;
    this.pitch = 0.25; // ~14 degree look-down (more shallow, less intense)
    this.minPitch = 0.1;
    this.maxPitch = 1.0;

    this.distance = 10.0; // Closer for more intimate, grounded feel
    this.targetDistance = 10.0;
    this.eyeHeight = 1.4; // Lower eye height for more immersed feel
    this.baseFov = 50; // Slightly wider FOV for peripheral awareness
    this.smoothingSpeed = 4.0; // Much slower smoothing for heavier feel

    // Physics-based camera properties with increased inertia
    this.velocity = new THREE.Vector3(0, 0, 0);
    this.targetPosition = new THREE.Vector3(0, 0, 0);
    this.targetLookAt = new THREE.Vector3(0, 0, 0);
    this.cameraPosition = new THREE.Vector3(0, 0, 0);
    this.cameraLookAt = new THREE.Vector3(0, 0, 0);

    // Increased mass/slower response for heavier feel
    this.positionSpring = {
      displacement: new THREE.Vector3(0, 0, 0),
      velocity: new THREE.Vector3(0, 0, 0),
      stiffness: 6.0, // Reduced stiffness for more lag
      damping: 4.0    // Increased damping to prevent oscillation
    };

    this.lookAtSpring = {
      displacement: new THREE.Vector3(0, 0, 0),
      velocity: new THREE.Vector3(0, 0, 0),
      stiffness: 5.0,
      damping: 3.5
    };

    // Motion effects - reduced for less snappiness
    this.accelerationRoll = 0; // Camera roll from acceleration
    this.lateralSway = 0;    // Side-to-side sway from turning
    this.verticalSway = 0;   // Up-down sway from bumps
    this.speedHistory = [];  // Track speed for acceleration calculation
    this.maxHistory = 15;    // Longer history for smoother acceleration

    // Mouse drag orbit - reduced sensitivity
    this.isDragging = false;
    this.lastMouseX = 0;
    this.lastMouseY = 0;

    // Keyboard controls
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

        // Reduced sensitivity for less snappy camera response
        this.yaw -= dx * 0.0015;
        this.pitch = Math.max(this.minPitch, Math.min(this.maxPitch, this.pitch + dy * 0.0015));

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
      if (e.target && e.target.closest && e.target.closest('#camera-modal, #controls-modal, #full-map-overlay, #welcome-landing-modal, .camera-card, .controls-card, .map-modal')) {
        return;
      }
      // Slower zoom response
      this.targetDistance = Math.max(4.0, Math.min(30.0, this.targetDistance + e.deltaY * 0.005));
    }, { passive: true });

    // Keyboard controls for camera orbit (I,K,J,L keys) - reduced sensitivity
    window.addEventListener('keydown', (e) => {
      if (e.target && e.target.closest && e.target.closest('input, textarea, #camera-modal, #controls-modal, #full-map-overlay')) {
        return;
      }
      if (e.code === 'KeyI') {
        this.keys.up = true;
      } else if (e.code === 'KeyK') {
        this.keys.down = true;
      } else if (e.code === 'KeyJ') {
        this.keys.left = true;
      } else if (e.code === 'KeyL') {
        this.keys.right = true;
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

  setMode(mode) {
    if (mode === 'vehicle') {
      this.targetDistance = 11.0;
      this.eyeHeight = 1.6;
      if (this.viewMode === 'chase' || this.viewMode === 'isometric') this.pitch = 0.3;
    } else if (mode === 'airplane' || mode === 'helicopter') {
      this.targetDistance = 20.0;
      this.eyeHeight = 2.2;
      this.pitch = 0.2;
    } else {
      // On foot
      this.targetDistance = 8.0;
      this.eyeHeight = 1.4;
      if (this.viewMode === 'chase' || this.viewMode === 'isometric') this.pitch = 0.25;
    }
  }

  setCustomView(params = {}) {
    if (params.distance !== undefined) {
      this.targetDistance = Math.max(2.5, Math.min(25.0, params.distance));
      this.distance = this.targetDistance;
    }
    if (params.pitch !== undefined) {
      this.pitch = Math.max(this.minPitch, Math.min(this.maxPitch, params.pitch));
    }
    if (params.eyeHeight !== undefined) {
      this.eyeHeight = Math.max(0.3, Math.min(8.0, params.eyeHeight));
    }
    if (params.fov !== undefined) {
      this.baseFov = Math.max(30, Math.min(70, params.fov));
      this.camera.fov = this.baseFov;
      this.camera.updateProjectionMatrix();
    }
    if (params.smoothing !== undefined) {
      this.smoothingSpeed = Math.max(1.0, Math.min(8.0, params.smoothing));
    }
    if (params.viewMode !== undefined) {
      this.viewMode = params.viewMode;
    }
  }

  updatePhysicsSprings(dt) {
    // Update position spring with heavier inertia
    const posForce = new THREE.Vector3()
      .subVectors(this.targetPosition, this.cameraPosition)
      .multiplyScalar(this.positionSpring.stiffness)
      .sub(new THREE.Vector3()
        .copy(this.positionSpring.velocity)
        .multiplyScalar(this.positionSpring.damping));

    const posAcceleration = posForce.clone(); // Assuming mass = 1
    this.positionSpring.velocity.addScaledVector(posAcceleration, dt);
    this.positionSpring.displacement.addScaledVector(this.positionSpring.velocity, dt);
    this.cameraPosition.add(this.positionSpring.displacement);

    // Update lookAt spring
    const lookForce = new THREE.Vector3()
      .subVectors(this.targetLookAt, this.cameraLookAt)
      .multiplyScalar(this.lookAtSpring.stiffness)
      .sub(new THREE.Vector3()
        .copy(this.lookAtSpring.velocity)
        .multiplyScalar(this.lookAtSpring.damping));

    const lookAcceleration = lookForce.clone(); // Assuming mass = 1
    this.lookAtSpring.velocity.addScaledVector(lookAcceleration, dt);
    this.lookAtSpring.displacement.addScaledVector(this.lookAtSpring.velocity, dt);
    this.cameraLookAt.add(this.lookAtSpring.displacement);
  }

  updateMotionEffects(dt, speed, acceleration, isTurning) {
    // Speed history for acceleration calculation (longer history = smoother)
    this.speedHistory.push(speed);
    if (this.speedHistory.length > this.maxHistory) {
      this.speedHistory.shift();
    }

    // Calculate acceleration from speed history (smoothed)
    let accel = 0;
    if (this.speedHistory.length >= 2) {
      const startSpeed = this.speedHistory[0];
      const endSpeed = this.speedHistory[this.speedHistory.length - 1];
      const timeFactor = this.speedHistory.length * 0.1; // Approximate time
      accel = (endSpeed - startSpeed) / timeFactor;
    }

    // Reduced acceleration roll for less snappiness
    const maxRoll = 0.08; // ~4.5 degrees (reduced from 0.15)
    this.accelerationRoll = THREE.MathUtils.lerp(
      this.accelerationRoll,
      -accel * 0.01, // Further reduced sensitivity
      Math.min(1, dt * 2)
    );
    this.accelerationRoll = THREE.MathUtils.clamp(this.accelerationRoll, -maxRoll, maxRoll);

    // Greatly reduced lateral sway
    if (isTurning) {
      this.lateralSway = THREE.MathUtils.lerp(
        this.lateralSway,
        Math.sin(performance.now() * 0.002) * 0.02, // Much reduced
        Math.min(1, dt * 2)
      );
    } else {
      this.lateralSway = THREE.MathUtils.lerp(this.lateralSway, 0, Math.min(1, dt * 1.5));
    }

    // Further reduced vertical sway
    const speedFactor = Math.min(speed / 15.0, 1.0); // Adjusted for new speed scale
    this.verticalSway = THREE.MathUtils.lerp(
      this.verticalSway,
      Math.sin(performance.now() * 0.003 + speedFactor) * 0.008 * speedFactor, // Much reduced
      Math.min(1, dt * 4)
    );
  }

  update(dt, targetPos, entityYaw = 0, speedKmh = 0, isDriving = false) {
    if (!targetPos || !Number.isFinite(targetPos.x)) return;

    // Calculate turning state with hysteresis to reduce jitter
    const isTurning = Math.abs(entityYaw - (this.lastYaw || 0)) > 0.008;
    this.lastYaw = entityYaw;

    // 1. View Mode specific behavior with much slower response
    let desiredOffset = new THREE.Vector3(0, 0, 0);
    let desiredLookAtOffset = new THREE.Vector3(0, 0, 0);

    if (this.viewMode === 'chase') {
      // Much slower, more weighted chase camera
      if (isDriving && !this.isDragging && !this.keys.left && !this.keys.right) {
        // Very slow response to vehicle orientation changes
        let desiredYaw = entityYaw - Math.PI; // Behind the vehicle
        let yawDiff = desiredYaw - this.yaw;
        // Normalize angle difference
        while (yawDiff < -Math.PI) yawDiff += Math.PI * 2;
        while (yawDiff > Math.PI) yawDiff -= Math.PI * 2;
        this.yaw += yawDiff * Math.min(1, dt * 1.2); // Much slower response
      }

      // Chase camera offset (behind and slightly above)
      desiredOffset.set(
        -Math.sin(this.yaw) * Math.cos(this.pitch) * this.distance,
        Math.sin(this.pitch) * this.distance + this.eyeHeight,
        -Math.cos(this.yaw) * Math.cos(this.pitch) * this.distance
      );
      desiredLookAtOffset.set(0, this.eyeHeight * 0.3, 0); // Look lower for more grounded feel
    } else if (this.viewMode === 'isometric') {
      // Very slow isometric transition
      const desiredYaw = -Math.PI * 0.25; // 45 degree angle
      let yawDiff = desiredYaw - this.yaw;
      while (yawDiff < -Math.PI) yawDiff += Math.PI * 2;
      while (yawDiff > Math.PI) yawDiff -= Math.PI * 2;
      this.yaw += yawDiff * Math.min(1, dt * 0.8); // Very slow transition

      this.pitch = THREE.MathUtils.lerp(this.pitch, 0.4, Math.min(1, dt * 1.2)); // ~23 degrees

      desiredOffset.set(
        -Math.sin(this.yaw) * Math.cos(this.pitch) * this.distance,
        Math.sin(this.pitch) * this.distance + this.eyeHeight,
        -Math.cos(this.yaw) * Math.cos(this.pitch) * this.distance
      );
      desiredLookAtOffset.set(0, this.eyeHeight * 0.2, 0);
    } else if (this.viewMode === 'topDown') {
      // Slow top-down transition
      this.pitch = THREE.MathUtils.lerp(this.pitch, 0.9, Math.min(1, dt * 1.5)); // ~52 degrees
      this.yaw = THREE.MathUtils.lerp(this.yaw, 0, Math.min(1, dt * 1.5)); // Very slow centering

      desiredOffset.set(0, this.distance * 0.8, 0); // Not straight up, slightly angled
      desiredLookAtOffset.set(0, 0, 0);
    } else if (this.viewMode === 'free') {
      // Free orbit with significant inertia
      desiredOffset.set(
        -Math.sin(this.yaw) * Math.cos(this.pitch) * this.distance,
        Math.sin(this.pitch) * this.distance + this.eyeHeight,
        -Math.cos(this.yaw) * Math.cos(this.pitch) * this.distance
      );
      desiredLookAtOffset.set(0, this.eyeHeight * 0.25, 0);
    }

    // 2. Much slower keyboard pitch/yaw adjustments
    const keyRotSpeed = 0.5; // Greatly reduced for weighted feel
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

    // 3. Very slow zoom with heavy damping
    const zoomAlpha = 1 - Math.exp(-1.5 * dt); // Very slow zoom
    this.distance += (this.targetDistance - this.distance) * zoomAlpha;

    // 4. Subtle dynamic FOV based on speed (minimal change)
    const safeSpeed = Number.isFinite(speedKmh) ? speedKmh : 0;
    const speedFOVFactor = THREE.MathUtils.mapLinear(safeSpeed, 0, 20, 0, 2); // Minimal FOV change
    const targetFov = this.baseFov + speedFOVFactor;
    const fovAlpha = 1 - Math.exp(-3 * dt); // Slow FOV change
    this.camera.fov += (targetFov - this.camera.fov) * fovAlpha;
    this.camera.updateProjectionMatrix();

    // 5. Calculate target camera position and lookat
    const targetCamPos = new THREE.Vector3(
      targetPos.x + desiredOffset.x,
      targetPos.y + desiredOffset.y,
      targetPos.z + desiredOffset.z
    );

    const targetLookAt = new THREE.Vector3(
      targetPos.x + desiredLookAtOffset.x,
      targetPos.y + desiredLookAtOffset.y,
      targetPos.z + desiredLookAtOffset.z
    );

    // 6. Apply motion effects (greatly reduced for less snappiness)
    // Roll from acceleration
    const rollQuat = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(0, 0, this.accelerationRoll, 'XYZ')
    );

    // Lateral sway
    const lateralQuat = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(0, 0, this.lateralSway, 'XYZ')
    );

    // Combine rotations
    const totalQuat = new THREE.Quaternion().multiplyQuaternions(rollQuat, lateralQuat);

    // Apply rotation to offset vector
    const rotatedOffset = desiredOffset.clone().applyQuaternion(totalQuat);
    targetCamPos.set(
      targetPos.x + rotatedOffset.x,
      targetPos.y + rotatedOffset.y,
      targetPos.z + rotatedOffset.z
    );

    // 7. Add very subtle vertical sway (barely perceptible)
    targetCamPos.y += this.verticalSway * 0.5;

    // 8. Set spring targets
    this.targetPosition.copy(targetCamPos);
    this.targetLookAt.copy(targetLookAt);

    // 9. Update physics springs with heavy inertia
    this.updatePhysicsSprings(dt);

    // 10. Apply camera position and lookat
    this.camera.position.copy(this.cameraPosition);
    this.camera.lookAt(this.cameraLookAt);

    // 11. Apply very subtle camera roll (barely perceptible)
    const bankAngle = this.positionSpring.velocity.length() * 0.002;
    if (bankAngle > 0.0002) {
      const bankQuat = new THREE.Quaternion()
        .setFromEuler(new THREE.Euler(0, 0, bankAngle * Math.sign(this.positionSpring.velocity.x), 'XYZ'));

      // Apply bank to lookAt vector to create subtle dutch angle effect
      const bankedLookAt = this.cameraLookAt.clone()
        .sub(this.camera.position)
        .applyQuaternion(bankQuat)
        .add(this.camera.position);

      this.camera.lookAt(bankedLookAt);
    }
  }
}