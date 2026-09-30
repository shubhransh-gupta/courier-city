import * as THREE from 'three';

/**
 * RealisticPlayer
 * Implements grounded, weighted character movement with:
 * - Reduced snappiness through input smoothing and inertia
 * - Weighted acceleration/deceleration with traction simulation
 * - Momentum carryover during direction changes
 * - Natural locomotion blend trees
 */
export class RealisticPlayer {
  constructor(scene, physicsWorld, audioManager, bloodVfx) {
    this.scene = scene;
    this.physicsWorld = physicsWorld;
    this.audioManager = audioManager;
    this.bloodVfx = bloodVfx;

    // Character spawn position
    this.position = new THREE.Vector3(0, 0, 80);
    this.velocity = new THREE.Vector3(0, 0, 0);
    this.rotation = 0;
    this.movementAngle = 0;

    this.isDriving = false;
    this.currentVehicle = null;

    // Health & Ragdoll/Injury state
    this.health = 100;
    this.isRagdoll = false;
    this.ragdollTimer = 0;
    this.injuryStumble = 0;

    // Movement parameters - tuned for weighted, less snappy feel
    this.walkSpeed = 1.3;   // m/s (leisurely walk)
    this.jogSpeed = 2.8;    // m/s (brisk walk/jog)
    this.runSpeed = 4.5;    // m/s (fast run)
    this.sprintSpeed = 6.0; // m/s (sprint - challenging to maintain)

    // Reduced acceleration for heavier feel
    this.acceleration = 3.0;  // m/s^2 (reduced from 8.0 for more inertia)
    this.deceleration = 4.0;  // m/s^2 (reduced from 10.0)

    // Added traction simulation for more realistic movement
    this.traction = 0.85;     // 0-1, affects how easily you can change direction
    this.slipFactor = 0.15;   // How much you slip when changing direction rapidly

    this.jumpVelocity = 3.8;  // m/s (realistic jump height ~0.7m)
    this.gravity = 10.0;      // m/s^2 (slightly reduced for floatier jump feel, but still grounded)
    this.isGrounded = true;
    this.footstepTimer = 0;
    this.radius = 0.45;

    // Locomotion blend tree parameters
    this.speed = 0;                    // Current movement speed
    this.targetSpeed = 0;              // Desired speed based on input
    this.inputMove = new THREE.Vector2(0, 0); // Smoothed input
    this.rawInputMove = new THREE.Vector2(0, 0); // Raw input before smoothing
    this.moveDirection = new THREE.Vector2(0, 0); // Normalized movement direction
    this.lastMoveDirection = new THREE.Vector2(0, 0); // For momentum carryover

    // Input smoothing for reduced snappiness
    this.inputSmoothing = 0.15; // Higher = smoother but more lag
    this.inputAccumulator = new THREE.Vector2(0, 0);

    // Momentum carryover when changing direction
    this.momentumCarryover = 0.3; // 0-1, how much momentum carries when changing direction
    this.directionChangeTimer = 0;
    this.directionChangeDuration = 0.2; // seconds

    // Animation states
    this.isMoving = false;
    this.walkCycle = 0;
    this.lastTime = performance.now();

    // Foot planting (to prevent sliding)
    this.leftFootPlanted = false;
    this.rightFootPlanted = false;
    this.leftFootPos = new THREE.Vector3();
    this.rightFootPos = new THREE.Vector3();

    // Added subtle movement imperfections for less robotic feel
    this.movementJitter = 0.02; // Small random variation in movement
    this.jitterTime = 0;

    this.initMesh();
  }

