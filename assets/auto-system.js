/**
 * Courier City — Authentic State-Localized Auto Rickshaw & Police Pursuit System
 * Features:
 * - 100% City-Specific Livery & Kannada/Regional Windshield Banners
 * - City-Specific Base Fare (Bangalore: ₹30.00, Mumbai: ₹23.00, etc.)
 * - Live Distance-Based Dynamic Fare Meter (ticks up as you drive!)
 * - Regional Police Pursuit in the Local Language (Kannada in Bengaluru, etc.)
 * - Smooth Cockpit Driver View & Planetary Driving Physics
 */

import * as THREE from "three";

const LT = 2 * Math.PI * 240; // Planetary equator circumference (~1507.96)

function wrapX(x) {
  return ((x + LT * 0.5) % LT + LT) % LT - LT * 0.5;
}

function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v));
}

export const CITY_AUTO_CONFIG = {
  bangalore: {
    cityId: "bangalore",
    state: "Karnataka",
    lang: "kn",
    script: "ಕನ್ನಡ",
    bannerFront: "ಕನ್ನಡವೇ ಸತ್ಯ",
    bannerRear: "ಜೈ ಕರ್ನಾಟಕ ಮಾತೆ",
    autoName: "ನಮ್ಮ ಬೆಂಗಳೂರು ಆಟೋ",
    meterLabel: "ದರ ಮೀಟರ್",
    currency: "₹",
    plate: "KA 01 E 4290",
    baseFare: 30.00,       // Bengaluru standard base fare is ₹30.00
    baseKm: 1.8,
    ratePerKm: 15.00,      // ₹15 per km after base distance
    canopyColor: 0xfacc15, // Bright Karnataka yellow canopy
    bodyColor: 0x15803d,   // Classic Bangalore forest green body
    roofTrim: 0xfacc15,
    policeName: "ಬೆಂಗಳೂರು ಟ್ರಾಫಿಕ್ ಪೊಲೀಸ್",
    policeAlerts: [
      { text: "ನಿಲ್ಲಿಸು ಆಟೋ ನಿಲ್ಲಿಸu! ಬದಿಗೆ ಹಾಕು!", en: "STOP THE AUTO! PULL OVER TO THE SIDE!" },
      { text: "ಬೆಂಗಳೂರು ಪೊಲೀಸ್! ಗಾಡಿ ನಿಲ್ಲಿಸು!", en: "BENGALURU POLICE! STOP THE VEHICLE!" },
      { text: "ಮೀಟರ್ ಹಾಕಿ ಗಾಡಿ ಓಡಿಸು! ಎಲ್ಲಿಗೆ ಓಡ್ತೀಯಾ?!", en: "DRIVE BY METER! WHERE ARE YOU RUNNING?!" },
      { text: "ಟ್ರಾಫಿಕ್ ನಿಯಮ ಉಲ್ಲಂಘನೆ! ದಂಡ ಕಟ್ಟು!", en: "TRAFFIC VIOLATION! PULL OVER NOW!" }
    ]
  },
  bengaluru: {
    cityId: "bangalore",
    state: "Karnataka",
    lang: "kn",
    script: "ಕನ್ನಡ",
    bannerFront: "ಕನ್ನಡವೇ ಸತ್ಯ",
    bannerRear: "ಜೈ ಕರ್ನಾಟಕ ಮಾತೆ",
    autoName: "ನಮ್ಮ ಬೆಂಗಳೂರು ಆಟೋ",
    meterLabel: "ದರ ಮೀಟರ್",
    currency: "₹",
    plate: "KA 01 E 4290",
    baseFare: 30.00,
    baseKm: 1.8,
    ratePerKm: 15.00,
    canopyColor: 0xfacc15,
    bodyColor: 0x15803d,
    roofTrim: 0xfacc15,
    policeName: "ಬೆಂಗಳೂರು ಟ್ರಾಫಿಕ್ ಪೊಲೀಸ್",
    policeAlerts: [
      { text: "ನಿಲ್ಲಿಸು ಆಟೋ ನಿಲ್ಲಿಸು! ಬದಿಗೆ ಹಾಕು!", en: "STOP THE AUTO! PULL OVER TO THE SIDE!" },
      { text: "ಬೆಂಗಳೂರು ಪೊಲೀಸ್! ಗಾಡಿ ನಿಲ್ಲಿಸು!", en: "BENGALURU POLICE! STOP THE VEHICLE!" },
      { text: "ಮೀಟರ್ ಹಾಕಿ ಗಾಡಿ ಓಡಿಸು! ಎಲ್ಲಿಗೆ ಓಡ್ತೀಯಾ?!", en: "DRIVE BY METER! WHERE ARE YOU RUNNING?!" },
      { text: "ಟ್ರಾಫಿಕ್ ನಿಯಮ ಉಲ್ಲಂಘನೆ! ದಂಡ ಕಟ್ಟು!", en: "TRAFFIC VIOLATION! PULL OVER NOW!" }
    ]
  },
  mumbai: {
    cityId: "mumbai",
    state: "Maharashtra",
    lang: "mr",
    script: "मराठी",
    bannerFront: "जय महाराष्ट्र",
    bannerRear: "आईचा आशीर्वाद",
    autoName: "मुंबई ऑटो रिक्षा",
    meterLabel: "मीटर भाडे",
    currency: "₹",
    plate: "MH 01 AB 3412",
    baseFare: 23.00,       // Mumbai base fare ₹23.00
    baseKm: 1.5,
    ratePerKm: 15.33,
    canopyColor: 0xf7b32b,
    bodyColor: 0x231a26,   // Black lower body
    roofTrim: 0xf7b32b,
    policeName: "मुंबई वाहतूक पोलीस",
    policeAlerts: [
      { text: "थांब गाडी बाजूला घे!", en: "STOP, PULL THE VEHICLE TO THE SIDE!" },
      { text: "मुंबई पोलीस आहे! गाडी थांबव!", en: "MUMBAI POLICE! STOP THE AUTO!" },
      { text: "कुठे पळतोस?! गाडी थांबव!", en: "WHERE ARE YOU RUNNING?! STOP THE AUTO!" }
    ]
  },
  delhi: {
    cityId: "delhi",
    state: "Delhi",
    lang: "hi",
    script: "हिन्दी",
    bannerFront: "मेरा भारत महान",
    bannerRear: "दिल्ली दिलवालों की",
    autoName: "दिल्ली सीएनजी ऑटो",
    meterLabel: "किराया मीटर",
    currency: "₹",
    plate: "DL 1R Q 9821",
    baseFare: 30.00,
    baseKm: 1.5,
    ratePerKm: 11.00,
    canopyColor: 0xfacc15,
    bodyColor: 0x15803d,   // Green CNG body
    roofTrim: 0xfacc15,
    policeName: "दिल्ली ट्रैफिक पुलिस",
    policeAlerts: [
      { text: "गाड़ी रोक! साइड में लगा!", en: "STOP VEHICLE! PULL OVER TO SIDE!" },
      { text: "दिल्ली पुलिस! तुरंत रुक जाओ!", en: "DELHI POLICE! STOP IMMEDIATELY!" },
      { text: "कहाँ भाग रहा है?! चालान कटेगा!", en: "WHERE RUNNING?! YOU WILL GET A CHALLAN!" }
    ]
  },
  lucknow: {
    cityId: "lucknow",
    state: "Uttar Pradesh",
    lang: "ur",
    script: "अवधी / اردو",
    bannerFront: "मुस्कुराइए आप लखनऊ में हैं",
    bannerRear: "नवाब ऑटो • तहज़ीब",
    autoName: "लखनऊ नवाब ऑटो",
    meterLabel: "किराया मीटर",
    currency: "₹",
    plate: "UP 32 BK 7714",
    baseFare: 25.00,
    baseKm: 1.5,
    ratePerKm: 12.00,
    canopyColor: 0xf7b32b,
    bodyColor: 0x1b4d3e,
    roofTrim: 0xf7b32b,
    policeName: "यूपी ट्रैफिक पुलिस",
    policeAlerts: [
      { text: "जनाब गाड़ी रोकिए! बाएँ लगाइए!", en: "GENTLEMAN STOP VEHICLE! PULL TO THE LEFT!" },
      { text: "लखनऊ पुलिस! गाड़ी तुरंत रोकें!", en: "LUCKNOW POLICE! STOP THE AUTO NOW!" }
    ]
  },
  kolkata: {
    cityId: "kolkata",
    state: "West Bengal",
    lang: "bn",
    script: "বাংলা",
    bannerFront: "জয় বাংলা",
    bannerRear: "কলকাতা সিটি অটো",
    autoName: "কলকাতা মেট্রো অটো",
    meterLabel: "মিটার ভাড়া",
    currency: "₹",
    plate: "WB 02 T 6620",
    baseFare: 25.00,
    baseKm: 2.0,
    ratePerKm: 12.50,
    canopyColor: 0xf7b32b,
    bodyColor: 0x231a26,
    roofTrim: 0xf7b32b,
    policeName: "কলকাতা ট্রাফিক পুলিশ",
    policeAlerts: [
      { text: "গাড়ি থামাও! সাইডে রাখো!", en: "STOP THE AUTO! PULL OVER TO SIDE!" },
      { text: "কলকাতা পুলিশ! দাঁড়াও বলছি!", en: "KOLKATA POLICE! STOP I SAY!" }
    ]
  },
  chennai: {
    cityId: "chennai",
    state: "Tamil Nadu",
    lang: "ta",
    script: "தமிழ்",
    bannerFront: "தமிழ் வாழ்க",
    bannerRear: "சென்னை ஆட்டோ",
    autoName: "சென்னை மெட்ராಸ್ ஆட்டோ",
    meterLabel: "மீட்டர் கட்டணம்",
    currency: "₹",
    plate: "TN 01 AK 8840",
    baseFare: 30.00,
    baseKm: 1.8,
    ratePerKm: 15.00,
    canopyColor: 0xfacc15,
    bodyColor: 0x1a1a1a,
    roofTrim: 0xfacc15,
    policeName: "சென்னை போக்குவரத்து காவல்துறை",
    policeAlerts: [
      { text: "வண்டியை நிறுத்து! ஓரமா போடு!", en: "STOP VEHICLE! PULL OVER TO SIDE!" },
      { text: "சென்னை போலீஸ்! நில்லு!", en: "CHENNAI POLICE! STOP THERE!" }
    ]
  },
  hyderabad: {
    cityId: "hyderabad",
    state: "Telangana",
    lang: "te",
    script: "తెలుగు",
    bannerFront: "జై తెలంగాణ",
    bannerRear: "భాగ్యనగరం ఆటో",
    autoName: "హైదరాబాద్ ఆటో",
    meterLabel: "మీటర్ కిరాయి",
    currency: "₹",
    plate: "TS 09 UA 5519",
    baseFare: 30.00,
    baseKm: 1.6,
    ratePerKm: 15.00,
    canopyColor: 0xf7b32b,
    bodyColor: 0x231a26,
    roofTrim: 0xf7b32b,
    policeName: "హైదరాబాద్ ట్రాಫಿಕ್ పోలీస్",
    policeAlerts: [
      { text: "గాడి ఆపు! సైడ్ తీయి!", en: "STOP VEHICLE! PULL OVER TO THE SIDE!" },
      { text: "పోలీస్! రుకో బోల్ రే!", en: "POLICE! WE SAID STOP!" }
    ]
  },
  ahmedabad: {
    cityId: "ahmedabad",
    state: "Gujarat",
    lang: "gu",
    script: "ગુજરાતી",
    bannerFront: "જય શ્રી કૃષ્ણ",
    bannerRear: "અમદાવાદ ઓટો",
    autoName: "અમદાવાદ સીએનજી ઓટો",
    meterLabel: "મીટર ભાડું",
    currency: "₹",
    plate: "GJ 01 AR 7823",
    baseFare: 25.00,
    baseKm: 1.5,
    ratePerKm: 13.00,
    canopyColor: 0xfacc15,
    bodyColor: 0x15803d,
    roofTrim: 0xfacc15,
    policeName: "અમદાવાદ ટ્રાફિક પોલીસ",
    policeAlerts: [
      { text: "ગાડી ઊભી રાખ! સાઇડમાં લે!", en: "STOP THE AUTO! PULL OVER TO SIDE!" },
      { text: "પોલીસ છે, ઊભો રહે!", en: "IT'S POLICE, STOP THERE!" }
    ]
  }
};

