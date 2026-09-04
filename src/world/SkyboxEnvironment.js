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
    this.hemiLight = new THREE.HemisphereLight(0xfffaed, 0x81ecec, 0.95);
    this.scene.add(this.hemiLight);

    this.sunLight = new THREE.DirectionalLight(0xfff3d6, 1.5);
    this.sunLight.position.set(40, 60, 35);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.mapSize.width = 2048;
    this.sunLight.shadow.mapSize.height = 2048;
    this.sunLight.shadow.camera.near = 1;
    this.sunLight.shadow.camera.far = 250;

    const shadowDist = 80;
    this.sunLight.shadow.camera.left = -shadowDist;
    this.sunLight.shadow.camera.right = shadowDist;
    this.sunLight.shadow.camera.top = shadowDist;
    this.sunLight.shadow.camera.bottom = -shadowDist;
    this.sunLight.shadow.bias = -0.0003;

    this.scene.add(this.sunLight);
  }

  initAtmosphere() {
    // Crisp, clear sky with high view distance
    this.daySkyColor = new THREE.Color(0x7ec8e3);
    this.nightSkyColor = new THREE.Color(0x0f172a);

    this.scene.background = this.daySkyColor.clone();
    // Gentle distant fog so monuments 300m away are clearly visible
    this.scene.fog = new THREE.FogExp2(0x7ec8e3, 0.0018);
  }

  initClouds() {
    const cloudMat = new THREE.MeshToonMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.9
    });

    for (let i = 0; i < 20; i++) {
      const cloud = this.createPuffyCloud(cloudMat);
      const angle = (i / 20) * Math.PI * 2 + Math.random();
      const radius = 60 + Math.random() * 90;
      cloud.position.set(
        Math.cos(angle) * radius,
        38 + Math.random() * 18,
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
      this.sunLight.intensity = 0.25;
      this.sunLight.color.setHex(0x5c729c);
      this.hemiLight.intensity = 0.4;
      this.hemiLight.color.setHex(0x2f3640);
    } else {
      this.sunLight.intensity = 1.5;
      this.sunLight.color.setHex(0xfff3d6);
      this.hemiLight.intensity = 0.95;
      this.hemiLight.color.setHex(0xfffaed);
    }

    return this.isNight;
  }

  update(dt, targetPos) {
    this.sunLight.position.x = targetPos.x + 40;
    this.sunLight.position.z = targetPos.z + 35;
    this.sunLight.target.position.copy(targetPos);
    this.sunLight.target.updateMatrixWorld();

    this.clouds.forEach(cloud => {
      cloud.position.x += dt * 1.4;
      if (cloud.position.x > 180) {
        cloud.position.x = -180;
      }
    });
  }
}
