/**
 * Courier City — Lucknow (लखनऊ)
 * Royal Awadhi Architecture, Hazratganj Heritage Colonnades, Charbagh Junction,
 * Gomti Riverfront Promenade, and Rumi Darwaza & Bada Imambara.
 */

import {
  w as wrapX,
  v as rng,
  a0 as pick,
  ae as colTint,
  af as Ts,
  ag as makeTexture,
  ah as drawText,
  ai as fontStyles
} from "./preload-helper-CCnR14CO.js";

import {
  c as makeAuto,
  b as makeBus,
  s as makeScooter,
  a as makeTempo,
  h as makeCar
} from "./vehicles-models-4uC7lOzT.js";

import { b as buildTerrain } from "./ground-VheAI4Mv.js";

// Planet circumference (~1507.96)
const LT = 2 * Math.PI * 240;

function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v));
}

function smoothstep(min, max, v) {
  const t = clamp((v - min) / (max - min), 0, 1);
  return t * t * (3 - 2 * t);
}

// -------------------------------------------------------------
// 1. Palette & Colors
// -------------------------------------------------------------
const C = {
  // Nawabi Architecture
  cream: 0xf6eedb,
  creamDark: 0xe8dcbe,
  terracotta: 0xb84432,
  redBrick: 0x963224,
  sandstone: 0xd8be9b,
  sandstoneDark: 0xb59c7a,
  whitePlaster: 0xfdfaf5,
  domeGold: 0xd4af37,
  domeTeal: 0x2e6a55,
  darkTeak: 0x4a2e1b,
  ironBlack: 0x242426,
  jaliCream: 0xf2ebdc,

  // Roads & Ground
  asphalt: 0x5a5652,
  asphaltDark: 0x45423f,
  laneYellow: 0xf5b82e,
  laneWhite: 0xf2f0eb,
  kerbStone: 0xd5cebf,
  kerbDark: 0x2d2b29,
  soilAwadh: 0xbfa37a,
  soilDark: 0x8a7252,
  riverbed: 0x5a6d65,
  riverSilt: 0x7c7362,
  promenadePaving: 0xded6c5,
  lawnGreen: 0x487a42,
  lawnDark: 0x355e30,

  // Foliage
  gulmoharRed: 0xe84a2a,
  gulmoharOrange: 0xf27622,
  amaltasYellow: 0xf5cc25,
  leafGreen: 0x528746,
  leafDark: 0x38612f,
  barkBrown: 0x5a4231,

  // Accents & Lighting
  glowSodium: 0xffa433,
  glowWarm: 0xffdf88,
  glowNeon: 0xff3860,
  glowGreen: 0x38e588
};

// -------------------------------------------------------------
// 2. Texture & Signboard Helpers
// -------------------------------------------------------------
const signCache = new Map();

function getSignTexture(key, width, height, drawFn) {
  if (!signCache.has(key)) {
    signCache.set(key, makeTexture(width, height, drawFn));
  }
  return signCache.get(key);
}

function makePlate(reg) {
  return getSignTexture("up32_" + reg, 220, 48, (ctx, w, h) => {
    ctx.fillStyle = "#f6f2ea";
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = "#161616";
    ctx.lineWidth = 3;
    ctx.strokeRect(2, 2, w - 4, h - 4);
    drawText(ctx, reg, w / 2, h / 2 + 2, fontStyles.cond, 38, "#161616", w * 0.9, "600");
  });
}

const UP32_PLATES = [
  "UP 32 BN 1856",
  "UP 32 CK 2409",
  "UP 32 DK 8810",
  "UP 32 ER 3317",
  "UP 32 FZ 1157",
  "UP 32 GM 6002"
];

function makeShopSign(nameHi, nameEn, bg = "#1a2a40", fg = "#f8d888") {
  return getSignTexture("shop_" + nameEn, 420, 110, (ctx, w, h) => {
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = fg;
    ctx.lineWidth = 4;
    ctx.strokeRect(4, 4, w - 8, h - 8);

    drawText(ctx, nameHi, w / 2, h * 0.38, fontStyles.paint || fontStyles.cond, 40, fg, w * 0.9, "700");
    drawText(ctx, nameEn, w / 2, h * 0.78, fontStyles.cond, 28, "#ffffff", w * 0.88, "600");
  });
}

// -------------------------------------------------------------
// 3. Terrain & River Gomti Elevation
// -------------------------------------------------------------
const GOMTI_WATER_Y = -1.0;

function gomtiRiverZ(x) {
  return -46 + Math.sin(x * 0.007) * 16 + Math.sin(x * 0.02) * 5;
}

function terrainH(x, z) {
  const wx = wrapX(x);
  const rZ = gomtiRiverZ(wx);
  const riverDist = Math.abs(z - rZ);
  const riverHalfW = 20;

  // River Gomti Basin
  if (riverDist < riverHalfW) {
    const normDist = riverDist / riverHalfW;
    return GOMTI_WATER_Y - 0.4 - (1 - normDist * normDist) * 1.8;
  }

  // River Ghats & Embankment
  if (riverDist < riverHalfW + 10) {
    const t = (riverDist - riverHalfW) / 10;
    return -1.0 + t * 1.25;
  }

  // General Plain with subtle Awadh undulation
  const basePlain = 0.25;
  const hillUndulation = (Math.sin(wx * 0.015) + Math.cos(z * 0.02)) * 0.12;

  // Hazratganj Promenade slight rise
  const ganjRise = Math.abs(wx) < 60 && Math.abs(z - 17) < 18 ? 0.2 : 0;

  return basePlain + hillUndulation + ganjRise;
}

