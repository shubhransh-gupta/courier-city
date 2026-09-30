import * as THREE from 'three';

/**
 * BangaloreEnhancements
 * Adds specific Bangalore-realistic enhancements to the game world:
 * - Pothole system for roads
 * - Enhanced Vidhana Soudha with more accurate details
 * - Bangalore-specific dynamic events
 * - Style harmonization to maintain game's aesthetic while adding realism
 */
export class BangaloreEnhancements {
  constructor(scene, physicsWorld, textureGenerator) {
    this.scene = scene;
    this.physicsWorld = physicsWorld;
    this.textureGen = textureGenerator;

    // Pothole system
    this.potholes = [];
    this.maxPotholes = 30; // Limit total potholes for performance
    this.potholeSpawnChance = 0.02; // 2% chance per road segment to have a pothole
    this.potholeMinSize = 0.3; // meters
    this.potholeMaxSize = 1.2; // meters
    this.potholeMinDepth = 0.05; // meters
    this.potholeMaxDepth = 0.2; // meters

    // Enhanced materials for Bangalore realism
    this.initBangaloreMaterials();

    // Events system
    this.activeEvents = [];
    this.eventSpawnTimer = 0;
    this.eventSpawnInterval = 45; // seconds between event checks
  }

  initBangaloreMaterials() {
    // Enhanced Vidhana Soudha materials (more accurate to actual granite)
    this.vidhanaSoudhaMaterials = {
      graniteLight: new THREE.MeshStandardMaterial({
        color: 0xd4d4d4, // Light grey granite
        roughness: 0.8,
        metalness: 0.0
      }),
      graniteDark: new THREE.MeshStandardMaterial({
        color: 0x8e8e8e, // Dark grey granite/pophyry
        roughness: 0.85,
        metalness: 0.02
      }),
      goldAccent: new THREE.MeshStandardMaterial({
        color: 0xffd700, // Gold
        roughness: 0.3,
        metalness: 0.8
      }),
      bronzeAccent: new THREE.MeshStandardMaterial({
        color: 0xcd7f32, // Bronze
        roughness: 0.4,
        metalness: 0.6
      })
    };

    // Pothole material (rough, damaged asphalt)
    this.potholeMaterial = new THREE.MeshStandardMaterial({
      color: 0x1a1a1a, // Very dark, almost black
      roughness: 0.95,
      metalness: 0.0
    });

    // Bangalore event materials
    this.eventMaterials = {
      marketStall: new THREE.MeshStandardMaterial({
        color: 0xff6b6b,
        roughness: 0.8,
        metalness: 0.0
      }),
      festivalBanner: new THREE.MeshStandardMaterial({
        color: 0x4ecdc4,
        roughness: 0.6,
        metalness: 0.1
      }),
      autoRickshawDecoration: new THREE.MeshStandardMaterial({
        color: 0xff9ff3,
        roughness: 0.7,
        metalness: 0.05
      })
    };
  }

  /**
   * Add potholes to a road segment during creation
   * @param {THREE.Mesh} roadMesh - The road mesh to add potholes to
   * @param {number} roadLength - Length of the road segment
   * @param {number} roadWidth - Width of the road segment
   * @param {THREE.Vector3} position - Position of the road segment
   * @param {number} rotationY - Y rotation of the road segment
   */
  addPotholesToRoad(roadMesh, roadLength, roadWidth, position, rotationY = 0) {
    // Determine number of potholes based on road length and chance
    const expectedPotholes = (roadLength / 10) * this.potholeSpawnChance; // ~10m segments
    const potholeCount = Math.floor(expectedPotholes + Math.random());

    for (let i = 0; i < Math.min(potholeCount, this.maxPotholes - this.potholes.length); i++) {
      // Random position along the road
      const t = Math.random(); // 0 to 1 along length
      const u = (Math.random() - 0.5) * 0.8; // -0.4 to 0.4 across width (avoid edges)

      const potholeSize = THREE.MathUtils.lerp(
        this.potholeMinSize,
        this.potholeMaxSize,
        Math.random()
      );

      const potholeDepth = THREE.MathUtils.lerp(
        this.potholeMinDepth,
        this.potholeMaxDepth,
        Math.random()
      );

      // Create pothole depression
      this.createPothole(
        position,
        rotationY,
        t,
        u,
        potholeSize,
        potholeDepth,
        roadLength,
        roadWidth
      );
    }
  }

