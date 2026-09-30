import * as THREE from 'three';

/**
 * RealisticVehicle
 * Implements grounded, momentum-based vehicle physics with:
 * - Reduced snappiness through input filtering and inertia
 * - Weighted acceleration/braking with realistic engine simulation
 * - Slower steering response for heavier feel
 * - Realistic weight transfer and suspension dynamics
 * - Authentic tire friction with saturation
 */
export class RealisticVehicle {
  constructor(scene, physicsWorld, audioManager, initialPos = new THREE.Vector3(0, 0, 0), color = 0xff4757, type = 'sedan') {
    this.scene = scene;
    this.physicsWorld = physicsWorld;
    this.audioManager = audioManager;
    this.color = color;
    this.type = type; // sedan, suv, sports, truck, auto, motorcycle, bus

    // Movement state
    this.position = new THREE.Vector3(initialPos.x, 0, initialPos.z);
    this.velocity = new THREE.Vector3(0, 0, 0);
    this.yaw = 0;
    this.pitch = 0;
    this.roll = 0;
    this.speed = 0; // m/s
    this.speedKmh = 0;

    // Vertical physics
    this.verticalVelocity = 0;
    this.isAirborne = false;
    this.gravity = 9.81; // m/s^2 (realistic gravity)

    // Vehicle-specific parameters based on type
    this.setupVehicleParameters();

    // Handling specs with reduced responsiveness
    this.steerAngle = 0;
    this.targetSteerAngle = 0;
    this.steerFilter = 0.2; // Steering input filtering for less snappy response

    // Suspension system
    this.suspensionCompression = 0; // 0 to 1
    this.targetSuspensionCompression = 0;
    this.suspensionVelocity = 0;
    this.wheelTravel = 0.15; // meters

    // Weight transfer
    this.weightTransferFront = 0; // -1 to 1 (negative = rear bias)
    this.weightTransferSide = 0;  // -1 to 1 (negative = left bias)

    // Input filtering for reduced snappiness
    this.throttleFilter = 0.15; // Throttle input filtering
    this.brakeFilter = 0.15;    // Brake input filtering
    this.filteredThrottle = 0;
    this.filteredBrake = 0;
    this.rawThrottle = 0;
    this.rawBrake = 0;

    // Engine simulation for more realistic acceleration
    this.engineRPM = 0;
    this.maxRPMSpeed = 6000; // RPM at max speed
    this.idleRPM = 800;
    this.engineInertia = 0.3; // How much engine resists RPM changes

    this.radius = this.params.radius;
    this.skidSystem = null;

    // Visual interpolation for smooth rendering
    this.lastPosition = this.position.clone();
    this.lastYaw = this.yaw;
    this.lastPitch = this.pitch;
    this.lastRoll = this.roll;

    this.initMesh();
  }

