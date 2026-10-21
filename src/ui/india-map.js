/**
 * Courier City — Survey of India Interactive National Map
 * Integrates directly with the native diorama engine lifecycle
 */

import { INDIA_SOI_PATH } from "./india-svg-path.js";

const CITIES = [
  { id: "delhi", x: 216.8, y: 226.0, name: "Delhi", script: "दिल्ली", line: "Northern Ring Railway", state: "NCR" },
  { id: "ahmedabad", x: 128.0, y: 382.0, name: "Ahmedabad", script: "અમદાવાદ", line: "Ahmedabad Metro & BRTS", state: "Gujarat" },
  { id: "mumbai", x: 125.5, y: 454.0, name: "Mumbai", script: "मुंबई", line: "Western Railway Fast Local", state: "Maharashtra" },
  { id: "hyderabad", x: 260.0, y: 505.0, name: "Hyderabad", script: "హైదరాబాద్", line: "Hyderabad Metro Red Line", state: "Telangana" },
  { id: "kolkata", x: 432.0, y: 418.0, name: "Kolkata", script: "কলকাতা", line: "East-West Metro & Tramways", state: "West Bengal" },
  { id: "bangalore", x: 227.5, y: 598.6, name: "Bengaluru", script: "ಬೆಂಗಳೂರು", line: "Namma Metro Purple Line", state: "Karnataka" },
  { id: "chennai", x: 295.0, y: 620.0, name: "Chennai", script: "சென்னை", line: "Chennai MRTS Coastal Line", state: "Tamil Nadu" }
];

function createMapSVG() {
  const pins = CITIES.map(c => `
    <g class="map-city-pin" data-city="${c.id}" transform="translate(${c.x}, ${c.y})" tabindex="0" role="button" aria-label="Select ${c.name} (${c.script})">
      <!-- Pulsing Radar Ring -->
      <circle class="pin-radar" r="14"></circle>
      <circle class="pin-ring" r="8"></circle>
      <circle class="pin-dot" r="4.5"></circle>
      <!-- Station Name Tag -->
      <g class="pin-tag-group">
        <rect class="pin-tag-bg" rx="4" ry="4" x="10" y="-14" width="110" height="26"></rect>
        <text class="pin-tag-script" x="16" y="-2">${c.script}</text>
        <text class="pin-tag-name" x="16" y="9">${c.name.toUpperCase()}</text>
      </g>
    </g>
  `).join("");

  return `
    <div class="soi-map-card">
      <div class="soi-map-header">
        <div class="soi-badge">
          <span class="soi-dot-pulse"></span>
          <span>SURVEY OF INDIA · भारतीय सर्वेक्षण विभाग</span>
        </div>
        <div class="soi-scale">NATIONAL TRANSIT NETWORK · 7 HUBS ACTIVE</div>
      </div>
      
      <div class="soi-svg-frame">
        <svg viewBox="0 0 680 770" class="soi-india-svg" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="landGrad" cx="45%" cy="45%" r="60%">
              <stop offset="0%" stop-color="#fdfbf7" />
              <stop offset="100%" stop-color="#ece4d4" />
            </radialGradient>
            <filter id="mapShadow" x="-5%" y="-5%" width="115%" height="115%">
              <feDropShadow dx="2" dy="3" stdDeviation="4" flood-color="#231a26" flood-opacity="0.12" />
            </filter>
          </defs>

          <!-- Latitude / Longitude Coordinate Grid -->
          <g class="map-grid">
            <line x1="20" y1="120" x2="660" y2="120" />
            <line x1="20" y1="240" x2="660" y2="240" />
            <line x1="20" y1="360" x2="660" y2="360" />
            <line x1="20" y1="480" x2="660" y2="480" />
            <line x1="20" y1="600" x2="660" y2="600" />
            <line x1="20" y1="720" x2="660" y2="720" />

            <line x1="120" y1="20" x2="120" y2="750" />
            <line x1="240" y1="20" x2="240" y2="750" />
            <line x1="360" y1="20" x2="360" y2="750" />
            <line x1="480" y1="20" x2="480" y2="750" />
            <line x1="600" y1="20" x2="600" y2="750" />

            <!-- Coordinates text -->
            <text x="30" y="235" class="grid-label">28° N</text>
            <text x="30" y="355" class="grid-label">24° N</text>
            <text x="30" y="475" class="grid-label">20° N</text>
            <text x="30" y="595" class="grid-label">16° N</text>
            <text x="30" y="715" class="grid-label">12° N</text>
            
            <text x="125" y="745" class="grid-label">72° E</text>
            <text x="245" y="745" class="grid-label">76° E</text>
            <text x="365" y="745" class="grid-label">80° E</text>
            <text x="485" y="745" class="grid-label">84° E</text>
            <text x="605" y="745" class="grid-label">88° E</text>
          </g>

          <!-- Authentic Survey of India Polygon Boundary -->
          <path class="soi-boundary-shadow" d="${INDIA_SOI_PATH}" filter="url(#mapShadow)"></path>
          <path class="soi-boundary" d="${INDIA_SOI_PATH}"></path>

          <!-- Vintage Cartographic Compass Rose -->
          <g class="compass-rose" transform="translate(560, 140)">
            <circle cx="0" cy="0" r="28" class="compass-circle"></circle>
            <polygon points="0,-24 5,-6 24,0 6,5 0,24 -5,6 -24,0 -6,-5" class="compass-star"></polygon>
            <polygon points="0,-24 5,-6 0,0 -5,-6" class="compass-north"></polygon>
            <text x="0" y="-28" text-anchor="middle" class="compass-n">N</text>
          </g>

          <!-- Title Stamp Cartouche -->
          <g class="cartouche" transform="translate(60, 60)">
            <rect x="0" y="0" width="170" height="64" rx="4" class="cartouche-bg"></rect>
            <text x="12" y="18" class="cartouche-t1">SURVEY OF INDIA</text>
            <text x="12" y="32" class="cartouche-t2">BHARAT TRANSIT GRID</text>
            <text x="12" y="47" class="cartouche-t3">GEODETIC DATUM · WGS 84</text>
            <text x="12" y="57" class="cartouche-t4">SCALE 1 : 4,000,000</text>
          </g>

          <!-- 7 Active City Pins -->
          <g class="map-city-pins-layer">
            ${pins}
          </g>
        </svg>
      </div>

      <div class="soi-map-footer">
        <div class="soi-legend-item">
          <span class="legend-dot green"></span>
          <span><b>Green Pin</b> = Active 3D City (Click to Enter)</span>
        </div>
        <div class="soi-legend-item">
          <span class="legend-hint">Walk with WASD · Drive Vehicles with F · Orbit with P</span>
        </div>
      </div>
    </div>
  `;
}