  /**
   * Create a single pothole at specified road position
   * @param {THREE.Vector3} roadPosition - Base position of road
   * @param {number} roadRotationY - Y rotation of road
   * @param {number} t - Position along road length (0-1)
   * @param {number} u - Position across road width (-0.5 to 0.5)
   * @param {number} size - Pothole diameter
   * @param {number} depth - Pothole depth
   * @param {number} roadLength - Total road length
   * @param {number} roadWidth - Total road width
   */
  createPothole(roadPosition, roadRotationY, t, u, size, depth, roadLength, roadWidth) {
    // Calculate world position
    const alongRoad = (t - 0.5) * roadLength; // -length/2 to +length/2
    const acrossRoad = u * roadWidth; // -width/2 to +width/2

    // Rotate position based on road orientation
    const cosY = Math.cos(roadRotationY);
    const sinY = Math.sin(roadRotationY);

    const worldOffsetX = alongRoad * cosY - acrossRoad * sinY;
    const worldOffsetZ = alongRoad * sinY + acrossRoad * cosY;

    const worldPosition = new THREE.Vector3(
      roadPosition.x + worldOffsetX,
      roadPosition.y, // Keep Y, we'll adjust for depth
      roadPosition.z + worldOffsetZ
    );

    // Create pothole geometry (shallow depression)
    const potholeGeometry = new THREE.CircleGeometry(size / 2, 12);
    const potholeMesh = new THREE.Mesh(potholeGeometry, this.potholeMaterial);
    potholeMesh.rotation.x = -Math.PI / 2; // Lay flat on road
    potholeMesh.position.copy(worldPosition);
    potholeMesh.position.y -= depth / 2; // Sink into road slightly
    potholeMesh.receiveShadow = true;

    // Add to scene
    this.scene.add(potholeMesh);

    // Track pothole for potential effects
    this.potholes.push({
      mesh: potholeMesh,
      position: worldPosition.clone(),
      size: size,
      depth: depth,
      roadNormal: new THREE.Vector3(0, 1, 0) // Assuming flat road
    });

    // Note: For collision effects, vehicles would need to detect proximity to potholes
    // and apply appropriate suspension bumps. This would be handled in vehicle physics.
  }

