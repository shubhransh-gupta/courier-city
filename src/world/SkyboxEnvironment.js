import * as THREE from 'three';

export class SkyboxEnvironment {
  constructor(scene, renderer) {
    this.scene = scene;
    this.renderer = renderer;

    this.isNight = false;
    this.clouds = [];

    this.initLights();
    this.initAtmosphere();
    this.initClouds();
  }

  initLights() {
    // Natural clear-sky daylight:
    // 1. Balanced hemisphere ambient light with soft sky-blue top and earth bounce (no weird purple tint)
    this.hemiLight = new THREE.HemisphereLight(0xcde8ff, 0x556b4f, 0.95);
    this.scene.add(this.hemiLight);

    // 2. Crisp, warm golden-white directional sunlight casting clean soft PCF shadows
    this.sunLight = new THREE.DirectionalLight(0xfff8ee, 1.45);
    this.sunLight.position.set(38, 62, 34);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.mapSize.width = 1024;
    this.sunLight.shadow.mapSize.height = 1024;
    this.sunLight.shadow.camera.near = 1;
    this.sunLight.shadow.camera.far = 160;

    // Follow-sun shadow bounding box (tight 36m box for razor-sharp shadows at scale)
    const shadowDist = 36;
    this.sunLight.shadow.camera.left = -shadowDist;
    this.sunLight.shadow.camera.right = shadowDist;
    this.sunLight.shadow.camera.top = shadowDist;
    this.sunLight.shadow.camera.bottom = -shadowDist;
    this.sunLight.shadow.bias = -0.0006;
    this.sunLight.shadow.normalBias = 0.04;
    this.sunLight.shadow.radius = 2.4;

    this.scene.add(this.sunLight);
    this.scene.add(this.sunLight.target);
  }

  initAtmosphere() {
    // Clear vibrant blue Bengaluru sky and soft atmospheric horizon haze
    this.daySkyColor = new THREE.Color(0x72b1ea);
    this.nightSkyColor = new THREE.Color(0x0f172a);

    this.scene.background = this.daySkyColor.clone();

    // Natural atmospheric horizon fog (soft sky haze)
    this.scene.fog = new THREE.Fog(0x98c4ea, 120, 480);
  }

  initClouds() {
    // Stylized matte clay clouds
    const cloudMat = new THREE.MeshStandardMaterial({
      color: 0xfbf8f3,
      roughness: 0.95,
      metalness: 0.0,
      transparent: true,
      opacity: 0.92
    });

    for (let i = 0; i < 22; i++) {
      const cloud = this.createPuffyCloud(cloudMat);
      const angle = (i / 22) * Math.PI * 2 + Math.random();
      const radius = 70 + Math.random() * 110;
      cloud.position.set(
        Math.cos(angle) * radius,
        42 + Math.random() * 18,
        Math.sin(angle) * radius
      );
      this.clouds.push(cloud);
      this.scene.add(cloud);
    }
  }

  createPuffyCloud(material) {
    const group = new THREE.Group();
    const puffCount = 3 + Math.floor(Math.random() * 3);

    for (let j = 0; j < puffCount; j++) {
      const radius = 3.8 + Math.random() * 2.2;
      const geo = new THREE.DodecahedronGeometry(radius, 1);
      const mesh = new THREE.Mesh(geo, material);
      mesh.position.set(
        (j - puffCount / 2) * 3.4,
        Math.sin(j) * 0.9,
        (Math.random() - 0.5) * 2
      );
      group.add(mesh);
    }
    return group;
  }

  toggleDayNight() {
    this.isNight = !this.isNight;
    if (this.isNight) {
      this.scene.background.setHex(0x0f172a);
      this.scene.fog.color.setHex(0x0f172a);
      this.scene.fog.near = 80;
      this.scene.fog.far = 320;
      this.sunLight.intensity = 0.35;
      this.sunLight.color.setHex(0x38bdf8);
      this.hemiLight.intensity = 0.45;
      this.hemiLight.color.setHex(0x1e293b);
    } else {
      this.scene.background.setHex(0x72b1ea);
      this.scene.fog.color.setHex(0x98c4ea);
      this.scene.fog.near = 120;
      this.scene.fog.far = 480;
      this.sunLight.intensity = 1.45;
      this.sunLight.color.setHex(0xfff8ee);
      this.hemiLight.intensity = 0.95;
      this.hemiLight.color.setHex(0xcde8ff);
    }

    return this.isNight;
  }

  update(dt, targetPos) {
    if (!targetPos) return;

    // Follow-sun: Position the directional light and shadow frustum directly over the player
    // This guarantees shadow density right where the player is anywhere across Bangalore!
    this.sunLight.position.set(targetPos.x + 38, targetPos.y + 62, targetPos.z + 34);
    this.sunLight.target.position.set(targetPos.x, targetPos.y, targetPos.z);
    this.sunLight.target.updateMatrixWorld();

    this.clouds.forEach(cloud => {
      cloud.position.x += dt * 1.4;
      if (cloud.position.x > 220) {
        cloud.position.x = -220;
      }
    });
  }
}
