import * as THREE from 'three';

/**
 * PerformanceOptimizer
 * Implements performance optimizations for the open world:
 * - InstancedMesh for repetitive objects (foliage, street furniture)
 * - Distance-based Level of Detail (LOD)
 * - Frustum culling for distant objects
 * - Occlusion culling preparation
 */
export class PerformanceOptimizer {
  constructor(scene) {
    this.scene = scene;

    // Instanced meshes for different object types
    this.instancedMeshes = {};

    // LOD groups
    this.lodGroups = [];

    // Frustum for culling
    this.frustum = new THREE.Frustum();

    // Object tracking for LOD
    this.trackedObjects = new Map();

    // Performance settings
    this.settings = {
      instancingThreshold: 3, // Use InstancedMesh when 3+ similar objects
      lodDistances: [10, 25, 50, 100], // Distance thresholds for LOD levels
      cullingEnabled: true,
      updateFrequency: 30 // Update culling every N frames
    };

    this.frameCount = 0;
  }

  /**
   * Create an InstancedMesh for efficient rendering of similar objects
   * @param {string} key - Identifier for the instanced mesh
   * @param {THREE.Geometry} geometry - Shared geometry
   * @param {THREE.Material} material - Shared material
   * @param {number} maxCount - Maximum number of instances
   * @returns {THREE.InstancedMesh} - The instanced mesh
   */
  createInstancedMesh(key, geometry, material, maxCount = 1000) {
    if (this.instancedMeshes[key]) {
      return this.instancedMeshes[key];
    }

    const instancedMesh = new THREE.InstancedMesh(geometry, material, maxCount);
    instancedMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage); // Update frequently
    instancedMesh.count = 0; // Start with 0 visible instances
    this.scene.add(instancedMesh);

    this.instancedMeshes[key] = {
      mesh: instancedMesh,
      geometry: geometry,
      material: material,
      maxCount: maxCount,
      positionMap: new Map(), // Map instanceId to position data
      tempMatrix: new THREE.Matrix4()
    };