  /**
   * Create an enhanced, more realistic Vidhana Soudha
   * @returns {THREE.Group} - The enhanced Vidhana Soudha group
   */
  createEnhancedVidhanaSoudha() {
    const soudhaGroup = new THREE.Group();
    soudhaGroup.position.set(-240, 0, -40);

    // More accurate materials based on actual Vidhana Soudha
    const materials = this.vidhanaSoudhaMaterials;

    // 1. Grand Ceremonial Boulevard (more accurate dimensions)
    // Actual boulevard is about 50m long, 45m wide
    const boulevard = new THREE.Mesh(
      new THREE.BoxGeometry(50, 0.3, 45),
      materials.graniteLight
    );
    boulevard.position.set(25, 0.15, 0);
    boulevard.receiveShadow = true;
    soudhaGroup.add(boulevard);

    // 2. Central Garden with more accurate fountain
    const fountainBase = new THREE.Mesh(
      new THREE.CylinderGeometry(6, 6, 0.6, 32),
      materials.graniteDark
    );
    fountainBase.position.set(25, 0.3, 0);
    soudhaGroup.add(fountainBase);

    const fountainWater = new THREE.Mesh(
      new THREE.CylinderGeometry(5, 5, 0.3, 32),
      new THREE.MeshStandardMaterial({
        color: 0x1e90ff,
        roughness: 0.1,
        metalness: 0.7,
        transparent: true,
        opacity: 0.8
      })
    );
    fountainWater.position.set(25, 0.6, 0);
    soudhaGroup.add(fountainWater);

    // 3. Enhanced colonnades with more accurate proportions
    // Actual Vidhana Soudha has 40 granite columns
    for (let i = 0; i < 40; i++) {
      const angle = (i / 40) * Math.PI * 2;
      const radius = 22; // Radius of colonnade circle

      const column = new THREE.Mesh(
        new THREE.CylinderGeometry(1.0, 1.2, 12, 16),
        materials.graniteLight
      );
      column.position.set(
        Math.cos(angle) * radius,
        6, // Half height
        Math.sin(angle) * radius
      );
      column.castShadow = true;
      soudhaGroup.add(column);
    }

    // 4. Main palace block with more accurate proportions
    // Actual main block is approximately 70m x 35m x 20m
    const mainBlock = new THREE.Mesh(
      new THREE.BoxGeometry(70, 20, 35),
      materials.graniteLight
    );
    mainBlock.position.set(0, 10, 0);
    mainBlock.castShadow = true;
    soudhaGroup.add(mainBlock);

    // 5. Central dome (more accurate)
    // Inner dome diameter ~20m, outer ~24m
    const domeDrum = new THREE.Mesh(
      new THREE.CylinderGeometry(10, 10.5, 6, 24),
      materials.graniteLight
    );
    domeDrum.position.set(0, 17, 0);
    soudhaGroup.add(domeDrum);

    const dome = new THREE.Mesh(
      new THREE.SphereGeometry(10, 16, 12, 0, Math.PI * 2, 0, Math.PI / 2),
      materials.graniteLight
    );
    dome.position.set(0, 23, 0);
    soudhaGroup.add(dome);

    // 6. Golden finial (kalasha)
    const kalashaBase = new THREE.Mesh(
      new THREE.CylinderGeometry(1.5, 1.5, 2, 16),
      materials.goldAccent
    );
    kalashaBase.position.set(0, 29, 0);
    soudhaGroup.add(kalashaBase);

    const kalasha = new THREE.Mesh(
      new THREE.ConeGeometry(1.5, 3, 12),
      materials.goldAccent
    );
    kalasha.position.set(0, 31, 0);
    soudhaGroup.add(kalasha);

    // 7. Four corner chhatris (domed pavilions)
    const chhatriPositions = [
      [-28, -12], [28, -12], [-28, 12], [28, 12]
    ];

    chhatriPositions.forEach(([x, z]) => {
      // Chhatri platform
      const platform = new THREE.Mesh(
        new THREE.BoxGeometry(6, 1.5, 6),
        materials.graniteLight
      );
      platform.position.set(x, 7.5, z);
      soudhaGroup.add(platform);

      // Chhatri dome
      const dome = new THREE.Mesh(
        new THREE.SphereGeometry(2.5, 12, 12, 0, Math.PI * 2, 0, Math.PI / 2),
        materials.graniteLight
      );
      dome.position.set(x, 11, z);
      soudhaGroup.add(dome);

      // Golden pinnacle
      const pinnacle = new THREE.Mesh(
        new THREE.ConeGeometry(0.8, 1.5, 8),
        materials.goldAccent
      );
      pinnacle.position.set(x, 12.5, z);
      soudhaGroup.add(pinnacle);
    });

    // 8. Entrance staircase (more accurate)
    // Actual entrance has about 40 steps
    const staircase = new THREE.Mesh(
      new THREE.BoxGeometry(30, 2.5, 18),
      materials.graniteDark
    );
    staircase.position.set(0, 1.25, 12);
    staircase.receiveShadow = true;
    soudhaGroup.add(staircase);

    // 9. Enhanced surroundings - more accurate landscaping
    // Add some trees and vegetation around the periphery
    this.addVidhanaSoudhaSurroundings(soudhaGroup);

    // Add collision boxes for physics
    this.addVidhanaSoudhaCollisions(soudhaGroup);

    this.scene.add(soudhaGroup);
    return soudhaGroup;
  }

  addVidhanaSoudhaSurroundings(group) {
    // Add some trees and bushes around Vidhana Soudha
    // In reality, there are trees and gardens around the building
    const treePositions = [
      [-35, -20], [35, -20], [-35, 20], [35, 20],
      [-45, 0], [45, 0],
      [0, -30], [0, 30]
    ];

    treePositions.forEach(([xz, zz]) => {
      // Randomly choose between different tree types
      const treeType = Math.floor(Math.random() * 3);
      let treeHeight = 3 + Math.random() * 2;
      let treeWidth = 1.5 + Math.random() * 1;

      switch (treeType) {
        case 0: // Tall tree (like Ashoka or similar)
          this.createSimpleTree(
            group,
            xz,
            zz,
            treeHeight,
            treeWidth,
            0x228b22, // Forest green
            0x8b4513  // Saddle brown trunk
          );
          break;
        case 1: // Palm tree
          this.createSimplePalmTree(
            group,
            xz,
            zz,
            6 + Math.random() * 3,
            0x228b22,
            0x8b4513
          );
          break;
        case 2: // Bushy tree
          this.createSimpleBushyTree(
            group,
            xz,
            zz,
            2.5 + Math.random() * 1.5,
            2 + Math.random() * 1,
            0x32cd32, // Lime green
            0x654321  // Brown trunk
          );
          break;
      }
    });
  }

