import * as THREE from 'three';
import { Airplane } from '../entities/Airplane.js';
import { Helicopter } from '../entities/Helicopter.js';

export class AmbientAirTrafficSystem {
  constructor(scene, physicsWorld, audioManager) {
    this.scene = scene;
    this.physicsWorld = physicsWorld;
    this.audioManager = audioManager;

    // Aircraft arrays
    this.ambientAirplanes = [];
    this.ambientHelicopters = [];

    // Flight paths and schedules
    this.airplaneRoutes = [
      // Takeoff from airport, fly over city, land back
      {
        name: "Airport to Tech Park",
        takeoffPos: new THREE.Vector3(220, 0.4, -380), // Airport runway
        waypoints: [
          new THREE.Vector3(250, 150, -300), // Climb out
          new THREE.Vector3(100, 200, 0),    // Over central Bangalore
          new THREE.Vector3(-150, 180, 200), // Tech park area
          new THREE.Vector3(-200, 120, 150), // Descend
          new THREE.Vector3(-180, 0.4, 100)  // Landing approach
        ],
        landingPos: new THREE.Vector3(-150, 0.4, 50),
        type: 'airplane',
        speed: 25 + Math.random() * 10 // 25-35 m/s
      },
      {
        name: "City Circuit",
        takeoffPos: new THREE.Vector3(220, 0.4, -380),
        waypoints: [
          new THREE.Vector3(200, 180, -200), // Initial climb
          new THREE.Vector3(0, 220, 100),    // North over city
          new THREE.Vector3(-200, 200, 0),   // West across
          new THREE.Vector3(0, 180, -100),   // South return
          new THREE.Vector3(180, 120, -300)  // Final approach
        ],
        landingPos: new THREE.Vector3(220, 0.4, -380),
        type: 'airplane',
        speed: 20 + Math.random() * 15 // 20-35 m/s
      }
    ];

    this.heliRoutes = [
      {
        name: "Hospital Shuttle",
        takeoffPos: new THREE.Vector3(340, 0.4, -352), // Airport helipad
        waypoints: [
          new THREE.Vector3(320, 80, -200),  // To hospital area
          new THREE.Vector3(100, 60, 50),    // Central
          new THREE.Vector3(-100, 70, -100), // West
          new THREE.Vector3(-200, 50, 150)   // Landing zone
        ],
        landingPos: new THREE.Vector3(-250, 0.4, 100),
        type: 'helicopter',
        speed: 8 + Math.random() * 4 // 8-12 m/s
      },
      {
        name: "VIP Tour",
        takeoffPos: new THREE.Vector3(300, 0.4, -300),
        waypoints: [
          new THREE.Vector3(250, 100, -100), // Vidhana Soudha area
          new THREE.Vector3(50, 120, 0),     // MG Road
          new THREE.Vector3(-150, 100, 100), // Palace grounds
          new THREE.Vector3(-50, 80, -50)    // Return
        ],
        landingPos: new THREE.Vector3(300, 0.4, -300),
        type: 'helicopter',
        speed: 6 + Math.random() * 6 // 6-12 m/s
      }
    ];

    // Timing controls
    this.lastAirplaneSpawn = 0;
    this.lastHeliSpawn = 0;
    this.airplaneSpawnInterval = 15000 + Math.random() * 10000; // 15-25 seconds
    this.heliSpawnInterval = 8000 + Math.random() * 7000;      // 8-15 seconds

    // Maximum ambient aircraft to prevent overcrowning
    this.maxAmbientAirplanes = 3;
    this.maxAmbientHelicopters = 2;
  }

  update(dt, time) {
    // Spawn ambient airplanes
    if (time - this.lastAirplaneSpawn > this.airplaneSpawnInterval &&
        this.ambientAirplanes.length < this.maxAmbientAirplanes) {
      this.spawnAmbientAirplane();
      this.lastAirplaneSpawn = time;
      // Randomize next interval
      this.airplaneSpawnInterval = 12000 + Math.random() * 18000; // 12-30 seconds
    }

    // Spawn ambient helicopters
    if (time - this.lastHeliSpawn > this.heliSpawnInterval &&
        this.ambientHelicopters.length < this.maxAmbientHelicopters) {
      this.spawnAmbientHelicopter();
      this.lastHeliSpawn = time;
      // Randomize next interval
      this.heliSpawnInterval = 6000 + Math.random() * 12000; // 6-18 seconds
    }

    // Update existing ambient aircraft
    this.updateAmbientAirplanes(dt, time);
    this.updateAmbientHelicopters(dt, time);
  }

  spawnAmbientAirplane() {
    // Pick a random route
    const route = this.airplaneRoutes[Math.floor(Math.random() * this.airplaneRoutes.length)];

    // Create airplane at takeoff position
    const airplane = new Airplane(this.scene, this.audioManager, route.takeoffPos.clone());
    airplane.maxSpeed = route.speed;
    airplane.route = route;
    airplane.routeProgress = 0;
    airplane.state = 'taking_off'; // taking_off, flying, landing, landed
    airplane.waypointIndex = 0;

    this.ambientAirplanes.push(airplane);
  }

  spawnAmbientHelicopter() {
    // Pick a random route
    const route = this.heliRoutes[Math.floor(Math.random() * this.heliRoutes.length)];

    // Create helicopter at takeoff position
    const helicopter = new Helicopter(this.scene, this.audioManager, route.takeoffPos.clone());
    helicopter.maxSpeed = route.speed;
    helicopter.route = route;
    helicopter.routeProgress = 0;
    helicopter.state = 'taking_off';
    helicopter.waypointIndex = 0;

    this.ambientHelicopters.push(helicopter);
  }