  setupVehicleParameters() {
    // Base parameters that vary by vehicle type - adjusted for more realistic, weighted feel
    const baseParams = {
      sedan: {
        mass: 1600, // Increased mass for more inertia
        wheelbase: 2.7,
        trackWidth: 1.5,
        height: 1.4,
        maxSpeed: 20, // m/s (~72 km/h) - slightly reduced
        acceleration: 4.0, // m/s^2 (reduced from 6.0 for less snappy acceleration)
        braking: 7.0, // m/s^2 (reduced from 10.0)
        corneringStiffness: 5.0, // Reduced for less grip, more realistic sliding
        tireGrip: 0.85, // Slightly reduced grip
        centerOfMassHeight: 0.55, // Slightly higher for more body roll
        engineResponse: 0.4 // Engine responsiveness (lower = more laggy)
      },
      suv: {
        mass: 2100, // Increased mass
        wheelbase: 2.8,
        trackWidth: 1.6,
        height: 1.7,
        maxSpeed: 18, // m/s (~65 km/h)
        acceleration: 3.5,
        braking: 6.5,
        corneringStiffness: 4.0,
        tireGrip: 0.8,
        centerOfMassHeight: 0.7,
        engineResponse: 0.35
      },
      sports: {
        mass: 1300, // Slightly increased for stability
        wheelbase: 2.4,
        trackWidth: 1.55,
        height: 1.2,
        maxSpeed: 25, // m/s (~90 km/h) - still fast but more controlled
        acceleration: 5.0, // Still quick but less snappy than before
        braking: 9.0,
        corneringStiffness: 8.0, // Still grippy but less than before
        tireGrip: 0.9,
        centerOfMassHeight: 0.45,
        engineResponse: 0.5
      },
      truck: {
        mass: 2800, // Much more mass for heavy feel
        wheelbase: 3.2,
        trackWidth: 1.8,
        height: 1.8,
        maxSpeed: 16, // m/s (~58 km/h)
        acceleration: 3.0,
        braking: 6.0,
        corneringStiffness: 3.5, // Low grip for truck-like handling
        tireGrip: 0.75,
        centerOfMassHeight: 0.75,
        engineResponse: 0.3
      },
      auto: {
        mass: 350, // Slightly increased
        wheelbase: 1.8,
        trackWidth: 1.2,
        height: 1.6,
        maxSpeed: 10, // m/s (~36 km/h) - realistic for auto-rickshaw
        acceleration: 2.0,
        braking: 4.0,
        corneringStiffness: 3.0,
        tireGrip: 0.7,
        centerOfMassHeight: 0.8,
        engineResponse: 0.25
      },
      motorcycle: {
        mass: 220, // Slightly increased
        wheelbase: 1.4,
        trackWidth: 0.6,
        height: 1.1,
        maxSpeed: 22, // m/s (~79 km/h)
        acceleration: 5.0,
        braking: 8.0,
        corneringStiffness: 10.0, // High grip but with lean
        tireGrip: 0.95,
        centerOfMassHeight: 0.5,
        engineResponse: 0.45
      },
      bus: {
        mass: 13000, // Much more mass
        wheelbase: 6.0,
        trackWidth: 2.2,
        height: 3.2,
        maxSpeed: 12, // m/s (~43 km/h)
        acceleration: 1.8,
        braking: 4.0,
        corneringStiffness: 2.0, // Very low grip for bus-like handling
        tireGrip: 0.7,
        centerOfMassHeight: 1.6,
        engineResponse: 0.2
      }
    };

    this.params = baseParams[this.type] || baseParams.sedan;

    // Derived parameters
    this.maxForce = this.params.acceleration * this.params.mass;
    this.maxBrakeForce = this.params.braking * this.params.mass;
  }

  setSkidSystem(skidSystem) {
    this.skidSystem = skidSystem;
  }

  initMesh() {
    this.mesh = new THREE.Group();
    this.mesh.position.copy(this.position);

    // Create vehicle mesh based on type
    this.createVehicleMesh();

    // Ground shadow
    const shadowGeo = new THREE.PlaneGeometry(this.params.trackWidth * 1.2, this.params.wheelbase * 1.2);
    const shadowMat = new THREE.MeshBasicMaterial({
      color: 0x1e272e,
      transparent: true,
      opacity: 0.35,
      depthWrite: false
    });
    this.shadow = new THREE.Mesh(shadowGeo, shadowMat);
    this.shadow.rotation.x = -Math.PI / 2;
    this.shadow.position.y = 0.03;
    this.scene.add(this.shadow);

    this.mesh.userData = { vehicle: this };
    this.scene.add(this.mesh);
  }

