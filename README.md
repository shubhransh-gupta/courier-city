<p align="center">
  <img src="https://img.shields.io/badge/🎮_Courier_City-Open_World_Game-ff4757?style=for-the-badge&labelColor=1a1a2e" alt="Courier City" />
</p>

<h1 align="center">🏙️ Courier City — Browser-Based Open World Game</h1>
<h3 align="center">✨ Presented by Shubhransh Gupta ✨</h3>

<p align="center">
  <b>A GTA-inspired 3D open world city game built entirely in the browser with Three.js and Cannon-ES physics.</b>
  <br/>
  Walk, drive, fly airplanes & helicopters — explore iconic landmarks from India and the world!
</p>

<p align="center">
  <a href="https://shubhransh-gupta.github.io/courier-city/"><img src="https://img.shields.io/badge/▶_PLAY_NOW-GitHub_Pages-22c55e?style=for-the-badge&logo=github&logoColor=white" alt="Play Now" /></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Three.js-000000?style=flat-square&logo=three.js&logoColor=white" alt="Three.js" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Cannon--ES-Physics-orange?style=flat-square" alt="Cannon-ES" />
  <img src="https://img.shields.io/badge/License-MIT-blue?style=flat-square" alt="MIT License" />
  <img src="https://img.shields.io/github/stars/shubhransh-gupta/courier-city?style=flat-square" alt="Stars" />
  <img src="https://img.shields.io/github/forks/shubhransh-gupta/courier-city?style=flat-square" alt="Forks" />
</p>

---

## 🎮 What is Courier City?

Courier City is a **fully browser-based, open-world 3D city exploration game** — no downloads, no installs. Just open and play.

Inspired by GTA, built with modern web technologies, and featuring real-world landmarks from **Bangalore, India** and across the globe.

### ✨ Key Features

| Feature | Description |
|---------|-------------|
| 🏃 **On-Foot Exploration** | Walk, run, sprint & jump through a massive open world |
| 🚗 **Drive Cars** | Hop into sports cars, steer, drift, and use handbrake |
| ✈️ **Fly Airplanes** | Take off from the airport runway and soar above the city |
| 🚁 **Pilot Helicopters** | Vertical takeoff, hover, and fly freely in any direction |
| 🏛️ **Iconic Landmarks** | Taj Mahal, Eiffel Tower, Statue of Liberty, India Gate, Red Fort, Rashtrapati Bhavan |
| 🇮🇳 **Bangalore City** | Vidhana Soudha, UB City, Orion Mall, Lalbagh, Nandi Hills, Silk Board Junction, Town Hall |
| 🗿 **Heritage Statues** | Kempegowda, Tipu Sultan, Gandhi, Vivekananda, Ambedkar, Visvesvaraya & more |
| 🛣️ **Realistic Flyovers** | Climbable multi-tier flyovers with ramps (Silk Board interchange!) |
| 🌃 **Day/Night Cycle** | Toggle between day and night ambience with dynamic lighting |
| 🗺️ **GPS Navigation** | Interactive minimap, full-screen map overlay, and GPS waypoint compass |
| 🧑‍🤝‍🧑 **Crowd System** | Animated pedestrians and ambient city traffic |
| 🎵 **Audio System** | Engine sounds, footsteps, horn, door sounds |
| 🏔️ **Himalayan Mountains** | Snow-capped peaks with Yeti and polar bears |
| 🦁 **City Zoo** | Visit the zoo with animal enclosures |
| 🏫 **City Life** | Schools, banks, nightclubs, cafés, auto-rickshaws |

---

## 🕹️ Controls

### On Foot
| Key | Action |
|-----|--------|
| `W` `A` `S` `D` | Walk / Run |
| `Shift` | Sprint |
| `Space` | Jump |
| `F` | Enter / Exit Vehicle |
| `E` | Use Elevator (at landmarks) |

### Driving
| Key | Action |
|-----|--------|
| `W` | Accelerate |
| `S` | Brake / Reverse |
| `A` `D` | Steer |
| `Space` | Handbrake / Drift |
| `C` | Spawn Car |
| `L` | Toggle Headlights |
| `H` | Honk |

### Flying (Airplane & Helicopter)
| Key | Action |
|-----|--------|
| `W` | Throttle Forward |
| `A` `D` | Bank & Steer |
| `Space` | Climb / Ascend |
| `Shift` | Descend / Land |

### Camera & UI
| Key | Action |
|-----|--------|
| `V` | Toggle View (Chase / Top-Down / Free) |
| `M` | Open Full-Screen Map |
| `H` | Toggle Controls Guide |
| Mouse Drag | Orbit Camera |
| Scroll Wheel | Zoom In/Out |

---

## 🚀 Quick Start

