import * as THREE from 'three';

/**
 * BmtcBus: Drivable Bangalore Metropolitan Transport Corporation (BMTC) Volvo City Bus
 * Classic Bangalore Suvarna / Vajra livery (Sky blue top, leaf green lower body,
 * panoramic passenger windows, destination route LED board, double doors, and authentic diesel engine physics).
 */
export class BmtcBus {
  constructor(scene, physicsWorld, audioManager, initialPos = new THREE.Vector3(0, 0, 0)) {
    this.scene = scene;
    this.physicsWorld = physicsWorld;
    this.audioManager = audioManager;
    this.isBmtcBus = true;
    this.color = 0x0284c7;
    this.carName = 'BMTC Volvo Vajra City Bus (500-D)';

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

    // Heavy city bus specs: smooth acceleration, steady cruising, heavy braking
    this.maxSpeed = 24;       // ~86 km/h
    this.boostMaxSpeed = 30;
    this.acceleration = 16;
    this.reverseMaxSpeed = 8;
    this.braking = 32;
    this.friction = 6.0;
    this.steerAngle = 0;
    this.maxSteerAngle = 0.44;
    this.turnRate = 2.4;
    this.radius = 2.2;
    this.headlightsOn = false;

    this.initMesh();
  }

  initMesh() {
    this.mesh = new THREE.Group();
    this.mesh.position.copy(this.position);

    // BMTC Livery Materials
    const blueMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7, // BMTC Sky Blue
      metalness: 0.5,
      roughness: 0.35
    });

    const greenMat = new THREE.MeshStandardMaterial({
      color: 0x16a34a, // BMTC Eco Green Stripe
      metalness: 0.5,
      roughness: 0.35
    });

    const whiteMat = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      roughness: 0.4
    });

    const darkMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.85
    });

    const glassMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.1,
      metalness: 0.9,
      transparent: true,
      opacity: 0.8
    });

    const chromeMat = new THREE.MeshStandardMaterial({
      color: 0xf1f5f9,
      metalness: 0.9,
      roughness: 0.2
    });

    const tireMat = new THREE.MeshStandardMaterial({ color: 0x141414, roughness: 0.95 });
    const rimMat = new THREE.MeshStandardMaterial({ color: 0x64748b, metalness: 0.7, roughness: 0.3 });

    // 1. Long City Bus Chassis & Body (Length 11.8m, Width 3.1m, Height 3.2m)
    const body = new THREE.Mesh(new THREE.BoxGeometry(3.1, 2.4, 11.8), blueMat);
    body.position.y = 1.9;
    body.castShadow = true;
    body.receiveShadow = true;
    this.mesh.add(body);

    // White Roof Cap
    const roof = new THREE.Mesh(new THREE.BoxGeometry(3.14, 0.4, 11.84), whiteMat);
    roof.position.y = 3.2;
    this.mesh.add(roof);

    // Twin Roof AC Units (Volvo Vajra AC pods)
    [-2.2, 2.2].forEach(az => {
      const acUnit = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.45, 3.2), whiteMat);
      acUnit.position.set(0, 3.55, az);
      this.mesh.add(acUnit);
    });

    // BMTC Green Lower Beltline Stripe
    const stripe = new THREE.Mesh(new THREE.BoxGeometry(3.16, 0.55, 11.86), greenMat);
    stripe.position.y = 1.25;
    this.mesh.add(stripe);

    // Lower Black Impact Skirt
    const skirt = new THREE.Mesh(new THREE.BoxGeometry(3.18, 0.3, 11.88), darkMat);
    skirt.position.y = 0.65;
    this.mesh.add(skirt);

    // 2. Windows & Passenger Doors
    // Panoramic Tinted Side Glass
    const sideGlassL = new THREE.Mesh(new THREE.BoxGeometry(0.06, 1.1, 10.4), glassMat);
    sideGlassL.position.set(-1.56, 2.25, 0.2);
    const sideGlassR = new THREE.Mesh(new THREE.BoxGeometry(0.06, 1.1, 10.4), glassMat);
    sideGlassR.position.set(1.56, 2.25, 0.2);
    this.mesh.add(sideGlassL, sideGlassR);

    // Huge Front Windshield
    const windshield = new THREE.Mesh(new THREE.BoxGeometry(2.95, 1.45, 0.08), glassMat);
    windshield.position.set(0, 2.25, 5.92);
    windshield.rotation.x = -0.08;
    this.mesh.add(windshield);

    // Rear Window
    const rearWin = new THREE.Mesh(new THREE.BoxGeometry(2.7, 0.9, 0.08), glassMat);
    rearWin.position.set(0, 2.35, -5.92);
    this.mesh.add(rearWin);

    // Double Passenger Entry & Exit Doors on Left Side (Indian Left-Hand Drive)
    [2.8, -2.4].forEach(dz => {
      const doorCut = new THREE.Mesh(new THREE.BoxGeometry(0.1, 1.9, 1.4), darkMat);
      doorCut.position.set(-1.56, 1.65, dz);
      const doorGlass1 = new THREE.Mesh(new THREE.BoxGeometry(0.12, 1.2, 0.55), glassMat);
      doorGlass1.position.set(-1.56, 1.9, dz - 0.32);
      const doorGlass2 = new THREE.Mesh(new THREE.BoxGeometry(0.12, 1.2, 0.55), glassMat);
      doorGlass2.position.set(-1.56, 1.9, dz + 0.32);
      this.mesh.add(doorCut, doorGlass1, doorGlass2);
    });

    // 3. LED Route Displays (Front & Rear)
    const ledCanvas = document.createElement('canvas');
    ledCanvas.width = 1024;
    ledCanvas.height = 160;
    const lctx = ledCanvas.getContext('2d');
    lctx.fillStyle = '#000000';
    lctx.fillRect(0, 0, 1024, 160);
    lctx.fillStyle = '#f59e0b'; // Amber LED
    lctx.font = 'bold 52px "Inter", monospace';
    lctx.textAlign = 'center';
    lctx.fillText('500-D • SILK BOARD ⇄ HSR ⇄ ITPL', 512, 75);
    lctx.fillStyle = '#22c55e';
    lctx.font = 'bold 36px "Inter", sans-serif';
    lctx.fillText('ಬಿಎಂಟಿಸಿ ವಜ್ರ • BMTC VOLVO VAJRA', 512, 130);

    const ledTex = new THREE.CanvasTexture(ledCanvas);
    const ledFront = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 0.55), new THREE.MeshBasicMaterial({ map: ledTex }));
    ledFront.position.set(0, 3.12, 5.95);
    this.mesh.add(ledFront);

    // Exterior BMTC Emblem Decal on Sides
    const decalCanvas = document.createElement('canvas');
    decalCanvas.width = 512;
    decalCanvas.height = 128;
    const dctx = decalCanvas.getContext('2d');
    dctx.fillStyle = '#0284c7';
    dctx.fillRect(0, 0, 512, 128);
    dctx.fillStyle = '#ffffff';
    dctx.font = 'bold 34px sans-serif';
    dctx.textAlign = 'center';
    dctx.fillText('BMTC • BANGALORE', 256, 55);
    dctx.fillStyle = '#facc15';
    dctx.font = 'bold 22px sans-serif';
    dctx.fillText('Bengaluru Mahanagara Sarige', 256, 95);

    const decalTex = new THREE.CanvasTexture(decalCanvas);
    const decalMeshL = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 0.6), new THREE.MeshBasicMaterial({ map: decalTex }));
    decalMeshL.position.set(-1.57, 1.25, 0);
    decalMeshL.rotation.y = -Math.PI / 2;
    const decalMeshR = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 0.6), new THREE.MeshBasicMaterial({ map: decalTex }));
    decalMeshR.position.set(1.57, 1.25, 0);
    decalMeshR.rotation.y = Math.PI / 2;
    this.mesh.add(decalMeshL, decalMeshR);

    // 4. Large Heavy Wheels (Twin rear axles look)
    this.wheelMeshes = [];
    const wheelPositions = [
      [-1.52, 0.52, 3.8],  // Front Left
      [1.52, 0.52, 3.8],   // Front Right
      [-1.52, 0.52, -3.2], // Rear Left 1
      [1.52, 0.52, -3.2]   // Rear Right 1
    ];

    wheelPositions.forEach(([wx, wy, wz], idx) => {
      const wheelGroup = new THREE.Group();
      wheelGroup.position.set(wx, wy, wz);

      const tire = new THREE.Mesh(new THREE.CylinderGeometry(0.52, 0.52, 0.42, 16), tireMat);
      tire.rotation.z = Math.PI / 2;
      tire.castShadow = true;
      wheelGroup.add(tire);

      const rim = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.32, 0.44, 10), rimMat);
      rim.rotation.z = Math.PI / 2;
      wheelGroup.add(rim);

      this.mesh.add(wheelGroup);
      this.wheelMeshes.push(wheelGroup);
    });

    // Heavy Headlights & Taillights
    [-1.15, 1.15].forEach(hx => {
      const headlight = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.2, 0.08), new THREE.MeshBasicMaterial({ color: 0xfffa65 }));
      headlight.position.set(hx, 0.85, 5.94);
      const taillight = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.35, 0.08), new THREE.MeshBasicMaterial({ color: 0xef4444 }));
      taillight.position.set(hx, 1.2, -5.94);
      this.mesh.add(headlight, taillight);
    });

    this.spotLight = new THREE.SpotLight(0xfffa65, 0, 70, Math.PI / 5, 0.35);
    this.spotLight.position.set(0, 1.2, 5.95);
    this.spotLightTarget = new THREE.Object3D();
    this.spotLightTarget.position.set(0, 0.2, 30);
    this.mesh.add(this.spotLightTarget);
    this.spotLight.target = this.spotLightTarget;
    this.mesh.add(this.spotLight);

    this.mesh.userData = { vehicle: this };
    this.scene.add(this.mesh);
  }

  setHeadlights(on) {
    this.headlightsOn = on;
    if (this.spotLight) {
      this.spotLight.intensity = on ? 4.0 : 0;
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
        this.currentSpeed *= Math.max(0, 1 - 3.5 * dt);
      }

      // Steering
      const targetSteer = -turnInput * this.maxSteerAngle;
      this.steerAngle += (targetSteer - this.steerAngle) * Math.min(1, dt * 8);

      const effectiveSpeed = Math.max(Math.abs(this.currentSpeed), (throttle !== 0) ? 2.5 : 0);
      if (effectiveSpeed > 0.1) {
        const turnMult = (this.currentSpeed < -0.1) ? -1 : 1;
        this.yaw += this.steerAngle * this.turnRate * turnMult * dt;
      }

      const fwdX = Math.sin(this.yaw);
      const fwdZ = Math.cos(this.yaw);

      const proposedX = this.position.x + fwdX * this.currentSpeed * dt;
      const proposedZ = this.position.z + fwdZ * this.currentSpeed * dt;

      // Surface height check
      const surfaceHeight = this.physicsWorld.getSurfaceHeight ? this.physicsWorld.getSurfaceHeight(proposedX, proposedZ, this.position.y) : 0;
      this.position.y = surfaceHeight;
      this.pitch *= Math.max(0, 1 - 6 * dt);

      // Collision avoidance
      let finalX = proposedX;
      let finalZ = proposedZ;
      if (this.physicsWorld && this.physicsWorld.resolveSphereCollision) {
        const resolved = this.physicsWorld.resolveSphereCollision(finalX, this.position.y + 0.8, finalZ, this.radius);
        finalX = resolved.x;
        finalZ = resolved.z;
      }

      // World bounds
      const bound = 560;
      this.position.x = Math.max(-bound, Math.min(bound, finalX));
      this.position.z = Math.max(-bound, Math.min(bound, finalZ));

      // Audio engine update
      this.speed = Math.abs(this.currentSpeed);
      this.speedKmh = Math.round(this.speed * 3.6);
      if (this.audioManager) {
        this.audioManager.updateEngine(this.speed / this.maxSpeed, throttle !== 0);
      }

      // Body roll
      const targetRoll = -this.steerAngle * (this.currentSpeed / this.maxSpeed) * 0.12;
      this.roll += (targetRoll - this.roll) * Math.min(1, dt * 6);

      // Spin wheels
      const wheelCircumference = Math.PI * 1.04;
      const wheelRotDelta = (this.currentSpeed * dt) / wheelCircumference * Math.PI * 2;
      this.wheelMeshes.forEach((w, i) => {
        w.children[0].rotation.x += wheelRotDelta;
        if (i < 2) {
          w.rotation.y = this.steerAngle;
        }
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
    const leftX = -Math.cos(this.yaw) * 2.2;
    const leftZ = Math.sin(this.yaw) * 2.2;
    return new THREE.Vector3(this.position.x + leftX, this.position.y, this.position.z + leftZ);
  }
}
