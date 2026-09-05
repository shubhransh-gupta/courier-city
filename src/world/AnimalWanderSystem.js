import * as THREE from 'three';

/**
 * AnimalWanderSystem: Roaming street cows, park deer, and wandering dogs
 * Adds authentic life to Bengaluru streets, temple courtyards, and BDA parks.
 */
export class AnimalWanderSystem {
  constructor(scene, physicsWorld) {
    this.scene = scene;
    this.physicsWorld = physicsWorld;

    this.animals = [];
    this.initAnimals();
  }

  initAnimals() {
    // 1. Street Holy Cows (Bengaluru street verge & temple grounds)
    const cowSpots = [
      { x: -55, z: -140, heading: 0.8 },  // Near Someshwara Temple
      { x: 12, z: 65, heading: 2.1 },    // Central Avenue Verge
      { x: 92, z: 170, heading: -1.2 },  // Near Bull Temple
      { x: -130, z: 70, heading: 0.3 },  // Near Koramangala BDA Park
      { x: -35, z: 210, heading: 1.4 }   // Near VV Puram Food Street
    ];

    cowSpots.forEach(s => {
      const cow = this.createCowMesh();
      cow.position.set(s.x, 0, s.z);
      cow.rotation.y = s.heading;
      cow.userData = {
        type: 'cow',
        basePos: new THREE.Vector3(s.x, 0, s.z),
        speed: 0.4 + Math.random() * 0.2,
        timer: Math.random() * 5,
        walking: Math.random() > 0.4,
        tail: cow.tail,
        legs: cow.legs
      };
      this.animals.push(cow);
      this.scene.add(cow);
    });

    // 2. Park Deer in BDA & Lalbagh Parks
    const deerSpots = [
      { x: 82, z: 42 },
      { x: 88, z: 48 },
      { x: -138, z: 275 },
      { x: -146, z: 285 }
    ];

    deerSpots.forEach(d => {
      const deer = this.createDeerMesh();
      deer.position.set(d.x, 0, d.z);
      deer.rotation.y = Math.random() * Math.PI * 2;
      deer.userData = {
        type: 'deer',
        basePos: new THREE.Vector3(d.x, 0, d.z),
        speed: 1.1 + Math.random() * 0.5,
        timer: Math.random() * 4,
        walking: true,
        legs: deer.legs
      };
      this.animals.push(deer);
      this.scene.add(deer);
    });

    // 3. Friendly Street Dogs
    const dogSpots = [
      { x: 6, z: 88 },
      { x: 55, z: 105 },
      { x: -75, z: 125 },
      { x: 26, z: 15 }
    ];

    dogSpots.forEach(dg => {
      const dog = this.createDogMesh();
      dog.position.set(dg.x, 0, dg.z);
      dog.rotation.y = Math.random() * Math.PI * 2;
      dog.userData = {
        type: 'dog',
        basePos: new THREE.Vector3(dg.x, 0, dg.z),
        speed: 1.6 + Math.random() * 0.6,
        timer: Math.random() * 3,
        walking: true,
        tail: dog.tail,
        legs: dog.legs
      };
      this.animals.push(dog);
      this.scene.add(dog);
    });
  }

