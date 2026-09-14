const PRODUCTS = [
  { id: "asiga-ultra", name: "Asiga Ultra", cat: "printers", brand: "Asiga", tag: "Desktop 3D-printer", blurb: "Compacte labprinter voor modellen, splints en prothesewerk met hoge nauwkeurigheid." },
  { id: "asiga-max2", name: "Asiga Max 2", cat: "printers", brand: "Asiga", tag: "Desktop 3D-printer", blurb: "Betrouwbare werkpaard-printer voor dagelijkse productie in laboratorium en praktijk." },
  { id: "asiga-max-x", name: "Asiga Max X", cat: "printers", brand: "Asiga", tag: "Hoge nauwkeurigheid", blurb: "Voor precisiewerk waar pasvorm en detail extra kritisch zijn." },
  { id: "asiga-pro4k", name: "Asiga Pro 4K", cat: "printers", brand: "Asiga", tag: "Grootformaat", blurb: "Groot bouwvolume in 4K voor series en grotere restauraties." },
  { id: "asiga-cure", name: "Asiga Cure", cat: "nabewerking", brand: "Asiga", tag: "Nabehandeling", blurb: "Nacure-unit die prints uithardt tot de juiste eindsterkte en kleur." },
  { id: "denta-model", name: "DentaMODEL", cat: "hars", brand: "Asiga", tag: "Modelhars", blurb: "Printvloeistof voor accurate werk- en presentatiemodellen." },
  { id: "denta-tray", name: "DentaTRAY", cat: "hars", brand: "Asiga", tag: "Lepelhars", blurb: "Hars voor individuele afdruklepelen, snel en vormvast." },
  { id: "key-splint", name: "KeySplint Soft", cat: "hars", brand: "Keystone", tag: "Splintmateriaal", blurb: "Flexibel splintmateriaal voor comfortabele occlusale splints." },
  { id: "vhf-e4", name: "VHF E4", cat: "cadcam", brand: "VHF", tag: "Freesmachine", blurb: "Plug-and-play 4-asser voor droge toepassingen in lab en praktijk." },
  { id: "vhf-e5", name: "VHF E5", cat: "cadcam", brand: "VHF", tag: "Freesmachine", blurb: "Veelzijdige machine voor lab en praktijk, droog en nat frezen." },
  { id: "vhf-z4", name: "VHF Z4", cat: "cadcam", brand: "VHF", tag: "Chairside", blurb: "Chairside mill voor restauraties in de praktijk, dezelfde dag." },
  { id: "vhf-r5", name: "VHF R5", cat: "cadcam", brand: "VHF", tag: "High-end mill", blurb: "High-end mill/grind met automatische lader voor onbemande productie." },
  { id: "zirkon-ml", name: "Multilayer zirkonia 98 mm", cat: "schijven", brand: "WhitePeaks", tag: "Zirkonia", blurb: "Gelaagde zirkoniaschijf voor kronen en bruggen met natuurlijke kleurverloop." },
  { id: "pmma-ml", name: "PMMA multilayer 98 mm", cat: "schijven", brand: "WhitePeaks", tag: "PMMA", blurb: "Voor tijdelijke restauraties en try-ins, eenvoudig te frezen." },
  { id: "gips-k4", name: "Klasse 4 superhardgips", cat: "gips", brand: "Schouten", tag: "5 kg", blurb: "Superhard gips voor precisiewerk en duurzame meestermodellen." },
  { id: "gips-k3", name: "Klasse 3 hardgips", cat: "gips", brand: "Schouten", tag: "25 kg", blurb: "Hardgips voor dagelijkse modellen, in grootverpakking." },
  { id: "edge-mini", name: "Rayshape Edge Mini", cat: "printers", brand: "Rayshape", tag: "Chairside", blurb: "Compacte LCD-printer voor chairside toepassingen, open materiaalsysteem." },
  { id: "edge-e2", name: "Rayshape Edge E2", cat: "printers", brand: "Rayshape", tag: "LCD-printer", blurb: "Betaalbare labprinter met open vloeistoffen, eenvoudig in gebruik." },
  { id: "dekema-624", name: "Dekema Austromat 624i", cat: "ovens", brand: "Dekema", tag: "Keramiekoven", blurb: "Keramiekoven voor glazuren en sinteren van restauraties." },
  { id: "build-tray", name: "Universal Build Tray 1L", cat: "toebehoren", brand: "Asiga", tag: "Tray", blurb: "Materiaalbak voor Asiga-printers, 1 liter inhoud." },
  { id: "cleaner", name: "BB Cleaner", cat: "nabewerking", brand: "NK-Optik", tag: "Washer", blurb: "Was-unit voor het reinigen van prints na het printen." },
  { id: "aligner", name: "Direct Aligner hars", cat: "hars", brand: "Detax", tag: "Aligner", blurb: "Hars voor direct geprinte aligners, zonder thermoforming." },
  { id: "hassbio", name: "Hassbio Amber Mill C14", cat: "schijven", brand: "HassBio", tag: "Keramiek", blurb: "Glaskeramiek voor esthetische restauraties, chairside en lab." },
  { id: "saremco", name: "Crowntec print resin", cat: "hars", brand: "Saremco", tag: "Kroonhars", blurb: "Printvloeistof voor kronen en bruggen met hoge sterkte." }
];

