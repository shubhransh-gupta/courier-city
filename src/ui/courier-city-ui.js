/**
 * Courier City — Bharat 3D Open World & Interactive India Map Controller
 * Presented by Shubhransh Gupta
 */

import { INDIA_SOI_PATH } from "./india-svg-path.js";

const CITY_DATABASE = {
  bangalore: {
    id: "bangalore",
    name: "Bengaluru",
    script: "ಬೆಂಗಳೂರು",
    lang: "kn",
    tagline: "Silicon Valley of India · Namma Metro Purple Line",
    accent: "#10b981",
    pinX: 227.5,
    pinY: 598.6,
    landmarks: [
      "Vidhana Soudha & High Court",
      "Silk Board Multi-tier Flyover",
      "UB City Luxury Tower",
      "MG Road Boulevard",
      "Cubbon Park Botanical",
      "Ulsoor Lake & Gurudwara",
      "MTR 1924 & Koshy's Cafe",
      "Indiranagar 100ft Hub"
    ],
    fleet: [
      { icon: "🏎️", name: "Bruno Simon Roadster" },
      { icon: "🛺", name: "Detailed Namma Auto" },
      { icon: "🏍️", name: "Royal Enfield Bullet" },
      { icon: "🚌", name: "BMTC Volvo City Bus" },
      { icon: "🚊", name: "Namma Metro Purple Line" }
    ]
  },
  mumbai: {
    id: "mumbai",
    name: "Mumbai",
    script: "मुंबई",
    lang: "mr",
    tagline: "City of Dreams · Western Line & Marine Drive",
    accent: "#c8402a",
    pinX: 125.5,
    pinY: 454.0,
    landmarks: [
      "Marine Drive & Queen's Necklace",
      "Worli Sea Face",
      "Bandra Terminus",
      "Juhu Beach Circle",
      "Churchgate & Oval Maidan",
      "Chhatrapati Shivaji Terminus",
      "Dadar Junction"
    ],
    fleet: [
      { icon: "🚕", name: "Premier Padmini Kaali-Peeli" },
      { icon: "🏎️", name: "Bugatti Veyron 16.4" },
      { icon: "🛺", name: "Suburban Bajaj Auto" },
      { icon: "🚆", name: "Western Railway Fast Local" }
    ]
  },
  delhi: {
    id: "delhi",
    name: "Delhi",
    script: "दिल्ली",
    lang: "hi",
    tagline: "The Capital City · Ring Railway & Old Delhi",
    accent: "#b53826",
    pinX: 216.8,
    pinY: 226.0,
    landmarks: [
      "Red Fort & Chandni Chowk",
      "India Gate & Kartavya Path",
      "Connaught Place Inner Circle",
      "Hazrat Nizamuddin Dargah",
      "Lodhi Art District"
    ],
    fleet: [
      { icon: "🏎️", name: "Aston Martin DBS" },
      { icon: "🛺", name: "Delhi Green CNG Auto" },
      { icon: "🚆", name: "Northern Ring Railway" }
    ]
  },
  kolkata: {
    id: "kolkata",
    name: "Kolkata",
    script: "কলকাতা",
    lang: "bn",
    tagline: "City of Joy · Historic Tram & Howrah Bridge",
    accent: "#d45028",
    pinX: 460.3,
    pinY: 371.2,
    landmarks: [
      "Howrah Bridge over Hooghly",
      "Victoria Memorial Marble Palace",
      "Park Street Dining Hub",
      "Esplanade Terminus",
      "Kalighat Temple Heritage"
    ],
    fleet: [
      { icon: "🚋", name: "Kolkata Historic Tram" },
      { icon: "🚕", name: "Ambassador Yellow Taxi" },
      { icon: "🚢", name: "Hooghly River Ferry" }
    ]
  },
  hyderabad: {
    id: "hyderabad",
    name: "Hyderabad",
    script: "హైదరాబాద్",
    lang: "te",
    tagline: "City of Pearls · Red Line Metro & Charminar",
    accent: "#2e7a5e",
    pinX: 246.7,
    pinY: 494.0,
    landmarks: [
      "Charminar Monument & Laad Bazaar",
      "Hussain Sagar Buddha Statue",
      "Salar Jung Museum",
      "Khairatabad Junction",
      "Nampally Station Heritage"
    ],
    fleet: [
      { icon: "🛺", name: "Hyderabad Passenger Auto" },
      { icon: "🏎️", name: "Mercedes-AMG GT" },
      { icon: "🚊", name: "Hyderabad Metro Red Line" }
    ]
  },
  chennai: {
    id: "chennai",
    name: "Chennai",
    script: "சென்னை",
    lang: "ta",
    tagline: "Gateway of the South · MRTS & Marina Coast",
    accent: "#2768a5",
    pinX: 285.3,
    pinY: 595.9,
    landmarks: [
      "Marina Beach Promenade",
      "Kapaleeshwarar Temple Mylapore",
      "Ripon Building & Central",
      "Chepauk Stadium Coastal Line",
      "San Thome Basilica"
    ],
    fleet: [
      { icon: "🛺", name: "Chennai Namma Auto" },
      { icon: "🏍️", name: "Royal Enfield Classic 350" },
      { icon: "🚆", name: "Chennai Beach-Velachery MRTS" }
    ]
  },
  ahmedabad: {
    id: "ahmedabad",
    name: "Ahmedabad",
    script: "અમદાવાદ",
    lang: "gu",
    tagline: "UNESCO Heritage City · Metro & Sabarmati",
    accent: "#c06b24",
    pinX: 118.8,
    pinY: 360.5,
    landmarks: [
      "Sabarmati Riverfront Promenade",
      "Historic Pols of Old City",
      "Bhadra Fort & Teen Darwaza",
      "Kankaria Lake Island",
      "Manek Chowk Night Market"
    ],
    fleet: [
      { icon: "🛺", name: "Amdavad CNG Auto" },
      { icon: "🏎️", name: "Sports Roadster" },
      { icon: "🚊", name: "Ahmedabad Metro Line" }
    ]
  }
};