### Play Online
👉 **[Play Courier City on GitHub Pages](https://shubhransh-gupta.github.io/courier-city/)**

### Run Locally

```bash
# Clone the repository
git clone https://github.com/shubhransh-gupta/courier-city.git
cd courier-city

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173 in your browser
```

### Build for Production

```bash
npm run build
npm run preview
```

---

## 🏗️ Project Structure

```
courier-city/
├── index.html              # Entry point & HUD layout
├── vite.config.js           # Vite build configuration
├── package.json             # Dependencies & scripts
├── src/
│   ├── main.js              # Game bootstrap & animation loop
│   ├── core/
│   │   ├── CameraController.js   # Multi-mode camera system
│   │   ├── Input.js               # Keyboard input handler
│   │   ├── PhysicsWorld.js        # Cannon-ES physics & flyover surfaces
│   │   └── AudioManager.js        # Sound effects manager
│   ├── entities/
│   │   ├── Player.js              # Character controller & mesh
│   │   ├── Vehicle.js             # Car physics & rendering
│   │   ├── Airplane.js            # Fixed-wing aircraft
│   │   └── Helicopter.js          # Rotary-wing aircraft
│   ├── world/
│   │   ├── CityBuilder.js         # Procedural city generation (3600+ lines!)
│   │   ├── TextureGenerator.js    # Canvas-based procedural textures
│   │   ├── SkyboxEnvironment.js   # Sky, lighting & clouds
│   │   ├── CrowdSystem.js         # Animated pedestrian NPCs
│   │   ├── TrafficSystem.js       # AI traffic with collision avoidance
│   │   ├── Minimap.js             # Radar minimap
│   │   └── BloodVFX.js            # Particle effects
│   └── ui/
│       ├── HUD.js                 # Heads-up display & toasts
│       ├── FullMapOverlay.js      # Full-screen GPS map
│       └── style.css              # Messenger-style UI theme
└── public/                  # Static assets
```

---

## 🤝 Contributing

We welcome contributions from everyone! Here's how to get started:

### How to Contribute

1. **Fork** the repository
2. **Clone** your fork locally
   ```bash
   git clone https://github.com/YOUR_USERNAME/courier-city.git
   cd courier-city
   npm install
   npm run dev
   ```
3. **Create a branch** for your feature
   ```bash
   git checkout -b feature/your-awesome-feature
   ```
4. **Make your changes** and test locally
5. **Commit** with a descriptive message
   ```bash
   git commit -m "feat: add new landmark - Mysore Palace"
   ```
6. **Push** and create a **Pull Request**
   ```bash
   git push origin feature/your-awesome-feature
   ```

### 💡 Ideas for Contributions

- 🏛️ **New Landmarks** — Add famous buildings/monuments from your city or country
- 🚗 **New Vehicles** — Bikes, buses, trucks, boats
- 🎨 **Better Textures** — Improve procedural textures or add image-based ones
- 🗺️ **Expand the Map** — Add new districts, neighborhoods, terrain
- 🤖 **Smarter AI** — Better traffic AI, pedestrian behavior, missions
- 🎵 **Audio** — Background music, ambient city sounds
- 📱 **Mobile Controls** — Touch-based controls for mobile browsers
- 🏆 **Missions & Quests** — Delivery missions, races, challenges
- 🌐 **Multiplayer** — WebRTC or WebSocket-based multiplayer
- ♿ **Accessibility** — Screen reader support, colorblind modes
- 🐛 **Bug Fixes** — Find and fix issues, improve performance

### Code Style

- Use **ES Modules** (`import`/`export`)
- Follow existing patterns for new entities (extend from similar classes)
- Keep Three.js geometries efficient — use `InstancedMesh` for repeated objects
- Add physics colliders for any solid structures via `PhysicsWorld.addStaticBox()`
- Test with both day and night modes

### Commit Convention

```
feat: add new feature
fix: bug fix
docs: documentation changes
style: formatting, no code change
refactor: code restructuring
perf: performance improvement
test: adding tests
chore: build/config changes
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| [Three.js](https://threejs.org/) | 3D rendering engine |
| [Cannon-ES](https://pmndrs.github.io/cannon-es/) | Physics engine |
| [Vite](https://vitejs.dev/) | Build tool & dev server |
| Vanilla JavaScript | No framework overhead |
| Canvas API | Procedural textures & minimap |
| Web Audio API | Sound effects |

---

## 📸 Highlights

- **3,600+ lines** of procedural city generation
- **Zero external 3D assets** — everything is generated with Three.js primitives
- **Real-time physics** with Cannon-ES (gravity, collisions, ramps)
- **11 heritage statues** with nameplates across Bangalore
- **Multi-tier Silk Board Junction** flyover interchange
- **Namma Metro** viaduct with purple-green train
- **Adaptive camera** that follows you under flyovers

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

You are free to use, modify, and distribute this project for any purpose.

---

## ⭐ Star This Repo

If you enjoyed playing Courier City, please give it a ⭐ on GitHub! It helps others discover the project.

---

<p align="center">
  <b>Courier City — Presented by Shubhransh Gupta</b>
  <br/>
  <b>Built with ❤️ using Three.js, Cannon-ES & Vite</b>
  <br/>
  <sub>A browser-based open world game — no downloads required</sub>
</p>
