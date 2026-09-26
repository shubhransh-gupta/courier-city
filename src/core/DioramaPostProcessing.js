import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

/**
 * DioramaPostProcessing
 * 
 * Recreates Bruno Simon's signature tilt-shift depth-of-field (cheapDOF)
 * and subtle bloom to achieve the iconic toy diorama miniature look.
 */
export class DioramaPostProcessing {
  constructor(renderer, scene, camera) {
    this.renderer = renderer;
    this.scene = scene;
    this.camera = camera;
    this.enabled = true;

    this.initComposer();
  }

  initComposer() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // 1. Effect Composer
    this.composer = new EffectComposer(this.renderer);
    this.composer.setSize(width, height);

    // 2. Base Render Pass
    this.renderPass = new RenderPass(this.scene, this.camera);
    this.composer.addPass(this.renderPass);

    // 3. Subtle Bloom Pass (for lights, car headlights, and emissive lanterns)
    this.bloomPass = new UnrealBloomPass(
      new THREE.Vector2(width, height),
      0.18,  // Strength (subtle, non-blinding)
      0.4,   // Radius
      0.88   // Threshold
    );
    this.composer.addPass(this.bloomPass);

    // 4. Tilt-Shift Miniature Depth-of-Field Shader Pass (cheapDOF)
    const TiltShiftShader = {
      uniforms: {
        tDiffuse: { value: null },
        uResolution: { value: new THREE.Vector2(width, height) },
        uStart: { value: 0.16 },    // Distance from center Y before blur starts
        uEnd: { value: 0.48 },      // Full blur at screen edges
        uAmount: { value: 0.0032 }  // Blur strength
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D tDiffuse;
        uniform vec2 uResolution;
        uniform float uStart;
        uniform float uEnd;
        uniform float uAmount;
        varying vec2 vUv;

        void main() {
          float distFromCenter = abs(vUv.y - 0.5);
          float blurStrength = smoothstep(uStart, uEnd, distFromCenter);

          if (blurStrength < 0.005) {
            gl_FragColor = texture2D(tDiffuse, vUv);
            return;
          }

          vec4 color = vec4(0.0);
          float total = 0.0;
          float spread = blurStrength * uAmount;
          float aspect = uResolution.x / uResolution.y;

          // 9-tap disc blur kernel
          vec2 offsets[9];
          offsets[0] = vec2(0.0, 0.0);
          offsets[1] = vec2(-0.7, -0.7);
          offsets[2] = vec2(0.7, -0.7);
          offsets[3] = vec2(-0.7, 0.7);
          offsets[4] = vec2(0.7, 0.7);
          offsets[5] = vec2(0.0, -1.0);
          offsets[6] = vec2(0.0, 1.0);
          offsets[7] = vec2(-1.0, 0.0);
          offsets[8] = vec2(1.0, 0.0);

          for (int i = 0; i < 9; i++) {
            vec2 sampleUv = vUv + vec2(offsets[i].x / aspect, offsets[i].y) * spread;
            color += texture2D(tDiffuse, sampleUv);
            total += 1.0;
          }

          vec4 blurred = color / total;
          gl_FragColor = mix(texture2D(tDiffuse, vUv), blurred, blurStrength);
        }
      `
    };

    this.dofPass = new ShaderPass(TiltShiftShader);
    this.composer.addPass(this.dofPass);
  }

  setSize(width, height) {
    if (this.composer) {
      this.composer.setSize(width, height);
      if (this.dofPass && this.dofPass.uniforms.uResolution) {
        this.dofPass.uniforms.uResolution.value.set(width, height);
      }
      if (this.bloomPass) {
        this.bloomPass.resolution.set(width, height);
      }
    }
  }

  render() {
    if (this.enabled && this.composer) {
      this.composer.render();
    } else {
      this.renderer.render(this.scene, this.camera);
    }
  }
}
