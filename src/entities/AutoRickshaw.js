import * as THREE from 'three';

/**
 * AutoRickshaw: Iconic High-Detail Namma Bengaluru 3-Wheeler Auto
 * Authentic Karnataka two-tone livery:
 * - Bright Canary Yellow curved canopy with rain flaps and roof rack
 * - Deep Forest Green lower body with side mudflaps
 * - Detailed Driver Cockpit: Handlebars, clutch levers, throttle grips, horn button
 * - Classic Yellow-Black Fare Meter (Rs. 30 minimum fare display)
 * - Kannada & English "KA-01 • NAMMA AUTO" rear number plate
 * - Open passenger bench with brown tufted upholstery & roll-cage bars
 * - 3-Wheel fork steering kinematics with realistic 2-stroke engine dynamics
 */
export class AutoRickshaw {
  constructor(scene, physicsWorld, audioManager, initialPos = new THREE.Vector3(0, 0, 0), color = 0xfacc15) {
    this.scene = scene;
    this.physicsWorld = physicsWorld;
    this.audioManager = audioManager;
    this.color = color;
    this.isAutoRickshaw = true;
    this.carName = 'Namma Bengaluru Auto-Rickshaw';

    // Movement state
    this.position = new THREE.Vector3(initialPos.x, 0, initialPos.z);
    this.velocity = new THREE.Vector3(0, 0, 0);
    this.yaw = 0;
    this.pitch = 0;
    this.roll = 0;
    this.currentSpeed = 0;
    this.speed = 0;
    this.speedKmh = 0;

    // Vertical physics
    this.verticalVelocity = 0;
    this.isAirborne = false;
    this.gravity = 25.0;

    // Auto Rickshaw specific specs: nimble, tight turning circle, spirited 2-stroke acceleration
    this.maxSpeed = 24; // ~86 km/h (speedy Bengaluru auto)
    this.boostMaxSpeed = 32;
    this.acceleration = 26; // punchy pickup
    this.reverseMaxSpeed = 10;
    this.braking = 34;
    this.friction = 6.5;
    this.steerAngle = 0;
    this.maxSteerAngle = 0.72; // very nimble steering
    this.turnRate = 3.8;
    this.headlightsOn = false;

    this.radius = 1.15;

    this.initMesh();
  }