const CATS = {
  printers: { title: "Dentale 3D printers", intro: "Desktop, chairside en grootformaat printers voor lab en praktijk." },
  hars: { title: "3D printmateriaal", intro: "Printvloeistoffen voor modellen, splints, prothese, kronen en aligners." },
  cadcam: { title: "CAD/CAM – freesmachines", intro: "4- en 5-assige machines voor droog en nat frezen." },
  schijven: { title: "CAD/CAM materialen", intro: "Zirkonia, PMMA en keramiek in schijven en blokken." },
  gips: { title: "Dental gips", intro: "Klasse 3 en 4 gipsen voor lab en praktijk." },
  nabewerking: { title: "Nabewerking", intro: "Wash- en cure-systemen na het 3D-printen." },
  toebehoren: { title: "Toebehoren", intro: "Build trays, platforms en onderdelen." },
  ovens: { title: "Dentale ovens", intro: "Sinter- en keramiekovens." },
  merken: { title: "Merken", intro: "Producten gegroepeerd per merk." },
  acties: { title: "Acties", intro: "Tijdelijke bundels en aanbiedingen." },
  all: { title: "Alle producten", intro: "Overzicht van het mockup-assortiment." }
};

const NEWS = [
  "Nieuw vhf dentalcam 9 & dentalcnc 9: de volgende stap in digitale dental productie",
  "Splints 3D printen op grote schaal: efficiëntere productie met de Asiga Ultra",
  "Chairside 3D printen: de volgende stap in digitale tandheelkunde",
  "Welke dentale 3D-printer past bij uw praktijk of laboratorium?",
  "De kracht van chairside 3D printen met de Rayshape Edge Mini",
  "Direct geprinte aligners met Detax direct aligner",
  "Dental Expo Gorinchem: Schouten Dental met 2 andere specialisten",
  "Asiga Building Trays, verschillende materiaalbakken voor de vloeistoffen",
  "NEW: Detax Denture Impact & Denture Flex",
  "Nieuwe product lancering Asiga",
  "Vacature Verkoop Medewerker Dental",
  "3D-printers voor orthodontie",
  "Werken met de Asiga UltraGLOSS building tray",
  "Asiga Ultra Gloss",
  "Welke Asiga 3D printer moet ik nu bestellen?"
];