const UPCOMING_CITIES = [
  { name: "Jaipur", x: 188.4, y: 268.4 },
  { name: "Pune", x: 146.6, y: 467.1 },
  { name: "Kochi", x: 198.8, y: 670.6 },
  { name: "Lucknow", x: 299.9, y: 269.9 },
  { name: "Chandigarh", x: 209.8, y: 177.9 }
];

let selectedCityId = "bangalore";

/**
 * Initializes the India Map and City Inspector UI inside #home
 */
export function initCourierCityUI() {
  const homeEl = document.getElementById("home");
  if (!homeEl) return;

  // 1. Update Masthead Title & Subheading
  const mastheadEl = homeEl.querySelector(".masthead");
  if (mastheadEl) {
    mastheadEl.innerHTML = `
      <div class="brand-badge-pill">
        <span class="pulse-green-dot"></span>
        <span>BHARAT 3D OPEN WORLD · PRESENTED BY SHUBHRANSH GUPTA</span>
      </div>
      <h1>Courier City</h1>
      <p class="intro">
        Seven Indian cities as celestial 3D diorama planets. Drive Bruno Simon roadsters, hail detailed Namma Autos, 
        ride Royal Enfield Bullets, and board rapid transit lines across Bengaluru, Mumbai, and beyond. 
        Select any active green city on the map to explore.
      </p>
    `;
  }

  // 2. Fix the Footer to never overflow
  const footEl = homeEl.querySelector(".foot");
  if (footEl) {
    footEl.innerHTML = `
      <div class="keys">
        <span style="font-weight:700; color:#ffffff; margin-right:4px;">CONTROLS:</span>
        <span>Walk/Drive <kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd></span>
        <span>·</span>
        <span>Sprint/Boost <kbd>Shift</kbd></span>
        <span>·</span>
        <span>Drive Vehicle <kbd>F</kbd></span>
        <span>·</span>
        <span>Honk <kbd>H</kbd></span>
        <span>·</span>
        <span>Board Metro/Elevators <kbd>E</kbd></span>
        <span>·</span>
        <span>Planet View <kbd>P</kbd></span>
        <span>·</span>
        <span>Wander <kbd>L</kbd></span>
        <span>·</span>
        <span>Menu <kbd>Esc</kbd></span>
      </div>
      <div class="touchnote">Touch: Left thumb walks/steers · Drag to look</div>
    `;
  }

  // 3. Build the India Map & Inspector Layout
  const explorerLayout = document.createElement("div");
  explorerLayout.className = "india-explorer-layout";
  explorerLayout.id = "india-explorer-layout";

  explorerLayout.innerHTML = `
    <!-- Left: Cartographic India Map Viewport -->
    <div class="india-map-wrapper">
      <div class="map-control-bar">
        <div class="map-control-title">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
          <span>SURVEY OF INDIA · OFFICIAL ACTIVE HUBS</span>
        </div>
        <div class="map-legend-items">
          <span class="legend-chip"><span class="dot-beacon active"></span> Live Open World</span>
          <span class="legend-chip"><span class="dot-beacon upcoming"></span> Expansion Line</span>
        </div>
      </div>

      <div class="india-map-frame" id="india-map-frame">
        <svg class="india-map-svg" id="india-map-svg" viewBox="0 0 680 760" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="beacon-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#10b981" stop-opacity="0.9"/>
              <stop offset="100%" stop-color="#10b981" stop-opacity="0"/>
            </radialGradient>
          </defs>

          <!-- Latitude / Longitude Graticule Lines -->
          <g class="map-graticule">
            <line x1="30" y1="200" x2="650" y2="200" />
            <line x1="30" y1="360" x2="650" y2="360" />
            <line x1="30" y1="520" x2="650" y2="520" />
            <line x1="30" y1="680" x2="650" y2="680" />
            <line x1="160" y1="30" x2="160" y2="730" />
            <line x1="320" y1="30" x2="320" y2="730" />
            <line x1="480" y1="30" x2="480" y2="730" />
          </g>

          <!-- Official Survey of India (SOI) Accurate Boundary Path -->
          <path class="india-landmass" d="${INDIA_SOI_PATH}" />

          <!-- Compass Rose Graphic -->
          <g class="compass-rose" transform="translate(600, 65)">
            <circle cx="0" cy="0" r="24" fill="none" stroke="rgba(255, 255, 255, 0.2)" stroke-width="1.2" stroke-dasharray="2 3"/>
            <polygon points="0,-20 4,-5 0,0 -4,-5" fill="var(--cc-emerald)"/>
            <polygon points="0,20 4,5 0,0 -4,5" fill="#475569"/>
            <polygon points="20,0 5,4 0,0 5,-4" fill="#475569"/>
            <polygon points="-20,0 -5,4 0,0 -5,-4" fill="#475569"/>
            <text x="0" y="-24" text-anchor="middle" font-family="var(--font-main)" font-size="10" font-weight="800" fill="var(--cc-emerald)">N</text>
          </g>

          <!-- Upcoming Expansion Cities (Muted Dots) -->
          <g id="upcoming-cities-layer">
            ${UPCOMING_CITIES.map(c => `
              <g class="upcoming-pin" transform="translate(${c.x}, ${c.y})">
                <circle cx="0" cy="0" r="3.5" fill="#64748b" stroke="#0f172a" stroke-width="1.5" opacity="0.8"/>
                <text x="6" y="3.5" font-family="var(--font-main)" font-size="8.5" font-weight="600" fill="#94a3b8">${c.name}</text>
              </g>
            `).join("")}
          </g>

          <!-- Active Live Cities (Green Pulsating Pins) -->
          <g id="active-cities-layer">
            ${Object.values(CITY_DATABASE).map(city => `
              <g class="map-city-pin ${city.id === selectedCityId ? 'active-selected' : ''}" 
                 id="pin-${city.id}" 
                 data-city="${city.id}"
                 transform="translate(${city.pinX}, ${city.pinY})"
                 role="button"
                 tabindex="0"
                 aria-label="Explore ${city.name}">
                
                <!-- Expanding radar ring -->
                <circle class="pulse-radar-ring" cx="0" cy="0" r="9" />
                
                <!-- Core green beacon -->
                <circle class="glow-bg" cx="0" cy="0" r="10" fill="url(#beacon-glow)" />
                <circle class="core-circle" cx="0" cy="0" r="5" fill="#10b981" stroke="#ffffff" stroke-width="2" />

                <!-- City Pin Label -->
                <g class="pin-label-group" transform="translate(${city.pinX > 320 ? -10 : 10}, 3.5)">
                  <text text-anchor="${city.pinX > 320 ? 'end' : 'start'}">
                    ${city.name}
                    <tspan class="vernacular-subtext" dx="3">(${city.script})</tspan>
                  </text>
                </g>
              </g>
            `).join("")}
          </g>
        </svg>
      </div>
    </div>

    <!-- Right: City Details & Fleet Inspector -->
    <div class="city-inspector-card" id="city-inspector-card">
      <div class="inspector-top-badge">
        <span class="live-planet-pill">
          <span class="pulse-green-dot"></span>
          <span>🟢 ACTIVE PLANETARY WORLD</span>
        </span>
        <span style="font-size: 10px; font-weight: 700; color: #94a3b8; text-transform: uppercase;">
          COURIER CITY FLEET
        </span>
      </div>

      <!-- 3D Rotating Planet Slot from Three.js -->
      <div class="inspector-diorama-slot" id="inspector-slot" aria-hidden="true"></div>

      <div class="inspector-city-header">
        <div class="inspector-script-name" id="insp-script">ಬೆಂಗಳೂರು</div>
        <div class="inspector-latin-name" id="insp-latin">
          <span>Bengaluru</span>
          <span style="font-size: 10px; font-weight: 800; color: #10b981; background: rgba(16,185,129,0.15); border: 1px solid rgba(16,185,129,0.3); padding: 2px 6px; border-radius: 4px;">HQ LAB</span>
        </div>
        <div class="inspector-transit-line" id="insp-tagline">
          Silicon Valley of India · Namma Metro Purple Line
        </div>
      </div>

      <!-- Real-Time Bangalore Landmarks & Buildings -->
      <div>
        <div class="inspector-section-label">
          <span>🏛️ ICONIC PLACES & BUILDINGS</span>
        </div>
        <div class="inspector-landmark-pills" id="insp-landmarks">
          <!-- Populated dynamically -->
        </div>
      </div>

      <!-- Courier City Vehicle Fleet Available -->
      <div>
        <div class="inspector-section-label">
          <span>🚗 AVAILABLE VEHICLE FLEET</span>
        </div>
        <div class="fleet-badges-container" id="insp-fleet">
          <!-- Populated dynamically -->
        </div>
      </div>

      <!-- Enter & Explore Action Buttons -->
      <div class="inspector-actions">
        <button class="btn-enter-city" id="btn-enter-city" type="button">
          <span>ENTER CITY (WALK & DRIVE)</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
        <button class="btn-wander-city" id="btn-wander-city" type="button">
          <span>WANDER</span>
        </button>
      </div>
    </div>
  `;

  // Insert before .cities
  const citiesGrid = homeEl.querySelector(".cities");
  if (citiesGrid) {
    homeEl.insertBefore(explorerLayout, citiesGrid);
  } else {
    homeEl.appendChild(explorerLayout);
  }

  // Bind Pin Interaction & Inspector Updates
  setupMapInteraction();

  // Initial populate with default city (Bengaluru)
  selectCity("bangalore");

  // In-Game 3D Vehicle Driving System in HUD
  setup3DVehicleDriveSystem();
}

