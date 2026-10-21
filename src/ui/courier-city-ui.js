/**
 * Courier City — Bharat 3D Open World & Interactive India Map Controller
 * Presented by Shubhransh Gupta
 */

const CITY_DATABASE = {
  bangalore: {
    id: "bangalore",
    name: "Bengaluru",
    script: "ಬೆಂಗಳೂರು",
    lang: "kn",
    tagline: "Silicon Valley of India · Namma Metro Purple Line",
    accent: "#7a3b8f",
    pinX: 258,
    pinY: 602,
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
    pinX: 154,
    pinY: 468,
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
    pinX: 246,
    pinY: 248,
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
    pinX: 472,
    pinY: 388,
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
    pinX: 275,
    pinY: 506,
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
    pinX: 308,
    pinY: 604,
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
    pinX: 148,
    pinY: 378,
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
  { name: "Jaipur", x: 198, y: 305 },
  { name: "Pune", x: 172, y: 486 },
  { name: "Kochi", x: 236, y: 672 },
  { name: "Lucknow", x: 318, y: 304 },
  { name: "Chandigarh", x: 234, y: 206 }
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
        Tap any active green city beacon on the map to explore.
      </p>
    `;
  }

  // 2. Build the India Map & Inspector Layout
  const explorerLayout = document.createElement("div");
  explorerLayout.className = "india-explorer-layout";
  explorerLayout.id = "india-explorer-layout";

  explorerLayout.innerHTML = `
    <!-- Left: Cartographic India Map Viewport -->
    <div class="india-map-wrapper">
      <div class="map-control-bar">
        <div class="map-control-title">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
          <span>INTERACTIVE MAP OF INDIA · ACTIVE HUBS</span>
        </div>
        <div class="map-legend-items">
          <span class="legend-chip"><span class="dot-beacon active"></span> Live Open World</span>
          <span class="legend-chip"><span class="dot-beacon upcoming"></span> Expansion Line</span>
        </div>
      </div>

      <div class="india-map-frame" id="india-map-frame">
        <svg class="india-map-svg" id="india-map-svg" viewBox="0 0 680 780" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <!-- Paper texture pattern -->
            <filter id="map-paper-filter">
              <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" result="noise"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.15   0 0 0 0 0.12   0 0 0 0 0.14  0 0 0 0.05 0"/>
            </filter>
            <!-- Radial gradient for ocean/land border -->
            <radialGradient id="beacon-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#10b981" stop-opacity="0.9"/>
              <stop offset="100%" stop-color="#10b981" stop-opacity="0"/>
            </radialGradient>
          </defs>

          <!-- Latitude / Longitude Graticule Lines -->
          <g class="map-graticule">
            <line x1="40" y1="200" x2="640" y2="200" />
            <line x1="40" y1="360" x2="640" y2="360" />
            <line x1="40" y1="520" x2="640" y2="520" />
            <line x1="40" y1="680" x2="640" y2="680" />
            <line x1="160" y1="40" x2="160" y2="740" />
            <line x1="320" y1="40" x2="320" y2="740" />
            <line x1="480" y1="40" x2="480" y2="740" />
          </g>

          <!-- Subtle Ocean Depth Contour Lines -->
          <g class="ocean-relief">
            <path d="M 60,420 Q 90,560 200,740 Q 320,680 440,480 Q 520,380 620,360" />
            <path d="M 40,400 Q 70,580 190,760 Q 340,690 460,460 Q 540,360 640,340" />
          </g>

          <!-- India Subcontinent Vector Boundary Path -->
          <path class="india-landmass" d="
            M 240,70
            C 255,80 270,95 285,120
            C 300,140 310,165 305,185
            C 320,195 345,190 365,210
            C 380,225 410,230 435,245
            C 460,260 480,270 515,260
            C 540,250 565,255 585,275
            C 600,290 615,310 610,330
            C 595,345 565,340 550,355
            C 535,370 520,385 495,385
            C 475,385 460,400 455,420
            C 440,450 415,480 380,515
            C 350,550 330,590 310,630
            C 290,670 265,715 240,740
            C 225,720 215,675 200,640
            C 185,600 170,555 160,510
            C 150,470 145,435 130,410
            C 115,390 85,380 70,365
            C 55,350 75,335 100,330
            C 120,325 135,310 140,290
            C 150,260 165,230 180,200
            C 195,170 205,140 215,105
            Z
          " />

          <!-- Internal State Geometries (Cartographic contours) -->
          <g class="india-subdivision">
            <!-- Karnataka & Southern Peninsula -->
            <path d="M 180,550 C 220,560 260,580 290,620 C 260,650 230,690 240,740" />
            <!-- Maharashtra / Western Zone -->
            <path d="M 140,420 C 180,440 230,460 280,480 C 290,520 280,550 270,570" />
            <!-- Gujarat Kutch -->
            <path d="M 70,365 C 105,360 130,375 140,410" />
            <!-- Northern/Central Divide -->
            <path d="M 180,280 C 240,290 320,320 380,360 C 420,380 460,410 495,385" />
            <!-- Eastern Region / Bengal -->
            <path d="M 380,360 C 420,390 450,420 465,450" />
          </g>

          <!-- Compass Rose Graphic -->
          <g class="compass-rose" transform="translate(580, 70)">
            <circle cx="0" cy="0" r="28" fill="none" stroke="rgba(93, 81, 89, 0.4)" stroke-width="1.2" stroke-dasharray="2 3"/>
            <polygon points="0,-24 5,-6 0,0 -5,-6" fill="var(--flame, #e8492a)"/>
            <polygon points="0,24 5,6 0,0 -5,6" fill="var(--ink, #231a26)"/>
            <polygon points="24,0 6,5 0,0 6,-5" fill="var(--ink, #231a26)"/>
            <polygon points="-24,0 -6,5 0,0 -6,-5" fill="var(--ink, #231a26)"/>
            <text x="0" y="-28" text-anchor="middle" font-family="'Rozha One', serif" font-size="12" font-weight="700" fill="var(--flame)">N</text>
          </g>

          <!-- Upcoming Expansion Cities (Muted Dots) -->
          <g id="upcoming-cities-layer">
            ${UPCOMING_CITIES.map(c => `
              <g class="upcoming-pin" transform="translate(${c.x}, ${c.y})">
                <circle cx="0" cy="0" r="4" fill="#9ca3af" stroke="#ffffff" stroke-width="1.5" opacity="0.8"/>
                <text x="7" y="3.5" font-family="Mukta, sans-serif" font-size="9" font-weight="600" fill="#71717a">${c.name}</text>
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
                <circle class="pulse-radar-ring" cx="0" cy="0" r="10" />
                
                <!-- Core green beacon -->
                <circle class="glow-bg" cx="0" cy="0" r="11" fill="url(#beacon-glow)" />
                <circle class="core-circle" cx="0" cy="0" r="5.5" fill="#10b981" stroke="#ffffff" stroke-width="2" />

                <!-- City Pin Label -->
                <g class="pin-label-group" transform="translate(${city.pinX > 320 ? -12 : 12}, 4)">
                  <text text-anchor="${city.pinX > 320 ? 'end' : 'start'}">
                    ${city.name}
                    <tspan class="vernacular-subtext" dx="4">(${city.script})</tspan>
                  </text>
                </g>
              </g>
            `).join("")}
          </g>
        </svg>
      </div>
    </div>

    <!-- Right: City Intelligence & Vehicle Fleet Inspector -->
    <div class="city-inspector-card" id="city-inspector-card">
      <div class="inspector-top-badge">
        <span class="live-planet-pill">
          <span class="pulse-green-dot"></span>
          <span>🟢 ACTIVE PLANETARY WORLD</span>
        </span>
        <span style="font-size: 11px; font-weight: 700; color: var(--ink-2); text-transform: uppercase;">
          COURIER CITY FLEET
        </span>
      </div>

      <!-- 3D Rotating Planet Slot from Three.js -->
      <div class="inspector-diorama-slot" id="inspector-slot" aria-hidden="true"></div>

      <div class="inspector-city-header">
        <div class="inspector-script-name" id="insp-script">ಬೆಂಗಳೂರು</div>
        <div class="inspector-latin-name" id="insp-latin">
          <span>Bengaluru</span>
          <span style="font-size: 12px; font-weight: 700; color: #10b981; background: rgba(16,185,129,0.1); padding: 2px 7px; border-radius: 4px;">HQ LAB</span>
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
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
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

  // In-Game Vehicle Dock in HUD
  setupInGameVehicleDock();
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
      ${city.id === "bangalore" ? '<span style="font-size: 11px; font-weight: 700; color: #059669; background: rgba(16,185,129,0.12); border: 1px solid rgba(16,185,129,0.3); padding: 2px 7px; border-radius: 4px;">HQ LAB</span>' : ''}
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
  const mapSvg = document.getElementById("india-map-svg");

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
 * Executes cinematic map zoom-in and triggers planet entry
 */
function launchCity(cityId, isWander = false) {
  const city = CITY_DATABASE[cityId];
  const mapSvg = document.getElementById("india-map-svg");

  if (mapSvg && city) {
    // Cinematic SVG Zoom centered on target pin
    const cx = (city.pinX / 680) * 100;
    const cy = (city.pinY / 780) * 100;
    mapSvg.style.transformOrigin = `${cx}% ${cy}%`;
    mapSvg.style.transform = "scale(5.2)";
  }

  // Return the original slot to the block before clicking
  const targetBlock = document.querySelector(`.city[data-city="${cityId}"]`);
  const inspectorSlot = document.getElementById("inspector-slot");
  if (targetBlock && inspectorSlot) {
    const slotEl = inspectorSlot.querySelector(".slot");
    if (slotEl) {
      targetBlock.insertBefore(slotEl, targetBlock.firstChild);
    }
  }

  // If wander requested, set URL query or invoke wander
  if (isWander) {
    sessionStorage.setItem("courier_city_wander", "1");
  }

  // Trigger the original game engine's city selection
  setTimeout(() => {
    if (targetBlock) {
      targetBlock.click();
    }
  }, 350);
}

/**
 * Creates in-game vehicle mobility selector in HUD
 */
function setupInGameVehicleDock() {
  const hud = document.getElementById("hud");
  if (!hud) return;

  const vehicleDock = document.createElement("div");
  vehicleDock.id = "vehicle-dock";
  vehicleDock.innerHTML = `
    <button class="v-dock-btn active" id="v-btn-walk" title="On Foot"><span style="font-size:14px">🚶</span> Foot</button>
    <button class="v-dock-btn" id="v-btn-car" title="Drive Bruno Simon Roadster"><span style="font-size:14px">🚗</span> Roadster <kbd>F</kbd></button>
    <button class="v-dock-btn" id="v-btn-auto" title="Hail Detailed Namma Auto"><span style="font-size:14px">🛺</span> Auto <kbd>F</kbd></button>
    <button class="v-dock-btn" id="v-btn-bike" title="Ride Royal Enfield Bullet 350"><span style="font-size:14px">🏍️</span> Bullet <kbd>F</kbd></button>
    <button class="v-dock-btn" id="v-btn-metro" title="Board Namma Metro Purple Line"><span style="font-size:14px">🚊</span> Metro <kbd>E</kbd></button>
  `;

  hud.appendChild(vehicleDock);

  const vehicleModes = [
    { id: "walk", label: "🚶 WALKING", speedMultiplier: 1.0 },
    { id: "car", label: "🚗 DRIVING ROADSTER · 50 KM/H", speedMultiplier: 3.2 },
    { id: "auto", label: "🛺 NAMMA AUTO · 35 KM/H", speedMultiplier: 2.3 },
    { id: "bike", label: "🏍️ BULLET 350 · 42 KM/H", speedMultiplier: 2.8 }
  ];

  let currentVehicleIndex = 0;

  function setVehicleMode(index) {
    currentVehicleIndex = index;
    const modeObj = vehicleModes[index];

    // Update buttons
    document.querySelectorAll(".v-dock-btn").forEach((btn, i) => {
      btn.classList.toggle("active", i === index);
    });

    // Update Mode text in HUD
    const modeEl = document.getElementById("mode");
    if (modeEl) {
      modeEl.textContent = modeObj.label;
      modeEl.style.opacity = "1";
    }

    // Update player speed if player available
    if (window.__api && window.__api.player) {
      const p = window.__api.player;
      p.speedMultiplier = modeObj.speedMultiplier;
      if (p.auto) {
        p.auto.speed = 1.8 * modeObj.speedMultiplier;
      }
    }
  }

  // Keyboard shortcut 'F' to cycle vehicles (Drive / Ride)
  window.addEventListener("keydown", (e) => {
    if (e.code === "KeyF" && !e.repeat) {
      const nextIndex = (currentVehicleIndex + 1) % vehicleModes.length;
      setVehicleMode(nextIndex);
    }
  });

  // Dock button clicks
  document.getElementById("v-btn-walk")?.addEventListener("click", () => setVehicleMode(0));
  document.getElementById("v-btn-car")?.addEventListener("click", () => setVehicleMode(1));
  document.getElementById("v-btn-auto")?.addEventListener("click", () => setVehicleMode(2));
  document.getElementById("v-btn-bike")?.addEventListener("click", () => setVehicleMode(3));
  document.getElementById("v-btn-metro")?.addEventListener("click", () => {
    const hint = document.getElementById("hint");
    if (hint) {
      hint.textContent = "Approach equator station viaduct · Press E to board Namma Metro";
    }
  });

  // Check wander param
  if (sessionStorage.getItem("courier_city_wander") === "1") {
    sessionStorage.removeItem("courier_city_wander");
    setTimeout(() => {
      const wanderBtn = document.getElementById("wander");
      if (wanderBtn) wanderBtn.click();
    }, 1500);
  }
}

// Auto-initialize when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initCourierCityUI);
} else {
  // Wait brief tick for game elements to mount
  setTimeout(initCourierCityUI, 50);
}