export function initIndiaMap() {
  const home = document.querySelector("#home");
  if (!home) return;

  // Check if map is already mounted
  if (document.querySelector(".soi-map-wrapper")) return;

  const masthead = home.querySelector(".masthead");
  const citiesEl = home.querySelector(".cities");

  // Create wrapper and inject before .cities
  const wrapper = document.createElement("div");
  wrapper.className = "soi-map-wrapper";
  wrapper.innerHTML = createMapSVG();

  if (masthead && citiesEl) {
    home.insertBefore(wrapper, citiesEl);
  } else {
    home.prepend(wrapper);
  }

  // Bind clicks and hovers on map city pins
  const pins = wrapper.querySelectorAll(".map-city-pin");
  pins.forEach(pin => {
    const cityId = pin.dataset.city;

    const selectCity = (e) => {
      e?.preventDefault();
      // Find matching .city button and click it
      const cityBtn = document.querySelector(`.city[data-city="${cityId}"]`);
      if (cityBtn) {
        cityBtn.click();
      }
    };

    pin.addEventListener("click", selectCity);
    pin.addEventListener("pointerdown", selectCity);

    pin.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        selectCity(e);
      }
    });

    // Hover sync with city card
    pin.addEventListener("pointerenter", () => {
      const cityBtn = document.querySelector(`.city[data-city="${cityId}"]`);
      cityBtn?.classList.add("map-hovered");
    });

    pin.addEventListener("pointerleave", () => {
      const cityBtn = document.querySelector(`.city[data-city="${cityId}"]`);
      cityBtn?.classList.remove("map-hovered");
    });
  });

  // Also sync hover from city cards back to map pins
  const syncCityCards = () => {
    const cityButtons = document.querySelectorAll(".city[data-city]");
    cityButtons.forEach(btn => {
      const cityId = btn.dataset.city;
      const pin = wrapper.querySelector(`.map-city-pin[data-city="${cityId}"]`);
      if (!pin) return;

      btn.addEventListener("pointerenter", () => {
        pin.classList.add("card-hovered");
      });
      btn.addEventListener("pointerleave", () => {
        pin.classList.remove("card-hovered");
      });
    });
  };

  // Give a small moment for .cities to render buttons
  setTimeout(syncCityCards, 50);
}

// Auto-mount when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initIndiaMap);
} else {
  initIndiaMap();
}