/**
 * Handles city selection and inspector updates
 */
function selectCity(cityId) {
  const city = CITY_DATABASE[cityId];
  if (!city) return;
  selectedCityId = cityId;

  // 1. Highlight map pins
  document.querySelectorAll(".map-city-pin").forEach(pin => {
    pin.classList.toggle("active-selected", pin.dataset.city === cityId);
  });

  // 2. Update Inspector details
  const inspScript = document.getElementById("insp-script");
  const inspLatin = document.getElementById("insp-latin");
  const inspTagline = document.getElementById("insp-tagline");
  const inspLandmarks = document.getElementById("insp-landmarks");
  const inspFleet = document.getElementById("insp-fleet");

  if (inspScript) inspScript.textContent = city.script;
  if (inspLatin) {
    inspLatin.innerHTML = `
      <span>${city.name}</span>
      ${city.id === "bangalore" ? '<span style="font-size: 10px; font-weight: 800; color: #10b981; background: rgba(16,185,129,0.15); border: 1px solid rgba(16,185,129,0.3); padding: 2px 6px; border-radius: 4px;">HQ LAB</span>' : ''}
    `;
  }
  if (inspTagline) inspTagline.textContent = city.tagline;

  // Populate landmarks
  if (inspLandmarks) {
    inspLandmarks.innerHTML = city.landmarks.map(lm => `
      <span class="landmark-pill">${lm}</span>
    `).join("");
  }

  // Populate vehicle fleet
  if (inspFleet) {
    inspFleet.innerHTML = city.fleet.map(f => `
      <div class="fleet-badge-item">
        <span class="fleet-icon">${f.icon}</span>
        <span>${f.name}</span>
      </div>
    `).join("");
  }

  // Move the 3D diorama canvas slot representation
  syncDioramaSlot(cityId);
}

