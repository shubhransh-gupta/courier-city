import * as THREE from 'three';
import { TextureGenerator } from './TextureGenerator.js';

export class CityBuilder {
  constructor(scene, physicsWorld) {
    this.scene = scene;
    this.physicsWorld = physicsWorld;

    // Generate procedural high-resolution canvas textures
    this.textures = {
      marble: TextureGenerator.createMarbleTexture(512),
      redSandstone: TextureGenerator.createSandstoneTexture('#9e2a2b', 512, true),
      buffSandstone: TextureGenerator.createSandstoneTexture('#d4a373', 512, false),
      asphalt: TextureGenerator.createAsphaltTexture(512),
      cobble: TextureGenerator.createCobblestoneTexture(512),
      copper: TextureGenerator.createCopperPatinaTexture(256),
      rock: TextureGenerator.createRockTexture(256)
    };

    this.textures.marble.repeat.set(6, 6);
    this.textures.redSandstone.repeat.set(6, 6);
    this.textures.buffSandstone.repeat.set(6, 6);
    this.textures.cobble.repeat.set(12, 12);
    this.textures.rock.repeat.set(6, 6);

    this.observationElevators = [];

    this.initMaterials();
    this.buildWorld();
  }

  initMaterials() {
    this.materials = {
      grass: new THREE.MeshStandardMaterial({ color: 0x7fa964, roughness: 0.9 }),
      sand: new THREE.MeshStandardMaterial({ color: 0xe9d8a6, roughness: 0.95 }),
      water: new THREE.MeshStandardMaterial({
        color: 0x0a9396,
        roughness: 0.15,
        metalness: 0.25,
        transparent: true,
        opacity: 0.88
      }),
      road: new THREE.MeshStandardMaterial({ color: 0x2b2b2b, roughness: 0.85, metalness: 0.1 }),
      roadMarking: new THREE.MeshBasicMaterial({ color: 0xffd166 }),
      roadWhite: new THREE.MeshBasicMaterial({ color: 0xffffff }),
      sidewalk: new THREE.MeshStandardMaterial({ map: this.textures.cobble, roughness: 0.8 }),
      tajMarble: new THREE.MeshStandardMaterial({
        map: this.textures.marble,
        color: 0xffffff,
        roughness: 0.25,
        metalness: 0.08
      }),
      goldTrim: new THREE.MeshStandardMaterial({ color: 0xf4a261, roughness: 0.3, metalness: 0.8 }),
      redSandstone: new THREE.MeshStandardMaterial({ map: this.textures.redSandstone, roughness: 0.75 }),
      buffSandstone: new THREE.MeshStandardMaterial({ map: this.textures.buffSandstone, roughness: 0.75 }),
      eiffelIron: new THREE.MeshStandardMaterial({ color: 0x635d55, roughness: 0.65, metalness: 0.7 }),
      copperDome: new THREE.MeshStandardMaterial({ map: this.textures.copper, roughness: 0.5, metalness: 0.35 }),
      statueCopper: new THREE.MeshStandardMaterial({ map: this.textures.copper, roughness: 0.45, metalness: 0.35 }),
      rock: new THREE.MeshStandardMaterial({ map: this.textures.rock, roughness: 0.95 }),
      snow: new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.3, metalness: 0.1 }),
      bridgeMetal: new THREE.MeshStandardMaterial({ color: 0xe63946, roughness: 0.4, metalness: 0.5 })
    };
  }

  buildWorld() {
    this.createLandscapeAndRiver();
    this.createHimalayanMountains();
    this.createYetiAndPolarBears();
    this.createCityZoo();
    this.createBankAndSchoolDistricts();
    this.createGasStationAndHospital();
    this.createRoadNetwork();
    this.createAirportRunwayAndHelipad();

    // Dispersed iconic global & Indian landmarks across 1200m
    this.buildIndiaGate();          // Central Ceremonial Axis (0, -140)
    this.buildTajMahal();           // East Riverfront (320, -180)
    this.buildRedFort();           // North-West Citadel (-320, -260)
    this.buildRashtrapatiBhavan();  // South-West Palace (-340, 240)
    this.buildEiffelTower();        // South-East Champ de Mars (180, 260)
    this.buildStatueOfLiberty();    // Far-East Liberty Island (440, 80)

    this.createNightclubDistrict(); // Neon Nightclub & Rooftop Lounge (-80, -60)
    this.buildIndianNationalFlag(); // Monumental 55m Tiranga in Central Plaza (0, -20)
    this.buildBdaParks();           // BDA Public Parks in HSR, Koramangala & Indiranagar
    this.buildBdaComplexes();       // BDA Commercial Shopping Complexes (HSR & Koramangala)
    this.buildRoadRoundaboutsChorahas(); // Grand roundabouts/chorahas with Kamal (Lotus) monuments
    this.buildBangaloreColleges();  // BMS College of Engineering & IISc Heritage Campus
    this.buildBnmInstitute();       // BNM Institute of Technology (BNMIT) in South Bangalore (-140, 160)
    this.buildKumaraswamyLayout();  // Kumaraswamy Layout Civic District & Viewpoint (-200, 180)
    this.buildFoundersBuildingStarkTower(); // Unique Stark Tower Design in BTM Layout (-70, 130)
    this.buildHinduTemples();       // Sri Someshwara Rajagopuram, Bull Temple & ISKCON
    this.buildIndianAirForceHQ();   // IAF HQ Training Command with fighter jet monument (180, -240)
    this.buildIndianArmyHQ();       // Indian Army Cantonment HQ with battle tank monument (-180, 220)
    this.buildVidhanaSoudha();      // Majestic Karnataka State Legislature (-240, -40)
    this.buildUBCity();             // UB City Tower & Luxury Amphitheatre (-60, -100)
    this.buildOrionMall();          // Orion Mall & World Trade Center Bangalore (240, 320)
    this.buildLalbaghGardens();     // Lalbagh Glass House & Kempegowda Tower (-140, 280)
    this.buildNandiHills();         // Nandi Hills Ghats & Sunrise Viewpoint (440, -460)
    this.buildTownHall();           // Bangalore Town Hall (40, 200)
    this.createBangaloreDistricts(); // Koramangala, HSR, BTM & Auto-rickshaw stands
    this.createCityVegetation();    // 350+ multi-species trees, parks & street props
    this.buildTipuSultanSummerPalace();
    this.buildMysorePalace();
    this.buildVvPuramFoodStreet();
    this.buildRussellMarketAndCommercialStreet();

    this.createJumpRamps();
  }

  createLandscapeAndRiver() {
    // Expansive 1200m x 1200m Terrain
    const groundGeo = new THREE.PlaneGeometry(1200, 1200, 32, 32);
    const ground = new THREE.Mesh(groundGeo, this.materials.grass);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    this.scene.add(ground);

    // River spanning from North to South along the East quadrant
    const riverGeo = new THREE.PlaneGeometry(75, 1200);
    const river = new THREE.Mesh(riverGeo, this.materials.water);
    river.rotation.x = -Math.PI / 2;
    river.position.set(380, 0.08, 0);
    river.receiveShadow = true;
    this.scene.add(river);

    // River stone embankments
    const bankGeo = new THREE.BoxGeometry(4, 0.4, 1200);
    const leftBank = new THREE.Mesh(bankGeo, this.materials.rock);
    leftBank.position.set(340, 0.16, 0);
    const rightBank = new THREE.Mesh(bankGeo, this.materials.rock);
    rightBank.position.set(420, 0.16, 0);
    this.scene.add(leftBank, rightBank);

    // Coastal beaches & promenade
    const beachGeo = new THREE.PlaneGeometry(35, 1200);
    const beach = new THREE.Mesh(beachGeo, this.materials.sand);
    beach.rotation.x = -Math.PI / 2;
    beach.position.set(320, 0.1, 0);
    beach.receiveShadow = true;
    this.scene.add(beach);

    // Yachts & boats along the river
    this.createYacht(380, 220, 0xff595e);
    this.createYacht(390, 0, 0x1982c4);
    this.createYacht(375, -280, 0xffca3a);

    // Grand Suspension Bridge over river leading to Liberty Island (x: 280 to 460, z: 80)
    this.createRiverBridge(380, 80);
  }

  createRiverBridge(x, z) {
    const group = new THREE.Group();
    group.position.set(x, 0, z);

    // Bridge deck
    const deckGeo = new THREE.BoxGeometry(100, 1.4, 16);
    const deck = new THREE.Mesh(deckGeo, this.materials.road);
    deck.position.y = 4.2;
    deck.castShadow = true;
    deck.receiveShadow = true;
    group.add(deck);

    // Red suspension towers
    [-38, 38].forEach(tx => {
      const tower = new THREE.Mesh(new THREE.BoxGeometry(3.5, 26, 18), this.materials.bridgeMetal);
      tower.position.set(tx, 13, 0);
      tower.castShadow = true;
      group.add(tower);
    });

    // Bridge ramps
    const ramp1 = new THREE.Mesh(new THREE.BoxGeometry(40, 1.2, 16), this.materials.road);
    ramp1.position.set(-68, 2.1, 0);
    ramp1.rotation.z = 0.1;
    const ramp2 = new THREE.Mesh(new THREE.BoxGeometry(40, 1.2, 16), this.materials.road);
    ramp2.position.set(68, 2.1, 0);
    ramp2.rotation.z = -0.1;
    group.add(ramp1, ramp2);

    this.scene.add(group);
    this.physicsWorld.addStaticBox(x, 4.2, z, 50, 0.7, 8);
  }

  createYacht(x, z, hullColor) {
    const group = new THREE.Group();
    group.position.set(x, 0.35, z);

    const hullMat = new THREE.MeshStandardMaterial({ color: hullColor, roughness: 0.35 });
    const cabinMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.2 });

    const hull = new THREE.Mesh(new THREE.BoxGeometry(5.2, 1.8, 14), hullMat);
    hull.castShadow = true;
    group.add(hull);

    const cabin = new THREE.Mesh(new THREE.BoxGeometry(3.8, 2.0, 7.5), cabinMat);
    cabin.position.set(0, 1.8, -0.8);
    cabin.castShadow = true;
    group.add(cabin);

    const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 7.0), cabinMat);
    mast.position.set(0, 4.5, -1.2);
    group.add(mast);

    this.scene.add(group);
  }

  createHimalayanMountains() {
    // 1. Vast Rugged Himalayan Mountain Range (1100m wide x 260m deep)
    const mWidth = 1100;
    const mDepth = 260;
    const segX = 54;
    const segZ = 24;
    const ridgeGeo = new THREE.PlaneGeometry(mWidth, mDepth, segX, segZ);
    ridgeGeo.rotateX(-Math.PI / 2);

    const pos = ridgeGeo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const vx = pos.getX(i);
      const vz = pos.getZ(i);

      // Distance from the northern crest (vz ranges from -mDepth/2 to +mDepth/2)
      // Normalise distance from the deepest ridge line
      const ridgeFactor = 1.0 - Math.min(1.0, Math.max(0.0, (vz + mDepth / 2) / mDepth));

      // Multi-octave harmonic ridge calculation
      let elevation = Math.sin(vx * 0.012) * 55 + Math.cos(vx * 0.027) * 35;
      elevation += Math.sin(vx * 0.051 + vz * 0.033) * 22;
      elevation += Math.cos(vx * 0.088) * 12;

      // Base peak height scaling (peaks up to 185m)
      const height = Math.max(0, (115 + elevation) * Math.pow(ridgeFactor, 1.4));
      pos.setY(i, height);
    }
    ridgeGeo.computeVertexNormals();

    const ridgeMesh = new THREE.Mesh(ridgeGeo, this.materials.rock);
    ridgeMesh.position.set(0, 0, -510);
    ridgeMesh.receiveShadow = true;
    this.scene.add(ridgeMesh);

    // 2. Towering Craggy Rock Massifs & Jagged Snowcapped Horns (Everest & K2 style)
    const summits = [
      { x: -440, z: -530, scale: [90, 160, 85], rotY: 0.3 },
      { x: -310, z: -550, scale: [110, 185, 100], rotY: 0.8 },
      { x: -160, z: -520, scale: [95, 155, 85], rotY: 1.2 },
      { x: 0,    z: -560, scale: [130, 205, 115], rotY: 0.4 }, // Everest Peak
      { x: 150,  z: -530, scale: [100, 165, 90], rotY: 2.1 },
      { x: 290,  z: -555, scale: [115, 180, 105], rotY: 1.5 },
      { x: 430,  z: -520, scale: [95, 150, 80], rotY: 0.6 }
    ];

    summits.forEach((s) => {
      // Rugged multi-faceted faceted rock massif
      const rockGeo = new THREE.DodecahedronGeometry(1, 1);
      const rockMesh = new THREE.Mesh(rockGeo, this.materials.rock);
      rockMesh.scale.set(s.scale[0], s.scale[1], s.scale[2]);
      rockMesh.rotation.set(0.1, s.rotY, -0.08);
      rockMesh.position.set(s.x, s.scale[1] * 0.48, s.z);
      rockMesh.receiveShadow = true;
      this.scene.add(rockMesh);

      // Glacial Snowcap Peak atop the massif
      const snowGeo = new THREE.DodecahedronGeometry(1, 1);
      const snowMesh = new THREE.Mesh(snowGeo, this.materials.snow);
      snowMesh.scale.set(s.scale[0] * 0.58, s.scale[1] * 0.46, s.scale[2] * 0.58);
      snowMesh.rotation.set(0.08, s.rotY + 0.2, -0.06);
      snowMesh.position.set(s.x, s.scale[1] * 0.76, s.z);
      this.scene.add(snowMesh);

      // Mountain base collision box
      this.physicsWorld.addStaticBox(s.x, 30, s.z, s.scale[0] * 0.5, 30, s.scale[2] * 0.5);
    });
  }

  // ========================================================
  // MYTHICAL YETI & ROAMING POLAR BEARS
  // ========================================================
  createYetiAndPolarBears() {
    const yetiGroup = new THREE.Group();
    yetiGroup.position.set(35, 0, -485);

    // 1. Snowy Ice Cavern Arch around Yeti
    const cavernMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.9 });
    const snowMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.3 });
    const iceMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      roughness: 0.1,
      metalness: 0.2,
      transparent: true,
      opacity: 0.85
    });

    for (let angle = 0; angle <= Math.PI; angle += Math.PI / 5) {
      const bx = Math.cos(angle) * 7.5;
      const by = Math.sin(angle) * 7.5 + 2.5;
      const boulder = new THREE.Mesh(new THREE.DodecahedronGeometry(2.4, 0), cavernMat);
      boulder.position.set(bx, by, (Math.random() - 0.5) * 2.5);
      boulder.rotation.set(Math.random(), Math.random(), Math.random());
      yetiGroup.add(boulder);

      // Hanging Icicles
      const icicle = new THREE.Mesh(new THREE.ConeGeometry(0.35, 2.2, 5), iceMat);
      icicle.rotation.x = Math.PI;
      icicle.position.set(bx * 0.85, by - 1.2, 0);
      yetiGroup.add(icicle);
    }

    // 2. The Mighty 4.2-Meter Himalayan Yeti (Abominable Snowman)
    const yeti = new THREE.Group();
    yeti.position.set(0, 0, 0);

    const furMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.95 });
    const skinMat = new THREE.MeshStandardMaterial({ color: 0x64748b, roughness: 0.8 });
    const eyeMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 }); // Piercing glowing cyan eyes
    const fangMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.2 });

    // Legs
    const leftLeg = new THREE.Mesh(new THREE.BoxGeometry(0.85, 2.2, 0.9), furMat);
    leftLeg.position.set(-0.75, 1.1, 0);
    yeti.add(leftLeg);

    const rightLeg = new THREE.Mesh(new THREE.BoxGeometry(0.85, 2.2, 0.9), furMat);
    rightLeg.position.set(0.75, 1.1, 0);
    yeti.add(rightLeg);

    // Large clawed feet
    const leftFoot = new THREE.Mesh(new THREE.BoxGeometry(0.95, 0.45, 1.4), skinMat);
    leftFoot.position.set(-0.75, 0.22, 0.35);
    yeti.add(leftFoot);

    const rightFoot = new THREE.Mesh(new THREE.BoxGeometry(0.95, 0.45, 1.4), skinMat);
    rightFoot.position.set(0.75, 0.22, 0.35);
    yeti.add(rightFoot);

    // Massive Muscular Torso
    const torso = new THREE.Mesh(new THREE.BoxGeometry(2.4, 2.6, 1.7), furMat);
    torso.position.set(0, 3.2, 0);
    yeti.add(torso);

    // Slate chest plate
    const chest = new THREE.Mesh(new THREE.BoxGeometry(1.6, 1.5, 0.35), skinMat);
    chest.position.set(0, 3.4, 0.85);
    yeti.add(chest);

    // Muscular hunched arms raised in menacing pose
    const leftArm = new THREE.Mesh(new THREE.BoxGeometry(0.75, 2.4, 0.75), furMat);
    leftArm.position.set(-1.6, 3.5, 0.2);
    leftArm.rotation.z = 0.45;
    leftArm.rotation.x = -0.3;
    yeti.add(leftArm);

    const rightArm = new THREE.Mesh(new THREE.BoxGeometry(0.75, 2.4, 0.75), furMat);
    rightArm.position.set(1.6, 3.5, 0.2);
    rightArm.rotation.z = -0.45;
    rightArm.rotation.x = -0.3;
    yeti.add(rightArm);

    // Heavy Claws
    const leftHand = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.6, 0.7), skinMat);
    leftHand.position.set(-2.1, 4.4, 0.5);
    yeti.add(leftHand);

    const rightHand = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.6, 0.7), skinMat);
    rightHand.position.set(2.1, 4.4, 0.5);
    yeti.add(rightHand);

    // Fierce Yeti Head
    const head = new THREE.Mesh(new THREE.BoxGeometry(1.4, 1.4, 1.4), furMat);
    head.position.set(0, 4.8, 0.2);
    yeti.add(head);

    // Face Mask
    const face = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.9, 0.2), skinMat);
    face.position.set(0, 4.75, 0.9);
    yeti.add(face);

    // Glowing Eyes
    const eyeLeft = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 8), eyeMat);
    eyeLeft.position.set(-0.3, 4.95, 1.02);
    yeti.add(eyeLeft);

    const eyeRight = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 8), eyeMat);
    eyeRight.position.set(0.3, 4.95, 1.02);
    yeti.add(eyeRight);

    // Snarl & Fangs
    const mouth = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.2, 0.15), new THREE.MeshBasicMaterial({ color: 0x1e293b }));
    mouth.position.set(0, 4.55, 1.0);
    yeti.add(mouth);

    const fangL = new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.25, 4), fangMat);
    fangL.rotation.x = Math.PI;
    fangL.position.set(-0.2, 4.5, 1.02);
    yeti.add(fangL);

    const fangR = new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.25, 4), fangMat);
    fangR.rotation.x = Math.PI;
    fangR.position.set(0.2, 4.5, 1.02);
    yeti.add(fangR);

    // Frozen ram-like horns
    const hornL = new THREE.Mesh(new THREE.ConeGeometry(0.18, 1.1, 5), iceMat);
    hornL.position.set(-0.7, 5.4, 0.1);
    hornL.rotation.z = -0.55;
    hornL.rotation.x = -0.2;
    yeti.add(hornL);

    const hornR = new THREE.Mesh(new THREE.ConeGeometry(0.18, 1.1, 5), iceMat);
    hornR.position.set(0.7, 5.4, 0.1);
    hornR.rotation.z = 0.55;
    hornR.rotation.x = -0.2;
    yeti.add(hornR);

    yetiGroup.add(yeti);
    this.scene.add(yetiGroup);

    // Solid collision box for the Yeti and Cave
    this.physicsWorld.addStaticBox(35, 3.5, -485, 4.5, 3.5, 4.5);

    // 3. Roaming Polar Bears on Glacial Plateaus
    this.createPolarBear(-85, -475, 0.6); // Glacial shelf bear
    this.createPolarBear(120, -480, -0.4); // Eastern valley bear
  }

  createPolarBear(x, z, rotY) {
    const bearGroup = new THREE.Group();
    bearGroup.position.set(x, 0, z);
    bearGroup.rotation.y = rotY;

    // Glacial Ice Sheet
    const iceSheet = new THREE.Mesh(
      new THREE.CylinderGeometry(14, 15, 0.4, 16),
      new THREE.MeshStandardMaterial({ color: 0xbae6fd, roughness: 0.15, metalness: 0.3 })
    );
    iceSheet.position.y = 0.2;
    bearGroup.add(iceSheet);

    // Fishing hole in ice
    const hole = new THREE.Mesh(
      new THREE.CylinderGeometry(2.5, 2.5, 0.45, 12),
      new THREE.MeshStandardMaterial({ color: 0x0369a1, roughness: 0.1, metalness: 0.5 })
    );
    hole.position.set(5.5, 0.22, 2.5);
    bearGroup.add(hole);

    // Polar Bear Model
    const bear = new THREE.Group();
    const bearFur = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.88 });
    const noseMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.4 });

    // Main Body
    const body = new THREE.Mesh(new THREE.BoxGeometry(2.8, 1.7, 1.8), bearFur);
    body.position.set(0, 1.6, 0);
    body.castShadow = true;
    bear.add(body);

    // Rump / Rear
    const rump = new THREE.Mesh(new THREE.BoxGeometry(1.6, 1.8, 1.7), bearFur);
    rump.position.set(-1.4, 1.7, 0);
    rump.castShadow = true;
    bear.add(rump);

    // 4 Sturdy Paws
    const legGeo = new THREE.CylinderGeometry(0.32, 0.38, 1.3, 8);
    const legPositions = [
      [-1.4, 0.65, -0.7],
      [-1.4, 0.65, 0.7],
      [1.0, 0.65, -0.7],
      [1.0, 0.65, 0.7]
    ];
    legPositions.forEach(([lx, ly, lz]) => {
      const leg = new THREE.Mesh(legGeo, bearFur);
      leg.position.set(lx, ly, lz);
      leg.castShadow = true;
      bear.add(leg);
    });

    // Polar Bear Head & Snout
    const head = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.1, 1.1), bearFur);
    head.position.set(1.7, 2.1, 0);
    bear.add(head);

    const snout = new THREE.Mesh(new THREE.BoxGeometry(0.85, 0.6, 0.7), bearFur);
    snout.position.set(2.45, 1.85, 0);
    bear.add(snout);

    const noseTip = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.25, 0.28), noseMat);
    noseTip.position.set(2.9, 1.9, 0);
    bear.add(noseTip);

    // Small rounded ears
    const earL = new THREE.Mesh(new THREE.SphereGeometry(0.2, 6, 6), bearFur);
    earL.position.set(1.5, 2.7, -0.45);
    bear.add(earL);

    const earR = new THREE.Mesh(new THREE.SphereGeometry(0.2, 6, 6), bearFur);
    earR.position.set(1.5, 2.7, 0.45);
    bear.add(earR);

    // Eyes
    const eyeL = new THREE.Mesh(new THREE.SphereGeometry(0.08, 6, 6), noseMat);
    eyeL.position.set(2.0, 2.25, -0.45);
    bear.add(eyeL);

    const eyeR = new THREE.Mesh(new THREE.SphereGeometry(0.08, 6, 6), noseMat);
    eyeR.position.set(2.0, 2.25, 0.45);
    bear.add(eyeR);

    // Little tail
    const tail = new THREE.Mesh(new THREE.SphereGeometry(0.25, 6, 6), bearFur);
    tail.position.set(-2.25, 2.0, 0);
    bear.add(tail);

    bearGroup.add(bear);
    this.scene.add(bearGroup);

    this.physicsWorld.addStaticBox(x, 1.5, z, 2.5, 1.5, 2.0);
  }

  createAirportRunwayAndHelipad() {
    const group = new THREE.Group();
    group.position.set(300, 0.06, -380);

    // 280-meter long paved asphalt runway
    const runwayGeo = new THREE.PlaneGeometry(280, 24);
    const runwayMat = new THREE.MeshStandardMaterial({ color: 0x1f2421, roughness: 0.9 });
    const runway = new THREE.Mesh(runwayGeo, runwayMat);
    runway.rotation.x = -Math.PI / 2;
    runway.receiveShadow = true;
    group.add(runway);

    // Centerline markings
    const lineMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    for (let x = -125; x <= 125; x += 20) {
      const dash = new THREE.Mesh(new THREE.PlaneGeometry(12, 1.0), lineMat);
      dash.rotation.x = -Math.PI / 2;
      dash.position.set(x, 0.02, 0);
      group.add(dash);
    }

    // Modern Air Traffic Control Tower
    const towerMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.3 });
    const tower = new THREE.Mesh(new THREE.CylinderGeometry(3.5, 4.8, 36, 14), towerMat);
    tower.position.set(-100, 18, -32);
    tower.castShadow = true;
    group.add(tower);

    const cab = new THREE.Mesh(
      new THREE.CylinderGeometry(6.8, 4.5, 6.5, 14),
      new THREE.MeshStandardMaterial({ color: 0x0284c7, transparent: true, opacity: 0.8, metalness: 0.9 })
    );
    cab.position.set(-100, 36, -32);
    group.add(cab);

    // Dedicated Helipad
    const helipadGeo = new THREE.CircleGeometry(12, 24);
    const helipadMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.8 });
    const helipad = new THREE.Mesh(helipadGeo, helipadMat);
    helipad.rotation.x = -Math.PI / 2;
    helipad.position.set(40, 0.08, 28);
    group.add(helipad);

    // Yellow 'H' on Helipad
    const hMat = new THREE.MeshBasicMaterial({ color: 0xfacc15 });
    const hBar1 = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 10), hMat);
    hBar1.rotation.x = -Math.PI / 2;
    hBar1.position.set(37, 0.1, 28);
    const hBar2 = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 10), hMat);
    hBar2.rotation.x = -Math.PI / 2;
    hBar2.position.set(43, 0.1, 28);
    const hBar3 = new THREE.Mesh(new THREE.PlaneGeometry(6, 1.2), hMat);
    hBar3.rotation.x = -Math.PI / 2;
    hBar3.position.set(40, 0.1, 28);
    group.add(hBar1, hBar2, hBar3);

    this.scene.add(group);
    this.physicsWorld.addStaticBox(200, 18, -412, 4.5, 18, 4.5);
  }

  createRoadNetwork() {
    // Upgraded from 2-lane (16m) to spacious 4-lane grand boulevard (28m wide)
    const highwayW = 28;
    const len = 1100;

    // North-South Central Spine (4 lanes)
    this.addHighway(0, 0, highwayW, len, 0);
    // East-West Grand Arterial (4 lanes)
    this.addHighway(0, 0, len, highwayW, 0);

    // Regional connecting 4-lane arterial routes
    this.addHighway(-200, 0, highwayW, len, 0);
    this.addHighway(200, 0, highwayW, len, 0);
    this.addHighway(0, -200, len, highwayW, 0);
    this.addHighway(0, 200, len, highwayW, 0);
  }

  addHighway(x, z, width, length, rotY) {
    const group = new THREE.Group();
    group.position.set(x, 0.04, z);
    group.rotation.y = rotY;

    // Broad 4-lane asphalt roadbed
    const road = new THREE.Mesh(new THREE.PlaneGeometry(width, length), this.materials.road);
    road.rotation.x = -Math.PI / 2;
    road.receiveShadow = true;
    group.add(road);

    const isHorizontal = width > length;
    const roadLen = Math.max(width, length);
    const count = Math.floor(roadLen / 8);

    // Center divider double yellow line
    const centerLineGeo = isHorizontal ? new THREE.PlaneGeometry(roadLen, 0.35) : new THREE.PlaneGeometry(0.35, roadLen);
    const centerLine1 = new THREE.Mesh(centerLineGeo, this.materials.roadMarking);
    centerLine1.rotation.x = -Math.PI / 2;
    centerLine1.position.y = 0.007;
    if (isHorizontal) centerLine1.position.z = -0.25;
    else centerLine1.position.x = -0.25;

    const centerLine2 = new THREE.Mesh(centerLineGeo, this.materials.roadMarking);
    centerLine2.rotation.x = -Math.PI / 2;
    centerLine2.position.y = 0.007;
    if (isHorizontal) centerLine2.position.z = 0.25;
    else centerLine2.position.x = 0.25;
    group.add(centerLine1, centerLine2);

    // Dashed white lane dividers separating the 2 lanes in each direction
    // Width is 28m -> lane offsets at ±6.5m from center
    const dashGeo = isHorizontal ? new THREE.PlaneGeometry(4.5, 0.35) : new THREE.PlaneGeometry(0.35, 4.5);
    const laneOffsets = [-6.5, 6.5];

    laneOffsets.forEach(offset => {
      for (let i = -count / 2; i <= count / 2; i++) {
        const dash = new THREE.Mesh(dashGeo, this.materials.roadWhite);
        dash.rotation.x = -Math.PI / 2;
        dash.position.y = 0.008;
        if (isHorizontal) {
          dash.position.x = i * 8;
          dash.position.z = offset;
        } else {
          dash.position.x = offset;
          dash.position.z = i * 8;
        }
        group.add(dash);
      }
    });

    // Solid white outer road boundary lines (at ±12.8m)
    const edgeOffsets = [-12.8, 12.8];
    const edgeLineGeo = isHorizontal ? new THREE.PlaneGeometry(roadLen, 0.3) : new THREE.PlaneGeometry(0.3, roadLen);
    edgeOffsets.forEach(edgeOff => {
      const edgeLine = new THREE.Mesh(edgeLineGeo, this.materials.roadWhite);
      edgeLine.rotation.x = -Math.PI / 2;
      edgeLine.position.y = 0.007;
      if (isHorizontal) edgeLine.position.z = edgeOff;
      else edgeLine.position.x = edgeOff;
      group.add(edgeLine);
    });

    const curbW = 2.5;
    const curbH = 0.22;
    if (isHorizontal) {
      this.addCurb(x, z + width / 2 + curbW / 2, length, curbW, curbH);
      this.addCurb(x, z - width / 2 - curbW / 2, length, curbW, curbH);
    } else {
      this.addCurb(x + width / 2 + curbW / 2, z, curbW, length, curbH);
      this.addCurb(x - width / 2 - curbW / 2, z, curbW, length, curbH);
    }

    this.scene.add(group);
  }

  addCurb(x, z, width, length, height) {
    const curb = new THREE.Mesh(new THREE.BoxGeometry(width, height, length), this.materials.sidewalk);
    curb.position.set(x, height / 2, z);
    curb.receiveShadow = true;
    this.scene.add(curb);
  }

  // ========================================================
  // 1. TAJ MAHAL (East Riverfront: x = 320, z = -180)
  // With Rooftop Observation Terrace around the Onion Dome!
  // ========================================================
  buildTajMahal() {
    const group = new THREE.Group();
    const x = 320;
    const z = -180;
    group.position.set(x, 0, z);

    const marble = this.materials.tajMarble;
    const gold = this.materials.goldTrim;

    // 1. Stepped Marble Plinth (y = 0 to 3m)
    const plinth = new THREE.Mesh(new THREE.BoxGeometry(36, 3.0, 36), marble);
    plinth.position.y = 1.5;
    plinth.castShadow = true;
    plinth.receiveShadow = true;
    group.add(plinth);

    // Grand entrance staircase leading from ground to plinth
    for (let s = 0; s < 6; s++) {
      const step = new THREE.Mesh(new THREE.BoxGeometry(10, 0.5, 1.2), marble);
      step.position.set(0, 0.25 + s * 0.5, 18.6 + (5 - s) * 1.2);
      step.receiveShadow = true;
      group.add(step);
    }

    // 2. Central Mausoleum Structure (y = 3 to 17m)
    const mainMausoleum = new THREE.Mesh(new THREE.BoxGeometry(22, 14, 22), marble);
    mainMausoleum.position.y = 10;
    mainMausoleum.castShadow = true;
    group.add(mainMausoleum);

    // Open entrance archway corridor (allows walking inside without ghosting!)
    const entranceCorridor = new THREE.Mesh(
      new THREE.BoxGeometry(6.5, 9.0, 5.0),
      new THREE.MeshStandardMaterial({ color: 0x333333 })
    );
    entranceCorridor.position.set(0, 7.5, 11.2);
    group.add(entranceCorridor);

    // 3. Iconic Mughal Bulbous Onion Dome
    const domePoints = [];
    domePoints.push(new THREE.Vector2(4.0, 0));
    domePoints.push(new THREE.Vector2(4.0, 2.5));
    domePoints.push(new THREE.Vector2(5.4, 4.6));
    domePoints.push(new THREE.Vector2(5.8, 6.6));
    domePoints.push(new THREE.Vector2(5.2, 8.8));
    domePoints.push(new THREE.Vector2(3.4, 10.6));
    domePoints.push(new THREE.Vector2(1.4, 12.4));
    domePoints.push(new THREE.Vector2(0.1, 13.8));

    const dome = new THREE.Mesh(new THREE.LatheGeometry(domePoints, 24), marble);
    dome.position.y = 17.0;
    dome.castShadow = true;
    group.add(dome);

    // Gilded Finial
    const finial = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.4, 4.2, 8), gold);
    finial.position.y = 32.5;
    group.add(finial);

    // 4. Rooftop Observation Deck Terrace (y = 17m) around the dome!
    const terraceDeck = new THREE.Mesh(new THREE.BoxGeometry(23.5, 0.6, 23.5), marble);
    terraceDeck.position.y = 17.0;
    group.add(terraceDeck);

    const terraceBalustrade = new THREE.Mesh(new THREE.BoxGeometry(24.2, 1.2, 24.2), gold);
    terraceBalustrade.position.y = 17.6;
    group.add(terraceBalustrade);

    // 5. Four 3-tier Minarets at Plinth Corners
    [-15, 15].forEach(mx => {
      [-15, 15].forEach(mz => {
        const minaret = new THREE.Mesh(new THREE.CylinderGeometry(1.0, 1.4, 26, 12), marble);
        minaret.position.set(mx, 16, mz);
        minaret.castShadow = true;
        group.add(minaret);

        const cupola = new THREE.Mesh(new THREE.SphereGeometry(1.3, 10, 10, 0, Math.PI * 2, 0, Math.PI / 2), marble);
        cupola.position.set(mx, 29.5, mz);
        cupola.scale.set(1, 1.4, 1);
        group.add(cupola);
      });
    });

    // 6. Charbagh Water Reflecting Pools
    const pool = new THREE.Mesh(new THREE.PlaneGeometry(12, 55), this.materials.water);
    pool.rotation.x = -Math.PI / 2;
    pool.position.set(0, 0.12, 48);
    group.add(pool);

    this.scene.add(group);

    // Solid Physics Obstacles
    this.physicsWorld.addStaticBox(x, 1.5, z, 18, 1.5, 18);          // Plinth
    this.physicsWorld.addStaticBox(x, 10, z, 11, 7, 11);             // Main walls
    this.physicsWorld.addStaticBox(x, 17.3, z, 11.5, 0.3, 11.5);     // Rooftop terrace deck!

    // Register Elevator to Dome Terrace
    this.createObservationElevator(
      'Taj Mahal Dome Terrace',
      new THREE.Vector3(x - 14, 3.2, z - 14),
      new THREE.Vector3(x - 6, 17.4, z - 6)
    );
  }

  // ========================================================
  // 2. INDIA GATE (Central Boulevard: x = 0, z = -140)
  // Authentic 42m Triumphal Arch with Pass-through Roadway!
  // ========================================================
  buildIndiaGate() {
    const group = new THREE.Group();
    const x = 0;
    const z = -140;
    group.position.set(x, 0, z);

    const red = this.materials.redSandstone;
    const buff = this.materials.buffSandstone;

    // Left & Right Massive Pylons
    [-8.5, 8.5].forEach(px => {
      const pylon = new THREE.Mesh(new THREE.BoxGeometry(6.8, 22, 11), red);
      pylon.position.set(px, 11, 0);
      pylon.castShadow = true;
      group.add(pylon);

      const band = new THREE.Mesh(new THREE.BoxGeometry(7.0, 2.5, 11.2), buff);
      band.position.set(px, 14, 0);
      group.add(band);
    });

    // Grand Arch Ceiling & Attic
    const archTop = new THREE.Mesh(new THREE.BoxGeometry(24, 8, 11.2), buff);
    archTop.position.set(0, 26, 0);
    archTop.castShadow = true;
    group.add(archTop);

    const attic = new THREE.Mesh(new THREE.BoxGeometry(22, 5, 10), red);
    attic.position.set(0, 32.5, 0);
    group.add(attic);

    // Amar Jawan Jyoti Cenotaph & Glowing Flame in Center
    const cenotaph = new THREE.Mesh(
      new THREE.BoxGeometry(2.5, 0.8, 2.5),
      new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.2, metalness: 0.8 })
    );
    cenotaph.position.set(0, 0.4, 0);
    group.add(cenotaph);

    const flame = new THREE.Mesh(
      new THREE.ConeGeometry(0.35, 1.4, 8),
      new THREE.MeshBasicMaterial({ color: 0xffa500 })
    );
    flame.position.set(0, 1.4, 0);
    group.add(flame);

    const flameLight = new THREE.PointLight(0xff9900, 3.5, 20);
    flameLight.position.set(0, 1.8, 0);
    group.add(flameLight);

    this.scene.add(group);

    // Left and Right Pylons are solid walls; the central 10m archway is completely open!
    this.physicsWorld.addStaticBox(x - 8.5, 11, z, 3.4, 11, 5.5);
    this.physicsWorld.addStaticBox(x + 8.5, 11, z, 3.4, 11, 5.5);
  }

  // ========================================================
  // 3. RED FORT (North-West Historic Quarter: x = -320, z = -260)
  // ========================================================
  buildRedFort() {
    const group = new THREE.Group();
    const x = -320;
    const z = -260;
    group.position.set(x, 0, z);

    const red = this.materials.redSandstone;
    const marble = this.materials.tajMarble;

    // Massive Rampart Walls
    const wall = new THREE.Mesh(new THREE.BoxGeometry(64, 14, 9), red);
    wall.position.y = 7;
    wall.castShadow = true;
    group.add(wall);

    // Crenellations (Merlons) along parapet
    for (let mx = -30; mx <= 30; mx += 3.0) {
      const merlon = new THREE.Mesh(new THREE.BoxGeometry(1.6, 2.0, 9.2), red);
      merlon.position.set(mx, 15, 0);
      group.add(merlon);
    }

    // Octagonal Bastions
    [-18, 18].forEach(bx => {
      const bastion = new THREE.Mesh(new THREE.CylinderGeometry(5.2, 5.8, 20, 8), red);
      bastion.position.set(bx, 10, 2.5);
      bastion.castShadow = true;
      group.add(bastion);

      const chattri = new THREE.Mesh(new THREE.SphereGeometry(2.8, 10, 10, 0, Math.PI * 2, 0, Math.PI / 2), marble);
      chattri.position.set(bx, 21, 2.5);
      chattri.scale.set(1, 1.3, 1);
      group.add(chattri);
    });

    // Lahori Gate Arched Entrance (open passageway)
    const gateOpen = new THREE.Mesh(
      new THREE.BoxGeometry(9, 10, 9.4),
      new THREE.MeshStandardMaterial({ color: 0x222222 })
    );
    gateOpen.position.set(0, 5, 0);
    group.add(gateOpen);

    // Flagpole with Indian Tricolor
    const flagpole = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.14, 14), this.materials.buffSandstone);
    flagpole.position.set(0, 21, 0);
    group.add(flagpole);

    const flag = new THREE.Mesh(new THREE.PlaneGeometry(4.2, 2.4), new THREE.MeshBasicMaterial({ color: 0xff9933 }));
    flag.position.set(2.1, 26, 0);
    group.add(flag);

    this.scene.add(group);
    this.physicsWorld.addStaticBox(x - 18, 7, z, 14, 7, 4.5);
    this.physicsWorld.addStaticBox(x + 18, 7, z, 14, 7, 4.5);
  }

  // ========================================================
  // 4. RASHTRAPATI BHAVAN (South-West Palace: x = -340, z = 240)
  // ========================================================
  buildRashtrapatiBhavan() {
    const group = new THREE.Group();
    const x = -340;
    const z = 240;
    group.position.set(x, 0, z);

    const red = this.materials.redSandstone;
    const buff = this.materials.buffSandstone;
    const copper = this.materials.copperDome;

    // Massive 65m Wide Colonnaded Palace Wings
    const palace = new THREE.Mesh(new THREE.BoxGeometry(68, 12, 28), buff);
    palace.position.y = 6;
    palace.castShadow = true;
    group.add(palace);

    const plinth = new THREE.Mesh(new THREE.BoxGeometry(70, 2.2, 30), red);
    plinth.position.y = 1.1;
    group.add(plinth);

    // Portico Colonnade
    for (let cx = -22; cx <= 22; cx += 4.0) {
      const col = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.58, 11.5, 12), buff);
      col.position.set(cx, 6.0, 15.5);
      col.castShadow = true;
      group.add(col);
    }

    // Great Stupa Copper Dome on Drum
    const drum = new THREE.Mesh(new THREE.CylinderGeometry(10.5, 10.8, 5.5, 20), buff);
    drum.position.set(0, 14.5, 0);
    group.add(drum);

    const dome = new THREE.Mesh(new THREE.SphereGeometry(10.2, 20, 16, 0, Math.PI * 2, 0, Math.PI / 2), copper);
    dome.position.set(0, 17.2, 0);
    dome.scale.set(1, 0.88, 1);
    group.add(dome);

    // Jaipur Column in Forecourt
    const jCol = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 1.2, 20, 12), buff);
    jCol.position.set(0, 10, 36);
    group.add(jCol);

    const jStar = new THREE.Mesh(new THREE.DodecahedronGeometry(1.2), this.materials.goldTrim);
    jStar.position.set(0, 21, 36);
    group.add(jStar);

    this.scene.add(group);
    this.physicsWorld.addStaticBox(x, 6, z, 34, 6, 14);
  }

  // ========================================================
  // 5. EIFFEL TOWER (South-East Champ de Mars: x = 180, z = 260)
  // 95-meter Architectural Masterpiece with Summit Deck!
  // ========================================================
  buildEiffelTower() {
    const group = new THREE.Group();
    const x = 180;
    const z = 260;
    group.position.set(x, 0, z);

    const iron = this.materials.eiffelIron;

    // 1. Four Massive Inward-Arched Lattice Legs spanning 34m base
    const legOffsets = [
      { lx: -13, lz: -13, rotY: Math.PI / 4 },
      { lx: 13,  lz: -13, rotY: -Math.PI / 4 },
      { lx: 13,  lz: 13,  rotY: -3 * Math.PI / 4 },
      { lx: -13, lz: 13,  rotY: 3 * Math.PI / 4 }
    ];

    legOffsets.forEach(leg => {
      const legMesh = new THREE.Mesh(new THREE.BoxGeometry(4.2, 24, 4.2), iron);
      legMesh.position.set(leg.lx, 11, leg.lz);
      legMesh.rotation.y = leg.rotY;
      legMesh.rotation.x = leg.lz > 0 ? -0.16 : 0.16;
      legMesh.rotation.z = leg.lx > 0 ? -0.16 : 0.16;
      legMesh.castShadow = true;
      group.add(legMesh);
    });

    // Four monumental entrance arches underneath the base
    [-13, 13].forEach(ax => {
      const arch1 = new THREE.Mesh(new THREE.CylinderGeometry(10, 10, 3.5, 16, 1, false, 0, Math.PI), iron);
      arch1.rotation.z = Math.PI / 2;
      arch1.position.set(ax, 6, 0);
      group.add(arch1);
    });

    // 2. First Observation Platform (y = 20m)
    const plat1 = new THREE.Mesh(new THREE.BoxGeometry(26, 2.0, 26), iron);
    plat1.position.y = 21;
    plat1.castShadow = true;
    group.add(plat1);

    const rail1 = new THREE.Mesh(new THREE.BoxGeometry(26.6, 1.2, 26.6), iron);
    rail1.position.y = 22.6;
    group.add(rail1);

    // 3. Second Observation Platform (y = 44m)
    const midTower = new THREE.Mesh(new THREE.CylinderGeometry(6.5, 10.5, 22, 4), iron);
    midTower.rotation.y = Math.PI / 4;
    midTower.position.y = 33;
    midTower.castShadow = true;
    group.add(midTower);

    const plat2 = new THREE.Mesh(new THREE.BoxGeometry(16, 1.6, 16), iron);
    plat2.position.y = 45;
    group.add(plat2);

    // 4. Slender Spire rising to 86m
    const spire = new THREE.Mesh(new THREE.CylinderGeometry(2.0, 5.5, 40, 4), iron);
    spire.rotation.y = Math.PI / 4;
    spire.position.y = 66;
    spire.castShadow = true;
    group.add(spire);

    // 5. Summit Observation Cupola & Beacon (y = 88m to 95m!)
    const summitPlatform = new THREE.Mesh(new THREE.CylinderGeometry(4.5, 4.5, 1.2, 12), iron);
    summitPlatform.position.y = 87.5;
    group.add(summitPlatform);

    const summitRail = new THREE.Mesh(new THREE.CylinderGeometry(4.8, 4.8, 1.2, 12), this.materials.goldTrim);
    summitRail.position.y = 88.7;
    group.add(summitRail);

    const beaconLight = new THREE.Mesh(
      new THREE.SphereGeometry(1.2, 8, 8),
      new THREE.MeshBasicMaterial({ color: 0xffffff })
    );
    beaconLight.position.y = 92;
    group.add(beaconLight);

    const spireTip = new THREE.Mesh(new THREE.ConeGeometry(0.6, 6, 8), iron);
    spireTip.position.y = 95;
    group.add(spireTip);

    this.scene.add(group);

    // Solid Physics Obstacles for legs and platforms
    legOffsets.forEach(leg => {
      this.physicsWorld.addStaticBox(x + leg.lx, 11, z + leg.lz, 2.5, 11, 2.5);
    });
    this.physicsWorld.addStaticBox(x, 21, z, 13, 1.0, 13);            // 1st Floor
    this.physicsWorld.addStaticBox(x, 45, z, 8, 0.8, 8);              // 2nd Floor
    this.physicsWorld.addStaticBox(x, 87.5, z, 4.0, 0.6, 4.0);        // Summit Observation Deck!

    // Register Ground-to-Summit Fast Elevator!
    this.createObservationElevator(
      'Eiffel Tower Summit (90m)',
      new THREE.Vector3(x, 0.5, z),
      new THREE.Vector3(x, 88.5, z)
    );
  }

  // ========================================================
  // 6. STATUE OF LIBERTY (Liberty Island: x = 440, z = 80)
  // With Torch Observation Deck at 46m!
  // ========================================================
  buildStatueOfLiberty() {
    const group = new THREE.Group();
    const x = 440;
    const z = 80;
    group.position.set(x, 0, z);

    const granite = new THREE.MeshStandardMaterial({ color: 0xc8d6e5, roughness: 0.8 });
    const copper = this.materials.statueCopper;
    const gold = this.materials.goldTrim;

    // Liberty Island Circular Bastion Base
    const islandBase = new THREE.Mesh(new THREE.CylinderGeometry(28, 32, 4.0, 18), granite);
    islandBase.position.y = 2.0;
    islandBase.castShadow = true;
    islandBase.receiveShadow = true;
    group.add(islandBase);

    // Fort Wood 11-pointed Star Fort Plinth
    const starFort = new THREE.Mesh(new THREE.CylinderGeometry(16, 20, 6.0, 11), granite);
    starFort.position.y = 7.0;
    starFort.castShadow = true;
    group.add(starFort);

    // Classical Pedestal (y = 10m to 24m)
    const pedestal = new THREE.Mesh(new THREE.BoxGeometry(14, 14, 14), granite);
    pedestal.position.y = 17;
    pedestal.castShadow = true;
    group.add(pedestal);

    // Pedestal Observation Gallery (y = 24.5m)
    const gallery = new THREE.Mesh(new THREE.BoxGeometry(15.5, 1.2, 15.5), granite);
    gallery.position.y = 24.5;
    group.add(gallery);

    // Sculpted Statue Figure (y = 25m to 42m)
    const robe = new THREE.Mesh(new THREE.CylinderGeometry(3.2, 4.8, 17, 14), copper);
    robe.position.y = 33.5;
    robe.castShadow = true;
    group.add(robe);

    // Head with 7-Ray Radiate Crown
    const head = new THREE.Mesh(new THREE.SphereGeometry(1.8, 12, 12), copper);
    head.position.y = 43.5;
    group.add(head);

    for (let r = 0; r < 7; r++) {
      const angle = ((r - 3) / 7) * (Math.PI * 0.75);
      const spike = new THREE.Mesh(new THREE.ConeGeometry(0.24, 2.2, 6), copper);
      spike.position.set(Math.sin(angle) * 1.8, 44.8, Math.cos(angle) * 1.1);
      spike.rotation.z = -angle * 0.8;
      group.add(spike);
    }

    // Raised Torch Arm & Balcony (y = 46m)
    const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.65, 9.5, 8), copper);
    arm.position.set(3.2, 43.5, 0.8);
    arm.rotation.z = -0.34;
    group.add(arm);

    // Torch Observation Platform (standing next to the flame!)
    const torchDeck = new THREE.Mesh(new THREE.CylinderGeometry(1.6, 0.8, 1.5, 10), gold);
    torchDeck.position.set(4.9, 48.5, 0.8);
    group.add(torchDeck);

    // Radiant Flame & Light
    const flame = new THREE.Mesh(
      new THREE.ConeGeometry(0.9, 2.8, 8),
      new THREE.MeshBasicMaterial({ color: 0xffb703 })
    );
    flame.position.set(4.9, 50.8, 0.8);
    group.add(flame);

    const torchLight = new THREE.PointLight(0xffb703, 4.0, 40);
    torchLight.position.set(4.9, 51.0, 0.8);
    group.add(torchLight);

    this.scene.add(group);

    // Solid Physics Obstacles
    this.physicsWorld.addStaticBox(x, 2.0, z, 15, 2.0, 15);           // Island Base
    this.physicsWorld.addStaticBox(x, 17, z, 7, 7, 7);                // Pedestal
    this.physicsWorld.addStaticBox(x, 24.5, z, 7.5, 0.6, 7.5);        // Pedestal deck
    this.physicsWorld.addStaticBox(x + 4.9, 48.5, z + 0.8, 1.6, 0.75, 1.6); // Torch platform!

    // Register Elevator to Torch Platform
    this.createObservationElevator(
      'Statue of Liberty Torch Deck',
      new THREE.Vector3(x, 4.2, z + 12),
      new THREE.Vector3(x + 4.2, 49.5, z + 0.8)
    );
  }

  // Helper to create elevator teleport pads with glowing beacon
  createObservationElevator(name, groundPos, topPos) {
    const padMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      roughness: 0.2,
      metalness: 0.8,
      emissive: 0x0284c7,
      emissiveIntensity: 0.6
    });

    // Ground Pad
    const gPad = new THREE.Mesh(new THREE.CylinderGeometry(1.8, 2.0, 0.3, 16), padMat);
    gPad.position.copy(groundPos);
    this.scene.add(gPad);

    // Top Pad
    const tPad = new THREE.Mesh(new THREE.CylinderGeometry(1.8, 2.0, 0.3, 16), padMat);
    tPad.position.copy(topPos);
    tPad.position.y -= 0.15;
    this.scene.add(tPad);

    this.observationElevators.push({
      name,
      groundPos: groundPos.clone(),
      topPos: topPos.clone(),
      radius: 2.8
    });
  }

  createJumpRamps() {
    const rampMat = new THREE.MeshStandardMaterial({ color: 0xf77f00, roughness: 0.5, metalness: 0.2 });

    // Highway Jump Ramps for thrilling leaps
    this.buildInteractiveRamp(0, 120, 9.0, 16, 4.2, 0, rampMat);
    this.buildInteractiveRamp(120, 0, 9.0, 16, 4.2, Math.PI / 2, rampMat);
    this.buildInteractiveRamp(-160, 0, 9.0, 16, 4.2, -Math.PI / 2, rampMat);
  }

  buildInteractiveRamp(x, z, width, length, height, rotY, material) {
    const group = new THREE.Group();
    group.position.set(x, 0, z);
    group.rotation.y = rotY;

    const shape = new THREE.Shape();
    shape.moveTo(0, 0);
    shape.lineTo(0, height);
    shape.lineTo(length, 0);
    shape.closePath();

    const geo = new THREE.ExtrudeGeometry(shape, { depth: width, bevelEnabled: false });
    geo.translate(-length / 2, 0, -width / 2);
    geo.rotateY(Math.PI / 2);

    const mesh = new THREE.Mesh(geo, material);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    group.add(mesh);
    this.scene.add(group);

    this.physicsWorld.addRampTrigger(x, z, width, length, height, rotY);
  }

  // ========================================================
  // 7. NEON NIGHTCLUB & ROOFTOP PARTY LOUNGE (x = -80, z = -60)
  // ========================================================
  createNightclubDistrict() {
    const group = new THREE.Group();
    const x = -80;
    const z = -60;
    group.position.set(x, 0, z);

    const darkMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.6 });
    const glassMat = new THREE.MeshStandardMaterial({ color: 0x0ea5e9, roughness: 0.1, metalness: 0.9, transparent: true, opacity: 0.85 });
    const neonPink = new THREE.MeshBasicMaterial({ color: 0xff007f });
    const neonCyan = new THREE.MeshBasicMaterial({ color: 0x00f5d4 });
    const danceFloorMat = new THREE.MeshStandardMaterial({ color: 0x7b2cbf, roughness: 0.2, metalness: 0.6 });

    // Main 2-story Club Building
    const building = new THREE.Mesh(new THREE.BoxGeometry(26, 7.5, 24), darkMat);
    building.position.y = 3.75;
    building.castShadow = true;
    building.receiveShadow = true;
    group.add(building);

    // Glass frontage
    const frontGlass = new THREE.Mesh(new THREE.BoxGeometry(24, 6.0, 0.4), glassMat);
    frontGlass.position.set(0, 3.5, 12.1);
    group.add(frontGlass);

    // Glowing Neon Sign ("CLUB PULSE")
    const signBoard = new THREE.Mesh(new THREE.BoxGeometry(16, 2.2, 0.6), darkMat);
    signBoard.position.set(0, 6.5, 12.3);
    group.add(signBoard);

    const signText = new THREE.Mesh(new THREE.BoxGeometry(14, 1.2, 0.2), neonPink);
    signText.position.set(0, 6.5, 12.7);
    group.add(signText);

    // Rooftop Open-Air Party Terrace (y = 7.5m)
    const roofFloor = new THREE.Mesh(new THREE.BoxGeometry(25, 0.4, 23), danceFloorMat);
    roofFloor.position.y = 7.5;
    group.add(roofFloor);

    // Glass safety perimeter railing
    const roofRail = new THREE.Mesh(new THREE.BoxGeometry(25.4, 1.2, 23.4), glassMat);
    roofRail.position.y = 8.1;
    group.add(roofRail);

    // DJ Booth on Rooftop
    const djBooth = new THREE.Mesh(new THREE.BoxGeometry(4.2, 1.3, 1.8), darkMat);
    djBooth.position.set(0, 8.15, -8.5);
    group.add(djBooth);

    // DJ Speakers & Truss
    [-3.2, 3.2].forEach(sx => {
      const speaker = new THREE.Mesh(new THREE.BoxGeometry(1.2, 2.4, 1.2), darkMat);
      speaker.position.set(sx, 8.7, -8.5);
      group.add(speaker);
    });

    // Vibrant Stage Spotlight
    this.partyLights = [];
    const light = new THREE.PointLight(0xff0055, 3.0, 26);
    light.position.set(0, 11, -4);
    group.add(light);
    this.partyLights.push(light);

    // Cocktail Bar & Stools
    const bar = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.1, 7), darkMat);
    bar.position.set(9.5, 8.05, 2);
    group.add(bar);

    this.scene.add(group);
    this.physicsWorld.addStaticBox(x, 3.75, z, 13, 3.75, 12);
    this.physicsWorld.addStaticBox(x, 7.5, z, 12.5, 0.2, 11.5); // Rooftop party floor!
  }

  // ========================================================
  // 8. AUTHENTIC BANGALORE LANDMARKS & CIVIC INFRASTRUCTURE
  // (BDA Parks, BDA Complexes, Colleges, Hindu Temples, Flag, IAF & Army HQ)
  // ========================================================

  // A. MONUMENTAL 55M INDIAN NATIONAL FLAG (Central Plaza: 0, -20)
  buildIndianNationalFlag() {
    const group = new THREE.Group();
    group.position.set(0, 0, -20);

    // 1. Grand tiered octagonal polished granite base
    const plinthGeo = new THREE.CylinderGeometry(8.5, 9.5, 1.2, 8);
    const plinthMat = new THREE.MeshStandardMaterial({ color: 0x27272a, roughness: 0.4, metalness: 0.2 });
    const plinth = new THREE.Mesh(plinthGeo, plinthMat);
    plinth.position.y = 0.6;
    plinth.receiveShadow = true;
    group.add(plinth);

    const stepGeo = new THREE.CylinderGeometry(6.5, 7.5, 0.8, 8);
    const stepMat = new THREE.MeshStandardMaterial({ color: 0x3f3f46, roughness: 0.5 });
    const step = new THREE.Mesh(stepGeo, stepMat);
    step.position.y = 1.6;
    step.receiveShadow = true;
    group.add(step);

    // 2. Stainless steel 55-meter monumental mast (flagpole)
    const mastGeo = new THREE.CylinderGeometry(0.35, 0.85, 55, 16);
    const mastMat = new THREE.MeshStandardMaterial({ color: 0xf4f4f5, roughness: 0.2, metalness: 0.95 });
    const mast = new THREE.Mesh(mastGeo, mastMat);
    mast.position.y = 29.5;
    mast.castShadow = true;
    group.add(mast);

    // Golden Kalasa / Finial ball at top
    const finialGeo = new THREE.SphereGeometry(1.1, 16, 16);
    const finialMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, roughness: 0.2, metalness: 0.9 });
    const finial = new THREE.Mesh(finialGeo, finialMat);
    finial.position.y = 57.2;
    group.add(finial);

    // Blinking red aviation warning beacon on top
    const beaconLight = new THREE.PointLight(0xff0000, 2.5, 45);
    beaconLight.position.set(0, 57.5, 0);
    group.add(beaconLight);

    // 3. Indian National Tricolor (Tiranga) canvas texture
    const flagCanvas = document.createElement('canvas');
    flagCanvas.width = 720;
    flagCanvas.height = 480;
    const fctx = flagCanvas.getContext('2d');

    // Saffron top band
    fctx.fillStyle = '#FF9933';
    fctx.fillRect(0, 0, 720, 160);
    // White middle band
    fctx.fillStyle = '#FFFFFF';
    fctx.fillRect(0, 160, 720, 160);
    // Green bottom band
    fctx.fillStyle = '#138808';
    fctx.fillRect(0, 320, 720, 160);

    // 24-spoke navy Ashoka Chakra
    fctx.strokeStyle = '#000080';
    fctx.lineWidth = 6;
    fctx.beginPath();
    fctx.arc(360, 240, 55, 0, Math.PI * 2);
    fctx.stroke();

    fctx.fillStyle = '#000080';
    fctx.beginPath();
    fctx.arc(360, 240, 10, 0, Math.PI * 2);
    fctx.fill();

    for (let i = 0; i < 24; i++) {
      const angle = (i * Math.PI * 2) / 24;
      fctx.beginPath();
      fctx.moveTo(360, 240);
      fctx.lineTo(360 + Math.cos(angle) * 55, 240 + Math.sin(angle) * 55);
      fctx.lineWidth = 3.5;
      fctx.stroke();
    }

    const flagTex = new THREE.CanvasTexture(flagCanvas);
    const flagMat = new THREE.MeshStandardMaterial({
      map: flagTex,
      side: THREE.DoubleSide,
      roughness: 0.65
    });

    // Massive 18m x 12m Tiranga blowing gracefully in the wind
    const flagGeo = new THREE.PlaneGeometry(18, 12, 16, 8);
    const pos = flagGeo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const u = pos.getX(i);
      const ripple = Math.sin(u * 0.45) * 0.9 + Math.cos(u * 0.8) * 0.4;
      pos.setZ(i, ripple);
    }
    flagGeo.computeVertexNormals();

    const flagMesh = new THREE.Mesh(flagGeo, flagMat);
    flagMesh.position.set(9.2, 50.5, 0); // Attached to mast
    flagMesh.castShadow = true;
    group.add(flagMesh);

    // 4. Amar Jawan Jyoti (Eternal Flame Memorial Plinth)
    const ajGeo = new THREE.BoxGeometry(2.4, 1.4, 2.4);
    const ajMat = new THREE.MeshStandardMaterial({ color: 0x18181b, roughness: 0.3 });
    const ajPlinth = new THREE.Mesh(ajGeo, ajMat);
    ajPlinth.position.set(0, 2.3, 4.2);
    group.add(ajPlinth);

    // Inverted golden rifle with army helmet
    const rifleMat = new THREE.MeshStandardMaterial({ color: 0xd97706, roughness: 0.3, metalness: 0.8 });
    const rifle = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 2.2, 8), rifleMat);
    rifle.position.set(0, 3.8, 4.2);
    group.add(rifle);

    const helmet = new THREE.Mesh(new THREE.SphereGeometry(0.4, 12, 8), rifleMat);
    helmet.position.set(0, 4.9, 4.2);
    group.add(helmet);

    // Flame light
    const flameLight = new THREE.PointLight(0xff6b00, 3.5, 14);
    flameLight.position.set(0, 4.2, 4.2);
    group.add(flameLight);

    // Ground High-Powered Floodlight illuminating the Tiranga
    const flagFlood = new THREE.PointLight(0xffffff, 3.0, 75);
    flagFlood.position.set(0, 4.0, 0);
    group.add(flagFlood);

    this.scene.add(group);
    this.physicsWorld.addStaticBox(0, 1.0, -20, 8.5, 1.0, 8.5);
  }

  // B. BDA PUBLIC PARKS (Bangalore Development Authority Parks)
  buildBdaParks() {
    const parkMat = new THREE.MeshStandardMaterial({ color: 0x2e7d32, roughness: 0.9 });
    const trackMat = new THREE.MeshStandardMaterial({ color: 0xb45309, roughness: 0.8 }); // Red earth walking track
    const benchMat = new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.6 });
    const wallMat = new THREE.MeshStandardMaterial({ color: 0xd1d5db, roughness: 0.7 });

    const createBdaPark = (px, pz, width, depth, parkNameKannada, parkNameEng) => {
      const pGroup = new THREE.Group();
      pGroup.position.set(px, 0, pz);

      // Lush Park Lawn Ground
      const lawn = new THREE.Mesh(new THREE.PlaneGeometry(width, depth), parkMat);
      lawn.rotation.x = -Math.PI / 2;
      lawn.position.y = 0.05;
      lawn.receiveShadow = true;
      pGroup.add(lawn);

      // Outer Red-Earth Jogging / Walking Track perimeter
      const trackW = 3.5;
      const tNorth = new THREE.Mesh(new THREE.PlaneGeometry(width - 4, trackW), trackMat);
      tNorth.rotation.x = -Math.PI / 2;
      tNorth.position.set(0, 0.08, -depth / 2 + trackW / 2 + 1.5);
      tNorth.receiveShadow = true;
      pGroup.add(tNorth);

      const tSouth = new THREE.Mesh(new THREE.PlaneGeometry(width - 4, trackW), trackMat);
      tSouth.rotation.x = -Math.PI / 2;
      tSouth.position.set(0, 0.08, depth / 2 - trackW / 2 - 1.5);
      tSouth.receiveShadow = true;
      pGroup.add(tSouth);

      const tWest = new THREE.Mesh(new THREE.PlaneGeometry(trackW, depth - 4), trackMat);
      tWest.rotation.x = -Math.PI / 2;
      tWest.position.set(-width / 2 + trackW / 2 + 1.5, 0.08, 0);
      tWest.receiveShadow = true;
      pGroup.add(tWest);

      const tEast = new THREE.Mesh(new THREE.PlaneGeometry(trackW, depth - 4), trackMat);
      tEast.rotation.x = -Math.PI / 2;
      tEast.position.set(width / 2 - trackW / 2 - 1.5, 0.08, 0);
      tEast.receiveShadow = true;
      pGroup.add(tEast);

      // Classical Central BDA Park Octagonal Gazebo / Bandstand
      const gazGeo = new THREE.CylinderGeometry(4.5, 5.0, 0.8, 8);
      const gazPlinth = new THREE.Mesh(gazGeo, wallMat);
      gazPlinth.position.y = 0.4;
      pGroup.add(gazPlinth);

      // Gazebo Pillars & Roof
      for (let i = 0; i < 8; i++) {
        const ang = (i * Math.PI * 2) / 8;
        const col = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.22, 3.8, 8), wallMat);
        col.position.set(Math.cos(ang) * 4.0, 2.3, Math.sin(ang) * 4.0);
        col.castShadow = true;
        pGroup.add(col);
      }

      const roofGeo = new THREE.ConeGeometry(5.2, 2.2, 8);
      const roofMat = new THREE.MeshStandardMaterial({ color: 0x991b1b, roughness: 0.6 }); // Mangalore tile red
      const roof = new THREE.Mesh(roofGeo, roofMat);
      roof.position.y = 4.8;
      roof.castShadow = true;
      pGroup.add(roof);

      // Central Fountain inside Gazebo
      const fBasin = new THREE.Mesh(new THREE.CylinderGeometry(1.6, 1.8, 0.5, 12), wallMat);
      fBasin.position.y = 1.0;
      pGroup.add(fBasin);
      const fWater = new THREE.Mesh(new THREE.CylinderGeometry(1.4, 1.4, 0.2, 12), new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.1 }));
      fWater.position.y = 1.2;
      pGroup.add(fWater);

      // Benches along walking track
      const benchOffsets = [
        { x: -width * 0.3, z: -depth * 0.35, rot: 0 },
        { x: width * 0.3, z: -depth * 0.35, rot: 0 },
        { x: -width * 0.3, z: depth * 0.35, rot: Math.PI },
        { x: width * 0.3, z: depth * 0.35, rot: Math.PI },
        { x: -width * 0.38, z: 0, rot: Math.PI / 2 },
        { x: width * 0.38, z: 0, rot: -Math.PI / 2 }
      ];
      benchOffsets.forEach(b => {
        const seat = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.45, 0.7), benchMat);
        seat.position.set(b.x, 0.4, b.z);
        seat.rotation.y = b.rot;
        seat.castShadow = true;
        pGroup.add(seat);
      });

      // Shaded Bangalore Trees (Gulmohar and Pink Tabebuia) inside park
      const treeLocs = [
        { x: -width * 0.25, z: -depth * 0.15, col: 0x15803d },
        { x: width * 0.25, z: -depth * 0.15, col: 0xbe185d }, // Tabebuia pink
        { x: -width * 0.22, z: depth * 0.2, col: 0xdc2626 },  // Gulmohar orange-red
        { x: width * 0.22, z: depth * 0.2, col: 0x16a34a },
        { x: 0, z: -depth * 0.32, col: 0x059669 }
      ];
      treeLocs.forEach(tl => {
        const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.4, 4.5, 8), new THREE.MeshStandardMaterial({ color: 0x451a03 }));
        trunk.position.set(tl.x, 2.25, tl.z);
        trunk.castShadow = true;
        pGroup.add(trunk);

        const foliage = new THREE.Mesh(new THREE.SphereGeometry(2.8, 8, 8), new THREE.MeshStandardMaterial({ color: tl.col, roughness: 0.85 }));
        foliage.position.set(tl.x, 5.5, tl.z);
        foliage.castShadow = true;
        pGroup.add(foliage);
      });

      // Decorative BDA Entrance Arch with Bilingual Signboard
      const archL = new THREE.Mesh(new THREE.BoxGeometry(0.8, 4.8, 0.8), wallMat);
      archL.position.set(-4.5, 2.4, depth / 2 - 1.0);
      const archR = new THREE.Mesh(new THREE.BoxGeometry(0.8, 4.8, 0.8), wallMat);
      archR.position.set(4.5, 2.4, depth / 2 - 1.0);
      const archTop = new THREE.Mesh(new THREE.BoxGeometry(9.8, 0.8, 0.8), wallMat);
      archTop.position.set(0, 4.8, depth / 2 - 1.0);
      pGroup.add(archL, archR, archTop);

      // Signboard Canvas
      const signCanvas = document.createElement('canvas');
      signCanvas.width = 512;
      signCanvas.height = 128;
      const sctx = signCanvas.getContext('2d');
      sctx.fillStyle = '#166534'; // Forest green BDA municipal board
      sctx.fillRect(0, 0, 512, 128);
      sctx.lineWidth = 6;
      sctx.strokeStyle = '#facc15';
      sctx.strokeRect(4, 4, 504, 120);

      sctx.fillStyle = '#fef08a';
      sctx.font = 'bold 30px "Noto Sans Kannada", sans-serif';
      sctx.textAlign = 'center';
      sctx.fillText(parkNameKannada, 256, 50);

      sctx.fillStyle = '#ffffff';
      sctx.font = 'bold 24px Inter, sans-serif';
      sctx.fillText(parkNameEng, 256, 95);

      const signTex = new THREE.CanvasTexture(signCanvas);
      const signMesh = new THREE.Mesh(new THREE.PlaneGeometry(8.2, 2.0), new THREE.MeshBasicMaterial({ map: signTex }));
      signMesh.position.set(0, 6.0, depth / 2 - 1.0);
      pGroup.add(signMesh);

      this.scene.add(pGroup);

      // Physics boundary for central gazebo
      this.physicsWorld.addStaticBox(px, 2.0, pz, 4.5, 2.0, 4.5);
    };

    // 1. HSR Sector 2 BDA Park (80, 40)
    createBdaPark(80, 40, 70, 60, 'ಬಿ.ಡಿ.ಎ ಉದ್ಯಾನವನ • ಎಚ್.ಎಸ್.ಆರ್ ಬಡಾವಣೆ', 'BDA PUBLIC PARK • HSR LAYOUT SEC 2');

    // 2. Koramangala 4th Block BDA Park (-140, 60)
    createBdaPark(-140, 60, 65, 55, 'ಕೋರಮಂಗಲ ಬಿ.ಡಿ.ಎ ಉದ್ಯಾನವನ', 'KORAMANGALA 4TH BLOCK BDA PARK');

    // 3. Indiranagar Defence Colony BDA Park (120, -60)
    createBdaPark(120, -60, 60, 50, 'ಇಂದಿರಾನಗರ ಬಿ.ಡಿ.ಎ ಪಾರ್ಕ್', 'INDIRANAGAR DEFENCE COLONY BDA PARK');
  }

  // C. BDA COMMERCIAL SHOPPING COMPLEXES
  buildBdaComplexes() {
    const concreteMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.7 });
    const redBrickMat = new THREE.MeshStandardMaterial({ color: 0x991b1b, roughness: 0.8 });
    const glassMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.2, metalness: 0.8 });
    const signFrameMat = new THREE.MeshStandardMaterial({ color: 0x1e293b });

    const createBdaComplex = (bx, bz, complexKannada, complexEng, storesList) => {
      const group = new THREE.Group();
      group.position.set(bx, 0, bz);

      // Main 4-Storey Civic Complex Building (52m wide x 18m tall x 38m deep)
      const mainGeo = new THREE.BoxGeometry(52, 18, 38);
      const mainMesh = new THREE.Mesh(mainGeo, concreteMat);
      mainMesh.position.y = 9;
      mainMesh.castShadow = true;
      mainMesh.receiveShadow = true;
      group.add(mainMesh);

      // Terraced Red Brick Façade accents
      const brickGeo = new THREE.BoxGeometry(53, 4, 39);
      const brickFloor1 = new THREE.Mesh(brickGeo, redBrickMat);
      brickFloor1.position.y = 2.5;
      const brickFloor3 = new THREE.Mesh(brickGeo, redBrickMat);
      brickFloor3.position.y = 11.5;
      group.add(brickFloor1, brickFloor3);

      // Commercial Shop Windows & Glass Entrances on Ground Floor
      for (let sx = -20; sx <= 20; sx += 10) {
        const shopWindow = new THREE.Mesh(new THREE.BoxGeometry(7.5, 3.2, 0.4), glassMat);
        shopWindow.position.set(sx, 2.2, 19.2);
        group.add(shopWindow);

        // Shop canopy / awning
        const canopy = new THREE.Mesh(new THREE.BoxGeometry(8.0, 0.3, 2.2), new THREE.MeshStandardMaterial({ color: (sx % 20 === 0) ? 0x2563eb : 0xd97706 }));
        canopy.position.set(sx, 4.0, 20.0);
        group.add(canopy);
      }

      // Upper floor horizontal ribbon glass windows
      [7.0, 15.0].forEach(wy => {
        const ribbonWin = new THREE.Mesh(new THREE.BoxGeometry(48, 2.4, 0.4), glassMat);
        ribbonWin.position.set(0, wy, 19.2);
        group.add(ribbonWin);
      });

      // Rooftop solar water heaters & water storage tanks
      for (let tx = -16; tx <= 16; tx += 16) {
        const tank = new THREE.Mesh(new THREE.CylinderGeometry(2.0, 2.0, 3.2, 12), new THREE.MeshStandardMaterial({ color: 0x1e3a8a }));
        tank.position.set(tx, 19.6, -6);
        group.add(tank);
      }

      // Huge Iconic Rooftop BDA Complex Signboard (Bilingual)
      const bdaCanvas = document.createElement('canvas');
      bdaCanvas.width = 1024;
      bdaCanvas.height = 256;
      const bctx = bdaCanvas.getContext('2d');

      bctx.fillStyle = '#0f172a';
      bctx.fillRect(0, 0, 1024, 256);
      bctx.lineWidth = 8;
      bctx.strokeStyle = '#f59e0b';
      bctx.strokeRect(6, 6, 1012, 244);

      bctx.fillStyle = '#fbbf24';
      bctx.font = 'bold 54px "Noto Sans Kannada", sans-serif';
      bctx.textAlign = 'center';
      bctx.fillText(complexKannada, 512, 90);

      bctx.fillStyle = '#ffffff';
      bctx.font = 'bold 44px Inter, sans-serif';
      bctx.fillText(complexEng, 512, 165);

      bctx.fillStyle = '#38bdf8';
      bctx.font = 'bold 24px monospace';
      bctx.fillText(storesList, 512, 220);

      const bdaTex = new THREE.CanvasTexture(bdaCanvas);
      const bdaSign = new THREE.Mesh(new THREE.PlaneGeometry(36, 9), new THREE.MeshBasicMaterial({ map: bdaTex }));
      bdaSign.position.set(0, 23.5, 19.2);
      group.add(bdaSign);

      // Backside of sign
      const bdaSignBack = new THREE.Mesh(new THREE.BoxGeometry(36.2, 9.2, 0.5), signFrameMat);
      bdaSignBack.position.set(0, 23.5, 19.0);
      group.add(bdaSignBack);

      // Ground Floor Parking Lot & Kannada Bangalore One Booth
      const parkingLot = new THREE.Mesh(
        new THREE.PlaneGeometry(60, 24),
        new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.9 })
      );
      parkingLot.rotation.x = -Math.PI / 2;
      parkingLot.position.set(0, 0.05, 30);
      parkingLot.receiveShadow = true;
      group.add(parkingLot);

      // Parking bay yellow stripes
      for (let px = -24; px <= 24; px += 6) {
        const stripe = new THREE.Mesh(new THREE.PlaneGeometry(0.3, 10), new THREE.MeshBasicMaterial({ color: 0xfacc15 }));
        stripe.rotation.x = -Math.PI / 2;
        stripe.position.set(px, 0.07, 30);
        group.add(stripe);
      }

      this.scene.add(group);
      this.physicsWorld.addStaticBox(bx, 9, bz, 26, 9, 19);
    };

    // 1. HSR Layout BDA Shopping Complex (60, 100)
    createBdaComplex(
      60, 100,
      'ಬಿ.ಡಿ.ಎ ವಾಣಿಜ್ಯ ಸಂಕೀರ್ಣ • ಎಚ್.ಎಸ್.ಆರ್ ಲೇಔಟ್',
      'BDA SHOPPING COMPLEX • HSR LAYOUT',
      'BANGLORE ONE • KARNATAKA BANK • POST OFFICE • SUPERMARKET'
    );

    // 2. Koramangala BDA Complex (-100, 120)
    createBdaComplex(
      -100, 120,
      'ಬಿ.ಡಿ.ಎ ಶಾಪಿಂಗ್ ಕಾಂಪ್ಲೆಕ್ಸ್ • ಕೋರಮಂಗಲ',
      'BDA COMMERCIAL HUB • KORAMANGALA',
      'FOOD COURT • CANARA BANK • TEXTILES • BOOKS & ELECTRONICS'
    );
  }

  // D. BANGALORE COLLEGES & UNIVERSITIES
  buildBangaloreColleges() {
    const brickMat = new THREE.MeshStandardMaterial({ color: 0x881337, roughness: 0.75 }); // Deep heritage red brick
    const stoneTrimMat = new THREE.MeshStandardMaterial({ color: 0xfef08a, roughness: 0.5 });
    const roofMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.5 });

    // 1. BMS COLLEGE OF ENGINEERING / RVCE TECH CAMPUS (-120, -120)
    const collegeGroup = new THREE.Group();
    collegeGroup.position.set(-120, 0, -120);

    // Main Academic Quad Central Building (56m x 20m x 22m)
    const mainBuilding = new THREE.Mesh(new THREE.BoxGeometry(56, 18, 24), brickMat);
    mainBuilding.position.y = 9;
    mainBuilding.castShadow = true;
    mainBuilding.receiveShadow = true;
    collegeGroup.add(mainBuilding);

    // Left Wing (Dept of Computer Science & AI)
    const leftWing = new THREE.Mesh(new THREE.BoxGeometry(22, 14, 38), brickMat);
    leftWing.position.set(-34, 7, 7);
    leftWing.castShadow = true;
    collegeGroup.add(leftWing);

    // Right Wing (Dept of Electronics & Robotics)
    const rightWing = new THREE.Mesh(new THREE.BoxGeometry(22, 14, 38), brickMat);
    rightWing.position.set(34, 7, 7);
    rightWing.castShadow = true;
    collegeGroup.add(rightWing);

    // Grand Heritage Clock Tower in center rising to 38m
    const tower = new THREE.Mesh(new THREE.BoxGeometry(8.5, 34, 8.5), brickMat);
    tower.position.set(0, 17, 12);
    tower.castShadow = true;
    collegeGroup.add(tower);

    const spire = new THREE.Mesh(new THREE.ConeGeometry(5.2, 9, 4), roofMat);
    spire.position.set(0, 38.5, 12);
    spire.rotation.y = Math.PI / 4;
    collegeGroup.add(spire);

    // Clock faces on 4 sides
    const clockMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    [-1, 1].forEach(dir => {
      const c1 = new THREE.Mesh(new THREE.CylinderGeometry(2.0, 2.0, 0.2, 16), clockMat);
      c1.rotation.x = Math.PI / 2;
      c1.position.set(0, 30, 12 + dir * 4.3);
      collegeGroup.add(c1);

      const c2 = new THREE.Mesh(new THREE.CylinderGeometry(2.0, 2.0, 0.2, 16), clockMat);
      c2.rotation.z = Math.PI / 2;
      c2.position.set(dir * 4.3, 30, 12);
      collegeGroup.add(c2);
    });

    // College Gate Signboard Canvas
    const colCanvas = document.createElement('canvas');
    colCanvas.width = 1024;
    colCanvas.height = 256;
    const cctx = colCanvas.getContext('2d');
    cctx.fillStyle = '#4c0519';
    cctx.fillRect(0, 0, 1024, 256);
    cctx.strokeStyle = '#fef08a';
    cctx.lineWidth = 8;
    cctx.strokeRect(6, 6, 1012, 244);

    cctx.fillStyle = '#fef08a';
    cctx.font = 'bold 50px "Noto Sans Kannada", sans-serif';
    cctx.textAlign = 'center';
    cctx.fillText('ಬಿ.ಎಂ.ಎಸ್ ಎಂಜಿನಿಯರಿಂಗ್ ಕಾಲೇಜು • ಬೆಂಗಳೂರು', 512, 85);

    cctx.fillStyle = '#ffffff';
    cctx.font = 'bold 42px Inter, sans-serif';
    cctx.fillText('B.M.S. COLLEGE OF ENGINEERING (ESTD. 1946)', 512, 160);

    cctx.fillStyle = '#38bdf8';
    cctx.font = 'bold 24px monospace';
    cctx.fillText('AUTONOMOUS INSTITUTION • AFFILIATED TO VTU & NAAC A++', 512, 215);

    const colTex = new THREE.CanvasTexture(colCanvas);
    const colSign = new THREE.Mesh(new THREE.PlaneGeometry(32, 8), new THREE.MeshBasicMaterial({ map: colTex }));
    colSign.position.set(0, 13, 24.5);
    collegeGroup.add(colSign);

    // Front campus green lawn with statue
    const campusLawn = new THREE.Mesh(new THREE.PlaneGeometry(70, 35), new THREE.MeshStandardMaterial({ color: 0x15803d }));
    campusLawn.rotation.x = -Math.PI / 2;
    campusLawn.position.set(0, 0.05, 30);
    campusLawn.receiveShadow = true;
    collegeGroup.add(campusLawn);

    this.scene.add(collegeGroup);
    this.physicsWorld.addStaticBox(-120, 9, -120, 28, 9, 12);
    this.physicsWorld.addStaticBox(-154, 7, -113, 11, 7, 19);
    this.physicsWorld.addStaticBox(-86, 7, -113, 11, 7, 19);
    this.physicsWorld.addStaticBox(-120, 17, -108, 4.3, 17, 4.3);

    // 2. IISC / HERITAGE SCIENCE CAMPUS (-60, 180)
    const sciGroup = new THREE.Group();
    sciGroup.position.set(-60, 0, 180);

    const stoneMat = new THREE.MeshStandardMaterial({ color: 0x78716c, roughness: 0.65 });
    const sciMain = new THREE.Mesh(new THREE.BoxGeometry(44, 16, 26), stoneMat);
    sciMain.position.y = 8;
    sciGroup.add(sciMain);

    // Neoclassical colonnade portico
    for (let cx = -14; cx <= 14; cx += 7) {
      const pillar = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.8, 14, 12), stoneTrimMat);
      pillar.position.set(cx, 7, 14.5);
      sciGroup.add(pillar);
    }
    const pediment = new THREE.Mesh(new THREE.ConeGeometry(18, 4.5, 4), stoneTrimMat);
    pediment.position.set(0, 16.25, 14.5);
    pediment.rotation.y = Math.PI / 4;
    sciGroup.add(pediment);

    // Science Faculty Signboard
    const sciCanvas = document.createElement('canvas');
    sciCanvas.width = 720;
    sciCanvas.height = 160;
    const sctx = sciCanvas.getContext('2d');
    sctx.fillStyle = '#1c1917';
    sctx.fillRect(0, 0, 720, 160);
    sctx.fillStyle = '#f59e0b';
    sctx.font = 'bold 36px "Noto Sans Kannada", sans-serif';
    sctx.textAlign = 'center';
    sctx.fillText('ಭಾರತೀಯ ವಿಜ್ಞಾನ ಸಂಸ್ಥೆ (IISc)', 360, 60);
    sctx.fillStyle = '#ffffff';
    sctx.font = 'bold 28px Inter, sans-serif';
    sctx.fillText('INDIAN INSTITUTE OF SCIENCE • CAMPUS', 360, 115);

    const sciSign = new THREE.Mesh(new THREE.PlaneGeometry(24, 5.3), new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(sciCanvas) }));
    sciSign.position.set(0, 20.5, 14.5);
    sciGroup.add(sciSign);

    this.scene.add(sciGroup);
    this.physicsWorld.addStaticBox(-60, 8, 180, 22, 8, 13);
  }

  // E. HINDU TEMPLES (Authentic South Indian Dravidian Architecture)
  buildHinduTemples() {
    const graniteMat = new THREE.MeshStandardMaterial({ color: 0x57534e, roughness: 0.85 }); // Dark Chola granite
    const gopuramMat = new THREE.MeshStandardMaterial({ color: 0xd97706, roughness: 0.7 });  // Ochre/terracotta Rajagopuram
    const goldMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, roughness: 0.25, metalness: 0.85 }); // Golden Kalasas
    const stoneNandiMat = new THREE.MeshStandardMaterial({ color: 0x1c1917, roughness: 0.4 }); // Monolithic black granite

    // -----------------------------------------------------------------
    // 1. DODDA BASAVANA GUDI / BULL TEMPLE (100, 180)
    // -----------------------------------------------------------------
    const bullGroup = new THREE.Group();
    bullGroup.position.set(100, 0, 180);

    // Temple Mandapa Base (Pillared Hall)
    const mandapaBase = new THREE.Mesh(new THREE.BoxGeometry(32, 1.4, 38), graniteMat);
    mandapaBase.position.y = 0.7;
    mandapaBase.receiveShadow = true;
    bullGroup.add(mandapaBase);

    // Carved stone pillars
    for (let px = -12; px <= 12; px += 8) {
      for (let pz = -14; pz <= 14; pz += 7) {
        if (Math.abs(px) < 6 && Math.abs(pz) < 5) continue; // Hollow center for Nandi
        const pillar = new THREE.Mesh(new THREE.BoxGeometry(0.9, 6.5, 0.9), graniteMat);
        pillar.position.set(px, 4.4, pz);
        pillar.castShadow = true;
        bullGroup.add(pillar);
      }
    }

    // Mandapa Stone Ceiling
    const roof = new THREE.Mesh(new THREE.BoxGeometry(33, 1.2, 39), graniteMat);
    roof.position.y = 8.2;
    roof.castShadow = true;
    bullGroup.add(roof);

    // MONOLITHIC BLACK GRANITE NANDI BULL (Huge 6.5m long x 4.2m tall sacred statue)
    const nandiBody = new THREE.Mesh(new THREE.CylinderGeometry(2.4, 2.7, 5.2, 14), stoneNandiMat);
    nandiBody.rotation.x = Math.PI / 2;
    nandiBody.position.set(0, 3.4, 0);
    nandiBody.castShadow = true;
    bullGroup.add(nandiBody);

    // Nandi hump
    const nandiHump = new THREE.Mesh(new THREE.SphereGeometry(1.4, 12, 12), stoneNandiMat);
    nandiHump.position.set(0, 5.2, -0.6);
    bullGroup.add(nandiHump);

    // Nandi head facing north
    const nandiHead = new THREE.Mesh(new THREE.BoxGeometry(1.8, 1.8, 2.4), stoneNandiMat);
    nandiHead.position.set(0, 4.4, 3.2);
    bullGroup.add(nandiHead);

    // Nandi horns & ears
    [-0.8, 0.8].forEach(hx => {
      const horn = new THREE.Mesh(new THREE.ConeGeometry(0.3, 1.6, 8), stoneNandiMat);
      horn.position.set(hx, 5.8, 3.0);
      horn.rotation.z = hx > 0 ? -0.4 : 0.4;
      bullGroup.add(horn);
    });

    // Golden bells garland around Nandi neck
    const garland = new THREE.Mesh(new THREE.TorusGeometry(2.2, 0.35, 8, 16), goldMat);
    garland.position.set(0, 3.8, 2.0);
    garland.rotation.x = Math.PI / 3;
    bullGroup.add(garland);

    // Tall Brass Deepasthambha (Lamp Pillar) in front
    const deepa = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.7, 14, 10), goldMat);
    deepa.position.set(0, 7, 24);
    bullGroup.add(deepa);

    // Lamp tiers
    for (let dy = 4; dy <= 13; dy += 2.5) {
      const tier = new THREE.Mesh(new THREE.CylinderGeometry(1.4, 1.1, 0.3, 12), goldMat);
      tier.position.set(0, dy, 24);
      bullGroup.add(tier);
    }

    // Sacred Flame at top of Deepasthambha
    const dLight = new THREE.PointLight(0xff7700, 3.0, 16);
    dLight.position.set(0, 14.5, 24);
    bullGroup.add(dLight);

    // Bull Temple Kannada Signboard
    const bCanvas = document.createElement('canvas');
    bCanvas.width = 640;
    bCanvas.height = 160;
    const btctx = bCanvas.getContext('2d');
    btctx.fillStyle = '#78350f';
    btctx.fillRect(0, 0, 640, 160);
    btctx.strokeStyle = '#fef08a';
    btctx.lineWidth = 6;
    btctx.strokeRect(4, 4, 632, 152);

    btctx.fillStyle = '#fef08a';
    btctx.font = 'bold 36px "Noto Sans Kannada", sans-serif';
    btctx.textAlign = 'center';
    btctx.fillText('ದೊಡ್ಡ ಬಸವನ ಗುಡಿ • ಬಸವನಗುಡಿ', 320, 60);

    btctx.fillStyle = '#ffffff';
    btctx.font = 'bold 28px Inter, sans-serif';
    btctx.fillText('BULL TEMPLE • BASAVANAGUDI', 320, 115);

    const bSign = new THREE.Mesh(new THREE.PlaneGeometry(14, 3.5), new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(bCanvas) }));
    bSign.position.set(0, 10.5, 19.5);
    bullGroup.add(bSign);

    this.scene.add(bullGroup);
    this.physicsWorld.addStaticBox(100, 4.5, 180, 16, 4.5, 19);

    // -----------------------------------------------------------------
    // 2. SRI SOMESHWARA DRAVIDIAN TEMPLE WITH RAJAGOPURAM (-60, -160)
    // -----------------------------------------------------------------
    const somGroup = new THREE.Group();
    somGroup.position.set(-60, 0, -160);

    // Outer Temple Prakara Courtyard Wall (Stone perimeter)
    const courtW = 60;
    const courtD = 50;
    const pWallGeo = new THREE.BoxGeometry(courtW, 4.0, 1.2);
    const wNorth = new THREE.Mesh(pWallGeo, graniteMat);
    wNorth.position.set(0, 2, -courtD / 2);
    const wSouthL = new THREE.Mesh(new THREE.BoxGeometry(22, 4.0, 1.2), graniteMat);
    wSouthL.position.set(-19, 2, courtD / 2);
    const wSouthR = new THREE.Mesh(new THREE.BoxGeometry(22, 4.0, 1.2), graniteMat);
    wSouthR.position.set(19, 2, courtD / 2);
    somGroup.add(wNorth, wSouthL, wSouthR);

    // 5-TIER MAJESTIC DRAVIDIAN RAJAGOPURAM (Temple Gateway Tower rising to 32m)
    const tiers = [
      { w: 16, d: 10, h: 6, y: 3 },
      { w: 13.5, d: 8.5, h: 5.5, y: 8.75 },
      { w: 11, d: 7.0, h: 5.0, y: 14.0 },
      { w: 9, d: 5.5, h: 4.5, y: 18.75 },
      { w: 7, d: 4.5, h: 4.0, y: 23.0 }
    ];

    tiers.forEach((t, idx) => {
      const tierMesh = new THREE.Mesh(new THREE.BoxGeometry(t.w, t.h, t.d), gopuramMat);
      tierMesh.position.set(0, t.y, courtD / 2);
      tierMesh.castShadow = true;
      somGroup.add(tierMesh);

      // Dravidian Stucco Niches and cornices
      const cornice = new THREE.Mesh(new THREE.BoxGeometry(t.w + 1.2, 0.6, t.d + 1.2), graniteMat);
      cornice.position.set(0, t.y + t.h / 2, courtD / 2);
      somGroup.add(cornice);
    });

    // Barrel Vaulted Shikhara Roof (Sala Shikhara)
    const salaRoof = new THREE.Mesh(new THREE.CylinderGeometry(2.2, 2.2, 7.5, 12, 1, false, 0, Math.PI), gopuramMat);
    salaRoof.rotation.z = Math.PI / 2;
    salaRoof.position.set(0, 26.2, courtD / 2);
    somGroup.add(salaRoof);

    // Row of 7 Golden Kalasa Finials on Gopuram crest
    for (let kx = -3.0; kx <= 3.0; kx += 1.0) {
      const kalasa = new THREE.Mesh(new THREE.ConeGeometry(0.28, 1.4, 8), goldMat);
      kalasa.position.set(kx, 28.0, courtD / 2);
      somGroup.add(kalasa);
    }

    // Inner Sanctum (Garbhagriha with Shiva Lingam plinth)
    const sanctum = new THREE.Mesh(new THREE.BoxGeometry(18, 10, 18), graniteMat);
    sanctum.position.set(0, 5, -6);
    sanctum.castShadow = true;
    somGroup.add(sanctum);

    const vGold = new THREE.Mesh(new THREE.ConeGeometry(3.5, 6.0, 4), goldMat);
    vGold.position.set(0, 13.0, -6);
    vGold.rotation.y = Math.PI / 4;
    somGroup.add(vGold);

    // Sacred Temple Pond (Kalyani) adjacent to temple
    const kalyaniGeo = new THREE.BoxGeometry(22, 0.2, 22);
    const kalyaniWater = new THREE.Mesh(kalyaniGeo, new THREE.MeshStandardMaterial({ color: 0x0369a1, roughness: 0.1, metalness: 0.3 }));
    kalyaniWater.position.set(38, 0.1, 0);
    somGroup.add(kalyaniWater);

    // Stone steps around Kalyani
    const kSteps = new THREE.Mesh(new THREE.BoxGeometry(26, 0.6, 26), graniteMat);
    kSteps.position.set(38, 0.3, 0);
    somGroup.add(kSteps);

    // Someshwara Temple Signboard
    const sCanvas = document.createElement('canvas');
    sCanvas.width = 640;
    sCanvas.height = 160;
    const stctx = sCanvas.getContext('2d');
    stctx.fillStyle = '#b45309';
    stctx.fillRect(0, 0, 640, 160);
    stctx.strokeStyle = '#fde047';
    stctx.lineWidth = 6;
    stctx.strokeRect(4, 4, 632, 152);

    stctx.fillStyle = '#fde047';
    stctx.font = 'bold 34px "Noto Sans Kannada", sans-serif';
    stctx.textAlign = 'center';
    stctx.fillText('ಶ್ರೀ ಸೋಮೇಶ್ವರ ಸ್ವಾಮಿ ದೇವಾಲಯ', 320, 60);

    stctx.fillStyle = '#ffffff';
    stctx.font = 'bold 26px Inter, sans-serif';
    stctx.fillText('SRI SOMESHWARA TEMPLE • CHOLA ERA', 320, 115);

    const sSign = new THREE.Mesh(new THREE.PlaneGeometry(12, 3.0), new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(sCanvas) }));
    sSign.position.set(0, 9.0, courtD / 2 + 1.2);
    somGroup.add(sSign);

    this.scene.add(somGroup);
    this.physicsWorld.addStaticBox(-60, 14, -160 + courtD / 2, 8, 14, 5);
    this.physicsWorld.addStaticBox(-60, 5, -166, 9, 5, 9);

    // -----------------------------------------------------------------
    // 3. ISKCON BANGALORE WHITE & GOLD TEMPLE (220, -120)
    // -----------------------------------------------------------------
    const iskGroup = new THREE.Group();
    iskGroup.position.set(220, 0, -120);

    const whiteMarbleMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.25 });

    // Raised Hillock Platform
    const hillPlatform = new THREE.Mesh(new THREE.CylinderGeometry(28, 32, 4.0, 16), graniteMat);
    hillPlatform.position.y = 2.0;
    hillPlatform.receiveShadow = true;
    iskGroup.add(hillPlatform);

    // Grand White Marble Prayer Hall
    const hall = new THREE.Mesh(new THREE.BoxGeometry(40, 12, 28), whiteMarbleMat);
    hall.position.y = 10.0;
    hall.castShadow = true;
    iskGroup.add(hall);

    // Soaring Central Golden Shikhara (rising to 36m)
    const iskShikhara = new THREE.Mesh(new THREE.ConeGeometry(7.5, 20, 8), goldMat);
    iskShikhara.position.set(0, 26.0, 0);
    iskShikhara.castShadow = true;
    iskGroup.add(iskShikhara);

    // Flanking Shikhara domes
    [-14, 14].forEach(sx => {
      const sDome = new THREE.Mesh(new THREE.ConeGeometry(4.5, 12, 8), whiteMarbleMat);
      sDome.position.set(sx, 22.0, 0);
      iskGroup.add(sDome);
    });

    // ISKCON Signboard
    const iCanvas = document.createElement('canvas');
    iCanvas.width = 640;
    iCanvas.height = 140;
    const ictx = iCanvas.getContext('2d');
    ictx.fillStyle = '#065f46';
    ictx.fillRect(0, 0, 640, 140);
    ictx.strokeStyle = '#fde047';
    ictx.lineWidth = 6;
    ictx.strokeRect(4, 4, 632, 132);

    ictx.fillStyle = '#fde047';
    ictx.font = 'bold 32px "Noto Sans Kannada", sans-serif';
    ictx.textAlign = 'center';
    ictx.fillText('ಇಸ್ಕಾನ್ ಬೆಂಗಳೂರು • ಶ್ರೀ ರಾಧಾ ಕೃಷ್ಣ ದೇವಾಲಯ', 320, 52);

    ictx.fillStyle = '#ffffff';
    ictx.font = 'bold 24px Inter, sans-serif';
    ictx.fillText('ISKCON BANGALORE • HARE KRISHNA HILL', 320, 102);

    const iSign = new THREE.Mesh(new THREE.PlaneGeometry(16, 3.5), new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(iCanvas) }));
    iSign.position.set(0, 18.0, 14.2);
    iskGroup.add(iSign);

    this.scene.add(iskGroup);
    this.physicsWorld.addStaticBox(220, 10, -120, 20, 10, 14);
  }

  // F. INDIAN AIR FORCE (IAF) HEADQUARTERS & TRAINING COMMAND (180, -240)
  buildIndianAirForceHQ() {
    const iafGroup = new THREE.Group();
    iafGroup.position.set(180, 0, -240);

    const iafBlueMat = new THREE.MeshStandardMaterial({ color: 0x1e3a8a, roughness: 0.5 }); // IAF Air Force Blue
    const camoMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.7 });
    const aircraftGreyMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.3, metalness: 0.8 }); // Jet fuselage

    // 1. Military Perimeter Base compound (75m x 65m tarmac)
    const baseGround = new THREE.Mesh(
      new THREE.PlaneGeometry(75, 65),
      new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.9 })
    );
    baseGround.rotation.x = -Math.PI / 2;
    baseGround.position.y = 0.05;
    baseGround.receiveShadow = true;
    iafGroup.add(baseGround);

    // Perimeter Security Fence / Wall
    const fenceMat = new THREE.MeshStandardMaterial({ color: 0x64748b, roughness: 0.8 });
    const fBack = new THREE.Mesh(new THREE.BoxGeometry(75, 3.5, 0.8), fenceMat);
    fBack.position.set(0, 1.75, -32.5);
    const fLeft = new THREE.Mesh(new THREE.BoxGeometry(0.8, 3.5, 65), fenceMat);
    fLeft.position.set(-37.5, 1.75, 0);
    const fRight = new THREE.Mesh(new THREE.BoxGeometry(0.8, 3.5, 65), fenceMat);
    fRight.position.set(37.5, 1.75, 0);
    iafGroup.add(fBack, fLeft, fRight);

    // Sentry Guardhouse & Security Checkpost
    const guardhouse = new THREE.Mesh(new THREE.BoxGeometry(6, 4.2, 5), iafBlueMat);
    guardhouse.position.set(-14, 2.1, 30);
    iafGroup.add(guardhouse);

    // Boom barrier gate
    const barrier = new THREE.Mesh(new THREE.BoxGeometry(10, 0.3, 0.3), new THREE.MeshBasicMaterial({ color: 0xef4444 }));
    barrier.position.set(-5, 1.2, 30);
    iafGroup.add(barrier);

    // 2. IAF HQ Training Command Headquarters Building (48m wide x 16m tall x 24m deep)
    const hqBuilding = new THREE.Mesh(new THREE.BoxGeometry(48, 16, 24), iafBlueMat);
    hqBuilding.position.set(0, 8, -14);
    hqBuilding.castShadow = true;
    hqBuilding.receiveShadow = true;
    iafGroup.add(hqBuilding);

    // IAF Roundel (Saffron, White, Green concentric circle with Ashoka Chakra)
    const roundelCanvas = document.createElement('canvas');
    roundelCanvas.width = 256;
    roundelCanvas.height = 256;
    const rctx = roundelCanvas.getContext('2d');
    // Outer Saffron
    rctx.fillStyle = '#FF9933';
    rctx.beginPath();
    rctx.arc(128, 128, 120, 0, Math.PI * 2);
    rctx.fill();
    // Middle White
    rctx.fillStyle = '#FFFFFF';
    rctx.beginPath();
    rctx.arc(128, 128, 80, 0, Math.PI * 2);
    rctx.fill();
    // Inner Green
    rctx.fillStyle = '#138808';
    rctx.beginPath();
    rctx.arc(128, 128, 40, 0, Math.PI * 2);
    rctx.fill();

    const roundelTex = new THREE.CanvasTexture(roundelCanvas);
    const roundelMesh = new THREE.Mesh(new THREE.PlaneGeometry(6, 6), new THREE.MeshBasicMaterial({ map: roundelTex }));
    roundelMesh.position.set(0, 12, -1.8);
    iafGroup.add(roundelMesh);

    // Spherical Air Defence Radar Dome on HQ Roof
    const radome = new THREE.Mesh(new THREE.SphereGeometry(4.5, 16, 16), new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.3 }));
    radome.position.set(16, 19.5, -14);
    iafGroup.add(radome);

    // Red beacon on radome
    const rBeacon = new THREE.PointLight(0xff0000, 2.0, 30);
    rBeacon.position.set(16, 24.2, -14);
    iafGroup.add(rBeacon);

    // 3. MONUMENTAL SUPERSONIC FIGHTER JET (MiG-21 / TEJAS) on 45-degree Launch Pedestal
    const jetPedestal = new THREE.Mesh(new THREE.BoxGeometry(4.5, 6.0, 7.0), camoMat);
    jetPedestal.position.set(0, 3.0, 14);
    iafGroup.add(jetPedestal);

    const jetGroup = new THREE.Group();
    jetGroup.position.set(0, 7.5, 14);
    jetGroup.rotation.x = -Math.PI / 6; // Angled 30 degrees upwards in takeoff climb!
    jetGroup.rotation.y = -Math.PI / 12;

    // Jet Fuselage
    const fuselage = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 1.3, 14, 12), aircraftGreyMat);
    fuselage.rotation.x = Math.PI / 2;
    jetGroup.add(fuselage);

    // Radome nose cone
    const nose = new THREE.Mesh(new THREE.ConeGeometry(0.9, 3.2, 12), new THREE.MeshStandardMaterial({ color: 0x15803d }));
    nose.position.z = 8.6;
    nose.rotation.x = Math.PI / 2;
    jetGroup.add(nose);

    // Cockpit canopy
    const cockpit = new THREE.Mesh(new THREE.SphereGeometry(0.9, 12, 8), new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.1, metalness: 0.9 }));
    cockpit.scale.set(0.7, 0.8, 2.4);
    cockpit.position.set(0, 0.9, 3.0);
    jetGroup.add(cockpit);

    // Supersonic Delta Wings
    const wingShape = new THREE.Shape();
    wingShape.moveTo(-6.5, -3.0);
    wingShape.lineTo(0, 4.0);
    wingShape.lineTo(6.5, -3.0);
    wingShape.lineTo(0, -2.0);
    wingShape.closePath();

    const wingGeo = new THREE.ExtrudeGeometry(wingShape, { depth: 0.2, bevelEnabled: false });
    const deltaWing = new THREE.Mesh(wingGeo, aircraftGreyMat);
    deltaWing.rotation.x = -Math.PI / 2;
    deltaWing.position.set(0, 0, 0);
    jetGroup.add(deltaWing);

    // Vertical Stabilizer Fin
    const finShape = new THREE.Shape();
    finShape.moveTo(0, 0);
    finShape.lineTo(0, 3.4);
    finShape.lineTo(2.4, 0);
    finShape.closePath();

    const finGeo = new THREE.ExtrudeGeometry(finShape, { depth: 0.18, bevelEnabled: false });
    const vertFin = new THREE.Mesh(finGeo, aircraftGreyMat);
    vertFin.rotation.y = Math.PI / 2;
    vertFin.position.set(0, 0.8, -5.5);
    jetGroup.add(vertFin);

    // Afterburner engine nozzle
    const nozzle = new THREE.Mesh(new THREE.CylinderGeometry(1.0, 1.1, 1.2, 12), new THREE.MeshStandardMaterial({ color: 0x18181b, metalness: 0.9 }));
    nozzle.rotation.x = Math.PI / 2;
    nozzle.position.z = -7.4;
    jetGroup.add(nozzle);

    // Orange afterburner flame glow
    const jetFlame = new THREE.PointLight(0xff6600, 3.0, 10);
    jetFlame.position.set(0, 0, -8.5);
    jetGroup.add(jetFlame);

    iafGroup.add(jetGroup);

    // Bilingual IAF Signboard
    const iafCanvas = document.createElement('canvas');
    iafCanvas.width = 1024;
    iafCanvas.height = 256;
    const ictx = iafCanvas.getContext('2d');
    ictx.fillStyle = '#0f172a';
    ictx.fillRect(0, 0, 1024, 256);
    ictx.strokeStyle = '#38bdf8';
    ictx.lineWidth = 8;
    ictx.strokeRect(6, 6, 1012, 244);

    ictx.fillStyle = '#38bdf8';
    ictx.font = 'bold 46px "Noto Sans Kannada", sans-serif';
    ictx.textAlign = 'center';
    ictx.fillText('ಭಾರತೀಯ ವಾಯು ಸೇನೆ • ಪ್ರಧಾನ ತರಬೇತಿ ಕಮಾಂಡ್', 512, 85);

    ictx.fillStyle = '#ffffff';
    ictx.font = 'bold 40px Inter, sans-serif';
    ictx.fillText('INDIAN AIR FORCE — HQ TRAINING COMMAND', 512, 160);

    ictx.fillStyle = '#f59e0b';
    ictx.font = 'bold 24px monospace';
    ictx.fillText('TOUCH THE SKY WITH GLORY • ನಭಃ ಸ್ಪೃಶಂ ದೀಪ್ತಮ್', 512, 215);

    const iafSign = new THREE.Mesh(new THREE.PlaneGeometry(28, 7), new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(iafCanvas) }));
    iafSign.position.set(0, 18, -1.8);
    iafGroup.add(iafSign);

    this.scene.add(iafGroup);
    this.physicsWorld.addStaticBox(180, 8, -254, 24, 8, 12);
    this.physicsWorld.addStaticBox(180, 3, -226, 3, 3, 4);
  }

  // G. INDIAN ARMY ASC CENTRE & COLLEGE (Cantonment Garrison: -180, 220)
  buildIndianArmyHQ() {
    const armyGroup = new THREE.Group();
    armyGroup.position.set(-180, 0, 220);

    const armyGreenMat = new THREE.MeshStandardMaterial({ color: 0x365314, roughness: 0.8 }); // Olive Drab Indian Army
    const stoneWallMat = new THREE.MeshStandardMaterial({ color: 0x57534e, roughness: 0.8 });
    const tankSteelMat = new THREE.MeshStandardMaterial({ color: 0x27272a, roughness: 0.6, metalness: 0.6 });

    // 1. Army Cantonment Base Parade Ground (80m x 70m)
    const baseGround = new THREE.Mesh(
      new THREE.PlaneGeometry(80, 70),
      new THREE.MeshStandardMaterial({ color: 0x27272a, roughness: 0.9 })
    );
    baseGround.rotation.x = -Math.PI / 2;
    baseGround.position.y = 0.05;
    baseGround.receiveShadow = true;
    armyGroup.add(baseGround);

    // Sentry Watchtowers on corners
    [-36, 36].forEach(wx => {
      const tower = new THREE.Mesh(new THREE.BoxGeometry(4.0, 12, 4.0), stoneWallMat);
      tower.position.set(wx, 6, 32);
      tower.castShadow = true;
      armyGroup.add(tower);

      const cabin = new THREE.Mesh(new THREE.BoxGeometry(4.8, 3.2, 4.8), armyGreenMat);
      cabin.position.set(wx, 13.6, 32);
      armyGroup.add(cabin);

      // Searchlight on sentry tower
      const searchlight = new THREE.SpotLight(0xfef08a, 3.0, 50, Math.PI / 5, 0.4);
      searchlight.position.set(wx, 14, 32);
      searchlight.target.position.set(wx, 0, 10);
      armyGroup.add(searchlight);
      armyGroup.add(searchlight.target);
    });

    // 2. Army Garrison Command & Barracks Building (50m wide x 15m tall x 22m deep)
    const barracks = new THREE.Mesh(new THREE.BoxGeometry(50, 14, 22), armyGreenMat);
    barracks.position.set(0, 7, -18);
    barracks.castShadow = true;
    barracks.receiveShadow = true;
    armyGroup.add(barracks);

    // Roof parapet
    const parapet = new THREE.Mesh(new THREE.BoxGeometry(51, 1.4, 23), stoneWallMat);
    parapet.position.set(0, 14.7, -18);
    armyGroup.add(parapet);

    // 3. VIJAYANTA / T-90 BHISHMA MAIN BATTLE TANK on Granite Honor Pedestal
    const tankPlinth = new THREE.Mesh(new THREE.BoxGeometry(8.5, 2.5, 12.0), stoneWallMat);
    tankPlinth.position.set(0, 1.25, 10);
    tankPlinth.castShadow = true;
    armyGroup.add(tankPlinth);

    const tankGroup = new THREE.Group();
    tankGroup.position.set(0, 2.5, 10);

    // Tank Hull
    const hull = new THREE.Mesh(new THREE.BoxGeometry(5.4, 1.8, 8.2), tankSteelMat);
    hull.position.y = 1.3;
    hull.castShadow = true;
    tankGroup.add(hull);

    // Left & Right Track Treads
    [-2.8, 2.8].forEach(tx => {
      const tread = new THREE.Mesh(new THREE.BoxGeometry(0.9, 1.5, 8.6), new THREE.MeshStandardMaterial({ color: 0x18181b, roughness: 0.9 }));
      tread.position.set(tx, 0.8, 0);
      tankGroup.add(tread);

      // Road wheels
      for (let wz = -3.5; wz <= 3.5; wz += 1.4) {
        const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.55, 1.0, 12), tankSteelMat);
        wheel.rotation.z = Math.PI / 2;
        wheel.position.set(tx, 0.8, wz);
        tankGroup.add(wheel);
      }
    });

    // Rotating Armored Turret
    const turret = new THREE.Mesh(new THREE.CylinderGeometry(1.9, 2.2, 1.3, 12), tankSteelMat);
    turret.position.set(0, 2.8, -0.4);
    tankGroup.add(turret);

    // 125mm Main Battle Cannon Gun Barrel
    const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.22, 6.5, 10), tankSteelMat);
    barrel.rotation.x = Math.PI / 2 - 0.15; // Aimed menacingly up
    barrel.position.set(0, 2.8, 3.2);
    tankGroup.add(barrel);

    // Muzzle Brake
    const muzzle = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.6, 10), tankSteelMat);
    muzzle.rotation.x = Math.PI / 2 - 0.15;
    muzzle.position.set(0, 3.3, 6.4);
    tankGroup.add(muzzle);

    // Commander Cupola & Machine Gun
    const cupola = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.6, 0.6, 10), tankSteelMat);
    cupola.position.set(0.8, 3.7, -0.8);
    tankGroup.add(cupola);

    armyGroup.add(tankGroup);

    // Bilingual Indian Army Signboard
    const aCanvas = document.createElement('canvas');
    aCanvas.width = 1024;
    aCanvas.height = 256;
    const actx = aCanvas.getContext('2d');
    actx.fillStyle = '#14532d';
    actx.fillRect(0, 0, 1024, 256);
    actx.strokeStyle = '#facc15';
    actx.lineWidth = 8;
    actx.strokeRect(6, 6, 1012, 244);

    actx.fillStyle = '#facc15';
    actx.font = 'bold 46px "Noto Sans Kannada", sans-serif';
    actx.textAlign = 'center';
    actx.fillText('ಭಾರತೀಯ ಸೇನೆ • ಎ.ಎಸ್.ಸಿ ಸೆಂಟರ್ ಮತ್ತು ಕಾಲೇಜು', 512, 85);

    actx.fillStyle = '#ffffff';
    actx.font = 'bold 40px Inter, sans-serif';
    actx.fillText('INDIAN ARMY — ASC CENTRE & COLLEGE (CANTONMENT)', 512, 160);

    actx.fillStyle = '#fde047';
    actx.font = 'bold 24px monospace';
    actx.fillText('SEVA ASMAKAM DHARMAH • SERVICE IS OUR CREED', 512, 215);

    const armySign = new THREE.Mesh(new THREE.PlaneGeometry(30, 7.5), new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(aCanvas) }));
    armySign.position.set(0, 16, -6.8);
    armyGroup.add(armySign);

    this.scene.add(armyGroup);
    this.physicsWorld.addStaticBox(-180, 7, 202, 25, 7, 11);
    this.physicsWorld.addStaticBox(-180, 2.5, 230, 4.3, 2.5, 6.0);
    this.physicsWorld.addStaticBox(-216, 6, 252, 2.0, 6, 2.0);
    this.physicsWorld.addStaticBox(-144, 6, 252, 2.0, 6, 2.0);
  }

  createCityZoo() {
    const zooGroup = new THREE.Group();
    zooGroup.position.set(-160, 0, -140);

    // Zoo Ground (Lush Safari Turf & Savanna Sand)
    const zooGround = new THREE.Mesh(
      new THREE.PlaneGeometry(110, 85),
      new THREE.MeshStandardMaterial({ color: 0x606c38, roughness: 0.9 })
    );
    zooGround.rotation.x = -Math.PI / 2;
    zooGround.position.set(0, 0.04, 0);
    zooGround.receiveShadow = true;
    zooGroup.add(zooGround);

    // Grand Entrance Arch
    const pillarMat = new THREE.MeshStandardMaterial({ color: 0x78716c, roughness: 0.8 });
    const woodMat = new THREE.MeshStandardMaterial({ color: 0x582f0e, roughness: 0.85 });

    const pLeft = new THREE.Mesh(new THREE.BoxGeometry(2.4, 9, 2.4), pillarMat);
    pLeft.position.set(-9, 4.5, 38);
    zooGroup.add(pLeft);

    const pRight = new THREE.Mesh(new THREE.BoxGeometry(2.4, 9, 2.4), pillarMat);
    pRight.position.set(9, 4.5, 38);
    zooGroup.add(pRight);

    // Arch Overhead Timber Beam & Signboard
    const beam = new THREE.Mesh(new THREE.BoxGeometry(22, 2.2, 1.6), woodMat);
    beam.position.set(0, 8.8, 38);
    zooGroup.add(beam);

    const signCanvas = document.createElement('canvas');
    signCanvas.width = 512;
    signCanvas.height = 128;
    const sctx = signCanvas.getContext('2d');
    sctx.fillStyle = '#283618';
    sctx.fillRect(0, 0, 512, 128);
    sctx.fillStyle = '#fefae0';
    sctx.font = 'bold 36px "Inter", sans-serif';
    sctx.textAlign = 'center';
    sctx.fillText('🦁 SAFARI & CITY ZOO 🦒', 256, 75);
    const signTex = new THREE.CanvasTexture(signCanvas);
    const signMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(16, 1.8),
      new THREE.MeshBasicMaterial({ map: signTex })
    );
    signMesh.position.set(0, 8.8, 38.9);
    zooGroup.add(signMesh);

    // Ticket Booths
    const boothMat = new THREE.MeshStandardMaterial({ color: 0xd4a373, roughness: 0.7 });
    const b1 = new THREE.Mesh(new THREE.BoxGeometry(3.5, 3.2, 3), boothMat);
    b1.position.set(-14, 1.6, 38);
    zooGroup.add(b1);
    const b2 = new THREE.Mesh(new THREE.BoxGeometry(3.5, 3.2, 3), boothMat);
    b2.position.set(14, 1.6, 38);
    zooGroup.add(b2);

    // Wooden Perimeter Fence
    const fenceMat = new THREE.MeshStandardMaterial({ color: 0x854d0e, roughness: 0.9 });
    for (let x = -50; x <= 50; x += 10) {
      if (Math.abs(x) > 10) {
        const post = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 2.4, 6), fenceMat);
        post.position.set(x, 1.2, 40);
        zooGroup.add(post);
        const rail = new THREE.Mesh(new THREE.BoxGeometry(10, 0.25, 0.2), fenceMat);
        rail.position.set(x - 5, 1.5, 40);
        zooGroup.add(rail);
      }
    }

    // 1. LION ROCK DEN (x: -30, z: -10)
    const rockMat = new THREE.MeshStandardMaterial({ color: 0xa8a29e, roughness: 0.92 });
    const lionBase = new THREE.Mesh(new THREE.DodecahedronGeometry(8, 1), rockMat);
    lionBase.scale.set(1.6, 0.8, 1.4);
    lionBase.position.set(-30, 3.5, -10);
    zooGroup.add(lionBase);

    // Majestic Male Lion Model atop the highest boulder
    const lion = new THREE.Group();
    lion.position.set(-30, 8.2, -10);
    lion.rotation.y = 0.8;
    const lionGold = new THREE.MeshStandardMaterial({ color: 0xd4a373, roughness: 0.8 });
    const maneBrown = new THREE.MeshStandardMaterial({ color: 0x451a03, roughness: 0.9 });

    // Lion Body & Legs
    const lBody = new THREE.Mesh(new THREE.BoxGeometry(2.4, 1.3, 1.2), lionGold);
    lBody.position.y = 1.2;
    lion.add(lBody);

    const lLegGeo = new THREE.CylinderGeometry(0.18, 0.2, 1.1, 6);
    [[-0.9, 0.55, -0.4], [-0.9, 0.55, 0.4], [0.9, 0.55, -0.4], [0.9, 0.55, 0.4]].forEach(([lx, ly, lz]) => {
      const leg = new THREE.Mesh(lLegGeo, lionGold);
      leg.position.set(lx, ly, lz);
      lion.add(leg);
    });

    // Lion Head & Big Fluffy Dark Brown Mane
    const mane = new THREE.Mesh(new THREE.SphereGeometry(1.0, 8, 8), maneBrown);
    mane.scale.set(1.1, 1.3, 1.1);
    mane.position.set(1.4, 1.8, 0);
    lion.add(mane);

    const lHead = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.7, 0.7), lionGold);
    lHead.position.set(1.7, 1.8, 0);
    lion.add(lHead);

    const lSnout = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.4, 0.4), lionGold);
    lSnout.position.set(2.2, 1.7, 0);
    lion.add(lSnout);

    // Lion Tail with dark tuft
    const lTail = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, 1.6, 4), lionGold);
    lTail.rotation.z = -1.1;
    lTail.position.set(-1.8, 1.2, 0);
    lion.add(lTail);

    const lTuft = new THREE.Mesh(new THREE.SphereGeometry(0.18, 4, 4), maneBrown);
    lTuft.position.set(-2.4, 0.6, 0);
    lion.add(lTuft);

    zooGroup.add(lion);

    // 2. SAVANNA ENCLOSURE (Giraffes & Zebras) (x: 25, z: -10)
    const savannaGround = new THREE.Mesh(
      new THREE.PlaneGeometry(45, 45),
      new THREE.MeshStandardMaterial({ color: 0xddb892, roughness: 0.95 })
    );
    savannaGround.rotation.x = -Math.PI / 2;
    savannaGround.position.set(25, 0.05, -10);
    zooGroup.add(savannaGround);

    // Acacia Tree
    this.createAcaciaTree(zooGroup, 15, -20);
    this.createAcaciaTree(zooGroup, 38, -5);

    // 2 Giraffes
    this.createGiraffe(zooGroup, 20, -12, 0.4);
    this.createGiraffe(zooGroup, 32, -18, -0.6);

    // 2 Zebras
    this.createZebra(zooGroup, 24, 0, 1.2);
    this.createZebra(zooGroup, 34, 5, -1.8);

    // 3. ELEPHANT SANCTUARY & WATER LAGOON (x: 0, z: -20)
    const pool = new THREE.Mesh(
      new THREE.CylinderGeometry(14, 15, 0.6, 18),
      new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.15, metalness: 0.3 })
    );
    pool.position.set(0, 0.2, -20);
    zooGroup.add(pool);

    // African Elephant in Lagoon
    this.createElephant(zooGroup, -3, -16, 0.2);

    this.scene.add(zooGroup);

    // Zoo Collisions
    this.physicsWorld.addStaticBox(-160 - 30, 4, -140 - 10, 12, 4, 12); // Lion Rock
    this.physicsWorld.addStaticBox(-160, 4.5, -140 + 38, 12, 4.5, 2); // Entrance Gate
    this.physicsWorld.addStaticBox(-160, 2, -140 - 45, 55, 2, 2); // Back Wall
    this.physicsWorld.addStaticBox(-160 - 55, 2, -140, 2, 2, 45); // Left Fence
    this.physicsWorld.addStaticBox(-160 + 55, 2, -140, 2, 2, 45); // Right Fence
  }

  createAcaciaTree(parent, x, z) {
    const group = new THREE.Group();
    group.position.set(x, 0, z);

    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x582f0e, roughness: 0.9 });
    const leafMat = new THREE.MeshStandardMaterial({ color: 0x4a7c59, roughness: 0.8 });

    // Slender angled trunk
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.6, 8, 7), trunkMat);
    trunk.position.set(0, 4, 0);
    trunk.rotation.z = 0.12;
    group.add(trunk);

    // Broad flat-topped umbrella foliage canopy
    const c1 = new THREE.Mesh(new THREE.CylinderGeometry(4.5, 4.0, 0.9, 10), leafMat);
    c1.position.set(0.6, 8.2, 0);
    group.add(c1);

    const c2 = new THREE.Mesh(new THREE.CylinderGeometry(2.8, 2.2, 0.7, 8), leafMat);
    c2.position.set(1.5, 9.1, 0.4);
    group.add(c2);

    parent.add(group);
  }

  createGiraffe(parent, x, z, rotY) {
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    g.rotation.y = rotY;

    const gMat = new THREE.MeshStandardMaterial({ color: 0xca8a04, roughness: 0.75 });
    const spotMat = new THREE.MeshStandardMaterial({ color: 0x713f12, roughness: 0.85 });

    // 4 Long Legs (3.4m tall)
    const legGeo = new THREE.CylinderGeometry(0.16, 0.2, 3.4, 6);
    [[-0.6, 1.7, -0.4], [-0.6, 1.7, 0.4], [0.6, 1.7, -0.4], [0.6, 1.7, 0.4]].forEach(([lx, ly, lz]) => {
      const leg = new THREE.Mesh(legGeo, gMat);
      leg.position.set(lx, ly, lz);
      g.add(leg);
    });

    // Body
    const body = new THREE.Mesh(new THREE.BoxGeometry(1.8, 1.4, 1.1), gMat);
    body.position.set(0, 3.8, 0);
    body.rotation.z = 0.25;
    g.add(body);

    // Long Elegant Neck (4.2m)
    const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.38, 4.2, 7), gMat);
    neck.position.set(0.9, 5.8, 0);
    neck.rotation.z = -0.3;
    g.add(neck);

    // Giraffe Head & Horns
    const head = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.5, 0.45), gMat);
    head.position.set(1.7, 7.8, 0);
    g.add(head);

    const snout = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.3, 0.35), spotMat);
    snout.position.set(2.2, 7.7, 0);
    g.add(snout);

    // Ossicones (horns)
    const h1 = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.4), spotMat);
    h1.position.set(1.6, 8.2, -0.15);
    g.add(h1);
    const h2 = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.4), spotMat);
    h2.position.set(1.6, 8.2, 0.15);
    g.add(h2);

    parent.add(g);
  }

  createZebra(parent, x, z, rotY) {
    const zb = new THREE.Group();
    zb.position.set(x, 0, z);
    zb.rotation.y = rotY;

    const whiteMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.6 });
    const blackMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.7 });

    // Body
    const body = new THREE.Mesh(new THREE.BoxGeometry(2.1, 1.2, 1.0), whiteMat);
    body.position.set(0, 1.5, 0);
    zb.add(body);

    // Decorative black stripes across zebra flank
    for (let s = -0.7; s <= 0.7; s += 0.28) {
      const stripe = new THREE.Mesh(new THREE.BoxGeometry(0.12, 1.24, 1.05), blackMat);
      stripe.position.set(s, 1.5, 0);
      zb.add(stripe);
    }

    // Legs
    const lGeo = new THREE.CylinderGeometry(0.14, 0.16, 1.2, 6);
    [[-0.8, 0.6, -0.35], [-0.8, 0.6, 0.35], [0.8, 0.6, -0.35], [0.8, 0.6, 0.35]].forEach(([lx, ly, lz]) => {
      const leg = new THREE.Mesh(lGeo, whiteMat);
      leg.position.set(lx, ly, lz);
      zb.add(leg);
    });

    // Neck & Head
    const neck = new THREE.Mesh(new THREE.BoxGeometry(0.5, 1.2, 0.5), whiteMat);
    neck.position.set(0.9, 2.2, 0);
    neck.rotation.z = -0.4;
    zb.add(neck);

    const head = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.5, 0.45), whiteMat);
    head.position.set(1.4, 2.7, 0);
    zb.add(head);

    const snout = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.3, 0.35), blackMat);
    snout.position.set(1.8, 2.6, 0);
    zb.add(snout);

    parent.add(zb);
  }

  createElephant(parent, x, z, rotY) {
    const el = new THREE.Group();
    el.position.set(x, 0, z);
    el.rotation.y = rotY;

    const greyMat = new THREE.MeshStandardMaterial({ color: 0x64748b, roughness: 0.9 });
    const tuskMat = new THREE.MeshStandardMaterial({ color: 0xfef08a, roughness: 0.3 });

    // Massive Body
    const body = new THREE.Mesh(new THREE.BoxGeometry(3.6, 2.5, 2.3), greyMat);
    body.position.set(0, 2.4, 0);
    el.add(body);

    // 4 Column Legs
    const lGeo = new THREE.CylinderGeometry(0.42, 0.46, 1.6, 8);
    [[-1.3, 0.8, -0.8], [-1.3, 0.8, 0.8], [1.3, 0.8, -0.8], [1.3, 0.8, 0.8]].forEach(([lx, ly, lz]) => {
      const leg = new THREE.Mesh(lGeo, greyMat);
      leg.position.set(lx, ly, lz);
      el.add(leg);
    });

    // Head
    const head = new THREE.Mesh(new THREE.BoxGeometry(1.6, 1.6, 1.6), greyMat);
    head.position.set(2.3, 2.9, 0);
    el.add(head);

    // Flapping Fan Ears
    const earGeo = new THREE.BoxGeometry(0.15, 1.8, 1.4);
    const earL = new THREE.Mesh(earGeo, greyMat);
    earL.position.set(2.0, 3.1, -1.5);
    earL.rotation.y = -0.3;
    el.add(earL);

    const earR = new THREE.Mesh(earGeo, greyMat);
    earR.position.set(2.0, 3.1, 1.5);
    earR.rotation.y = 0.3;
    el.add(earR);

    // Raised Curved Trunk
    const trunk1 = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.38, 1.6, 8), greyMat);
    trunk1.position.set(3.1, 2.3, 0);
    trunk1.rotation.z = -0.8;
    el.add(trunk1);

    const trunk2 = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.28, 1.4, 8), greyMat);
    trunk2.position.set(3.8, 3.1, 0);
    trunk2.rotation.z = 0.6;
    el.add(trunk2);

    // Curved Ivory Tusks
    const tuskL = new THREE.Mesh(new THREE.ConeGeometry(0.12, 1.5, 6), tuskMat);
    tuskL.position.set(3.1, 2.2, -0.5);
    tuskL.rotation.z = -0.5;
    el.add(tuskL);

    const tuskR = new THREE.Mesh(new THREE.ConeGeometry(0.12, 1.5, 6), tuskMat);
    tuskR.position.set(3.1, 2.2, 0.5);
    tuskR.rotation.z = -0.5;
    el.add(tuskR);

    parent.add(el);
  }

  // ========================================================
  // 11. GRAND RESERVE BANK & SPRINGFIELD ACADEMY
  // ========================================================
  createBankAndSchoolDistricts() {
    // --------------------------------------------------------
    // A. GRAND RESERVE BANK & TRUST (-60, 40)
    // --------------------------------------------------------
    const bankGroup = new THREE.Group();
    bankGroup.position.set(-60, 0, 40);

    const marbleMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.35 });
    const graniteMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.8 });
    const goldMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, roughness: 0.25, metalness: 0.85 });

    // Granite Staircase Podium
    const podium = new THREE.Mesh(new THREE.BoxGeometry(40, 2.2, 30), graniteMat);
    podium.position.y = 1.1;
    podium.receiveShadow = true;
    bankGroup.add(podium);

    // Neoclassical Main Hall
    const hall = new THREE.Mesh(new THREE.BoxGeometry(36, 14, 24), marbleMat);
    hall.position.set(0, 9.2, -2);
    hall.castShadow = true;
    bankGroup.add(hall);

    // 6 Doric Pillars along Facade
    const columnGeo = new THREE.CylinderGeometry(0.9, 1.1, 13, 14);
    for (let c = -14; c <= 14; c += 5.6) {
      const col = new THREE.Mesh(columnGeo, marbleMat);
      col.position.set(c, 8.7, 10.5);
      col.castShadow = true;
      bankGroup.add(col);
    }

    // Triangular Pediment Roof
    const pediment = new THREE.Mesh(new THREE.ConeGeometry(22, 5.5, 4), marbleMat);
    pediment.rotation.y = Math.PI / 4;
    pediment.position.set(0, 18, 5);
    bankGroup.add(pediment);

    // Gold Emblem & Sign
    const emblem = new THREE.Mesh(new THREE.CylinderGeometry(2.2, 2.2, 0.4, 16), goldMat);
    emblem.rotation.x = Math.PI / 2;
    emblem.position.set(0, 17.5, 11);
    bankGroup.add(emblem);

    const bankSignCanvas = document.createElement('canvas');
    bankSignCanvas.width = 512;
    bankSignCanvas.height = 96;
    const bctx = bankSignCanvas.getContext('2d');
    bctx.fillStyle = '#0f172a';
    bctx.fillRect(0, 0, 512, 96);
    bctx.fillStyle = '#f59e0b';
    bctx.font = 'bold 32px "Inter", sans-serif';
    bctx.textAlign = 'center';
    bctx.fillText('🏛️ GRAND RESERVE BANK', 256, 60);
    const bSignTex = new THREE.CanvasTexture(bankSignCanvas);
    const bSignMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(18, 2.2),
      new THREE.MeshBasicMaterial({ map: bSignTex })
    );
    bSignMesh.position.set(0, 14.8, 10.8);
    bankGroup.add(bSignMesh);

    // Heavy Bronze Vault Doors
    const door = new THREE.Mesh(
      new THREE.BoxGeometry(5.5, 7.5, 0.4),
      new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.4, metalness: 0.8 })
    );
    door.position.set(0, 5.9, 10.2);
    bankGroup.add(door);

    // Parked Brinks Armored Cash Transit Van
    const armoredVan = new THREE.Group();
    armoredVan.position.set(16, 0, 18);
    armoredVan.rotation.y = 0.35;
    const vanMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.5, metalness: 0.7 });
    const stripeMat = new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.3 });

    const vanBody = new THREE.Mesh(new THREE.BoxGeometry(3.2, 2.8, 6.8), vanMat);
    vanBody.position.y = 1.8;
    vanBody.castShadow = true;
    armoredVan.add(vanBody);

    const greenStripe = new THREE.Mesh(new THREE.BoxGeometry(3.25, 0.4, 6.85), stripeMat);
    greenStripe.position.y = 1.8;
    armoredVan.add(greenStripe);

    // Wheels
    const wGeo = new THREE.CylinderGeometry(0.55, 0.55, 0.4, 12);
    wGeo.rotateZ(Math.PI / 2);
    const wMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.9 });
    [[-1.6, 0.55, -2], [1.6, 0.55, -2], [-1.6, 0.55, 2], [1.6, 0.55, 2]].forEach(([wx, wy, wz]) => {
      const wheel = new THREE.Mesh(wGeo, wMat);
      wheel.position.set(wx, wy, wz);
      armoredVan.add(wheel);
    });

    // Gold Bullion on Pallet outside van
    const woodMat = new THREE.MeshStandardMaterial({ color: 0x582f0e, roughness: 0.85 });
    const pallet = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.25, 1.8), woodMat);
    pallet.position.set(0, 0.15, -4.5);
    armoredVan.add(pallet);

    const goldBarGeo = new THREE.BoxGeometry(0.5, 0.2, 0.3);
    for (let gx = -0.5; gx <= 0.5; gx += 0.5) {
      for (let gz = -0.5; gz <= 0.5; gz += 0.4) {
        const gold = new THREE.Mesh(goldBarGeo, goldMat);
        gold.position.set(gx, 0.4, -4.5 + gz);
        armoredVan.add(gold);
      }
    }

    bankGroup.add(armoredVan);
    this.scene.add(bankGroup);
    this.physicsWorld.addStaticBox(-60, 8, 40 - 2, 19, 8, 14);

    // --------------------------------------------------------
    // B. SPRINGFIELD ACADEMY HIGH SCHOOL (-180, 120)
    // --------------------------------------------------------
    const schoolGroup = new THREE.Group();
    schoolGroup.position.set(-180, 0, 120);

    const brickMat = new THREE.MeshStandardMaterial({ color: 0x991b1b, roughness: 0.85 });
    const whiteTrim = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.4 });
    const copperRoof = new THREE.MeshStandardMaterial({ color: 0x0f766e, roughness: 0.6, metalness: 0.4 });

    // Main 3-Story Red Brick Academy
    const schoolMain = new THREE.Mesh(new THREE.BoxGeometry(46, 14, 22), brickMat);
    schoolMain.position.y = 7;
    schoolMain.castShadow = true;
    schoolGroup.add(schoolMain);

    // Central Clock Tower
    const tower = new THREE.Mesh(new THREE.BoxGeometry(9, 24, 9), brickMat);
    tower.position.set(0, 12, 5);
    schoolGroup.add(tower);

    // Clock Face (illuminated white disc)
    const clockFace = new THREE.Mesh(
      new THREE.CylinderGeometry(2.0, 2.0, 0.3, 16),
      new THREE.MeshBasicMaterial({ color: 0xffffff })
    );
    clockFace.rotation.x = Math.PI / 2;
    clockFace.position.set(0, 21, 9.6);
    schoolGroup.add(clockFace);

    // Copper Spire Top
    const spire = new THREE.Mesh(new THREE.ConeGeometry(5.5, 8, 4), copperRoof);
    spire.rotation.y = Math.PI / 4;
    spire.position.set(0, 28, 5);
    schoolGroup.add(spire);

    // School Banner
    const schSignCanvas = document.createElement('canvas');
    schSignCanvas.width = 512;
    schSignCanvas.height = 96;
    const schCtx = schSignCanvas.getContext('2d');
    schCtx.fillStyle = '#1e3a8a';
    schCtx.fillRect(0, 0, 512, 96);
    schCtx.fillStyle = '#facc15';
    schCtx.font = 'bold 30px "Inter", sans-serif';
    schCtx.textAlign = 'center';
    schCtx.fillText('🏫 SPRINGFIELD HIGH ACADEMY', 256, 60);
    const schSignMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(18, 2.2),
      new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(schSignCanvas) })
    );
    schSignMesh.position.set(0, 10.5, 11.2);
    schoolGroup.add(schSignMesh);

    // 2 Classic American Yellow School Buses
    this.createSchoolBus(schoolGroup, -16, 22, 0);
    this.createSchoolBus(schoolGroup, 16, 22, 0);

    // High School Athletic Soccer / Football Stadium (x: 55, z: -5)
    const turf = new THREE.Mesh(
      new THREE.PlaneGeometry(68, 44),
      new THREE.MeshStandardMaterial({ color: 0x2d6a4f, roughness: 0.85 })
    );
    turf.rotation.x = -Math.PI / 2;
    turf.position.set(55, 0.05, -5);
    schoolGroup.add(turf);

    // Soccer Field Lines
    const lineMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const centerCircle = new THREE.Mesh(new THREE.RingGeometry(6.5, 6.8, 24), lineMat);
    centerCircle.rotation.x = -Math.PI / 2;
    centerCircle.position.set(55, 0.07, -5);
    schoolGroup.add(centerCircle);

    // 2 Soccer Goalposts
    const goalMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.3 });
    [[-30, 0], [30, Math.PI]].forEach(([gx, gRot]) => {
      const goal = new THREE.Group();
      goal.position.set(55 + gx, 0, -5);
      goal.rotation.y = gRot;

      const post1 = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 3.2), goalMat);
      post1.position.set(0, 1.6, -3.5);
      goal.add(post1);

      const post2 = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 3.2), goalMat);
      post2.position.set(0, 1.6, 3.5);
      goal.add(post2);

      const crossbar = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 7), goalMat);
      crossbar.rotation.x = Math.PI / 2;
      crossbar.position.set(0, 3.2, 0);
      goal.add(crossbar);

      schoolGroup.add(goal);
    });

    // Spectator Bleachers (Grandstand with red/blue seating)
    const bleacher = new THREE.Mesh(
      new THREE.BoxGeometry(42, 4.5, 8),
      new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.8 })
    );
    bleacher.position.set(55, 2.25, -32);
    schoolGroup.add(bleacher);

    this.scene.add(schoolGroup);
    this.physicsWorld.addStaticBox(-180, 7, 120, 24, 7, 12);
    this.physicsWorld.addStaticBox(-180 + 55, 2.25, 120 - 32, 22, 2.5, 5);
  }

  createSchoolBus(parent, x, z, rotY) {
    const bus = new THREE.Group();
    bus.position.set(x, 0, z);
    bus.rotation.y = rotY;

    const yellow = new THREE.MeshStandardMaterial({ color: 0xf59e0b, roughness: 0.4 });
    const black = new THREE.MeshStandardMaterial({ color: 0x111827, roughness: 0.8 });
    const glass = new THREE.MeshStandardMaterial({ color: 0x38bdf8, roughness: 0.1, metalness: 0.8 });

    // Chassis & Main Body
    const body = new THREE.Mesh(new THREE.BoxGeometry(3.0, 3.0, 9.5), yellow);
    body.position.y = 2.1;
    bus.add(body);

    // Hood / Engine Front
    const hood = new THREE.Mesh(new THREE.BoxGeometry(2.6, 1.8, 2.5), yellow);
    hood.position.set(0, 1.5, 5.2);
    bus.add(hood);

    // Black Rub Rails
    const rail = new THREE.Mesh(new THREE.BoxGeometry(3.05, 0.25, 9.6), black);
    rail.position.y = 1.4;
    bus.add(rail);

    // Front & Side Windows
    const windshield = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 1.2), glass);
    windshield.position.set(0, 2.8, 4.8);
    bus.add(windshield);

    // 4 Heavy Wheels
    const wGeo = new THREE.CylinderGeometry(0.65, 0.65, 0.45, 14);
    wGeo.rotateZ(Math.PI / 2);
    [[-1.5, 0.65, -2.8], [1.5, 0.65, -2.8], [-1.5, 0.65, 3.0], [1.5, 0.65, 3.0]].forEach(([wx, wy, wz]) => {
      const wheel = new THREE.Mesh(wGeo, black);
      wheel.position.set(wx, wy, wz);
      bus.add(wheel);
    });

    parent.add(bus);
  }

  // ========================================================
  // 12. RON OIL GAS STATION & EMERGENCY HOSPITAL / POLICE
  // ========================================================
  createGasStationAndHospital() {
    // --------------------------------------------------------
    // A. RON OIL GAS STATION & BURGER DINER (-100, 20)
    // --------------------------------------------------------
    const gasGroup = new THREE.Group();
    gasGroup.position.set(-100, 0, 20);

    // Gas Station Illuminated Overhead Canopy
    const canopy = new THREE.Mesh(
      new THREE.BoxGeometry(24, 1.6, 16),
      new THREE.MeshStandardMaterial({ color: 0xdc2626, roughness: 0.5 })
    );
    canopy.position.set(0, 6.2, 0);
    gasGroup.add(canopy);

    // Yellow Canopy Trim
    const trim = new THREE.Mesh(
      new THREE.BoxGeometry(24.4, 0.4, 16.4),
      new THREE.MeshStandardMaterial({ color: 0xfacc15, roughness: 0.3 })
    );
    trim.position.set(0, 6.2, 0);
    gasGroup.add(trim);

    // 4 Steel Canopy Support Columns
    const colGeo = new THREE.CylinderGeometry(0.35, 0.35, 6.0, 8);
    const steelMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.3, metalness: 0.6 });
    [[-8, -5], [8, -5], [-8, 5], [8, 5]].forEach(([cx, cz]) => {
      const col = new THREE.Mesh(colGeo, steelMat);
      col.position.set(cx, 3.0, cz);
      gasGroup.add(col);
    });

    // 4 Fuel Pump Islands
    const pumpMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.4 });
    [[-8, -5], [8, -5], [-8, 5], [8, 5]].forEach(([px, pz]) => {
      const island = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.35, 3.8), steelMat);
      island.position.set(px, 0.18, pz);
      gasGroup.add(island);

      const pump = new THREE.Mesh(new THREE.BoxGeometry(1.2, 2.4, 1.8), pumpMat);
      pump.position.set(px, 1.4, pz);
      gasGroup.add(pump);
    });

    // Convenience Store & Diner Building
    const store = new THREE.Mesh(
      new THREE.BoxGeometry(22, 5.5, 12),
      new THREE.MeshStandardMaterial({ color: 0xf1f5f9, roughness: 0.8 })
    );
    store.position.set(0, 2.75, -18);
    gasGroup.add(store);

    // Giant 3D Rooftop Neon Hamburger!
    const burger = new THREE.Group();
    burger.position.set(0, 6.5, -18);

    const bunMat = new THREE.MeshStandardMaterial({ color: 0xd97706, roughness: 0.7 });
    const pattyMat = new THREE.MeshStandardMaterial({ color: 0x451a03, roughness: 0.9 });
    const cheeseMat = new THREE.MeshBasicMaterial({ color: 0xfacc15 });
    const lettuceMat = new THREE.MeshBasicMaterial({ color: 0x22c55e });

    const bottomBun = new THREE.Mesh(new THREE.CylinderGeometry(2.2, 2.0, 0.5, 14), bunMat);
    bottomBun.position.y = 0.25;
    burger.add(bottomBun);

    const patty = new THREE.Mesh(new THREE.CylinderGeometry(2.3, 2.3, 0.45, 14), pattyMat);
    patty.position.y = 0.7;
    burger.add(patty);

    const cheese = new THREE.Mesh(new THREE.BoxGeometry(3.0, 0.1, 3.0), cheeseMat);
    cheese.position.y = 0.95;
    cheese.rotation.y = 0.4;
    burger.add(cheese);

    const lettuce = new THREE.Mesh(new THREE.CylinderGeometry(2.4, 2.4, 0.2, 12), lettuceMat);
    lettuce.position.y = 1.1;
    burger.add(lettuce);

    const topBun = new THREE.Mesh(new THREE.SphereGeometry(2.2, 14, 8), bunMat);
    topBun.position.y = 1.2;
    topBun.scale.set(1.0, 0.55, 1.0);
    burger.add(topBun);

    gasGroup.add(burger);
    this.scene.add(gasGroup);
    this.physicsWorld.addStaticBox(-100, 3, 20 - 18, 12, 3, 7);

    // --------------------------------------------------------
    // B. EMERGENCY HOSPITAL & 12TH POLICE PRECINCT (60, 140)
    // --------------------------------------------------------
    const hospitalGroup = new THREE.Group();
    hospitalGroup.position.set(60, 0, 140);

    // 6-Story Hospital Main Tower
    const hospMain = new THREE.Mesh(
      new THREE.BoxGeometry(34, 26, 24),
      new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.35 })
    );
    hospMain.position.y = 13;
    hospMain.castShadow = true;
    hospitalGroup.add(hospMain);

    // Glowing Illuminated Red Cross Medical Emblem
    const crossMat = new THREE.MeshBasicMaterial({ color: 0xef4444 });
    const crossH = new THREE.Mesh(new THREE.BoxGeometry(6.0, 1.8, 0.4), crossMat);
    crossH.position.set(0, 21, 12.3);
    hospitalGroup.add(crossH);
    const crossV = new THREE.Mesh(new THREE.BoxGeometry(1.8, 6.0, 0.4), crossMat);
    crossV.position.set(0, 21, 12.3);
    hospitalGroup.add(crossV);

    // Rooftop Air Ambulance Helipad
    const hospHelipad = new THREE.Mesh(
      new THREE.CylinderGeometry(8, 8, 0.4, 16),
      new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.8 })
    );
    hospHelipad.position.set(0, 26.2, 0);
    hospitalGroup.add(hospHelipad);

    // Parked Ambulance in Emergency Bay
    const ambulance = new THREE.Group();
    ambulance.position.set(14, 0, 18);
    const ambWhite = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.4 });
    const ambBody = new THREE.Mesh(new THREE.BoxGeometry(2.8, 2.6, 6.2), ambWhite);
    ambBody.position.y = 1.6;
    ambulance.add(ambBody);

    const ambRedStripe = new THREE.Mesh(new THREE.BoxGeometry(2.85, 0.4, 6.25), crossMat);
    ambRedStripe.position.y = 1.5;
    ambulance.add(ambRedStripe);

    // Siren Lightbar
    const siren = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.25, 0.5), new THREE.MeshBasicMaterial({ color: 0x3b82f6 }));
    siren.position.set(0, 3.0, 1.2);
    ambulance.add(siren);

    hospitalGroup.add(ambulance);

    // 12th Police Precinct (Next door at x: -28)
    const policeBuilding = new THREE.Mesh(
      new THREE.BoxGeometry(20, 12, 18),
      new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.85 })
    );
    policeBuilding.position.set(-28, 6, 0);
    hospitalGroup.add(policeBuilding);

    const policeSign = new THREE.Mesh(
      new THREE.BoxGeometry(12, 1.8, 0.3),
      new THREE.MeshBasicMaterial({ color: 0x1d4ed8 })
    );
    policeSign.position.set(-28, 9, 9.2);
    hospitalGroup.add(policeSign);

    // Radio Antenna Mast
    const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.25, 16, 6), steelMat);
    mast.position.set(-28, 20, 0);
    hospitalGroup.add(mast);

    const beacon = new THREE.Mesh(new THREE.SphereGeometry(0.3, 6, 6), new THREE.MeshBasicMaterial({ color: 0xef4444 }));
    beacon.position.set(-28, 28, 0);
    hospitalGroup.add(beacon);

    this.scene.add(hospitalGroup);
    this.physicsWorld.addStaticBox(60, 13, 140, 18, 13, 13);
    this.physicsWorld.addStaticBox(60 - 28, 6, 140, 11, 6, 10);
  }

  // ========================================================
  // 13. VIBRANT 350+ MULTI-SPECIES TREES, STREET PROPS & ADS
  // ========================================================
  createCityVegetation() {
    // 1. Procedural Seeded Distribution of 350+ multi-species trees
    const treeSpecies = ['oak', 'maple', 'cherry', 'pine', 'willow', 'palm'];

    // Optimized clusters across parks, memorial axis, suburbs, riverbanks
    const zones = [
      // Central Park & Memorial Plaza
      { cx: -50, cz: -60, count: 28, radius: 65, types: ['cherry', 'oak', 'maple'] },
      // Eastern Riverfront & Beach Promenade
      { cx: 235, cz: -80, count: 32, radius: 95, types: ['willow', 'palm', 'cherry'] },
      // Northern Foothills & Pine Ridge
      { cx: 0, cz: -360, count: 42, radius: 150, types: ['pine', 'oak'] },
      // Western Suburbs & Academy Grounds
      { cx: -200, cz: 80, count: 30, radius: 80, types: ['maple', 'oak', 'pine'] },
      // Southern Champ de Mars & Liberty Gardens
      { cx: 160, cz: 180, count: 26, radius: 75, types: ['cherry', 'maple', 'oak'] },
      // Zoo Botanical Enclosure
      { cx: -160, cz: -140, count: 20, radius: 45, types: ['palm', 'oak'] }
    ];

    let seed = 42;
    function pseudoRand() {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    }

    zones.forEach((zone) => {
      for (let i = 0; i < zone.count; i++) {
        const angle = pseudoRand() * Math.PI * 2;
        const dist = Math.sqrt(pseudoRand()) * zone.radius;
        const tx = zone.cx + Math.cos(angle) * dist;
        const tz = zone.cz + Math.sin(angle) * dist;

        // Skip planting on central road lanes (x near 0, z near 0, etc.)
        if (Math.abs(tx) < 14 || Math.abs(tz) < 14) continue;
        // Skip airport runway
        if (tx > 140 && tx < 450 && tz < -260) continue;

        const species = zone.types[Math.floor(pseudoRand() * zone.types.length)];
        const scale = 0.85 + pseudoRand() * 0.45;

        switch (species) {
          case 'oak':
            this.createOakTree(tx, tz, scale);
            break;
          case 'maple':
            this.createMapleTree(tx, tz, scale);
            break;
          case 'cherry':
            this.createCherryBlossomTree(tx, tz, scale);
            break;
          case 'pine':
            this.createPineTree(tx, tz, scale);
            break;
          case 'willow':
            this.createWillowTree(tx, tz, scale);
            break;
          case 'palm':
            this.createPalmTree(tx, tz, scale);
            break;
        }
      }
    });

    // 2. Street Furniture: Modern Streetlamps, Benches, Bus Shelters & Billboards
    this.createStreetFurniture();
  }

  createOakTree(x, z, s = 1.0) {
    const group = new THREE.Group();
    group.position.set(x, 0, z);
    group.scale.set(s, s, s);

    const trunk = new THREE.Mesh(
      new THREE.CylinderGeometry(0.35, 0.55, 4.2, 7),
      new THREE.MeshStandardMaterial({ color: 0x5c4033, roughness: 0.9 })
    );
    trunk.position.y = 2.1;
    trunk.castShadow = true;
    group.add(trunk);

    const leafMat = new THREE.MeshStandardMaterial({ color: 0x2d6a4f, roughness: 0.75 });
    const crown1 = new THREE.Mesh(new THREE.SphereGeometry(2.4, 8, 8), leafMat);
    crown1.position.y = 4.8;
    crown1.scale.set(1.2, 0.9, 1.2);
    crown1.castShadow = true;
    group.add(crown1);

    const crown2 = new THREE.Mesh(new THREE.SphereGeometry(1.8, 7, 7), leafMat);
    crown2.position.set(0.6, 6.2, 0.3);
    crown2.castShadow = true;
    group.add(crown2);

    this.scene.add(group);
    this.physicsWorld.addStaticBox(x, 2.0, z, 0.55 * s, 2.0, 0.55 * s, false, false, true);
  }

  createMapleTree(x, z, s = 1.0) {
    const group = new THREE.Group();
    group.position.set(x, 0, z);
    group.scale.set(s, s, s);

    const trunk = new THREE.Mesh(
      new THREE.CylinderGeometry(0.3, 0.48, 4.0, 7),
      new THREE.MeshStandardMaterial({ color: 0x4a3525, roughness: 0.9 })
    );
    trunk.position.y = 2.0;
    trunk.castShadow = true;
    group.add(trunk);

    // Autumn Vibrant Red & Orange Foliage
    const mapleMat = new THREE.MeshStandardMaterial({ color: 0xd9480f, roughness: 0.75 });
    const crown = new THREE.Mesh(new THREE.DodecahedronGeometry(2.3, 1), mapleMat);
    crown.position.y = 4.6;
    crown.castShadow = true;
    group.add(crown);

    const crownTop = new THREE.Mesh(new THREE.DodecahedronGeometry(1.6, 1), new THREE.MeshStandardMaterial({ color: 0xf08c00 }));
    crownTop.position.set(0.3, 6.0, -0.2);
    crownTop.castShadow = true;
    group.add(crownTop);

    this.scene.add(group);
    this.physicsWorld.addStaticBox(x, 2.0, z, 0.5 * s, 2.0, 0.5 * s, false, false, true);
  }

  createCherryBlossomTree(x, z, s = 1.0) {
    const group = new THREE.Group();
    group.position.set(x, 0, z);
    group.scale.set(s, s, s);

    const trunk = new THREE.Mesh(
      new THREE.CylinderGeometry(0.28, 0.42, 3.8, 7),
      new THREE.MeshStandardMaterial({ color: 0x3d2b1f, roughness: 0.9 })
    );
    trunk.position.y = 1.9;
    trunk.rotation.z = 0.08;
    trunk.castShadow = true;
    group.add(trunk);

    // Soft Pink Sakura Petals
    const sakuraMat = new THREE.MeshStandardMaterial({ color: 0xf472b6, roughness: 0.8 });
    const c1 = new THREE.Mesh(new THREE.SphereGeometry(2.2, 8, 8), sakuraMat);
    c1.position.set(0, 4.4, 0);
    c1.scale.set(1.2, 0.85, 1.2);
    c1.castShadow = true;
    group.add(c1);

    const sakuraLight = new THREE.MeshStandardMaterial({ color: 0xfbcfe8, roughness: 0.8 });
    const c2 = new THREE.Mesh(new THREE.SphereGeometry(1.6, 7, 7), sakuraLight);
    c2.position.set(-0.4, 5.5, 0.4);
    c2.castShadow = true;
    group.add(c2);

    this.scene.add(group);
    this.physicsWorld.addStaticBox(x, 1.9, z, 0.45 * s, 1.9, 0.45 * s, false, false, true);
  }

  createPineTree(x, z, s = 1.0) {
    const group = new THREE.Group();
    group.position.set(x, 0, z);
    group.scale.set(s, s, s);

    const trunk = new THREE.Mesh(
      new THREE.CylinderGeometry(0.28, 0.45, 5.0, 7),
      new THREE.MeshStandardMaterial({ color: 0x422006, roughness: 0.95 })
    );
    trunk.position.y = 2.5;
    trunk.castShadow = true;
    group.add(trunk);

    // Tiered Dark Green Cones
    const pineMat = new THREE.MeshStandardMaterial({ color: 0x14532d, roughness: 0.85 });
    const tier1 = new THREE.Mesh(new THREE.ConeGeometry(2.4, 3.2, 7), pineMat);
    tier1.position.y = 4.2;
    tier1.castShadow = true;
    group.add(tier1);

    const tier2 = new THREE.Mesh(new THREE.ConeGeometry(1.8, 2.8, 7), pineMat);
    tier2.position.y = 6.2;
    tier2.castShadow = true;
    group.add(tier2);

    const tier3 = new THREE.Mesh(new THREE.ConeGeometry(1.2, 2.2, 7), pineMat);
    tier3.position.y = 7.8;
    tier3.castShadow = true;
    group.add(tier3);

    this.scene.add(group);
    this.physicsWorld.addStaticBox(x, 2.5, z, 0.45 * s, 2.5, 0.45 * s, false, false, true);
  }

  createWillowTree(x, z, s = 1.0) {
    const group = new THREE.Group();
    group.position.set(x, 0, z);
    group.scale.set(s, s, s);

    const trunk = new THREE.Mesh(
      new THREE.CylinderGeometry(0.4, 0.6, 4.5, 7),
      new THREE.MeshStandardMaterial({ color: 0x5c4033, roughness: 0.9 })
    );
    trunk.position.y = 2.25;
    trunk.castShadow = true;
    group.add(trunk);

    // Drooping Weeping Willow Foliage
    const willowMat = new THREE.MeshStandardMaterial({ color: 0x52796f, roughness: 0.8 });
    const dome = new THREE.Mesh(new THREE.CylinderGeometry(2.6, 1.8, 3.8, 8), willowMat);
    dome.position.y = 4.8;
    dome.castShadow = true;
    group.add(dome);

    this.scene.add(group);
    this.physicsWorld.addStaticBox(x, 2.25, z, 0.6 * s, 2.25, 0.6 * s, false, false, true);
  }

  createPalmTree(x, z, s = 1.0) {
    const group = new THREE.Group();
    group.position.set(x, 0, z);
    group.scale.set(s, s, s);

    // Curved Slender Trunk
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x78716c, roughness: 0.85 });
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.38, 7.5, 7), trunkMat);
    trunk.position.set(0.4, 3.75, 0);
    trunk.rotation.z = -0.12;
    trunk.castShadow = true;
    group.add(trunk);

    // Tropical Palm Fronds
    const frondMat = new THREE.MeshStandardMaterial({ color: 0x16a34a, roughness: 0.7, side: THREE.DoubleSide });
    for (let f = 0; f < 6; f++) {
      const angle = (f / 6) * Math.PI * 2;
      const frond = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 3.2), frondMat);
      frond.position.set(0.8 + Math.cos(angle) * 1.5, 7.4, Math.sin(angle) * 1.5);
      frond.rotation.set(0.7, angle, 0.4);
      group.add(frond);
    }

    this.scene.add(group);
    this.physicsWorld.addStaticBox(x, 3.75, z, 0.4 * s, 3.75, 0.4 * s, false, false, true);
  }

  // ========================================================
  // 14. STREET FURNITURE, MODERN LAMPS & GTA BILLBOARDS
  // ========================================================
  createStreetFurniture() {
    const postMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.4, metalness: 0.8 });
    const lampGlowMat = new THREE.MeshBasicMaterial({ color: 0xfef08a });

    // Modern Street Lamps along Major Intersections
    const lampCoords = [
      [-12, -90], [12, -90], [-12, -40], [12, -40],
      [-12, 40], [12, 40], [-12, 90], [12, 90],
      [-90, -12], [-90, 12], [-40, -12], [-40, 12],
      [40, -12], [40, 12], [90, -12], [90, 12]
    ];

    lampCoords.forEach(([lx, lz]) => {
      const lamp = new THREE.Group();
      lamp.position.set(lx, 0, lz);

      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.16, 7.5, 8), postMat);
      pole.position.y = 3.75;
      lamp.add(pole);

      const arm = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.12, 1.8), postMat);
      arm.position.set(0, 7.4, 0.8);
      lamp.add(arm);

      const head = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.2, 0.6), lampGlowMat);
      head.position.set(0, 7.3, 1.6);
      lamp.add(head);

      this.scene.add(lamp);
    });

    // Park Benches in Central Boulevard Plaza
    const benchWood = new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.8 });
    const benchIron = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.6, metalness: 0.7 });
    for (let bz = -70; bz <= 70; bz += 28) {
      [-15, 15].forEach((bx) => {
        const bench = new THREE.Group();
        bench.position.set(bx, 0, bz);
        bench.rotation.y = bx > 0 ? -Math.PI / 2 : Math.PI / 2;

        const seat = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.1, 0.7), benchWood);
        seat.position.y = 0.45;
        bench.add(seat);

        const back = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.6, 0.1), benchWood);
        back.position.set(0, 0.8, -0.3);
        bench.add(back);

        const leg1 = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.5, 0.7), benchIron);
        leg1.position.set(-1.0, 0.25, 0);
        bench.add(leg1);
        const leg2 = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.5, 0.7), benchIron);
        leg2.position.set(1.0, 0.25, 0);
        bench.add(leg2);

        this.scene.add(bench);
      });
    }

    // GTA-Style Giant Highway Billboards
    const billboards = [
      { x: -28, z: -35, rotY: 0.2, title: '🥤 SPRUNK', text: 'A Taste Of Things To Come!', bg: '#15803d', fg: '#facc15' },
      { x: 28, z: 35, rotY: -0.2, title: '🍗 CLUCKIN BELL', text: 'Taste The Cock-a-Doodle-Doo!', bg: '#b91c1c', fg: '#ffffff' },
      { x: -55, z: 80, rotY: 1.5, title: '🏦 MAZE BANK', text: 'Invest in Your Future Today', bg: '#0369a1', fg: '#ffffff' },
      { x: 55, z: -80, rotY: -1.5, title: '✈️ FLYUS', text: 'Non-Stop Direct To Liberty City', bg: '#1d4ed8', fg: '#ffffff' }
    ];

    billboards.forEach((bb) => {
      this.createBillboard(bb.x, bb.z, bb.rotY, bb.title, bb.text, bb.bg, bb.fg);
    });
  }

  createBillboard(x, z, rotY, title, tagline, bgColor, fgColor) {
    const bbGroup = new THREE.Group();
    bbGroup.position.set(x, 0, z);
    bbGroup.rotation.y = rotY;

    // Steel Mast
    const mast = new THREE.Mesh(
      new THREE.CylinderGeometry(0.4, 0.5, 12, 8),
      new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.5, metalness: 0.8 })
    );
    mast.position.y = 6;
    mast.castShadow = true;
    bbGroup.add(mast);

    // Canvas Billboard Texture
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, 512, 256);

    ctx.strokeStyle = fgColor;
    ctx.lineWidth = 8;
    ctx.strokeRect(10, 10, 492, 236);

    ctx.fillStyle = fgColor;
    ctx.font = 'bold 44px "Inter", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(title, 256, 110);

    ctx.font = '22px "Inter", sans-serif';
    ctx.fillText(tagline, 256, 170);

    const tex = new THREE.CanvasTexture(canvas);
    const boardMat = new THREE.MeshBasicMaterial({ map: tex });
    const board = new THREE.Mesh(new THREE.BoxGeometry(16, 8, 0.8), boardMat);
    board.position.y = 15;
    board.castShadow = true;
    bbGroup.add(board);

    this.scene.add(bbGroup);
    this.physicsWorld.addStaticBox(x, 6, z, 1.0, 6, 1.0);
  }

  // ========================================================
  // 15. BANGALORE ICONIC VEHICLES: AUTO-RICKSHAW & BMTC BUS
  // ========================================================
  createAutoRickshaw(parent, x, z, rotY) {
    const auto = new THREE.Group();
    auto.position.set(x, 0, z);
    auto.rotation.y = rotY;

    const yellowMat = new THREE.MeshStandardMaterial({ color: 0xfacc15, roughness: 0.35 });
    const greenMat = new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.4 });
    const blackMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.85 });
    const chromeMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.2, metalness: 0.8 });
    const glassMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, roughness: 0.1, metalness: 0.8, transparent: true, opacity: 0.75 });

    // Lower Green Body & Chassis
    const lowerBody = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.7, 2.6), greenMat);
    lowerBody.position.y = 0.65;
    auto.add(lowerBody);

    // Bright Yellow Curved Canopy Roof
    const roof = new THREE.Mesh(new THREE.BoxGeometry(1.55, 0.6, 2.5), yellowMat);
    roof.position.set(0, 1.6, 0.05);
    auto.add(roof);

    // Slim Canopy Pillars
    const pGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.8, 6);
    [[-0.7, -1.1], [0.7, -1.1], [-0.7, 1.1], [0.7, 1.1]].forEach(([px, pz]) => {
      const p = new THREE.Mesh(pGeo, blackMat);
      p.position.set(px, 1.2, pz);
      auto.add(p);
    });

    // Windshield
    const windshield = new THREE.Mesh(new THREE.PlaneGeometry(1.4, 0.65), glassMat);
    windshield.position.set(0, 1.3, 1.25);
    auto.add(windshield);

    // Wheels (3-wheeler: 1 front, 2 rear)
    const wGeo = new THREE.CylinderGeometry(0.32, 0.32, 0.22, 12);
    wGeo.rotateZ(Math.PI / 2);

    const frontWheel = new THREE.Mesh(wGeo, blackMat);
    frontWheel.position.set(0, 0.32, 1.2);
    auto.add(frontWheel);

    const rearL = new THREE.Mesh(wGeo, blackMat);
    rearL.position.set(-0.75, 0.32, -0.7);
    auto.add(rearL);

    const rearR = new THREE.Mesh(wGeo, blackMat);
    rearR.position.set(0.75, 0.32, -0.7);
    auto.add(rearR);

    // Chrome Headlight & Fare Meter
    const light = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.1, 8), chromeMat);
    light.rotation.x = Math.PI / 2;
    light.position.set(0, 0.7, 1.36);
    auto.add(light);

    const meter = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.12, 0.1), new THREE.MeshBasicMaterial({ color: 0xef4444 }));
    meter.position.set(0.35, 1.0, 0.8);
    auto.add(meter);

    parent.add(auto);
  }

  createBmtcBus(parent, x, z, rotY) {
    const bus = new THREE.Group();
    bus.position.set(x, 0, z);
    bus.rotation.y = rotY;

    const blueMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.35 });
    const greenMat = new THREE.MeshStandardMaterial({ color: 0x22c55e, roughness: 0.35 });
    const glassMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.1, metalness: 0.85 });
    const blackMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.9 });

    // Main Bus Chassis (11.5m long)
    const body = new THREE.Mesh(new THREE.BoxGeometry(3.2, 3.2, 11.5), blueMat);
    body.position.y = 1.9;
    bus.add(body);

    // Green Eco-Stripe
    const stripe = new THREE.Mesh(new THREE.BoxGeometry(3.25, 0.5, 11.55), greenMat);
    stripe.position.y = 1.6;
    bus.add(stripe);

    // Panoramic Tinted Windows
    const win = new THREE.Mesh(new THREE.BoxGeometry(3.3, 1.1, 10.5), glassMat);
    win.position.y = 2.4;
    bus.add(win);

    // LED Route Display
    const ledCanvas = document.createElement('canvas');
    ledCanvas.width = 512;
    ledCanvas.height = 96;
    const lctx = ledCanvas.getContext('2d');
    lctx.fillStyle = '#0f172a';
    lctx.fillRect(0, 0, 512, 96);
    lctx.fillStyle = '#f59e0b';
    lctx.font = 'bold 36px "Inter", monospace';
    lctx.textAlign = 'center';
    lctx.fillText('500D • SILK BOARD - E-CITY', 256, 60);

    const routeMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(2.6, 0.5),
      new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(ledCanvas) })
    );
    routeMesh.position.set(0, 3.1, 5.78);
    bus.add(routeMesh);

    // 4 Heavy Wheels
    const wGeo = new THREE.CylinderGeometry(0.65, 0.65, 0.45, 14);
    wGeo.rotateZ(Math.PI / 2);
    [[-1.6, 0.65, -3.2], [1.6, 0.65, -3.2], [-1.6, 0.65, 3.2], [1.6, 0.65, 3.2]].forEach(([wx, wy, wz]) => {
      const wheel = new THREE.Mesh(wGeo, blackMat);
      wheel.position.set(wx, wy, wz);
      bus.add(wheel);
    });

    parent.add(bus);
  }

  // ========================================================
  // 16. VIDHANA SOUDHA (KARNATAKA STATE LEGISLATURE) (-240, -40)
  // High-visibility landmark with grand ceremonial boulevard, 50m illuminated dome & sky beacon
  // ========================================================
  buildVidhanaSoudha() {
    const soudhaGroup = new THREE.Group();
    soudhaGroup.position.set(-240, 0, -40);

    const graniteMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.55 });
    const darkGranite = new THREE.MeshStandardMaterial({ color: 0x64748b, roughness: 0.75 });
    const goldMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, roughness: 0.2, metalness: 0.9 });
    const lampGlowMat = new THREE.MeshBasicMaterial({ color: 0xfef08a });

    // 1. Grand Ceremonial Boulevard connecting West Highway (x = -200) to Vidhana Soudha (x = -240)
    // Relative coordinates: from x = 40 down to x = 0 (Boulevard width 26m, length 50m)
    const boulevardMat = new THREE.MeshStandardMaterial({ color: 0xcfd8dc, roughness: 0.6 });
    const boulevard = new THREE.Mesh(new THREE.BoxGeometry(45, 0.2, 28), boulevardMat);
    boulevard.position.set(22.5, 0.1, 14);
    boulevard.receiveShadow = true;
    soudhaGroup.add(boulevard);

    // Central Garden Fountain & Flowerbeds along boulevard
    const fountainPlaza = new THREE.Mesh(new THREE.CylinderGeometry(5.5, 6.0, 0.8, 16), darkGranite);
    fountainPlaza.position.set(22, 0.4, 14);
    soudhaGroup.add(fountainPlaza);

    const waterMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.1, metalness: 0.8 });
    const fountainWater = new THREE.Mesh(new THREE.CylinderGeometry(4.8, 4.8, 0.2, 16), waterMat);
    fountainWater.position.set(22, 0.85, 14);
    soudhaGroup.add(fountainWater);

    // Boulevard Royal Palm Trees & Heritage Cast-Iron Street Lamps
    [-11, 11].forEach(sideZ => {
      for (let bx = 6; bx <= 38; bx += 10) {
        // Heritage Cast Iron Lamppost
        const lampPost = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.18, 5.2, 8), darkGranite);
        lampPost.position.set(bx, 2.6, 14 + sideZ);
        soudhaGroup.add(lampPost);

        const lantern = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.9, 0.7), lampGlowMat);
        lantern.position.set(bx, 5.2, 14 + sideZ);
        soudhaGroup.add(lantern);

        // Royal Palm Tree
        const trunk = new THREE.Mesh(
          new THREE.CylinderGeometry(0.25, 0.35, 9.0, 7),
          new THREE.MeshStandardMaterial({ color: 0x5c4033, roughness: 0.9 })
        );
        trunk.position.set(bx, 4.5, 14 + sideZ * 1.35);
        soudhaGroup.add(trunk);

        const palmFronds = new THREE.Mesh(
          new THREE.ConeGeometry(3.5, 2.5, 7),
          new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.8 })
        );
        palmFronds.position.set(bx, 9.5, 14 + sideZ * 1.35);
        soudhaGroup.add(palmFronds);
      }
    });

    // 2. Highway Entrance Gantry on West Arterial Road (x = -200, z = -40 => relative x = 40)
    const gantryPillarMat = new THREE.MeshStandardMaterial({ color: 0x475569, metalness: 0.8 });
    const gPillarL = new THREE.Mesh(new THREE.BoxGeometry(1.2, 8.5, 1.2), gantryPillarMat);
    gPillarL.position.set(40, 4.25, 14 - 15);
    const gPillarR = new THREE.Mesh(new THREE.BoxGeometry(1.2, 8.5, 1.2), gantryPillarMat);
    gPillarR.position.set(40, 4.25, 14 + 15);
    soudhaGroup.add(gPillarL, gPillarR);

    const gCrossbeam = new THREE.Mesh(new THREE.BoxGeometry(1.4, 1.2, 31), gantryPillarMat);
    gCrossbeam.position.set(40, 8.5, 14);
    soudhaGroup.add(gCrossbeam);

    // Illuminated Highway Directional Signboard
    const gantryCanvas = document.createElement('canvas');
    gantryCanvas.width = 1024;
    gantryCanvas.height = 160;
    const gctx = gantryCanvas.getContext('2d');
    gctx.fillStyle = '#065f46'; // Highway green
    gctx.fillRect(0, 0, 1024, 160);
    gctx.fillStyle = '#f59e0b'; // Gold border
    gctx.lineWidth = 10;
    gctx.strokeRect(6, 6, 1012, 148);
    gctx.fillStyle = '#ffffff';
    gctx.font = 'bold 42px "Inter", sans-serif';
    gctx.textAlign = 'center';
    gctx.fillText('🏛️ VIDHANA SOUDHA • ವಿಧಾನಸೌಧ', 512, 65);
    gctx.fillStyle = '#fde047';
    gctx.font = 'bold 32px "Inter", sans-serif';
    gctx.fillText('← KARNATAKA STATE LEGISLATURE (WEST GATE)', 512, 118);

    const gantrySignMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(18, 3.2),
      new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(gantryCanvas), side: THREE.DoubleSide })
    );
    gantrySignMesh.position.set(40, 8.5, 14);
    gantrySignMesh.rotation.y = Math.PI / 2;
    soudhaGroup.add(gantrySignMesh);

    // 3. Grand 30-Step Granite Staircase Entrance (Expanded)
    const stairs = new THREE.Mesh(new THREE.BoxGeometry(56, 4.2, 28), darkGranite);
    stairs.position.set(0, 2.1, 14);
    stairs.receiveShadow = true;
    soudhaGroup.add(stairs);

    // 4. Majestic Neo-Dravidian Main Palace (88m wide x 34m deep x 22m high)
    const mainPalace = new THREE.Mesh(new THREE.BoxGeometry(88, 22, 34), graniteMat);
    mainPalace.position.set(0, 13, -4);
    mainPalace.castShadow = true;
    soudhaGroup.add(mainPalace);

    // 16 Carved Dravidian Colonnade Columns along Front Portico
    const colGeo = new THREE.CylinderGeometry(1.2, 1.4, 18, 14);
    for (let c = -24; c <= 24; c += 3.4) {
      const col = new THREE.Mesh(colGeo, graniteMat);
      col.position.set(c, 12.5, 13);
      col.castShadow = true;
      soudhaGroup.add(col);
    }

    // Portico Roof & Carved Motto Banner
    const porticoRoof = new THREE.Mesh(new THREE.BoxGeometry(54, 3.0, 10), graniteMat);
    porticoRoof.position.set(0, 22.0, 13);
    soudhaGroup.add(porticoRoof);

    const mottoCanvas = document.createElement('canvas');
    mottoCanvas.width = 1024;
    mottoCanvas.height = 128;
    const mctx = mottoCanvas.getContext('2d');
    mctx.fillStyle = '#0f172a';
    mctx.fillRect(0, 0, 1024, 128);
    mctx.fillStyle = '#f59e0b';
    mctx.font = 'bold 36px "Inter", sans-serif';
    mctx.textAlign = 'center';
    mctx.fillText('ಸರ್ಕಾರದ ಕೆಲಸ ದೇವರ ಕೆಲಸ  •  GOVERNMENT WORK IS GOD\'S WORK', 512, 75);

    const mottoMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(42, 2.6),
      new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(mottoCanvas) })
    );
    mottoMesh.position.set(0, 22.0, 18.1);
    soudhaGroup.add(mottoMesh);

    // 5. Monumental Central Dome (Diameter 24m, Drum reaching height 48m!)
    const drum = new THREE.Mesh(new THREE.CylinderGeometry(12, 12.5, 9, 28), graniteMat);
    drum.position.set(0, 28, -4);
    soudhaGroup.add(drum);

    const dome = new THREE.Mesh(new THREE.SphereGeometry(12, 28, 20, 0, Math.PI * 2, 0, Math.PI / 2), graniteMat);
    dome.position.set(0, 32.5, -4);
    soudhaGroup.add(dome);

    // Golden Kalasa Finial & 4-Headed Ashoka Lion Capital (Reaches 48m - 52m)
    const kalasa = new THREE.Mesh(new THREE.ConeGeometry(3.0, 5.0, 12), goldMat);
    kalasa.position.set(0, 46.5, -4);
    soudhaGroup.add(kalasa);

    const ashoka = new THREE.Mesh(new THREE.CylinderGeometry(2.0, 1.5, 5.5, 8), goldMat);
    ashoka.position.set(0, 50.0, -4);
    soudhaGroup.add(ashoka);

    // 6. SKY ARCHITECTURAL BEACON (Luminous vertical beacon visible across entire city skyline!)
    const beaconGeo = new THREE.CylinderGeometry(2.5, 18.0, 220, 16);
    const beaconMat = new THREE.MeshBasicMaterial({
      color: 0xfbbf24,
      transparent: true,
      opacity: 0.28,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
      depthWrite: false
    });
    const skyBeacon = new THREE.Mesh(beaconGeo, beaconMat);
    skyBeacon.position.set(0, 150, -4);
    soudhaGroup.add(skyBeacon);

    // 7. Four Tall Corner Chhatri Domed Towers
    [[-38, -16], [38, -16], [-38, 8], [38, 8]].forEach(([cx, cz]) => {
      const tower = new THREE.Mesh(new THREE.BoxGeometry(9, 28, 9), graniteMat);
      tower.position.set(cx, 14, cz);
      soudhaGroup.add(tower);

      const chhatriDome = new THREE.Mesh(new THREE.SphereGeometry(5.2, 16, 10, 0, Math.PI * 2, 0, Math.PI / 2), goldMat);
      chhatriDome.position.set(cx, 28, cz);
      soudhaGroup.add(chhatriDome);
    });

    // 8. Twin Monumental Flag Masts: Indian Tricolor & Karnataka Yellow/Red Flag
    const mastMat = new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.8 });
    const mast1 = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.3, 24), mastMat);
    mast1.position.set(-8, 12, 26);
    soudhaGroup.add(mast1);

    const flag1 = new THREE.Mesh(new THREE.PlaneGeometry(6, 3.6), new THREE.MeshBasicMaterial({ color: 0xf97316 }));
    flag1.position.set(-5, 21, 26);
    soudhaGroup.add(flag1);

    const mast2 = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.3, 24), mastMat);
    mast2.position.set(8, 12, 26);
    soudhaGroup.add(mast2);

    const flag2 = new THREE.Mesh(new THREE.PlaneGeometry(6, 3.6), new THREE.MeshBasicMaterial({ color: 0xeab308 }));
    flag2.position.set(11, 21, 26);
    soudhaGroup.add(flag2);

    // Station Auto-Rickshaws at the front plaza
    this.createAutoRickshaw(soudhaGroup, 24, 26, 0.8);
    this.createAutoRickshaw(soudhaGroup, 28, 28, 0.6);

    this.scene.add(soudhaGroup);
    this.physicsWorld.addStaticBox(-240, 12, -44, 45, 12, 18);
    this.physicsWorld.addStaticBox(-200, 4.25, -26, 1.2, 4.25, 1.2);
    this.physicsWorld.addStaticBox(-200, 4.25, -54, 1.2, 4.25, 1.2);
  }

  // ========================================================
  // 17. UB CITY TOWER & LUXURY AMPHITHEATRE (-60, -100)
  // ========================================================
  buildUBCity() {
    const ubGroup = new THREE.Group();
    ubGroup.position.set(-60, 0, -100);

    const goldGlass = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      roughness: 0.15,
      metalness: 0.9
    });
    const blueGlass = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      roughness: 0.15,
      metalness: 0.85
    });
    const marblePlaza = new THREE.MeshStandardMaterial({ color: 0xf1f5f9, roughness: 0.3 });

    // UB Amphitheatre Sunken Courtyard
    const courtyard = new THREE.Mesh(new THREE.BoxGeometry(60, 1.2, 50), marblePlaza);
    courtyard.position.y = 0.6;
    courtyard.receiveShadow = true;
    ubGroup.add(courtyard);

    // Central Illuminated Fountain
    const fountainPool = new THREE.Mesh(
      new THREE.CylinderGeometry(6, 6, 0.8, 16),
      new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.1, metalness: 0.6 })
    );
    fountainPool.position.set(0, 0.8, 10);
    ubGroup.add(fountainPool);

    // 1. UB TOWER (120m Soaring Skyscraper)
    const tower = new THREE.Mesh(new THREE.BoxGeometry(26, 110, 24), goldGlass);
    tower.position.set(0, 55, -12);
    tower.castShadow = true;
    ubGroup.add(tower);

    // Stepped Crown & Spire (reaching 125m!)
    const crown = new THREE.Mesh(new THREE.BoxGeometry(18, 10, 16), goldGlass);
    crown.position.set(0, 115, -12);
    ubGroup.add(crown);

    const ubSpire = new THREE.Mesh(new THREE.ConeGeometry(2, 14, 8), new THREE.MeshStandardMaterial({ color: 0xf59e0b, metalness: 0.9 }));
    ubSpire.position.set(0, 126, -12);
    ubGroup.add(ubSpire);

    // Rooftop Private Helipad
    const helipad = new THREE.Mesh(
      new THREE.CylinderGeometry(8, 8, 0.4, 18),
      new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.8 })
    );
    helipad.position.set(0, 120, -12);
    ubGroup.add(helipad);

    // 2. Concorde & Canberra Flanking Towers
    const towerL = new THREE.Mesh(new THREE.BoxGeometry(18, 75, 18), blueGlass);
    towerL.position.set(-24, 37.5, -6);
    ubGroup.add(towerL);

    const towerR = new THREE.Mesh(new THREE.BoxGeometry(18, 75, 18), blueGlass);
    towerR.position.set(24, 37.5, -6);
    ubGroup.add(towerR);

    // Luxury Store Boutiques Signs: Rolex, LV, Burberry
    const boutiqueCanvas = document.createElement('canvas');
    boutiqueCanvas.width = 512;
    boutiqueCanvas.height = 96;
    const btCtx = boutiqueCanvas.getContext('2d');
    btCtx.fillStyle = '#0f172a';
    btCtx.fillRect(0, 0, 512, 96);
    btCtx.fillStyle = '#f59e0b';
    btCtx.font = 'bold 34px "Inter", sans-serif';
    btCtx.textAlign = 'center';
    btCtx.fillText('💎 UB CITY  •  THE COLLECTION', 256, 60);

    const btMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(24, 3.2),
      new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(boutiqueCanvas) })
    );
    btMesh.position.set(0, 14, 0.2);
    ubGroup.add(btMesh);

    this.scene.add(ubGroup);
    this.physicsWorld.addStaticBox(-60, 55, -112, 14, 55, 13);
    this.physicsWorld.addStaticBox(-60 - 24, 37.5, -106, 10, 37.5, 10);
    this.physicsWorld.addStaticBox(-60 + 24, 37.5, -106, 10, 37.5, 10);
  }

  // ========================================================
  // 18. ORION MALL & WORLD TRADE CENTER BANGALORE (240, 320)
  // ========================================================
  buildOrionMall() {
    const mallGroup = new THREE.Group();
    mallGroup.position.set(240, 0, 320);

    const mallGlass = new THREE.MeshStandardMaterial({ color: 0x38bdf8, roughness: 0.15, metalness: 0.85 });
    const whiteMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.4 });
    const wtcGlass = new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.1, metalness: 0.9 });

    // Orion Mall Curved Curved Commercial Building (60m x 36m x 18m)
    const mallBody = new THREE.Mesh(new THREE.BoxGeometry(60, 18, 36), whiteMat);
    mallBody.position.y = 9;
    mallBody.castShadow = true;
    mallGroup.add(mallBody);

    // Glass Atrium Facade
    const glassAtrium = new THREE.Mesh(new THREE.BoxGeometry(45, 14, 2), mallGlass);
    glassAtrium.position.set(0, 9, 18.5);
    mallGroup.add(glassAtrium);

    // Orion Mall Signboard
    const mallSignCanvas = document.createElement('canvas');
    mallSignCanvas.width = 512;
    mallSignCanvas.height = 96;
    const omCtx = mallSignCanvas.getContext('2d');
    omCtx.fillStyle = '#1e1b4b';
    omCtx.fillRect(0, 0, 512, 96);
    omCtx.fillStyle = '#ec4899';
    omCtx.font = 'bold 36px "Inter", sans-serif';
    omCtx.textAlign = 'center';
    omCtx.fillText('🛍️ ORION MALL • BRIGADE GATEWAY', 256, 60);

    const omMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(28, 3.2),
      new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(mallSignCanvas) })
    );
    omMesh.position.set(0, 15, 19.5);
    mallGroup.add(omMesh);

    // Adjacent WORLD TRADE CENTER (WTC) BANGALORE (92m Glass Tower)
    const wtcTower = new THREE.Mesh(new THREE.BoxGeometry(22, 92, 22), wtcGlass);
    wtcTower.position.set(-36, 46, 0);
    wtcTower.castShadow = true;
    mallGroup.add(wtcTower);

    const wtcSpire = new THREE.Mesh(
      new THREE.ConeGeometry(2, 16, 8),
      new THREE.MeshStandardMaterial({ color: 0xe2e8f0, metalness: 0.9 })
    );
    wtcSpire.position.set(-36, 100, 0);
    mallGroup.add(wtcSpire);

    // Orion Lakeside Wooden Boardwalk
    const boardwalk = new THREE.Mesh(
      new THREE.PlaneGeometry(65, 12),
      new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.8 })
    );
    boardwalk.rotation.x = -Math.PI / 2;
    boardwalk.position.set(0, 0.08, 28);
    mallGroup.add(boardwalk);

    this.scene.add(mallGroup);
    this.physicsWorld.addStaticBox(240, 9, 320, 31, 9, 19);
    this.physicsWorld.addStaticBox(240 - 36, 46, 320, 12, 46, 12);
  }

  // ========================================================
  // 19. LALBAGH BOTANICAL GARDENS & ROYAL GLASS HOUSE (-140, 280)
  // ========================================================
  buildLalbaghGardens() {
    const lalbaghGroup = new THREE.Group();
    lalbaghGroup.position.set(-140, 0, 280);

    const ironFrame = new THREE.MeshStandardMaterial({ color: 0x14532d, roughness: 0.7, metalness: 0.5 });
    const crystalGlass = new THREE.MeshStandardMaterial({
      color: 0xa5f3fc,
      transparent: true,
      opacity: 0.55,
      roughness: 0.1,
      metalness: 0.8
    });
    const rockMat = new THREE.MeshStandardMaterial({ color: 0x78716c, roughness: 0.95 });

    // 1. THE ICONIC LALBAGH GLASS HOUSE (42m x 26m x 14m)
    const glassBase = new THREE.Mesh(new THREE.BoxGeometry(42, 6, 26), crystalGlass);
    glassBase.position.set(0, 3, 0);
    lalbaghGroup.add(glassBase);

    // Vaulted Arched Roof
    const roofVault = new THREE.Mesh(
      new THREE.CylinderGeometry(13, 13, 42, 20, 1, false, 0, Math.PI),
      crystalGlass
    );
    roofVault.rotation.z = Math.PI / 2;
    roofVault.position.set(0, 6, 0);
    lalbaghGroup.add(roofVault);

    // Cast-iron Architectural Ribs
    for (let rx = -20; rx <= 20; rx += 5) {
      const rib = new THREE.Mesh(new THREE.TorusGeometry(13, 0.25, 8, 24, Math.PI), ironFrame);
      rib.rotation.y = Math.PI / 2;
      rib.position.set(rx, 6, 0);
      lalbaghGroup.add(rib);
    }

    // Inside: Vivid Red & Golden Flowerbed Displays!
    const flowerRed = new THREE.MeshStandardMaterial({ color: 0xef4444, roughness: 0.8 });
    const flowerYellow = new THREE.MeshStandardMaterial({ color: 0xfacc15, roughness: 0.8 });
    for (let fx = -16; fx <= 16; fx += 8) {
      const bed1 = new THREE.Mesh(new THREE.BoxGeometry(6, 0.4, 4), flowerRed);
      bed1.position.set(fx, 0.2, -6);
      lalbaghGroup.add(bed1);

      const bed2 = new THREE.Mesh(new THREE.BoxGeometry(6, 0.4, 4), flowerYellow);
      bed2.position.set(fx, 0.2, 6);
      lalbaghGroup.add(bed2);
    }

    // 2. HISTORIC KEMPEGOWDA WATCHTOWER ATOP LALBAGH ROCK
    const rock = new THREE.Mesh(new THREE.DodecahedronGeometry(12, 1), rockMat);
    rock.scale.set(1.8, 0.7, 1.6);
    rock.position.set(36, 4, -20);
    lalbaghGroup.add(rock);

    // 4-Pillared Watchtower
    const tower = new THREE.Group();
    tower.position.set(36, 8.5, -20);

    const stoneMat = new THREE.MeshStandardMaterial({ color: 0xa8a29e, roughness: 0.8 });
    const tPillar = new THREE.CylinderGeometry(0.3, 0.35, 3.5, 6);
    [[-1.8, -1.8], [1.8, -1.8], [-1.8, 1.8], [1.8, 1.8]].forEach(([tx, tz]) => {
      const p = new THREE.Mesh(tPillar, stoneMat);
      p.position.set(tx, 1.75, tz);
      tower.add(p);
    });

    // Watchtower Roof & Kalasa Finial
    const tRoof = new THREE.Mesh(new THREE.ConeGeometry(3.5, 2.5, 4), new THREE.MeshStandardMaterial({ color: 0xb91c1c }));
    tRoof.rotation.y = Math.PI / 4;
    tRoof.position.y = 4.75;
    tower.add(tRoof);

    lalbaghGroup.add(tower);

    // Glass House Banner
    const lbSignCanvas = document.createElement('canvas');
    lbSignCanvas.width = 512;
    lbSignCanvas.height = 96;
    const lbCtx = lbSignCanvas.getContext('2d');
    lbCtx.fillStyle = '#14532d';
    lbCtx.fillRect(0, 0, 512, 96);
    lbCtx.fillStyle = '#fef08a';
    lbCtx.font = 'bold 36px "Inter", sans-serif';
    lbCtx.textAlign = 'center';
    lbCtx.fillText('🌿 LALBAGH ROYAL GLASS HOUSE', 256, 60);

    const lbSignMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(24, 2.4),
      new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(lbSignCanvas) })
    );
    lbSignMesh.position.set(0, 6, 13.5);
    lalbaghGroup.add(lbSignMesh);

    this.scene.add(lalbaghGroup);
    this.physicsWorld.addStaticBox(-140, 6, 280, 22, 6, 14);
    this.physicsWorld.addStaticBox(-140 + 36, 5, 280 - 20, 14, 5, 14);
  }

  // ========================================================
  // 20. NANDI HILLS GHATS & SUNRISE CLIFF VIEWPOINT (440, -460)
  // ========================================================
  buildNandiHills() {
    const nandiGroup = new THREE.Group();
    nandiGroup.position.set(440, 0, -460);

    const rockMat = new THREE.MeshStandardMaterial({ color: 0x64748b, roughness: 0.95 });
    const roadMat = new THREE.MeshStandardMaterial({ color: 0x2b2b2b, roughness: 0.85 });
    const stoneMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.7 });

    // Towering Granite Massif rising 75 meters!
    const massif = new THREE.Mesh(new THREE.DodecahedronGeometry(55, 1), rockMat);
    massif.scale.set(1.3, 1.4, 1.2);
    massif.position.set(0, 38, 0);
    nandiGroup.add(massif);

    // Summit Panoramic Viewpoint Terrace (y = 75m)
    const terrace = new THREE.Mesh(new THREE.CylinderGeometry(28, 30, 2.5, 18), stoneMat);
    terrace.position.set(0, 75, 0);
    nandiGroup.add(terrace);

    // Stone Balustrade Railing around the summit cliff
    for (let a = 0; a < Math.PI * 2; a += Math.PI / 8) {
      const bx = Math.cos(a) * 27;
      const bz = Math.sin(a) * 27;
      const post = new THREE.Mesh(new THREE.BoxGeometry(0.8, 1.2, 0.8), stoneMat);
      post.position.set(bx, 76.8, bz);
      nandiGroup.add(post);
    }

    // Sunrise Viewpoint Temple Gazebo
    const gazebo = new THREE.Group();
    gazebo.position.set(0, 76.25, 0);

    for (let c = 0; c < 6; c++) {
      const angle = (c / 6) * Math.PI * 2;
      const pillar = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.35, 5, 8), stoneMat);
      pillar.position.set(Math.cos(angle) * 7, 2.5, Math.sin(angle) * 7);
      gazebo.add(pillar);
    }

    const gDome = new THREE.Mesh(new THREE.ConeGeometry(9, 4.5, 6), new THREE.MeshStandardMaterial({ color: 0x991b1b }));
    gDome.position.y = 7;
    gazebo.add(gDome);

    // Tipu's Drop Signboard
    const tipuCanvas = document.createElement('canvas');
    tipuCanvas.width = 512;
    tipuCanvas.height = 128;
    const tctx = tipuCanvas.getContext('2d');
    tctx.fillStyle = '#7f1d1d';
    tctx.fillRect(0, 0, 512, 128);
    tctx.fillStyle = '#ffffff';
    tctx.font = 'bold 36px "Inter", sans-serif';
    tctx.textAlign = 'center';
    tctx.fillText('⛰️ NANDI HILLS • TIPU\'S DROP (75m)', 256, 75);

    const tipuMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(16, 2.4),
      new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(tipuCanvas) })
    );
    tipuMesh.position.set(0, 78, 26);
    nandiGroup.add(tipuMesh);

    // Morning Mist Clouds floating around the summit
    const cloudMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.55,
      roughness: 0.9
    });
    for (let cl = 0; cl < 4; cl++) {
      const angle = (cl / 4) * Math.PI * 2;
      const cloud = new THREE.Mesh(new THREE.SphereGeometry(14, 8, 8), cloudMat);
      cloud.scale.set(1.6, 0.4, 1.2);
      cloud.position.set(Math.cos(angle) * 35, 72, Math.sin(angle) * 35);
      nandiGroup.add(cloud);
    }

    nandiGroup.add(gazebo);

    // Register Winding Ghat Road Ramp in PhysicsWorld: allows climbing up to the 75m summit!
    this.physicsWorld.addFlyoverRamp('nandi_ghat_ramp', 'X', 440 - 120, 440, -460, 24, 0, 75);
    this.physicsWorld.addFlyover('nandi_summit', 440, -460, 56, 56, 75, 'X');

    this.scene.add(nandiGroup);
    this.physicsWorld.addStaticBox(440, 38, -460, 48, 38, 48);
  }

  // ========================================================
  // 21. SIR K.P. PUTTANNA CHETTY TOWN HALL (40, 200)
  // ========================================================
  buildTownHall() {
    const thGroup = new THREE.Group();
    thGroup.position.set(40, 0, 200);

    const stoneMat = new THREE.MeshStandardMaterial({ color: 0xf5ebe0, roughness: 0.65 });
    const redTile = new THREE.MeshStandardMaterial({ color: 0xa83232, roughness: 0.7 });

    // Main 2-Story Neoclassical Heritage Building
    const body = new THREE.Mesh(new THREE.BoxGeometry(42, 14, 24), stoneMat);
    body.position.y = 7;
    body.castShadow = true;
    thGroup.add(body);

    // Front Colonnade with 8 Tuscan Stone Pillars
    const colGeo = new THREE.CylinderGeometry(0.85, 1.0, 12, 12);
    for (let c = -14; c <= 14; c += 4) {
      const col = new THREE.Mesh(colGeo, stoneMat);
      col.position.set(c, 7, 13);
      col.castShadow = true;
      thGroup.add(col);
    }

    // Triangular Pediment with Historic Clock
    const pediment = new THREE.Mesh(new THREE.ConeGeometry(18, 5, 4), stoneMat);
    pediment.rotation.y = Math.PI / 4;
    pediment.position.set(0, 15.5, 10);
    thGroup.add(pediment);

    const clock = new THREE.Mesh(new THREE.CylinderGeometry(1.6, 1.6, 0.3, 16), new THREE.MeshBasicMaterial({ color: 0xffffff }));
    clock.rotation.x = Math.PI / 2;
    clock.position.set(0, 15.2, 14);
    thGroup.add(clock);

    // Town Hall Signboard
    const thCanvas = document.createElement('canvas');
    thCanvas.width = 512;
    thCanvas.height = 96;
    const thCtx = thCanvas.getContext('2d');
    thCtx.fillStyle = '#0f172a';
    thCtx.fillRect(0, 0, 512, 96);
    thCtx.fillStyle = '#f59e0b';
    thCtx.font = 'bold 30px "Inter", sans-serif';
    thCtx.textAlign = 'center';
    thCtx.fillText('🏛️ SIR K.P. PUTTANNA CHETTY TOWN HALL', 256, 60);

    const thMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(24, 2.4),
      new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(thCanvas) })
    );
    thMesh.position.set(0, 12.5, 13.5);
    thGroup.add(thMesh);

    this.scene.add(thGroup);
    this.physicsWorld.addStaticBox(40, 7, 200, 22, 7, 14);
  }

  // ========================================================
  // 22. BANGALORE DISTRICTS: KORAMANGALA, HSR & BTM
  // ========================================================
  createBangaloreDistricts() {
    // 1. KORAMANGALA STARTUP HUB & CAFE STREET (-120, 80)
    const koraGroup = new THREE.Group();
    koraGroup.position.set(-120, 0, 80);

    // "Third Wave Coffee" & Tech Incubator Building
    const cafeBuilding = new THREE.Mesh(
      new THREE.BoxGeometry(24, 8, 18),
      new THREE.MeshStandardMaterial({ color: 0x1c1917, roughness: 0.7 })
    );
    cafeBuilding.position.set(0, 4, 0);
    koraGroup.add(cafeBuilding);

    // Cafe Sign
    const kSignCanvas = document.createElement('canvas');
    kSignCanvas.width = 512;
    kSignCanvas.height = 128;
    const kctx = kSignCanvas.getContext('2d');
    kctx.fillStyle = '#451a03';
    kctx.fillRect(0, 0, 512, 128);
    kctx.fillStyle = '#fed7aa';
    kctx.font = 'bold 36px "Inter", sans-serif';
    kctx.textAlign = 'center';
    kctx.fillText('☕ THIRD WAVE COFFEE', 256, 55);
    kctx.font = '24px "Inter", sans-serif';
    kctx.fillText('KORAMANGALA 5TH BLOCK • 80FT ROAD', 256, 100);

    const kSignMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(16, 3.5),
      new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(kSignCanvas) })
    );
    kSignMesh.position.set(0, 8.5, 9.2);
    koraGroup.add(kSignMesh);

    // Parked Auto-Rickshaw in Koramangala
    this.createAutoRickshaw(koraGroup, 16, 12, 0.4);

    this.scene.add(koraGroup);
    this.physicsWorld.addStaticBox(-120, 4, 80, 13, 4, 10);

    // 2. HSR LAYOUT 27TH MAIN GATE (60, 60)
    const hsrGroup = new THREE.Group();
    hsrGroup.position.set(60, 0, 60);

    const hsrSignCanvas = document.createElement('canvas');
    hsrSignCanvas.width = 512;
    hsrSignCanvas.height = 96;
    const hctx = hsrSignCanvas.getContext('2d');
    hctx.fillStyle = '#065f46';
    hctx.fillRect(0, 0, 512, 96);
    hctx.fillStyle = '#fef08a';
    hctx.font = 'bold 36px "Inter", sans-serif';
    hctx.textAlign = 'center';
    hctx.fillText('🌳 HSR LAYOUT • 27TH MAIN ROAD', 256, 60);

    const hsrSign = new THREE.Mesh(
      new THREE.PlaneGeometry(18, 2.5),
      new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(hsrSignCanvas) })
    );
    hsrSign.position.set(0, 5, 0);
    hsrGroup.add(hsrSign);

    // Two Entrance Pillars
    const pMat = new THREE.MeshStandardMaterial({ color: 0x78716c, roughness: 0.7 });
    const p1 = new THREE.Mesh(new THREE.BoxGeometry(1.5, 6, 1.5), pMat);
    p1.position.set(-10, 3, 0);
    hsrGroup.add(p1);
    const p2 = new THREE.Mesh(new THREE.BoxGeometry(1.5, 6, 1.5), pMat);
    p2.position.set(10, 3, 0);
    hsrGroup.add(p2);

    this.scene.add(hsrGroup);

    // 3. BTM LAYOUT 2ND STAGE FOOD STREET (-80, 160)
    const btmGroup = new THREE.Group();
    btmGroup.position.set(-80, 0, 160);

    const btmCanvas = document.createElement('canvas');
    btmCanvas.width = 512;
    btmCanvas.height = 128;
    const bctx = btmCanvas.getContext('2d');
    bctx.fillStyle = '#991b1b';
    bctx.fillRect(0, 0, 512, 128);
    bctx.fillStyle = '#fef08a';
    bctx.font = 'bold 34px "Inter", sans-serif';
    bctx.textAlign = 'center';
    bctx.fillText('🍛 SRI KRISHNA SAGAR DOSA', 256, 55);
    bctx.font = '24px "Inter", sans-serif';
    bctx.fillText('BTM 2ND STAGE • FILTER COFFEE', 256, 100);

    const btmSign = new THREE.Mesh(
      new THREE.PlaneGeometry(16, 3.5),
      new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(btmCanvas) })
    );
    btmSign.position.set(0, 6, 0);
    btmGroup.add(btmSign);

    const btmCafe = new THREE.Mesh(
      new THREE.BoxGeometry(18, 5, 12),
      new THREE.MeshStandardMaterial({ color: 0xf5ebe0, roughness: 0.7 })
    );
    btmCafe.position.set(0, 2.5, -6);
    btmGroup.add(btmCafe);

    this.createAutoRickshaw(btmGroup, 12, 4, 1.2);

    this.scene.add(btmGroup);
    this.physicsWorld.addStaticBox(-80, 2.5, 160 - 6, 10, 2.5, 7);

    // --------------------------------------------------------
    // 4. BANGALORE HERITAGE STATUES & LANDMARKS
    // --------------------------------------------------------
    this.createBangaloreStatues();
  }

  createBangaloreStatues() {
    const bronzeMat = new THREE.MeshStandardMaterial({ color: 0x6b4423, roughness: 0.55, metalness: 0.45 });
    const stoneMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.8 });
    const marbleMat = new THREE.MeshStandardMaterial({ color: 0xf1f5f9, roughness: 0.35, metalness: 0.05 });
    const goldMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, roughness: 0.25, metalness: 0.85 });

    const statueConfigs = [
      // Kempegowda Statue — founder of Bangalore
      { name: 'Kempegowda', pos: [0, 0, -20], height: 8, baseMat: stoneMat, figureMat: bronzeMat, sword: true },
      // Tipu Sultan — Tiger of Mysore
      { name: 'Tipu Sultan', pos: [-160, 0, -120], height: 7, baseMat: stoneMat, figureMat: bronzeMat, sword: true },
      // Mahatma Gandhi — Father of the Nation
      { name: 'Mahatma Gandhi', pos: [40, 0, 200], height: 6.5, baseMat: marbleMat, figureMat: bronzeMat, staff: true },
      // Sir M. Visvesvaraya — Engineer Statesman
      { name: 'Sir M. Visvesvaraya', pos: [-240, 0, -40], height: 7, baseMat: stoneMat, figureMat: bronzeMat },
      // Swami Vivekananda — Spiritual Leader
      { name: 'Swami Vivekananda', pos: [100, 0, -80], height: 7.5, baseMat: marbleMat, figureMat: bronzeMat },
      // Dr. B.R. Ambedkar — Architect of Constitution
      { name: 'Dr. B.R. Ambedkar', pos: [-80, 0, -160], height: 7, baseMat: stoneMat, figureMat: bronzeMat },
      // Subhas Chandra Bose — Freedom Fighter
      { name: 'Subhas Chandra Bose', pos: [180, 0, 100], height: 7, baseMat: stoneMat, figureMat: bronzeMat, sword: true },
      // Queen Victoria (colonial era statue preserved in Cubbon Park)
      { name: 'Queen Victoria', pos: [-140, 0, 280], height: 6, baseMat: marbleMat, figureMat: marbleMat },
      // Mark Cubbon — Commissioner of Mysore
      { name: 'Mark Cubbon', pos: [-100, 0, 250], height: 5.5, baseMat: stoneMat, figureMat: bronzeMat },
      // Basaveshwara — 12th century philosopher
      { name: 'Basaveshwara', pos: [60, 0, -200], height: 8, baseMat: stoneMat, figureMat: bronzeMat },
      // Nandi Bull — Sacred Bull of Shiva (near Nandi Hills approach)
      { name: 'Nandi Bull', pos: [400, 0, -420], height: 5, baseMat: stoneMat, figureMat: goldMat, isBull: true },
    ];

    statueConfigs.forEach(cfg => {
      const group = new THREE.Group();
      group.position.set(cfg.pos[0], cfg.pos[1], cfg.pos[2]);

      // Ornate stone pedestal with steps
      const baseStep1 = new THREE.Mesh(new THREE.BoxGeometry(5, 0.6, 5), cfg.baseMat);
      baseStep1.position.y = 0.3;
      baseStep1.receiveShadow = true;
      group.add(baseStep1);

      const baseStep2 = new THREE.Mesh(new THREE.BoxGeometry(4, 0.5, 4), cfg.baseMat);
      baseStep2.position.y = 0.85;
      group.add(baseStep2);

      const pedestal = new THREE.Mesh(new THREE.BoxGeometry(3, 2.5, 3), cfg.baseMat);
      pedestal.position.y = 2.35;
      pedestal.castShadow = true;
      group.add(pedestal);

      if (cfg.isBull) {
        // Nandi Bull — lying sacred bull
        const body = new THREE.Mesh(new THREE.BoxGeometry(2.5, 1.8, 4.0), cfg.figureMat);
        body.position.y = 4.5;
        body.castShadow = true;
        group.add(body);

        const head = new THREE.Mesh(new THREE.SphereGeometry(0.9, 10, 8), cfg.figureMat);
        head.position.set(0, 5.2, 2.3);
        group.add(head);

        // Horns
        const hornGeo = new THREE.CylinderGeometry(0.08, 0.15, 1.2, 6);
        const hornL = new THREE.Mesh(hornGeo, cfg.figureMat);
        hornL.position.set(-0.5, 5.8, 2.4);
        hornL.rotation.z = 0.5;
        group.add(hornL);
        const hornR = new THREE.Mesh(hornGeo, cfg.figureMat);
        hornR.position.set(0.5, 5.8, 2.4);
        hornR.rotation.z = -0.5;
        group.add(hornR);
      } else {
        // Standing human figure
        const figureH = cfg.height - 3.6;

        // Legs
        const legGeo = new THREE.CylinderGeometry(0.22, 0.25, figureH * 0.45, 8);
        const legL = new THREE.Mesh(legGeo, cfg.figureMat);
        legL.position.set(-0.3, 3.6 + figureH * 0.22, 0);
        legL.castShadow = true;
        group.add(legL);
        const legR = new THREE.Mesh(legGeo, cfg.figureMat);
        legR.position.set(0.3, 3.6 + figureH * 0.22, 0);
        legR.castShadow = true;
        group.add(legR);

        // Torso
        const torso = new THREE.Mesh(
          new THREE.CylinderGeometry(0.45, 0.4, figureH * 0.35, 10),
          cfg.figureMat
        );
        torso.position.y = 3.6 + figureH * 0.62;
        torso.castShadow = true;
        group.add(torso);

        // Head
        const head = new THREE.Mesh(new THREE.SphereGeometry(0.35, 12, 10), cfg.figureMat);
        head.position.y = 3.6 + figureH * 0.88;
        head.castShadow = true;
        group.add(head);

        // Sword for warriors
        if (cfg.sword) {
          const sword = new THREE.Mesh(
            new THREE.BoxGeometry(0.08, figureH * 0.55, 0.08),
            goldMat
          );
          sword.position.set(0.7, 3.6 + figureH * 0.45, 0);
          sword.rotation.z = 0.3;
          group.add(sword);
        }

        // Walking staff for Gandhi
        if (cfg.staff) {
          const staff = new THREE.Mesh(
            new THREE.CylinderGeometry(0.04, 0.04, figureH * 0.9, 6),
            new THREE.MeshStandardMaterial({ color: 0x582f0e, roughness: 0.85 })
          );
          staff.position.set(0.6, 3.6 + figureH * 0.4, 0.2);
          staff.rotation.z = 0.08;
          group.add(staff);
        }
      }

      // Nameplate on pedestal
      const plateCanvas = document.createElement('canvas');
      plateCanvas.width = 512;
      plateCanvas.height = 128;
      const pctx = plateCanvas.getContext('2d');
      pctx.fillStyle = '#1e293b';
      pctx.fillRect(0, 0, 512, 128);
      pctx.fillStyle = '#f1f5f9';
      pctx.font = 'bold 32px "Inter", sans-serif';
      pctx.textAlign = 'center';
      pctx.fillText(cfg.name, 256, 70);

      const plate = new THREE.Mesh(
        new THREE.PlaneGeometry(2.5, 0.6),
        new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(plateCanvas) })
      );
      plate.position.set(0, 2.0, 1.52);
      group.add(plate);

      this.scene.add(group);
      this.physicsWorld.addStaticBox(cfg.pos[0], 2, cfg.pos[2], 2.5, 2, 2.5);
    });

    // Decorative Ashoka Pillar near Vidhana Soudha
    const ashokaGroup = new THREE.Group();
    ashokaGroup.position.set(-235, 0, -70);

    const ashokaPillar = new THREE.Mesh(
      new THREE.CylinderGeometry(0.8, 1.0, 14, 12),
      stoneMat
    );
    ashokaPillar.position.y = 7;
    ashokaPillar.castShadow = true;
    ashokaGroup.add(ashokaPillar);

    // Lion Capital
    const lionCapital = new THREE.Mesh(
      new THREE.CylinderGeometry(1.2, 0.8, 3.5, 10),
      goldMat
    );
    lionCapital.position.y = 15.5;
    lionCapital.castShadow = true;
    ashokaGroup.add(lionCapital);

    // Dharma Chakra (Ashoka Wheel)
    const wheel = new THREE.Mesh(
      new THREE.TorusGeometry(1.0, 0.12, 8, 24),
      goldMat
    );
    wheel.position.y = 17.5;
    wheel.rotation.x = Math.PI / 2;
    ashokaGroup.add(wheel);

    this.scene.add(ashokaGroup);
    this.physicsWorld.addStaticBox(-235, 7, -70, 1, 7, 1);
  }

  // ========================================================
  // 23. GRAND CHORAHAS / QUADRANGLE ROUNDABOUTS WITH KAMAL (LOTUS)
  // ========================================================
  buildRoadRoundaboutsChorahas() {
    const intersections = [
      { x: 0, z: -200, name: 'North Quadrangles Choraha' },
      { x: 0, z: 200, name: 'South Silk-HSR Choraha' },
      { x: -200, z: 0, name: 'West Vidhana-Central Choraha' },
      { x: 200, z: 0, name: 'East Ring Road Choraha' },
      { x: -200, z: -200, name: 'North-West Tech Choraha' },
      { x: 200, z: 200, name: 'South-East Commercial Choraha' },
      { x: -200, z: 200, name: 'South-West Cantonment Choraha' }
    ];

    const roadCircMat = new THREE.MeshStandardMaterial({ color: 0x242424, roughness: 0.85 });
    const curbMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.7 });
    const lawnMat = new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.85 });
    const pondMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.1, metalness: 0.4 });
    const petalPink = new THREE.MeshStandardMaterial({ color: 0xf472b6, roughness: 0.4, side: THREE.DoubleSide });
    const petalDeep = new THREE.MeshStandardMaterial({ color: 0xdb2777, roughness: 0.4, side: THREE.DoubleSide });
    const lotusGold = new THREE.MeshStandardMaterial({ color: 0xfbbf24, roughness: 0.25, metalness: 0.8 });

    intersections.forEach(pt => {
      const group = new THREE.Group();
      group.position.set(pt.x, 0, pt.z);

      // 1. Broad Circular Road Asphalt Apron for the Roundabout (Radius 22m)
      const roadGeo = new THREE.CircleGeometry(28, 36);
      const roadMesh = new THREE.Mesh(roadGeo, roadCircMat);
      roadMesh.rotation.x = -Math.PI / 2;
      roadMesh.position.y = 0.045;
      roadMesh.receiveShadow = true;
      group.add(roadMesh);

      // Outer White Dashed Guidance Ring
      const ringDashGeo = new THREE.RingGeometry(26.5, 27.2, 36);
      const ringDash = new THREE.Mesh(ringDashGeo, this.materials.roadWhite);
      ringDash.rotation.x = -Math.PI / 2;
      ringDash.position.y = 0.05;
      group.add(ringDash);

      // 2. Raised Central Island Curb & Lawn (Radius 9m)
      const islandCurb = new THREE.Mesh(new THREE.CylinderGeometry(9.0, 9.4, 0.5, 32), curbMat);
      islandCurb.position.y = 0.25;
      islandCurb.receiveShadow = true;
      group.add(islandCurb);

      const islandLawn = new THREE.Mesh(new THREE.CircleGeometry(8.9, 32), lawnMat);
      islandLawn.rotation.x = -Math.PI / 2;
      islandLawn.position.y = 0.51;
      group.add(islandLawn);

      // 3. Lotus Pond Basin (Radius 5.5m)
      const basin = new THREE.Mesh(new THREE.CylinderGeometry(5.5, 5.8, 0.6, 24), curbMat);
      basin.position.y = 0.75;
      group.add(basin);

      const pondWater = new THREE.Mesh(new THREE.CircleGeometry(5.4, 24), pondMat);
      pondWater.rotation.x = -Math.PI / 2;
      pondWater.position.y = 1.05;
      group.add(pondWater);

      // 4. MAGNIFICENT KAMAL (LOTUS FLOWER) MONUMENT IN THE CENTER
      const lotusGroup = new THREE.Group();
      lotusGroup.position.set(0, 1.1, 0);

      // Central Golden Pericarp / Stigma
      const pericarp = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 0.8, 1.2, 16), lotusGold);
      pericarp.position.y = 1.0;
      lotusGroup.add(pericarp);

      // Glowing central jewel inside Kamal with high emissive bloom
      const jewelGeo = new THREE.SphereGeometry(0.8, 12, 12);
      const jewelMat = new THREE.MeshBasicMaterial({ color: 0xf472b6 });
      const lotusJewel = new THREE.Mesh(jewelGeo, jewelMat);
      lotusJewel.position.set(0, 2.0, 0);
      lotusGroup.add(lotusJewel);

      // Outer Layer of Large Blooming Lotus Petals (8 petals)
      for (let i = 0; i < 8; i++) {
        const ang = (i * Math.PI * 2) / 8;
        const petalGeo = new THREE.SphereGeometry(1.6, 8, 8, 0, Math.PI);
        const petal = new THREE.Mesh(petalGeo, petalDeep);
        petal.scale.set(0.7, 1.5, 0.25);
        petal.rotation.x = 0.8;
        petal.rotation.y = 0;
        petal.rotation.z = 0;

        const pPivot = new THREE.Group();
        pPivot.rotation.y = ang;
        petal.position.set(0, 1.0, 2.0);
        pPivot.add(petal);
        lotusGroup.add(pPivot);
      }

      // Inner Layer of Elegant Upright Lotus Petals (8 petals staggered)
      for (let j = 0; j < 8; j++) {
        const ang = ((j + 0.5) * Math.PI * 2) / 8;
        const petalGeo = new THREE.SphereGeometry(1.2, 8, 8, 0, Math.PI);
        const petal = new THREE.Mesh(petalGeo, petalPink);
        petal.scale.set(0.6, 1.4, 0.2);
        petal.rotation.x = 0.45;

        const pPivot = new THREE.Group();
        pPivot.rotation.y = ang;
        petal.position.set(0, 1.4, 1.2);
        pPivot.add(petal);
        lotusGroup.add(pPivot);
      }

      // Water Fountain Spouts around the Kamal
      for (let w = 0; w < 4; w++) {
        const jetAngle = (w * Math.PI * 2) / 4;
        const jet = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.12, 1.8, 8), pondMat);
        jet.position.set(Math.cos(jetAngle) * 3.2, 1.6, Math.sin(jetAngle) * 3.2);
        lotusGroup.add(jet);
      }

      group.add(lotusGroup);

      this.scene.add(group);

      // Register solid physics collision for the central Kamal monument & pond
      this.physicsWorld.addStaticBox(pt.x, 1.5, pt.z, 5.8, 1.5, 5.8);
    });
  }

  // ========================================================
  // 24. BNM INSTITUTE OF TECHNOLOGY (BNMIT) (-140, 160)
  // South Bangalore Premier Engineering Campus
  // ========================================================
  buildBnmInstitute() {
    const group = new THREE.Group();
    const bx = -140;
    const bz = 160;
    group.position.set(bx, 0, bz);

    const campusBrick = new THREE.MeshStandardMaterial({ color: 0x9f1239, roughness: 0.75 }); // BNMIT clinker brick
    const campusTrim = new THREE.MeshStandardMaterial({ color: 0xfef08a, roughness: 0.5 });
    const glassMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.15, metalness: 0.85 });

    // Main Academic Administrative Building (54m wide x 18m tall x 26m deep)
    const adminBlock = new THREE.Mesh(new THREE.BoxGeometry(54, 18, 26), campusBrick);
    adminBlock.position.set(0, 9, 0);
    adminBlock.castShadow = true;
    adminBlock.receiveShadow = true;
    group.add(adminBlock);

    // Front Glass Atrium & Engineering Wings
    const atrium = new THREE.Mesh(new THREE.BoxGeometry(22, 16, 4), glassMat);
    atrium.position.set(0, 8.5, 14);
    group.add(atrium);

    // Flanking CS & Mech Wings
    const leftBlock = new THREE.Mesh(new THREE.BoxGeometry(20, 14, 32), campusBrick);
    leftBlock.position.set(-34, 7, -4);
    const rightBlock = new THREE.Mesh(new THREE.BoxGeometry(20, 14, 32), campusBrick);
    rightBlock.position.set(34, 7, -4);
    group.add(leftBlock, rightBlock);

    // Central Campanile Tower (rising to 34m)
    const tower = new THREE.Mesh(new THREE.BoxGeometry(7, 30, 7), campusBrick);
    tower.position.set(0, 17, 10);
    tower.castShadow = true;
    group.add(tower);

    const towerDome = new THREE.Mesh(new THREE.ConeGeometry(4.5, 7, 6), campusTrim);
    towerDome.position.set(0, 35.5, 10);
    group.add(towerDome);

    // BNMIT Iconic Entrance Arch & Signboard
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#881337';
    ctx.fillRect(0, 0, 1024, 256);
    ctx.lineWidth = 8;
    ctx.strokeStyle = '#fef08a';
    ctx.strokeRect(6, 6, 1012, 244);

    ctx.fillStyle = '#fef08a';
    ctx.font = 'bold 46px "Noto Sans Kannada", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('ಬಿ.ಎನ್.ಎಂ ತಾಂತ್ರಿಕ ಮಹಾವಿದ್ಯಾಲಯ • ಬೆಂಗಳೂರು', 512, 85);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 40px Inter, sans-serif';
    ctx.fillText('B.N.M. INSTITUTE OF TECHNOLOGY (BNMIT)', 512, 160);

    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 24px monospace';
    ctx.fillText('ENGINEERING • MBA • AI & RESEARCH CAMPUS (ESTD. 2001)', 512, 215);

    const sign = new THREE.Mesh(
      new THREE.PlaneGeometry(30, 7.5),
      new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(canvas) })
    );
    sign.position.set(0, 15, 16.2);
    group.add(sign);

    this.scene.add(group);
    this.physicsWorld.addStaticBox(bx, 9, bz, 27, 9, 13);
    this.physicsWorld.addStaticBox(bx - 34, 7, bz - 4, 10, 7, 16);
    this.physicsWorld.addStaticBox(bx + 34, 7, bz - 4, 10, 7, 16);
    this.physicsWorld.addStaticBox(bx, 17, bz + 10, 3.5, 17, 3.5);
  }

  // ========================================================
  // 25. KUMARASWAMY LAYOUT CIVIC DISTRICT & VIEWPOINT (-200, 180)
  // Famous South Bangalore Residential & Hill Temple Sector
  // ========================================================
  buildKumaraswamyLayout() {
    const group = new THREE.Group();
    const kx = -200;
    const kz = 180;
    group.position.set(kx, 0, kz);

    const stoneMat = new THREE.MeshStandardMaterial({ color: 0x64748b, roughness: 0.7 });
    const terraMat = new THREE.MeshStandardMaterial({ color: 0xc2410c, roughness: 0.75 });
    const wallMat = new THREE.MeshStandardMaterial({ color: 0xf1f5f9, roughness: 0.6 });

    // Elevated Hillock Terrace Platform (Kumaraswamy Hills 6m high)
    const hillPlatform = new THREE.Mesh(new THREE.BoxGeometry(65, 6, 60), stoneMat);
    hillPlatform.position.set(0, 3, 0);
    hillPlatform.receiveShadow = true;
    group.add(hillPlatform);

    // Kumaraswamy Temple Complex on Terrace
    const templeMain = new THREE.Mesh(new THREE.BoxGeometry(26, 10, 24), terraMat);
    templeMain.position.set(0, 11, -8);
    templeMain.castShadow = true;
    group.add(templeMain);

    // Dravidian Shikhara / Gopuram on Temple
    const gopuram = new THREE.Mesh(new THREE.ConeGeometry(7, 12, 4), new THREE.MeshStandardMaterial({ color: 0xf59e0b }));
    gopuram.position.set(0, 21, -8);
    gopuram.rotation.y = Math.PI / 4;
    group.add(gopuram);

    // Civic Community Hall & Commercial Buildings
    const hall = new THREE.Mesh(new THREE.BoxGeometry(34, 9, 18), wallMat);
    hall.position.set(0, 4.5, 38);
    hall.castShadow = true;
    group.add(hall);

    // Kumaraswamy Layout Bilingual Signboard
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#1e3a8a';
    ctx.fillRect(0, 0, 1024, 256);
    ctx.lineWidth = 8;
    ctx.strokeStyle = '#facc15';
    ctx.strokeRect(6, 6, 1012, 244);

    ctx.fillStyle = '#facc15';
    ctx.font = 'bold 46px "Noto Sans Kannada", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('ಕುಮಾರಸ್ವಾಮಿ ಲೇಔಟ್ • 1ನೇ ಮತ್ತು 2ನೇ ಹಂತ', 512, 85);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 40px Inter, sans-serif';
    ctx.fillText('KUMARASWAMY LAYOUT (KS LAYOUT)', 512, 160);

    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 24px monospace';
    ctx.fillText('DAYANANDA SAGAR CAMPUS ROAD • HILLTOP VIEWPOINT', 512, 215);

    const sign = new THREE.Mesh(
      new THREE.PlaneGeometry(28, 7),
      new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(canvas) })
    );
    sign.position.set(0, 10.5, 47.5);
    group.add(sign);

    this.scene.add(group);
    this.physicsWorld.addStaticBox(kx, 3, kz, 32.5, 3, 30);
    this.physicsWorld.addStaticBox(kx, 11, kz - 8, 13, 5, 12);
    this.physicsWorld.addStaticBox(kx, 4.5, kz + 38, 17, 4.5, 9);
  }

  // ========================================================
  // 26. FOUNDER'S BUILDING — STARK TOWER IN BTM LAYOUT (-70, 130)
  // Magnificent Marvel Stark Tower Architecture for the Founder's Hub
  // ========================================================
  buildFoundersBuildingStarkTower() {
    const group = new THREE.Group();
    const fx = -70;
    const fz = 130;
    group.position.set(fx, 0, fz);

    // Stark Industries Architectural Materials
    const carbonMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.25,
      metalness: 0.9
    });
    const starkGlass = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      transparent: true,
      opacity: 0.75,
      roughness: 0.08,
      metalness: 0.95
    });
    const reactorCyan = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    const goldAccent = new THREE.MeshStandardMaterial({ color: 0xf59e0b, metalness: 0.85, roughness: 0.25 });

    // 1. Lower Podium (Tapered Base: 36m wide x 28m tall x 32m deep)
    const baseBlock = new THREE.Mesh(new THREE.BoxGeometry(36, 28, 32), carbonMat);
    baseBlock.position.set(0, 14, 0);
    baseBlock.castShadow = true;
    baseBlock.receiveShadow = true;
    group.add(baseBlock);

    // Glass Curtain Wall on base
    const baseGlass = new THREE.Mesh(new THREE.BoxGeometry(32, 24, 33), starkGlass);
    baseGlass.position.set(0, 14, 0);
    group.add(baseGlass);

    // 2. Tower Spine: Angled aerodynamic Stark Monolith rising to 95m
    const midTower = new THREE.Mesh(new THREE.BoxGeometry(26, 60, 24), carbonMat);
    midTower.position.set(0, 58, -2);
    midTower.castShadow = true;
    group.add(midTower);

    const midGlass = new THREE.Mesh(new THREE.BoxGeometry(24, 58, 25), starkGlass);
    midGlass.position.set(0, 58, -2);
    group.add(midGlass);

    // 3. ICONIC STARK TOWER CANTILEVERED PENTHOUSE / HELIPAD DECK (y = 88m)
    // Projecting forward 24 meters over BTM Layout!
    const deckGeo = new THREE.CylinderGeometry(14, 11, 4.0, 24, 1, false, 0, Math.PI);
    const deckMesh = new THREE.Mesh(deckGeo, carbonMat);
    deckMesh.rotation.x = Math.PI / 2;
    deckMesh.position.set(0, 88, 14);
    group.add(deckMesh);

    // Circular Landing Platform / Flight Pad
    const padLanding = new THREE.Mesh(new THREE.CircleGeometry(11, 24), carbonMat);
    padLanding.rotation.x = -Math.PI / 2;
    padLanding.position.set(0, 90.1, 14);
    group.add(padLanding);

    // Glowing Arc-Reactor Landing Ring on Helipad
    const padRing = new THREE.Mesh(new THREE.RingGeometry(8, 9.2, 24), reactorCyan);
    padRing.rotation.x = -Math.PI / 2;
    padRing.position.set(0, 90.15, 14);
    group.add(padRing);

    // 'A' / 'F' Founder Monogram on Landing Pad
    const fRing = new THREE.Mesh(new THREE.RingGeometry(2.5, 3.5, 16), goldAccent);
    fRing.rotation.x = -Math.PI / 2;
    fRing.position.set(0, 90.16, 14);
    group.add(fRing);

    // 4. Slanted Spire Crown & Rooftop Communications Mast (total height 118m)
    const crownShape = new THREE.Shape();
    crownShape.moveTo(-10, 0);
    crownShape.lineTo(10, 0);
    crownShape.lineTo(2, 24);
    crownShape.lineTo(-10, 18);
    crownShape.closePath();

    const crownGeo = new THREE.ExtrudeGeometry(crownShape, { depth: 16, bevelEnabled: false });
    const crown = new THREE.Mesh(crownGeo, carbonMat);
    crown.position.set(0, 88, -10);
    group.add(crown);

    const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.6, 26, 8), goldAccent);
    mast.position.set(2, 105, -2);
    group.add(mast);

    // Blinking red aviation warning light on spire
    const spireLight = new THREE.PointLight(0xff0000, 3.0, 40);
    spireLight.position.set(2, 118, -2);
    group.add(spireLight);

    // Glowing Arc Reactor Core Beacon at top
    const reactorLight = new THREE.PointLight(0x06b6d4, 4.5, 45);
    reactorLight.position.set(0, 91, 14);
    group.add(reactorLight);

    // 5. Huge Illuminated Bilingual Signboards: "FOUNDER'S BUILDING"
    const signCanvas = document.createElement('canvas');
    signCanvas.width = 1024;
    signCanvas.height = 256;
    const ctx = signCanvas.getContext('2d');
    ctx.fillStyle = '#090d16';
    ctx.fillRect(0, 0, 1024, 256);
    ctx.lineWidth = 8;
    ctx.strokeStyle = '#38bdf8';
    ctx.strokeRect(6, 6, 1012, 244);

    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 44px "Noto Sans Kannada", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('ಸಂಸ್ಥಾಪಕರ ಭವನ • ಬಿ.ಟಿ.ಎಂ ಬಡಾವಣೆ', 512, 85);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 46px Inter, sans-serif';
    ctx.fillText('FOUNDER\'S BUILDING — STARK TOWER', 512, 160);

    ctx.fillStyle = '#f59e0b';
    ctx.font = 'bold 24px monospace';
    ctx.fillText('HEADQUARTERS & INNOVATION PENTHOUSE • BTM 2ND STAGE', 512, 215);

    const signTex = new THREE.CanvasTexture(signCanvas);
    const signMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(32, 8),
      new THREE.MeshBasicMaterial({ map: signTex })
    );
    signMesh.position.set(0, 24, 16.5);
    group.add(signMesh);

    // Register Elevator to Stark Tower Penthouse Flight Deck (y = 90.5m)
    this.createObservationElevator(
      'Founder\'s Penthouse Flight Deck',
      new THREE.Vector3(fx, 1.0, fz + 20),
      new THREE.Vector3(fx, 91.0, fz + 14)
    );

    this.scene.add(group);

    // Solid Physics Obstacles
    this.physicsWorld.addStaticBox(fx, 14, fz, 18, 14, 16);
    this.physicsWorld.addStaticBox(fx, 58, fz - 2, 13, 30, 12);
    this.physicsWorld.addStaticBox(fx, 88, fz + 14, 11, 2, 11);
  }


  buildTipuSultanSummerPalace() {
    const px = -160;
    const pz = -80;
    const group = new THREE.Group();
    group.position.set(px, 0, pz);

    const teakMat = new THREE.MeshStandardMaterial({ color: 0x451a03, roughness: 0.7 }); // Rich dark teakwood
    const wallMat = new THREE.MeshStandardMaterial({ color: 0xfef08a, roughness: 0.8 }); // Floral yellow plaster
    const stoneBaseMat = new THREE.MeshStandardMaterial({ color: 0x78716c, roughness: 0.9 });
    const goldMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, metalness: 0.8, roughness: 0.2 });

    // 1. Raised Stone Plinth
    const plinth = new THREE.Mesh(new THREE.BoxGeometry(42, 1.4, 28), stoneBaseMat);
    plinth.position.y = 0.7;
    plinth.receiveShadow = true;
    group.add(plinth);

    // Front Grand Entrance Steps
    const steps = new THREE.Mesh(new THREE.BoxGeometry(16, 0.7, 4.5), stoneBaseMat);
    steps.position.set(0, 0.35, 15.5);
    group.add(steps);

    // 2. Ground Floor & First Floor Teakwood Pillared Pavilions
    // Central enclosed museum chambers
    const centerBlock = new THREE.Mesh(new THREE.BoxGeometry(24, 9.5, 16), wallMat);
    centerBlock.position.set(0, 5.8, 0);
    centerBlock.castShadow = true;
    group.add(centerBlock);

    // 3. Iconic Teakwood Cusped Arches & Pillars (Surrounding double verandah)
    for (let colX = -19; colX <= 19; colX += 4.75) {
      [-12, 12].forEach(colZ => {
        const pillar = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.35, 9.6, 8), teakMat);
        pillar.position.set(colX, 5.9, colZ);
        pillar.castShadow = true;
        group.add(pillar);

        // Cusped bracket capitals
        const capital = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.4, 1.2), teakMat);
        capital.position.set(colX, 10.5, colZ);
        group.add(capital);
      });
    }

    // First floor wooden balcony projecting overhang
    const balcony = new THREE.Mesh(new THREE.BoxGeometry(43, 0.6, 29), teakMat);
    balcony.position.y = 6.2;
    balcony.castShadow = true;
    group.add(balcony);

    // 4. Sloping Eaves (Chhajjas) & Terracotta Style Roof
    const roofBase = new THREE.Mesh(new THREE.BoxGeometry(45, 1.2, 31), teakMat);
    roofBase.position.y = 10.9;
    roofBase.castShadow = true;
    group.add(roofBase);

    const roofSlope = new THREE.Mesh(new THREE.ConeGeometry(24, 4.5, 4), teakMat);
    roofSlope.position.set(0, 13.2, 0);
    roofSlope.rotation.y = Math.PI / 4;
    group.add(roofSlope);

    // 4 Corner Gold Finials
    [[-19, -12], [19, -12], [-19, 12], [19, 12]].forEach(([fx, fz]) => {
      const kalasa = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.35, 1.4, 8), goldMat);
      kalasa.position.set(fx, 11.8, fz);
      group.add(kalasa);
    });

    // 5. Formal Charbagh Palace Gardens
    const gardenBorder = new THREE.Mesh(new THREE.BoxGeometry(54, 0.25, 40), this.materials.sidewalk);
    gardenBorder.position.y = 0.12;
    group.add(gardenBorder);

    // Fountain Pool in front
    const pool = new THREE.Mesh(new THREE.CylinderGeometry(4.5, 4.5, 0.4, 16), this.materials.water);
    pool.position.set(0, 0.25, 23);
    group.add(pool);

    // 6. Illuminated Bilingual Signboard
    const signCanvas = document.createElement('canvas');
    signCanvas.width = 1024;
    signCanvas.height = 256;
    const ctx = signCanvas.getContext('2d');
    ctx.fillStyle = '#451a03';
    ctx.fillRect(0, 0, 1024, 256);
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 8;
    ctx.strokeRect(6, 6, 1012, 244);
    ctx.fillStyle = '#fef08a';
    ctx.font = 'bold 42px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('ಟಿಪ್ಪು ಸುಲ್ತಾನ್ ಬೇಸಿಗೆ ಅರಮನೆ • ಬೆಂಗಳೂರು ಕೋಟೆ', 512, 85);
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 44px sans-serif';
    ctx.fillText('TIPU SULTAN\'S SUMMER PALACE (1791)', 512, 160);
    ctx.fillStyle = '#f59e0b';
    ctx.font = 'bold 22px monospace';
    ctx.fillText('INDO-ISLAMIC TEAKWOOD ARCHITECTURE • KALASIPALYA', 512, 215);

    const signMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(16, 4),
      new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(signCanvas) })
    );
    signMesh.position.set(0, 3.5, 16.8);
    group.add(signMesh);

    this.scene.add(group);
    this.physicsWorld.addStaticBox(px, 5, pz, 22, 5, 15);
  }

  buildMysorePalace() {
    const px = -300;
    const pz = 120;
    const group = new THREE.Group();
    group.position.set(px, 0, pz);

    const graniteMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.65 }); // Grey fine granite
    const pinkMat = new THREE.MeshStandardMaterial({ color: 0xf43f5e, roughness: 0.4 });   // Pink marble domes
    const goldMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, metalness: 0.85, roughness: 0.15 });
    const archMat = new THREE.MeshStandardMaterial({ color: 0xf1f5f9, roughness: 0.5 });

    // 1. Massive 3-Story Palace Facade (72m length x 32m depth)
    const baseBuilding = new THREE.Mesh(new THREE.BoxGeometry(72, 16, 32), graniteMat);
    baseBuilding.position.y = 8;
    baseBuilding.castShadow = true;
    baseBuilding.receiveShadow = true;
    group.add(baseBuilding);

    // Ornate Seven-Arch Arcade across main front facade
    for (let a = -28; a <= 28; a += 9.3) {
      const archPillar = new THREE.Mesh(new THREE.BoxGeometry(1.2, 15.5, 1.2), archMat);
      archPillar.position.set(a, 8, 16.5);
      archPillar.castShadow = true;
      group.add(archPillar);

      const archCurve = new THREE.Mesh(new THREE.CylinderGeometry(3.5, 3.5, 1.2, 12, 1, false, 0, Math.PI), pinkMat);
      archCurve.position.set(a + 4.65, 14.5, 16.5);
      archCurve.rotation.z = Math.PI / 2;
      group.add(archCurve);
    }

    // 2. Central 42m Tower with Soaring Golden Dome (Gombe Thotti / Durbar Hall)
    const centralTower = new THREE.Mesh(new THREE.BoxGeometry(18, 22, 18), graniteMat);
    centralTower.position.set(0, 22, 2);
    centralTower.castShadow = true;
    group.add(centralTower);

    // Gold central dome (Amba Vilas)
    const centralDome = new THREE.Mesh(new THREE.SphereGeometry(7.5, 20, 16, 0, Math.PI * 2, 0, Math.PI * 0.55), goldMat);
    centralDome.position.set(0, 33, 2);
    centralDome.castShadow = true;
    group.add(centralDome);

    const mainSpire = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.8, 6.5, 8), goldMat);
    mainSpire.position.set(0, 42, 2);
    group.add(mainSpire);

    // 3. 4 Corner Chhatri Towers with Pink Domes
    [[-33, -13], [33, -13], [-33, 13], [33, 13]].forEach(([cx, cz]) => {
      const cornerTower = new THREE.Mesh(new THREE.BoxGeometry(7.5, 20, 7.5), graniteMat);
      cornerTower.position.set(cx, 12, cz);
      cornerTower.castShadow = true;
      group.add(cornerTower);

      const cornerDome = new THREE.Mesh(new THREE.SphereGeometry(4.0, 16, 12, 0, Math.PI * 2, 0, Math.PI * 0.55), pinkMat);
      cornerDome.position.set(cx, 22, cz);
      group.add(cornerDome);

      const cornerSpire = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.4, 3.5, 8), goldMat);
      cornerSpire.position.set(cx, 27, cz);
      group.add(cornerSpire);
    });

    // 4. Night Illumination Light Bulbs (Signature Mysore Palace feature - 100,000 bulbs look!)
    const bulbMat = new THREE.MeshBasicMaterial({ color: 0xfef08a });
    for (let bx = -34; bx <= 34; bx += 4) {
      const b1 = new THREE.Mesh(new THREE.SphereGeometry(0.2, 4, 4), bulbMat);
      b1.position.set(bx, 16.2, 16.4);
      const b2 = new THREE.Mesh(new THREE.SphereGeometry(0.2, 4, 4), bulbMat);
      b2.position.set(bx, 1.2, 16.4);
      group.add(b1, b2);
    }

    // 5. Grand Courtyard & Palace Gate (Jayachamarajendra Art Gate)
    const gateWall = new THREE.Mesh(new THREE.BoxGeometry(84, 0.3, 50), this.materials.sidewalk);
    gateWall.position.set(0, 0.15, 24);
    group.add(gateWall);

    // 6. Illuminated Bilingual Signboard
    const signCanvas = document.createElement('canvas');
    signCanvas.width = 1024;
    signCanvas.height = 256;
    const ctx = signCanvas.getContext('2d');
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, 1024, 256);
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 8;
    ctx.strokeRect(6, 6, 1012, 244);
    ctx.fillStyle = '#fbbf24';
    ctx.font = 'bold 44px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('ಮೈಸೂರು ಅರಮನೆ • ಅಂಬಾ ವಿಲಾಸ', 512, 85);
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 46px sans-serif';
    ctx.fillText('MYSORE PALACE (AMBA VILAS)', 512, 160);
    ctx.fillStyle = '#f59e0b';
    ctx.font = 'bold 22px monospace';
    ctx.fillText('INDO-SARACENIC MASTERPIECE • WODEYAR DYNASTY', 512, 215);

    const signMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(24, 6),
      new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(signCanvas) })
    );
    signMesh.position.set(0, 8, 17.5);
    group.add(signMesh);

    this.scene.add(group);
    this.physicsWorld.addStaticBox(px, 10, pz, 38, 10, 18);
  }

  buildVvPuramFoodStreet() {
    const fx = -40;
    const fz = 220;
    const group = new THREE.Group();
    group.position.set(fx, 0, fz);

    // V.V. Puram Thindi Beedi (Food Street): Cobblestone pedestrian avenue with vibrant food stalls
    const streetLength = 65;
    const street = new THREE.Mesh(new THREE.PlaneGeometry(16, streetLength), this.materials.sidewalk);
    street.rotation.x = -Math.PI / 2;
    street.position.y = 0.08;
    group.add(street);

    // Overhead Festive Festoon String Lights across the street
    for (let sy = -28; sy <= 28; sy += 10) {
      const wire = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 16, 4), this.materials.road);
      wire.position.set(0, 5.2, sy);
      wire.rotation.z = Math.PI / 2;
      group.add(wire);

      [-6, -3, 0, 3, 6].forEach((bx, idx) => {
        const colors = [0xf43f5e, 0xfacc15, 0x22c55e, 0x38bdf8, 0xa855f7];
        const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.22, 6, 6), new THREE.MeshBasicMaterial({ color: colors[idx % colors.length] }));
        bulb.position.set(bx, 5.0, sy);
        group.add(bulb);
      });
    }

    // Iconic Food Stalls on Left and Right sides
    const stalls = [
      { name: 'VB BAKERY', sub: 'Honey Cake & Congress Buns', color: '#b45309', x: -6.5, z: -20 },
      { name: 'ARYA VAISHYA', sub: 'Butter Masala Dosa & Paddus', color: '#dc2626', x: -6.5, z: -5 },
      { name: 'BHASKAR\'S GULKAND', sub: 'Pure Gulkand with Ice Cream', color: '#db2777', x: -6.5, z: 10 },
      { name: 'FILTER COFFEE', sub: 'Degree Coffee & Vada', color: '#78350f', x: -6.5, z: 22 },
      { name: 'AVAREKAI CORNER', sub: 'Hithakbele Saru & Roti', color: '#15803d', x: 6.5, z: -18 },
      { name: 'SHIVAJI DOSA', sub: 'Open Butter Masala Dosa', color: '#ea580c', x: 6.5, z: -3 },
      { name: 'SWEET CORN CHAT', sub: 'Roasted Chana & Sweet Corn', color: '#ca8a04', x: 6.5, z: 12 },
      { name: 'BENGALURU LASSI', sub: 'Mango Lassi & Rabri', color: '#0284c7', x: 6.5, z: 24 }
    ];

    stalls.forEach(s => {
      const stallGroup = new THREE.Group();
      stallGroup.position.set(s.x, 0, s.z);

      // Stall booth
      const booth = new THREE.Mesh(new THREE.BoxGeometry(3.5, 3.2, 5.0), new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.7 }));
      booth.position.y = 1.6;
      stallGroup.add(booth);

      // Canopy awning
      const awning = new THREE.Mesh(new THREE.BoxGeometry(3.8, 0.25, 5.4), new THREE.MeshStandardMaterial({ color: s.color, roughness: 0.4 }));
      awning.position.y = 3.3;
      stallGroup.add(awning);

      // Glowing Signboard
      const signCanvas = document.createElement('canvas');
      signCanvas.width = 512;
      signCanvas.height = 128;
      const ctx = signCanvas.getContext('2d');
      ctx.fillStyle = s.color;
      ctx.fillRect(0, 0, 512, 128);
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 36px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(s.name, 256, 60);
      ctx.fillStyle = '#fef08a';
      ctx.font = 'bold 20px monospace';
      ctx.fillText(s.sub, 256, 102);

      const sign = new THREE.Mesh(new THREE.PlaneGeometry(3.4, 0.9), new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(signCanvas) }));
      sign.position.set(s.x < 0 ? 1.78 : -1.78, 2.7, 0);
      sign.rotation.y = s.x < 0 ? Math.PI / 2 : -Math.PI / 2;
      stallGroup.add(sign);

      group.add(stallGroup);
      this.physicsWorld.addStaticBox(fx + s.x, 1.6, fz + s.z, 1.8, 1.6, 2.6);
    });

    // Grand Entrance Arch: V.V. PURAM FOOD STREET
    const archCanvas = document.createElement('canvas');
    archCanvas.width = 1024;
    archCanvas.height = 256;
    const actx = archCanvas.getContext('2d');
    actx.fillStyle = '#b91c1c';
    actx.fillRect(0, 0, 1024, 256);
    actx.fillStyle = '#fef08a';
    actx.font = 'bold 42px sans-serif';
    actx.textAlign = 'center';
    actx.fillText('ವಿ.ವಿ.ಪುರಂ ತಿಂಡಿ ಬೀದಿ • ಬೆಂಗಳೂರು ಆಹಾರ ಮಾರುಕಟ್ಟೆ', 512, 85);
    actx.fillStyle = '#ffffff';
    actx.font = 'bold 46px sans-serif';
    actx.fillText('V.V. PURAM FOOD STREET (THINDI BEEDI)', 512, 160);
    actx.fillStyle = '#fef08a';
    actx.font = 'bold 24px monospace';
    actx.fillText('AUTHENTIC BENGALURU STREET FOOD HUB', 512, 215);

    const archSign = new THREE.Mesh(new THREE.PlaneGeometry(15, 3.8), new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(archCanvas) }));
    archSign.position.set(0, 6.2, -31);
    group.add(archSign);

    const archBeam = new THREE.Mesh(new THREE.BoxGeometry(16, 0.8, 1.0), new THREE.MeshStandardMaterial({ color: 0x991b1b }));
    archBeam.position.set(0, 6.2, -31);
    group.add(archBeam);

    [-7.5, 7.5].forEach(px => {
      const archPillar = new THREE.Mesh(new THREE.BoxGeometry(1.0, 6.5, 1.0), new THREE.MeshStandardMaterial({ color: 0x991b1b }));
      archPillar.position.set(px, 3.2, -31);
      group.add(archPillar);
    });

    this.scene.add(group);
  }

  buildRussellMarketAndCommercialStreet() {
    const rx = 100;
    const rz = -140;
    const group = new THREE.Group();
    group.position.set(rx, 0, rz);

    const brickMat = new THREE.MeshStandardMaterial({ color: 0x991b1b, roughness: 0.75 }); // Colonial red brick
    const whiteMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.5 });
    const darkMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.8 });

    // 1. Russell Market Historic Heritage Hall (1927)
    const marketHall = new THREE.Mesh(new THREE.BoxGeometry(36, 8, 24), brickMat);
    marketHall.position.y = 4;
    marketHall.castShadow = true;
    group.add(marketHall);

    // Central 28m Colonial Clock Tower
    const tower = new THREE.Mesh(new THREE.BoxGeometry(6.5, 24, 6.5), brickMat);
    tower.position.set(0, 12, 10);
    tower.castShadow = true;
    group.add(tower);

    // Clock Face
    const clock = new THREE.Mesh(new THREE.CircleGeometry(1.8, 16), whiteMat);
    clock.position.set(0, 20, 13.3);
    group.add(clock);

    // Heritage Market Entrance Arch
    const signCanvas = document.createElement('canvas');
    signCanvas.width = 1024;
    signCanvas.height = 256;
    const ctx = signCanvas.getContext('2d');
    ctx.fillStyle = '#7f1d1d';
    ctx.fillRect(0, 0, 1024, 256);
    ctx.fillStyle = '#fef08a';
    ctx.font = 'bold 44px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('ರಸ್ಸೆಲ್ ಮಾರುಕಟ್ಟೆ • ಶಿವಾಜಿನಗರ', 512, 85);
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 44px sans-serif';
    ctx.fillText('RUSSELL MARKET & COMMERCIAL STREET', 512, 160);
    ctx.fillStyle = '#fef08a';
    ctx.font = 'bold 22px monospace';
    ctx.fillText('HISTORIC 1927 HERITAGE BAZAAR & SHOPPING PLAZA', 512, 215);

    const sign = new THREE.Mesh(new THREE.PlaneGeometry(18, 4.5), new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(signCanvas) }));
    sign.position.set(0, 7.5, 12.5);
    group.add(sign);

    this.scene.add(group);
    this.physicsWorld.addStaticBox(rx, 4, rz, 19, 4, 13);
  }

}
