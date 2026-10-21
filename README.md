<p align="center">
  <img src="https://img.shields.io/badge/🇮🇳_Courier_City-Survey_of_India_3D_Simulator-ff9933?style=for-the-badge&labelColor=138808" alt="Courier City" />
</p>

<h1 align="center">🏙️ Courier City — 3D Open World Transit Simulator</h1>
<h3 align="center">✨ Created & Maintained by Shubhransh Gupta ✨</h3>

<p align="center">
  <b>A cel-shaded 3D browser game rendering eight iconic Indian cities as miniature spherical diorama worlds.</b>
  <br/>
  Walk on foot, drive an Auto Rickshaw, Roadster, Bullet 350, or Volvo City Bus — explore living streets, equatorial railways, and authentic regional culture directly in your browser.
</p>

<p align="center">
  <a href="https://shubhransh-gupta.is-a.bot/"><img src="https://img.shields.io/badge/▶_PLAY_LIVE-shubhransh--gupta.is--a.bot-22c55e?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Play Live" /></a>
  <a href="https://shubhransh-gupta.github.io/courier-city/"><img src="https://img.shields.io/badge/▶_MIRROR-GitHub_Pages-3b82f6?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Pages Mirror" /></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Three.js-r174-black?style=flat-square&logo=three.js&logoColor=white" alt="Three.js" />
  <img src="https://img.shields.io/badge/Vite-6.4-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/WebGL-Cel--Shaded-red?style=flat-square&logo=webgl&logoColor=white" alt="WebGL" />
  <img src="https://img.shields.io/badge/JavaScript-ES_Modules-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Survey_of_India-Geodetic_Map-059669?style=flat-square" alt="Survey of India" />
  <img src="https://img.shields.io/badge/License-MIT-blue?style=flat-square" alt="MIT License" />
</p>

---

## 🎮 What is Courier City?

**Courier City** is an interactive, browser-native 3D open-world transit simulation celebrating the pulse, architecture, and streets of India. Built entirely with WebGL and Three.js with zero heavy downloads, each city is rendered as a warm, cel-shaded cylindrical world wrapped on an equatorial transit axis.

Select any city from the interactive **Survey of India** national boundary map, zoom in, and step down onto the pavement alongside thousands of animated pedestrians, bustling street vendors, local buses, and trains.

---

## ✨ Key Features

### 🇮🇳 1. Interactive Survey of India Map
- Handcrafted vector map adhering strictly to official Survey of India cartographic boundaries.
- Live pulsating green status pins for all active cities with instant fly-in planetary reveal transitions.
- Fully responsive on desktop and mobile browsers.

### 🏙️ 2. Eight Rich Indian Diorama Cities
| City | Regional Transit Line | Signature Landscapes & Landmarks |
|------|------------------------|----------------------------------|
| 🌊 **Mumbai** | Western Railway Suburban Line | Churchgate, Marine Drive, Chawls, Grand Road, Dadar, Arabian Sea |
| 🌳 **Bengaluru** | Namma Metro Purple Line | Vidhana Soudha, Cubbon Park, MG Road, Indiranagar, BMTC Volvo Buses |
| 🏛️ **Delhi** | Yellow Line Metro | Old Delhi, Chandni Chowk, Red Fort, Delhi Junction, Jama Masjid |
| 👑 **Lucknow** | Lucknow Metro & Gomti Riverfront | Rumi Darwaza, Hazratganj Heritage Colonnades, Charbagh Junction, Gomti Riverfront, Chowk & Aminabad |
| 🚋 **Kolkata** | Heritage Calcutta Tramway | Howrah Bridge, BBD Bag, Park Street, Victoria Memorial, Hooghly River |
| 🏖️ **Chennai** | MRTS Elevated Coastal Railway | Marina Beach, Chepauk, Thirumylai, Chintadripet, Bay of Bengal |
| 🕌 **Hyderabad** | MMTS Transit & Lake Ring | Charminar, Hussain Sagar Lake, Khairatabad, Buddha Statue |
| 🛕 **Ahmedabad** | Sabarmati Riverfront Transit | Sabarmati Riverfront, Kalupur Heritage Station, Historic Pols |

### 🛺 3. Authentic Auto Rickshaw Cockpit Ride & Driving System
- <kbd>V</kbd> summons/dismisses the 3D Auto Rickshaw right in front of you across **all 8 cities**.
- Approaching the auto prompts `<b>E</b> · Get in the auto`. Pressing <kbd>E</kbd> seats you directly into the 3D cockpit, locking in the authentic driver camera.
- Drive freely across the planetary ring roads using <kbd>W</kbd> (throttle), <kbd>S</kbd> (reverse/brake), <kbd>A</kbd>/<kbd>D</kbd> (steer with realistic chassis roll and yaw inertia), and <kbd>Space</kbd> / <kbd>H</kbd> (horn).
- Press <kbd>E</kbd> at any time to step out onto the pavement and resume walking on foot.

### 🩸 4. Pedestrian Collision & Stylized Blood VFX
- **Oriented Bounding Box Collision**: Vehicles feature dynamic forward-reach bumper colliders (up to 5.6m reach on the Volvo Bus).
- **Stylized Blood Bursts**: Striking a pedestrian triggers an explosive 24-droplet cel-shaded crimson particle arc with gravity physics.
- **Ground Splatter Decals**: Ground blood splats stain the road for ~5.5 seconds before fading smoothly.
- **Stagger & Clothing Flash**: Struck NPCs receive physical knockback impulses and their clothes flash crimson for visual impact confirmation.
- **Traffic Collision Mechanics**: Stepping in front of an ambient traffic bus or car triggers traffic impact alerts, blood effects, and player knockback.