  createVehicleMesh() {
    // Simplified vehicle mesh creation - in reality, you'd have detailed models
    // This creates a basic box representation that can be replaced with actual models

    const length = this.params.wheelbase * 0.9;
    const width = this.params.trackWidth * 0.8;
    const height = this.params.height * 0.7;

    // Main body
    const bodyGeo = new THREE.BoxGeometry(length, height, width);
    const bodyMat = new THREE.MeshStandardMaterial({
      color: this.color,
      metalness: this.type === 'sports' ? 0.6 : 0.3,
      roughness: this.type === 'sports' ? 0.2 : 0.7
    });
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    body.position.y = height / 2;
    body.castShadow = true;
    body.receiveShadow = true;
    this.mesh.add(body);

    // Wheels (simplified)
    const wheelRadius = this.params.radius;
    const wheelWidth = 0.3;
    const wheelGeo = new THREE.CylinderGeometry(wheelRadius, wheelRadius, wheelWidth, 12);
    wheelGeo.rotateZ(Math.PI / 2);
    const wheelMat = new THREE.MeshStandardMaterial({
      color: 0x1e2022,
      roughness: 0.9
    });

    // Front wheels
    const frontLeftWheel = this.createWheel(wheelGeo, wheelMat);
    frontLeftWheel.position.set(
      -width / 2 + wheelWidth / 2,
      wheelRadius / 2,
      length / 2 - wheelWidth / 2
    );
    this.mesh.add(frontLeftWheel);
    this.frontLeftWheel = frontLeftWheel;

    const frontRightWheel = this.createWheel(wheelGeo, wheelMat);
    frontRightWheel.position.set(
      width / 2 - wheelWidth / 2,
      wheelRadius / 2,
      length / 2 - wheelWidth / 2
    );
    frontRightWheel.rotation.y = Math.PI;
    this.mesh.add(frontRightWheel);
    this.frontRightWheel = frontRightWheel;

    // Rear wheels
    const rearLeftWheel = this.createWheel(wheelGeo, wheelMat);
    rearLeftWheel.position.set(
      -width / 2 + wheelWidth / 2,
      wheelRadius / 2,
      -length / 2 + wheelWidth / 2
    );
    this.mesh.add(rearLeftWheel);
    this.rearLeftWheel = rearLeftWheel;

    const rearRightWheel = this.createWheel(wheelGeo, wheelMat);
    rearRightWheel.position.set(
      width / 2 - wheelWidth / 2,
      wheelRadius / 2,
      -length / 2 + wheelWidth / 2
    );
    rearRightWheel.rotation.y = Math.PI;
    this.mesh.add(rearRightWheel);
    this.rearRightWheel = rearRightWheel;
  }

  createWheel(geometry, material) {
    const wheel = new THREE.Mesh(geometry, material);
    wheel.castShadow = true;
    wheel.receiveShadow = true;
    return wheel;
  }

  filterInput(rawValue, filterAmount, previousFiltered) {
    // Simple low-pass filter for reducing input snappiness
    return previousFiltered + (rawValue - previousFiltered) * filterAmount;
  }

  updateEngineRPMSpeed(dt) {
    // Simulate engine RPM with inertia
    const targetRPM = (this.speed / this.params.maxSpeed) * this.maxRPMSpeed;
    const rpmDiff = targetRPM - this.engineRPM;

    // Engine resists changes in RPM (inertia)
    const rpmChange = rpmDiff * (1 - this.engineInertia) * dt * 5;
    this.engineRPM += rpmChange;

    // Clamp RPM
    this.engineRPM = Math.max(this.idleRPM, Math.min(this.engineRPM, this.maxRPMSpeed));
  }

