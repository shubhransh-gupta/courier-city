import * as THREE from 'three';

export class Player {
  constructor(scene, physicsWorld, audioManager, bloodVfx) {
    this.scene = scene;
    this.physicsWorld = physicsWorld;
    this.audioManager = audioManager;
    this.bloodVfx = bloodVfx;

    // Character spawn position right on the avenue
    this.position = new THREE.Vector3(0, 0, 16);
    this.velocity = new THREE.Vector3(0, 0, 0);
    this.rotation = 0;
    this.movementAngle = 0; // Direction currently walking

    this.isDriving = false;
    this.currentVehicle = null;

    // Health & Ragdoll/Injury state
    this.health = 100;
    this.isRagdoll = false;
    this.ragdollTimer = 0;
    this.injuryStumble = 0;

    // Movement parameters
    this.walkSpeed = 6.2;
    this.runSpeed = 12.0;
    this.jumpVelocity = 10.5;
    this.gravity = 28.0;
    this.isGrounded = true;
    this.footstepTimer = 0;
    this.radius = 0.45;

    this.initMesh();
  }

  initMesh() {
    this.group = new THREE.Group();
    this.group.position.copy(this.position);

    // Warm, cel-shaded materials matching Messenger art style
    this.skinMat = new THREE.MeshToonMaterial({ color: 0xffd3ac });
    this.capMat = new THREE.MeshToonMaterial({ color: 0xff4757 });
    this.coatMat = new THREE.MeshToonMaterial({ color: 0x22a6b3 });
    this.pantsMat = new THREE.MeshToonMaterial({ color: 0x303952 });
    this.bagMat = new THREE.MeshToonMaterial({ color: 0xf39c12 });
    this.shoeMat = new THREE.MeshToonMaterial({ color: 0x1e272e });

    // Torso / Jacket
    const torsoGeo = new THREE.CylinderGeometry(0.32, 0.28, 0.72, 10);
    this.torso = new THREE.Mesh(torsoGeo, this.coatMat);
    this.torso.position.y = 0.86;
    this.torso.castShadow = true;
    this.torso.receiveShadow = true;
    this.group.add(this.torso);

    // Courier messenger bag
    const bagGeo = new THREE.BoxGeometry(0.32, 0.38, 0.16);
    const bag = new THREE.Mesh(bagGeo, this.bagMat);
    bag.position.set(0.24, 0.82, -0.18);
    bag.rotation.set(0.25, 0.35, -0.3);
    bag.castShadow = true;
    this.group.add(bag);

    // Head
    const headGeo = new THREE.SphereGeometry(0.28, 14, 12);
    this.head = new THREE.Mesh(headGeo, this.skinMat);
    this.head.position.y = 1.45;
    this.head.castShadow = true;
    this.group.add(this.head);

    // Cap / Beanie
    const capGeo = new THREE.SphereGeometry(0.3, 14, 10, 0, Math.PI * 2, 0, Math.PI * 0.52);
    const cap = new THREE.Mesh(capGeo, this.capMat);
    cap.position.y = 1.52;
    this.group.add(cap);

    // Cap visor
    const visorGeo = new THREE.BoxGeometry(0.26, 0.04, 0.18);
    const visor = new THREE.Mesh(visorGeo, this.capMat);
    visor.position.set(0, 1.49, 0.27);
    visor.rotation.x = -0.12;
    this.group.add(visor);

    // Eyes
    const eyeGeo = new THREE.SphereGeometry(0.045, 6, 6);
    const eyeMat = new THREE.MeshBasicMaterial({ color: 0x1e272e });
    const leftEye = new THREE.Mesh(eyeGeo, eyeMat);
    leftEye.position.set(-0.09, 1.46, 0.255);
    const rightEye = new THREE.Mesh(eyeGeo, eyeMat);
    rightEye.position.set(0.09, 1.46, 0.255);
    this.group.add(leftEye, rightEye);

    // Limbs with joint pivots
    this.leftLeg = this.createLimb(0.12, 0.55, this.pantsMat, this.shoeMat);
    this.leftLeg.position.set(-0.16, 0.55, 0);
    this.group.add(this.leftLeg);

    this.rightLeg = this.createLimb(0.12, 0.55, this.pantsMat, this.shoeMat);
    this.rightLeg.position.set(0.16, 0.55, 0);
    this.group.add(this.rightLeg);

    this.leftArm = this.createArm(0.1, 0.5, this.coatMat, this.skinMat);
    this.leftArm.position.set(-0.4, 1.1, 0);
    this.group.add(this.leftArm);

    this.rightArm = this.createArm(0.1, 0.5, this.coatMat, this.skinMat);
    this.rightArm.position.set(0.4, 1.1, 0);
    this.group.add(this.rightArm);

    // Ground shadow blob
    const shadowGeo = new THREE.CircleGeometry(0.48, 16);
    const shadowMat = new THREE.MeshBasicMaterial({
      color: 0x1e272e,
      transparent: true,
      opacity: 0.35,
      depthWrite: false
    });
    this.shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    this.shadowMesh.rotation.x = -Math.PI / 2;
    this.shadowMesh.position.y = 0.02;
    this.scene.add(this.shadowMesh);

    this.scene.add(this.group);
  }