  initMesh() {
    this.group = new THREE.Group();
    this.group.position.copy(this.position);

    // More realistic proportions and materials
    this.skinMat = new THREE.MeshStandardMaterial({
      color: 0xffd3ac,
      roughness: 0.85,
      metalness: 0.0
    });
    this.clothMat = new THREE.MeshStandardMaterial({
      color: 0x22a6b3,
      roughness: 0.9,
      metalness: 0.0
    });
    this.darkMat = new THREE.MeshStandardMaterial({
      color: 0x303952,
      roughness: 0.9,
      metalness: 0.0
    });
    this.shoeMat = new THREE.MeshStandardMaterial({
      color: 0x1e272e,
      roughness: 0.9,
      metalness: 0.0
    });
    this.accessoryMat = new THREE.MeshStandardMaterial({
      color: 0xf39c12,
      roughness: 0.7,
      metalness: 0.05
    });

    // More realistic character proportions
    // Head
    const headGeo = new THREE.SphereGeometry(0.24, 16, 12);
    this.head = new THREE.Mesh(headGeo, this.skinMat);
    this.head.position.y = 1.55;
    this.head.castShadow = true;
    this.group.add(this.head);

    // Neck
    const neckGeo = new THREE.CylinderGeometry(0.08, 0.09, 0.25, 8);
    const neck = new THREE.Mesh(neckGeo, this.skinMat);
    this.head.position.y = 1.4;
    this.head.castShadow = true;
    this.group.add(neck);

    // Torso
    const torsoGeo = new THREE.BoxGeometry(0.4, 0.6, 0.25);
    this.torso = new THREE.Mesh(torsoGeo, this.clothMat);
    this.torso.position.y = 1.0;
    this.torso.castShadow = true;
    this.group.add(this.torso);

    // Shoulders
    const shoulderGeo = new THREE.BoxGeometry(0.1, 0.06, 0.25);
    const leftShoulder = new THREE.Mesh(shoulderGeo, this.clothMat);
    leftShoulder.position.set(-0.22, 1.25, 0);
    leftShoulder.castShadow = true;
    this.group.add(leftShoulder);

    const rightShoulder = new THREE.Mesh(shoulderGeo, this.clothMat);
    rightShoulder.position.set(0.22, 1.25, 0);
    rightShoulder.castShadow = true;
    this.group.add(rightShoulder);

    // Arms
    this.leftArm = this.createLimb(0.07, 0.45, this.clothMat, this.skinMat);
    this.leftArm.position.set(-0.25, 0.9, 0);
    this.group.add(this.leftArm);

    this.rightArm = this.createLimb(0.07, 0.45, this.clothMat, this.skinMat);
    this.rightArm.position.set(0.25, 0.9, 0);
    this.group.add(this.rightArm);

    // Hands
    const handGeo = new THREE.SphereGeometry(0.08, 8, 6);
    const leftHand = new THREE.Mesh(handGeo, this.skinMat);
    leftHand.position.set(-0.25, 0.45, 0);
    this.group.add(leftHand);

    const rightHand = new THREE.Mesh(handGeo, this.skinMat);
    rightHand.position.set(0.25, 0.45, 0);
    this.group.add(rightHand);

    // Legs
    this.leftLeg = this.createLimb(0.09, 0.55, this.darkMat, this.shoeMat);
    this.leftLeg.position.set(-0.18, 0.4, 0);
    this.group.add(this.leftLeg);

    this.rightLeg = this.createLimb(0.09, 0.55, this.darkMat, this.shoeMat);
    this.rightLeg.position.set(0.18, 0.4, 0);
    this.group.add(this.rightLeg);

    // Feet
    const footGeo = new THREE.BoxGeometry(0.12, 0.04, 0.2);
    const leftFoot = new THREE.Mesh(footGeo, this.shoeMat);
    leftFoot.position.set(-0.18, 0.08, 0.1);
    this.group.add(leftFoot);

    const rightFoot = new THREE.Mesh(footGeo, this.shoeMat);
    rightFoot.position.set(0.18, 0.08, 0.1);
    this.group.add(rightFoot);

    // Ground shadow blob (more realistic)
    const shadowGeo = new THREE.CircleGeometry(0.45, 24);
    const shadowMat = new THREE.MeshBasicMaterial({
      color: 0x1e272e,
      transparent: true,
      opacity: 0.4,
      depthWrite: false
    });
    this.shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    this.shadowMesh.rotation.x = -Math.PI / 2;
    this.shadowMesh.position.y = 0.02;
    this.scene.add(this.shadowMesh);

    this.scene.add(this.group);
  }