const ICONS = {
  search: `<svg class="icon icon-lg" viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M15.5 15.5L21 21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
  phone: `<svg class="icon icon-lg" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7.2 3.5c.4-.4 1-.5 1.5-.3l2.3 1c.5.2.8.7.8 1.2v2.3c0 .4-.2.8-.6 1L9.5 9.5c1.2 2.4 3.1 4.3 5.5 5.5l1.8-1.7c.3-.3.7-.5 1.1-.5h2.3c.5 0 1 .3 1.2.8l1 2.3c.2.5.1 1.1-.3 1.5l-1.4 1.4c-.4.4-1 .6-1.6.5C12.6 18.6 5.4 11.4 3.7 5.1c-.1-.6.1-1.2.5-1.6L7.2 3.5z"/></svg>`,
  user: `<svg class="icon icon-lg" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="3.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M5 19.5c1.8-3.2 4.2-4.5 7-4.5s5.2 1.3 7 4.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
  cart: `<svg class="icon icon-lg" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" d="M3 5h2l2.2 10.2a1.5 1.5 0 001.5 1.2h8.6a1.5 1.5 0 001.5-1.2L21 8H7"/><circle cx="10" cy="20" r="1.4" fill="currentColor"/><circle cx="17" cy="20" r="1.4" fill="currentColor"/></svg>`,
  chevronDown: `<svg class="icon icon-sm" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" d="M6 9l6 6 6-6"/></svg>`,
  chevronLeft: `<svg class="icon icon-lg" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M15 6l-6 6 6 6"/></svg>`,
  chevronRight: `<svg class="icon icon-lg" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M9 6l6 6-6 6"/></svg>`,
  check: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M5 12l5 5 9-9"/></svg>`,
  menu: `<svg class="icon icon-lg" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M4 7h16M4 12h16M4 17h16"/></svg>`,
  chat: `<svg class="icon icon-lg" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4 5.5A2.5 2.5 0 016.5 3h11A2.5 2.5 0 0120 5.5v8A2.5 2.5 0 0117.5 16H10l-4.5 3.5V16H6.5A2.5 2.5 0 014 13.5v-8z"/></svg>`,
  tooth: `<svg viewBox="0 0 48 48" aria-hidden="true"><path fill="currentColor" d="M24 6c-5.2 0-9.2 3.4-10.4 8.2-.7 2.8-.4 5.8.2 8.6.5 2.4 1 4.9.7 7.4-.3 2.8-1.5 5.4-2.5 8-.6 1.5.4 3.2 2 3.2 1.4 0 2.4-1.1 3-2.3 1.1-2.2 2-4.6 3.8-6.2 1.5-1.4 3.3-1.7 5.2-1.7s3.7.3 5.2 1.7c1.8 1.6 2.7 4 3.8 6.2.6 1.2 1.6 2.3 3 2.3 1.6 0 2.6-1.7 2-3.2-1-2.6-2.2-5.2-2.5-8-.3-2.5.2-5 .7-7.4.6-2.8.9-5.8.2-8.6C33.2 9.4 29.2 6 24 6z"/></svg>`,
  facebook: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1z"/></svg>`,
  youtube: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M21.6 7.2a2.7 2.7 0 00-1.9-1.9C18 5 12 5 12 5s-6 0-7.7.3a2.7 2.7 0 00-1.9 1.9C2 8.9 2 12 2 12s0 3.1.4 4.8a2.7 2.7 0 001.9 1.9C6 19 12 19 12 19s6 0 7.7-.3a2.7 2.7 0 001.9-1.9c.4-1.7.4-4.8.4-4.8s0-3.1-.4-4.8zM10 15.2V8.8L15.5 12 10 15.2z"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/></svg>`
};

function cart() {
  try { return JSON.parse(localStorage.getItem("sgd-cart") || "[]"); } catch { return []; }
}
function saveCart(items) {
  localStorage.setItem("sgd-cart", JSON.stringify(items));
  document.querySelectorAll("[data-cart-count]").forEach((el) => {
    el.textContent = items.length;
    el.hidden = items.length === 0;
  });
}
function addToCart(id) {
  const items = cart();
  const p = PRODUCTS.find((x) => x.id === id) || { id, name: id, qty: 1 };
  items.push({ id: p.id, name: p.name, qty: 1 });
  saveCart(items);
  alert("Toegevoegd aan winkelwagen (mockup).");
}

function ph(label = "Productfoto", sub = "") {
  return `<div class="ph"><span class="ph-label">PLACEHOLDER</span><span class="ph-sub">${sub || label}</span></div>`;
}

function checkItem(text) {
  return `<span><span class="check-circle">${ICONS.check}</span> ${text}</span>`;
}

const BRAND_LOGO_STYLES = [
  { mark: "#00adef", text: "#2a2a2a", shape: "rect" },
  { mark: "#2c3e50", text: "#2c3e50", shape: "rect" },
  { mark: "#e67e22", text: "#333", shape: "circle" },
  { mark: "#16a085", text: "#1a1a1a", shape: "rect" },
  { mark: "#8e44ad", text: "#333", shape: "circle" },
  { mark: "#2980b9", text: "#2c3e50", shape: "rect" },
  { mark: "#c0392b", text: "#333", shape: "rect" },
  { mark: "#27ae60", text: "#1a1a1a", shape: "circle" },
  { mark: "#34495e", text: "#34495e", shape: "rect" },
  { mark: "#d35400", text: "#333", shape: "rect" }
];