function groundColor(x, z, elev, r) {
  const wx = wrapX(x);
  const rZ = gomtiRiverZ(wx);
  const riverDist = Math.abs(z - rZ);

  // Riverbed Underwater
  if (elev < GOMTI_WATER_Y - 0.3) {
    return C.riverbed;
  }

  // Silt on water's edge
  if (elev < GOMTI_WATER_Y + 0.4) {
    return C.riverSilt;
  }

  // Riverfront promenade paved surface
  if (riverDist < 36 && z > rZ) {
    return C.promenadePaving;
  }

  // Main Roads
  const absZ = Math.abs(z);
  if (Math.abs(absZ - 17) < 4.8) {
    return C.asphalt;
  }

  // Gardens (Residency / Stadium)
  if (Math.abs(wx - 251) < 80 && z > 24) {
    return C.lawnGreen;
  }

  // Awadhi Fertile Ground
  return C.soilAwadh;
}

// -------------------------------------------------------------
// 4. Stations along the Lucknow Transit Line
// -------------------------------------------------------------
const stations = [
  { id: "charbagh", x: -502, en: "CHARBAGH", label: "Charbagh Railway Station", hi: "चारबाग़ जंक्शन", ur: "چارباغ جنکشن", code: "LKO" },
  { id: "hussainganj", x: -251, en: "HUSSAINGANJ", label: "Hussainganj", hi: "हुसैनगंज", ur: "حسین گنج", code: "HSGJ" },
  { id: "hazratganj", x: 0, en: "HAZRATGANJ", label: "Hazratganj (The Ganj)", hi: "हज़रतगंज", ur: "حضرت گنج", code: "HZGJ" },
  { id: "kdsingh", x: 251, en: "KD SINGH BABU STADIUM", label: "KD Singh Babu Stadium", hi: "के.डी. सिंह बाबू स्टेडियम", ur: "کے ڈی سنگھ اسٹیڈیم", code: "KDSB" },
  { id: "riverfront", x: 502, en: "GOMTI RIVERFRONT", label: "Gomti Riverfront Promenade", hi: "गोमती रिवरफ़्रंट", ur: "گومتی ریور فرنٹ", code: "GMRF" },
  { id: "rumidarwaza", x: 754, en: "RUMI DARWAZA", label: "Rumi Darwaza & Bada Imambara", hi: "रूमी दरवाज़ा", ur: "رومی دروازہ", code: "RMDA" }
];

// -------------------------------------------------------------
// 5. Zone Resolver
// -------------------------------------------------------------
const zoneCache = {};
const getZone = (deva, latin) => (zoneCache[latin] ||= { deva, latin });

function zoneAt(x, z) {
  const wx = wrapX(x);
  const rZ = gomtiRiverZ(wx);

  if (Math.abs(z - rZ) < 18) {
    return getZone("गोमती नदी और घाट", "GOMTI RIVER & GHATS");
  }

  if (Math.abs(wrapX(wx - (-502))) < 90) {
    return getZone("चारबाग़ रेलवे स्टेशन", "CHARBAGH RAILWAY TERMINUS");
  }
  if (Math.abs(wrapX(wx - (-251))) < 90) {
    return getZone("हुसैनगंज और कैसरबाग़", "HUSSAINGANJ & QAISERBAGH");
  }
  if (Math.abs(wrapX(wx - 0)) < 90) {
    return z > 20
      ? getZone("हज़रतगंज हेरिटेज वॉक", "HAZRATGANJ HERITAGE WALK")
      : getZone("द गंज — रीगल आर्केड", "THE GANJ — REGAL ARCADE");
  }
  if (Math.abs(wrapX(wx - 251)) < 90) {
    return getZone("के.डी. सिंह बाबू स्टेडियम और रेज़िडेंसी", "KD SINGH BABU STADIUM & RESIDENCY");
  }
  if (Math.abs(wrapX(wx - 502))) {
    if (Math.abs(wrapX(wx - 502)) < 90) {
      return getZone("गोमती रिवरफ़्रंट पार्क", "GOMTI RIVERFRONT PROMENADE");
    }
  }
  if (Math.abs(wrapX(wx - 754)) < 90) {
    return z > 22
      ? getZone("चौक और अमीनाबाद बाज़ार", "CHOWK & AMINABAD BAZAAR")
      : getZone("रूमी दरवाज़ा और बड़ा इमामबाड़ा", "RUMI DARWAZA & BADA IMAMBARA");
  }

  return getZone("नवाबी शहर लखनऊ", "NAWABI CITY OF LUCKNOW");
}

// -------------------------------------------------------------
// 6. Realistic 3D Landmark & District Builders
// -------------------------------------------------------------

function buildRoads(b) {
  const L = LT;
  // Southern arterial avenue (z = 17)
  b.box(0, 0.26, 17, L, 0.02, 9.6, C.asphalt, { solid: false, floor: true });
  b.box(0, 0.28, 17, L, 0.01, 0.16, C.laneYellow, { bucket: "noshadow" });
  b.box(0, 0.28, 12.4, L, 0.01, 0.14, C.laneWhite, { bucket: "noshadow" });
  b.box(0, 0.28, 21.6, L, 0.01, 0.14, C.laneWhite, { bucket: "noshadow" });

  // Footpaths along south avenue
  b.box(0, 0.44, 23.2, L, 0.32, 2.8, C.kerbStone, { solid: false, floor: true });
  b.box(0, 0.44, 10.8, L, 0.32, 2.8, C.kerbStone, { solid: false, floor: true });

  // Kerb edge stones
  for (let zSide of [12.2, 21.8]) {
    b.box(0, 0.46, zSide, L, 0.12, 0.24, C.kerbDark);
  }
}

function buildAwadhiChhatri(b, x, y, z, radius = 2.4, height = 4.8, domeCol = C.whitePlaster) {
  b.at(x, z, 0, () => {
    // 8 slender Mughal fluted pillars
    const n = 8;
    for (let i = 0; i < n; i++) {
      const angle = (i / n) * Math.PI * 2;
      const px = Math.cos(angle) * radius;
      const pz = Math.sin(angle) * radius;
      b.cyl(px, y, pz, 0.14, height, C.cream);
      b.solid(px, pz, 0.3, 0.3, 0, y, y + height);
    }
    // Entablature cornice
    b.cyl(0, y + height, 0, radius * 1.15, 0.35, C.terracotta);
    // Scalloped dome roof
    b.put(Ts.dome(14), 0, y + height + 0.35, 0, radius * 2.2, radius * 1.5, radius * 2.2, domeCol);
    // Brass Kalash finial
    b.cyl(0, y + height + 0.35 + radius * 1.5, 0, 0.12, 0.9, C.domeGold);
  });
}