  createLimb(radius, height, upperMat, lowerMat) {
    const pivot = new THREE.Group();
    const upperGeo = new THREE.CylinderGeometry(radius, radius * 0.9, height * 0.6, 8);
    upperGeo.translate(0, -height * 0.3, 0);
    const upper = new THREE.Mesh(upperGeo, upperMat);
    upper.castShadow = true;
    pivot.add(upper);

    const lowerGeo = new THREE.CylinderGeometry(radius * 0.85, radius, height * 0.4, 8);
    lowerGeo.translate(0, -height * 0.2, 0);
    const lower = new THREE.Mesh(lowerGeo, lowerMat);
    lower.castShadow = true;
    pivot.add(lower);

    return pivot;
  }

  updateInputSmoothing(input, dt) {
    // Get raw input
    const forward = input.getForward();
    const turn = input.getTurn();
    this.rawInputMove.set(forward, turn);

    // Apply smoothing to reduce instant response
    this.inputAccumulator.lerp(this.rawInputMove, this.inputSmoothing);
    this.inputMove.copy(this.inputAccumulator);

    // Apply slight deadzone to prevent micro-movements
    const inputLength = this.inputMove.length();
    if (inputLength < 0.05) {
      this.inputMove.set(0, 0);
    }
  }

  updateLocomotionState(dt) {
    // Calculate move direction from smoothed input
    const inputLength = this.inputMove.length();
    this.isMoving = inputLength > 0.1;

    if (this.isMoving) {
      // Normalize input direction
      this.moveDirection.copy(this.inputMove).normalize();

      // Calculate target speed based on input magnitude (continuous, not discrete)
      // This prevents snappy speed changes when crossing thresholds
      const inputFactor = Math.min(inputLength, 1.0); // Clamp to 0-1

      // Nonlinear response for more weighted feel
      // Harder to reach high speeds, easier to maintain low speeds
      const nonlinearFactor = inputFactor * inputFactor * (3.0 - 2.0 * inputFactor); // Smoothstep

      // Blend between walk and sprint based on nonlinear input
      this.targetSpeed = this.walkSpeed +
        (this.sprintSpeed - this.walkSpeed) * nonlinearFactor;

      // Apply momentum carryover when changing direction
      if (this.lastMoveDirection.length() > 0.1) {
        const directionChange = Math.acos(
          THREE.MathUtils.clamp(
            this.moveDirection.dot(this.lastMoveDirection),
            -1, 1
          )
        );

        // If changing direction significantly, apply momentum carryover
        if (directionChange > 0.5) { // More than ~30 degrees
          this.directionChangeTimer = this.directionChangeDuration;

          // Reduce target speed slightly when changing direction sharply
          // to simulate needing to slow down to turn
          const directionPenalty = THREE.MathUtils.mapLinear(
            directionChange, 0.5, Math.PI, 1.0, 0.6
          );
          this.targetSpeed *= directionPenalty;
        }
      }
    } else {
      // Idle state
      this.targetSpeed = 0;
      this.inputMove.set(0, 0);
      this.moveDirection.set(0, 0);
    }

    // Apply traction simulation - reduces effective acceleration when sliding
    const effectiveAccel = this.acceleration * this.traction;
    const effectiveDecel = this.deceleration * this.traction;

    // Apply acceleration/deceleration with nonlinear response for more weight
    const speedDiff = this.targetSpeed - this.speed;
    let accelRate = 0;

    if (Math.abs(speedDiff) > 0.001) {
      // Different rates for acceleration vs deceleration
      accelRate = speedDiff > 0 ? effectiveAccel : effectiveDecel;

      // Make it harder to accelerate from rest (simulating static friction)
      if (Math.abs(this.speed) < 0.1 && speedDiff > 0) {
        accelRate *= 0.6; // 40% less acceleration when starting from rest
      }

      // Make it harder to stop completely (simulating inertia)
      if (Math.abs(this.targetSpeed) < 0.1 && speedDiff < 0) {
        accelRate *= 0.7; // 30% less deceleration when nearly stopped
      }

      // Apply acceleration with clamping
      const accel = Math.sign(speedDiff) * Math.min(
        Math.abs(speedDiff),
        accelRate * dt
      );
      this.speed += accel;
    }

    // Apply subtle movement imperfections for less robotic feel
    this.jitterTime += dt;
    if (this.jitterTime > 0.1) {
      this.jitterTime = 0;
    }
  }