function brandLogoSvg(name, index = 0) {
  const style = BRAND_LOGO_STYLES[index % BRAND_LOGO_STYLES.length];
  const label = name.length > 14 ? name.replace(/\s.*/, "") : name;
  const fontSize = label.length > 10 ? 16 : label.length > 7 ? 18 : 22;
  const markShape = style.shape === "circle"
    ? `<circle cx="34" cy="44" r="24" fill="${style.mark}"/>`
    : `<rect x="10" y="20" width="48" height="48" rx="5" fill="${style.mark}"/>`;
  const initials = name.split(/[\s-]+/).map((w) => w[0]).join("").slice(0, 2).toUpperCase();

  return `<svg class="brand-logo" viewBox="0 0 200 88" role="img" aria-label="${name} logo">
    ${markShape}
    <text x="34" y="50" text-anchor="middle" font-family="Roboto,Arial,sans-serif" font-size="16" font-weight="700" fill="#fff">${initials}</text>
    <text x="68" y="52" font-family="Roboto,Arial,sans-serif" font-size="${fontSize}" font-weight="700" fill="${style.text}">${label}</text>
  </svg>`;
}

function initBrandLogos() {
  document.querySelectorAll(".brand-item[data-brand]").forEach((el, i) => {
    const name = el.dataset.brand;
    el.innerHTML = brandLogoSvg(name, i);
    el.setAttribute("aria-label", name);
  });
}