  createCowMesh() {
    const group = new THREE.Group();

    const cowMat = new THREE.MeshStandardMaterial({ color: 0xf1f5f9, roughness: 0.85 }); // White/grey sacred cow
    const patchMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.85 });
    const hornMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.6 });
    const darkMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.9 });

    // Body
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.95, 1.8), cowMat);
    body.position.y = 0.95;
    body.castShadow = true;
    group.add(body);

    // Hump (Zebu cow hump characteristic of Indian breeds)
    const hump = new THREE.Mesh(new THREE.ConeGeometry(0.35, 0.45, 8), cowMat);
    hump.position.set(0, 1.5, 0.45);
    group.add(hump);

    // Neck & Head
    const neck = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.6, 0.6), cowMat);
    neck.position.set(0, 1.25, 0.95);
    neck.rotation.x = -0.3;
    group.add(neck);

    const head = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.45, 0.65), cowMat);
    head.position.set(0, 1.35, 1.35);
    group.add(head);

    // Snout
    const snout = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.32, 0.35), darkMat);
    snout.position.set(0, 1.22, 1.72);
    group.add(snout);

    // Horns
    [-0.26, 0.26].forEach((hx, idx) => {
      const horn = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.45, 6), hornMat);
      horn.position.set(hx, 1.68, 1.3);
      horn.rotation.x = -0.35;
      horn.rotation.z = (idx === 0) ? 0.3 : -0.3;
      group.add(horn);
    });

    // Ears
    [-0.32, 0.32].forEach(ex => {
      const ear = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.1, 0.12), patchMat);
      ear.position.set(ex, 1.45, 1.25);
      group.add(ear);
    });

    // 4 Legs
    const legs = [];
    [
      [-0.32, 0.8], [0.32, 0.8],
      [-0.32, -0.65], [0.32, -0.65]
    ].forEach(([lx, lz]) => {
      const legPivot = new THREE.Group();
      legPivot.position.set(lx, 0.75, lz);
      const legMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.08, 0.75, 6), cowMat);
      legMesh.position.y = -0.375;
      const hoof = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.095, 0.12, 6), darkMat);
      hoof.position.y = -0.72;
      legPivot.add(legMesh, hoof);
      group.add(legPivot);
      legs.push(legPivot);
    });

    // Tail
    const tail = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.04, 0.7, 5), cowMat);
    tail.position.set(0, 1.05, -0.95);
    tail.rotation.x = 0.2;
    group.add(tail);

    group.legs = legs;
    group.tail = tail;

    return group;
  }

  createDeerMesh() {
    const group = new THREE.Group();

    const deerMat = new THREE.MeshStandardMaterial({ color: 0xb45309, roughness: 0.8 }); // Rich fawn brown
    const bellyMat = new THREE.MeshStandardMaterial({ color: 0xfef3c7, roughness: 0.85 });
    const hornMat = new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.7 });

    // Slender Body
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.55, 1.2), deerMat);
    body.position.y = 0.9;
    group.add(body);

    const belly = new THREE.Mesh(new THREE.BoxGeometry(0.44, 0.15, 0.9), bellyMat);
    belly.position.set(0, 0.65, 0);
    group.add(belly);

    // Elegant long neck
    const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.18, 0.7, 6), deerMat);
    neck.position.set(0, 1.25, 0.55);
    neck.rotation.x = -0.35;
    group.add(neck);

    // Head & Antlers
    const head = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.22, 0.45), deerMat);
    head.position.set(0, 1.55, 0.75);
    group.add(head);

    [-0.14, 0.14].forEach(ax => {
      const antler = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.42, 0.04), hornMat);
      antler.position.set(ax, 1.82, 0.7);
      antler.rotation.x = -0.2;
      group.add(antler);
    });

    // 4 Slender Legs
    const legs = [];
    [
      [-0.18, 0.45], [0.18, 0.45],
      [-0.18, -0.45], [0.18, -0.45]
    ].forEach(([lx, lz]) => {
      const legPivot = new THREE.Group();
      legPivot.position.set(lx, 0.75, lz);
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.035, 0.75, 6), deerMat);
      leg.position.y = -0.375;
      legPivot.add(leg);
      group.add(legPivot);
      legs.push(legPivot);
    });

    group.legs = legs;
    return group;
  }

  createDogMesh() {
    const group = new THREE.Group();

    const dogMat = new THREE.MeshStandardMaterial({ color: 0xd97706, roughness: 0.8 }); // Desi pariah brown dog
    const darkMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.9 });

    // Body
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.35, 0.85), dogMat);
    body.position.y = 0.45;
    group.add(body);

    // Head & Snout
    const head = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.22, 0.32), dogMat);
    head.position.set(0, 0.65, 0.48);
    const snout = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.12, 0.2), darkMat);
    snout.position.set(0, 0.6, 0.68);
    group.add(head, snout);

    // Curled Tail
    const tail = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.02, 0.35, 5), dogMat);
    tail.position.set(0, 0.6, -0.45);
    tail.rotation.x = -0.6;
    group.add(tail);

    // 4 Legs
    const legs = [];
    [
      [-0.13, 0.3], [0.13, 0.3],
      [-0.13, -0.3], [0.13, -0.3]
    ].forEach(([lx, lz]) => {
      const legPivot = new THREE.Group();
      legPivot.position.set(lx, 0.38, lz);
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.03, 0.38, 5), dogMat);
      leg.position.y = -0.19;
      legPivot.add(leg);
      group.add(legPivot);
      legs.push(legPivot);
    });

    group.legs = legs;
    group.tail = tail;
    return group;
  }

  update(dt, totalTime) {
    this.animals.forEach(animal => {
      const u = animal.userData;
      u.timer -= dt;

      if (u.timer <= 0) {
        u.timer = 3 + Math.random() * 5;
        u.walking = Math.random() > 0.3;
        if (u.walking) {
          // Choose random new wander heading
          animal.rotation.y += (Math.random() - 0.5) * 1.8;
        }
      }

      if (u.walking) {
        const fwdX = Math.sin(animal.rotation.y);
        const fwdZ = Math.cos(animal.rotation.y);

        animal.position.x += fwdX * u.speed * dt;
        animal.position.z += fwdZ * u.speed * dt;

        // Keep near tether base area
        const distFromBase = animal.position.distanceTo(u.basePos);
        if (distFromBase > 25) {
          const angleBack = Math.atan2(u.basePos.x - animal.position.x, u.basePos.z - animal.position.z);
          animal.rotation.y = angleBack;
        }

        // Animate legs
        if (u.legs && u.legs.length === 4) {
          const legSwing = Math.sin(totalTime * u.speed * 6) * 0.4;
          u.legs[0].rotation.x = legSwing;
          u.legs[1].rotation.x = -legSwing;
          u.legs[2].rotation.x = -legSwing;
          u.legs[3].rotation.x = legSwing;
        }
      } else {
        // Idling: rest legs
        if (u.legs) {
          u.legs.forEach(l => { l.rotation.x *= 0.85; });
        }
      }

      // Swish tail
      if (u.tail) {
        u.tail.rotation.z = Math.sin(totalTime * 3.5) * 0.25;
      }
    });
  }
}
