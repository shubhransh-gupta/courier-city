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
    // Bruno Simon warm studio lighting from folio-2025:
    // 1. Warm hemisphere light filling shadows with rich terracotta/purple bounce
    this.hemiLight = new THREE.HemisphereLight(0xfff4e6, 0x7e546e, 1.25);
    this.scene.add(this.hemiLight);

    // 2. Crisp, warm golden directional sunlight casting soft PCF shadows
    this.sunLight = new THREE.DirectionalLight(0xfff9ee, 2.2);
    this.sunLight.position.set(38, 62, 34);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.mapSize.width = 2048;
    this.sunLight.shadow.mapSize.height = 2048;
    this.sunLight.shadow.camera.near = 1;
    this.sunLight.shadow.camera.far = 160;

    // Follow-sun shadow bounding box (tight 36m box for razor-sharp shadows at scale)
    const shadowDist = 36;
    this.sunLight.shadow.camera.left = -shadowDist;
    this.sunLight.shadow.camera.right = shadowDist;
    this.sunLight.shadow.camera.top = shadowDist;
    this.sunLight.shadow.camera.bottom = -shadowDist;
    this.sunLight.shadow.bias = -0.0006;
    this.sunLight.shadow.normalBias = 0.05;
    this.sunLight.shadow.radius = 2.8;

    this.scene.add(this.sunLight);
    this.scene.add(this.sunLight.target);
  }

  initAtmosphere() {
    // Bruno Simon signature diorama palette:
    // Warm matte studio sand/cream that seamlessly dissolves the horizon
    this.daySkyColor = new THREE.Color(0xe5d9ca);
    this.nightSkyColor = new THREE.Color(0x181a24);

    this.scene.background = this.daySkyColor.clone();

    // Linear fog matching the studio floor color exactly
    // Creates the clean infinite studio look while keeping nearby city blocks crisp
    this.scene.fog = new THREE.Fog(0xe5d9ca, 85, 260);
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
    const targetSky = this.isNight ? this.nightSkyColor : this.daySkyColor;
    this.scene.background.copy(targetSky);
    this.scene.fog.color.copy(targetSky);

    if (this.isNight) {
      this.sunLight.intensity = 0.35;
      this.sunLight.color.setHex(0x6b7fa3);
      this.hemiLight.intensity = 0.5;
      this.hemiLight.color.setHex(0x282c37);
    } else {
      this.sunLight.intensity = 1.85;
      this.sunLight.color.setHex(0xfff6e6);
      this.hemiLight.intensity = 1.15;
      this.hemiLight.color.setHex(0xfffaf0);
    }

    return this.isNight;
  }

  update(dt, targetPos) {
    if (!targetPos) return;

    // Follow-sun: Position the directional light and shadow frustum directly over the player
    // This guarantees 2048x2048 shadow density right where the player is anywhere across Bangalore!
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