/**
 * Connects the 3D rotating planetary diorama slot with the inspector card
 */
function syncDioramaSlot(cityId) {
  const inspectorSlot = document.getElementById("inspector-slot");
  if (!inspectorSlot) return;

  const targetBlock = document.querySelector(`.city[data-city="${cityId}"]`);
  if (!targetBlock) return;

  const originalSlot = targetBlock.querySelector(".slot");
  if (originalSlot && !inspectorSlot.contains(originalSlot)) {
    inspectorSlot.innerHTML = "";
    inspectorSlot.appendChild(originalSlot);
  }
}

/**
 * Sets up pins click/hover and enter button zoom-in action
 */
function setupMapInteraction() {
  // Clicking any city pin on the India map
  document.querySelectorAll(".map-city-pin").forEach(pin => {
    const cityId = pin.dataset.city;

    pin.addEventListener("click", () => {
      selectCity(cityId);
    });

    pin.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        selectCity(cityId);
      }
    });

    pin.addEventListener("mouseenter", () => {
      selectCity(cityId);
    });
  });

  // Action Button: Enter City (Walk & Drive)
  const enterBtn = document.getElementById("btn-enter-city");
  if (enterBtn) {
    enterBtn.addEventListener("click", () => {
      launchCity(selectedCityId, false);
    });
  }

  // Action Button: Wander
  const wanderBtn = document.getElementById("btn-wander-city");
  if (wanderBtn) {
    wanderBtn.addEventListener("click", () => {
      launchCity(selectedCityId, true);
    });
  }
}