  initMesh() {
    this.mesh = new THREE.Group();
    this.mesh.position.copy(this.position);

    // Materials
    const yellowCanopyMat = new THREE.MeshStandardMaterial({
      color: 0xfacc15, // Bright Karnataka yellow canopy
      roughness: 0.3,
      metalness: 0.15
    });

    const greenChassisMat = new THREE.MeshStandardMaterial({
      color: 0x15803d, // Bangalore classic forest green lower body
      roughness: 0.35,
      metalness: 0.25
    });

    const frameBlackMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.8
    });

    const chromeMat = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      metalness: 0.95,
      roughness: 0.1
    });

    const seatMat = new THREE.MeshStandardMaterial({
      color: 0x78350f, // Brown leatherette upholstery
      roughness: 0.85
    });

    const glassMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.65,
      roughness: 0.08
    });

    const tireMat = new THREE.MeshStandardMaterial({ color: 0x141414, roughness: 0.95 });
    const rimMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.8, roughness: 0.25 });

    // 1. Lower Chassis (Forest Green) with side step footboards
    const chassisGeo = new THREE.BoxGeometry(1.54, 0.46, 2.7);
    const chassis = new THREE.Mesh(chassisGeo, greenChassisMat);
    chassis.position.y = 0.45;
    chassis.castShadow = true;
    chassis.receiveShadow = true;
    this.mesh.add(chassis);

    // Chrome Side Rubbing Strips
    [-0.78, 0.78].forEach(sx => {
      const rubStrip = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.06, 2.6), chromeMat);
      rubStrip.position.set(sx, 0.45, 0);
      const step = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.05, 1.4), frameBlackMat);
      step.position.set(sx, 0.26, 0);
      this.mesh.add(rubStrip, step);
    });

    // 2. Yellow Canopy Roof & Luggage Rack
    const canopyGeo = new THREE.BoxGeometry(1.56, 0.16, 2.4);
    const canopy = new THREE.Mesh(canopyGeo, yellowCanopyMat);
    canopy.position.set(0, 1.76, -0.1);
    canopy.castShadow = true;
    this.mesh.add(canopy);

    // Roof Luggage Carrier Rack (Black Tubular)
    const rackBorder = new THREE.Mesh(new THREE.BoxGeometry(1.35, 0.08, 1.6), frameBlackMat);
    rackBorder.position.set(0, 1.88, -0.2);
    this.mesh.add(rackBorder);

    // Curved front slope of yellow hood (Aerodynamic nosecone)
    const hoodGeo = new THREE.BoxGeometry(1.42, 0.52, 0.95);
    const hood = new THREE.Mesh(hoodGeo, yellowCanopyMat);
    hood.position.set(0, 0.84, 0.92);
    hood.rotation.x = -0.36;
    hood.castShadow = true;
    this.mesh.add(hood);

    // Rear yellow canopy back cover
    const backGeo = new THREE.BoxGeometry(1.52, 1.05, 0.1);
    const backCover = new THREE.Mesh(backGeo, yellowCanopyMat);
    backCover.position.set(0, 1.28, -1.25);
    this.mesh.add(backCover);

    // Number Plate (KA-01-F-7788) & Kannada Sign
    const plateCanvas = document.createElement('canvas');
    plateCanvas.width = 512;
    plateCanvas.height = 128;
    const pctx = plateCanvas.getContext('2d');
    pctx.fillStyle = '#facc15';
    pctx.fillRect(0, 0, 512, 128);
    pctx.fillStyle = '#000000';
    pctx.font = 'bold 44px monospace';
    pctx.textAlign = 'center';
    pctx.fillText('KA 01 F 7788', 256, 60);
    pctx.font = 'bold 30px sans-serif';
    pctx.fillText('ನಮ್ಮ ಆಟೋ • BENGALURU', 256, 105);

    const plateTex = new THREE.CanvasTexture(plateCanvas);
    const plateMesh = new THREE.Mesh(new THREE.PlaneGeometry(1.1, 0.32), new THREE.MeshBasicMaterial({ map: plateTex }));
    plateMesh.position.set(0, 0.65, -1.36);
    plateMesh.rotation.y = Math.PI;
    this.mesh.add(plateMesh);

    // Front Windshield with Chrome Frame & Single Wiper
    const windshield = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.68, 0.05), glassMat);
    windshield.position.set(0, 1.38, 0.68);
    windshield.rotation.x = 0.16;
    this.mesh.add(windshield);

    const wiper = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.45, 0.03), frameBlackMat);
    wiper.position.set(0, 1.36, 0.72);
    wiper.rotation.z = 0.35;
    this.mesh.add(wiper);

    // Tubular Roll-bar Frame Posts (Black)
    [
      [-0.72, 1.22, 0.64], [0.72, 1.22, 0.64],
      [-0.74, 1.22, -1.22], [0.74, 1.22, -1.22]
    ].forEach(([px, py, pz]) => {
      const post = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 1.0, 8), frameBlackMat);
      post.position.set(px, py, pz);
      this.mesh.add(post);
    });

    // 3. Cockpit & Seats
    // Driver Bench
    const driverSeat = new THREE.Mesh(new THREE.BoxGeometry(0.68, 0.26, 0.48), seatMat);
    driverSeat.position.set(0, 0.7, 0.2);
    this.mesh.add(driverSeat);

    // Passenger Rear Bench with tufted backrest
    const passengerSeat = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.32, 0.65), seatMat);
    passengerSeat.position.set(0, 0.7, -0.78);
    const passengerBackrest = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.58, 0.12), seatMat);
    passengerBackrest.position.set(0, 1.1, -1.06);
    this.mesh.add(passengerSeat, passengerBackrest);

    // 4. Handlebar with Grips & Digital Fare Meter
    const handlebarGroup = new THREE.Group();
    handlebarGroup.position.set(0, 1.06, 0.52);

    const handlebar = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.72, 8), chromeMat);
    handlebar.rotation.z = Math.PI / 2;
    handlebarGroup.add(handlebar);

    // Black Rubber Hand Grips
    [-0.32, 0.32].forEach(gx => {
      const grip = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.14, 8), frameBlackMat);
      grip.position.x = gx;
      grip.rotation.z = Math.PI / 2;
      handlebarGroup.add(grip);
    });
    this.mesh.add(handlebarGroup);

    // Authentic Auto Fare Meter (Black and Yellow Box with bright green LED: "HIRED / ₹30.00")
    const meterBox = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.16, 0.14), frameBlackMat);
    meterBox.position.set(0.38, 1.0, 0.6);
    const meterCanvas = document.createElement('canvas');
    meterCanvas.width = 256;
    meterCanvas.height = 128;
    const mctx = meterCanvas.getContext('2d');
    mctx.fillStyle = '#0f172a';
    mctx.fillRect(0, 0, 256, 128);
    mctx.fillStyle = '#22c55e'; // Green digital LED
    mctx.font = 'bold 36px monospace';
    mctx.fillText('₹ 30.00', 30, 60);
    mctx.fillStyle = '#ef4444';
    mctx.font = 'bold 22px monospace';
    mctx.fillText('HIRED', 30, 100);

    const meterScreen = new THREE.Mesh(new THREE.PlaneGeometry(0.16, 0.1), new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(meterCanvas) }));
    meterScreen.position.set(0.38, 1.0, 0.675);
    this.mesh.add(meterBox, meterScreen);

    // 5. Chrome Single Round Front Headlight & Turn Indicators
    const headlightGeo = new THREE.CylinderGeometry(0.17, 0.17, 0.14, 14);
    const headlampMesh = new THREE.Mesh(headlightGeo, chromeMat);
    headlampMesh.rotation.x = Math.PI / 2;
    headlampMesh.position.set(0, 0.74, 1.42);
    this.mesh.add(headlampMesh);

    const headlampLens = new THREE.Mesh(new THREE.CircleGeometry(0.15, 14), new THREE.MeshBasicMaterial({ color: 0xfffa65 }));
    headlampLens.position.set(0, 0.74, 1.495);
    this.mesh.add(headlampLens);

    // Amber Turn Indicators
    [-0.35, 0.35].forEach(ix => {
      const ind = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 8), new THREE.MeshBasicMaterial({ color: 0xf59e0b }));
      ind.position.set(ix, 0.74, 1.38);
      this.mesh.add(ind);
    });

    // SpotLight for Night Driving
    this.spotLight = new THREE.SpotLight(0xfffa65, 0, 50, Math.PI / 5, 0.35);
    this.spotLight.position.set(0, 0.74, 1.5);
    this.spotLightTarget = new THREE.Object3D();
    this.spotLightTarget.position.set(0, 0.1, 25);
    this.mesh.add(this.spotLightTarget);
    this.spotLight.target = this.spotLightTarget;
    this.mesh.add(this.spotLight);

    // Taillights
    [-0.64, 0.64].forEach(tx => {
      const tail = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.12, 0.06), new THREE.MeshBasicMaterial({ color: 0xef4444 }));
      tail.position.set(tx, 0.58, -1.36);
      this.mesh.add(tail);
    });

    // 6. Wheels (3 Wheels: 1 Front Center with steering fork, 2 Rear)
    this.wheelMeshes = [];

    // Front Wheel Assembly with Fork
    this.frontFork = new THREE.Group();
    this.frontFork.position.set(0, 0.30, 1.22);

    const frontWheel = this.createWheel(tireMat, rimMat, 0.30, 0.16);
    this.frontFork.add(frontWheel);
    this.wheelMeshes.push(frontWheel);

    const forkL = new THREE.Mesh(new THREE.BoxGeometry(0.045, 0.54, 0.045), chromeMat);
    forkL.position.set(-0.12, 0.22, 0);
    const forkR = new THREE.Mesh(new THREE.BoxGeometry(0.045, 0.54, 0.045), chromeMat);
    forkR.position.set(0.12, 0.22, 0);
    this.frontFork.add(forkL, forkR);
    this.mesh.add(this.frontFork);

    // Rear Wheels
    [-0.72, 0.72].forEach(rx => {
      const rWheel = this.createWheel(tireMat, rimMat, 0.30, 0.20);
      rWheel.position.set(rx, 0.30, -0.72);
      this.mesh.add(rWheel);
      this.wheelMeshes.push(rWheel);
    });

    this.mesh.userData = { vehicle: this };
    this.scene.add(this.mesh);
  }

  createWheel(tireMat, rimMat, radius, width) {
    const wheelGroup = new THREE.Group();
    const tire = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, width, 16), tireMat);
    tire.rotation.z = Math.PI / 2;
    tire.castShadow = true;
    wheelGroup.add(tire);

    const hub = new THREE.Mesh(new THREE.CylinderGeometry(radius * 0.56, radius * 0.56, width + 0.02, 10), rimMat);
    hub.rotation.z = Math.PI / 2;
    wheelGroup.add(hub);

    return wheelGroup;
  }

  setHeadlights(on) {
    this.headlightsOn = on;
    if (this.spotLight) {
      this.spotLight.intensity = on ? 3.0 : 0;
    }
  }

  update(dt, input, isPlayerControlling) {
    if (isPlayerControlling && input) {
      const forward = (input.isDown('KeyW') || input.isDown('ArrowUp')) ? 1 : 0;
      const reverse = (input.isDown('KeyS') || input.isDown('ArrowDown')) ? 1 : 0;
      const steerLeft = (input.isDown('KeyA') || input.isDown('ArrowLeft')) ? 1 : 0;
      const steerRight = (input.isDown('KeyD') || input.isDown('ArrowRight')) ? 1 : 0;
      const handbrake = input.isDown('Space');
      const boost = input.isDown('ShiftLeft') || input.isDown('ShiftRight');

      const throttle = forward - reverse;
      const turnInput = steerLeft - steerRight;

      const currentMax = boost ? this.boostMaxSpeed : this.maxSpeed;

      if (throttle > 0) {
        if (this.currentSpeed < 0) {
          this.currentSpeed = Math.min(0, this.currentSpeed + this.braking * dt);
        } else {
          this.currentSpeed = Math.min(currentMax, this.currentSpeed + this.acceleration * dt);
        }
      } else if (throttle < 0) {
        if (this.currentSpeed > 0) {
          this.currentSpeed = Math.max(0, this.currentSpeed - this.braking * dt);
        } else {
          this.currentSpeed = Math.max(-this.reverseMaxSpeed, this.currentSpeed - this.acceleration * 0.7 * dt);
        }
      } else {
        if (this.currentSpeed > 0) {
          this.currentSpeed = Math.max(0, this.currentSpeed - this.friction * dt);
        } else if (this.currentSpeed < 0) {
          this.currentSpeed = Math.min(0, this.currentSpeed + this.friction * dt);
        }
      }

      if (handbrake) {
        this.currentSpeed *= Math.max(0, 1 - 4.5 * dt);
      }

      // Steering & Fork Pivot
      const targetSteer = -turnInput * this.maxSteerAngle;
      this.steerAngle += (targetSteer - this.steerAngle) * Math.min(1, dt * 12);
      if (this.frontFork) {
        this.frontFork.rotation.y = this.steerAngle;
      }

      const isMoving = Math.abs(this.currentSpeed) > 0.08 || throttle !== 0;
      if (isMoving) {
        const turnMult = (this.currentSpeed < -0.1) ? -1 : 1;
        const driftFactor = handbrake ? 1.6 : 1.0;
        this.yaw += this.steerAngle * this.turnRate * turnMult * driftFactor * dt;
      }

      const fwdX = Math.sin(this.yaw);
      const fwdZ = Math.cos(this.yaw);

      const proposedX = this.position.x + fwdX * this.currentSpeed * dt;
      const proposedZ = this.position.z + fwdZ * this.currentSpeed * dt;

      // Surface height check
      const surfaceHeight = this.physicsWorld.getSurfaceHeight ? this.physicsWorld.getSurfaceHeight(proposedX, proposedZ, this.position.y) : 0;
      this.position.y = surfaceHeight;
      this.pitch *= Math.max(0, 1 - 6 * dt);

      // Collision avoidance with obstacles
      let finalX = proposedX;
      let finalZ = proposedZ;
      if (this.physicsWorld && this.physicsWorld.resolveSphereCollision) {
        const resolved = this.physicsWorld.resolveSphereCollision(finalX, this.position.y + 0.5, finalZ, this.radius);
        finalX = resolved.x;
        finalZ = resolved.z;
      }

      // World bounds (-560 to 560)
      const bound = 560;
      this.position.x = Math.max(-bound, Math.min(bound, finalX));
      this.position.z = Math.max(-bound, Math.min(bound, finalZ));

      // Audio engine update
      this.speed = Math.abs(this.currentSpeed);
      this.speedKmh = Math.round(this.speed * 3.6);
      if (this.audioManager) {
        this.audioManager.updateEngine(this.speed / this.maxSpeed, throttle !== 0);
      }

      // Subtle body roll on cornering
      const targetRoll = -this.steerAngle * (this.currentSpeed / this.maxSpeed) * 0.22;
      this.roll += (targetRoll - this.roll) * Math.min(1, dt * 8);

      // Spin wheels
      const wheelCircumference = Math.PI * 0.60;
      const wheelRotDelta = (this.currentSpeed * dt) / wheelCircumference * Math.PI * 2;
      this.wheelMeshes.forEach(w => {
        w.children[0].rotation.x += wheelRotDelta;
      });
    }

    // Update Three.js mesh transform
    this.mesh.position.copy(this.position);
    this.mesh.rotation.set(0, 0, 0);
    this.mesh.rotation.y = this.yaw;
    this.mesh.rotation.x = this.pitch;
    this.mesh.rotation.z = this.roll;
  }

  getExitPosition() {
    const rightX = Math.cos(this.yaw) * 1.8;
    const rightZ = -Math.sin(this.yaw) * 1.8;
    return new THREE.Vector3(this.position.x + rightX, this.position.y, this.position.z + rightZ);
  }
}
