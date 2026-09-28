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
    // Enhanced Bangalore lighting: tropical sunlight with characteristic warmth
    // 1. Hemisphere light for realistic sky/ground ambient lighting
    this.hemiLight = new THREE.HemisphereLight(0xc8e6f9, 0x8b7355, 1.0);
    this.scene.add(this.hemiLight);

    // 2. Directional sunlight with tropical warmth and appropriate intensity
    this.sunLight = new THREE.DirectionalLight(0xfff5e6, 1.5);
    this.sunLight.position.set(35, 58, 32);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.mapSize.width = 2048;
    this.sunLight.shadow.mapSize.height = 2048;
    this.sunLight.shadow.camera.near = 0.5;
    this.sunLight.shadow.camera.far = 200;

    // Optimized shadow casting for performance and quality
    const shadowDist = 40;
    this.sunLight.shadow.camera.left = -shadowDist;
    this.sunLight.shadow.camera.right = shadowDist;
    this.sunLight.shadow.camera.top = shadowDist;
    this.sunLight.shadow.camera.bottom = -shadowDist;
    this.sunLight.shadow.bias = -0.0004;
    this.sunLight.shadow.normalBias = 0.05;
    this.sunLight.shadow.radius = 1.8;
    this.sunLight.shadow.blurSamples = 8;

    this.scene.add(this.sunLight);
    this.scene.add(this.sunLight.target);
  }

  initAtmosphere() {
    // Bangalore sky: vibrant but slightly desaturated tropical blue with characteristic haze
    this.daySkyColor = new THREE.Color(0x6ba9e0);
    this.nightSkyColor = new THREE.Color(0x0c111d);

    this.scene.background = this.daySkyColor.clone();

    // Enhanced atmospheric horizon fog for tropical haze effect
    // Bangalore has characteristic atmospheric haze due to humidity and pollution
    this.scene.fog = new THREE.FogExp2(0x8fbcd9, 0.0045);
  }

  initClouds() {
    // Fewer, more realistic wispy clouds typical of Bangalore skies
    const cloudMat = new THREE.MeshStandardMaterial({
      color: 0xf0f8ff,
      roughness: 0.9,
      metalness: 0.0,
      transparent: true,
      opacity: 0.7
    });

    for (let i = 0; i < 12; i++) {
      const cloud = this.createWispyCloud(cloudMat);
      const angle = (i / 12) * Math.PI * 2 + Math.random() * 0.5;
      const radius = 90 + Math.random() * 130;
      cloud.position.set(
        Math.cos(angle) * radius,
        25 + Math.random() * 20,
        Math.sin(angle) * radius
      );
      cloud.scale.set(0.8 + Math.random() * 0.4, 0.6 + Math.random() * 0.3, 0.8 + Math.random() * 0.4);
      this.clouds.push(cloud);
      this.scene.add(cloud);
    }
  }

  createWispyCloud(material) {
    const group = new THREE.Group();
    const puffCount = 2 + Math.floor(Math.random() * 2);

    for (let j = 0; j < puffCount; j++) {
      const radius = 2.0 + Math.random() * 1.5;
      const geo = new THREE.SphereGeometry(radius, 8, 8);
      const mesh = new THREE.Mesh(geo, material);
      mesh.position.set(
        (j - puffCount / 2) * 1.5,
        Math.sin(j) * 0.3,
        (Math.random() - 0.5) * 1.0
      );
      group.add(mesh);
    }
    return group;
  }

  toggleDayNight() {
    this.isNight = !this.isNight;
    if (this.isNight) {
      // Bangalore night: deep blue with subtle urban glow
      this.scene.background.setHex(0x0c111d);
      this.scene.fog.color.setHex(0x0c111d);
      this.scene.fog.near = 10;
      this.scene.fog.far = 80;
      this.sunLight.intensity = 0.25;
      this.sunLight.color.setHex(0x4a90e2); // Soft moonlight tint
      this.hemiLight.intensity = 0.35;
      this.hemiLight.color.setHex(0x1a1a2e); // Very dark ambient
    } else {
      // Bangalore day: bright tropical sunlight
      this.scene.background.setHex(0x6ba9e0);
      this.scene.fog.color.setHex(0x8fbcd9);
      this.scene.fog.near = 12;
      this.scene.fog.far = 60;
      this.sunLight.intensity = 1.5;
      this.sunLight.color.setHex(0xfff5e6);
      this.hemiLight.intensity = 1.0;
      this.hemiLight.color.setHex(0xc8e6f9);
    }

    return this.isNight;
  }

  update(dt, targetPos) {
    if (!targetPos) return;

    // Follow-sun: Position the directional light and shadow frustum directly over the player
    // This guarantees shadow density right where the player is anywhere across Bangalore!
    this.sunLight.position.set(targetPos.x + 35, targetPos.y + 58, targetPos.z + 32);
    this.sunLight.target.position.set(targetPos.x, targetPos.y, targetPos.z);
    this.sunLight.target.updateMatrixWorld();

    this.clouds.forEach(cloud => {
      cloud.position.x += dt * 0.8; // Slower cloud movement for more realistic feel
      if (cloud.position.x > 220) {
        cloud.position.x = -220;
      }
    });
  }
}