  createLimb(radius, height, pantsMat, shoeMat) {
    const pivot = new THREE.Group();
    const legGeo = new THREE.CylinderGeometry(radius, radius * 0.85, height, 8);
    legGeo.translate(0, -height / 2, 0);
    const leg = new THREE.Mesh(legGeo, pantsMat);
    leg.castShadow = true;
    pivot.add(leg);

    const shoeGeo = new THREE.BoxGeometry(radius * 2, 0.12, radius * 2.6);
    const shoe = new THREE.Mesh(shoeGeo, shoeMat);
    shoe.position.set(0, -height, 0.06);
    shoe.castShadow = true;
    pivot.add(shoe);

    return pivot;
  }

  createArm(radius, height, coatMat, skinMat) {
    const pivot = new THREE.Group();
    const armGeo = new THREE.CylinderGeometry(radius, radius * 0.85, height * 0.75, 8);
    armGeo.translate(0, -height * 0.38, 0);
    const arm = new THREE.Mesh(armGeo, coatMat);
    arm.castShadow = true;
    pivot.add(arm);

    const handGeo = new THREE.SphereGeometry(radius * 0.9, 8, 8);
    const hand = new THREE.Mesh(handGeo, skinMat);
    hand.position.set(0, -height * 0.85, 0);
    pivot.add(hand);

    return pivot;
  }

  hitByCar(carVelocity) {
    // Pedestrian safety: car stops safely in front of player, no death or blood
    return;
  }

