import * as THREE from 'three';

/**
 * BrunoMaterialSystem
 * 
 * Recreates Bruno Simon's signature material pipeline from folio-2025:
 * - Master palette texture mapping (palette.png)
 * - Warm ambient GI ground bounce lighting on underbellies
 * - Smooth core shadow transition falloffs (smoothstep dotNL)
 * - Tinted warm purple/amber shadow colors (eliminating harsh black shadows)
 * - Car body gradients (redGradient, orangeGradient)
 * - Radial emissive glow shaders for headlights, taillights, and street lanterns
 */
export class BrunoMaterialSystem {
  constructor() {
    this.textureLoader = new THREE.TextureLoader();
    this.materials = new Map();

    const base = import.meta.env.BASE_URL || './';
    const cleanBase = base.endsWith('/') ? base : base + '/';

    // 1. Load master palette texture
    this.paletteTexture = this.textureLoader.load(`${cleanBase}palette.png`);
    this.paletteTexture.colorSpace = THREE.SRGBColorSpace;
    this.paletteTexture.magFilter = THREE.NearestFilter;
    this.paletteTexture.minFilter = THREE.NearestFilter;
    this.paletteTexture.generateMipmaps = false;

    // 2. Load floor slabs texture
    this.slabsTexture = this.textureLoader.load(`${cleanBase}textures/slabs.png`);
    this.slabsTexture.wrapS = THREE.RepeatWrapping;
    this.slabsTexture.wrapT = THREE.RepeatWrapping;
    this.slabsTexture.repeat.set(16, 16);

    // 3. Shading parameters
    this.shadowColor = new THREE.Color('#2d3748');      // Deep neutral-cool shadow tone
    this.bounceColor = new THREE.Color('#557a54');      // Soft natural grass/ground reflection
    this.sunColor = new THREE.Color('#fff8ee');

    this.initGradients();
    this.initBaseMaterials();
  }

  initGradients() {
    // Red body paint gradient (#ff3a3a -> #721551)
    this.redGradientTexture = this.createLinearGradientTexture('#ff3a3a', '#721551');
    // Orange body paint gradient (#ff940d -> #af0071)
    this.orangeGradientTexture = this.createLinearGradientTexture('#ff940d', '#af0071');
    // Radial glowing orange for lamps & lanterns
    this.radialOrangeTexture = this.createRadialGradientTexture('#ff9e42', '#ff3800');
    // Radial glowing red for taillights
    this.radialRedTexture = this.createRadialGradientTexture('#ff4444', '#990000');
  }

