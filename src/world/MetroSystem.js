import * as THREE from 'three';

/**
 * Namma Metro System (Bangalore Metro Rail)
 * Smoothly operates a 3-car stainless steel metro train along an elevated viaduct
 * between Silk Board Station (z = 20) and HSR Layout Station (z = 180).
 * Eliminates mesh z-fighting and relative cabin vibration.
 */
export class MetroSystem {
  constructor(scene, physicsWorld, audioManager) {
    this.scene = scene;
    this.physicsWorld = physicsWorld;
    this.audioManager = audioManager;

    // Viaduct corridor coordinates (along x = 24, y = 12.5m)
    this.trackX = 24;
    this.deckY = 12.5;
    this.trainY = 13.9;

    // Station Z coordinates
    this.stationSilkBoardZ = 20;
    this.stationHsrZ = 180;

    // Track span
    this.trackMinZ = -60;
    this.trackMaxZ = 260;

    // Train movement state machine
    // States: 'DWELL_SILK_BOARD', 'ACCEL_TO_HSR', 'CRUISE_TO_HSR', 'BRAKE_AT_HSR',
    //         'DWELL_HSR', 'ACCEL_TO_SILK', 'CRUISE_TO_SILK', 'BRAKE_AT_SILK'
    this.state = 'DWELL_SILK_BOARD';
    this.dwellTimer = 4.0; // Seconds to wait at station
    this.dwellDuration = 5.0;

    this.currentZ = this.stationSilkBoardZ;
    this.currentSpeed = 0; // m/s
    this.maxSpeed = 16.0;  // ~58 km/h realistic urban metro cruise speed
    this.acceleration = 2.8; // m/s^2 smooth metro acceleration
    this.deceleration = 2.5; // m/s^2 comfortable braking
    this.direction = 1; // 1 = towards HSR (+Z), -1 = towards Silk Board (-Z)

    this.initMaterials();
    this.buildViaductAndStations();
    this.buildTrain();
  }