function headerHTML() {
  return `
  <div class="topbar">
    <div class="wrap">
      <div class="lang" id="langSwitch">
        <span class="flag" title="NL"></span> Nederlands ${ICONS.chevronDown}
        <div class="lang-menu">
          <a href="#">Nederlands</a>
          <a href="en.html">English</a>
          <a href="de.html">Deutsch</a>
        </div>
      </div>
      <a href="klantenservice.html">Klantenservice</a>
      <a href="informatiecentrum.html">Informatiecentrum</a>
    </div>
  </div>
  <header class="header">
    <div class="wrap header-main">
      <a class="logo" href="index.html">
        <div class="logo-mark">${ICONS.tooth}</div>
        <div class="logo-text">
          <strong>Schouten Dental</strong>
          <small>www.sgdentalshop.com</small>
        </div>
      </a>
      <form class="search" action="zoeken.html">
        <input name="q" placeholder="Typ om te zoeken..." />
        <button type="submit" aria-label="Zoeken">${ICONS.search}</button>
      </form>
      <div class="header-actions">
        <a class="phone" href="tel:+31186603600">
          <span class="phone-icon">${ICONS.phone}</span>
          +31 (0) 186 603 600
        </a>
        <a class="icon-btn" href="account.html" title="Account" aria-label="Account">${ICONS.user}</a>
        <a class="icon-btn" href="winkelwagen.html" title="Winkelwagen" aria-label="Winkelwagen">
          ${ICONS.cart}<span class="badge" data-cart-count hidden>0</span>
        </a>
      </div>
    </div>
  </header>
  <nav class="nav" id="mainNav">
    <div class="wrap">
      <button class="hamburger" id="hamburger" aria-label="Menu">${ICONS.menu}</button>
      <div class="mega-host">
        <button class="nav-link mega-toggle" id="megaBtn" type="button">Alle producten ${ICONS.chevronDown}</button>
        <div class="mega">
          <div class="mega-grid">
            <div class="mega-col mega-col-print">
              <h4><a href="categorie.html?cat=hars">3D printen</a></h4>
              <a href="categorie.html?cat=hars">3D printmateriaal</a>
              <a href="categorie.html?cat=hars">Printvloeistoffen</a>
              <a href="categorie.html?cat=hars">Model materiaal</a>
              <a href="categorie.html?cat=hars">Splint-materiaal</a>
              <a href="categorie.html?cat=hars">Prothese (basis + elementen)</a>
              <a href="categorie.html?cat=hars">Kronen &amp; Brugwerk</a>
              <a href="categorie.html?cat=hars">Try-in-materiaal</a>
              <a href="categorie.html?cat=hars">Lepel-materiaal</a>
              <a href="categorie.html?cat=hars">Casting materialen</a>
              <a href="categorie.html?cat=nabewerking">Cleaners</a>
            </div>
            <div class="mega-col mega-col-printers">
              <h4><a href="categorie.html?cat=printers">Dentale 3D printers</a></h4>
              <a href="categorie.html?cat=printers">Chairside</a>
              <a href="categorie.html?cat=printers">Desktop 3D printers</a>
              <a href="categorie.html?cat=printers">Grootformaat printer</a>
              <a href="categorie.html?cat=toebehoren">Build Trays</a>
              <a href="categorie.html?cat=nabewerking">Nabewerking</a>
              <a href="categorie.html?cat=nabewerking">Washing Devices</a>
              <a href="categorie.html?cat=nabewerking">Curing devices</a>
              <a href="categorie.html?cat=toebehoren">Buildplatforms + crown kits</a>
              <a href="categorie.html?cat=toebehoren">Storage Cases</a>
              <a href="categorie.html?cat=toebehoren">Onderdelen</a>
            </div>
            <div class="mega-col mega-col-cadcam">
              <h4><a href="categorie.html?cat=cadcam">CAD/CAM</a></h4>
              <a href="categorie.html?cat=cadcam">Freesmachines</a>
              <a href="categorie.html?cat=cadcam">4-assige freesmachines</a>
              <a href="categorie.html?cat=cadcam">5-assige freesmachines</a>
              <a href="categorie.html?cat=cadcam">CAD/CAM Accessoires</a>
              <a href="categorie.html?cat=cadcam">Freesboren</a>
              <a href="categorie.html?cat=cadcam">3D scanners</a>
              <a href="categorie.html?cat=ovens">Dentale ovens</a>
              <a href="categorie.html?cat=ovens">Sinterovens</a>
              <a href="categorie.html?cat=schijven">Zirkonia</a>
              <a href="categorie.html?cat=schijven">PMMA / PCTG / CoCr</a>
            </div>
            <div class="mega-col mega-col-gips">
              <h4><a href="categorie.html?cat=gips">Dental gips &amp; afdruk</a></h4>
              <a href="categorie.html?cat=gips">Klasse 2</a>
              <a href="categorie.html?cat=gips">Klasse 3</a>
              <a href="categorie.html?cat=gips">Klasse 4</a>
              <a href="categorie.html?cat=gips">Klasse 5</a>
              <a href="categorie.html?cat=gips">Natuur / Synthese</a>
              <a href="categorie.html?cat=gips">Gipsvloeistoffen</a>
              <a href="categorie.html?cat=all">Afdrukmaterialen</a>
              <a href="categorie.html?cat=all">Silicone / Putty</a>
              <a href="categorie.html?cat=all">Dupliceren</a>
              <a href="categorie.html?cat=all">Polijsten &amp; stralen</a>
            </div>
            <div class="mega-col mega-col-other">
              <h4>Overig</h4>
              <a href="categorie.html?cat=all">Wasbeetwallen</a>
              <a href="categorie.html?cat=all">Hulpmaterialen</a>
              <a href="categorie.html?cat=all">Inbedmassa</a>
              <a href="categorie.html?cat=all">Legeringen</a>
              <a href="categorie.html?cat=all">Beet- en lepelplaten</a>
              <a href="categorie.html?cat=all">Modelvervaardiging</a>
              <a href="categorie.html?cat=acties">Acties</a>
              <a href="merken.html">Alle merken</a>
              <a href="brochure.html">Brochures</a>
              <a href="download-centrum.html">Download centrum</a>
            </div>
          </div>
        </div>
      </div>
      <div class="nav-links">
        <a class="nav-link" href="merken.html">Merken</a>
        <a class="nav-link" href="support.html">Support</a>
        <a class="nav-link" href="reparatie.html">Reparatie &amp; onderhoud</a>
      </div>
      <a class="nav-cta" href="afspraak.html">Afspraak maken</a>
    </div>
  </nav>
  <div class="usps">
    <div class="wrap usps-inner">
      ${checkItem("Snelle levering (zie levertijden)")}
      ${checkItem("Meer dan 80 jaar ervaring")}
      ${checkItem("Uitgebreid assortiment")}
      ${checkItem("Klein- en grootverpakkingen mogelijk")}
    </div>
  </div>
  <a class="chat" href="klantenservice.html" title="Chat" aria-label="Chat">${ICONS.chat}</a>`;
}

