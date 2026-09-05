import * as THREE from 'three';

/**
 * SkyCreatures: Ambient Sky Aviation & Wildlife
 * 1. High-altitude commercial jetliner (Boeing 777 / Airbus A350) cruising smoothly
 *    across the sky flight corridor with blinking strobe navigation lights and contrails.
 * 2. Flock of soaring birds (kites/pigeons) circling gently in thermals above parks.
 */
export class SkyCreatures {
  constructor(scene) {
    this.scene = scene;

    this.initAirplane();
    this.initBirdFlock();
  }

  initAirplane() {
    this.planeGroup = new THREE.Group();

    // Fuselage
    const fuseMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.25, metalness: 0.3 });
    const blueMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.3 });
    const glassMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.1 });

    const fuselage = new THREE.Mesh(new THREE.CylinderGeometry(2.4, 2.4, 38, 16), fuseMat);
    fuselage.rotation.x = Math.PI / 2;
    this.planeGroup.add(fuselage);

    // Nosecone
    const nose = new THREE.Mesh(new THREE.ConeGeometry(2.4, 6.5, 16), fuseMat);
    nose.rotation.x = -Math.PI / 2;
    nose.position.z = 22.25;
    this.planeGroup.add(nose);

    // Cockpit windows
    const cockpit = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.9, 2.0), glassMat);
    cockpit.position.set(0, 1.3, 20.2);
    this.planeGroup.add(cockpit);

    // Main swept wings
    const wingGeo = new THREE.BoxGeometry(36, 0.45, 6.0);
    const wings = new THREE.Mesh(wingGeo, fuseMat);
    wings.position.set(0, -0.4, 2.0);
    this.planeGroup.add(wings);

    // Wingtips with Airline Blue winglets
    [-18, 18].forEach(wx => {
      const winglet = new THREE.Mesh(new THREE.BoxGeometry(0.25, 2.4, 1.8), blueMat);
      winglet.position.set(wx, 1.0, 2.0);
      this.planeGroup.add(winglet);
    });

    // Jet Engines (2 Turbofans)
    [-8.5, 8.5].forEach(ex => {
      const engine = new THREE.Mesh(new THREE.CylinderGeometry(1.25, 1.25, 5.0, 12), fuseMat);
      engine.rotation.x = Math.PI / 2;
      engine.position.set(ex, -1.8, 1.5);
      const intake = new THREE.Mesh(new THREE.CylinderGeometry(1.0, 1.0, 0.4, 12), glassMat);
      intake.rotation.x = Math.PI / 2;
      intake.position.set(ex, -1.8, 4.1);
      this.planeGroup.add(engine, intake);
    });

    // Vertical Stabilizer & Tailfin
    const fin = new THREE.Mesh(new THREE.BoxGeometry(0.4, 7.5, 5.2), blueMat);
    fin.position.set(0, 4.2, -16.5);
    fin.rotation.x = -0.35;
    this.planeGroup.add(fin);

    // Horizontal Stabilizers
    const horizTail = new THREE.Mesh(new THREE.BoxGeometry(13, 0.35, 3.2), fuseMat);
    horizTail.position.set(0, 1.2, -17.5);
    this.planeGroup.add(horizTail);

    // Blinking Navigation Lights
    const redLight = new THREE.Mesh(new THREE.SphereGeometry(0.35, 6, 6), new THREE.MeshBasicMaterial({ color: 0xef4444 }));
    redLight.position.set(-18.1, 0, 2.0); // Port
    const greenLight = new THREE.Mesh(new THREE.SphereGeometry(0.35, 6, 6), new THREE.MeshBasicMaterial({ color: 0x22c55e }));
    greenLight.position.set(18.1, 0, 2.0); // Starboard
    const strobeLight = new THREE.Mesh(new THREE.SphereGeometry(0.45, 6, 6), new THREE.MeshBasicMaterial({ color: 0xffffff }));
    strobeLight.position.set(0, 7.8, -17.5);

    this.planeGroup.add(redLight, greenLight, strobeLight);
    this.strobeLight = strobeLight;

    // Flight route properties (Altitude: 140m - 170m)
    this.planeAltitude = 155;
    this.flightAngle = 0.4; // Heading angle
    this.flightSpeed = 38;  // High cruising speed
    this.planeX = -580;
    this.planeZ = -450;

    this.planeGroup.position.set(this.planeX, this.planeAltitude, this.planeZ);
    this.planeGroup.rotation.y = Math.PI - 0.4;

    this.scene.add(this.planeGroup);
  }

  initBirdFlock() {
    this.flockGroup = new THREE.Group();

    const birdMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.8 });
    const wingMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.8 });

    this.birds = [];
    const birdCount = 14;

    for (let i = 0; i < birdCount; i++) {
      const bird = new THREE.Group();

      // Bird body
      const body = new THREE.Mesh(new THREE.ConeGeometry(0.18, 0.75, 5), birdMat);
      body.rotation.x = Math.PI / 2;
      bird.add(body);

      // Left Wing
      const wingL = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.03, 0.28), wingMat);
      wingL.position.set(-0.35, 0, 0);
      bird.add(wingL);

      // Right Wing
      const wingR = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.03, 0.28), wingMat);
      wingR.position.set(0.35, 0, 0);
      bird.add(wingR);

      // Random offset within flock
      const offsetRadius = 6 + Math.random() * 12;
      const offsetAngle = Math.random() * Math.PI * 2;
      const altitudeOffset = (Math.random() - 0.5) * 6;

      bird.userData = {
        radius: offsetRadius,
        angle: offsetAngle,
        altOffset: altitudeOffset,
        speed: 0.7 + Math.random() * 0.3,
        wingFlapSpeed: 7 + Math.random() * 4,
        wingL,
        wingR
      };

      this.birds.push(bird);
      this.flockGroup.add(bird);
    }

    // Thermal center above Central Park / Lalbagh
    this.thermalCenter = new THREE.Vector3(-40, 48, 80);
    this.flockGroup.position.copy(this.thermalCenter);

    this.scene.add(this.flockGroup);
  }

  update(dt, totalTime) {
    // 1. Update Cruising Airplane
    if (this.planeGroup) {
      const dirX = Math.cos(this.flightAngle);
      const dirZ = Math.sin(this.flightAngle);

      this.planeX += dirX * this.flightSpeed * dt;
      this.planeZ += dirZ * this.flightSpeed * dt;

      // Wrap around expansive airspace
      if (this.planeX > 680 || this.planeZ > 680) {
        this.planeX = -650;
        this.planeZ = -550;
      }

      this.planeGroup.position.set(this.planeX, this.planeAltitude, this.planeZ);

      // Strobe flash
      if (this.strobeLight) {
        const flash = Math.sin(totalTime * 8) > 0.85;
        this.strobeLight.visible = flash;
      }
    }

    // 2. Update Soaring Birds
    if (this.birds) {
      this.birds.forEach(bird => {
        const u = bird.userData;
        u.angle += u.speed * dt * 0.45;

        // Position bird in circular soaring thermal
        const bx = Math.cos(u.angle) * u.radius;
        const bz = Math.sin(u.angle) * u.radius;
        const by = u.altOffset + Math.sin(u.angle * 2) * 2.2;

        bird.position.set(bx, by, bz);

        // Orient bird along tangent of circle
        bird.rotation.y = -u.angle - Math.PI / 2;
        bird.rotation.z = -0.18; // Inward bank

        // Gentle wing flap
        const flap = Math.sin(totalTime * u.wingFlapSpeed) * 0.35;
        u.wingL.rotation.z = flap;
        u.wingR.rotation.z = -flap;
      });
    }
  }
}
