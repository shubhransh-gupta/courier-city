import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { GTAOPass } from 'three/examples/jsm/postprocessing/GTAOPass.js';

/**
 * PhotorealisticPostProcessing
 *
 * Implements high-fidelity post-processing for photorealistic open-world visuals:
 * - Screen Space Ambient Occlusion (SSAO/GTAO) for grounding objects
 * - ACESFilmic Tone Mapping with calibrated exposure
 * - Subtle Bloom for neon signs, headlights, streetlamps
 * - Exponential Fog for atmospheric depth and volumetric lighting
 * - Tone mapping and color grading for realistic color response
 */
export class PhotorealisticPostProcessing {
  constructor(renderer, scene, camera) {
    this.renderer = renderer;
    this.scene = scene;
    this.camera = camera;
    this.enabled = true;

    // Bengaluru-specific lighting parameters (tropical latitude ~12.97°N)
    this.sunPosition = new THREE.Vector3(0.5, 0.8, 0.3); // Directional sunlight
    this.fogDensity = 0.0008; // Warm haze for Bengaluru afternoon
    this.fogColor = new THREE.Color(0xf0e6d2); // Warm sandy haze
    this.exposure = 0.85; // Calibrated for realistic daylight
    this.bloomStrength = 0.15; // Subtle bloom for emissive lights
    this.ssaoRadius = 8; // SSAO radius in pixels
    this.ssaoIntensity = 0.8; // SSAO intensity
    this.ssaoMinDistance = 0.005; // Minimum distance for SSAO
    this.ssaoMaxDistance = 0.1; // Maximum distance for SSAO

    this.initComposer();
    this.initFog();
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

    // 3. Screen Space Ambient Occlusion (SSAO/GTAO) - grounds buildings, curbs, vehicles
    this.ssaoPass = new GTAOPass(
      this.scene,
      this.camera,
      width,
      height,
      {
        radius: this.ssaoRadius,
        intensity: this.ssaoIntensity,
        minDistance: this.ssaoMinDistance,
        maxDistance: this.ssaoMaxDistance
      }
    );
    this.ssaoPass.renderToScreen = false;
    this.composer.addPass(this.ssaoPass);

    // 4. Subtle Bloom Pass - for neon signboards, vehicle headlights, streetlamps
    this.bloomPass = new UnrealBloomPass(
      new THREE.Vector2(width, height),
      this.bloomStrength,  // Strength (subtle, non-blinding)
      0.8,   // Radius
      0.3    // Threshold
    );
    this.composer.addPass(this.bloomPass);

    // 5. Color Grading and Tonemapping Pass
    const ColorGradingShader = {
      uniforms: {
        tDiffuse: { value: null },
        exposure: { value: this.exposure },
        fogDensity: { value: this.fogDensity },
        fogColor: { value: this.fogColor }
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
        uniform float exposure;
        uniform float fogDensity;
        uniform vec3 fogColor;
        varying vec2 vUv;

        // ACESFilmic tone mapping approximation
        vec3 ACESFilm(vec3 x) {
          const float a = 2.51;
          const float b = 0.03;
          const float c = 2.43;
          const float d = 0.59;
          const float e = 0.14;
          return clamp((x*(a*x+b))/(x*(c*x+d)+e), 0.0, 1.0);
        }

        void main() {
          vec4 color = texture2D(tDiffuse, vUv);
          vec3 aces = ACESFilm(color.rgb * exposure);

          // Add exponential fog for atmospheric depth
          float fogFactor = 1.0 - exp(-fogDensity * gl_FragCoord.z * 0.0001);
          vec3 fogged = mix(aces, fogColor, fogFactor);

          gl_FragColor = vec4(fogged, color.a);
        }
      `
    };

    this.colorGradingPass = new ShaderPass(ColorGradingShader);
    this.composer.addPass(this.colorGradingPass);
  }

  initFog() {
    // Set exponential fog on the scene for atmospheric depth
    this.scene.fog = new THREE.FogExp2(this.fogColor, this.fogDensity);
  }

  setSize(width, height) {
    if (this.composer) {
      this.composer.setSize(width, height);
      if (this.ssaoPass) {
        this.ssaoPass.setSize(width, height);
      }
      if (this.bloomPass) {
        this.bloomPass.setSize(width, height);
      }
      if (this.colorGradingPass && this.colorGradingPass.material) {
        this.colorGradingPass.material.uniforms.tDiffuse.value = null;
      }
    }
  }

  // Update Bengaluru-specific lighting parameters based on time of day
  updateTimeOfDay(hours) {
    // Convert hours (0-24) to sun position for 12.97°N latitude
    // Simplified: sun rises in east, sets in west, peaks at solar noon
    const solarNoon = 12.0; // Solar noon in Bangalore
    const hourAngle = (hours - solarNoon) * 0.2618; // Convert to radians (15° per hour)

    // Sun elevation angle (simplified for tropical latitude)
    const elevation = Math.max(0, Math.sin(hourAngle) * 0.8 + 0.3);
    const azimuth = Math.PI * 0.5 - hourAngle; // East to west movement

    this.sunPosition.set(
      Math.cos(azimuth) * Math.cos(elevation),
      Math.sin(elevation),
      Math.sin(azimuth) * Math.cos(elevation)
    );

    // Adjust exposure and fog based on time of day
    if (hours >= 6 && hours <= 18) { // Daytime
      this.exposure = THREE.MathUtils.lerp(0.7, 1.0, (hours - 6) / 12);
      this.fogDensity = THREE.MathUtils.lerp(0.0012, 0.0006, (hours - 6) / 12);
      this.fogColor.setRGB(
        THREE.MathUtils.lerp(0.9, 0.94, (hours - 6) / 12),
        THREE.MathUtils.lerp(0.85, 0.9, (hours - 6) / 12),
        THREE.MathUtils.lerp(0.75, 0.82, (hours - 6) / 12)
      );
    } else { // Nighttime - amber street lighting
      this.exposure = 0.4 + 0.3 * Math.sin((hours - 18) * 0.2618); // Pulsing for street lights
      this.fogDensity = 0.0010;
      this.fogColor.setRGB(0.85, 0.65, 0.4); // Warm amber haze
    }

    // Update shader uniforms
    if (this.colorGradingPass && this.colorGradingPass.material) {
      this.colorGradingPass.material.uniforms.exposure.value = this.exposure;
      this.colorGradingPass.material.uniforms.fogDensity.value = this.fogDensity;
      this.colorGradingPass.material.uniforms.fogColor.value = this.fogColor;
    }
  }

  render() {
    if (this.enabled && this.composer) {
      this.composer.render();
    } else {
      this.renderer.render(this.scene, this.camera);
    }
  }

  // Method to toggle post-processing effects on/off for performance testing
  setEnabled(enabled) {
    this.enabled = enabled;
  }
}