  initMaterials() {
    this.materials = {
      concrete: new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.75 }),
      darkConcrete: new THREE.MeshStandardMaterial({ color: 0x64748b, roughness: 0.8 }),
      pillarMat: new THREE.MeshStandardMaterial({ color: 0x78716c, roughness: 0.85 }),
      railMat: new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.85, roughness: 0.3 }),
      stationRoof: new THREE.MeshStandardMaterial({ color: 0x0284c7, metalness: 0.3, roughness: 0.35 }),
      glass: new THREE.MeshStandardMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.65, roughness: 0.1 }),
      yellowLine: new THREE.MeshBasicMaterial({ color: 0xfacc15 }),
      platformFloor: new THREE.MeshStandardMaterial({ color: 0xd1d5db, roughness: 0.8 }),
      
      // Train Livery
      trainSilver: new THREE.MeshStandardMaterial({ color: 0xe2e8f0, metalness: 0.75, roughness: 0.25 }),
      purpleLine: new THREE.MeshStandardMaterial({ color: 0x7e22ce, roughness: 0.4 }),
      greenLine: new THREE.MeshStandardMaterial({ color: 0x16a34a, roughness: 0.4 }),
      trainWindow: new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.2, metalness: 0.8 }),
      headlightOn: new THREE.MeshBasicMaterial({ color: 0xffffff }),
      taillightOn: new THREE.MeshBasicMaterial({ color: 0xef4444 })
    };
  }

  buildViaductAndStations() {
    this.viaductGroup = new THREE.Group();

    // 1. Viaduct Concrete Deck along X = 24 from z = -60 to 260
    const trackLength = this.trackMaxZ - this.trackMinZ;
    const centerZ = (this.trackMaxZ + this.trackMinZ) / 2;

    const deckGeo = new THREE.BoxGeometry(7.6, 1.4, trackLength);
    const deck = new THREE.Mesh(deckGeo, this.materials.darkConcrete);
    deck.position.set(this.trackX, this.deckY, centerZ);
    deck.receiveShadow = true;
    this.viaductGroup.add(deck);

    // Parapet Side Walls (Prevent falls and look realistic)
    const wallGeo = new THREE.BoxGeometry(0.35, 1.1, trackLength);
    const wallL = new THREE.Mesh(wallGeo, this.materials.concrete);
    wallL.position.set(this.trackX - 3.6, this.deckY + 1.1, centerZ);
    const wallR = new THREE.Mesh(wallGeo, this.materials.concrete);
    wallR.position.set(this.trackX + 3.6, this.deckY + 1.1, centerZ);
    this.viaductGroup.add(wallL, wallR);

    // Steel Rails (2 tracks)
    const railGeo = new THREE.BoxGeometry(0.12, 0.18, trackLength);
    [-1.8, -0.6, 0.6, 1.8].forEach(rx => {
      const rail = new THREE.Mesh(railGeo, this.materials.railMat);
      rail.position.set(this.trackX + rx, this.deckY + 0.78, centerZ);
      this.viaductGroup.add(rail);
    });

    // Elevated Heavy Portal Bents & Pillars every 35m
    for (let pz = this.trackMinZ; pz <= this.trackMaxZ; pz += 35) {
      const pillar = new THREE.Mesh(
        new THREE.CylinderGeometry(1.3, 1.6, this.deckY, 12),
        this.materials.pillarMat
      );
      pillar.position.set(this.trackX, this.deckY / 2, pz);
      pillar.castShadow = true;
      this.viaductGroup.add(pillar);

      // Bent cap on top of pillar supporting the deck
      const cap = new THREE.Mesh(new THREE.BoxGeometry(8.2, 1.2, 2.5), this.materials.concrete);
      cap.position.set(this.trackX, this.deckY - 0.7, pz);
      this.viaductGroup.add(cap);

      if (this.physicsWorld) {
        const pHy = Math.max(0.5, (this.deckY - 1.5) / 2);
        this.physicsWorld.addStaticBox(this.trackX, pHy, pz, 1.4, pHy, 1.4, false, true);
      }
    }

    // Overhead Catenary Poles (Traction power)
    for (let cz = this.trackMinZ + 15; cz <= this.trackMaxZ; cz += 45) {
      const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.15, 5.0, 8), this.materials.railMat);
      mast.position.set(this.trackX + 3.5, this.deckY + 3.2, cz);
      const arm = new THREE.Mesh(new THREE.BoxGeometry(4.2, 0.1, 0.1), this.materials.railMat);
      arm.position.set(this.trackX + 1.6, this.deckY + 5.5, cz);
      this.viaductGroup.add(mast, arm);
    }

    // 2. BUILD SILK BOARD METRO STATION (z = 20)
    this.buildStation(
      'Silk Board Metro Station',
      'ರೇಷ್ಮೆ ಮಂಡಳಿ ಮೆಟ್ರೋ ನಿಲ್ದಾಣ • SILK BOARD INTERCHANGE',
      this.stationSilkBoardZ,
      0x10b981
    );

    // 3. BUILD HSR LAYOUT METRO STATION (z = 180)
    this.buildStation(
      'HSR Layout Metro Station',
      'ಎಚ್.ಎಸ್.ಆರ್ ಬಡಾವಣೆ ಮೆಟ್ರೋ ನಿಲ್ದಾಣ • HSR LAYOUT STATION',
      this.stationHsrZ,
      0x059669
    );

    this.scene.add(this.viaductGroup);
  }

  buildStation(name, fullTitle, zPos, themeColor) {
    const stationGroup = new THREE.Group();
    stationGroup.position.set(this.trackX, this.deckY, zPos);

    const stationLength = 54;
    const platformWidth = 4.2;

    // Dual Elevated Passenger Platforms (Left & Right of tracks)
    [-5.6, 5.6].forEach(px => {
      // Concrete platform slab
      const plat = new THREE.Mesh(
        new THREE.BoxGeometry(platformWidth, 1.2, stationLength),
        this.materials.platformFloor
      );
      plat.position.set(px, 0.6, 0);
      plat.receiveShadow = true;
      stationGroup.add(plat);

      // Yellow safety tactile line along platform edge facing tracks
      const edgeX = (px > 0) ? (px - platformWidth / 2 + 0.3) : (px + platformWidth / 2 - 0.3);
      const yellowLine = new THREE.Mesh(
        new THREE.BoxGeometry(0.35, 0.05, stationLength),
        this.materials.yellowLine
      );
      yellowLine.position.set(edgeX, 1.23, 0);
      stationGroup.add(yellowLine);

      // Platform outer glass barrier with steel balustrade
      const glassWall = new THREE.Mesh(
        new THREE.BoxGeometry(0.15, 1.5, stationLength),
        this.materials.glass
      );
      const outerX = (px > 0) ? (px + platformWidth / 2) : (px - platformWidth / 2);
      glassWall.position.set(outerX, 1.9, 0);
      stationGroup.add(glassWall);

      // Platform benches
      [-14, 0, 14].forEach(bz => {
        const bench = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.5, 3.2), this.materials.concrete);
        bench.position.set(px, 1.45, bz);
        stationGroup.add(bench);
      });
    });

    // Modern Curved Canopy Roof
    const roofArches = 7;
    for (let i = 0; i < roofArches; i++) {
      const rz = -stationLength / 2 + (i / (roofArches - 1)) * stationLength;
      
      // Steel arch beam spanning across both platforms
      const arch = new THREE.Mesh(
        new THREE.BoxGeometry(17.5, 0.4, 0.6),
        this.materials.darkConcrete
      );
      arch.position.set(0, 6.8, rz);
      stationGroup.add(arch);

      // Vertical support posts
      [-7.5, 7.5].forEach(postX => {
        const post = new THREE.Mesh(new THREE.BoxGeometry(0.4, 5.8, 0.4), this.materials.pillarMat);
        post.position.set(postX, 3.8, rz);
        stationGroup.add(post);
      });
    }

    // Overhead station translucent canopy
    const canopy = new THREE.Mesh(
      new THREE.BoxGeometry(17.2, 0.3, stationLength + 4),
      this.materials.stationRoof
    );
    canopy.position.set(0, 7.0, 0);
    stationGroup.add(canopy);

    // Illuminated Station Nameboards (Both ends of the station)
    const signCanvas = document.createElement('canvas');
    signCanvas.width = 1024;
    signCanvas.height = 128;
    const sctx = signCanvas.getContext('2d');
    sctx.fillStyle = '#0f172a';
    sctx.fillRect(0, 0, 1024, 128);
    // Yellow/green accent stripe
    sctx.fillStyle = '#' + themeColor.toString(16).padStart(6, '0');
    sctx.fillRect(0, 116, 1024, 12);
    sctx.fillStyle = '#ffffff';
    sctx.font = 'bold 36px "Inter", sans-serif';
    sctx.textAlign = 'center';
    sctx.fillText(fullTitle, 512, 75);

    const signTexture = new THREE.CanvasTexture(signCanvas);
    const signGeo = new THREE.PlaneGeometry(16, 2.2);

    [-stationLength / 2 + 3, stationLength / 2 - 3].forEach((sz, idx) => {
      const signMesh = new THREE.Mesh(signGeo, new THREE.MeshBasicMaterial({ map: signTexture, side: THREE.DoubleSide }));
      signMesh.position.set(0, 5.2, sz);
      signMesh.rotation.y = idx === 0 ? 0 : Math.PI;
      stationGroup.add(signMesh);
    });

    // Street-Level Entrance Staircase & Lift Tower
    const towerGeo = new THREE.BoxGeometry(5.0, this.deckY + 4, 6.0);
    const stairTower = new THREE.Mesh(towerGeo, this.materials.concrete);
    stairTower.position.set(10.5, (this.deckY + 4) / 2 - this.deckY, 0);
    stationGroup.add(stairTower);

    // Concourse pedestrian footbridge connecting to tower
    const bridge = new THREE.Mesh(new THREE.BoxGeometry(4.5, 0.8, 3.5), this.materials.darkConcrete);
    bridge.position.set(8.0, 0.8, 0);
    stationGroup.add(bridge);

    this.viaductGroup.add(stationGroup);

    // Register station in physics to prevent driving through ground stair tower
    if (this.physicsWorld) {
      this.physicsWorld.addStaticBox(this.trackX + 10.5, (this.deckY + 4) / 2, zPos, 2.6, (this.deckY + 4) / 2, 3.2);
    }
  }

  buildTrain() {
    // 3-Car Namma Metro Train (rigidly parented into this.trainGroup)
    this.trainGroup = new THREE.Group();
    this.trainGroup.position.set(this.trackX, this.trainY, this.stationSilkBoardZ);

    const carLength = 22.0;
    const carWidth = 3.3;
    const carHeight = 3.4;
    const carGap = 1.2;

    this.carMeshes = [];

    // Livery Texture to completely prevent ANY z-fighting on train sides
    const sideTexture = this.createTrainSideTexture();

    for (let c = -1; c <= 1; c++) {
      const carGroup = new THREE.Group();
      const carZ = c * (carLength + carGap);
      carGroup.position.set(0, 0, carZ);

      // Main aerodynamic stainless steel car body
      const body = new THREE.Mesh(
        new THREE.BoxGeometry(carWidth, carHeight, carLength),
        this.materials.trainSilver
      );
      body.position.y = carHeight / 2;
      body.castShadow = true;
      carGroup.add(body);

      // Textured exterior side panels with clean 0.04m offset to ensure zero flickering
      const panelMat = new THREE.MeshBasicMaterial({ map: sideTexture, transparent: true });
      const leftPanel = new THREE.Mesh(new THREE.PlaneGeometry(carLength, carHeight * 0.82), panelMat);
      leftPanel.position.set(-carWidth / 2 - 0.03, carHeight / 2, 0);
      leftPanel.rotation.y = -Math.PI / 2;
      carGroup.add(leftPanel);

      const rightPanel = new THREE.Mesh(new THREE.PlaneGeometry(carLength, carHeight * 0.82), panelMat);
      rightPanel.position.set(carWidth / 2 + 0.03, carHeight / 2, 0);
      rightPanel.rotation.y = Math.PI / 2;
      carGroup.add(rightPanel);

      // Roof curvature & AC Pods
      const acPod = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.45, 6.0), this.materials.darkConcrete);
      acPod.position.set(0, carHeight + 0.22, 0);
      carGroup.add(acPod);

      // Pantograph on middle car
      if (c === 0) {
        const pantoBase = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.2, 2.0), this.materials.railMat);
        pantoBase.position.set(0, carHeight + 0.5, 0);
        const pantoArm = new THREE.Mesh(new THREE.BoxGeometry(0.1, 1.4, 1.8), this.materials.railMat);
        pantoArm.position.set(0, carHeight + 1.2, 0);
        pantoArm.rotation.x = 0.3;
        carGroup.add(pantoBase, pantoArm);
      }

      // Front/Rear aerodynamic driver cab nosecone
      if (c === 1 || c === -1) {
        const isNorth = (c === 1);
        const cabZ = isNorth ? (carLength / 2 + 1.0) : (-carLength / 2 - 1.0);

        const cabNose = new THREE.Mesh(
          new THREE.BoxGeometry(carWidth * 0.95, carHeight * 0.92, 2.0),
          this.materials.trainSilver
        );
        cabNose.position.set(0, carHeight / 2, cabZ);
        carGroup.add(cabNose);

        // Windshield
        const windshield = new THREE.Mesh(
          new THREE.PlaneGeometry(carWidth * 0.75, carHeight * 0.4),
          this.materials.trainWindow
        );
        windshield.position.set(0, carHeight * 0.62, cabZ + (isNorth ? 1.02 : -1.02));
        if (!isNorth) windshield.rotation.y = Math.PI;
        carGroup.add(windshield);

        // Headlights & Taillights
        [-0.9, 0.9].forEach(hx => {
          const light = new THREE.Mesh(
            new THREE.BoxGeometry(0.32, 0.22, 0.1),
            isNorth ? this.materials.headlightOn : this.materials.taillightOn
          );
          light.position.set(hx, 0.9, cabZ + (isNorth ? 1.02 : -1.02));
          carGroup.add(light);
        });

        // Destination LED Display
        const destCanvas = document.createElement('canvas');
        destCanvas.width = 256;
        destCanvas.height = 64;
        const dctx = destCanvas.getContext('2d');
        dctx.fillStyle = '#000000';
        dctx.fillRect(0, 0, 256, 64);
        dctx.fillStyle = '#f59e0b'; // Amber LED
        dctx.font = 'bold 22px monospace';
        dctx.textAlign = 'center';
        dctx.fillText('SILK ⇄ HSR', 128, 40);

        const destMesh = new THREE.Mesh(
          new THREE.PlaneGeometry(1.6, 0.4),
          new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(destCanvas) })
        );
        destMesh.position.set(0, carHeight * 0.9, cabZ + (isNorth ? 1.02 : -1.02));
        if (!isNorth) destMesh.rotation.y = Math.PI;
        carGroup.add(destMesh);
      }

      // Flexible Accordion Gangway between cars
      if (c < 1) {
        const gangway = new THREE.Mesh(
          new THREE.BoxGeometry(2.4, 2.8, carGap + 0.1),
          this.materials.darkConcrete
        );
        gangway.position.set(0, carHeight / 2 - 0.2, carZ + carLength / 2 + carGap / 2);
        this.trainGroup.add(gangway);
      }

      this.trainGroup.add(carGroup);
      this.carMeshes.push(carGroup);
    }

    this.scene.add(this.trainGroup);
  }

  createTrainSideTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 160;
    const ctx = canvas.getContext('2d');

    // Stainless steel base with metallic sheen
    ctx.fillStyle = '#e2e8f0';
    ctx.fillRect(0, 0, 1024, 160);

    // Namma Metro signature stripes
    // Purple band
    ctx.fillStyle = '#7e22ce';
    ctx.fillRect(0, 20, 1024, 14);

    // Green line stripe
    ctx.fillStyle = '#16a34a';
    ctx.fillRect(0, 126, 1024, 16);

    // Windows & automatic passenger doors (4 sets of doors per car)
    ctx.fillStyle = '#1e293b';
    for (let d = 80; d < 960; d += 220) {
      // Passenger double sliding doors
      ctx.fillStyle = '#94a3b8';
      ctx.fillRect(d, 36, 68, 90);
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(d + 8, 48, 22, 50); // Left door window
      ctx.fillRect(d + 38, 48, 22, 50); // Right door window

      // Passenger panoramic side window
      ctx.fillRect(d + 86, 48, 104, 52);
    }

    // Subtle BMRCL emblem & English/Kannada text
    ctx.fillStyle = '#0f172a';
    ctx.font = 'bold 13px sans-serif';
    ctx.fillText('ನಮ್ಮ ಮೆಟ್ರೋ • NAMMA METRO', 420, 32);

    return new THREE.CanvasTexture(canvas);
  }

  update(dt) {
    if (!this.trainGroup) return;

    // State machine controlling realistic timetable movement between stations
    switch (this.state) {
      case 'DWELL_SILK_BOARD':
        this.currentSpeed = 0;
        this.currentZ = this.stationSilkBoardZ;
        this.dwellTimer -= dt;
        if (this.dwellTimer <= 0) {
          this.state = 'ACCEL_TO_HSR';
          this.direction = 1;
        }
        break;

      case 'ACCEL_TO_HSR':
        this.currentSpeed = Math.min(this.maxSpeed, this.currentSpeed + this.acceleration * dt);
        this.currentZ += this.currentSpeed * dt;
        if (this.currentSpeed >= this.maxSpeed) {
          this.state = 'CRUISE_TO_HSR';
        }
        break;

      case 'CRUISE_TO_HSR':
        this.currentZ += this.currentSpeed * dt;
        // Check braking distance: v^2 / (2 * a)
        const distToHsr = this.stationHsrZ - this.currentZ;
        const brakeDistHsr = (this.currentSpeed * this.currentSpeed) / (2 * this.deceleration);
        if (distToHsr <= brakeDistHsr + 2.0) {
          this.state = 'BRAKE_AT_HSR';
        }
        break;

      case 'BRAKE_AT_HSR':
        this.currentSpeed = Math.max(1.2, this.currentSpeed - this.deceleration * dt);
        this.currentZ += this.currentSpeed * dt;
        if (this.currentZ >= this.stationHsrZ) {
          this.currentZ = this.stationHsrZ;
          this.currentSpeed = 0;
          this.state = 'DWELL_HSR';
          this.dwellTimer = this.dwellDuration;
        }
        break;

      case 'DWELL_HSR':
        this.currentSpeed = 0;
        this.currentZ = this.stationHsrZ;
        this.dwellTimer -= dt;
        if (this.dwellTimer <= 0) {
          this.state = 'ACCEL_TO_SILK';
          this.direction = -1;
        }
        break;

      case 'ACCEL_TO_SILK':
        this.currentSpeed = Math.min(this.maxSpeed, this.currentSpeed + this.acceleration * dt);
        this.currentZ -= this.currentSpeed * dt;
        if (this.currentSpeed >= this.maxSpeed) {
          this.state = 'CRUISE_TO_SILK';
        }
        break;

      case 'CRUISE_TO_SILK':
        this.currentZ -= this.currentSpeed * dt;
        const distToSilk = this.currentZ - this.stationSilkBoardZ;
        const brakeDistSilk = (this.currentSpeed * this.currentSpeed) / (2 * this.deceleration);
        if (distToSilk <= brakeDistSilk + 2.0) {
          this.state = 'BRAKE_AT_SILK';
        }
        break;

      case 'BRAKE_AT_SILK':
        this.currentSpeed = Math.max(1.2, this.currentSpeed - this.deceleration * dt);
        this.currentZ -= this.currentSpeed * dt;
        if (this.currentZ <= this.stationSilkBoardZ) {
          this.currentZ = this.stationSilkBoardZ;
          this.currentSpeed = 0;
          this.state = 'DWELL_SILK_BOARD';
          this.dwellTimer = this.dwellDuration;
        }
        break;
    }

    // Apply exact rigid coordinate to train group (zero jitter or fluctuating between cabins!)
    this.trainGroup.position.set(this.trackX, this.trainY, this.currentZ);
  }

  /**
   * Check if the player is within boarding range at either station platform
   */
  canBoardTrain(playerPos) {
    // Platform heights are ~12.5m - 14.5m, ground concourses at stair towers (x = 34.5, z = 20 or 180)
    // Silk Board Station check
    const nearSilkPlatform = Math.hypot(playerPos.x - 24, playerPos.z - 20) < 18;
    const nearHsrPlatform = Math.hypot(playerPos.x - 24, playerPos.z - 180) < 18;
    const nearTrain = Math.hypot(playerPos.x - this.trackX, playerPos.z - this.currentZ) < 22;

    const isDwelling = (this.state === 'DWELL_SILK_BOARD' || this.state === 'DWELL_HSR');
    return (nearSilkPlatform || nearHsrPlatform || nearTrain);
  }

  boardPassenger(player) {
    this.isPassengerRiding = true;
    this.ridingPlayer = player;
  }

  exitPassenger() {
    this.isPassengerRiding = false;
    // Determine exit platform position
    const atSilk = Math.abs(this.currentZ - this.stationSilkBoardZ) < Math.abs(this.currentZ - this.stationHsrZ);
    const exitZ = atSilk ? this.stationSilkBoardZ : this.stationHsrZ;
    const exitPos = new THREE.Vector3(34.5, 0.5, exitZ); // Exit at base of station stair tower
    this.ridingPlayer = null;
    return exitPos;
  }

}