  createSimpleTree(group, x, z, height, width, leafColor, trunkColor) {
    const treeGroup = new THREE.Group();
    treeGroup.position.set(x, 0, z);
    group.add(treeGroup);

    // Trunk
    const trunk = new THREE.Mesh(
      new THREE.CylinderGeometry(width * 0.3, width * 0.2, height * 0.6, 8),
      new THREE.MeshStandardMaterial({ color: trunkColor, roughness: 0.9 })
    );
    trunk.position.y = height * 0.3;
    trunk.castShadow = true;
    treeGroup.add(trunk);

    // Foliage
    const foliage = new THREE.Mesh(
      new THREE.ConeGeometry(width, height * 0.5, 4),
      new THREE.MeshStandardMaterial({ color: leafColor, roughness: 0.85 })
    );
    foliage.position.y = height * 0.6;
    foliage.castShadow = true;
    treeGroup.add(foliage);
  }

  createSimplePalmTree(group, x, z, height, leafColor, trunkColor) {
    const treeGroup = new THREE.Group();
    treeGroup.position.set(x, 0, z);
    group.add(treeGroup);

    // Trunk
    const trunk = new THREE.Mesh(
      new THREE.CylinderGeometry(0.15, 0.18, height, 10),
      new THREE.MeshStandardMaterial({ color: trunkColor, roughness: 0.8 })
    );
    trunk.position.y = height / 2;
    trunk.castShadow = true;
    treeGroup.add(trunk);

    // Fronds
    const frondCount = 8;
    for (let i = 0; i < frondCount; i++) {
      const angle = (i / frondCount) * Math.PI * 2;
      const frondLength = 2.0;
      const frondWidth = 0.3;

      const frond = new THREE.Mesh(
        new THREE.BoxGeometry(frondWidth, 0.1, frondLength),
        new THREE.MeshStandardMaterial({ color: leafColor, roughness: 0.85 })
      );
      frond.position.set(
        Math.cos(angle) * height * 0.7,
        height * 0.8,
        Math.sin(angle) * height * 0.7
      );
      frond.rotation.z = angle;
      frond.rotation.x = -0.3;
      treeGroup.add(frond);
    }
  }

  createSimpleBushyTree(group, x, z, height, width, leafColor, trunkColor) {
    const treeGroup = new THREE.Group();
    treeGroup.position.set(x, 0, z);
    group.add(treeGroup);

    // Trunk
    const trunk = new THREE.Mesh(
      new THREE.CylinderGeometry(width * 0.4, width * 0.3, height * 0.4, 8),
      new THREE.MeshStandardMaterial({ color: trunkColor, roughness: 0.9 })
    );
    trunk.position.y = height * 0.2;
    trunk.castShadow = true;
    treeGroup.add(trunk);

    // Bushy foliage (multiple spheres)
    const foliageCount = 5;
    for (let i = 0; i < foliageCount; i++) {
      const foliage = new THREE.Mesh(
        new THREE.SphereGeometry(width * 0.5, 8, 8),
        new THREE.MeshStandardMaterial({ color: leafColor, roughness: 0.9 })
      );
      const offset = (i - foliageCount / 2) * width * 0.3;
      foliage.position.set(
        offset,
        height * 0.4,
        0
      );
      foliage.castShadow = true;
      treeGroup.add(foliage);
    }
  }

  addVidhanaSoudhaCollisions(group) {
    // Add simplified collision boxes for physics
    // Main block
    this.physicsWorld.addStaticBox(-240, 10, -40, 35, 10, 17.5);

    // Dome area
    this.physicsWorld.addStaticBox(-240, 23, -40, 10, 6, 10);

    // Entrance staircase
    this.physicsWorld.addStaticBox(-240, 1.25, -22, 15, 1.25, 9);

    // Boulevard
    this.physicsWorld.addStaticBox(-240, 0.15, 5, 22.5, 0.15, 12.5);
  }

