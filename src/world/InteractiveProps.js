import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { brunoMaterials } from '../core/BrunoMaterialSystem.js';

export class InteractiveProps {
  constructor(scene, physicsWorld, audioManager) {
    this.scene = scene;
    this.physicsWorld = physicsWorld;
    this.audioManager = audioManager;

    this.dynamicProps = [];
    this.initMaterials();
    this.createBowlingAlley(new THREE.Vector3(0, 0.5, 96));
    this.createDestructibleBrickWall(new THREE.Vector3(-18, 0.4, 75));
    this.createBouncyCones();
    this.createFloorTypography();
    this.loadBrunoProps();
  }

  initMaterials() {
    this.materials = {
      pinWood: new THREE.MeshStandardMaterial({
        color: 0xfbf8f3,
        roughness: 0.75,
        metalness: 0.05
      }),
      pinRed: new THREE.MeshStandardMaterial({
        color: 0xd9534f,
        roughness: 0.7,
        metalness: 0.05
      }),
      brickTerracotta: new THREE.MeshStandardMaterial({
        color: 0xd46853,
        roughness: 0.85,
        metalness: 0.02
      }),
      brickOchre: new THREE.MeshStandardMaterial({
        color: 0xe5ad52,
        roughness: 0.85,
        metalness: 0.02
      }),
      brickTeal: new THREE.MeshStandardMaterial({
        color: 0x5a8b9e,
        roughness: 0.85,
        metalness: 0.02
      }),
      coneOrange: new THREE.MeshStandardMaterial({
        color: 0xf56f42,
        roughness: 0.7,
        metalness: 0.05
      }),
      coneWhite: new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.7,
        metalness: 0.05
      }),
      textWood: new THREE.MeshStandardMaterial({
        color: 0xf4eee4,
        roughness: 0.8,
        metalness: 0.05
      }),
      textAccent: new THREE.MeshStandardMaterial({
        color: 0xd9534f,
        roughness: 0.75,
        metalness: 0.05
      })
    };
  }

  createBowlingAlley(origin) {
    // 10 bowling pins arranged in a classic 4-row triangle
    // Row 1: 1 pin
    // Row 2: 2 pins
    // Row 3: 3 pins
    // Row 4: 4 pins
    const pinSpacingX = 0.95;
    const pinSpacingZ = 1.05;

    let pinIndex = 0;
    for (let row = 0; row < 4; row++) {
      const pinsInRow = row + 1;
      const startX = -((pinsInRow - 1) * pinSpacingX) / 2;
      const zPos = origin.z + row * pinSpacingZ;

      for (let col = 0; col < pinsInRow; col++) {
        const xPos = origin.x + startX + col * pinSpacingX;
        this.createSingleBowlingPin(new THREE.Vector3(xPos, origin.y, zPos), pinIndex++);
      }
    }
  }

  createSingleBowlingPin(pos, id) {
    // Three.js visual pin (toy stylized shape)
    const pinGroup = new THREE.Group();

    // Base body
    const baseGeo = new THREE.CylinderGeometry(0.24, 0.28, 0.7, 12);
    const base = new THREE.Mesh(baseGeo, this.materials.pinWood);
    base.position.y = 0.35;
    base.castShadow = true;
    base.receiveShadow = true;
    pinGroup.add(base);

    // Neck
    const neckGeo = new THREE.CylinderGeometry(0.12, 0.22, 0.45, 12);
    const neck = new THREE.Mesh(neckGeo, this.materials.pinWood);
    neck.position.y = 0.85;
    neck.castShadow = true;
    pinGroup.add(neck);

    // Red stripes around neck
    const stripeGeo = new THREE.CylinderGeometry(0.155, 0.175, 0.08, 12);
    const stripe = new THREE.Mesh(stripeGeo, this.materials.pinRed);
    stripe.position.y = 0.82;
    pinGroup.add(stripe);

    // Head
    const headGeo = new THREE.SphereGeometry(0.16, 12, 10);
    const head = new THREE.Mesh(headGeo, this.materials.pinWood);
    head.position.y = 1.15;
    head.castShadow = true;
    pinGroup.add(head);

    pinGroup.position.copy(pos);
    this.scene.add(pinGroup);

    // Cannon-es physical body
    const shape = new CANNON.Cylinder(0.26, 0.28, 1.25, 8);
    const body = new CANNON.Body({
      mass: 1.6,
      position: new CANNON.Vec3(pos.x, pos.y + 0.62, pos.z),
      shape: shape,
      linearDamping: 0.3,
      angularDamping: 0.35
    });

    // Make pins stand upright stably
    body.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 2);
    this.physicsWorld.world.addBody(body);

    this.dynamicProps.push({
      mesh: pinGroup,
      body: body,
      type: 'pin',
      initialY: pos.y + 0.62
    });
  }

  createDestructibleBrickWall(origin) {
    // A destructible 4-row brick wall made of individual toy wooden blocks
    const brickW = 1.1;
    const brickH = 0.45;
    const brickD = 0.55;
    const rows = 4;
    const cols = 5;

    const materials = [
      this.materials.brickTerracotta,
      this.materials.brickOchre,
      this.materials.brickTeal
    ];

    for (let r = 0; r < rows; r++) {
      const count = r % 2 === 0 ? cols : cols - 1;
      const startX = origin.x - ((count - 1) * (brickW + 0.06)) / 2;
      const y = origin.y + r * (brickH + 0.02) + brickH / 2;

      for (let c = 0; c < count; c++) {
        const x = startX + c * (brickW + 0.06);
        const z = origin.z;

        const mat = materials[(r + c) % materials.length];
        this.createSingleBrick(new THREE.Vector3(x, y, z), brickW, brickH, brickD, mat);
      }
    }
  }

  createSingleBrick(pos, w, h, d, material) {
    const geo = new THREE.BoxGeometry(w, h, d);
    const mesh = new THREE.Mesh(geo, material);
    mesh.position.copy(pos);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    this.scene.add(mesh);

    const shape = new CANNON.Box(new CANNON.Vec3(w / 2, h / 2, d / 2));
    const body = new CANNON.Body({
      mass: 1.4,
      position: new CANNON.Vec3(pos.x, pos.y, pos.z),
      shape: shape,
      linearDamping: 0.25,
      angularDamping: 0.3
    });
    this.physicsWorld.world.addBody(body);

    this.dynamicProps.push({
      mesh,
      body,
      type: 'brick'
    });
  }

  createBouncyCones() {
    const conePositions = [
      new THREE.Vector3(8.5, 0.4, 76),
      new THREE.Vector3(9.5, 0.4, 78),
      new THREE.Vector3(10.5, 0.4, 80),
      new THREE.Vector3(-12, 0.4, 88),
      new THREE.Vector3(-13, 0.4, 90),
      new THREE.Vector3(25, 0.4, 55),
      new THREE.Vector3(26, 0.4, 57),
      new THREE.Vector3(-35, 0.4, 115)
    ];

    conePositions.forEach(pos => {
      const group = new THREE.Group();

      // Square base
      const baseGeo = new THREE.BoxGeometry(0.55, 0.06, 0.55);
      const base = new THREE.Mesh(baseGeo, this.materials.coneOrange);
      base.castShadow = true;
      base.receiveShadow = true;
      group.add(base);

      // Cone
      const coneGeo = new THREE.ConeGeometry(0.22, 0.75, 12);
      const cone = new THREE.Mesh(coneGeo, this.materials.coneOrange);
      cone.position.y = 0.38;
      cone.castShadow = true;
      group.add(cone);

      // White reflective collar band
      const collarGeo = new THREE.CylinderGeometry(0.13, 0.17, 0.16, 12);
      const collar = new THREE.Mesh(collarGeo, this.materials.coneWhite);
      collar.position.y = 0.38;
      group.add(collar);

      group.position.copy(pos);
      this.scene.add(group);

      const shape = new CANNON.Cylinder(0.04, 0.28, 0.8, 8);
      const body = new CANNON.Body({
        mass: 0.8,
        position: new CANNON.Vec3(pos.x, pos.y + 0.4, pos.z),
        shape: shape,
        linearDamping: 0.35,
        angularDamping: 0.4
      });
      this.physicsWorld.world.addBody(body);

      this.dynamicProps.push({
        mesh: group,
        body: body,
        type: 'cone'
      });
    });
  }

  createFloorTypography() {
    // In Bruno Simon's game, key zones have bold 3D block letters laying flat or slightly raised on the floor
    // We create block-letter signage for "BENGALURU", "AIRPORT", "SILK BOARD", "KORAMANGALA", and "COURIER CITY"
    const textLabels = [
      { text: 'BENGALURU', pos: new THREE.Vector3(0, 0.08, 62), scale: 1.4, color: 0xd9534f },
      { text: 'COURIER CITY', pos: new THREE.Vector3(0, 0.08, 54), scale: 0.95, color: 0x3d3b40 },
      { text: 'SILK BOARD', pos: new THREE.Vector3(34.5, 0.08, 38), scale: 1.1, color: 0xe5ad52 },
      { text: 'AIRPORT', pos: new THREE.Vector3(-360, 0.08, -310), scale: 1.6, color: 0x5a8b9e },
      { text: 'KORAMANGALA', pos: new THREE.Vector3(120, 0.08, 120), scale: 1.2, color: 0x7aa372 }
    ];

    textLabels.forEach(lbl => {
      this.createBlockText(lbl.text, lbl.pos, lbl.scale, lbl.color);
    });
  }

  createBlockText(text, pos, scale = 1.0, colorHex = 0xd9534f) {
    const textGroup = new THREE.Group();
    const charWidth = 1.1 * scale;
    const charHeight = 0.25 * scale;
    const charDepth = 1.5 * scale;

    const mat = new THREE.MeshStandardMaterial({
      color: colorHex,
      roughness: 0.8,
      metalness: 0.05
    });

    const startX = -((text.length - 1) * charWidth) / 2;

    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (char === ' ') continue;

      // Stylized 3D letter block
      const letterGeo = new THREE.BoxGeometry(charWidth * 0.85, charHeight, charDepth);
      const letterMesh = new THREE.Mesh(letterGeo, mat);
      letterMesh.position.set(startX + i * charWidth, charHeight / 2, 0);
      letterMesh.castShadow = true;
      letterMesh.receiveShadow = true;
      textGroup.add(letterMesh);

      // Add a slight beveled top plate for clear readability from above
      const topPlate = new THREE.Mesh(
        new THREE.BoxGeometry(charWidth * 0.8, charHeight * 0.2, charDepth * 0.92),
        this.materials.textWood
      );
      topPlate.position.set(startX + i * charWidth, charHeight + 0.02, 0);
      textGroup.add(topPlate);
    }

    textGroup.position.copy(pos);
    this.scene.add(textGroup);
  }

  update(dt, vehiclePos, vehicleSpeed, vehicleYaw) {
    // Check vehicle collision against dynamic props for explosive Bruno Simon toy-destruction feel
    if (vehiclePos && (vehicleSpeed === undefined || vehicleSpeed > 1.2)) {
      const spd = Math.max(2.0, vehicleSpeed || 5.0);
      const fwdX = Math.sin(vehicleYaw || 0);
      const fwdZ = Math.cos(vehicleYaw || 0);

      for (let i = 0; i < this.dynamicProps.length; i++) {
        const item = this.dynamicProps[i];
        const dx = item.body.position.x - vehiclePos.x;
        const dz = item.body.position.z - vehiclePos.z;
        const distSq = dx * dx + dz * dz;
        const hitRadius = 2.1;

        if (distSq < hitRadius * hitRadius) {
          const dist = Math.max(0.1, Math.sqrt(distSq));
          const impulseMag = Math.min(spd * 2.8, 35.0);
          const pushX = (dx / dist) * impulseMag * 0.7 + fwdX * impulseMag * 0.7;
          const pushZ = (dz / dist) * impulseMag * 0.7 + fwdZ * impulseMag * 0.7;
          const pushY = impulseMag * 0.45;

          item.body.applyImpulse(
            new CANNON.Vec3(pushX, pushY, pushZ),
            new CANNON.Vec3((Math.random() - 0.5) * 0.2, 0.3, (Math.random() - 0.5) * 0.2)
          );

          if (this.audioManager && (!item.lastSound || performance.now() - item.lastSound > 250)) {
            this.audioManager.playImpact(Math.min(1.0, spd / 18.0));
            item.lastSound = performance.now();
          }
        }
      }
    }

    // Sync Three.js meshes with Cannon-es physical bodies
    for (let i = 0; i < this.dynamicProps.length; i++) {
      const item = this.dynamicProps[i];
      item.mesh.position.copy(item.body.position);
      item.mesh.quaternion.copy(item.body.quaternion);

      // If a prop flies off into the void or falls through the floor, reset it
      if (item.mesh.position.y < -5) {
        item.body.position.set(item.mesh.position.x, 1.5, item.mesh.position.z);
        item.body.velocity.set(0, 0, 0);
        item.body.angularVelocity.set(0, 0, 0);
      }
    }
  }

  loadBrunoProps() {
    const base = import.meta.env.BASE_URL || './';
    const cleanBase = base.endsWith('/') ? base : base + '/';
    const loader = new GLTFLoader();

    // 1. Handcrafted Park Benches from folio-2025
    loader.load(`${cleanBase}models/benches.glb`, (gltf) => {
      const benchBase = gltf.scene;
      brunoMaterials.applyToModel(benchBase);
      const benchPositions = [
        { pos: new THREE.Vector3(-12, 0, 72), rotY: Math.PI / 2 },
        { pos: new THREE.Vector3(12, 0, 72), rotY: -Math.PI / 2 },
        { pos: new THREE.Vector3(-12, 0, 84), rotY: Math.PI / 2 },
        { pos: new THREE.Vector3(12, 0, 84), rotY: -Math.PI / 2 },
        { pos: new THREE.Vector3(0, 0, 68), rotY: Math.PI }
      ];
      benchPositions.forEach(cfg => {
        const bench = benchBase.clone(true);
        bench.position.copy(cfg.pos);
        bench.rotation.y = cfg.rotY;
        bench.scale.set(1.4, 1.4, 1.4);
        this.scene.add(bench);
      });
    });

    // 2. Glowing Japanese Stone Lanterns from folio-2025
    loader.load(`${cleanBase}models/lanterns.glb`, (gltf) => {
      const lanternBase = gltf.scene;
      brunoMaterials.applyToModel(lanternBase);
      const lanternPositions = [
        new THREE.Vector3(-16, 0, 68),
        new THREE.Vector3(16, 0, 68),
        new THREE.Vector3(-16, 0, 92),
        new THREE.Vector3(16, 0, 92),
        new THREE.Vector3(0, 0, 108)
      ];
      lanternPositions.forEach(pos => {
        const lantern = lanternBase.clone(true);
        lantern.position.copy(pos);
        lantern.scale.set(1.5, 1.5, 1.5);
        this.scene.add(lantern);

        // Add warm point light inside lantern
        const pLight = new THREE.PointLight(0xff9e42, 1.6, 14);
        pLight.position.set(pos.x, pos.y + 1.2, pos.z);
        this.scene.add(pLight);
      });
    });

    // 3. Vintage Street Pole Lamps from folio-2025
    loader.load(`${cleanBase}models/poleLights.glb`, (gltf) => {
      const lampBase = gltf.scene;
      brunoMaterials.applyToModel(lampBase);
      const lampPositions = [
        { pos: new THREE.Vector3(-8, 0, 52), rotY: Math.PI / 2 },
        { pos: new THREE.Vector3(8, 0, 52), rotY: -Math.PI / 2 },
        { pos: new THREE.Vector3(-8, 0, 114), rotY: Math.PI / 2 },
        { pos: new THREE.Vector3(8, 0, 114), rotY: -Math.PI / 2 },
        { pos: new THREE.Vector3(-25, 0, 80), rotY: 0 },
        { pos: new THREE.Vector3(25, 0, 80), rotY: Math.PI }
      ];
      lampPositions.forEach(cfg => {
        const lamp = lampBase.clone(true);
        lamp.position.copy(cfg.pos);
        lamp.rotation.y = cfg.rotY;
        lamp.scale.set(1.4, 1.4, 1.4);
        this.scene.add(lamp);

        const pLight = new THREE.PointLight(0xffa834, 1.8, 16);
        pLight.position.set(cfg.pos.x, cfg.pos.y + 4.2, cfg.pos.z);
        this.scene.add(pLight);
      });
    });

    // 4. Wooden Diorama Fences from folio-2025
    loader.load(`${cleanBase}models/fences.glb`, (gltf) => {
      const fenceBase = gltf.scene;
      brunoMaterials.applyToModel(fenceBase);
      for (let z = 90; z <= 104; z += 3.5) {
        [-7, 7].forEach(x => {
          const fence = fenceBase.clone(true);
          fence.position.set(x, 0, z);
          fence.rotation.y = Math.PI / 2;
          fence.scale.set(1.2, 1.2, 1.2);
          this.scene.add(fence);
        });
      }
    });

    // 5. Stylized Low-Poly Oak Trees from folio-2025
    loader.load(`${cleanBase}models/oakTrees.glb`, (gltf) => {
      const treeBase = gltf.scene;
      brunoMaterials.applyToModel(treeBase);
      const treePositions = [
        { pos: new THREE.Vector3(-22, 0, 85), s: 1.6 },
        { pos: new THREE.Vector3(22, 0, 85), s: 1.8 },
        { pos: new THREE.Vector3(-22, 0, 65), s: 1.5 },
        { pos: new THREE.Vector3(22, 0, 65), s: 1.7 },
        { pos: new THREE.Vector3(-30, 0, 95), s: 1.9 },
        { pos: new THREE.Vector3(30, 0, 95), s: 1.6 }
      ];
      treePositions.forEach(cfg => {
        const tree = treeBase.clone(true);
        tree.position.copy(cfg.pos);
        tree.scale.set(cfg.s, cfg.s, cfg.s);
        tree.rotation.y = Math.random() * Math.PI * 2;
        this.scene.add(tree);
      });
    });
  }
}