export class AutoSystem {
  constructor() {
    this.ctx = null;
    this.player = null;
    this.scene = null;
    this.currentCity = "bangalore";
    this.cfg = CITY_AUTO_CONFIG.bangalore;

    // Vehicle State
    this.auto = {
      mesh: null,
      x: 0,
      y: 0,
      z: 0,
      yaw: 0,
      pitch: 0,
      roll: 0,
      v: 0,
      steer: 0,
      yawRate: 0,
      bob: 0,
      shown: false,
      riding: false,
      tripDistanceKm: 0,
      currentFare: 30.00
    };

    // Police Chase State
    this.police = {
      active: false,
      sirenTimer: 0,
      lastAlertTime: 0,
      strobeEl: null
    };

    // Particles & VFX
    this.particles = [];
    this.hitCooldowns = new WeakMap();

    this.init();
  }

  init() {
    this.createDomElements();
    this.bindKeyboardShortcuts();
    this.waitForGameContext();
  }

  getCityConfig() {
    const raw = (window.__ctx?.id || new URLSearchParams(location.search).get("city") || "bangalore").toLowerCase();
    const clean = raw === "bengaluru" ? "bangalore" : (raw === "bombay" ? "mumbai" : raw);
    return CITY_AUTO_CONFIG[clean] || CITY_AUTO_CONFIG.bangalore;
  }