function buildStreetLamp(b, x, z, y = 0.44) {
  b.cyl(x, y, z, 0.08, 4.2, C.ironBlack);
  b.beam([x, y + 4.2, z], [x, y + 4.8, z + 0.6], 0.07, C.ironBlack);
  b.put(Ts.sphere(8, 6), x, y + 4.75, z + 0.6, 0.45, 0.45, 0.45, 0xfff4d0, { glow: C.glowWarm });
}

// -------------------------------------------------------------
// District 1: Charbagh Railway Palace (x = -502)
// -------------------------------------------------------------
function buildCharbagh(b, ctx) {
  const cx = -502;
  const pz = 32;

  b.at(cx, pz, 0, () => {
    // 1. Grand Red-Brick Central Palace Facade
    b.box(0, 0, 0, 68, 13.5, 14, C.redBrick, { solid: true });
    // Cream Stone Trim and Belt Courses
    b.box(0, 4.2, 7.05, 68.2, 0.3, 0.2, C.cream);
    b.box(0, 8.8, 7.05, 68.2, 0.35, 0.2, C.cream);
    b.box(0, 13.5, 0, 69, 0.6, 14.5, C.cream);

    // 2. Central Grand Portico
    b.box(0, 0, 9.5, 24, 11, 6, C.redBrick, { solid: true });
    b.box(0, 11, 9.5, 24.5, 0.5, 6.5, C.cream);

    // Grand Arched Entry Tunnel
    b.box(0, 0, 9.5, 9.2, 6.8, 6.2, 0x1f1916);
    b.floor(0, 9.5, 12, 8, 0, 0.1);

    // 3. Iconic Charbagh Domes & Cupolas
    // Central Monumental Bulbous Dome
    b.cyl(0, 14, 0, 6.2, 1.8, C.whitePlaster);
    b.put(Ts.dome(16), 0, 15.8, 0, 12.8, 8.2, 12.8, C.whitePlaster);
    b.cyl(0, 24, 0, 0.25, 2.2, C.domeGold);

    // Flanking Symmetrical Cupolas (Awadhi chhatris)
    for (let sx of [-28, -14, 14, 28]) {
      buildAwadhiChhatri(b, sx, 13.8, 0, 2.0, 3.4, C.whitePlaster);
    }

    // 4. Clock Tower atop central portico
    b.box(0, 11.5, 9.5, 7.5, 5.5, 5.5, C.redBrick);
    b.cyl(0, 17, 9.5, 3.2, 1.2, C.cream);
    b.put(Ts.dome(12), 0, 18.2, 9.5, 6.4, 4.2, 6.4, C.whitePlaster);

    // Working Railway Clock Face
    b.cyl(0, 14.2, 12.3, 1.35, 0.15, 0xfbfbf8, { rx: Math.PI / 2 });
    b.cyl(0, 14.2, 12.4, 0.12, 0.18, C.ironBlack, { rx: Math.PI / 2 });

    // 5. Station Signboard
    const stationSign = getSignTexture("charbagh_sign", 580, 100, (ctx, w, h) => {
      ctx.fillStyle = "#ffcc00";
      ctx.fillRect(0, 0, w, h);
      ctx.strokeStyle = "#1a1a1a";
      ctx.lineWidth = 4;
      ctx.strokeRect(4, 4, w - 8, h - 8);
      drawText(ctx, "चारबाग़ जंक्शन · LKO · CHARBAGH", w / 2, h * 0.44, fontStyles.cond, 40, "#1a1a1a", w * 0.94, "700");
      drawText(ctx, "NORTHERN RAILWAY · भारतीय रेल", w / 2, h * 0.82, fontStyles.cond, 26, "#8b0000", w * 0.88, "600");
    });
    b.sign(0, 8.6, 12.6, 10.5, 1.9, stationSign);

    // 6. Railway Tracks & Platform behind station
    const trackZ = -14;
    b.box(0, 0.2, trackZ, 120, 0.3, 12, 0x58524d); // Ballast bed
    for (let trackOffset of [-3.2, 0, 3.2]) {
      // Rails
      b.box(0, 0.44, trackZ + trackOffset - 0.75, 120, 0.12, 0.08, 0x8a9098);
      b.box(0, 0.44, trackZ + trackOffset + 0.75, 120, 0.12, 0.08, 0x8a9098);
      // Sleepers
      for (let tx = -58; tx <= 58; tx += 1.4) {
        b.box(tx, 0.34, trackZ + trackOffset, 0.28, 0.1, 2.1, 0x3e2c1e, { bucket: "noshadow" });
      }
    }

    // Heritage Locomotive on Track
    b.box(-18, 0.6, trackZ, 14, 3.2, 2.6, 0x1c3a63, { solid: true });
    b.cyl(-12, 3.8, trackZ, 0.4, 1.2, C.ironBlack); // Chimney
    b.box(-23, 1.2, trackZ, 4, 3.6, 2.7, 0x1c3a63); // Driver Cab

    // 7. Interactive Charbagh Kulhad Chai Stall
    b.box(18, 0.44, 16, 3.2, 1.1, 1.8, C.darkTeak, { solid: true });
    b.box(18, 1.54, 16, 3.4, 0.08, 2.0, 0xd0c4b0);
    // Brass Samovar
    b.cyl(17.4, 1.62, 16, 0.28, 0.75, C.domeGold);
    // Kulhads
    for (let i = 0; i < 4; i++) {
      b.put(Ts.frustum(0.65, 8), 18.2 + i * 0.22, 1.62, 16, 0.16, 0.2, 0.16, C.terracotta);
    }
    // Interactive Prompt
    b.interact(18, 1.0, 17.6, "Have a cup of piping hot Kulhad Chai", (g) => {
      g?.toast?.("चारबाग़ की गरम कुल्हड़ चाय", "Steaming ginger tea served in an earthen kulhad!");
      g?.audio?.play?.("chai");
    }, 2.8);
  });
}

