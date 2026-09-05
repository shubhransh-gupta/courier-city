import * as THREE from 'three';
import { PhysicsWorld } from './core/PhysicsWorld.js';
import { Input } from './core/Input.js';
import { CameraController } from './core/CameraController.js';
import { AudioManager } from './core/AudioManager.js';
import { BloodVFX } from './world/BloodVFX.js';
import { Player } from './entities/Player.js';
import { Vehicle } from './entities/Vehicle.js';
import { Airplane } from './entities/Airplane.js';
import { Helicopter } from './entities/Helicopter.js';
import { CityBuilder } from './world/CityBuilder.js';
import { CrowdSystem } from './world/CrowdSystem.js';
import { SkyboxEnvironment } from './world/SkyboxEnvironment.js';
import { Minimap } from './world/Minimap.js';
import { TrafficSystem } from './world/TrafficSystem.js';
import { HUD } from './ui/HUD.js';
import { FullMapOverlay } from './ui/FullMapOverlay.js';

class Game {
  constructor() {
    this.canvas = document.getElementById('webgl-canvas');
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();

    this.initRenderer();
    this.initScene();
    this.initSystems();
    // Sync HUD view mode label with initial camera view mode
    this.hud.updateViewMode(this.cameraController.viewMode);
    this.initEntities();
    this.initEvents();

    this.lastTime = performance.now();
    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);

