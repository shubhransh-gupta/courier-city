import * as CANNON from 'cannon-es';

export class PhysicsWorld {
  constructor() {
    this.world = new CANNON.World();
    this.world.gravity.set(0, -20, 0);
    this.world.broadphase = new CANNON.NaiveBroadphase();
    this.world.solver.iterations = 10;
    this.world.defaultContactMaterial.friction = 0.35;
    this.world.defaultContactMaterial.restitution = 0.05;

    // Static obstacles, interactive ramps, and elevated flyover network
    this.obstacles = [];
    this.ramps = [];
    this.flyovers = [];
    this.flyoverRamps = [];

    const groundShape = new CANNON.Plane();
    const groundBody = new CANNON.Body({
      mass: 0,
      shape: groundShape
    });
    groundBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 2);
    this.world.addBody(groundBody);
    this.groundBody = groundBody;
  }

  step(dt) {
    this.world.step(1 / 60, dt, 3);
  }

  addStaticBox(x, y, z, hx, hy, hz, isRamp = false) {
    const shape = new CANNON.Box(new CANNON.Vec3(hx, hy, hz));
    const body = new CANNON.Body({
      mass: 0,
      position: new CANNON.Vec3(x, y, z),
      shape: shape
    });
    this.world.addBody(body);

    this.obstacles.push({ x, y, z, hx, hy, hz, isRamp });
    return body;
  }

  addRampTrigger(x, z, width, length, height, rotY = 0) {
    this.ramps.push({ x, z, width, length, height, rotY });
  }

  addFlyover(id, x, z, length, width, height, axis = 'X') {
    const halfL = length / 2;
    const halfW = width / 2;
    const minX = axis === 'X' ? x - halfL : x - halfW;
    const maxX = axis === 'X' ? x + halfL : x + halfW;
    const minZ = axis === 'X' ? z - halfW : z - halfL;
    const maxZ = axis === 'X' ? z + halfW : z + halfL;

    this.flyovers.push({
      id,
      x,
      z,
      length,
      width,
      height,
      axis,
      minX,
      maxX,
      minZ,
      maxZ
    });
  }

  addFlyoverRamp(id, axis, startCoord, endCoord, fixedCoord, width, startHeight, endHeight) {
    this.flyoverRamps.push({
      id,
      axis,
      startCoord,
      endCoord,
      fixedCoord,
      width,
      startHeight,
      endHeight
    });
  }

  getSurfaceHeight(x, z, currentY = 0) {
    let surfaceH = 0;

    // 1. Check flyover ramps first — these allow climbing from ground to elevated deck
    for (const ramp of this.flyoverRamps) {
      if (ramp.axis === 'X') {
        if (Math.abs(z - ramp.fixedCoord) <= ramp.width / 2) {
          const minX = Math.min(ramp.startCoord, ramp.endCoord);
          const maxX = Math.max(ramp.startCoord, ramp.endCoord);
          if (x >= minX - 1.0 && x <= maxX + 1.0) {
            const t = Math.max(0, Math.min(1, (x - ramp.startCoord) / (ramp.endCoord - ramp.startCoord)));
            const rampH = ramp.startHeight + (ramp.endHeight - ramp.startHeight) * t;
            // Accept if player is anywhere near the ramp height OR approaching from ground
            // The key fix: allow climbing from ground level onto ramp base
            if (Math.abs(currentY - rampH) < 8.0 || currentY <= rampH + 2.0) {
              if (rampH > surfaceH) surfaceH = rampH;
            }
          }
        }
      } else if (ramp.axis === 'Z') {
        if (Math.abs(x - ramp.fixedCoord) <= ramp.width / 2) {
          const minZ = Math.min(ramp.startCoord, ramp.endCoord);
          const maxZ = Math.max(ramp.startCoord, ramp.endCoord);
          if (z >= minZ - 1.0 && z <= maxZ + 1.0) {
            const t = Math.max(0, Math.min(1, (z - ramp.startCoord) / (ramp.endCoord - ramp.startCoord)));
            const rampH = ramp.startHeight + (ramp.endHeight - ramp.startHeight) * t;
            if (Math.abs(currentY - rampH) < 8.0 || currentY <= rampH + 2.0) {
              if (rampH > surfaceH) surfaceH = rampH;
            }
          }
        }
      }
    }

    // 2. Check elevated flyover decks
    for (const deck of this.flyovers) {
      if (x >= deck.minX && x <= deck.maxX && z >= deck.minZ && z <= deck.maxZ) {
        // Allow if player is already at deck height, above deck, or on a ramp leading to deck
        if (currentY >= deck.height - 3.0 || Math.abs(currentY - deck.height) < 6.0) {
          if (deck.height > surfaceH) {
            surfaceH = deck.height;
          }
        }
      }
    }

    return surfaceH;
  }

  removeBody(body) {
    this.world.removeBody(body);
  }
}