  updatePhysics(dt, input) {
    // Read raw inputs
    const rawThrottle = Math.max(0, input.getForward()); // 0 to 1
    const rawBrake = Math.max(0, -input.getForward()); // 0 to 1 (when pulling back)
    const rawSteer = -input.getTurn(); // -1 to 1 (left to right)
    const handbrake = input.isJumping() ? 1 : 0;

    // Apply input filtering for reduced snappiness
    this.filteredThrottle = this.filterInput(rawThrottle, this.throttleFilter, this.filteredThrottle);
    this.filteredBrake = this.filterInput(rawBrake, this.brakeFilter, this.filteredBrake);
    this.filteredSteer = this.filterInput(rawSteer, this.steerFilter, this.filteredSteer || 0);

    // Engine simulation
    this.updateEngineRPMSpeed(dt);

    // Engine force based on RPM and throttle
    const engineEfficiency = (this.engineRPM - this.idleRPM) / (this.maxRPMSpeed - this.idleRPM);
    const engineForce = this.filteredThrottle * engineEfficiency * this.maxForce;

    // Braking force
    const brakingForce = this.filteredBrake * this.maxBrakeForce + handbrake * this.maxBrakeForce * 0.4;

    // Calculate aerodynamic drag (proportional to speed^2)
    const dragCoefficient = 0.3;
    const frontalArea = this.params.height * this.params.trackWidth;
    const dragForce = 0.5 * dragCoefficient * frontalArea * Math.pow(this.speed, 2) * Math.sign(this.speed);
    const dragForceMagnitude = Math.min(Math.abs(dragForce), 600); // Cap drag force

    // Rolling resistance
    const rollingResistance = 0.015 * this.params.mass * 9.81 * Math.sign(this.speed);

    // Calculate net longitudinal force
    let netForce = engineForce - brakingForce - Math.sign(this.speed) * (Math.abs(dragForceMagnitude) + rollingResistance);

    // Reduce net force at low speeds to simulate traction limitations
    if (Math.abs(this.speed) < 1.0) {
      const tractionFactor = Math.min(Math.abs(this.speed) / 1.0, 1.0);
      netForce *= 0.3 + 0.7 * tractionFactor; // 30-100% force based on speed
    }

    // Calculate acceleration
    const acceleration = netForce / this.params.mass;

    // Integrate velocity
    this.speed += acceleration * dt;

    // Clamp speed
    this.speed = Math.max(-this.params.maxSpeed * 0.3, Math.min(this.params.maxSpeed, this.speed));

    // Update speed in km/h for display
    this.speedKmh = this.speed * 3.6;

    // Steering with rate limiting and reduced responsiveness
    const maxSteerAngle = this.params.maxSteerAngle || 0.45; // Slightly reduced
    this.targetSteerAngle = THREE.MathUtils.clamp(this.filteredSteer, -maxSteerAngle, maxSteerAngle);
    const steerRate = 2.0; // Reduced from 3.0 for slower steering response
    this.steerAngle += THREE.MathUtils.clamp(
      this.targetSteerAngle - this.steerAngle,
      -steerRate * dt,
      steerRate * dt
    );

    // Calculate lateral force from tires with saturation (more realistic)
    let slipAngle = 0;
    if (Math.abs(this.speed) > 0.5) {
      slipAngle = this.steerAngle - Math.atan2(
        this.velocity.y,
        Math.abs(this.speed)
      );
    }

    // Pacejka-inspired tire model with saturation
    const gripFactor = this.params.tireGrip;
    const stiffness = this.params.corneringStiffness;
    const lateralForce = stiffness * slipAngle * gripFactor * this.params.mass * 9.81;

    // Saturation: lateral force peaks and then decreases
    const slipAngleAbs = Math.abs(slipAngle);
    const saturationFactor = 1.0 / (1.0 + 0.3 * slipAngleAbs * slipAngleAbs); // Simple saturation
    const lateralForceSat = lateralForce * saturationFactor;

    // Apply direction
    const finalLateralForce = Math.sign(slipAngle) * Math.abs(lateralForceSat);

    // Calculate weight transfer
    // Longitudinal weight transfer (acceleration/braking)
    const longitudinalTransfer = (engineForce - brakingForce) * this.params.centerOfMassHeight /
      (this.params.wheelbase * this.params.mass * 9.81);
    this.weightTransferFront = THREE.MathUtils.clamp(longitudinalTransfer, -0.4, 0.4); // Slightly reduced range

    // Lateral weight transfer (cornering)
    const lateralAcceleration = finalLateralForce / this.params.mass;
    const lateralTransfer = lateralAcceleration * this.params.centerOfMassHeight /
      (this.params.trackWidth * 9.81);
    this.weightTransferSide = THREE.MathUtils.clamp(lateralTransfer, -0.4, 0.4); // Slightly reduced range

    // Suspension dynamics
    const baseCompression = 0.25; // Base suspension compression
    const loadCompression = Math.abs(this.weightTransferFront) * 0.3 + Math.abs(this.weightTransferSide) * 0.2;
    this.targetSuspensionCompression = THREE.MathUtils.clamp(baseCompression + loadCompression, 0, 1);
    const suspensionSpringRate = 15.0; // Softer suspension
    const suspensionDamping = 4.0;
    const suspensionForce = (this.targetSuspensionCompression - this.suspensionCompression) * suspensionSpringRate -
      this.suspensionVelocity * suspensionDamping;
    const suspensionAcceleration = suspensionForce / (this.params.mass / 4); // Per wheel
    this.suspensionVelocity += suspensionAcceleration * dt;
    this.suspensionCompression += this.suspensionVelocity * dt;
    this.suspensionCompression = THREE.MathUtils.clamp(this.suspensionCompression, 0, 1);

    // Apply forces to velocity (simplified but more realistic)
    // In a full implementation, you'd integrate forces properly
    const forwardX = Math.sin(this.yaw);
    const forwardZ = Math.cos(this.yaw);
    this.velocity.x = forwardX * this.speed;
    this.velocity.z = forwardZ * this.speed;

    // Apply lateral velocity from slipping (more realistic)
    const slipVelocity = finalLateralForce * dt / this.params.mass * 0.15; // Increased slip effect
    const rightX = Math.cos(this.yaw);
    const rightZ = -Math.sin(this.yaw);
    this.velocity.x += rightX * slipVelocity;
    this.velocity.z += rightZ * slipVelocity;

    // Update position
    const newX = this.position.x + this.velocity.x * dt;
    const newZ = this.position.z + this.velocity.z * dt;

    // Ground checking and collision
    let finalX = newX;
    let finalZ = newZ;
    let grounded = true;

    // Check surface height
    const surfaceHeight = this.physicsWorld.getSurfaceHeight
      ? this.physicsWorld.getSurfaceHeight(finalX, finalZ, this.position.y)
      : 0;

    // Simple ground clamping
    if (this.position.y < surfaceHeight + 0.1) {
      this.position.y = surfaceHeight;
      this.verticalVelocity = 0;
      this.isAirborne = false;
    } else {
      // Apply gravity
      this.verticalVelocity -= this.gravity * dt;
      this.position.y += this.verticalVelocity * dt;

      // Check if we've landed
      if (this.position.y < surfaceHeight + 0.1) {
        this.position.y = surfaceHeight;
        this.verticalVelocity = 0;
        this.isAirborne = false;
        this.verticalVelocity = 0;
      } else {
        this.isAirborne = true;
      }
    }

    this.position.x = finalX;
    this.position.z = finalZ;

    // Update yaw from steering (only when moving with speed threshold)
    if (Math.abs(this.speed) > 0.3) {
      // Bicycle model yaw rate with speed sensitivity
      const yawRate = (this.speed * Math.tan(this.steerAngle)) / this.params.wheelbase;
      this.yaw += yawRate * dt;
    }

    // Handle obstacle collisions (simplified)
    this.handleObstacleCollisions();

    // Update skid system if drifting (with better detection)
    if (this.skidSystem && Math.abs(this.speed) > 1.5) {
      const isDrifting = Math.abs(slipAngle) > 0.25 && Math.abs(this.speed) > 3.0;
      const isHardBraking = this.filteredBrake > 0.6 && Math.abs(this.speed) > 2.0;
      if (isDrifting || isHardBraking || handbrake > 0.5) {
        // Add skid marks for rear wheels
        const rearLeftPos = new THREE.Vector3(
          -this.params.trackWidth / 2 + 0.2,
          0.05,
          -this.params.wheelbase / 2 + 0.2
        ).applyAxisAngle(new THREE.Vector3(0, 1, 0), this.yaw).add(this.position);
        const rearRightPos = new THREE.Vector3(
          this.params.trackWidth / 2 - 0.2,
          0.05,
          -this.params.wheelbase / 2 + 0.2
        ).applyAxisAngle(new THREE.Vector3(0, 1, 0), this.yaw).add(this.position);
        this.skidSystem.addSkid(rearLeftPos, rearRightPos, 0.6);
      }
    }
  }

