import * as THREE from 'three';
import { TextureGenerator } from './TextureGenerator.js';

/**
 * BengaluruEnvironment
 * Adds authentic Bengaluru-specific environmental elements:
 * - Gulmohar and Tabebuia trees (iconic Bangalore flora)
 * - Bengaluru-specific asphalt textures with realistic details
 * - Namma Metro viaducts and pillars
 * - Roadside tea stalls/Darshinis
 * - Commercial signboards (bilingual Kannada/English)
 * - Distinct boundary walls
 * - Bengaluru-style street furniture
 */
export class BengaluruEnvironment {
  constructor(scene, physicsWorld, textureGenerator) {
    this.scene = scene;
    this.physicsWorld = physicsWorld;
    this.textureGen = textureGenerator;

    // Bengaluru-specific materials
    this.initBengaluruMaterials();

    // Bengaluru-specific vegetation
    this.initBengaluruVegetation();
  }

  initBengaluruMaterials() {
    // Enhanced asphalt texture for Bengaluru roads with patchwork and wear
    this.bengaluruAsphalt = this.textureGen.createAsphaltTexture(1024);
    this.bengaluruAsphalt.wrapS = THREE.RepeatWrapping;
    this.bengaluruAsphalt.wrapT = THREE.RepeatWrapping;
    this.bengaluruAsphalt.repeat.set(8, 8);

    // Bengaluru boundary wall material (laterite stone common in Karnataka)
    this.boundaryWall = new THREE.MeshStandardMaterial({
      color: 0x8b4513, // Saddle brown for laterite
      roughness: 0.9,
      metalness: 0.0
    });

    // Bengaluru street vendor metal roof (galvanized iron)
    this.vendorRoof = new THREE.MeshStandardMaterial({
      color: 0xb0c4de, // Light steel blue
      metalness: 0.8,
      roughness: 0.2
    });

    // Kannada/English bilingual sign material
    this.signBoard = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.4,
      metalness: 0.1
    });

    // Namma Metro concrete pillars
    this.metroPillar = new THREE.MeshStandardMaterial({
      color: 0x2f2f2f, // Dark concrete
      roughness: 0.85,
      metalness: 0.02
    });

    // Namma Metro viaduct steel
    this.metroSteel = new THREE.MeshStandardMaterial({
      color: 0x4a5568, // Steel blue-gray
      metalness: 0.9,
      roughness: 0.1
    });
  }

  initBengaluruVegetation() {
    // Gulmohar tree (Delonix regia) - iconic Bangalore tree with fiery red-orange flowers
    this.gulmoharMaterial = {
      trunk: new THREE.MeshStandardMaterial({
        color: 0x8b4513,
        roughness: 0.85,
        metalness: 0.02
      }),
      leaves: new THREE.MeshStandardMaterial({
        color: 0x228b22, // Forest green
        roughness: 0.8,
        metalness: 0.0
      }),
      flowers: new THREE.MeshStandardMaterial({
        color: 0xff4500, // Orange red
        roughness: 0.3,
        metalness: 0.0
      })
    };

    // Tabebuia tree (Tabebuia aurea) - Bangalore's yellow trumpet tree
    this.tabebuiaMaterial = {
      trunk: new THREE.MeshStandardMaterial({
        color: 0x8b4513,
        roughness: 0.85,
        metalness: 0.02
      }),
      leaves: new THREE.MeshStandardMaterial({
        color: 0x228b22,
        roughness: 0.8,
        metalness: 0.0
      }),
      flowers: new THREE.MeshStandardMaterial({
        color: 0xffff00, // Yellow
        roughness: 0.3,
        metalness: 0.0
      })
    };
  }

  /**
   * Create a Gulmohar tree (iconic Bangalore flora)
   * @param {number} x - X position
   * @param {number} z - Z position
   * @param {number} scale - Scale factor
   */
  createGulmoharTree(x, z, scale = 1.0) {
    const group = new THREE.Group();
    group.position.set(x, 0, z);
    group.scale.set(scale, scale, scale);

    // Trunk
    const trunkHeight = 5.0 * scale;
    const trunkRadius = 0.3 * scale;
    const trunkGeo = new THREE.CylinderGeometry(trunkRadius, trunkRadius * 1.1, trunkHeight, 8);
    const trunk = new THREE.Mesh(trunkGeo, this.gulmoharMaterial.trunk);
    trunk.position.y = trunkHeight / 2;
    trunk.castShadow = true;
    group.add(trunk);

    // Canopy (umbrella-like shape typical of Gulmohar)
    const canopyRadius = 4.0 * scale;
    const canopyGeo = new THREE.SphereGeometry(canopyRadius, 12, 12, 0, Math.PI * 2, 0, Math.PI * 0.6);
    const canopy = new THREE.Mesh(canopyGeo, this.gulmoharMaterial.leaves);
    canopy.position.y = trunkHeight + canopyRadius * 0.3;
    canopy.castShadow = true;
    group.add(canopy);

    // Flower clusters (seasonal)
    const flowerGeo = new THREE.SphereGeometry(0.3 * scale, 6, 6);
    // Add several flower clusters around the canopy
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const height = Math.random() * canopyRadius * 0.6 + canopyRadius * 0.2;
      const offsetX = Math.cos(angle) * canopyRadius * 0.7;
      const offsetZ = Math.sin(angle) * canopyRadius * 0.7;

      const flower = new THREE.Mesh(flowerGeo, this.gulmoharMaterial.flowers);
      flower.position.set(
        offsetX,
        trunkHeight + height,
        offsetZ
      );
      group.add(flower);
    }

    this.scene.add(group);
    // Add physics collision for the trunk
    this.physicsWorld.addStaticBox(x, trunkHeight/2, z, trunkRadius, trunkHeight/2, trunkRadius, false, false, true);

    return group;
  }

  /**
   * Create a Tabebuia tree (Bangalore's yellow trumpet tree)
   * @param {number} x - X position
   * @param {number} z - Z position
   * @param {number} scale - Scale factor
   */
  createTabebuiaTree(x, z, scale = 1.0) {
    const group = new THREE.Group();
    group.position.set(x, 0, z);
    group.scale.set(scale, scale, scale);

    // Trunk
    const trunkHeight = 4.5 * scale;
    const trunkRadius = 0.25 * scale;
    const trunkGeo = new THREE.CylinderGeometry(trunkRadius, trunkRadius * 1.05, trunkHeight, 8);
    const trunk = new THREE.Mesh(trunkGeo, this.tabebuiaMaterial.trunk);
    trunk.position.y = trunkHeight / 2;
    trunk.castShadow = true;
    group.add(trunk);

    // Canopy (more rounded than Gulmohar)
    const canopyRadius = 3.5 * scale;
    const canopyGeo = new THREE.SphereGeometry(canopyRadius, 10, 10);
    const canopy = new THREE.Mesh(canopyGeo, this.tabebuiaMaterial.leaves);
    canopy.position.y = trunkHeight + canopyRadius * 0.2;
    canopy.castShadow = true;
    group.add(canopy);

    // Flower clusters
    const flowerGeo = new THREE.SphereGeometry(0.25 * scale, 6, 6);
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2;
      const height = Math.random() * canopyRadius * 0.5 + canopyRadius * 0.1;
      const offsetX = Math.cos(angle) * canopyRadius * 0.6;
      const offsetZ = Math.sin(angle) * canopyRadius * 0.6;

      const flower = new THREE.Mesh(flowerGeo, this.tabebuiaMaterial.flowers);
      flower.position.set(
        offsetX,
        trunkHeight + height,
        offsetZ
      );
      group.add(flower);
    }

    this.scene.add(group);
    // Add physics collision
    this.physicsWorld.addStaticBox(x, trunkHeight/2, z, trunkRadius, trunkHeight/2, trunkRadius, false, false, true);

    return group;
  }

  /**
   * Create Bengaluru-style asphalt road with realistic details
   * @param {number} width - Road width in meters
   * @param {number} length - Road length in meters
   * @returns {THREE.Mesh} - Road mesh
   */
  createBengaluruRoad(width, length) {
    // Main asphalt surface
    const roadGeo = new THREE.PlaneGeometry(width, length);
    const road = new THREE.Mesh(roadGeo, new THREE.MeshStandardMaterial({
      map: this.bengaluruAsphalt,
      roughness: 0.85,
      metalness: 0.05
    }));
    road.rotation.x = -Math.PI / 2;
    road.receiveShadow = true;

    return road;
  }

  /**
   * Create Namma Metro viaduct section
   * @param {number} length - Length of viaduct section
   * @param {number} height - Height above ground
   * @param {number} width - Width of viaduct
   * @returns {THREE.Group} - Viaduct group
   */
  createNammaMetroViaduct(length, height = 8, width = 12) {
    const group = new THREE.Group();

    // Main viaduct deck
    const deckGeo = new THREE.BoxGeometry(length, 0.5, width);
    const deck = new THREE.Mesh(deckGeo, this.metroSteel);
    deck.position.y = height;
    deck.castShadow = true;
    group.add(deck);

    // Supporting pillars (spaced every 15m)
    const pillarCount = Math.floor(length / 15) + 1;
    for (let i = 0; i < pillarCount; i++) {
      const pillarX = -length/2 + i * (length / Math.max(pillarCount - 1, 1));
      const pillarGeo = new THREE.BoxGeometry(1.2, height/2, 1.2);
      const pillar = new THREE.Mesh(pillarGeo, this.metroPillar);
      pillar.position.set(pillarX, height/4, 0);
      pillar.castShadow = true;
      group.add(pillar);
    }

    // Metro tracks (simplified)
    const trackGeo = new THREE.BoxGeometry(length, 0.1, 0.6);
    const leftTrack = new THREE.Mesh(trackGeo, new THREE.MeshStandardMaterial({ color: 0x000000 }));
    leftTrack.position.set(0, height + 0.3, -width/2 + 1);
    const rightTrack = new THREE.Mesh(trackGeo, new THREE.MeshStandardMaterial({ color: 0x000000 }));
    rightTrack.position.set(0, height + 0.3, width/2 - 1);
    group.add(leftTrack, rightTrack);

    // Overhead wires (simplified)
    const wireGeo = new THREE.BoxGeometry(length, 0.05, 0.1);
    const leftWire = new THREE.Mesh(wireGeo, new THREE.MeshStandardMaterial({ color: 0x666666 }));
    leftWire.position.set(0, height + 2.5, -width/2 + 1.5);
    const rightWire = new THREE.Mesh(wireGeo, new THREE.MeshStandardMaterial({ color: 0x666666 }));
    rightWire.position.set(0, height + 2.5, width/2 - 1.5);
    group.add(leftWire, rightWire);

    this.scene.add(group);
    return group;
  }

  /**
   * Create Bengaluru roadside tea stall/Darshini
   * @param {number} x - X position
   * @param {number} z - Z position
   * @returns {THREE.Group} - Stall group
   */
  createTeaStall(x, z) {
    const group = new THREE.Group();
    group.position.set(x, 0, z);

    // Stall platform
    const platformGeo = new THREE.BoxGeometry(2.5, 0.2, 1.5);
    const platform = new THREE.Mesh(platformGeo, new THREE.MeshStandardMaterial({ color: 0x8b4513 }));
    platform.position.y = 0.1;
    group.add(platform);

    // Stall roof (metal)
    const roofGeo = new THREE.BoxGeometry(3.0, 0.15, 2.0);
    const roof = new THREE.Mesh(roofGeo, this.vendorRoof);
    roof.position.y = 0.5;
    group.add(roof);

    // Serving counter
    const counterGeo = new THREE.BoxGeometry(2.0, 0.6, 0.3);
    const counter = new THREE.Mesh(counterGeo, new THREE.MeshStandardMaterial({ color: 0xdeb887 }));
    counter.position.set(0, 0.4, -0.6);
    group.add(counter);

    // Stools (simple cylinders)
    for (let i = 0; i < 3; i++) {
      const stoolGeo = new THREE.CylinderGeometry(0.15, 0.15, 0.4, 8);
      const stool = new THREE.Mesh(stoolGeo, new THREE.MeshStandardMaterial({ color: 0x555555 }));
      stool.position.set(-0.8 + i * 0.8, 0.2, 0.4);
      group.add(stool);
    }

    // Signboard (bilingual Kannada/English)
    this.createBengaliSignboard(group, "ಊಟ manquantes", "HOT TEA", 0.8, 1.2);

    this.scene.add(group);
    // Add collision for platform
    this.physicsWorld.addStaticBox(x, 0.1, z, 1.25, 0.1, 0.75);

    return group;
  }

  /**
   * Create bilingual Kannada/English signboard
   * @param {THREE.Group} parent - Parent group to add sign to
   * @param {string} kannadaText - Kannada text
   * @param {string} englishText - English text
   * @param {number} width - Sign width
   * @param {number} height - Sign height
   */
  createBengaliSignboard(parent, kannadaText, englishText, width, height) {
    // Create canvas for bilingual text
    const canvas = document.createElement('canvas');
    const size = 512;
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');

    // Background
    ctx.fillStyle = '#f8f4e3'; // Cream background
    ctx.fillRect(0, 0, size, size);
    ctx.strokeStyle = '#8b4513'; // Brown border
    ctx.lineWidth = 4;
    ctx.strokeRect(2, 2, size-4, size-4);

    // Kannada text (top)
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 48px "Noto Sans Kannada", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(kannadaText, size/2, size/2 - 20);

    // English text (bottom)
    ctx.font = 'bold 36px "Inter", sans-serif';
    ctx.fillText(englishText, size/2, size/2 + 40);

    // Create texture and material
    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;

    const signMaterial = new THREE.MeshStandardMaterial({
      map: texture,
      roughness: 0.4,
      metalness: 0.1
    });

    // Sign board
    const signGeo = new THREE.PlaneGeometry(width, height);
    const sign = new THREE.Mesh(signGeo, signMaterial);
    sign.position.y = height/2 + 0.1; // Slightly above parent
    sign.rotation.y = Math.PI/2; // Face outward

    parent.add(sign);
  }

  /**
   * Create Bengaluru-style boundary wall (laterite stone)
   * @param {number} length - Wall length
   * @param {number} height - Wall height
   * @param {number} thickness - Wall thickness
   * @returns {THREE.Mesh} - Wall mesh
   */
  createBoundaryWall(length, height = 2.0, thickness = 0.3) {
    const wallGeo = new THREE.BoxGeometry(length, height, thickness);
    const wall = new THREE.Mesh(wallGeo, this.boundaryWall);
    wall.position.y = height/2;
    wall.castShadow = true;
    wall.receiveShadow = true;

    return wall;
  }

  /**
   * Add Bengaluru-specific environmental elements to the city
   * @param {number} areaCenterX - X center of area to populate
   * @param {number} areaCenterZ - Z center of area to populate
   * @param {number} areaRadius - Radius of area
   */
  populateBengaluruArea(areaCenterX, areaCenterZ, areaRadius) {
      // Add Gulmohar trees along roadsides (common in Bangalore)
      const gulmoharCount = Math.floor(areaRadius * 0.3);
      for (let i = 0; i < gulmoharCount; i++) {
          const angle = (i / gulmoharCount) * Math.PI * 2;
          const distance = areaRadius * 0.7 + Math.random() * areaRadius * 0.2;
          const x = areaCenterX + Math.cos(angle) * distance;
          const z = areaCenterZ + Math.sin(angle) * distance;
          this.createGulmoharTree(x, z, 0.8 + Math.random() * 0.4);
      }

      // Add Tabebuia trees in clusters (common in parks and layouts)
      const tabebuiaCount = Math.floor(areaRadius * 0.2);
      for (let i = 0; i < tabebuiaCount; i++) {
          const angle = (i / tabebuiaCount) * Math.PI * 2;
          const distance = areaRadius * 0.5 + Math.random() * areaRadius * 0.3;
          const x = areaCenterX + Math.cos(angle) * distance;
          const z = areaCenterZ + Math.sin(angle) * distance;
          this.createTabebuiaTree(x, z, 0.7 + Math.random() * 0.3);
      }

      // Add tea stalls at intervals
      const stallCount = Math.floor(areaRadius * 0.15);
      for (let i = 0; i < stallCount; i++) {
          const angle = (i / stallCount) * Math.PI * 2;
          const distance = areaRadius * 0.6 + Math.random() * areaRadius * 0.2;
          const x = areaCenterX + Math.cos(angle) * distance;
          const z = areaCenterZ + Math.sin(angle) * distance;
          this.createTeaStall(x, z);
      }
  }
}