  updateDirectionChangeTimer(dt) {
    if (this.directionChangeTimer > 0) {
      this.directionChangeTimer -= dt;
    }
  }

  updateJumpAndGravity(dt) {
    const jumpInput = this.input.isJumping();

    if (jumpInput && this.isGrounded) {
      this.velocity.y = this.jumpVelocity;
      this.isGrounded = false;
      this.audioManager.playJump();
    }

    if (!this.isGrounded) {
      this.velocity.y -= this.gravity * dt;
    }
  }

  updatePositionAndCollisions(dt) {
    // Calculate movement vector based on camera-relative input
    const cameraYaw = this.cameraController ? this.cameraController.yaw : 0;
    const forwardX = -Math.sin(cameraYaw);
    const forwardZ = -Math.cos(cameraYaw);
    const rightX = Math.cos(cameraYaw);
    const rightZ = -Math.sin(cameraYaw);

    const moveX =
      this.moveDirection.x * forwardX +
      this.moveDirection.y * rightX;
    const moveZ =
      this.moveDirection.x * forwardZ +
      this.moveDirection.y * rightZ;

    // Apply movement with current speed
    this.velocity.x = moveX * this.speed;
    this.velocity.z = moveZ * this.speed;

    // Apply velocity
    const newX = this.position.x + this.velocity.x * dt;
    const newY = this.position.y + this.velocity.y * dt;
    const newZ = this.position.z + this.velocity.z * dt;

    // Ground checking and collision resolution
    let finalX = newX;
    let finalY = newY;
    let finalZ = newZ;
    let grounded = false;

    // Check surface height
    const surfaceHeight = this.physicsWorld.getSurfaceHeight
      ? this.physicsWorld.getSurfaceHeight(finalX, finalZ, this.position.y)
      : 0;

    if (finalY <= surfaceHeight) {
      finalY = surfaceHeight;
      grounded = true;
      this.velocity.y = 0;
    }

    // Obstacle collision resolution
    const obstacles = this.physicsWorld.obstacles || [];
    const r = this.radius;

    for (const b of obstacles) {
      if (b.isRamp) continue;

      // Broadphase check
      if (Math.abs(b.x - finalX) > b.hx + r + 1.0 ||
          Math.abs(b.z - finalZ) > b.hz + r + 1.0) {
        continue;
      }

      const minY = b.y - b.hy;
      const maxY = b.y + b.hy;

      // Check vertical overlap
      if (finalY + 0.3 < minY || finalY >= maxY - 0.2) {
        continue;
      }

      const isInsideX = (finalX >= b.x - b.hx) && (finalX <= b.x + b.hx);
      const isInsideZ = (finalZ >= b.z - b.hz) && (finalZ <= b.z + b.hz);

      if (isInsideX && isInsideZ) {
        // Deep penetration - push out along shortest axis
        const leftDist = finalX - (b.x - b.hx);
        const rightDist = (b.x + b.hx) - finalX;
        const backDist = finalZ - (b.z - b.hz);
        const frontDist = (b.z + b.hz) - finalZ;
        const minDist = Math.min(leftDist, rightDist, backDist, frontDist);

        if (minDist === leftDist) {
          finalX = b.x - b.hx - r;
        } else if (minDist === rightDist) {
          finalX = b.x + b.hx + r;
        } else if (minDist === backDist) {
          finalZ = b.z - b.hz - r;
        } else {
          finalZ = b.z + b.hz + r;
        }
      } else {
        // Sphere-box collision
        const closestX = Math.max(b.x - b.hx, Math.min(finalX, b.x + b.hx));
        const closestZ = Math.max(b.z - b.hz, Math.min(finalZ, b.z + b.hz));

        const dx = finalX - closestX;
        const dz = finalZ - closestZ;
        const distSq = dx * dx + dz * dz;

        if (distSq < r * r) {
          const dist = Math.sqrt(distSq);
          if (dist > 0.0001) {
            const push = r - dist;
            finalX += (dx / dist) * push;
            finalZ += (dz / dist) * push;
          } else {
            // Exactly on boundary
            finalX += (finalX >= b.x ? 1 : -1) * r;
          }
        }
      }
    }

    // Vehicle collision
    for (const veh of this.vehicles || []) {
      if (veh === this.currentVehicle) continue;

      const vx = veh.position.x;
      const vz = veh.position.z;
      const carRadius = 1.35;

      const dx = finalX - vx;
      const dz = finalZ - vz;
      const distSq = dx * dx + dz * dz;
      const combinedRadius = r + carRadius;

      if (distSq < combinedRadius * combinedRadius) {
        const dist = Math.sqrt(distSq);
        if (dist > 0.0001) {
          const overlap = combinedRadius - dist;
          finalX += (dx / dist) * overlap;
          finalZ += (dz / dist) * overlap;
        } else {
          finalX += combinedRadius;
        }
      }
    }

    this.position.set(finalX, finalY, finalZ);
    this.isGrounded = grounded;
  }