/**
 * Executes cinematic map zoom-in and triggers planet entry with Telemetry Matrix
 */
function launchCity(cityId, isWander = false) {
  const city = CITY_DATABASE[cityId];
  const mapSvg = document.getElementById("india-map-svg");

  if (mapSvg && city) {
    // Cinematic SVG Zoom centered on target pin
    const cx = (city.pinX / 680) * 100;
    const cy = (city.pinY / 760) * 100;
    mapSvg.style.transformOrigin = `${cx}% ${cy}%`;
    mapSvg.style.transform = "scale(5.5)";
  }

  // Return original slot to block before clicking
  const targetBlock = document.querySelector(`.city[data-city="${cityId}"]`);
  const inspectorSlot = document.getElementById("inspector-slot");
  if (targetBlock && inspectorSlot) {
    const slotEl = inspectorSlot.querySelector(".slot");
    if (slotEl) {
      targetBlock.insertBefore(slotEl, targetBlock.firstChild);
    }
  }

  // If wander requested, set sessionStorage
  if (isWander) {
    sessionStorage.setItem("courier_city_wander", "1");
  }

  // Setup Modern Courier City Telemetry Loading Messages (NOT Gulmohar station list)
  const telemetrySteps = [
    `🛰️ [0%] Establishing orbital GPS lock for ${city.name}...`,
    `🛣️ [25%] Calibrating 13+ live corridor monitors (Silk Board, MG Road, ITPL)...`,
    `🚗 [55%] Spawning Courier City mobility fleet (Namma Autos, Roadsters, Metro)...`,
    `⚡ [80%] Synchronizing collision physics & 3D diorama matrix...`,
    `🚀 [100%] Teleporting explorer to ${city.name} coordinates...`
  ];

  let stepIdx = 0;
  const updateTelemetry = () => {
    const stepEl = targetBlock?.querySelector(".step");
    if (stepEl && stepIdx < telemetrySteps.length) {
      stepEl.textContent = telemetrySteps[stepIdx++];
    }
  };

  updateTelemetry();
  const telemetryTimer = setInterval(updateTelemetry, 450);

  // Trigger city selection in the engine
  setTimeout(() => {
    if (targetBlock) {
      targetBlock.click();
    }
    setTimeout(() => clearInterval(telemetryTimer), 3000);
  }, 350);
}

/**
 * Creates 3D Vehicle Models, Vehicle Dock HUD, and Real Driving Controls
 */