  /**
   * Add Bangalore-specific dynamic events to the world
   * Should be called periodically to spawn new events
   */
  spawnBangaloreEvent(dt) {
    this.eventSpawnTimer -= dt;
    if (this.eventSpawnTimer > 0) return;

    this.eventSpawnTimer = this.eventSpawnInterval;

    // Randomly choose an event type
    const eventTypes = [
      'flowerMarket',
      'autoRickshawRally',
      'streetFoodFestival',
      'techMeetup',
      'culturalPerformance',
      'rainShower'
    ];

    const eventType = eventTypes[Math.floor(Math.random() * eventTypes.length)];

    // Spawn the event
    switch (eventType) {
      case 'flowerMarket':
        this.spawnFlowerMarketEvent();
        break;
      case 'autoRickshawRally':
        this.spawnAutoRickshawRallyEvent();
        break;
      case 'streetFoodFestival':
        this.spawnStreetFoodFestivalEvent();
        break;
      case 'techMeetup':
        this.spawnTechMeetupEvent();
        break;
      case 'culturalPerformance':
        this.spawnCulturalPerformanceEvent();
        break;
      case 'rainShower':
        this.spawnRainShowerEvent();
        break;
    }
  }

  spawnFlowerMarketEvent() {
    // Bangalore is famous for its flower markets
    // Create temporary flower stalls at specific locations
    const marketLocations = [
      [-100, 80],   // Near KR Market area
      [100, -80],   // Near Jayanagar
      [0, 150],     // Near MG Road
      [-150, 0],    // Near Basavanagudi
    ];

    const location = marketLocations[Math.floor(Math.random() * marketLocations.length)];
    const [x, z] = location;

    // Create 3-5 flower stalls
    const stallCount = 3 + Math.floor(Math.random() * 3);
    for (let i = 0; i < stallCount; i++) {
      const offsetX = (Math.random() - 0.5) * 10;
      const offsetZ = (Math.random() - 0.5) * 10;

      const stall = this.createFlowerStall(x + offsetX, z + offsetZ);
      this.activeEvents.push({
        type: 'flowerMarket',
        object: stall,
        spawnTime: performance.now(),
        duration: 120000 // 2 minutes
      });
      this.scene.add(stall);
    }
  }

  createFlowerStall(x, z) {
    const stallGroup = new THREE.Group();
    stallGroup.position.set(x, 0, z);

    // Stall platform
    const platform = new THREE.Mesh(
      new THREE.BoxGeometry(2, 0.2, 1.5),
      new THREE.MeshStandardMaterial({ color: 0x8b4513 })
    );
    platform.position.y = 0.1;
    stallGroup.add(platform);

    // Stall canopy
    const canopy = new THREE.Mesh(
      new THREE.BoxGeometry(2.5, 0.3, 2),
      this.eventMaterials.marketStall
    );
    canopy.position.y = 0.4;
    stallGroup.add(canopy);

    // Flower displays (simple colorful spheres)
    const flowerColors = [0xff69b4, 0xffb6c1, 0xadd8e6, 0x98fb98, 0xffd700, 0xffa500];
    for (let i = 0; i < 6; i++) {
      const flower = new THREE.Mesh(
        new THREE.SphereGeometry(0.2, 8, 8),
        new THREE.MeshStandardMaterial({ color: flowerColors[i % flowerColors.length] })
      );
      flower.position.set(
        -0.8 + i * 0.3,
        0.3,
        0
      );
      stallGroup.add(flower);
    }

    return stallGroup;
  }

  spawnAutoRickshawRallyEvent() {
    // Bangalore has lots of auto-rickshaws, occasional rallies
    const rallyLocations = [
      [-50, 50],
      [50, -50],
      [100, 100],
      [-100, -100]
    ];

    const location = rallyLocations[Math.floor(Math.random() * rallyLocations.length)];
    const [x, z] = location;

    // Create 5-8 decorated auto-rickshaws
    const rickshawCount = 5 + Math.floor(Math.random() * 4);
    for (let i = 0; i < rickshawCount; i++) {
      const offsetX = (Math.random() - 0.5) * 20;
      const offsetZ = (Math.random() - 0.5) * 20;

      const rickshaw = this.createDecoratedAutoRickshaw(x + offsetX, z + offsetZ);
      this.activeEvents.push({
        type: 'autoRickshawRally',
        object: rickshaw,
        spawnTime: performance.now(),
        duration: 180000 // 3 minutes
      });
      this.scene.add(rickshaw);
    }
  }

