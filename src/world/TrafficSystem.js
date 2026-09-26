import * as THREE from 'three';

export class TrafficSystem {
  constructor(scene, vehicles) {
    this.scene = scene;
    this.vehicles = vehicles.filter(v => v.isTrafficCar && !v.isAirplane && !v.isHelicopter);

    // Routes across 6-lane grand highways (width 38m, 3 lanes each direction)
    // Lane 1 (fast): ±3.0m, Lane 2 (cruising): ±9.0m, Lane 3 (slow): ±14.5m
    this.routes = [
      { waypoints: [new THREE.Vector3(3.0, 0, 480), new THREE.Vector3(3.0, 0, -480)], speed: 18.0 },
      { waypoints: [new THREE.Vector3(9.0, 0, 480), new THREE.Vector3(9.0, 0, -480)], speed: 15.0 },
      { waypoints: [new THREE.Vector3(14.5, 0, 480), new THREE.Vector3(14.5, 0, -480)], speed: 12.0 },
      { waypoints: [new THREE.Vector3(-3.0, 0, -480), new THREE.Vector3(-3.0, 0, 480)], speed: 18.0 },
      { waypoints: [new THREE.Vector3(-9.0, 0, -480), new THREE.Vector3(-9.0, 0, 480)], speed: 15.0 },
      { waypoints: [new THREE.Vector3(-14.5, 0, -480), new THREE.Vector3(-14.5, 0, 480)], speed: 12.0 },
      { waypoints: [new THREE.Vector3(480, 0, 9.0), new THREE.Vector3(-480, 0, 9.0)], speed: 16.0 },
      { waypoints: [new THREE.Vector3(-480, 0, -9.0), new THREE.Vector3(480, 0, -9.0)], speed: 16.0 },
      { waypoints: [new THREE.Vector3(200 + 9.0, 0, -450), new THREE.Vector3(200 + 9.0, 0, 450)], speed: 17.0 },
      { waypoints: [new THREE.Vector3(-200 - 9.0, 0, 450), new THREE.Vector3(-200 - 9.0, 0, -450)], speed: 17.0 }
    ];

    this.carStates = [];
    this.vehicles.forEach((veh, idx) => {
      const route = this.routes[idx % this.routes.length];
      this.carStates.push({
        vehicle: veh,
        targetIndex: 0,
        waypoints: route.waypoints,
        speed: route.speed,
        honkCooldown: 0
      });
    });
  }

  update(dt, activePlayerVehicle, player = null) {
    const playerPos = player ? player.position : null;
    const isPlayerDriving = player ? player.isDriving : false;

    this.carStates.forEach(state => {
      const veh = state.vehicle;
      if (!veh || veh === activePlayerVehicle) return;

      if (state.honkCooldown > 0) state.honkCooldown -= dt;

      const pos = veh.position;
      let shouldStop = false;

      // Intelligent Pedestrian Safety Detection:
      // If player is on foot in front of the car, slam brakes and STOP!
      if (playerPos && !isPlayerDriving) {
        const toPlayerX = playerPos.x - pos.x;
        const toPlayerZ = playerPos.z - pos.z;
        const distToPlayer = Math.sqrt(toPlayerX * toPlayerX + toPlayerZ * toPlayerZ);

        if (distToPlayer < 9.5) {
          // Check if player is in front of the vehicle
          const fwdX = Math.sin(veh.yaw);
          const fwdZ = Math.cos(veh.yaw);
          const dot = (toPlayerX * fwdX + toPlayerZ * fwdZ) / distToPlayer;

          if (dot > 0.4) {
            // Player is directly ahead: STOP!
            shouldStop = true;
            if (state.honkCooldown <= 0 && veh.audioManager) {
              veh.audioManager.playHonk();
              state.honkCooldown = 3.5;
            }
          }
        }
      }

      if (shouldStop) {
        veh.currentSpeed = Math.max(0, veh.currentSpeed - 35 * dt);
        veh.speedKmh = 0;
        return; // Car holds brakes and stays completely stopped!
      }

      // Normal navigation towards waypoint
      const target = state.waypoints[state.targetIndex];
      const dx = target.x - pos.x;
      const dz = target.z - pos.z;
      const dist = Math.sqrt(dx * dx + dz * dz);

      if (dist < 6.0) {
        state.targetIndex = (state.targetIndex + 1) % state.waypoints.length;
      }

      const desiredAngle = Math.atan2(dx, dz);
      veh.yaw = desiredAngle;
      veh.currentSpeed = state.speed;
      veh.speedKmh = Math.round(state.speed * 3.6);

      veh.position.x += Math.sin(desiredAngle) * state.speed * dt;
      veh.position.z += Math.cos(desiredAngle) * state.speed * dt;

      // Sync 3D mesh
      veh.mesh.position.copy(veh.position);
      veh.mesh.rotation.y = veh.yaw;

      // Spin wheels
      if (veh.frontLeftWheel) {
        const wheelSpin = (state.speed * dt) / 0.42;
        veh.frontLeftWheel.rotation.x += wheelSpin;
        veh.frontRightWheel.rotation.x -= wheelSpin;
        veh.rearLeftWheel.rotation.x += wheelSpin;
        veh.rearRightWheel.rotation.x -= wheelSpin;
      }
    });
  }
}