function setup3DVehicleDriveSystem() {
  const hud = document.getElementById("hud");
  if (!hud) return;

  // Add floating vehicle dock in HUD
  const vehicleDock = document.createElement("div");
  vehicleDock.id = "vehicle-dock";
  vehicleDock.innerHTML = `
    <button class="v-dock-btn active" id="v-btn-walk" title="On Foot"><span style="font-size:13px">🚶</span> Foot</button>
    <button class="v-dock-btn" id="v-btn-auto" title="Drive Detailed Namma Auto"><span style="font-size:13px">🛺</span> Namma Auto <kbd>F</kbd></button>
    <button class="v-dock-btn" id="v-btn-car" title="Drive Bruno Simon Roadster"><span style="font-size:13px">🏎️</span> Roadster <kbd>F</kbd></button>
    <button class="v-dock-btn" id="v-btn-bike" title="Ride Royal Enfield Bullet 350"><span style="font-size:13px">🏍️</span> Bullet <kbd>F</kbd></button>
    <button class="v-dock-btn" id="v-btn-bus" title="Drive BMTC Volvo City Bus"><span style="font-size:13px">🚌</span> Volvo Bus <kbd>F</kbd></button>
  `;

  hud.appendChild(vehicleDock);

  const VEHICLE_CONFIGS = [
    { id: "walk", name: "🚶 WALKING", speed: 0, driving: false },
    { id: "auto", name: "🛺 DRIVING NAMMA AUTO · 42 KM/H", speed: 15.5, driving: true },
    { id: "car", name: "🏎️ DRIVING ROADSTER · 75 KM/H", speed: 25.0, driving: true },
    { id: "bike", name: "🏍️ RIDING BULLET 350 · 58 KM/H", speed: 19.0, driving: true },
    { id: "bus", name: "🚌 DRIVING BMTC VOLVO BUS · 36 KM/H", speed: 13.0, driving: true }
  ];

  let currentVehicleIndex = 0;
  let activeVehicleMesh = null;
  const vehicleMeshesCache = {};

  /**
   * Builds an authentic 3D vehicle model using Three.js constructors
   */
  function buildVehicleMesh(type) {
    if (!window.__THREE) return null;
    const { Group, Mesh, BoxGeometry, CylinderGeometry, MeshStandardMaterial, MeshBasicMaterial, Color } = window.__THREE;
    const group = new Group();

    if (type === "auto") {
      // Detailed Bengaluru Namma Auto Rickshaw (Yellow & Green)
      // Green Lower Cabin
      const cabinMat = new MeshStandardMaterial({ color: 0x15803d, roughness: 0.4 });
      const cabin = new Mesh(new BoxGeometry(1.35, 0.65, 2.1), cabinMat);
      cabin.position.y = 0.55;
      group.add(cabin);

      // Yellow Curved Roof / Canopy
      const roofMat = new MeshStandardMaterial({ color: 0xfbbf24, roughness: 0.3 });
      const roof = new Mesh(new BoxGeometry(1.32, 0.55, 1.9), roofMat);
      roof.position.set(0, 1.15, -0.05);
      group.add(roof);

      // Windshield & Bezel
      const glassMat = new MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.65 });
      const glass = new Mesh(new BoxGeometry(1.25, 0.45, 0.05), glassMat);
      glass.position.set(0, 1.1, 0.9);
      group.add(glass);

      // Wheels (3 wheels)
      const wheelMat = new MeshStandardMaterial({ color: 0x18181b, roughness: 0.8 });
      const wheelGeom = new CylinderGeometry(0.26, 0.26, 0.16, 12);

      const fWheel = new Mesh(wheelGeom, wheelMat);
      fWheel.rotation.z = Math.PI / 2;
      fWheel.position.set(0, 0.26, 0.85);
      group.add(fWheel);

      const rlWheel = new Mesh(wheelGeom, wheelMat);
      rlWheel.rotation.z = Math.PI / 2;
      rlWheel.position.set(-0.62, 0.26, -0.65);
      group.add(rlWheel);

      const rrWheel = new Mesh(wheelGeom, wheelMat);
      rrWheel.rotation.z = Math.PI / 2;
      rrWheel.position.set(0.62, 0.26, -0.65);
      group.add(rrWheel);

      // Headlight with yellow beam
      const lightMat = new MeshBasicMaterial({ color: 0xfef08a });
      const headlight = new Mesh(new BoxGeometry(0.22, 0.22, 0.08), lightMat);
      headlight.position.set(0, 0.65, 1.06);
      group.add(headlight);

    } else if (type === "car") {
      // Bruno Simon Style Roadster (Red with dual black sports stripes)
      const bodyMat = new MeshStandardMaterial({ color: 0xef4444, roughness: 0.3, metalness: 0.2 });
      const body = new Mesh(new BoxGeometry(1.7, 0.45, 3.8), bodyMat);
      body.position.y = 0.4;
      group.add(body);

      // Cockpit / Glass Canopy
      const canopyMat = new MeshBasicMaterial({ color: 0x0f172a });
      const canopy = new Mesh(new BoxGeometry(1.2, 0.35, 1.6), canopyMat);
      canopy.position.set(0, 0.72, -0.2);
      group.add(canopy);

      // 4 Wide Sports Wheels
      const wheelMat = new MeshStandardMaterial({ color: 0x18181b, roughness: 0.7 });
      const wheelGeom = new CylinderGeometry(0.32, 0.32, 0.24, 14);

      [[-0.88, 1.1], [0.88, 1.1], [-0.88, -1.1], [0.88, -1.1]].forEach(([wx, wz]) => {
        const w = new Mesh(wheelGeom, wheelMat);
        w.rotation.z = Math.PI / 2;
        w.position.set(wx, 0.32, wz);
        group.add(w);
      });

      // LED Headlights
      const ledMat = new MeshBasicMaterial({ color: 0xffffff });
      [-0.55, 0.55].forEach(lx => {
        const led = new Mesh(new BoxGeometry(0.22, 0.1, 0.05), ledMat);
        led.position.set(lx, 0.45, 1.91);
        group.add(led);
      });

    } else if (type === "bike") {
      // Royal Enfield Bullet 350
      const tankMat = new MeshStandardMaterial({ color: 0x09090b, roughness: 0.2, metalness: 0.8 });
      const tank = new Mesh(new BoxGeometry(0.4, 0.32, 0.7), tankMat);
      tank.position.set(0, 0.85, 0.1);
      group.add(tank);

      // Chrome Engine
      const chromeMat = new MeshStandardMaterial({ color: 0xd4d4d8, metalness: 0.9, roughness: 0.1 });
      const engine = new Mesh(new BoxGeometry(0.35, 0.4, 0.5), chromeMat);
      engine.position.set(0, 0.5, 0);
      group.add(engine);

      // Spoked Wheels
      const wheelMat = new MeshStandardMaterial({ color: 0x18181b });
      const wheelGeom = new CylinderGeometry(0.34, 0.34, 0.1, 14);

      const fw = new Mesh(wheelGeom, wheelMat);
      fw.rotation.z = Math.PI / 2;
      fw.position.set(0, 0.34, 0.95);
      group.add(fw);

      const rw = new Mesh(wheelGeom, wheelMat);
      rw.rotation.z = Math.PI / 2;
      rw.position.set(0, 0.34, -0.75);
      group.add(rw);

      // Handlebar & Headlight
      const bar = new Mesh(new BoxGeometry(0.85, 0.04, 0.04), chromeMat);
      bar.position.set(0, 1.05, 0.65);
      group.add(bar);

    } else if (type === "bus") {
      // BMTC Volvo Blue & White City Bus
      const blueMat = new MeshStandardMaterial({ color: 0x1d4ed8, roughness: 0.4 });
      const body = new Mesh(new BoxGeometry(2.3, 1.8, 6.5), blueMat);
      body.position.y = 1.2;
      group.add(body);

      // Observation Windows
      const winMat = new MeshBasicMaterial({ color: 0x0284c7 });
      const win = new Mesh(new BoxGeometry(2.34, 0.6, 5.8), winMat);
      win.position.set(0, 1.45, 0.1);
      group.add(win);
    }

    group.scale.set(1.1, 1.1, 1.1);
    return group;
  }

  /**
   * Mounts or dismounts a vehicle
   */
  function setVehicleDriveMode(index) {
    currentVehicleIndex = index;
    const config = VEHICLE_CONFIGS[index];

    // 1. Update UI Dock Buttons
    document.querySelectorAll(".v-dock-btn").forEach((btn, i) => {
      btn.classList.toggle("active", i === index);
    });

    // 2. Update Mode Label in HUD
    const modeEl = document.getElementById("mode");
    if (modeEl) {
      modeEl.textContent = config.name;
      modeEl.style.opacity = "1";
    }

    // 3. Update Player State & Speed
    if (window.__api && window.__api.player) {
      const p = window.__api.player;
      p.drivingVehicle = config.driving;
      p.vehicleSpeed = config.speed;

      // Ensure scene exists
      const scene = window.__api.scene || (window.__api.tod && window.__api.tod.scene);

      // Remove existing vehicle mesh from scene
      if (activeVehicleMesh && scene) {
        scene.remove(activeVehicleMesh);
        activeVehicleMesh = null;
      }

      // If driving, add the 3D vehicle mesh
      if (config.driving && scene) {
        if (!vehicleMeshesCache[config.id]) {
          vehicleMeshesCache[config.id] = buildVehicleMesh(config.id);
        }
        activeVehicleMesh = vehicleMeshesCache[config.id];
        if (activeVehicleMesh) {
          scene.add(activeVehicleMesh);
        }

        // Play horn sound upon mounting
        if (window.__api.audio) {
          try {
            window.__api.audio.play(config.id === "bus" ? "busHorn" : "autoHorn", { volume: 0.35 });
          } catch(e) {}
        }
      }
    }
  }

  // Real-time animation loop syncing 3D vehicle position with player
  function renderVehicleLoop() {
    requestAnimationFrame(renderVehicleLoop);

    if (activeVehicleMesh && window.__api && window.__api.player) {
      const p = window.__api.player;
      activeVehicleMesh.position.set(p.x, p.y + 0.05, p.z);
      activeVehicleMesh.rotation.y = p.yaw + Math.PI;

      // Gentle driving vibration/suspension bounce when moving
      if (p.speed > 0.5) {
        activeVehicleMesh.position.y += Math.sin(performance.now() * 0.035) * 0.02;
      }
    }
  }
  renderVehicleLoop();

  // Keyboard shortcut 'F' to cycle vehicles (Walk <-> Auto <-> Roadster <-> Bullet <-> Bus)
  window.addEventListener("keydown", (e) => {
    if (e.code === "KeyF" && !e.repeat) {
      const nextIndex = (currentVehicleIndex + 1) % VEHICLE_CONFIGS.length;
      setVehicleDriveMode(nextIndex);
    }
    // Keyboard shortcut 'H' to honk horn
    if (e.code === "KeyH" && !e.repeat) {
      if (window.__api && window.__api.audio) {
        try {
          window.__api.audio.play("autoHorn", { volume: 0.5 });
        } catch(err) {}
      }
    }
  });

  // Dock button clicks
  document.getElementById("v-btn-walk")?.addEventListener("click", () => setVehicleDriveMode(0));
  document.getElementById("v-btn-auto")?.addEventListener("click", () => setVehicleDriveMode(1));
  document.getElementById("v-btn-car")?.addEventListener("click", () => setVehicleDriveMode(2));
  document.getElementById("v-btn-bike")?.addEventListener("click", () => setVehicleDriveMode(3));
  document.getElementById("v-btn-bus")?.addEventListener("click", () => setVehicleDriveMode(4));

  // Check wander param
  if (sessionStorage.getItem("courier_city_wander") === "1") {
    sessionStorage.removeItem("courier_city_wander");
    setTimeout(() => {
      const wanderBtn = document.getElementById("wander");
      if (wanderBtn) wanderBtn.click();
    }, 1500);
  }
}