  createDecoratedAutoRickshaw(x, z) {
    const rickshawGroup = new THREE.Group();
    rickshawGroup.position.set(x, 0, z);
    rickshawGroup.rotation.y = Math.random() * Math.PI * 2; // Random orientation

    // Basic auto-rickshaw shape
    const body = new THREE.Mesh(
      new THREE.BoxGeometry(1.8, 1.0, 2.5),
      new THREE.MeshStandardMaterial({ color: 0xfacc15 }) // Classic yellow
    );
    body.position.y = 0.75;
    body.castShadow = true;
    rickshawGroup.add(body);

    // Roof
    const roof = new THREE.Mesh(
      new THREE.BoxGeometry(2.0, 0.4, 2.7),
      this.eventMaterials.autoRickshawDecoration
    );
    roof.position.y = 1.55;
    rickshawGroup.add(roof);

    // Decorative elements (stripes, patterns)
    const stripe = new THREE.Mesh(
      new THREE.BoxGeometry(0.05, 0.8, 2.2),
      new THREE.MeshStandardMaterial({ color: 0xff0000 }) // Red stripe
    );
    stripe.position.set(0, 0.9, 0);
    rickshawGroup.add(stripe);

    // Wheels
    const wheelGeo = new THREE.CylinderGeometry(0.25, 0.25, 0.2, 12);
    wheelGeo.rotateZ(Math.PI / 2);
    const wheelMat = new THREE.MeshStandardMaterial({ color: 0x000000 });

    const wheelFL = new THREE.Mesh(wheelGeo, wheelMat);
    wheelFL.position.set(-0.7, 0.2, 1.0);
    rickshawGroup.add(wheelFL);

    const wheelFR = new THREE.Mesh(wheelGeo, wheelMat);
    wheelFR.position.set(0.7, 0.2, 1.0);
    wheelFR.rotation.y = Math.PI / 2;
    rickshawGroup.add(wheelFR);

    const wheelRL = new THREE.Mesh(wheelGeo, wheelMat);
    wheelRL.position.set(-0.7, 0.2, -1.0);
    rickshawGroup.add(wheelRL);

    const wheelRR = new THREE.Mesh(wheelGeo, wheelMat);
    wheelRR.position.set(0.7, 0.2, -1.0);
    wheelRR.rotation.y = Math.PI / 2;
    rickshawGroup.add(wheelRR);

    return rickshawGroup;
  }

  spawnStreetFoodFestivalEvent() {
    // Bangalore has amazing street food culture
    const festivalLocations = [
      [-80, 40],   // VV Puram food street area
      [80, -40],   // Gandhi Bazaar area
      [0, -100],   // Basavanagudi
      [60, 60]     // Koramangala
    ];

    const location = festivalLocations[Math.floor(Math.random() * festivalLocations.length)];
    const [x, z] = location;

    // Create 4-6 food stalls
    const stallCount = 4 + Math.floor(Math.random() * 3);
    for (let i = 0; i < stallCount; i++) {
      const offsetX = (Math.random() - 0.5) * 15;
      const offsetZ = (Math.random() - 0.5) * 15;

      const stall = this.createFoodStall(x + offsetX, z + offsetZ);
      this.activeEvents.push({
        type: 'streetFoodFestival',
        object: stall,
        spawnTime: performance.now(),
        duration: 150000 // 2.5 minutes
      });
      this.scene.add(stall);
    }
  }

  createFoodStall(x, z) {
    const stallGroup = new THREE.Group();
    stallGroup.position.set(x, 0, z);

    // Stall base
    const base = new THREE.Mesh(
      new THREE.BoxGeometry(1.8, 0.25, 1.2),
      new THREE.MeshStandardMaterial({ color: 0x654321 })
    );
    base.position.y = 0.125;
    stallGroup.add(base);

    // Cooking area (slightly raised)
    const cooker = new THREE.Mesh(
      new THREE.BoxGeometry(1.5, 0.3, 1.0),
      new THREE.MeshStandardMaterial({ color: 0x8b0000 })
    );
    cooker.position.set(0, 0.4, 0.2);
    stallGroup.add(cooker);

    // Serving counter
    const counter = new THREE.Mesh(
      new THREE.BoxGeometry(1.6, 0.4, 0.2),
      new THREE.MeshStandardMaterial({ color: 0xdeb887 })
    );
    counter.position.set(0, 0.45, -0.6);
    stallGroup.add(counter);

    // Food items (simple colorful representations)
    const foodColors = [0xff4500, 0xffe4b5, 0x8b4513, 0xadff2f, 0x00ced1];
    for (let i = 0; i < 4; i++) {
      const food = new THREE.Mesh(
        new THREE.SphereGeometry(0.15, 6, 6),
        new THREE.MeshStandardMaterial({ color: foodColors[i % foodColors.length] })
      );
      food.position.set(
        -0.6 + i * 0.4,
        0.4,
        0.2
      );
      stallGroup.add(food);
    }

    return stallGroup;
  }