  createDomElements() {
    // 1. Digital Auto Meter HUD
    if (!document.getElementById("auto-meter-hud")) {
      const meter = document.createElement("div");
      meter.id = "auto-meter-hud";
      meter.className = "auto-meter-hud";
      meter.hidden = true;
      meter.innerHTML = `
        <div class="meter-panel">
          <div class="meter-header">
            <span class="meter-city-badge" id="meter-city-badge">ಬೆಂಗಳೂರು ಆಟೋ</span>
            <span class="meter-title" id="meter-title">ದರ ಮೀಟರ್</span>
          </div>
          <div class="meter-fare-box">
            <span class="currency-symbol">₹</span>
            <span id="meter-fare-val" class="meter-fare-digit">30.00</span>
          </div>
          <div class="meter-stats">
            <div class="stat-col">
              <span class="stat-lbl">TRIP</span>
              <span id="meter-dist-val" class="stat-val">0.0 KM</span>
            </div>
            <div class="stat-col">
              <span class="stat-lbl">SPEED</span>
              <span id="meter-speed-val" class="stat-val">0 KM/H</span>
            </div>
          </div>
        </div>
      `;
      document.body.appendChild(meter);
    }

    // 2. Police Strobe Warning Overlay
    if (!document.getElementById("police-strobe")) {
      const strobe = document.createElement("div");
      strobe.id = "police-strobe";
      strobe.className = "police-strobe";
      strobe.hidden = true;
      document.body.appendChild(strobe);
      this.police.strobeEl = strobe;
    }

    // 3. Impact Flash
    if (!document.getElementById("blood-flash")) {
      const flash = document.createElement("div");
      flash.id = "blood-flash";
      document.body.appendChild(flash);
    }
  }