// -------------------------------------------------------------
// District 2: Hussainganj Heritage Bazaar (x = -251)
// -------------------------------------------------------------
function buildHussainganj(b, ctx) {
  const cx = -251;
  b.at(cx, 26, 0, () => {
    // Street of Awadhi Heritage Shophouses
    for (let i = -2; i <= 2; i++) {
      const bx = i * 16;
      const bCol = [C.cream, C.sandstone, C.creamDark, C.whitePlaster][(i + 4) % 4];
      b.box(bx, 0, 0, 13.5, 9.5, 8, bCol, { solid: true });
      b.box(bx, 9.5, 0, 14, 0.4, 8.5, C.terracotta);

      // Upper Floor Jharokhas (Balconies)
      b.box(bx, 5.2, 4.3, 4.8, 2.6, 1.2, C.creamDark);
      b.box(bx, 4.8, 4.3, 5.2, 0.35, 1.4, C.terracotta);

      // Shutter doors on ground
      b.box(bx, 0, 4.05, 7.5, 3.6, 0.1, 0x3d546f);
    }

    // Ram Asrey 1805 Heritage Sweetshop
    const sweetShopSign = makeShopSign("राम आसरे १८०५ · मक्खन मलाई", "RAM ASREY 1805 · SWEETS & REWRI", "#7c1c1c", "#fcd34d");
    b.sign(0, 4.3, 4.15, 6.8, 1.6, sweetShopSign);

    // Display counter with Malai Makhan
    b.box(0, 0.4, 5.2, 4.2, 1.0, 1.4, C.darkTeak, { solid: true });
    b.cyl(0, 1.45, 5.2, 1.1, 0.25, 0xfffbee, { glow: 0xfffbee });

    b.interact(0, 1.0, 6.2, "Taste winter Malai Makhan (Makhan Malai)", (g) => {
      g?.toast?.("मक्खन मलाई का स्वाद", "Light as winter mist: saffron-cardamom cloud dessert melts on your tongue!");
      g?.audio?.play?.("kulfiBell");
    }, 2.6);
  });
}

// -------------------------------------------------------------
// District 3: Hazratganj Heritage Colonnade (x = 0)
// -------------------------------------------------------------
function buildHazratganj(b, ctx) {
  const cx = 0;
  const pz = 24;

  b.at(cx, pz, 0, () => {
    // 90m Continuous White/Cream Classical Colonnade
    const colonnadeW = 86;
    const colonnadeH = 10.2;
    const colonnadeD = 9.0;

    // Main Building Structure behind arcade
    b.box(0, 0, 0, colonnadeW, colonnadeH, colonnadeD, C.cream, { solid: true });
    b.box(0, colonnadeH, 0, colonnadeW + 1, 0.6, colonnadeD + 1, C.whitePlaster);

    // Upper Floor Balustrade
    for (let x = -colonnadeW / 2 + 1; x <= colonnadeW / 2 - 1; x += 1.8) {
      b.cyl(x, colonnadeH + 0.6, colonnadeD / 2, 0.08, 0.9, C.cream);
    }
    b.box(0, colonnadeH + 1.5, colonnadeD / 2, colonnadeW, 0.15, 0.3, C.cream);

    // Walkable Ground Arcade Verandah
    b.box(0, 0.44, colonnadeD / 2 + 2.2, colonnadeW, 0.32, 4.4, C.promenadePaving, { floor: true });

    // Tuscan Columns along the street edge
    const pillarCount = 18;
    for (let i = 0; i <= pillarCount; i++) {
      const px = -colonnadeW / 2 + (i / pillarCount) * colonnadeW;
      const colZ = colonnadeD / 2 + 4.2;

      // Base
      b.box(px, 0.44, colZ, 0.8, 0.6, 0.8, C.whitePlaster);
      // Fluted Column
      b.cyl(px, 1.04, colZ, 0.28, 4.2, C.cream);
      // Capital
      b.box(px, 5.24, colZ, 0.9, 0.35, 0.9, C.whitePlaster);

      b.solid(px, colZ, 0.8, 0.8, 0, 0.44, 5.6);
    }

    // Arcade Architrave beam
    b.box(0, 5.59, colonnadeD / 2 + 4.2, colonnadeW, 0.55, 0.9, C.whitePlaster);

    // Historic Hazratganj Shopfronts:
    // 1. Royal Cafe (Famous Basket Chaat)
    const royalCafeSign = makeShopSign("रॉयल कैफ़े · बास्केट चाट", "ROYAL CAFE · THE GANJ", "#661818", "#fde047");
    b.sign(-24, 4.2, colonnadeD / 2 + 0.1, 7.2, 1.5, royalCafeSign);

    b.interact(-24, 1.0, colonnadeD / 2 + 2.0, "Taste Royal Cafe's Famous Basket Chaat", (g) => {
      g?.toast?.("रॉयल कैफ़े की बास्केट चाट", "Crisp fried potato basket loaded with spiced curd, chutney, and pomegranate!");
      g?.audio?.play?.("sizzle");
    }, 2.6);

    // 2. Ram Advani Booksellers
    const booksSign = makeShopSign("राम आडवाणी बुकशॉप", "RAM ADVANI BOOKSELLERS · 1951", "#152e4d", "#f8fafc");
    b.sign(0, 4.2, colonnadeD / 2 + 0.1, 7.6, 1.5, booksSign);

    b.interact(0, 1.0, colonnadeD / 2 + 2.0, "Browse Awadhi literature at Ram Advani's", (g) => {
      g?.toast?.("राम आडवाणी बुक्स", "Leafing through historical memoirs of the Nawabs and Shaam-e-Awadh.");
      g?.audio?.play?.("cash");
    }, 2.6);

    // 3. Lucknowi Chikankari Emporium
    const chikanSign = makeShopSign("शाही चिकनकारी एम्पोरियम", "LUCKNOW CHIKAN EMPORIUM", "#1b4d3e", "#fed7aa");
    b.sign(24, 4.2, colonnadeD / 2 + 0.1, 7.4, 1.5, chikanSign);

    // Victorian Heritage Lamp Posts along Ganj Walk
    for (let lx = -colonnadeW / 2 + 4; lx <= colonnadeW / 2 - 4; lx += 14) {
      buildStreetLamp(b, lx, colonnadeD / 2 + 5.6);
    }
  });
}