function footerHTML() {
  return `
  <footer class="footer">
    <div class="wrap footer-grid">
      <div>
        <h4>Producten</h4>
        <a href="categorie.html?cat=printers">Dentale 3D printers</a>
        <a href="categorie.html?cat=hars">3D printmateriaal</a>
        <a href="categorie.html?cat=cadcam">CAD/CAM</a>
        <a href="categorie.html?cat=gips">Dental gips</a>
        <a href="categorie.html?cat=all">Alle producten</a>
      </div>
      <div>
        <h4>Merken</h4>
        <a href="merken.html">Asiga</a>
        <a href="merken.html">VHF</a>
        <a href="merken.html">Keystone</a>
        <a href="merken.html">Detax</a>
        <a href="merken.html">Rayshape</a>
        <a href="merken.html">Alle merken</a>
      </div>
      <div>
        <h4>Service</h4>
        <a href="klantenservice.html">Klantenservice</a>
        <a href="support.html">Support</a>
        <a href="reparatie.html">Reparatie &amp; onderhoud</a>
        <a href="training.html">Training</a>
        <a href="download-centrum.html">Download centrum</a>
      </div>
      <div>
        <h4>Contact</h4>
        <div class="muted">
          Laan van Londen 140<br>
          3317 DA Dordrecht<br>
          T: +31 (0) 186 603 600<br>
          E: <a href="mailto:info@sgdentalshop.com">info@sgdentalshop.com</a><br>
          <a href="afspraak.html">Afspraak maken</a>
        </div>
        <div class="social">
          <a href="#" aria-label="Facebook">${ICONS.facebook}</a>
          <a href="#" aria-label="YouTube">${ICONS.youtube}</a>
          <a href="#" aria-label="Instagram">${ICONS.instagram}</a>
        </div>
      </div>
    </div>
    <div class="wrap paybar">
      <div>
        <div class="pay-logos">
          <span class="pay">iDEAL</span><span class="pay">VISA</span><span class="pay">MC</span>
          <span class="pay">AMEX</span><span class="pay">PayPal</span><span class="pay">Bancontact</span>
        </div>
        <p class="copy">© 2026 – Schouten Dental | sgdentalshop.com</p>
      </div>
      <div class="legal">
        <a href="privacy.html">Privacy en cookies</a> · <a href="voorwaarden.html">Algemene voorwaarden</a>
      </div>
    </div>
  </footer>`;
}

const PRODUCT_GLYPHS = {
  printers: `<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="10" y="22" width="44" height="28" rx="3" fill="none" stroke="currentColor" stroke-width="2"/><path d="M16 22V16h32v6M22 50v6h20v-6M20 30h24M20 38h16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><rect x="26" y="8" width="12" height="8" rx="1" fill="currentColor" opacity=".85"/></svg>`,
  hars: `<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M26 10h12v8l6 8v26a6 6 0 01-6 6H26a6 6 0 01-6-6V26l6-8V10z" fill="none" stroke="currentColor" stroke-width="2"/><path d="M22 34h20" stroke="currentColor" stroke-width="2"/><rect x="28" y="6" width="8" height="6" rx="1" fill="currentColor"/></svg>`,
  cadcam: `<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="12" y="28" width="40" height="24" rx="3" fill="none" stroke="currentColor" stroke-width="2"/><path d="M20 28V16h24v12M32 16V8M24 40h16M32 40v12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="32" cy="40" r="3" fill="currentColor"/></svg>`,
  schijven: `<svg viewBox="0 0 64 64" aria-hidden="true"><ellipse cx="32" cy="32" rx="22" ry="22" fill="none" stroke="currentColor" stroke-width="2"/><ellipse cx="32" cy="32" rx="8" ry="8" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="32" cy="32" r="3" fill="currentColor"/><path d="M32 10v8M32 46v8M10 32h8M46 32h8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
  gips: `<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M18 24h28l-3 28H21L18 24z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M22 24c0-8 20-8 20 0" fill="none" stroke="currentColor" stroke-width="2"/><path d="M24 36h16M26 44h12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
  nabewerking: `<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="10" y="18" width="44" height="32" rx="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="32" cy="34" r="10" fill="none" stroke="currentColor" stroke-width="2"/><path d="M32 24v20M22 34h20" stroke="currentColor" stroke-width="2"/><path d="M18 14h28" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
  toebehoren: `<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="8" y="22" width="48" height="28" rx="3" fill="none" stroke="currentColor" stroke-width="2"/><path d="M8 34h48M20 22v28M44 22v28" stroke="currentColor" stroke-width="2"/><path d="M16 18h32" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
  ovens: `<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="12" y="12" width="40" height="42" rx="3" fill="none" stroke="currentColor" stroke-width="2"/><rect x="20" y="22" width="24" height="18" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="40" cy="48" r="2.5" fill="currentColor"/><path d="M22 16h20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`
};