  bindKeyboardShortcuts() {
    window.addEventListener("keydown", (e) => {
      if (e.repeat || !this.ctx || !this.player || this.player.orbit?.target > 0.5) return;

      // KeyV: Summon or dismiss the Auto Rickshaw
      if (e.code === "KeyV") {
        this.handleSummonKey();
      }

      // KeyE: Get in or get out of the Auto Rickshaw
      if (e.code === "KeyE") {
        this.handleInteractKey();
      }

      // KeyH or Space: Honk horn while inside auto
      if ((e.code === "KeyH" || e.code === "Space") && this.auto.riding) {
        this.honkAuto();
      }
    });
  }

  waitForGameContext() {
    const check = () => {
      if (window.__ctx && window.__ctx.player && window.__api) {
        this.ctx = window.__ctx;
        this.player = window.__ctx.player;
        this.scene = window.__api.post?.scene || window.__ctx.scene;
        this.cfg = this.getCityConfig();

        this.buildAutoRickshawMesh();
        this.ctx.vehicles = this.ctx.vehicles || {};
        this.ctx.vehicles.auto = this.auto;

        this.startLoop();
      } else {
        setTimeout(check, 250);
      }
    };
    check();
  }

  makeBannerTexture(text, subtext, bg = "#1b4d3e", fg = "#fef08a") {
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 128;
    const g = canvas.getContext("2d");
    g.fillStyle = bg;
    g.fillRect(0, 0, 512, 128);
    g.strokeStyle = fg;
    g.lineWidth = 4;
    g.strokeRect(4, 4, 504, 120);

    g.fillStyle = fg;
    g.textAlign = "center";
    g.textBaseline = "middle";
    g.font = "bold 44px 'Baloo 2', 'Noto Sans Kannada', Mukta, system-ui, sans-serif";
    g.fillText(text, 256, 52);

    if (subtext) {
      g.fillStyle = "#ffffff";
      g.font = "bold 26px Mukta, system-ui, sans-serif";
      g.fillText(subtext, 256, 96);
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.needsUpdate = true;
    return tex;
  }

  buildAutoRickshawMesh() {
    if (this.auto.mesh && this.auto.mesh.parent) {
      this.auto.mesh.parent.remove(this.auto.mesh);
    }

    this.cfg = this.getCityConfig();
    const cfg = this.cfg;
    const autoGroup = new THREE.Group();
    autoGroup.name = "AutoRickshaw";

    // Palette calibrated per city
    const matCanopy = new THREE.MeshBasicMaterial({ color: cfg.canopyColor });
    const matBody = new THREE.MeshBasicMaterial({ color: cfg.bodyColor });
    const matBlack = new THREE.MeshBasicMaterial({ color: 0x231a26 });
    const matChrome = new THREE.MeshBasicMaterial({ color: 0xd4d4d8 });
    const matLight = new THREE.MeshBasicMaterial({ color: 0xfef08a });
    const matRed = new THREE.MeshBasicMaterial({ color: 0xdc2626 });
    const matGlass = new THREE.MeshBasicMaterial({ color: 0x60a5fa, transparent: true, opacity: 0.45 });

    // 1. Lower Body / Chassis
    const lowerBody = new THREE.Mesh(new THREE.BoxGeometry(1.36, 0.45, 2.5), matBody);
    lowerBody.position.set(0, 0.45, 0);
    autoGroup.add(lowerBody);

    // 2. Upper Cowl Hood
    const upperCowl = new THREE.Mesh(new THREE.BoxGeometry(1.32, 0.52, 1.2), matCanopy);
    upperCowl.position.set(0, 0.85, 0.55);
    autoGroup.add(upperCowl);

    // 3. Canopy Roof
    const roof = new THREE.Mesh(new THREE.BoxGeometry(1.34, 0.08, 1.95), matCanopy);
    roof.position.set(0, 1.76, -0.15);
    autoGroup.add(roof);

    // Roof Pillars
    const pillarGeom = new THREE.BoxGeometry(0.04, 0.85, 0.04);
    [-0.62, 0.62].forEach((px) => {
      [0.65, -0.3, -1.05].forEach((pz) => {
        const pillar = new THREE.Mesh(pillarGeom, matChrome);
        pillar.position.set(px, 1.3, pz);
        autoGroup.add(pillar);
      });
    });

    // 4. Windshield Glass & Native Banners
    const windshield = new THREE.Mesh(new THREE.BoxGeometry(1.24, 0.55, 0.04), matGlass);
    windshield.position.set(0, 1.38, 0.66);
    autoGroup.add(windshield);

    // Front Windshield City Banner (e.g. Kannada "ಕನ್ನಡವೇ ಸತ್ಯ" for Bengaluru)
    const bannerTexFront = this.makeBannerTexture(cfg.bannerFront, cfg.plate, "#1b4d3e", "#fef08a");
    const bannerMatFront = new THREE.MeshBasicMaterial({ map: bannerTexFront, transparent: true });
    const bannerMeshFront = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 0.28), bannerMatFront);
    bannerMeshFront.position.set(0, 1.62, 0.68);
    autoGroup.add(bannerMeshFront);