// -------------------------------------------------------------
// District 4: KD Singh Babu Stadium & Residency (x = 251)
// -------------------------------------------------------------
function buildKDSinghBabu(b, ctx) {
  const cx = 251;
  b.at(cx, 34, 0, () => {
    // Stadium Grandstand Wall
    b.box(0, 0, 0, 72, 8.5, 6, C.redBrick, { solid: true });
    b.box(0, 8.5, 0, 73, 0.4, 6.5, C.whitePlaster);

    // Floodlight Lattice Mast 1 & 2
    for (let mx of [-32, 32]) {
      b.cyl(mx, 0, 0, 0.45, 26, C.ironBlack);
      // Floodlight bank
      b.box(mx, 25, 0, 4.2, 1.8, 0.6, 0xdddddd);
      for (let fi = -1.5; fi <= 1.5; fi += 1.0) {
        b.put(Ts.sphere(6, 4), mx + fi, 25, 0.4, 0.35, 0.35, 0.2, 0xffffff, { glow: 0xffffff });
      }
    }

    // Stadium Signboard
    const stadiumSign = makeShopSign("के.डी. सिंह बाबू स्टेडियम", "KD SINGH BABU STADIUM", "#0e3b2e", "#fbbf24");
    b.sign(0, 6.2, 3.05, 9.5, 1.9, stadiumSign);

    // Residency Heritage Brick Ruins & Lush Park
    b.box(0, 0.4, 16, 80, 0.2, 22, C.lawnGreen, { floor: true });
    // Ancient Monumental Banyan Tree
    b.cyl(0, 0.5, 18, 1.4, 6.2, C.barkBrown, { solid: true });
    b.put(Ts.blob(1), 0, 7.5, 18, 9.5, 6.8, 9.5, C.leafDark);

    b.interact(0, 1.0, 15, "Rest beneath the ancient Residency Banyan tree", (g) => {
      g?.toast?.("रेज़िडेंसी का बरगद", "Cool shade, gentle breeze, and the tranquil fragrance of parched Lucknow earth.");
      g?.audio?.play?.("flutter");
    }, 3.0);
  });
}

// -------------------------------------------------------------
// District 5: Gomti Riverfront Promenade & Ghats (x = 502)
// -------------------------------------------------------------
function buildRiverfront(b, ctx) {
  const cx = 502;
  const rZ = gomtiRiverZ(cx);

  b.at(cx, rZ, 0, () => {
    // 1. Broad Promenade Walkway overlooking river
    b.box(0, 0.44, 20, 82, 0.3, 10, C.promenadePaving, { floor: true });

    // 2. Ornamental Jali Balustrade along water edge
    for (let x = -40; x <= 40; x += 1.6) {
      b.box(x, 0.6, 14.8, 0.16, 0.95, 0.16, C.jaliCream);
    }
    b.box(0, 1.55, 14.8, 81, 0.14, 0.28, C.cream);

    // 3. Stepped Stone Ghats down into Gomti
    for (let step = 0; step < 7; step++) {
      const stepY = 0.44 - step * 0.22;
      const stepZ = 14.2 - step * 0.9;
      b.box(0, stepY, stepZ, 60, 0.22, 1.0, C.sandstone, { floor: true });
    }

    // 4. Awadhi Baradari (Riverside 12-pillared Pavilion)
    buildAwadhiChhatri(b, 0, 0.74, 22, 3.2, 5.2, C.whitePlaster);

    // 5. Traditional Wooden Rowing Boats moored near steps
    for (let bx of [-16, 16]) {
      b.box(bx, GOMTI_WATER_Y + 0.1, 7.8, 1.8, 0.6, 4.6, C.darkTeak);
      b.box(bx, GOMTI_WATER_Y + 0.4, 7.8, 1.4, 0.4, 4.2, 0x1f1f1f);
      // Mooring pole
      b.cyl(bx + 1.2, GOMTI_WATER_Y, 7.8, 0.08, 1.8, C.darkTeak);
    }

    // Interactive Promenade Sunset Prompt
    b.interact(0, 1.0, 18, "Gaze out over the serene Gomti riverbank", (g) => {
      g?.toast?.("गोमती की शाम", "Golden reflections dance across the Gomti river waters as cool evening air settles in.");
      g?.audio?.play?.("splash");
    }, 3.0);
  });
}