function productTone(id) {
  let n = 0;
  for (let i = 0; i < id.length; i++) n += id.charCodeAt(i);
  return n % 4;
}

function fillProductVisual(el, p) {
  if (!el || !p) return;
  const extra = el.className.includes("pdp-visual") ? "pdp-visual " : "";
  el.className = `${extra}show-visual cat-${p.cat} tone-${productTone(p.id)}`;
  el.innerHTML = `<span class="show-glyph">${PRODUCT_GLYPHS[p.cat] || PRODUCT_GLYPHS.printers}</span>`;
}

function productVisualHTML(p) {
  return `<div class="show-visual cat-${p.cat} tone-${productTone(p.id)}" aria-hidden="true">
    <span class="show-glyph">${PRODUCT_GLYPHS[p.cat] || PRODUCT_GLYPHS.printers}</span>
  </div>`;
}

function productCard(p) {
  return showcaseItem(p);
}

function showcaseItem(p) {
  return `<a class="show-card" href="product.html?id=${p.id}">
    ${productVisualHTML(p)}
    <div class="show-body">
      <span class="show-brand">${p.brand}</span>
      <h3>${p.name}</h3>
      <p>${p.blurb || p.tag}</p>
      <span class="show-tag">${p.tag}</span>
    </div>
  </a>`;
}

function renderShowcase(el, items) {
  if (!el) return;
  el.className = "showcase";
  el.innerHTML = items.length
    ? items.map(showcaseItem).join("")
    : "<p>Geen producten in deze categorie.</p>";
}

document.addEventListener("DOMContentLoaded", () => {
  const h = document.getElementById("site-header");
  const f = document.getElementById("site-footer");
  if (h) h.innerHTML = headerHTML();
  if (f) f.innerHTML = footerHTML();
  saveCart(cart());

  const nav = document.getElementById("mainNav");
  const megaBtn = document.getElementById("megaBtn");
  const megaHost = nav?.querySelector(".mega-host");
  if (megaBtn && nav) {
    megaBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      nav.classList.toggle("open");
    });
    document.addEventListener("click", (e) => {
      if (!nav.contains(e.target)) nav.classList.remove("open");
    });
    megaHost?.addEventListener("mouseenter", () => {
      if (window.matchMedia("(min-width: 981px)").matches) nav.classList.add("open");
    });
    megaHost?.addEventListener("mouseleave", () => {
      if (window.matchMedia("(min-width: 981px)").matches) nav.classList.remove("open");
    });
  }
  document.getElementById("hamburger")?.addEventListener("click", () => nav.classList.toggle("open-mobile"));
  document.getElementById("langSwitch")?.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("open");
  });

  document.querySelectorAll("[data-rail]").forEach((el) => {
    const cat = el.dataset.rail;
    const list = PRODUCTS.filter((p) => p.cat === cat).slice(0, 5);
    el.innerHTML = list.map(productCard).join("");
  });

  document.querySelectorAll(".arrow:not(.carousel-prev):not(.carousel-next)").forEach((btn) => {
    const isLeft = btn.classList.contains("left");
    btn.innerHTML = isLeft ? ICONS.chevronLeft : ICONS.chevronRight;
  });
  document.querySelectorAll(".carousel-prev").forEach((b) => { b.innerHTML = ICONS.chevronLeft; });
  document.querySelectorAll(".carousel-next").forEach((b) => { b.innerHTML = ICONS.chevronRight; });

  initBrandLogos();
  highlightCurrentNav();
  if (typeof pageInit === "function") pageInit();
});

function highlightCurrentNav() {
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".nav-links a.nav-link, a.nav-cta").forEach((a) => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (href && href === path) a.classList.add("is-active");
  });
}
