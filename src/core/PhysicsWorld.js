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

  getFlyoverAt(x, z, currentY = 0) {
    // Check if within any elevated ramp
    for (const ramp of this.flyoverRamps) {
      if (ramp.axis === 'X') {
        if (Math.abs(z - ramp.fixedCoord) <= ramp.width / 2 + 0.5) {
          const minX = Math.min(ramp.startCoord, ramp.endCoord);
          const maxX = Math.max(ramp.startCoord, ramp.endCoord);
          if (x >= minX - 1.5 && x <= maxX + 1.5) {
            const t = Math.max(0, Math.min(1, (x - ramp.startCoord) / (ramp.endCoord - ramp.startCoord)));
            const rampH = ramp.startHeight + (ramp.endHeight - ramp.startHeight) * t;
            if (Math.abs(currentY - rampH) < 7.0 || currentY <= rampH + 2.0) {
              return { type: 'ramp', ramp, currentSurfaceH: rampH };
            }
          }
        }
      } else if (ramp.axis === 'Z') {
        if (Math.abs(x - ramp.fixedCoord) <= ramp.width / 2 + 0.5) {
          const minZ = Math.min(ramp.startCoord, ramp.endCoord);
          const maxZ = Math.max(ramp.startCoord, ramp.endCoord);
          if (z >= minZ - 1.5 && z <= maxZ + 1.5) {
            const t = Math.max(0, Math.min(1, (z - ramp.startCoord) / (ramp.endCoord - ramp.startCoord)));
            const rampH = ramp.startHeight + (ramp.endHeight - ramp.startHeight) * t;
            if (Math.abs(currentY - rampH) < 7.0 || currentY <= rampH + 2.0) {
              return { type: 'ramp', ramp, currentSurfaceH: rampH };
            }
          }
        }
      }
    }

    // Check elevated flyover decks
    for (const deck of this.flyovers) {
      if (x >= deck.minX - 1.0 && x <= deck.maxX + 1.0 && z >= deck.minZ - 1.0 && z <= deck.maxZ + 1.0) {
        if (currentY >= deck.height - 3.5 || Math.abs(currentY - deck.height) < 6.0) {
          return { type: 'deck', deck, currentSurfaceH: deck.height };
        }
      }
    }

    return null;
  }

  constrainToFlyover(x, z, currentY = 0, entityRadius = 1.0) {
    let finalX = x;
    let finalZ = z;
    let constrained = false;

    // Only apply lateral guardrails if entity is elevated above ground level
    if (currentY < 1.0) {
      return { x: finalX, z: finalZ, constrained: false };
    }

    // 1. Check if entity is on a ramp
    for (const ramp of this.flyoverRamps) {
      if (ramp.axis === 'X') {
        const minX = Math.min(ramp.startCoord, ramp.endCoord);
        const maxX = Math.max(ramp.startCoord, ramp.endCoord);
        if (x >= minX - 0.5 && x <= maxX + 0.5) {
          const t = Math.max(0, Math.min(1, (x - ramp.startCoord) / (ramp.endCoord - ramp.startCoord)));
          const rampH = ramp.startHeight + (ramp.endHeight - ramp.startHeight) * t;
          if (Math.abs(currentY - rampH) < 5.0) {
            // Constrain lateral Z inside ramp width
            const halfW = ramp.width / 2 - entityRadius * 0.4;
            const minZ = ramp.fixedCoord - halfW;
            const maxZ = ramp.fixedCoord + halfW;
            if (finalZ < minZ) {
              finalZ = minZ;
              constrained = true;
            } else if (finalZ > maxZ) {
              finalZ = maxZ;
              constrained = true;
            }
            return { x: finalX, z: finalZ, constrained };
          }
        }
      } else if (ramp.axis === 'Z') {
        const minZ = Math.min(ramp.startCoord, ramp.endCoord);
        const maxZ = Math.max(ramp.startCoord, ramp.endCoord);
        if (z >= minZ - 0.5 && z <= maxZ + 0.5) {
          const t = Math.max(0, Math.min(1, (z - ramp.startCoord) / (ramp.endCoord - ramp.startCoord)));
          const rampH = ramp.startHeight + (ramp.endHeight - ramp.startHeight) * t;
          if (Math.abs(currentY - rampH) < 5.0) {
            // Constrain lateral X inside ramp width
            const halfW = ramp.width / 2 - entityRadius * 0.4;
            const minX = ramp.fixedCoord - halfW;
            const maxX = ramp.fixedCoord + halfW;
            if (finalX < minX) {
              finalX = minX;
              constrained = true;
            } else if (finalX > maxX) {
              finalX = maxX;
              constrained = true;
            }
            return { x: finalX, z: finalZ, constrained };
          }
        }
      }
    }

    // 2. Check if entity is on a deck
    for (const deck of this.flyovers) {
      if (Math.abs(currentY - deck.height) < 4.0 || currentY >= deck.height - 1.5) {
        if (deck.axis === 'X') {
          // Deck runs along X (minX to maxX), cross-axis is Z
          // If within longitudinal span or near ends
          if (finalX >= deck.minX - 3.0 && finalX <= deck.maxX + 3.0) {
            const halfW = deck.width / 2 - entityRadius * 0.4;
            const minZ = deck.z - halfW;
            const maxZ = deck.z + halfW;
            if (finalZ < minZ) {
              finalZ = minZ;
              constrained = true;
            } else if (finalZ > maxZ) {
              finalZ = maxZ;
              constrained = true;
            }
          }
        } else if (deck.axis === 'Z') {
          // Deck runs along Z (minZ to maxZ), cross-axis is X
          if (finalZ >= deck.minZ - 3.0 && finalZ <= deck.maxZ + 3.0) {
            const halfW = deck.width / 2 - entityRadius * 0.4;
            const minX = deck.x - halfW;
            const maxX = deck.x + halfW;
            if (finalX < minX) {
              finalX = minX;
              constrained = true;
            } else if (finalX > maxX) {
              finalX = maxX;
              constrained = true;
            }
          }
        }
      }
    }

    return { x: finalX, z: finalZ, constrained };
  }

  getSurfaceHeight(x, z, currentY = 0) {
    let surfaceH = 0;

    // 1. Check flyover ramps first — smooth climbing from ground to elevated deck
    for (const ramp of this.flyoverRamps) {
      if (ramp.axis === 'X') {
        if (Math.abs(z - ramp.fixedCoord) <= ramp.width / 2 + 0.8) {
          const minX = Math.min(ramp.startCoord, ramp.endCoord);
          const maxX = Math.max(ramp.startCoord, ramp.endCoord);
          if (x >= minX - 1.5 && x <= maxX + 1.5) {
            const t = Math.max(0, Math.min(1, (x - ramp.startCoord) / (ramp.endCoord - ramp.startCoord)));
            const rampH = ramp.startHeight + (ramp.endHeight - ramp.startHeight) * t;
            if (Math.abs(currentY - rampH) < 8.0 || currentY <= rampH + 2.5) {
              if (rampH > surfaceH) surfaceH = rampH;
            }
          }
        }
      } else if (ramp.axis === 'Z') {
        if (Math.abs(x - ramp.fixedCoord) <= ramp.width / 2 + 0.8) {
          const minZ = Math.min(ramp.startCoord, ramp.endCoord);
          const maxZ = Math.max(ramp.startCoord, ramp.endCoord);
          if (z >= minZ - 1.5 && z <= maxZ + 1.5) {
            const t = Math.max(0, Math.min(1, (z - ramp.startCoord) / (ramp.endCoord - ramp.startCoord)));
            const rampH = ramp.startHeight + (ramp.endHeight - ramp.startHeight) * t;
            if (Math.abs(currentY - rampH) < 8.0 || currentY <= rampH + 2.5) {
              if (rampH > surfaceH) surfaceH = rampH;
            }
          }
        }
      }
    }

    // 2. Check elevated flyover decks
    for (const deck of this.flyovers) {
      if (x >= deck.minX - 1.0 && x <= deck.maxX + 1.0 && z >= deck.minZ - 1.0 && z <= deck.maxZ + 1.0) {
        if (currentY >= deck.height - 3.0 || Math.abs(currentY - deck.height) < 6.5) {
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