// -------------------------------------------------------------
// District 6: Rumi Darwaza & Chowk Bazaar (x = 754)
// -------------------------------------------------------------
function buildRumiDarwaza(b, ctx) {
  const cx = 754;
  const pz = 18;

  b.at(cx, pz, 0, () => {
    // 1. The Monumental Rumi Darwaza Arch (1784)
    // Width: 24m, Height: 16m, Depth: 5.8m
    const gateW = 24;
    const gateH = 15.5;
    const gateD = 5.6;

    // Solid Side Piers
    b.box(-8.5, 0, 0, 7.0, gateH, gateD, C.sandstone, { solid: true });
    b.box(8.5, 0, 0, 7.0, gateH, gateD, C.sandstone, { solid: true });

    // Sweeping Crown Arch Structure
    b.box(0, 9.8, 0, 10.4, gateH - 9.8, gateD, C.sandstone, { solid: true });

    // Walkable Portal Passage under the gate
    b.floor(0, 0, 9.8, gateD, 0, 0.25);

    // Ornamental Side Niche Tiers (Taqs)
    for (let side of [-1, 1]) {
      for (let ty = 3; ty <= 11; ty += 2.8) {
        b.box(side * 8.5, ty, gateD / 2 + 0.05, 3.2, 1.8, 0.1, C.cream);
        b.box(side * 8.5, ty + 0.9, gateD / 2 + 0.08, 2.6, 0.5, 0.08, C.terracotta);
      }
    }

    // Flanking Slender Minarets with Awadhi Guldasta Finials
    for (let side of [-1, 1]) {
      const mx = side * (gateW / 2 + 1.2);
      b.cyl(mx, 0, 0, 1.1, gateH + 3.2, C.sandstone, { solid: true });
      // Chhatri cupola on top
      b.cyl(mx, gateH + 3.2, 0, 1.4, 0.35, C.cream);
      b.put(Ts.dome(10), mx, gateH + 3.55, 0, 2.6, 1.8, 2.6, C.whitePlaster);
      b.cyl(mx, gateH + 5.35, 0, 0.1, 1.0, C.domeGold);
    }

    // Central Crown Chhatri
    buildAwadhiChhatri(b, 0, gateH, 0, 1.8, 2.8, C.whitePlaster);

    // Gateway Inscription & Signboard
    const rumiSign = makeShopSign("रूमी दरवाज़ा · १७८४", "RUMI DARWAZA · 1784", "#2c1c0e", "#f59e0b");
    b.sign(0, 9.5, gateD / 2 + 0.1, 8.5, 1.8, rumiSign);

    b.interact(0, 1.0, 3.2, "Admire the 1784 Awadhi Architecture of Rumi Darwaza", (g) => {
      g?.toast?.("रूमी दरवाज़ा · नवाब आसफ़-उद-दौला", "Built in 1784 as a grand famine-relief project, giving food and dignity to all!");
      g?.audio?.play?.("templeBell");
    }, 3.5);

    // 2. Chowk Bazaar — Tunday Kababi Stall (x = +18)
    b.at(18, 8, 0, () => {
      b.box(0, 0, 0, 10, 5.5, 6, C.creamDark, { solid: true });
      const tundaySign = makeShopSign("टुंडे कबाबी · १९०५", "TUNDAY KABABI · CHOWK", "#7f1d1d", "#fef08a");
      b.sign(0, 3.8, 3.05, 6.8, 1.5, tundaySign);

      // Charcoal Sigri with glowing embers
      b.box(0, 0.44, 4.2, 2.8, 0.9, 1.2, C.ironBlack, { solid: true });
      b.box(0, 1.35, 4.2, 2.6, 0.08, 1.0, 0xff4500, { glow: 0xff3300 });

      b.interact(0, 1.0, 5.2, "Taste original melt-in-mouth Galouti Kebabs", (g) => {
        g?.toast?.("टुंडे कबाबी के गलावटी कबाब", "160 secret aromatic spices blended into legendary melt-in-your-mouth Awadhi kebabs!");
        g?.audio?.play?.("sizzle");
      }, 2.6);
    });

    // 3. Asghar Ali Ittar Stall (x = -18)
    b.at(-18, 8, 0, () => {
      b.box(0, 0, 0, 10, 5.5, 6, C.whitePlaster, { solid: true });
      const ittarSign = makeShopSign("असगर अली इतर", "ASGHAR ALI ITTAR & PERFUMES", "#14532d", "#bbf7d0");
      b.sign(0, 3.8, 3.05, 6.8, 1.5, ittarSign);

      // Glass perfume decanters on table
      b.box(0, 0.44, 4.2, 2.8, 0.9, 1.2, C.darkTeak, { solid: true });
      for (let dx = -0.8; dx <= 0.8; dx += 0.5) {
        b.cyl(dx, 1.34, 4.2, 0.1, 0.35, C.domeGold);
      }

      b.interact(0, 1.0, 5.2, "Sample pure Ruh Gulab & Mitti Attar", (g) => {
        g?.toast?.("रूह-ए-गुलाब और मिट्टी का इत्र", "The unforgettable fragrance of fresh summer rain meeting the parched earth of Awadh.");
        g?.audio?.play?.("pour");
      }, 2.6);
    });
  });
}

// -------------------------------------------------------------
// District 7: City Fill (Trees, Havelis, Awadhi Streetscape)
// -------------------------------------------------------------
function buildCityFill(b, ctx) {
  const L = LT;

  // Avenue Trees (Gulmohar, Amaltas, Neem)
  for (let x = -L / 2 + 12; x <= L / 2 - 12; x += 22) {
    const wx = wrapX(x);
    // Don't spawn inside landmark platforms
    if (stations.some(s => Math.abs(wrapX(wx - s.x)) < 32)) continue;

    // Amaltas (Yellow) or Gulmohar (Orange-Red)
    const isAmaltas = Math.abs(wx) % 2 === 0;
    const foliageCol = isAmaltas ? C.amaltasYellow : C.gulmoharRed;

    // South tree
    b.cyl(wx, 0.44, 25.2, 0.22, 4.8, C.barkBrown);
    b.put(Ts.blob(1), wx, 5.2, 25.2, 5.2, 4.2, 5.2, foliageCol);

    // North tree
    if (Math.abs(wx - gomtiRiverZ(wx)) > 24) {
      b.cyl(wx, 0.44, 8.8, 0.22, 4.8, C.barkBrown);
      b.put(Ts.blob(1), wx, 5.2, 8.8, 5.2, 4.2, 5.2, C.leafGreen);
    }
  }

  // Heritage Street Lamps
  for (let x = -L / 2 + 6; x <= L / 2 - 6; x += 18) {
    const wx = wrapX(x);
    buildStreetLamp(b, wx, 22.8);
    buildStreetLamp(b, wx, 11.2);
  }
}