    this.hud.showToast('Follow the GPS arrow to the ✈️ Airport or press [M] to open Navigation Map!');
  }

  initRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.15;
  }

  initScene() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(54, window.innerWidth / window.innerHeight, 0.1, 1600);
    this.camera.position.set(0, 4.5, 9);
  }

  initSystems() {
    this.physicsWorld = new PhysicsWorld();
    this.input = new Input();
    this.cameraController = new CameraController(this.camera, this.canvas);
    this.audioManager = new AudioManager();
    this.bloodVfx = new BloodVFX(this.scene);
    this.environment = new SkyboxEnvironment(this.scene, this.renderer);
    this.cityBuilder = new CityBuilder(this.scene, this.physicsWorld);
    this.crowdSystem = new CrowdSystem(this.scene);
    this.minimap = new Minimap('radar-canvas');
    this.hud = new HUD();
    this.fullMapOverlay = new FullMapOverlay(this);
  }

  initEntities() {
    // 1. Character Player
    this.player = new Player(this.scene, this.physicsWorld, this.audioManager, this.bloodVfx);

    // 2. High performance sport sedans
    this.vehicles = [];

    const carFleetConfigs = [
      { pos: new THREE.Vector3(3.5, 0, 80), color: 0xff4757 },    // Start Spawn (Open Central Plaza)
      { pos: new THREE.Vector3(-4.5, 0, 95), color: 0x38bdf8 },   // Plaza North
      { pos: new THREE.Vector3(45, 0, 4.5), color: 0x22c55e },    // East Highway
      { pos: new THREE.Vector3(-45, 0, -4.5), color: 0xf59e0b },  // West Highway
      { pos: new THREE.Vector3(0, 0, -100), color: 0xa855f7 },    // India Gate Approach
      { pos: new THREE.Vector3(160, 0, 240), color: 0xef4444 },   // Eiffel Tower District
      { pos: new THREE.Vector3(260, 0, -160), color: 0x06b6d4 }   // Taj Mahal Gardens
    ];

    carFleetConfigs.forEach(cfg => {
      const car = new Vehicle(this.scene, this.physicsWorld, this.audioManager, cfg.pos, cfg.color);
      this.vehicles.push(car);
    });

    // 3. Airplane waiting on Airport Runway (x = 220, z = -380)
    this.airplane = new Airplane(this.scene, this.audioManager, new THREE.Vector3(220, 0.4, -380));
    this.vehicles.push(this.airplane);

    // 4. Helicopter stationed at Airport Helipad (x = 340, z = -352)
    this.helicopter = new Helicopter(this.scene, this.audioManager, new THREE.Vector3(340, 0.4, -352));
    this.vehicles.push(this.helicopter);

    // 5. Ambient Traffic
    this.trafficSystem = new TrafficSystem(this.scene, this.vehicles.filter(v => !v.isAirborne && !v.isAirplane && !v.isHelicopter));

    this.activeVehicle = null;
    this.nearbyVehicle = null;
    this.interactionCooldown = false;
  }

  initEvents() {
    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Toggle Map Button & GPS Widget Click
    const mapBtn = document.getElementById('toggle-map-btn');
    if (mapBtn) mapBtn.addEventListener('click', () => this.fullMapOverlay.toggle());

    const gpsWidget = document.getElementById('gps-nav-widget');
    if (gpsWidget) gpsWidget.addEventListener('click', () => this.fullMapOverlay.toggle());

    // Toggle Camera View Button [V]
    const viewBtn = document.getElementById('toggle-view-btn');
    if (viewBtn) {
      viewBtn.addEventListener('click', () => {
        this.cameraController.toggleViewMode();
        this.hud.updateViewMode(this.cameraController.viewMode);
        this.hud.showToast(`Camera: ${this.cameraController.viewMode.toUpperCase()}`);
      });
    }

    // Day / Night Toggle
    const toggleBtn = document.getElementById('toggle-time-btn');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        const isNight = this.environment.toggleDayNight();
        const label = document.getElementById('ambience-label');
        if (label) label.textContent = isNight ? 'Night' : 'Day';
        this.vehicles.forEach(v => {
          if (v.setHeadlights) v.setHeadlights(isNight);
        });
        this.hud.showToast(isNight ? 'Night ambience' : 'Day ambience');
      });
    }

    // Direct Click on Car, Plane, or Helicopter to Enter
    window.addEventListener('click', (e) => {
      if (e.target.closest('.messenger-header, .messenger-actions, .bottom-hint, #radar-container, #gps-nav-widget, #full-map-overlay')) {
        return;
      }

      this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      this.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

      this.raycaster.setFromCamera(this.mouse, this.camera);
      const meshes = this.vehicles.map(v => v.mesh);
      const intersects = this.raycaster.intersectObjects(meshes, true);

      if (intersects.length > 0) {
        let obj = intersects[0].object;
        while (obj && !obj.userData?.vehicle && obj.parent) {
          obj = obj.parent;
        }

        if (obj && obj.userData?.vehicle) {
          const target = obj.userData.vehicle;
          const dist = this.player.position.distanceTo(target.position);
          if (dist < 18.0) {
            this.enterVehicle(target);
          } else {
            this.hud.showToast('Walk closer to enter');
          }
        }
      }
    });

    // Headlights [L] & Car Spawn [C]
    window.addEventListener('keydown', (e) => {
      if (e.code === 'KeyL') {
        if (this.activeVehicle && this.activeVehicle.setHeadlights) {
          const newState = !this.activeVehicle.headlightsOn;
          this.activeVehicle.setHeadlights(newState);
          this.hud.showToast(`Headlights ${newState ? 'on' : 'off'}`);
        }
      }

      if (e.code === 'KeyC') {
        this.spawnCarNearPlayer();
      }
    });
  }

  spawnCarNearPlayer() {
    const targetPos = this.player.isDriving && this.activeVehicle
      ? this.activeVehicle.position
      : this.player.position;

    const colors = [0xff4757, 0x38bdf8, 0x22c55e, 0xfacc15, 0xa855f7, 0xf97316];
    const chosenColor = colors[Math.floor(Math.random() * colors.length)];

    const spawnPos = new THREE.Vector3(
      targetPos.x + 3.5,
      0,
      targetPos.z + 2.0
    );

    const newCar = new Vehicle(this.scene, this.physicsWorld, this.audioManager, spawnPos, chosenColor);
    this.vehicles.push(newCar);
    this.hud.showToast('Vehicle spawned nearby');
  }

  handleVehicleInteractions() {
    const interactKey = this.input.isDown('KeyF');

    if (this.player.isDriving && this.activeVehicle) {
      this.hud.showPrompt('Press <kbd>F</kbd> to exit vehicle');

      if (interactKey && !this.interactionCooldown) {
        this.interactionCooldown = true;
        this.exitVehicle();
        setTimeout(() => { this.interactionCooldown = false; }, 400);
      }
      return;
    }

    let nearest = null;
    let minDist = 6.5;

    for (const v of this.vehicles) {
      const dist = this.player.position.distanceTo(v.position);
      if (dist < minDist) {
        minDist = dist;
        nearest = v;
      }
    }

    this.nearbyVehicle = nearest;

    if (nearest) {
      const typeLabel = nearest.isAirplane ? 'pilot airplane' : (nearest.isHelicopter ? 'fly helicopter' : 'drive car');
      this.hud.showPrompt(`Press <kbd>F</kbd> to ${typeLabel}`);
      if (interactKey && !this.interactionCooldown) {
        this.interactionCooldown = true;
        this.enterVehicle(nearest);
        setTimeout(() => { this.interactionCooldown = false; }, 400);
      }
    } else {
      this.hud.hideInteraction();
    }
  }

  handleObservationElevators() {
    if (this.player.isDriving) return;

    const elevators = this.cityBuilder.observationElevators || [];
    let nearby = null;
    let isAtTop = false;

    for (const elev of elevators) {
      const distGround = this.player.position.distanceTo(elev.groundPos);
      const distTop = this.player.position.distanceTo(elev.topPos);

      if (distGround < elev.radius) {
        nearby = elev;
        isAtTop = false;
        break;
      } else if (distTop < elev.radius) {
        nearby = elev;
        isAtTop = true;
        break;
      }
    }

    if (nearby) {
      const actionText = isAtTop
        ? 'Press <kbd>E</kbd> to descend to ground'
        : `Press <kbd>E</kbd> to ascend to ${nearby.name}`;
      this.hud.showPrompt(actionText);

      if (this.input.isDown('KeyE') && !this.interactionCooldown) {
        this.interactionCooldown = true;
        const targetPos = isAtTop ? nearby.groundPos : nearby.topPos;
        this.player.position.copy(targetPos);
        this.player.velocity.set(0, 0, 0);
        this.audioManager.playDoor();
        this.hud.showToast(isAtTop ? 'Returned to ground level' : `Reached ${nearby.name}! Enjoy the view!`);
        setTimeout(() => { this.interactionCooldown = false; }, 500);
      }
    }
  }

  enterVehicle(vehicle) {
    if (this.activeVehicle === vehicle) return;
    this.activeVehicle = vehicle;
    this.player.enterVehicle(vehicle);

    const mode = vehicle.isAirplane ? 'airplane' : (vehicle.isHelicopter ? 'helicopter' : 'vehicle');
    this.cameraController.setMode(mode);
    this.hud.setMode('vehicle');
    this.audioManager.startEngine();

    if (vehicle.isAirplane) {
      this.hud.showToast('Airplane: Hold W to throttle, SPACE to climb into sky, A/D to steer!');
    } else if (vehicle.isHelicopter) {
      this.hud.showToast('Helicopter: Hold SPACE to ascend/lift off, SHIFT to descend, WASD to fly!');
    } else {
      this.hud.showToast('Driving: W to Accelerate, A/D to Steer, Space for Drift/Brake');
    }
  }

  exitVehicle() {
    if (!this.activeVehicle) return;
    this.audioManager.stopEngine();
    this.player.exitVehicle();
    this.activeVehicle = null;
    this.cameraController.setMode('player');
    this.hud.setMode('player');
  }

  animate(currentTime) {
    requestAnimationFrame(this.animate);

    const dt = Math.min((currentTime - this.lastTime) * 0.001, 0.08);
    this.lastTime = currentTime;

    this.trafficSystem.update(dt, this.activeVehicle, this.player);
    this.crowdSystem.update(dt);
    this.handleVehicleInteractions();
    this.handleObservationElevators();

    const cameraYaw = this.cameraController.yaw;
    this.player.update(dt, this.input, cameraYaw, this.vehicles);

    this.vehicles.forEach(veh => {
      const isCurrent = (veh === this.activeVehicle);
      veh.update(dt, this.input, isCurrent);
    });

    this.bloodVfx.update(dt);

    const activePos = (this.player.isDriving && this.activeVehicle) ? this.activeVehicle.position : this.player.position;
    const activeYaw = (this.player.isDriving && this.activeVehicle) ? this.activeVehicle.yaw : this.player.rotation;

    if (this.player.isDriving && this.activeVehicle) {
      const rawSpeed = (this.activeVehicle.speedKmh !== undefined)
        ? this.activeVehicle.speedKmh
        : (this.activeVehicle.speed ? Math.round(this.activeVehicle.speed * 3.6) : 0);
      const speed = Number.isFinite(rawSpeed) ? Math.max(0, Math.round(rawSpeed)) : 0;
      this.cameraController.update(dt, activePos, activeYaw, speed);
      this.hud.updateSpeed(speed);
    } else {
      this.cameraController.update(dt, activePos, activeYaw, 0);
    }

    this.environment.update(dt, activePos);
    this.minimap.update(activePos, activeYaw, this.vehicles);

    const gpsData = this.fullMapOverlay.getGpsDirection(activePos);
    this.hud.updateGps(gpsData, activeYaw);
    this.hud.updateViewMode(this.cameraController.viewMode);

    this.input.clearDelta();
    this.renderer.render(this.scene, this.camera);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  new Game();
});