  updateAmbientAirplanes(dt, time) {
    for (let i = this.ambientAirplanes.length - 1; i >= 0; i--) {
      const airplane = this.ambientAirplanes[i];

      if (airplane.state === 'taking_off') {
        // Simulate takeoff
        airplane.speed = Math.min(airplane.maxSpeed, airplane.speed + 15 * dt);
        if (airplane.speed > airplane.takeoffSpeed) {
          airplane.isAirborne = true;
          airplane.state = 'flying';
        }
      } else if (airplane.state === 'flying') {
        // Follow route
        this.followRoute(airplane, dt);

        // Check if finished route
        if (airplane.routeProgress >= 1.0) {
          airplane.state = 'landing';
        }
      } else if (airplane.state === 'landing') {
        // Simulate landing
        airplane.speed = Math.max(0, airplane.speed - 10 * dt);
        if (airplane.speed < 5) {
          airplane.state = 'landed';
          // Remove after landing
          this.removeAirplane(i);
        }
      }

      // Update airplane physics
      airplane.update(dt, null, false);
    }
  }

  updateAmbientHelicopters(dt, time) {
    for (let i = this.ambientHelicopters.length - 1; i >= 0; i--) {
      const helicopter = this.ambientHelicopters[i];

      if (helicopter.state === 'taking_off') {
        // Simulate takeoff
        helicopter.altitude = Math.min(80, helicopter.altitude + 5 * dt);
        if (helicopter.altitude > 10) {
          helicopter.isAirborne = true;
          helicopter.state = 'flying';
        }
      } else if (helicopter.state === 'flying') {
        // Follow route
        this.followRoute(helicopter, dt);

        // Check if finished route
        if (helicopter.routeProgress >= 1.0) {
          helicopter.state = 'landing';
        }
      } else if (helicopter.state === 'landing') {
        // Simulate landing
        helicopter.altitude = Math.max(0.4, helicopter.altitude - 3 * dt);
        if (helicopter.altitude <= 0.5) {
          helicopter.state = 'landed';
          // Remove after landing
          this.removeHelicopter(i);
        }
      }

      // Update helicopter physics
      helicopter.update(dt, null, false);
    }
  }

  followRoute(vehicle, dt) {
    if (!vehicle.route || !vehicle.route.waypoints) return;

    const route = vehicle.route;
    const waypoints = route.waypoints;

    if (vehicle.waypointIndex >= waypoints.length - 1) {
      // Last waypoint - head to landing position
      const target = route.landingPos;
      const distance = vehicle.position.distanceTo(target);

      if (distance < 10) {
        vehicle.routeProgress = 1.0; // Complete
        return;
      }

      // Move toward landing position
      const direction = new THREE.Vector3()
        .subVectors(target, vehicle.position)
        .normalize();

      vehicle.position.add(direction.multiplyScalar(Math.min(vehicle.maxSpeed * dt, distance)));
      vehicle.routeProgress = Math.min(1.0, vehicle.routeProgress + dt * 0.1);

      // Orient toward target
      if (distance > 1) {
        vehicle.yaw = Math.atan2(direction.x, direction.z);
      }
    } else {
      // Between waypoints
      const currentWP = waypoints[vehicle.waypointIndex];
      const nextWP = waypoints[vehicle.waypointIndex + 1];

      // Calculate progress between current and next waypoint
      const wpDistance = currentWP.distanceTo(nextWP);
      const vehicleToCurrent = vehicle.position.distanceTo(currentWP);

      if (vehicleToCurrent < 5 && vehicle.waypointIndex < waypoints.length - 1) {
        // Close enough to current waypoint, move to next
        vehicle.waypointIndex++;
        return;
      }

      // Interpolate position between waypoints
      const segmentProgress = Math.min(1.0, vehicleToCurrent / wpDistance);
      const targetPos = new THREE.Vector3()
        .lerpVectors(currentWP, nextWP, segmentProgress);

      // Move toward target
      const direction = new THREE.Vector3()
        .subVectors(targetPos, vehicle.position)
        .normalize();

      const moveAmount = Math.min(vehicle.maxSpeed * dt, vehicle.position.distanceTo(targetPos));
      vehicle.position.add(direction.multiplyScalar(moveAmount));

      // Update overall route progress
      vehicle.routeProgress = (vehicle.waypointIndex + segmentProgress) / waypoints.length;

      // Orient toward target
      if (vehicle.position.distanceTo(targetPos) > 1) {
        vehicle.yaw = Math.atan2(direction.x, direction.z);
      }
    }
  }

  removeAirplane(index) {
    const airplane = this.ambientAirplanes[index];
    // Clean up
    this.scene.remove(airplane.mesh);
    if (airplane.shadow) this.scene.remove(airplane.shadow);
    // Remove from array
    this.ambientAirplanes.splice(index, 1);
  }

  removeHelicopter(index) {
    const helicopter = this.ambientHelicopters[index];
    // Clean up
    this.scene.remove(helicopter.mesh);
    if (helicopter.shadow) this.scene.remove(helicopter.shadow);
    // Remove from array
    this.ambientHelicopters.splice(index, 1);
  }
}