  spawnTechMeetupEvent() {
    // Bangalore is India's Silicon Valley
    const techLocations = [
      [-20, 100],  // Many tech parks in east Bangalore
      [100, -20],  // West Bangalore tech corridors
      [80, 80],    // Whitefield area
      [-100, 80]   // Electronic City
    ];

    const location = techLocations[Math.floor(Math.random() * techLocations.length)];
    const [x, z] = location;

    // Create a tech event banner or temporary structure
    const eventObj = this.createTechEventBanner(x, z);
    this.activeEvents.push({
      type: 'techMeetup',
      object: eventObj,
      spawnTime: performance.now(),
      duration: 240000 // 4 minutes
    });
    this.scene.add(eventObj);
  }

  createTechEventBanner(x, z) {
    const bannerGroup = new THREE.Group();
    bannerGroup.position.set(x, 0, z);

    // Banner pole
    const pole = new THREE.Mesh(
      new THREE.CylinderGeometry(0.1, 0.1, 4, 8),
      new THREE.MeshStandardMaterial({ color: 0x2f2f2f })
    );
    pole.position.y = 2;
    bannerGroup.add(pole);

    // Banner fabric
    const banner = new THREE.Mesh(
      new THREE.PlaneGeometry(3, 2),
      new THREE.MeshStandardMaterial({
        color: 0x00bfff,
        roughness: 0.6,
        metalness: 0.1
      })
    );
    banner.position.y = 3;
    bannerGroup.add(banner);

    // Tech symbols (simple geometric shapes)
    const circuit = new THREE.Mesh(
      new THREE.BoxGeometry(0.2, 0.05, 1.5),
      new THREE.MeshStandardMaterial({ color: 0x00ff00 })
    );
    circuit.position.set(-0.8, 3.1, 0);
    bannerGroup.add(circuit);

    const chip = new THREE.Mesh(
      new THREE.BoxGeometry(0.3, 0.3, 0.1),
      new THREE.MeshStandardMaterial({ color: 0xffa500 })
    );
    chip.position.set(0.8, 3.1, 0);
    bannerGroup.add(chip);

    return bannerGroup;
  }

  spawnCulturalPerformanceEvent() {
    // Bangalore has rich cultural traditions
    const cultureLocations = [
      [0, 0],      // Central area (near Vidhana Soudha)
      [-60, 60],   // Near UB City
      [60, -60],   // Opposite side
      [-100, -100] // South Bangalore
    ];

    const location = cultureLocations[Math.floor(Math.random() * cultureLocations.length)];
    const [x, z] = location;

    // Create a small performance stage
    const stage = this.createPerformanceStage(x, z);
    this.activeEvents.push({
      type: 'culturalPerformance',
      object: stage,
      spawnTime: performance.now(),
      duration: 200000 // ~3.5 minutes
    });
    this.scene.add(stage);
  }

  createPerformanceStage(x, z) {
    const stageGroup = new THREE.Group();
    stageGroup.position.set(x, 0, z);

    // Stage platform
    const platform = new THREE.Mesh(
      new THREE.BoxGeometry(4, 0.3, 3),
      new THREE.MeshStandardMaterial({ color: 0x8b4513 })
    );
    platform.position.y = 0.15;
    stageGroup.add(platform);

    // Steps
    const step1 = new THREE.Mesh(
      new THREE.BoxGeometry(3.8, 0.15, 0.4),
      new THREE.MeshStandardMaterial({ color: 0x654321 })
    );
    step1.position.set(0, 0.225, -1.4);
    stageGroup.add(step1);

    const step2 = new THREE.Mesh(
      new THREE.BoxGeometry(3.6, 0.15, 0.3),
      new THREE.MeshStandardMaterial({ color: 0x654321 })
    );
    step2.position.set(0, 0.075, -1.2);
    stageGroup.add(step2);

    // Background curtain
    const curtain = new THREE.Mesh(
      new THREE.PlaneGeometry(3.5, 2),
      new THREE.MeshStandardMaterial({ color: 0x9370db, roughness: 0.8 })
    );
    curtain.position.set(0, 1.2, 1.6);
    stageGroup.add(curtain);

    // Performer (simple representation)
    const performer = new THREE.Mesh(
      new THREE.CylinderGeometry(0.2, 0.2, 1.2, 12),
      new THREE.MeshStandardMaterial({ color: 0xff69b4 })
    );
    performer.position.set(0, 0.75, 0);
    stageGroup.add(performer);

    return stageGroup;
  }