    return instancedMesh;
  }

  /**
   * Add an instance to an InstancedMesh
   * @param {string} key - Key of the InstancedMesh
   * @param {THREE.Vector3} position - Position of the instance
   * @param {THREE.Quaternion} [quaternion] - Rotation (optional)
   * @param {THREE.Vector3} [scale] - Scale (optional, default 1,1,1)
   * @returns {number} - Instance ID
   */
  addInstance(key, position, quaternion = null, scale = null) {
    const instancedData = this.instancedMeshes[key];
    if (!instancedData) {
      console.warn(`InstancedMesh key "${key}" not found`);
      return -1;
    }

    const instanceId = instancedData.count;
    if (instanceId >= instancedData.maxCount) {
      console.warn(`InstancedMesh "${key}" at max capacity (${instancedData.maxCount})`);
      return -1;
    }

    // Set up transformation
    instancedData.tempMatrix.identity();
    instancedData.tempMatrix.makeTranslation(position.x, position.y, position.z);

    if (quaternion) {
      instancedData.tempMatrix.makeRotationFromQuaternion(quaternion);
    }

    if (scale) {
      instancedData.tempMatrix.scale(scale);
    } else {
      instancedData.tempMatrix.scale(new THREE.Vector3(1, 1, 1));
    }

    // Apply the matrix
    instancedData.mesh.setMatrixAt(instanceId, instancedData.tempMatrix);

    // Store position data for LOD/culling
    instancedData.positionMap.set(instanceId, {
      position: position.clone(),
      visible: true
    });

    instancedData.count++;
    instancedData.mesh.instanceMatrix.needsUpdate = true;

    return instanceId;
  }

  /**
   * Update an instance's transformation
   * @param {string} key - Key of the InstancedMesh
   * @param {number} instanceId - ID of the instance to update
   * @param {THREE.Vector3} position - New position
   * @param {THREE.Quaternion} [quaternion] - New rotation
   * @param {THREE.Vector3} [scale] - New scale
   */
  updateInstance(key, instanceId, position, quaternion = null, scale = null) {
    const instancedData = this.instancedMeshes[key];
    if (!instancedData) return;

    const positionData = instancedData.positionMap.get(instanceId);
    if (!positionData) return;

    // Update position
    positionData.position.copy(position);

    // Update transformation matrix
    instancedData.tempMatrix.identity();
    instancedData.tempMatrix.makeTranslation(position.x, position.y, position.z);

    if (quaternion) {
      instancedData.tempMatrix.makeRotationFromQuaternion(quaternion);
    }

    if (scale) {
      instancedData.tempMatrix.scale(scale);
    } else {
      instancedData.tempMatrix.scale(new THREE.Vector3(1, 1, 1));
    }

    instancedData.mesh.setMatrixAt(instanceId, instancedData.tempMatrix);
    instancedData.mesh.instanceMatrix.needsUpdate = true;
  }

  /**
   * Remove an instance (mark as inactive)
   * @param {string} key - Key of the InstancedMesh
   * @param {number} instanceId - ID of the instance to remove
   */
  removeInstance(key, instanceId) {
    const instancedData = this.instancedMeshes[key];
    if (!instancedData) return;

    const positionData = instancedData.positionMap.get(instanceId);
    if (!positionData) return;

    // Mark as invisible by moving it far away (better than removing from count)
    positionData.visible = false;
    positionData.position.set(-10000, -10000, -10000); // Far away

    // Update the matrix
    instancedData.tempMatrix.identity();
    instancedData.tempMatrix.makeTranslation(
      positionData.position.x,
      positionData.position.y,
      positionData.position.z
    );
    instancedData.mesh.setMatrixAt(instanceId, instancedData.tempMatrix);
    instancedData.mesh.instanceMatrix.needsUpdate = true;
  }

  /**
   * Create a LOD group for an object with multiple detail levels
   * @param {THREE.Object3D} object - The base object to create LOD for
   * @returns {THREE.Group} - LOD group container
   */
  createLODGroup(object) {
    const lodGroup = new THREE.Group();
    lodGroup.userData = {
      baseObject: object,
      lodLevels: [],
      currentLevel: 0
    };

    // Add the base object as the highest detail level
    lodGroup.add(object);

    this.lodGroups.push(lodGroup);
    this.scene.add(lodGroup);

    return lodGroup;
  }

  /**
   * Add a LOD level to an existing LOD group
   * @param {THREE.Group} lodGroup - The LOD group to add to
   * @param {THREE.Object3D} object - The LOD object (lower detail)
   * @param {number} distance - Distance at which this LOD becomes active
   */
  addLODLevel(lodGroup, object, distance) {
    if (!lodGroup || !lodGroup.userData) return;

    lodGroup.userData.lodLevels.push({
      object: object,
      distance: distance
    });

    // Sort by distance (closest first)
    lodGroup.userData.lodLevels.sort((a, b) => a.distance - b.distance);

    // Add object to group if not already present
    if (!lodGroup.children.includes(object)) {
      lodGroup.add(object);
    }
  }

  /**
   * Update LOD levels based on camera distance
   * @param {THREE.Vector3} cameraPosition - Current camera position
   */
  updateLODs(cameraPosition) {
    if (!cameraPosition) return;

    this.lodGroups.forEach(lodGroup => {
      const lodData = lodGroup.userData;
      if (!lodData) return;

      // Calculate distance to base object
      const baseObject = lodData.baseObject;
      if (!baseObject.parent) return; // Not in scene

      const worldPos = new THREE.Vector3();
      baseObject.getWorldPosition(worldPos);
      const distance = cameraPosition.distanceTo(worldPos);

      // Find appropriate LOD level
      let targetLevel = 0; // 0 is highest detail (base object)

      for (let i = 0; i < lodData.lodLevels.length; i++) {
        const lodLevel = lodData.lodLevels[i];
        if (distance > lodLevel.distance) {
          targetLevel = i + 1;
        } else {
          break;
        }
      }

      // Only update if level changed
      if (targetLevel !== lodData.currentLevel) {
        lodData.currentLevel = targetLevel;

        // Hide all children first
        lodGroup.children.forEach(child => {
          child.visible = false;
        });

        // Show only the selected LOD level
        if (targetLevel === 0) {
          // Show base object
          baseObject.visible = true;
        } else if (lodData.lodLevels[targetLevel - 1]) {
          // Show the LOD object
          const lodObject = lodData.lodLevels[targetLevel - 1].object;
          lodObject.visible = true;
        }
      }
    });
  }

  /**
   * Update frustum for culling
   * @param {THREE.Camera} camera - The camera to extract frustum from
   */
  updateFrustum(camera) {
    if (!camera) return;

    // Update frustum from camera
    const projectionMatrix = camera.projectionMatrix;
    const modelViewMatrix = camera.matrixWorldInverse;
    this.frustum.setFromProjectionMatrix(
      new THREE.Matrix4().multiplyMatrices(projectionMatrix, modelViewMatrix)
    );
  }

  /**
   * Check if a bounding sphere is visible in the frustum
   * @param {THREE.Vector3} position - Position of the object
   * @param {number} radius - Bounding sphere radius
   * @returns {boolean} - True if visible
   */
  isVisibleInFrustum(position, radius) {
    if (!this.settings.cullingEnabled) return true;

    return this.frustum.intersectsSphere(new THREE.Sphere(position, radius));
  }

  /**
   * Batch update InstancedMesh visibility based on frustum culling
   * Should be called every few frames for performance
   */
  updateInstancedMeshCulling(cameraPosition) {
    if (!this.settings.cullingEnabled) return;

    this.frameCount++;
    if (this.frameCount % this.settings.updateFrequency !== 0) {
      return;
    }

    // Update frustum
    // Note: In a real implementation, we'd need access to the camera
    // For now, we'll skip frustum culling for instanced meshes
    // and rely on distance-based LOD instead

    // Update visibility based on distance for each InstancedMesh
    Object.keys(this.instancedMeshes).forEach(key => {
      const instancedData = this.instancedMeshes[key];
      if (!instancedData) return;

      instancedData.positionMap.forEach((posData, instanceId) => {
        if (!posData.visible) return; // Already marked as removed

        const distance = cameraPosition
          ? cameraPosition.distanceTo(posData.position)
          : 0;

        // Simple distance culling (could be enhanced with frustum)
        const maxViewDistance = 150; // Configurable
        const shouldBeVisible = distance < maxViewDistance;

        if (shouldBeVisible !== posData.visible) {
          posData.visible = shouldBeVisible;

          if (shouldBeVisible) {
            // Restore position
            instancedData.tempMatrix.identity();
            instancedData.tempMatrix.makeTranslation(
              posData.position.x,
              posData.position.y,
              posData.position.z
            );
          } else {
            // Hide by moving far away
            instancedData.tempMatrix.identity();
            instancedData.tempMatrix.makeTranslation(-10000, -10000, -10000);
          }

          instancedData.mesh.setMatrixAt(instanceId, instancedData.tempMatrix);
        }
      });

      instancedData.mesh.instanceMatrix.needsUpdate = true;
    });
  }

  /**
   * Create optimized street furniture using InstancedMesh
   * @param {THREE.Scene} scene - The scene to add to
   * @param {Function} createObjectFunc - Function that creates a single object
   * @param {Array} positions - Array of positions for the objects
   * @returns {THREE.InstancedMesh} - The optimized instanced mesh
   */
  createOptimizedStreetFurniture(scene, createObjectFunc, positions) {
    if (positions.length < this.settings.instancingThreshold) {
      // Not enough instances to benefit from instancing
      positions.forEach(pos => {
        const obj = createObjectFunc(pos);
        scene.add(obj);
      });
      return null;
    }

    // Create a prototype object to get geometry and material
    const prototype = createObjectFunc({ x: 0, y: 0, z: 0 });
    prototype.updateMatrixWorld(); // Ensure world matrix is updated

    // Extract geometry and material (simplified - in practice you'd need to traverse the object)
    // For this example, we'll assume simple meshes
    const geometry = prototype.geometry || new THREE.BoxGeometry(1, 1, 1);
    const material = prototype.material || new THREE.MeshStandardMaterial({ color: 0xffffff });

    // Create instanced mesh
    const key = `street_furniture_${Date.now()}`;
    const instancedMesh = this.createInstancedMesh(key, geometry, material, positions.length);

    // Add all instances
    positions.forEach((pos, index) => {
      this.addInstance(key,
        new THREE.Vector3(pos.x, pos.y, pos.z),
        undefined, // quaternion
        undefined  // scale
      );
    });

    // Clean up prototype
    if (prototype.parent) {
      prototype.parent.remove(prototype);
    }

    return instancedMesh;
  }

  /**
   * Create optimized vegetation using InstancedMesh
   * Works well for trees, bushes, etc.
   * @param {THREE.Scene} scene - The scene to add to
   * @param {Function} createTreeFunc - Function that creates a single tree
   * @param {Array} treeData - Array of {position, type, scale} objects
   * @returns {Object} - Contains InstancedMesh instances by type
   */
  createOptimizedVegetation(scene, createTreeFunc, treeData) {
    // Group by tree type for instancing
    const groupedData = {};
    treeData.forEach(data => {
      const type = data.type || 'default';
      if (!groupedData[type]) {
        groupedData[type] = [];
      }
      groupedData[type].push(data);
    });

    const results = {};

    // Create instanced mesh for each type
    Object.keys(groupedData).forEach(type => {
      const items = groupedData[type];

      if (items.length < this.settings.instancingThreshold) {
        // Render individually
        items.forEach(item => {
          const tree = createTreeFunc(item);
          scene.add(tree);
        });
        results[type] = null;
        return;
      }

      // Create prototype
      const prototype = createTreeFunc(items[0]);
      prototype.updateMatrixWorld();

      const geometry = prototype.geometry || new THREE.ConeGeometry(1, 2, 4);
      const material = prototype.material || new THREE.MeshStandardMaterial({ color: 0x228b22 });

      // Create instanced mesh
      const key = `vegetation_${type}_${Date.now()}`;
      const instancedMesh = this.createInstancedMesh(key, geometry, material, items.length);

      // Add instances
      items.forEach((item, index) => {
        const scale = item.scale || 1;
        this.addInstance(key,
          new THREE.Vector3(item.position.x, item.position.y, item.position.z),
          undefined, // quaternion
          new THREE.Vector3(scale, scale, scale)
        );
      });

      results[type] = instancedMesh;

      // Clean up prototype
      if (prototype.parent) {
        prototype.parent.remove(prototype);
      }
    });

    return results;
  }
}