  updateAnimations(dt) {
    // Update body lean from acceleration (more subtle)
    const acceleration = this.speed - (this.lastSpeed || 0);
    this.lastSpeed = this.speed;

    // Lean forward when accelerating, backward when decelerating (more subtle)
    const leanAmount = THREE.MathUtils.clamp(acceleration * 0.05, -0.15, 0.15);
    this.group.rotation.x = THREE.MathUtils.lerp(
      this.group.rotation.x,
      leanAmount,
      Math.min(1, dt * 6)
    );

    // Update arm swing based on speed and movement
    if (this.isMoving && this.isGrounded) {
      const swingSpeed = this.speed * 1.8; // Adjusted for more natural swing
      const swingAmount = Math.sin(performance.now() * 0.001 * swingSpeed) * 0.3;

      this.leftArm.rotation.z = -swingAmount;
      this.rightArm.rotation.z = swingAmount;

      // Leg movement for walk cycle
      const legSwing = Math.sin(this.walkCycle * Math.PI) * 0.4;
      this.leftLeg.rotation.x = legSwing;
      this.rightLeg.rotation.x = -legSwing;

      // Add slight bounce
      const bounceHeight = Math.abs(Math.sin(this.walkCycle * 2 * Math.PI)) * 0.015;
      this.group.position.y = this.position.y + bounceHeight;
    } else {
      // Idle animations
      const idleT = performance.now() * 0.002;
      this.leftArm.rotation.z = Math.sin(idleT) * 0.03;
      this.rightArm.rotation.z = -Math.sin(idleT) * 0.03;
      this.leftLeg.rotation.x = Math.sin(idleT * 1.5) * 0.08;
      this.rightLeg.rotation.x = -Math.sin(idleT * 1.5) * 0.08;
      this.group.position.y = this.position.y;
    }

    // Update character rotation to face movement direction (with smoothing)
    if (this.isMoving && this.moveDirection.length() > 0.1) {
      const targetAngle = Math.atan2(
        this.moveDirection.x,
        this.moveDirection.y
      );

      // Smoother rotation with momentum consideration
      let angleDiff = targetAngle - this.rotation;
      while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;
      while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;

      // Reduce rotation speed when carrying momentum from previous direction
      const rotationSpeed = this.directionChangeTimer > 0 ? 3 : 6;
      this.rotation += angleDiff * Math.min(1, dt * rotationSpeed);
    }

    // Update group position and rotation
    this.group.position.copy(this.position);
    this.group.rotation.y = this.rotation;

    // Update shadow
    const surfaceY = this.isGrounded ? this.position.y : 0;
    this.shadowMesh.position.set(this.position.x, surfaceY + 0.02, this.position.z);
    const shadowScale = Math.max(0.3, 1.0 - ((this.position.y - surfaceY) * 0.15));
    this.shadowMesh.scale.set(shadowScale, shadowScale, shadowScale);
  }