  update(dt, input, cameraYaw, vehicles = []) {
    if (this.isDriving) {
      this.group.visible = false;
      this.shadowMesh.visible = false;
      if (this.currentVehicle) {
        this.position.copy(this.currentVehicle.position);
      }
      return;
    }

    this.group.visible = true;
    this.shadowMesh.visible = true;

    // Ragdoll / Recovery state
    if (this.isRagdoll) {
      this.ragdollTimer -= dt;
      this.group.rotation.z = Math.PI / 2; // lying on ground
      this.group.rotation.x = Math.PI / 4;

      // Apply air gravity and friction
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

    // Read direct user inputs:
    const forward = input.getForward();
    const turn = input.getTurn();
    const sprint = input.isSprinting();
    const jump = input.isJumping();

    let speed = sprint ? this.runSpeed : this.walkSpeed;
    if (this.injuryStumble > 0) speed *= 0.65; // limp slightly if recently hit

    const isMoving = (forward !== 0 || turn !== 0);

    let moveX = 0;
    let moveZ = 0;

    if (isMoving) {
      const fwdX = -Math.sin(cameraYaw);
      const fwdZ = -Math.cos(cameraYaw);

      const rightX = Math.cos(cameraYaw);
      const rightZ = -Math.sin(cameraYaw);

      const dirX = fwdX * forward + rightX * turn;
      const dirZ = fwdZ * forward + rightZ * turn;
      const len = Math.sqrt(dirX * dirX + dirZ * dirZ);

      if (len > 0.001) {
        moveX = (dirX / len) * speed;
        moveZ = (dirZ / len) * speed;

        const targetAngle = Math.atan2(moveX, moveZ);
        this.movementAngle = targetAngle;

        let diff = targetAngle - this.rotation;
        while (diff < -Math.PI) diff += Math.PI * 2;
        while (diff > Math.PI) diff -= Math.PI * 2;
        this.rotation += diff * Math.min(1, dt * 16);
      }

      this.footstepTimer += dt * (sprint ? 1.6 : 1.0);
      if (this.footstepTimer > 0.36 && this.isGrounded) {
        this.audioManager.playFootstep();
        this.footstepTimer = 0;
      }
    }

    this.velocity.x += (moveX - this.velocity.x) * Math.min(1, dt * 22);
    this.velocity.z += (moveZ - this.velocity.z) * Math.min(1, dt * 22);

    if (jump && this.isGrounded) {
      this.velocity.y = this.jumpVelocity;
      this.isGrounded = false;
      this.audioManager.playJump();
    }

    if (!this.isGrounded) {
      this.velocity.y -= this.gravity * dt;
    }

    const newX = this.position.x + this.velocity.x * dt;
    const newY = this.position.y + this.velocity.y * dt;
    const newZ = this.position.z + this.velocity.z * dt;

    // Check hit by fast moving cars
    for (const veh of vehicles) {
      if (veh === this.currentVehicle) continue;
      const dist = this.position.distanceTo(veh.position);
      if (dist < 2.0 && Math.abs(veh.currentSpeed) > 3.0) {
        const carVel = new THREE.Vector3(
          Math.sin(veh.yaw) * veh.currentSpeed,
          0,
          Math.cos(veh.yaw) * veh.currentSpeed
        );
        this.hitByCar(carVel);
        break;
      }
    }

    // Resolve collision with buildings AND vehicles
    const surfaceHeight = this.physicsWorld.getSurfaceHeight ? this.physicsWorld.getSurfaceHeight(newX, newZ, this.position.y) : 0;
    const resolved = this.resolveCollisions(newX, newY, newZ, vehicles);
    this.position.x = resolved.x;
    this.position.z = resolved.z;

    if (resolved.y <= surfaceHeight) {
      this.position.y = surfaceHeight;
      this.velocity.y = 0;
      this.isGrounded = true;
    } else {
      this.position.y = resolved.y;
      if (resolved.grounded) {
        this.velocity.y = 0;
        this.isGrounded = true;
      }
    }

    this.group.position.copy(this.position);
    this.group.rotation.y = this.rotation;

    this.shadowMesh.position.set(this.position.x, surfaceHeight + 0.03, this.position.z);
    const shadowScale = Math.max(0.4, 1.0 - ((this.position.y - surfaceHeight) * 0.15));
    this.shadowMesh.scale.set(shadowScale, shadowScale, shadowScale);

    this.animateLimbs(dt, isMoving, sprint);
  }

  resolveCollisions(x, y, z, vehicles = []) {
    let finalX = x;
    let finalY = y;
    let finalZ = z;
    let grounded = false;

    const surfaceHeight = this.physicsWorld.getSurfaceHeight ? this.physicsWorld.getSurfaceHeight(x, z, y) : 0;
    if (finalY <= surfaceHeight) {
      finalY = surfaceHeight;
      grounded = true;
    }

    const obstacles = this.physicsWorld.obstacles || [];
    const r = this.radius;

    for (const b of obstacles) {
      const minY = b.y - b.hy;
      const maxY = b.y + b.hy;

      // 1. Standing on top of elevated plinths, stairs, terraces, balconies, and roofs!
      if (finalY >= maxY - 0.4 && finalY <= maxY + 0.8) {
        if (finalX >= b.x - b.hx - 0.1 && finalX <= b.x + b.hx + 0.1 &&
            finalZ >= b.z - b.hz - 0.1 && finalZ <= b.z + b.hz + 0.1) {
          finalY = Math.max(finalY, maxY);
          grounded = true;
          continue;
        }
      }

      // 2. Impenetrable solid wall collision (height overlap)
      // Skip if player is completely below (e.g. walking under flyover) or above obstacle
      if (finalY + 1.8 < minY || finalY > maxY + 0.5) {
        continue;
      }
        const isInsideX = (finalX >= b.x - b.hx) && (finalX <= b.x + b.hx);
        const isInsideZ = (finalZ >= b.z - b.hz) && (finalZ <= b.z + b.hz);

        if (isInsideX && isInsideZ) {
          // Player penetrated inside solid building: push out along shortest axis!
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
          // Player sphere touching outer wall boundary
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
              // Edge case exactly on boundary: push outwards from center
              const outDirX = finalX >= b.x ? 1 : -1;
            }
          }
        }
      }

    // Car physical collision
    for (const veh of vehicles) {
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

    return { x: finalX, y: finalY, z: finalZ, grounded };
  }

  animateLimbs(dt, isMoving, isSprinting) {
    if (isMoving && this.isGrounded) {
      const animSpeed = isSprinting ? 18 : 11;
      const t = performance.now() * 0.001 * animSpeed;
      const legAngle = Math.sin(t) * (isSprinting ? 0.95 : 0.6);
      const armAngle = -Math.sin(t) * (isSprinting ? 0.8 : 0.45);

      this.leftLeg.rotation.x = legAngle;
      this.rightLeg.rotation.x = -legAngle;
      this.leftArm.rotation.x = armAngle;
      this.rightArm.rotation.x = -armAngle;

      this.group.position.y = this.position.y + Math.abs(Math.sin(t * 2)) * 0.04;
    } else {
      const idleT = performance.now() * 0.002;
      this.leftLeg.rotation.x *= 0.8;
      this.rightLeg.rotation.x *= 0.8;
      this.leftArm.rotation.x = Math.sin(idleT) * 0.08;
      this.rightArm.rotation.x = -Math.sin(idleT) * 0.08;
      this.group.position.y = this.position.y;
    }
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
    this.audioManager.playDoor();
  }
}