  handleObstacleCollisions() {
    // Simplified obstacle collision - in reality this would be more sophisticated
    const obstacles = this.physicsWorld.obstacles || [];
    const safetyRadius = this.params.trackWidth * 0.35; // Slightly reduced

    for (const obs of obstacles) {
      if (obs.isRamp) continue;

      // Simple distance check
      const dx = this.position.x - obs.x;
      const dz = this.position.z - obs.z;
      const distance = Math.sqrt(dx * dx + dz * dz);

      if (distance < obs.hx + safetyRadius && Math.abs(this.position.y - obs.y) < obs.hy + 0.5) {
        // Collision detected - resolve by pushing away
        const angle = Math.atan2(dz, dx);
        const pushDistance = obs.hx + safetyRadius - distance + 0.1;
        this.position.x += Math.cos(angle) * pushDistance;
        this.position.z += Math.sin(angle) * pushDistance;
        // Reduce speed on impact (more realistic)
        this.speed *= 0.5;
      }
    }
  }

  updateVisuals(dt) {
    // Smooth visual interpolation with slight lag for weighted feel
    this.lastPosition.lerp(this.position, 0.15); // More lag
    this.lastYaw = THREE.MathUtils.lerpAngle(this.lastYaw, this.yaw, 0.15);
    this.lastPitch = THREE.MathUtils.lerp(this.lastPitch, this.pitch, 0.15);
    this.lastRoll = THREE.MathUtils.lerp(this.lastRoll, this.roll, 0.15);

    // Apply suspension compression to mesh
    const suspensionOffset = -this.wheelTravel * this.suspensionCompression;
    this.mesh.position.copy(this.lastPosition);
    this.mesh.position.y += suspensionOffset;

    // Apply rotation
    this.mesh.rotation.set(this.lastPitch, this.lastYaw, this.lastRoll);

    // Update wheel rotations
    const wheelRotation = (this.speed * dt) / (this.params.radius * 2);
    if (this.frontLeftWheel) {
      this.frontLeftWheel.rotation.x += wheelRotation;
      this.frontRightWheel.rotation.x -= wheelRotation;
      this.rearLeftWheel.rotation.x += wheelRotation;
      this.rearRightWheel.rotation.x -= wheelRotation;

      // Steering angle for front wheels
      this.frontLeftWheel.rotation.y = this.steerAngle;
      this.frontRightWheel.rotation.y = Math.PI + this.steerAngle;
    }

    // Update shadow
    this.shadow.position.set(this.position.x, this.position.y + 0.03, this.position.z);
    const shadowScale = Math.max(0.3, 1.0 - (this.position.y * 0.06)); // More shadow compression
    this.shadow.scale.set(shadowScale, shadowScale, shadowScale);
  }

  update(dt, input) {
    this.updatePhysics(dt, input);
    this.updateVisuals(dt);
  }

  setHeadlights(on) {
    // Would implement actual headlight meshes
    this.headlightsOn = on;
  }

  getExitPosition() {
    const exitOffset = new THREE.Vector3(-2.5, 0, 0).applyAxisAngle(new THREE.Vector3(0, 1, 0), this.yaw);
    return new THREE.Vector3(
      this.position.x + exitOffset.x,
      this.position.y,
      this.position.z + exitOffset.z
    );
  }
}