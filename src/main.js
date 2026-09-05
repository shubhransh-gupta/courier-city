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
import { SportsCar } from './entities/SportsCar.js';
import { MonsterTruck } from './entities/MonsterTruck.js';
import { BmtcBus } from './entities/BmtcBus.js';
import { AutoRickshaw } from './entities/AutoRickshaw.js';
import { Motorbike } from './entities/Motorbike.js';
import { SkyCreatures } from './world/SkyCreatures.js';
import { AnimalWanderSystem } from './world/AnimalWanderSystem.js';
import { CityBuilder } from './world/CityBuilder.js';
import { MetroSystem } from './world/MetroSystem.js';
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
      powerPreference: 'high-performance',
      precision: 'highp',
      stencil: false
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    // Cap pixelRatio at 1.5 for Retina displays to avoid 4x fragment shader fillrate bottleneck
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFShadowMap;
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
    this.metroSystem = new MetroSystem(this.scene, this.physicsWorld, this.audioManager);
    this.crowdSystem = new CrowdSystem(this.scene);
    this.minimap = new Minimap('radar-canvas');
    this.hud = new HUD();
    this.fullMapOverlay = new FullMapOverlay(this);
  }

  initEntities() {
    // 1. Character Player
    this.player = new Player(this.scene, this.physicsWorld, this.audioManager, this.bloodVfx);

    // 2. Comprehensive High-Performance, Exotic & City Vehicle Fleet
    this.vehicles = [];

    // 2a. Dangerous Exotic Sports Cars (Bugatti Veyron, Aston Martin DBS, Mercedes-AMG GT)
    const sportsCarConfigs = [
      { pos: new THREE.Vector3(6.5, 0, 80), model: 'BUGATTI_VEYRON' },       // Bugatti Veyron in Central Plaza!
      { pos: new THREE.Vector3(-6.5, 0, 80), model: 'ASTON_MARTIN_DBS' },    // Aston Martin DBS in Central Plaza!
      { pos: new THREE.Vector3(0, 0, 68), model: 'MERCEDES_AMG_GT' },        // Mercedes-AMG GT right in front of Spawn!
      { pos: new THREE.Vector3(-70, 0, 110), model: 'BUGATTI_VEYRON' },      // Bugatti outside Founder's Stark Tower
      { pos: new THREE.Vector3(220, 0, 300), model: 'ASTON_MARTIN_DBS' }     // Aston Martin outside Orion Mall / WTC
    ];
    sportsCarConfigs.forEach(cfg => {
      const sports = new SportsCar(this.scene, this.physicsWorld, this.audioManager, cfg.pos, cfg.model);
      this.vehicles.push(sports);
    });

    // 2b. Badass Monster Trucks (Colossal 66-inch wheels, heavy suspension)
    const monsterTruckConfigs = [
      new THREE.Vector3(14.0, 0, 95),   // Central Plaza Off-Road Zone
      new THREE.Vector3(-140, 0, 140)   // Outside BNM Institute / South Ring Road
    ];
    monsterTruckConfigs.forEach(pos => {
      const monster = new MonsterTruck(this.scene, this.physicsWorld, this.audioManager, pos);
      this.vehicles.push(monster);
    });

    // 2c. BMTC Volvo Vajra City Buses (Bangalore Public Transport Route 500-D)
    const bmtcBusConfigs = [
      new THREE.Vector3(34.5, 0, 50),   // Silk Board Metro Bus Terminal
      new THREE.Vector3(34.5, 0, 150),  // HSR Layout 27th Main Bus Stand
      new THREE.Vector3(-200, 0, -25)   // Vidhana Soudha Ceremonial Boulevard Stop
    ];
    bmtcBusConfigs.forEach(pos => {
      const bus = new BmtcBus(this.scene, this.physicsWorld, this.audioManager, pos);
      this.vehicles.push(bus);
    });

    // 2d. Standard Sport Sedans
    const carFleetConfigs = [
      { pos: new THREE.Vector3(45, 0, 6.5), color: 0x22c55e },    // East Highway 4-lane
      { pos: new THREE.Vector3(-45, 0, -6.5), color: 0xf59e0b },  // West Highway 4-lane
      { pos: new THREE.Vector3(0, 0, -100), color: 0xa855f7 },    // India Gate Ceremonial Avenue
      { pos: new THREE.Vector3(160, 0, 240), color: 0xef4444 },   // Eiffel Tower District
      { pos: new THREE.Vector3(260, 0, -160), color: 0x06b6d4 }   // Taj Mahal Gardens
    ];
    carFleetConfigs.forEach(cfg => {
      const car = new Vehicle(this.scene, this.physicsWorld, this.audioManager, cfg.pos, cfg.color);
      this.vehicles.push(car);
    });

    // 2b. Bengaluru Auto-Rickshaws (Iconic Yellow-Green 3-Wheelers)
    const autoPositions = [
      new THREE.Vector3(34.5, 0, 28),   // Silk Board Metro Station Feeder Auto Stand
      new THREE.Vector3(34.5, 0, 172),  // HSR Layout Metro Station Feeder Auto Stand
      new THREE.Vector3(-10, 0, 85),    // Central Avenue
      new THREE.Vector3(-55, 0, 125),   // BTM Layout / Founder's Tower Stand
      new THREE.Vector3(-45, 0, 205)    // V.V. Puram Food Street Feeder Stand
    ];
    autoPositions.forEach(pos => {
      const auto = new AutoRickshaw(this.scene, this.physicsWorld, this.audioManager, pos);
      this.vehicles.push(auto);
    });

    // 2c. Royal Enfield Bullet Motorbikes
    const bikeConfigs = [
      { pos: new THREE.Vector3(12, 0, 82), color: 0x1e293b },  // Central Plaza Black Bullet
      { pos: new THREE.Vector3(70, 0, 95), color: 0x15803d },  // HSR Layout BDA Green Bullet
      { pos: new THREE.Vector3(-125, 0, 150), color: 0x7f1d1d } // BNMIT Campus Maroon Bullet
    ];
    bikeConfigs.forEach(b => {
      const bike = new Motorbike(this.scene, this.physicsWorld, this.audioManager, b.pos, b.color);
      this.vehicles.push(bike);
    });

    // 3. Airplane waiting on Airport Runway (x = 220, z = -380)
    this.airplane = new Airplane(this.scene, this.audioManager, new THREE.Vector3(220, 0.4, -380));
    this.vehicles.push(this.airplane);

    // 4. Helicopter stationed at Airport Helipad (x = 340, z = -352)
    this.helicopter = new Helicopter(this.scene, this.audioManager, new THREE.Vector3(340, 0.4, -352));
    this.vehicles.push(this.helicopter);

    // 5. Ambient Traffic
    this.trafficSystem = new TrafficSystem(this.scene, this.vehicles.filter(v => !v.isAirborne && !v.isAirplane && !v.isHelicopter));

    // 6. In-World 3D GPS Waypoint Hologram Beacon
    this.initWaypointBeacon();

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

    // Welcome Landing Screen Dismissal (Handles both pointer, touch and click immediately)
    const startBtn = document.getElementById('start-game-btn');
    const landingModal = document.getElementById('welcome-landing-modal');
    if (startBtn && landingModal) {
      const dismissWelcome = (e) => {
        if (e) {
          e.preventDefault();
          e.stopPropagation();
        }
        // Hide modal visually
        landingModal.classList.add('welcome-hidden');
        landingModal.style.display = 'none';
        landingModal.style.pointerEvents = 'none';
        // Attempt to resume audio context safely
        try {
          if (this.audioManager && this.audioManager.ctx && this.audioManager.ctx.state === 'suspended') {
            this.audioManager.ctx.resume();
          }
        } catch (err) {
          console.warn('Audio resume error:', err);
        }
        // Show welcome toast if HUD is ready
        try {
          if (this.hud && typeof this.hud.showToast === 'function') {
            this.hud.showToast('Welcome to Courier City! Presented by Shubhransh Gupta');
          }
        } catch (err) {
          console.warn('HUD toast error:', err);
        }
        // Remove modal element from DOM to free resources
        if (landingModal.parentNode) {
          landingModal.parentNode.removeChild(landingModal);
        }
      };

      startBtn.addEventListener('click', dismissWelcome);
      startBtn.addEventListener('pointerdown', dismissWelcome);
      startBtn.addEventListener('touchend', dismissWelcome);
    }

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
      if (e.target.closest('.messenger-header, .messenger-actions, .bottom-hint, #radar-container, #gps-nav-widget, #full-map-overlay, #welcome-landing-modal, .welcome-modal-overlay, .welcome-card')) {
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

    const spawnPos = new THREE.Vector3(
      targetPos.x + 3.5,
      0,
      targetPos.z + 2.0
    );

    const vehicleTypes = ['bugatti', 'aston', 'amg', 'monster', 'auto', 'bus', 'sedan'];
    const chosenType = vehicleTypes[Math.floor(Math.random() * vehicleTypes.length)];
    let newVeh = null;

    if (chosenType === 'bugatti') {
      newVeh = new SportsCar(this.scene, this.physicsWorld, this.audioManager, spawnPos, 'BUGATTI_VEYRON');
      this.hud.showToast('🏎️ Spawned Bugatti Veyron 16.4!');
    } else if (chosenType === 'aston') {
      newVeh = new SportsCar(this.scene, this.physicsWorld, this.audioManager, spawnPos, 'ASTON_MARTIN_DBS');
      this.hud.showToast('🏎️ Spawned Aston Martin DBS Superleggera!');
    } else if (chosenType === 'amg') {
      newVeh = new SportsCar(this.scene, this.physicsWorld, this.audioManager, spawnPos, 'MERCEDES_AMG_GT');
      this.hud.showToast('🏎️ Spawned Mercedes-AMG GT Black Series!');
    } else if (chosenType === 'monster') {
      newVeh = new MonsterTruck(this.scene, this.physicsWorld, this.audioManager, spawnPos);
      this.hud.showToast('🛞 Spawned Titan 4x4 Monster Truck!');
    } else if (chosenType === 'auto') {
      newVeh = new AutoRickshaw(this.scene, this.physicsWorld, this.audioManager, spawnPos);
      this.hud.showToast('🛺 Spawned Namma Bengaluru Auto-Rickshaw!');
    } else if (chosenType === 'bus') {
      newVeh = new BmtcBus(this.scene, this.physicsWorld, this.audioManager, spawnPos);
      this.hud.showToast('🚌 Spawned BMTC Volvo Vajra City Bus!');
    } else {
      newVeh = new Vehicle(this.scene, this.physicsWorld, this.audioManager, spawnPos, 0xff4757);
      this.hud.showToast('🚗 Spawned Sports Sedan!');
    }

    this.vehicles.push(newVeh);
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

    // Catch / Board Namma Metro check
    if (this.metroSystem && !this.player.isDriving) {
      if (this.isRidingMetro) {
        this.hud.showPrompt('Riding Namma Metro • Press <kbd>E</kbd> or <kbd>F</kbd> to alight');
        if ((interactKey || this.input.isDown('KeyE')) && !this.interactionCooldown) {
          this.interactionCooldown = true;
          this.exitMetro();
          setTimeout(() => { this.interactionCooldown = false; }, 400);
          return;
        }
      } else if (this.metroSystem.canBoardTrain(this.player.position)) {
        this.hud.showPrompt('Press <kbd>E</kbd> to Catch Namma Metro 🚊');
        if (this.input.isDown('KeyE') && !this.interactionCooldown) {
          this.interactionCooldown = true;
          this.boardMetro();
          setTimeout(() => { this.interactionCooldown = false; }, 400);
          return;
        }
      }
    }

    this.nearbyVehicle = nearest;

    if (nearest) {
      const typeLabel = nearest.isAirplane
        ? 'pilot airplane'
        : (nearest.isHelicopter
          ? 'fly helicopter'
          : (nearest.isSportsCar
            ? `drive ${nearest.carName || 'Supercar'}`
            : (nearest.isMonsterTruck
              ? 'drive Monster Truck'
              : (nearest.isBmtcBus
                ? 'drive BMTC Volvo Bus'
                : (nearest.isAutoRickshaw
                  ? 'drive Auto-Rickshaw'
                  : (nearest.isMotorbike ? 'ride Bullet Motorbike' : 'drive car'))))));
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
    } else if (vehicle.isSportsCar) {
      this.hud.showToast(`${vehicle.carName || 'Supercar'}: W to Accelerate, SHIFT for Boost, Space to Drift!`);
    } else if (vehicle.isMonsterTruck) {
      this.hud.showToast('Monster Truck: High clearance 4x4! Drive over curbs & obstacles with W/S/A/D!');
    } else if (vehicle.isBmtcBus) {
      this.hud.showToast('BMTC Volvo Vajra Bus: 500-D City Transit Route! W to drive, Space to brake.');
    } else if (vehicle.isAutoRickshaw) {
      this.hud.showToast('Namma Auto: Sharp 3-wheeler turning! W to accelerate, A/D to steer.');
    } else {
      this.hud.showToast('Driving: W to Accelerate, A/D to Steer, Space for Drift/Brake');
    }
  }

  initWaypointBeacon() {
    this.waypointGroup = new THREE.Group();

    // 1. Vertical glowing hologram beacon beam (visible from far away)
    const beamGeo = new THREE.CylinderGeometry(0.7, 1.4, 60, 16);
    const beamMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
      depthWrite: false
    });
    const beam = new THREE.Mesh(beamGeo, beamMat);
    beam.position.y = 30;
    this.waypointGroup.add(beam);

    // 2. Concentric animated pulsing ground rings
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.85
    });
    this.waypointRing1 = new THREE.Mesh(new THREE.RingGeometry(2.0, 2.6, 24), ringMat);
    this.waypointRing1.rotation.x = -Math.PI / 2;
    this.waypointRing1.position.y = 0.15;

    this.waypointRing2 = new THREE.Mesh(new THREE.RingGeometry(4.2, 5.0, 24), ringMat);
    this.waypointRing2.rotation.x = -Math.PI / 2;
    this.waypointRing2.position.y = 0.16;

    this.waypointGroup.add(this.waypointRing1, this.waypointRing2);

    this.scene.add(this.waypointGroup);
    this.updateWaypointPosition();
  }

  updateWaypointPosition() {
    const target = this.fullMapOverlay.gpsTarget;
    if (target && this.waypointGroup) {
      this.waypointGroup.position.set(target.x, 0, target.z);
      this.waypointGroup.visible = true;
    }
  }

  onGpsTargetChanged(newTarget) {
    this.updateWaypointPosition();
  }

  updateWaypointAnimation(dt, currentTime) {
    if (this.waypointGroup && this.waypointGroup.visible) {
      const time = currentTime * 0.001;
      this.waypointRing1.rotation.z += 1.4 * dt;
      this.waypointRing2.rotation.z -= 0.9 * dt;
      const pulse = 1.0 + Math.sin(time * 3.5) * 0.15;
      this.waypointRing1.scale.set(pulse, pulse, 1);
    }
  }

  boardMetro() {
    this.isRidingMetro = true;
    this.metroSystem.boardPassenger(this.player);
    this.player.mesh.visible = false;
    this.hud.showToast('Boarded Namma Metro! Enjoy the scenic elevated Bengaluru ride.');
  }

  exitMetro() {
    this.isRidingMetro = false;
    const exitPos = this.metroSystem.exitPassenger();
    this.player.position.copy(exitPos);
    this.player.mesh.position.copy(exitPos);
    this.player.mesh.visible = true;
    this.hud.showToast('Alighted from Namma Metro station.');
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

    // Limit to ~60 FPS (16.67ms per frame)
    if (this.lastRender && (currentTime - this.lastRender) < 16.67) {
      // Skip this frame to maintain stable FPS
      return;
    }
    this.lastRender = currentTime;

    const dt = Math.min((currentTime - this.lastTime) * 0.001, 0.08);
    this.lastTime = currentTime;

    // Throttle expensive system updates to every other frame for performance
    this._sysFrame = (this._sysFrame || 0) + 1;
    if (this._sysFrame % 2 === 0) {
      this.trafficSystem.update(dt, this.activeVehicle, this.player);
      this.crowdSystem.update(dt);
      if (this.skyCreatures) this.skyCreatures.update(dt, currentTime * 0.001);
      if (this.animalSystem) this.animalSystem.update(dt, currentTime * 0.001);
    }
    this.metroSystem.update(dt);
    this.handleVehicleInteractions();
    this.handleObservationElevators();
    this.updateWaypointAnimation(dt, currentTime);

    const cameraYaw = this.cameraController.yaw;
    this.player.update(dt, this.input, cameraYaw, this.vehicles);

    this.vehicles.forEach(veh => {
      const isCurrent = (veh === this.activeVehicle);
      veh.update(dt, this.input, isCurrent);
    });

    this.bloodVfx.update(dt);

    // Determine active position and orientation for camera, HUD, and environment
    let activePos = this.player.position;
    let activeYaw = this.player.rotation;

    if (this.isRidingMetro && this.metroSystem) {
      // Metro riding – use metro position
      const metroPos = new THREE.Vector3(
        this.metroSystem.trackX,
        this.metroSystem.trainY + 2.5,
        this.metroSystem.currentZ
      );
      activePos = metroPos;
      activeYaw = 0;
      this.cameraController.update(dt, metroPos, 0, Math.round(this.metroSystem.currentSpeed * 3.6));
      this.hud.updateSpeed(Math.round(this.metroSystem.currentSpeed * 3.6));
    } else {
      if (this.player.isDriving && this.activeVehicle) {
        // Driving a vehicle
        activePos = this.activeVehicle.position;
        activeYaw = this.activeVehicle.yaw;
        const rawSpeed = this.activeVehicle.speedKmh !== undefined
          ? this.activeVehicle.speedKmh
          : (this.activeVehicle.speed ? Math.round(this.activeVehicle.speed * 3.6) : 0);
        const speed = Number.isFinite(rawSpeed) ? Math.max(0, Math.round(rawSpeed)) : 0;
        this.cameraController.update(dt, activePos, activeYaw, speed);
        this.hud.updateSpeed(speed);
      } else {
        // Walking as player
        this.cameraController.update(dt, activePos, activeYaw, 0);
      }
    }

    this.environment.update(dt, activePos);
    this.minimap.update(activePos, activeYaw, this.vehicles, this.fullMapOverlay.gpsTarget);

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