// -------------------------------------------------------------
// 7. Districts Manifest
// -------------------------------------------------------------
const districts = [
  ["terrain", "Laying the fertile Awadh plains & Gomti river", async () => ({
    build: (b) => {
      buildTerrain(b, terrainH, groundColor);
      buildRoads(b);
    }
  })],
  ["charbagh", "Constructing Charbagh Railway Palace & Domes", async () => ({
    build: (b, ctx) => buildCharbagh(b, ctx)
  })],
  ["hussainganj", "Opening Hussainganj sweetshops & revri gallis", async () => ({
    build: (b, ctx) => buildHussainganj(b, ctx)
  })],
  ["hazratganj", "Erecting Hazratganj Victorian colonnades & signboards", async () => ({
    build: (b, ctx) => buildHazratganj(b, ctx)
  })],
  ["kdsingh", "Planting Residency greens & KD Singh Stadium", async () => ({
    build: (b, ctx) => buildKDSinghBabu(b, ctx)
  })],
  ["riverfront", "Sculpting Gomti riverfront promenade & ghats", async () => ({
    build: (b, ctx) => buildRiverfront(b, ctx)
  })],
  ["rumidarwaza", "Carving the iconic Rumi Darwaza & Chowk bazaar", async () => ({
    build: (b, ctx) => buildRumiDarwaza(b, ctx)
  })],
  ["fill", "Planting the amaltas and gulmohar boulevards", async () => ({
    build: (b, ctx) => buildCityFill(b, ctx)
  })]
];

// -------------------------------------------------------------
// 8. People & Awadhi NPCs
// -------------------------------------------------------------
const LKO_LOOKS = [
  {
    arch: "kurta",
    w: 28,
    skin: ["#9a6a48", "#a87a52", "#8a5a3c", "#b8865c"],
    hair: ["#1a1414", "#221a18", "#1a1414"],
    top: ["#ffffff", "#f5f5f0", "#faf8f2", "#e8e6dc", "#fffdfa"], // Chikan embroidery white/cream kurtas
    bottom: ["#ffffff", "#f0ece0", "#303048", "#2a3a5a"],
    accent: ["#d4af37", "#b84432", "#2e6a55"],
    flags: (a) => 64 | (a() < 0.25 ? 128 : 0)
  },
  {
    arch: "man",
    w: 24,
    skin: ["#9a6a48", "#a87a52", "#8a5a3c"],
    hair: ["#1a1414", "#221a18"],
    top: ["#2a3a5a", "#7a2a34", "#4a5a3a", "#5a5a64", "#c8b89a"],
    bottom: ["#2a2a30", "#3a3a44", "#1f2a44"],
    accent: ["#8a2a2a", "#f2c230"],
    flags: (a) => (a() < 0.2 ? 8 : 0) | (a() < 0.2 ? 32 : 0)
  },
  {
    arch: "saree",
    w: 20,
    skin: ["#9a6a48", "#a87a52", "#8a5a3c"],
    hair: ["#1a1414", "#221a18"],
    top: ["#7a2a34", "#3a4a6a", "#2a5a4a", "#e8a020"],
    bottom: ["#c8203a", "#1f6a4a", "#e8a020", "#6a1a5a", "#2a4aa0"],
    accent: ["#fdfaf2", "#f2c230"],
    flags: (a) => (a() < 0.3 ? 128 : 0)
  }
];

const AWADHI_TALKERS = [
  {
    x: -502 + 18,
    z: 18.2,
    yaw: Math.PI,
    role: "chaiwala",
    name: "Chaiwala at Charbagh",
    look: { arch: "man" },
    cols: { top: "#6a4a34", bottom: "#f0ece0" },
    lines: [
      ["चारबाग़ की अदरक वाली कुल्हड़ चाय लीजिए बाबूजी!", "Have a cup of hot ginger tea in an earthen kulhad, sir!"],
      ["गाड़ी आने में अभी बीस मिनट बाकी हैं।", "The train still has twenty minutes before arrival."]
    ]
  },
  {
    x: 0 + 4,
    z: 28.5,
    yaw: 0,
    role: "flaneur",
    name: "Hazratganj Flâneur",
    look: { arch: "kurta" },
    cols: { top: "#ffffff", bottom: "#ffffff" },
    lines: [
      ["शाम-ए-अवध का असली मज़ा हज़रतगंज में गंजिंग करने में ही है।", "The true magic of Shaam-e-Awadh is an evening stroll in Hazratganj."],
      ["पहले राम आडवाणी की किताबें, फिर रॉयल कैफ़े की चाट!", "First browsing books at Ram Advani, then chaat at Royal Cafe!"]
    ]
  },
  {
    x: 754 + 18,
    z: 22.8,
    yaw: Math.PI / 2,
    role: "kebab_ustad",
    name: "Kebab Ustad at Tunday",
    look: { arch: "man" },
    cols: { top: "#7f1d1d", bottom: "#f0ece0" },
    lines: [
      ["कबाब तैयार हैं जनाब! एकदम मक्खन जैसे नरम।", "The galouti kebabs are ready, sir! Soft as butter."],
      ["एक सौ साठ मसालों का जादू है, आज़मा कर देखिए।", "One hundred and sixty secret spices — taste the magic!"]
    ]
  },
  {
    x: 754 - 18,
    z: 22.8,
    yaw: -Math.PI / 2,
    role: "ittardaar",
    name: "Ittardaar at Chowk",
    look: { arch: "kurta" },
    cols: { top: "#f5f5f0", bottom: "#f0ece0" },
    lines: [
      ["कन्नौज का गुलाब और मिट्टी का इत्र देखिए सरकार।", "Sample our pure Damascus rose and the scent of first rain, sir."],
      ["नवाबों के ज़माने का नुस्खा है।", "Crafted from the timeless recipes of the Nawabs."]
    ]
  },
  {
    x: 502,
    z: 18.5,
    yaw: Math.PI,
    role: "river_walker",
    name: "Riverfront Walker",
    look: { arch: "saree" },
    cols: { top: "#7a2a34", bottom: "#c8203a" },
    lines: [
      ["गोमती की ठंडी हवा शाम को बहुत सुकून देती है।", "The cool breeze off the Gomti river brings such peace in the evening."],
      ["यहाँ से सूरज का ढलना सबसे सुंदर लगता है।", "Watching the sunset from here is simply breathtaking."]
    ]
  }
];

function people(ctx) {
  return {
    seed: 42,
    looks: LKO_LOOKS,
    walkers: 620,
    perPlatform: 10,
    lanes: [
      { z: 12.8, w: 1 },
      { z: 21.2, w: 1 },
      { z: 24.5, w: 1.2 },
      { z: 10.2, w: 1.2 }
    ],
    talkers: AWADHI_TALKERS
  };
}