    // Rear Windshield Banner (e.g. "ಜೈ ಕರ್ನಾಟಕ ಮಾತೆ")
    const bannerTexRear = this.makeBannerTexture(cfg.bannerRear, cfg.autoName, "#231a26", "#facc15");
    const bannerMatRear = new THREE.MeshBasicMaterial({ map: bannerTexRear, transparent: true });
    const bannerMeshRear = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 0.3), bannerMatRear);
    bannerMeshRear.position.set(0, 1.58, -1.08);
    bannerMeshRear.rotation.y = Math.PI;
    autoGroup.add(bannerMeshRear);

    // 5. Wheels
    const frontWheel = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.24, 0.16, 12), matBlack);
    frontWheel.rotation.z = Math.PI / 2;
    frontWheel.position.set(0, 0.24, 1.05);
    autoGroup.add(frontWheel);

    [-0.65, 0.65].forEach((wx) => {
      const rearWheel = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.25, 0.18, 12), matBlack);
      rearWheel.rotation.z = Math.PI / 2;
      rearWheel.position.set(wx, 0.25, -0.65);
      autoGroup.add(rearWheel);
    });

    // 6. Headlight & Taillights
    const headlight = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.08, 12), matLight);
    headlight.rotation.x = Math.PI / 2;
    headlight.position.set(0, 0.85, 1.18);
    autoGroup.add(headlight);

    [-0.56, 0.56].forEach((tx) => {
      const tail = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.08, 0.04), matRed);
      tail.position.set(tx, 0.58, -1.26);
      autoGroup.add(tail);
    });

    // 7. Handlebars & Fare Meter (Mounted on driver console)
    const handleBar = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.04, 0.04), matChrome);
    handleBar.position.set(0, 1.04, 0.58);
    autoGroup.add(handleBar);

    const meter = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.14, 0.08), matBlack);
    meter.position.set(0.25, 1.1, 0.62);
    autoGroup.add(meter);

    autoGroup.visible = false;
    if (this.ctx?.chunks?.near) {
      this.ctx.chunks.near.add(autoGroup);
    } else if (this.scene) {
      this.scene.add(autoGroup);
    }
    this.auto.mesh = autoGroup;
  }

  handleSummonKey() {
    this.cfg = this.getCityConfig();
    const p = this.player;
    if (!p) return;

    if (!this.auto.shown) {
      // Spawn auto in front of player on the road
      const spawnDist = 4.2;
      const ax = wrapX(p.x + Math.sin(p.yaw) * spawnDist);
      const az = p.z + Math.cos(p.yaw) * spawnDist;

      this.auto.x = ax;
      this.auto.z = az;
      this.auto.y = p.y;
      this.auto.yaw = p.yaw;
      this.auto.v = 0;
      this.auto.steer = 0;
      this.auto.tripDistanceKm = 0;
      this.auto.currentFare = this.cfg.baseFare;

      this.auto.mesh.visible = true;
      this.auto.shown = true;

      this.ctx.say?.(`🛺 ${this.cfg.autoName} summoned! · Walk up and press [E] to drive`);
      this.ctx.toast?.(this.cfg.bannerFront, `SUMMONED ${this.cfg.autoName.toUpperCase()}`);
      this.ctx.audio?.play?.("bell", { volume: 0.6 });
    } else if (!this.auto.riding) {
      // Dismiss auto
      this.auto.mesh.visible = false;
      this.auto.shown = false;
      this.ctx.say?.("🛺 Auto Rickshaw dismissed");
    }
  }

  handleInteractKey() {
    if (!this.auto.shown) return;

    if (this.auto.riding) {
      // Exit auto
      this.auto.riding = false;
      this.player.mode = "walk";

      // Step out to the side
      const exitDist = 1.6;
      this.player.x = wrapX(this.auto.x + Math.cos(this.auto.yaw) * exitDist);
      this.player.z = this.auto.z - Math.sin(this.auto.yaw) * exitDist;
      this.player.y = this.auto.y;

      const meterEl = document.getElementById("auto-meter-hud");
      if (meterEl) meterEl.hidden = true;
      if (this.police.strobeEl) this.police.strobeEl.hidden = true;

      this.ctx.say?.(`Stepped out · Total Fare: ₹${this.auto.currentFare.toFixed(2)} (${this.auto.tripDistanceKm.toFixed(1)} km)`);
      this.ctx.toast?.(`ಒಟ್ಟು ದರ: ₹${this.auto.currentFare.toFixed(2)}`, `TOTAL FARE: ₹${this.auto.currentFare.toFixed(2)}`);
      this.ctx.audio?.play?.("doorChime", { volume: 0.7 });
    } else {
      // Check proximity to enter
      const dx = wrapX(this.player.x - this.auto.x);
      const dz = this.player.z - this.auto.z;
      const dist = Math.hypot(dx, dz);

      if (dist < 3.8) {
        this.cfg = this.getCityConfig();
        this.auto.riding = true;
        this.auto.tripDistanceKm = 0;
        this.auto.currentFare = this.cfg.baseFare;

        this.updateMeterHUD(0, 0);
        const meterEl = document.getElementById("auto-meter-hud");
        if (meterEl) meterEl.hidden = false;

        this.ctx.say?.(`🛺 Driving ${this.cfg.autoName} · Base Fare: ₹${this.cfg.baseFare.toFixed(2)} · WASD to drive · E to exit · H horn`);
        this.ctx.toast?.(this.cfg.bannerFront, `INSIDE ${this.cfg.autoName.toUpperCase()}`);
        this.ctx.audio?.play?.("shutter", { volume: 0.8 });
      }
    }
  }

  honkAuto() {
    this.ctx?.audio?.play?.("autoHorn", { volume: 0.9 });
    const prompt = document.getElementById("prompt");
    if (prompt) {
      prompt.textContent = "🔊 PEEEP PEEEP!";
      setTimeout(() => { if (prompt.textContent === "🔊 PEEEP PEEEP!") prompt.textContent = ""; }, 500);
    }
  }

  updateMeterHUD(speedKmh, dt) {
    if (!this.auto.riding) return;

    // Accumulate distance based on speed
    const distDeltaKm = (Math.abs(this.auto.v) * dt) / 250; // Calibrated game-to-km scale
    this.auto.tripDistanceKm += distDeltaKm;

    // Dynamically increase fare as auto moves!
    if (this.auto.tripDistanceKm > this.cfg.baseKm) {
      const extraKm = this.auto.tripDistanceKm - this.cfg.baseKm;
      this.auto.currentFare = this.cfg.baseFare + extraKm * this.cfg.ratePerKm;
    } else {
      this.auto.currentFare = this.cfg.baseFare;
    }

    const badgeEl = document.getElementById("meter-city-badge");
    const titleEl = document.getElementById("meter-title");
    const fareEl = document.getElementById("meter-fare-val");
    const distEl = document.getElementById("meter-dist-val");
    const speedEl = document.getElementById("meter-speed-val");

    if (badgeEl) badgeEl.textContent = this.cfg.autoName;
    if (titleEl) titleEl.textContent = this.cfg.meterLabel;
    if (fareEl) fareEl.textContent = this.auto.currentFare.toFixed(2);
    if (distEl) distEl.textContent = `${this.auto.tripDistanceKm.toFixed(1)} KM`;
    if (speedEl) speedEl.textContent = `${Math.round(speedKmh)} KM/H`;
  }

  triggerPolicePursuit() {
    const now = performance.now();
    if (now - this.police.lastAlertTime < 7000) return; // 7s cooldown between police shouts
    this.police.lastAlertTime = now;
    this.police.active = true;

    // Select city-specific police alert
    const alerts = this.cfg.policeAlerts || [];
    if (!alerts.length) return;
    const alert = alerts[Math.floor(Math.random() * alerts.length)];

    // Play siren sound
    this.ctx?.audio?.play?.("siren", { volume: 0.95 });

    // Show city-specific police dialogue in local language!
    this.ctx?.talk?.(this.cfg.policeName, alert.text, alert.en);
    this.ctx?.toast?.(alert.text, `POLICE PURSUIT · ${alert.en}`);

    // Flash police strobe overlay
    if (this.police.strobeEl) {
      this.police.strobeEl.hidden = false;
      this.police.strobeEl.classList.add("active");
      setTimeout(() => {
        if (this.police.strobeEl) {
          this.police.strobeEl.classList.remove("active");
          this.police.strobeEl.hidden = true;
        }
      }, 4000);
    }
  }

  startLoop() {
    let lastTime = performance.now();

    const loop = () => {
      const now = performance.now();
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      this.update(dt);
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }

  update(dt) {
    if (!this.auto.shown || !this.auto.mesh) return;

    if (this.auto.riding) {
      this.updateDrivingPhysics(dt);
    } else {
      this.checkPlayerProximity();
    }
  }

  checkPlayerProximity() {
    const dx = wrapX(this.player.x - this.auto.x);
    const dz = this.player.z - this.auto.z;
    const dist = Math.hypot(dx, dz);

    const prompt = document.getElementById("prompt");
    if (dist < 3.8) {
      if (prompt && !prompt.textContent) {
        prompt.innerHTML = `<b>E</b> · Enter ${this.cfg.autoName}`;
      }
    } else if (prompt && prompt.textContent.includes("Enter")) {
      prompt.textContent = "";
    }
  }

  updateDrivingPhysics(dt) {
    const p = this.player;
    if (!p) return;

    const keys = p.keys || new Set();
    const forward = keys.has("KeyW") || keys.has("ArrowUp") ? 1 : 0;
    const backward = keys.has("KeyS") || keys.has("ArrowDown") ? 1 : 0;
    const left = keys.has("KeyA") || keys.has("ArrowLeft") ? 1 : 0;
    const right = keys.has("KeyD") || keys.has("ArrowRight") ? 1 : 0;
    const drift = keys.has("Space") ? 1 : 0;

    const accel = 18.0;
    const maxSpeed = drift ? 32.0 : 25.0; // Speedy auto!
    const drag = 3.5;
    const steerSpeed = 2.4;

    // Throttle & Braking
    if (forward) {
      this.auto.v = Math.min(maxSpeed, this.auto.v + accel * dt);
    } else if (backward) {
      this.auto.v = Math.max(-10.0, this.auto.v - accel * 0.8 * dt);
    } else {
      // Natural rolling friction
      if (this.auto.v > 0) this.auto.v = Math.max(0, this.auto.v - drag * dt);
      else if (this.auto.v < 0) this.auto.v = Math.min(0, this.auto.v + drag * dt);
    }

    if (drift) {
      this.auto.v *= Math.max(0, 1 - 2.5 * dt);
    }

    // Steering
    const steerInput = (left ? 1 : 0) - (right ? 1 : 0);
    this.auto.steer += (steerInput - this.auto.steer) * Math.min(1, dt * 8);

    if (Math.abs(this.auto.v) > 0.1) {
      const turnMult = this.auto.v > 0 ? 1 : -1;
      const driftMult = drift ? 1.6 : 1.0;
      this.auto.yaw += this.auto.steer * steerSpeed * turnMult * driftMult * dt;
    }

    // Planetary coordinate wrap
    const speedKmh = Math.abs(this.auto.v) * 3.6;
    const fwdX = Math.sin(this.auto.yaw);
    const fwdZ = Math.cos(this.auto.yaw);

    this.auto.x = wrapX(this.auto.x + fwdX * this.auto.v * dt);
    this.auto.z = this.auto.z + fwdZ * this.auto.v * dt;

    // Ground height from physics
    if (this.ctx.physics?.groundAt) {
      this.auto.y = this.ctx.physics.groundAt(this.auto.x, this.auto.z, this.auto.y);
    }

    // Body roll and suspension bob
    this.auto.roll += (-this.auto.steer * (this.auto.v / maxSpeed) * 0.18 - this.auto.roll) * Math.min(1, dt * 10);
    this.auto.bob += this.auto.v * dt * 8;
    const bobOffset = Math.sin(this.auto.bob) * 0.012;

    // Update 3D Mesh
    this.auto.mesh.position.set(this.auto.x, this.auto.y + bobOffset, this.auto.z);
    this.auto.mesh.rotation.set(0, this.auto.yaw, this.auto.roll, "YXZ");

    // Sync Player Camera to Driver Cockpit View
    p.x = this.auto.x;
    p.z = this.auto.z;
    p.y = this.auto.y;
    p.yaw = this.auto.yaw;

    // Update Digital Fare Meter HUD
    this.updateMeterHUD(speedKmh, dt);

    // Audio Engine Sound modulation
    if (this.ctx.audio?.setEngine) {
      this.ctx.audio.setEngine(Math.abs(this.auto.v) / maxSpeed);
    }

    // High Speed Police Pursuit Trigger (Over speeding > 42 km/h)
    if (speedKmh > 42.0) {
      this.triggerPolicePursuit();
    }

    // Check Pedestrian Collisions & Trigger Police Chase
    this.checkPedestrianCollisions();
  }

  checkPedestrianCollisions() {
    const people = this.ctx.people?.people;
    if (!people || !people.length) return;

    const px = this.auto.x;
    const pz = this.auto.z;
    const py = this.auto.y;
    const now = performance.now();
    const hitRadius = 2.4;

    for (let i = 0; i < people.length; i++) {
      const person = people[i];
      if (person.hidden) continue;

      const lastHit = this.hitCooldowns.get(person) || 0;
      if (now - lastHit < 2500) continue;

      const dx = wrapX(person.x - px);
      const dz = person.z - pz;
      const dist = Math.hypot(dx, dz);

      if (dist < hitRadius && Math.abs(person.y - py) < 2.2) {
        this.hitCooldowns.set(person, now);

        // Knockback pedestrian
        const angle = Math.atan2(dx, dz);
        person.x = wrapX(person.x + Math.sin(angle) * 4.2);
        person.z = person.z + Math.cos(angle) * 4.2;
        person.yaw = angle + Math.PI;

        // Blood flash & popup
        const flash = document.getElementById("blood-flash");
        if (flash) {
          flash.classList.add("active");
          setTimeout(() => flash.classList.remove("active"), 280);
        }

        this.honkAuto();
        this.triggerPolicePursuit();
        break;
      }
    }
  }
}

export function initAutoSystem() {
  if (window.__autoSystem) return;
  window.__autoSystem = new AutoSystem();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initAutoSystem);
} else {
  initAutoSystem();
}