  spawnRainShowerEvent() {
    // Bangalore has pleasant weather with occasional rain
    // For now, we'll just log it - in a full implementation,
    # we would add particle effects for rain
    console.log("Bangalore rain shower event triggered!");

    // In a complete implementation, we would:
    // 1. Add rain particle system
    // 2. Make roads slightly more reflective
    // 3. Add occasional thunder sounds
    // 4. Make pedestrians use umbrellas

    // For this version, we'll just create a visual indicator
    const rainIndicator = this.createRainIndicator(0, 0);
    this.activeEvents.push({
      type: 'rainShower',
      object: rainIndicator,
      spawnTime: performance.now(),
      duration: 60000 // 1 minute
    });
    this.scene.add(rainIndicator);
  }

  createRainIndicator(x, z) {
    // Create a simple visual indicator for rain
    const indicatorGroup = new THREE.Group();
    indicatorGroup.position.set(x, 5, z); // Above ground

    // Rain cloud (simple grey sphere)
    const cloud = new THREE.Mesh(
      new THREE.SphereGeometry(3, 12, 12),
      new THREE.MeshStandardMaterial({
        color: 0x696969,
        roughness: 0.8,
        metalness: 0.0,
        transparent: true,
        opacity: 0.6
      })
    );
    indicatorGroup.add(cloud);

    // Rain drops (simple lines)
    for (let i = 0; i < 10; i++) {
      const drop = new THREE.Mesh(
        new THREE.BoxGeometry(0.05, 0.05, 0.8),
        new THREE.MeshStandardMaterial({ color: 0xadd8e6 })
      );
      drop.position.set(
        -1 + i * 0.2,
        2,
        0
      );
      indicatorGroup.add(drop);
    }

    return indicatorGroup;
  }

  /**
   * Update time-based effects like pothole water accumulation
   */
  updateEffects(dt) {
    // Update active events (remove expired ones)
    const currentTime = performance.now();
    this.activeEvents = this.activeEvents.filter(
      event => currentTime - event.spawnTime < event.duration
    );

    // In a full implementation, we would:
    // 1. Update rain particle systems
    // 2. Update pothole water levels (simulate evaporation/filling)
    // 3. Update dynamic lighting for time of day
  }

  /**
   * Get pothole effects for a vehicle at given position
   * Returns: [bumpForce, slipFactor] array for vehicle physics
   */
  getPotholeEffects(vehiclePosition, vehicleSpeed) {
    if (this.potholes.length === 0) return [0.0, 0.0];

    // Find nearby potholes
    const maxEffectDistance = 2.0; // meters
    let totalBump = 0.0;
    let totalSlip = 0.0;

    for (const pothole of this.potholes) {
      const distance = vehiclePosition.distanceTo(pothole.position);
      if (distance < maxEffectDistance) {
        // Effect decreases with distance
        const effectFactor = 1.0 - (distance / maxEffectDistance);

        // Bump effect (vertical force)
        const bumpMagnitude = pothole.depth * 10.0 * effectFactor; // Scale for physics
        totalBump += bumpMagnitude;

        // Slip effect (lateral force when hitting pothole at angle)
        // Simplified: more slip when crossing pothole diagonally
        const slipMagnitude = pothole.size * 5.0 * effectFactor * 0.3;
        totalSlip += slipMagnitude;
      }
    }

    return [Math.min(totalBump, 5.0), Math.min(totalSlip, 2.0)]; // Cap effects
  }
}

// Convenience function to add potholes to existing roads
function enhanceExistingRoadsWithPotholes(scene, physicsWorld, textureGenerator) {
  // This would be called during road creation in CityBuilder
  // For existing roads, we'd need to traverse the scene and find road meshes
  // For simplicity, this is designed to be used during road creation
  return new BangaloreEnhancements(scene, physicsWorld, textureGenerator);
}

export { BangaloreEnhancements, enhanceExistingRoadsWithPotholes };