// -------------------------------------------------------------
// 9. Traffic
// -------------------------------------------------------------
function traffic() {
  return {
    seed: 55,
    count: 88,
    lanes: [
      { z: 15.2, dir: 1 },
      { z: 18.8, dir: -1 },
      { z: -15.2, dir: 1 },
      { z: -18.8, dir: -1 }
    ],
    kinds: [
      {
        w: 6,
        v: 8,
        size: makeAuto.size,
        horn: "autoHorn",
        make: (b, t) => makeAuto(b, { seed: Math.floor(t() * 1e6), body: 0x1f5c38, top: 0xf5b82e })
      },
      {
        w: 6,
        v: 9.5,
        size: makeCar.size,
        make: (b, t) => makeCar(b, { seed: Math.floor(t() * 1e6), color: [0xf5f5f5, 0x242426, 0x963224, 0xb84432, 0xd4af37][Math.floor(t() * 5)] })
      },
      {
        w: 3,
        v: 6.5,
        size: makeScooter.size,
        make: (b, t) => makeScooter(b, { seed: Math.floor(t() * 1e6) })
      },
      {
        w: 2,
        v: 7.2,
        size: makeTempo.size,
        make: (b, t) => makeTempo(b, { seed: Math.floor(t() * 1e6) })
      },
      {
        w: 1.2,
        v: 7.0,
        size: makeBus.size,
        horn: "busHorn",
        make: (b, t) => makeBus(b, { seed: Math.floor(t() * 1e6) })
      }
    ]
  };
}

// -------------------------------------------------------------
// 10. Ambience & Audio
// -------------------------------------------------------------
function ambience(x, z) {
  const wx = wrapX(x);
  const rZ = gomtiRiverZ(wx);
  const riverDist = Math.abs(z - rZ);
  const absZ = Math.abs(z);

  return {
    town: smoothstep(120, 20, absZ),
    traffic: smoothstep(35, 4, Math.abs(absZ - 17)),
    sea: smoothstep(40, 2, riverDist) * 0.28,
    temple: Math.max(
      smoothstep(55, 6, Math.hypot(wrapX(wx - 754), z - 18)),
      smoothstep(55, 6, Math.hypot(wrapX(wx - (-502)), z - 32))
    ),
    templeAt: [754, 18],
    birds: riverDist < 45 || absZ > 30,
    roads: [17, -17],
    shoreZ: rZ
  };
}

// -------------------------------------------------------------
// 11. Time of Day & Lighting Profile (Shaam-e-Awadh)
// -------------------------------------------------------------
const tod = [
  // Golden Hour (Shaam-e-Awadh Warm Golden Amber)
  {
    elev: 12,
    sun: 0xffba55,
    sunI: 3.1,
    sky: 0x9fc8eb,
    gnd: 0x9e805f,
    zenith: 0x3678b8,
    horizon: 0xf5a842,
    glow: 0xff8c2b,
    cLit: 0xffe6b8,
    cMid: 0xde9b5b,
    cShade: 0x8a5538,
    fog: 0xedd6b6,
    fogNear: 120,
    fogFar: 780,
    tint: 0x6e4e32,
    shallow: 0x5a8a82,
    mid: 0x3d6660,
    deep: 0x22423e
  },
  // Blue Hour Dusk
  {
    sun: 0xff8433,
    sunI: 0.85,
    zenith: 0x1f3c66,
    horizon: 0xd97236,
    glow: 0xcc5522,
    cLit: 0xf5a66c,
    cMid: 0x8a523e,
    cShade: 0x42261e,
    fog: 0x6d5c6b,
    fogNear: 85,
    fogFar: 580,
    tint: 0x3b2d3d,
    shallow: 0x365854,
    mid: 0x253e3c,
    deep: 0x162826
  },
  // Night
  {
    sun: 0x8a99cc,
    sunI: 0.38,
    horizon: 0x222638,
    glow: 0x334466,
    fog: 0x141822,
    fogNear: 60,
    fogFar: 480
  }
];

// -------------------------------------------------------------
// 12. City Export Specification
// -------------------------------------------------------------
const lucknowCity = {
  id: "lucknow",
  name: "Lucknow",
  script: "लखनऊ",
  lang: "hi",
  accent: "#c86b27",
  line: "Lucknow Metro Red Line & Gomti Riverfront",
  season: "November. Mild Awadhi winter: chikan kurtas, evening chai along the Gomti, fragrance of galouti kebabs at Aminabad, golden sunset over the Rumi Darwaza arches.",
  terrainH,
  zoneAt,
  stations,
  districts,
  start: { x: 0, z: 15.6, yaw: 0, pitch: 0.08 },
  water: { level: GOMTI_WATER_Y },
  people,
  traffic,
  ambience,
  tod,
  preview: {
    land: 0xc4a67e,
    city: [0xf6eedb, 0xb84432, 0xd8be9b, 0xfdfaf5, 0x963224, 0x4a2e1b, 0xd4af37],
    trees: [0xe84a2a, 0xf5cc25, 0x528746, 0x38612f, 0x487a42],
    hill: 0x9e805f,
    water: 0x3d6660,
    line: 0xc86b27
  },
  fpsPoses: [
    ["hazratganj", { x: 0, z: 15.6, yaw: 0, pitch: 0.08 }, 0, 0],
    ["rumidarwaza", { x: 754, z: 12.0, yaw: 0, pitch: 0.12 }, 0, 0],
    ["charbagh", { x: -502, z: 22.0, yaw: 0, pitch: 0.06 }, 0, 0],
    ["riverfront", { x: 502, z: 18.0, yaw: 3.14, pitch: -0.05 }, 0.5, 0],
    ["kdsingh", { x: 251, z: 24.0, yaw: 1.57, pitch: 0.05 }, 0, 0],
    ["planet", { x: 0, z: 20, yaw: 0, pitch: 0 }, 0.5, 1]
  ]
};

export default lucknowCity;