  update(dt, input, cameraController, vehicles = []) {
    this.input = input;
    this.cameraController = cameraController;
    this.vehicles = vehicles;

    if (this.isDriving) {
      // Handle vehicle driving state (similar to original)
      if (this.currentVehicle) {
        this.position.copy(this.currentVehicle.position);
        // Vehicle-specific positioning logic would go here
        return;
      }
    }

    this.group.visible = true;
    this.shadowMesh.visible = true;

    // Ragdoll / Recovery state
    if (this.isRagdoll) {
      this.ragdollTimer -= dt;
      this.group.rotation.z = Math.PI / 2;
      this.group.rotation.x = Math.PI / 4;

      this.velocity.y -= this.gravity * dt;
      this.velocity.x *= Math.max(0, 1 - 4 * dt);
      this.velocity.z *= Math.max(0, 1 - 4 * dt);

      this.position.x += this.velocity.x * dt;
      this.position.y += this.velocity.y * dt;
      this.position.z += this.velocity.z * dt;

      if (this.position.y <= 0) {
        this.position.y = 0;
        this.velocity.y = 0;
      }

      this.group.position.copy(this.position);
      this.shadowMesh.position.set(this.position.x, 0.03, this.position.z);

      if (this.ragdollTimer <= 0) {
        this.isRagdoll = false;
        this.group.rotation.z = 0;
        this.group.rotation.x = 0;
      }
      return;
    }

    if (this.injuryStumble > 0) {
      this.injuryStumble -= dt;
    }

    // Update systems in order for proper behavior
    this.updateInputSmoothing(input, dt);
    this.updateLocomotionState(dt);
    this.updateDirectionChangeTimer(dt);
    this.updateJumpAndGravity(dt);
    this.updatePositionAndCollisions(dt);
    this.updateAnimations(dt);
  }

  enterVehicle(vehicle) {
    this.isDriving = true;
    this.currentVehicle = vehicle;
    this.velocity.set(0, 0, 0);
    this.audioManager.playDoor();
  }

  exitVehicle() {
    if (!this.currentVehicle) return;
    this.isDriving = false;
    const exitPos = this.currentVehicle.getExitPosition();
    this.position.set(exitPos.x, 0, exitPos.z);
    this.velocity.set(0, 0, 0);
    this.isGrounded = true;
    this.currentVehicle = null;

    // Reset to standing pose
    this.group.rotation.set(0, this.rotation, 0);
    this.leftLeg.rotation.set(0, 0, 0);
    this.rightLeg.rotation.set(0, 0, 0);
    this.leftArm.rotation.set(0, 0, 0);
    this.rightArm.rotation.set(0, 0, 0);
    this.group.visible = true;
    this.shadowMesh.visible = true;

    this.audioManager.playDoor();
  }
}