### 🌅 5. Atmosphere, Time of Day & Weather
- **Dynamic Lighting (<kbd>T</kbd>)**: Cycle between bright afternoon sunlight, warm golden hour dusk, and deep starry night with glowing windows.
- **Monsoon Rain (<kbd>K</kbd>)**: Toggle realistic vertical rainfall with wet road reflections and audio downpours.
- **Ambient City Life**: Regional street vendor signs in authentic local scripts (Devanagari, Kannada, Bengali, Tamil, Telugu, Gujarati) with procedural dialogue translation popups.

---

## 🕹️ Controls Guide

| Key | Action |
|-----|--------|
| <kbd>W</kbd> <kbd>A</kbd> <kbd>S</kbd> <kbd>D</kbd> / <kbd>↑</kbd> <kbd>←</kbd> <kbd>↓</kbd> <kbd>→</kbd> | Walk / Steer & Throttle Vehicle |
| <kbd>Shift</kbd> | Sprint on foot |
| <kbd>V</kbd> | Summon / Dismiss Auto Rickshaw |
| <kbd>E</kbd> | Get In/Out of Auto · Interact with Stalls · Talk to Locals |
| <kbd>H</kbd> / <kbd>Space</kbd> | Sound Horn |
| <kbd>L</kbd> | Wander mode (Automated cinematic walk around the city) |
| <kbd>T</kbd> | Cycle Time of Day (Day ➔ Sunset ➔ Night) |
| <kbd>K</kbd> | Toggle Monsoon Rain on/off |
| <kbd>P</kbd> | Planet orbit view (Zoom out to planetary globe) |
| <kbd>M</kbd> | Toggle Sound on/off |
| <kbd>H</kbd> | Toggle HUD display on/off |
| <kbd>Esc</kbd> | Pause Menu & City Selector |
| Mouse Drag | Look around / Pan camera angle |
| Scroll Wheel | Zoom camera in / out |

---

## 🛠️ Tech Stack & Architecture

- **Rendering Engine**: [Three.js](https://threejs.org/) (WebGL / GLSL custom shaders)
- **Bundler & Build Tool**: [Vite](https://vitejs.dev/)
- **Coordinate System**: Torus/cylindrical world coordinates wrapped on equatorial transit lines
- **Particle System**: Procedural instanced Box & Circle geometries with gravity integration
- **Styling**: Warm retro Indian postal paper & ink aesthetic (`#efe6d6`, `#231a26`)
- **Typography**: Yatra One, Rozha One, Baloo 2, Mukta, and Noto regional Indic typefaces

---

## 🚀 Getting Started

### Play Online Directly
Access the latest deployment on any browser:
👉 **[https://shubhransh-gupta.is-a.bot/](https://shubhransh-gupta.is-a.bot/)**

### Run Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/shubhransh-gupta/courier-city.git
   cd courier-city
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start local development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Build for production**:
   ```bash
   npm run build
   npm run preview
   ```

---

## 📁 Project Structure

```
courier-city/
├── index.html                     # Entry point & HUD overlay
├── vite.config.js                 # Rollup chunking & asset optimization
├── package.json                   # Scripts & dependencies
├── src/
│   ├── ui/
│   │   ├── india-map.js           # Survey of India SVG interactive map & city pins
│   │   ├── india-svg-path.js      # Official boundary vectors
│   │   └── india-map.css          # Cel-shaded paper map theme
│   └── game/
│       ├── vehicle-impact-system.js # 3D vehicles, collision detection & blood particle VFX
│       └── vehicle-impact.css      # Screen flash vignette, dock UI & impact popups
├── assets/                        # City diorama chunks, textures, sounds & fonts
└── dist/                          # Production distribution bundle
```

---

## 🤝 Contributing to Courier City

We welcome contributions from developers, 3D artists, game designers, and transit enthusiasts of all skill levels! Whether you want to fix a bug, add a new city, or build new vehicles, your contributions make Courier City better for everyone.

### 🌟 Great Ideas to Work On (Good First Issues)
- 🏙️ **Add New Cities**: Bring your hometown to life! Model iconic landmarks and transit routes for Jaipur, Pune, Varanasi, Chandigarh, or Kochi.
- 🛺 **New Vehicles**: Implement drivable bicycles, electric e-rickshaws, classic Luna mopeds, or double-decker buses.
- 🎵 **Regional Audio & Playlists**: Add authentic ambient street sounds, railway announcement chimes, or classic city tunes.
- 🌦️ **Atmospheric & Weather FX**: Custom monsoons, morning river mist, dust storms, or festival lantern lighting.
- 📱 **Mobile & Gamepad Controls**: Enhance touch joystick responsiveness or add Web Gamepad API support.

### 🛠️ Contribution Workflow
1. **Fork the Repository** on GitHub.
2. **Create a Feature Branch**:
   ```bash
   git checkout -b feat/your-feature-name
   ```
3. **Make Your Changes & Test Locally**:
   ```bash
   npm run dev
   ```
4. **Build & Verify Production Bundle**:
   ```bash
   npm run build
   ```
5. **Commit & Push**:
   ```bash
   git commit -m "feat: add your awesome feature"
   git push origin feat/your-feature-name
   ```
6. **Open a Pull Request** with a description of your changes and screenshots!

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  <b>Courier City</b> — Created with ❤️ by <b>Shubhransh Gupta</b>
  <br/>
  <sub>Eight Indian cities as living 3D worlds in the browser.</sub>
</p>