/**
 * Monitors the transition state so the game NEVER gets jammed on the loading card or home overlay
 */
function setupAntiJamWatcher() {
  const dismissHomeAndEnter = () => {
    const home = document.getElementById("home");
    if (home) {
      home.hidden = true;
      home.classList.add("gone", "lifting");
      home.style.setProperty("display", "none", "important");
      home.style.setProperty("pointer-events", "none", "important");
      home.style.setProperty("opacity", "0", "important");
    }

    const card = document.getElementById("card");
    if (card) {
      card.style.zIndex = "35";
    }
    const goBtn = document.getElementById("go");
    if (goBtn && !goBtn.disabled) {
      goBtn.click();
    }
  };

  // 1. Direct Click on the card or .step button when ready:
  document.addEventListener("click", (e) => {
    const step = e.target.closest(".step");
    const chosen = e.target.closest(".city.chosen");
    if (step || chosen) {
      const stepEl = document.querySelector(".city.chosen .step");
      const stepText = (stepEl?.textContent || "").toLowerCase();
      if (stepText.includes("here we are") || stepText.includes("100%")) {
        dismissHomeAndEnter();
      }
    }
  });

  // 2. Watcher: when .step says "Here we are", automatically dismiss #home and trigger #go
  let resolved = false;
  const pollTimer = setInterval(() => {
    const stepEl = document.querySelector(".city.chosen .step");
    if (stepEl) {
      const text = stepEl.textContent || "";
      if (text.includes("Here we are") || text.includes("100%")) {
        if (!resolved) {
          resolved = true;
          // Give 600ms for user to see the success completion, then seamlessly enter
          setTimeout(dismissHomeAndEnter, 700);
          setTimeout(() => clearInterval(pollTimer), 4000);
        }
      }
    }
  }, 150);

  // 3. Watch #card: if #card becomes active (not gone), ensure #home is hidden and #go is clicked
  const cardEl = document.getElementById("card");
  if (cardEl) {
    const cardObs = new MutationObserver(() => {
      if (!cardEl.classList.contains("gone")) {
        const home = document.getElementById("home");
        if (home && !home.hidden) {
          home.hidden = true;
          home.style.setProperty("display", "none", "important");
          home.style.setProperty("pointer-events", "none", "important");
        }
        const goBtn = document.getElementById("go");
        if (goBtn && !goBtn.disabled) {
          setTimeout(() => goBtn.click(), 250);
        }
      }
    });
    cardObs.observe(cardEl, { attributes: true, attributeFilter: ["class"] });
  }
}

// Auto-initialize when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    initCourierCityUI();
    setupAntiJamWatcher();
  });
} else {
  setTimeout(() => {
    initCourierCityUI();
    setupAntiJamWatcher();
  }, 50);
}