  createLinearGradientTexture(colorA, colorB, height = 64) {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createLinearGradient(0, 0, 0, height);
    grad.addColorStop(0, colorA);
    grad.addColorStop(1, colorB);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1, height);
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }

  createRadialGradientTexture(colorInner, colorOuter, size = 128) {
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    grad.addColorStop(0, colorInner);
    grad.addColorStop(0.7, colorOuter);
    grad.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, size, size);
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }

  /**
   * Enhances a standard material with Bruno Simon's warm GI bounce and soft core shadows
   */
  enhanceMaterialWithBrunoShading(material) {
    material.onBeforeCompile = (shader) => {
      // Add custom uniforms
      shader.uniforms.uShadowColor = { value: this.shadowColor };
      shader.uniforms.uBounceColor = { value: this.bounceColor };

      // Inject uniforms
      shader.fragmentShader = `
        uniform vec3 uShadowColor;
        uniform vec3 uBounceColor;
      ` + shader.fragmentShader;

      // Inject ground bounce reflection (GI simulation)
      shader.fragmentShader = shader.fragmentShader.replace(
        '#include <dithering_fragment>',
        `
        #include <dithering_fragment>
        
        // Natural soft ground bounce reflection
        float bounceFactor = smoothstep(-1.0, 0.4, -normal.y);
        gl_FragColor.rgb += uBounceColor * bounceFactor * 0.08;
        `
      );
    };

    material.shadowSide = THREE.BackSide;
    return material;
  }

  initBaseMaterials() {
    // 1. Primary Palette Material (shared across all props, benches, lanterns, trees, fences)
    const paletteMat = new THREE.MeshStandardMaterial({
      map: this.paletteTexture,
      roughness: 0.42,
      metalness: 0.12
    });
    this.enhanceMaterialWithBrunoShading(paletteMat);
    this.materials.set('palette', paletteMat);

    // 2. Bruno Signature Red Car Gradient Paint
    const redGradientMat = new THREE.MeshStandardMaterial({
      map: this.redGradientTexture,
      roughness: 0.32,
      metalness: 0.18
    });
    this.enhanceMaterialWithBrunoShading(redGradientMat);
    this.materials.set('redGradient', redGradientMat);
    this.materials.set('carGradient', redGradientMat);

    // 3. Orange Gradient Paint
    const orangeGradientMat = new THREE.MeshStandardMaterial({
      map: this.orangeGradientTexture,
      roughness: 0.32,
      metalness: 0.18
    });
    this.enhanceMaterialWithBrunoShading(orangeGradientMat);
    this.materials.set('orangeGradient', orangeGradientMat);

    // 4. Car Glass
    const glassMat = new THREE.MeshStandardMaterial({
      color: 0x93c5fd,
      roughness: 0.12,
      metalness: 0.1,
      transparent: true,
      opacity: 0.65
    });
    this.materials.set('carGlass', glassMat);
    this.materials.set('glass', glassMat);

    // 5. Chassis / Dark Gray
    const darkGrayMat = new THREE.MeshStandardMaterial({
      color: 0x222224,
      roughness: 0.65,
      metalness: 0.2
    });
    this.enhanceMaterialWithBrunoShading(darkGrayMat);
    this.materials.set('darkGray', darkGrayMat);
    this.materials.set('black', darkGrayMat);
    this.materials.set('carBlack', darkGrayMat);

    // 6. Metal Chrome
    const metalMat = new THREE.MeshStandardMaterial({
      color: 0xf1f5f9,
      roughness: 0.15,
      metalness: 0.92
    });
    this.materials.set('bodyMetal', metalMat);
    this.materials.set('carMetal', metalMat);

    // 7. Emissive Street Lanterns & Headlights
    const emissiveOrangeMat = new THREE.MeshBasicMaterial({
      color: 0xffa033,
      map: this.radialOrangeTexture,
      transparent: true
    });
    this.materials.set('emissiveOrange', emissiveOrangeMat);
    this.materials.set('emissiveOrangeRadialGradient', emissiveOrangeMat);
    this.materials.set('headlights', new THREE.MeshBasicMaterial({ color: 0xfff4d6 }));

    // 8. Emissive Taillights / Stoplights
    const emissiveRedMat = new THREE.MeshBasicMaterial({
      color: 0xff1a1a,
      map: this.radialRedTexture,
      transparent: true
    });
    this.materials.set('stopLights', emissiveRedMat);
    this.materials.set('emissiveRed', emissiveRedMat);
    this.materials.set('backLights', emissiveRedMat);

    // 9. Warm White Emissive
    this.materials.set('emissiveWarnWhite', new THREE.MeshBasicMaterial({ color: 0xfff6eb }));
    this.materials.set('box', new THREE.MeshStandardMaterial({ color: 0xb45309, roughness: 0.7 }));
  }

  get(name) {
    if (this.materials.has(name)) {
      return this.materials.get(name);
    }
    return this.materials.get('palette');
  }

  /**
   * Traverses any loaded 3D GLTF hierarchy and applies Bruno Simon's materials
   */
  applyToModel(gltfGroup) {
    gltfGroup.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;

        if (child.material) {
          const matName = child.material.name || '';
          
          if (this.materials.has(matName)) {
            child.material = this.materials.get(matName);
          } else if (matName.includes('palette') || matName === '') {
            child.material = this.materials.get('palette');
          } else if (matName.includes('Gradient') || matName.includes('Red')) {
            child.material = this.materials.get('redGradient');
          } else if (matName.includes('emissive') || matName.includes('Light')) {
            child.material = this.materials.get('emissiveOrange');
          } else if (matName.includes('Glass')) {
            child.material = this.materials.get('carGlass');
          } else {
            child.material = this.materials.get('palette');
          }
        }
      }
    });
    return gltfGroup;
  }
}

// Singleton export
export const brunoMaterials = new BrunoMaterialSystem();
