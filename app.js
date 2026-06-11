/* =========================================================
   Diego Cubillos — Portafolio
   ========================================================= */

/* ---------- Icons (Feather, MIT) ---------- */
const ICONS = {
  github: '<svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>',
  mail: '<svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22,6 12,13 2,6"/></svg>',
  globe: '<svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>'
};

const EMAIL = ['hola', 'diegocubillos.com'].join('@');
const ROUTES = {
  home: '/',
  about: '/about',
  projects: '/projects',
  contact: '/contact'
};
const ROUTE_VIEWS = Object.fromEntries(Object.entries(ROUTES).map(([view, path]) => [path, view]));
const SOCIALS = [
  { icon: 'github', url: 'https://github.com/CubillosDev', label: 'GitHub' },
  { icon: 'linkedin', url: 'https://linkedin.com/in/cubillosdiego', label: 'LinkedIn' },
  { icon: 'mail', url: 'mailto:' + EMAIL, label: 'Email' },
  { icon: 'globe', url: 'https://diegocubillos.com', label: 'Web' }
];

const STACK = ['TypeScript', 'React 19', 'Node.js', 'NestJS', 'Express', 'Flutter', 'PostgreSQL', 'TypeORM', 'Tailwind', 'Framer Motion', 'Jest', 'Git', 'Linux'];

/* ---------- Projects ---------- */
const LATAM_SHOTS = Array.from({ length: 10 }, (_, i) => `assets/proj/latam-${i + 1}.webp`);

const PROJECTS = [
  {
    id: 'fleet', cat: 'fullstack', mono: 'Plataforma empresarial', type: 'web',
    img: 'assets/proj/fleet.webp', shots: ['assets/proj/fleet.webp'], accent: 'oklch(0.6 0.17 264)',
    tags: ['NestJS', 'React 19', 'Flutter', 'PostgreSQL'],
    url: 'https://github.com/olarthedev/control-flotas',
    es: {
      title: 'Sistema de Control de Flotas',
      sub: 'Plataforma empresarial de extremo a extremo',
      desc: 'Plataforma de 3 capas — API REST, panel web y app móvil — para supervisar flotas vehiculares en tiempo real.',
      about: 'Diseñé y desarrollé una plataforma completa con API REST en NestJS, panel administrativo en React 19 y aplicación móvil en Flutter, todo conectado a una base de datos PostgreSQL.',
      bullets: [
        'Módulo de geolocalización en tiempo real que redujo el tiempo de supervisión de flota en más del 60%.',
        'Sistema de presupuestos semanales con registro fotográfico desde móvil, eliminando el 100% del control en papel.',
        '100% de endpoints documentados con Swagger/OpenAPI y suite de pruebas con Jest y Supertest.',
        'Arquitectura modular (controllers, services, guards, DTOs), validación con class-validator y autenticación con bcrypt.'
      ]
    },
    en: {
      title: 'Fleet Control System',
      sub: 'End-to-end enterprise platform',
      desc: 'A 3-layer platform — REST API, web dashboard and mobile app — to monitor vehicle fleets in real time.',
      about: 'I designed and built a complete platform with a NestJS REST API, a React 19 admin dashboard and a Flutter mobile app, all connected to a PostgreSQL database.',
      bullets: [
        'Real-time geolocation module that cut fleet supervision time by over 60%.',
        'Weekly budget system with photo logging from mobile, removing 100% of paper-based control.',
        '100% of endpoints documented with Swagger/OpenAPI and a Jest + Supertest test suite.',
        'Modular architecture (controllers, services, guards, DTOs), class-validator validation and bcrypt auth.'
      ]
    }
  },
  {
    id: 'hosp', cat: 'backend', mono: 'Microservicios', type: 'web',
    img: 'assets/proj/hospital.webp', shots: ['assets/proj/hospital.webp'], accent: 'oklch(0.62 0.13 220)',
    tags: ['Express.js', 'Sequelize', 'PostgreSQL', 'API Gateway'],
    url: 'https://github.com/oscarjulian01/control-equipos-hospital',
    es: {
      title: 'Gestión de Equipos Hospitalarios',
      sub: 'Arquitectura de microservicios',
      desc: 'Sistema basado en microservicios con API Gateway central que desacopla inventario, mantenimiento y usuarios.',
      about: 'Diseñé una arquitectura de microservicios con un API Gateway que coordina 3 servicios autónomos, reduciendo la interdependencia entre módulos y facilitando el mantenimiento independiente de cada uno.',
      bullets: [
        'API Gateway central desacoplando 3 servicios: inventario, mantenimiento y usuarios.',
        '3 servicios REST con Express.js y Sequelize ORM sobre PostgreSQL, cada uno con su capa de datos.',
        'Patrones RESTful con validación centralizada y manejo estructurado de errores — cero errores no controlados en pruebas.',
        'Arranque multi-servicio automatizado con PowerShell e integración de NGROK para exposición de endpoints.'
      ]
    },
    en: {
      title: 'Hospital Equipment Management',
      sub: 'Microservices architecture',
      desc: 'A microservices-based system with a central API Gateway decoupling inventory, maintenance and users.',
      about: 'I designed a microservices architecture with an API Gateway coordinating 3 autonomous services, reducing interdependence between modules and enabling independent maintenance of each one.',
      bullets: [
        'Central API Gateway decoupling 3 services: inventory, maintenance and users.',
        '3 REST services with Express.js and Sequelize ORM on PostgreSQL, each with its own data layer.',
        'RESTful patterns with centralized validation and structured error handling — zero unhandled errors in testing.',
        'Automated multi-service startup with PowerShell and NGROK integration for endpoint exposure.'
      ]
    }
  },
  {
    id: 'faq', cat: 'opensource', mono: 'Cloud platform', type: 'web',
    img: 'assets/proj/faq.webp', shots: ['assets/proj/faq.webp'], accent: 'oklch(0.72 0.14 85)',
    tags: ['JavaScript', 'Cloud', 'NLP'],
    url: 'https://github.com/CubillosDev/everwood-faq-cloud-platform',
    es: {
      title: 'Everwood FAQ',
      sub: 'Plataforma cloud para análisis de conversaciones',
      desc: 'Plataforma cloud que analiza conversaciones y genera FAQs automáticamente a partir de ellas.',
      about: 'Plataforma en la nube enfocada en el análisis de conversaciones para detectar patrones y generar preguntas frecuentes de forma automática, ayudando a equipos de soporte a documentar lo que más preguntan sus usuarios.',
      bullets: [
        'Análisis de conversaciones para identificar las dudas más recurrentes.',
        'Generación automática de FAQs a partir de los datos procesados.',
        'Construido en JavaScript con enfoque cloud-first.'
      ]
    },
    en: {
      title: 'Everwood FAQ',
      sub: 'Cloud platform for conversation analysis',
      desc: 'A cloud platform that analyzes conversations and automatically generates FAQs from them.',
      about: 'A cloud-focused platform for analyzing conversations to detect patterns and automatically generate frequently asked questions, helping support teams document what their users ask most.',
      bullets: [
        'Conversation analysis to surface the most recurring questions.',
        'Automatic FAQ generation from the processed data.',
        'Built in JavaScript with a cloud-first approach.'
      ]
    }
  },
  {
    id: 'cms', cat: 'fullstack', mono: 'CMS · Flutter', type: 'mobile',
    img: 'assets/proj/latam-hero.webp', shots: LATAM_SHOTS, accent: 'oklch(0.55 0.2 300)',
    tags: ['Dart', 'Flutter', 'CMS'],
    url: 'https://github.com/CubillosDev/latam-comparte-cms',
    es: {
      title: 'LATAM Comparte CMS',
      sub: 'Gestor de contenidos en Flutter',
      desc: 'Sistema de gestión de contenidos construido con Flutter y Dart para una plataforma colaborativa.',
      about: 'CMS multiplataforma desarrollado con Flutter y Dart, pensado para administrar y publicar contenido de forma sencilla dentro de un ecosistema colaborativo.',
      bullets: [
        'Interfaz multiplataforma con Flutter y Dart.',
        'Gestión y publicación de contenido centralizada.',
        'Parte de un ecosistema colaborativo a nivel LATAM.'
      ]
    },
    en: {
      title: 'LATAM Comparte CMS',
      sub: 'Content manager in Flutter',
      desc: 'A content management system built with Flutter and Dart for a collaborative platform.',
      about: 'A cross-platform CMS built with Flutter and Dart, designed to manage and publish content easily within a collaborative ecosystem.',
      bullets: [
        'Cross-platform interface with Flutter and Dart.',
        'Centralized content management and publishing.',
        'Part of a LATAM-wide collaborative ecosystem.'
      ]
    }
  }
];

/* ---------- i18n strings ---------- */
const I18N = {
  es: {
    'nav.about': 'Sobre mí', 'nav.projects': 'Proyectos', 'nav.contact': 'Contacto',
    'home.name': 'Soy Diego Cubillos',
    'home.p1': 'Desarrollador <b>Full Stack</b> que construye productos completos — de la base de datos a la interfaz. Trabajo con TypeScript, React, Node.js, NestJS y Flutter en <a class="kw" data-view="projects">proyectos</a> reales con usuarios activos.',
    'home.p2': 'Me guío por <b>código limpio</b>, Clean Architecture y principios SOLID, buscando impacto medible en el negocio. Cuando no estoy programando, sigo aprendiendo y explorando nuevas tecnologías. ¿Construimos algo juntos? <a class="kw" data-view="contact">Contáctame</a>.',
    'home.seeMore': 'Ver más sobre mí',
    'about.title': 'Sobre mí.',
    'about.eduLabel': 'Educación', 'about.edu': 'Ingeniería de Sistemas', 'about.present': 'Presente',
    'about.certLabel': 'Certificación', 'about.stackLabel': 'Stack',
    'projects.title': 'Proyectos.',
    'contact.title': 'Hablemos.',
    'contact.lead': '¿Tienes un proyecto en mente, una vacante o simplemente quieres saludar? Mi bandeja siempre está abierta.',
    'contact.copy': 'copiar', 'contact.copied': 'copiado ✓',
    'contact.loc': 'Tunja, Boyacá · Colombia',
    'drawer.back': 'Volver a proyectos', 'drawer.about': 'Sobre el proyecto', 'drawer.high': 'Lo más destacado',
    'drawer.tech': 'Tecnologías', 'drawer.open': 'Ver en GitHub', 'drawer.screens': 'Pantallas',
    'about.rows': [
      { h: 'Backend & Arquitectura', link: 'Ver GitHub', url: 'https://github.com/CubillosDev',
        text: 'Diseño APIs y sistemas que escalan. He construido arquitecturas de microservicios con API Gateway, módulos de geolocalización en tiempo real con NestJS y suites de pruebas automatizadas con Jest y Supertest. Trabajo con controllers, services, guards y DTOs, junto a validación y autenticación segura, para mantener una base de código limpia y mantenible.' },
      { h: 'Frontend & UI', link: 'Ver proyectos', view: 'projects',
        text: 'Construyo interfaces rápidas y cuidadas con React 19, Vite y Tailwind CSS. Integro visualización de datos con Recharts y animaciones fluidas con Framer Motion, siempre buscando experiencias claras, accesibles y agradables de usar.' },
      { h: 'Mobile & Datos', link: 'Escríbeme', view: 'contact',
        text: 'Desarrollo apps móviles multiplataforma con Flutter y Dart, y modelo bases de datos relacionales sólidas con PostgreSQL. Conecto el mundo móvil con el backend mediante APIs REST bien documentadas con Swagger/OpenAPI.' }
    ],
    'filters': { all: 'Todos', fullstack: 'Full Stack', backend: 'Backend', opensource: 'Open Source' }
  },
  en: {
    'nav.about': 'About', 'nav.projects': 'Projects', 'nav.contact': 'Contact',
    'home.name': "I'm Diego Cubillos",
    'home.p1': 'A <b>Full Stack</b> developer building complete products — from the database to the interface. I work with TypeScript, React, Node.js, NestJS and Flutter on real <a class="kw" data-view="projects">projects</a> with active users.',
    'home.p2': "I'm guided by <b>clean code</b>, Clean Architecture and SOLID principles, aiming for measurable business impact. When I'm not coding, I keep learning and exploring new tech. Shall we build something together? <a class=\"kw\" data-view=\"contact\">Contact me</a>.",
    'home.seeMore': 'See more about me',
    'about.title': 'About me.',
    'about.eduLabel': 'Education', 'about.edu': 'Systems Engineering', 'about.present': 'Present',
    'about.certLabel': 'Certification', 'about.stackLabel': 'Stack',
    'projects.title': 'Projects.',
    'contact.title': "Let's talk.",
    'contact.lead': 'Got a project in mind, a job opening, or just want to say hi? My inbox is always open.',
    'contact.copy': 'copy', 'contact.copied': 'copied ✓',
    'contact.loc': 'Tunja, Boyacá · Colombia',
    'drawer.back': 'Back to projects', 'drawer.about': 'About the project', 'drawer.high': 'Highlights',
    'drawer.tech': 'Technologies', 'drawer.open': 'View on GitHub', 'drawer.screens': 'Screens',
    'about.rows': [
      { h: 'Backend & Architecture', link: 'View GitHub', url: 'https://github.com/CubillosDev',
        text: 'I design APIs and systems that scale. I have built microservices architectures with an API Gateway, real-time geolocation modules with NestJS and automated test suites with Jest and Supertest. I work with controllers, services, guards and DTOs, plus validation and secure authentication, to keep a clean, maintainable codebase.' },
      { h: 'Frontend & UI', link: 'View projects', view: 'projects',
        text: 'I build fast, polished interfaces with React 19, Vite and Tailwind CSS. I integrate data visualization with Recharts and smooth animations with Framer Motion, always aiming for clear, accessible and pleasant experiences.' },
      { h: 'Mobile & Data', link: 'Write me', view: 'contact',
        text: 'I develop cross-platform mobile apps with Flutter and Dart, and model solid relational databases with PostgreSQL. I connect the mobile world to the backend through REST APIs well documented with Swagger/OpenAPI.' }
    ],
    'filters': { all: 'All', fullstack: 'Full Stack', backend: 'Backend', opensource: 'Open Source' }
  }
};

/* ---------- State ---------- */
let lang = localStorage.getItem('lang') || 'en';
let theme = localStorage.getItem('theme') || 'light';
let view = 'home';
let filter = 'all';

const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];

/* ---------- Render: socials ---------- */
function renderSocials(el) {
  el.innerHTML = SOCIALS.map(s =>
    `<a href="${s.url}" target="_blank" rel="noopener" aria-label="${s.label}">${ICONS[s.icon]}</a>`
  ).join('');
}

/* ---------- Render: hero name (letter animation) ---------- */
function renderName() {
  const txt = I18N[lang]['home.name'];
  $('#heroName').textContent = txt;
  $$('.ghost').forEach(g => g.textContent = txt);
}

/* ---------- Render: about ---------- */
function renderAbout() {
  const t = I18N[lang];
  $('#aboutRows').innerHTML = t['about.rows'].map(r => {
    const linkAttr = r.url ? `href="${r.url}" target="_blank" rel="noopener"` : `href="#" data-view="${r.view}"`;
    return `<div class="about-row">
      <div class="row-head"><span class="marker"></span><h3>${r.h}</h3></div>
      <a class="row-link" ${linkAttr}>${r.link}</a>
      <p class="row-text">${r.text}</p>
    </div>`;
  }).join('');
  $('#stackTags').innerHTML = STACK.map(s => `<span>${s}</span>`).join('');
}

/* ---------- Render: projects ---------- */
function renderFilters() {
  const f = I18N[lang]['filters'];
  $('#filters').innerHTML = Object.keys(f).map(k =>
    `<button data-filter="${k}" class="${filter === k ? 'active' : ''}">${f[k]}</button>`
  ).join('');
}

function renderProjects() {
  const grid = $('#projectGrid');
  const list = PROJECTS.filter(p => filter === 'all' || p.cat === filter);
  grid.innerHTML = list.map(p => {
    const d = p[lang];
    return `<article class="pcard" data-id="${p.id}">
      <div class="pcard-cover ${p.type}" style="--pa:${p.accent}"><img src="${p.img}" alt="${d.title}" loading="lazy"></div>
      <div class="pcard-body">
        <span class="pcard-kicker">${p.mono}</span>
        <h3>${d.title}</h3>
        <p>${d.desc}</p>
        <div class="ptags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
      </div>
    </article>`;
  }).join('');
}

/* ---------- Drawer ---------- */
function openDrawer(id) {
  const p = PROJECTS.find(x => x.id === id);
  if (!p) return;
  const d = p[lang], t = I18N[lang];
  const screens = p.type === 'mobile'
    ? `<h4>${t['drawer.screens']}</h4>
      <div class="d-shots" style="--pa:${p.accent}">
        <div class="d-gallery mobile">${p.shots.map(s => `<img src="${s}" alt="" loading="lazy" draggable="false">`).join('')}</div>
        <button class="g-nav prev" aria-label="Anterior"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15,5 8,12 15,19"></polyline></svg></button>
        <button class="g-nav next" aria-label="Siguiente"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9,5 16,12 9,19"></polyline></svg></button>
      </div>`
    : '';
  $('#drawerBody').innerHTML = `
    <div class="d-hero"><img src="${p.img}" alt="${d.title}"></div>
    <div class="d-pad">
      <span class="d-kicker">${p.mono}</span>
      <h2>${d.title}</h2>
      <p class="d-sub">${d.sub}</p>
      <h4>${t['drawer.about']}</h4>
      <p class="d-about">${d.about}</p>
      <h4>${t['drawer.high']}</h4>
      <ul class="d-bullets">${d.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
      ${screens}
      <h4>${t['drawer.tech']}</h4>
      <div class="ptags">${p.tags.map(x => `<span>${x}</span>`).join('')}</div>
    </div>
  `;
  $('#drawerFoot').innerHTML = `<a class="drawer-link" href="${p.url}" target="_blank" rel="noopener"><span>${t['drawer.open']}</span> ${ICONS.github}</a>`;
  $('#drawerBody').scrollTop = 0;
  $('#drawer').classList.add('open');
  $('#drawerOverlay').classList.add('open');
  document.body.classList.add('no-scroll');
}
function closeDrawer() {
  $('#drawer').classList.remove('open');
  $('#drawerOverlay').classList.remove('open');
  document.body.classList.remove('no-scroll');
}

/* ---------- i18n apply ---------- */
function applyI18n() {
  const t = I18N[lang];
  $$('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined && typeof t[key] === 'string') el.textContent = t[key];
  });
  $('#heroP1').innerHTML = t['home.p1'];
  $('#heroP2').innerHTML = t['home.p2'];
  $('#contactLead').textContent = t['contact.lead'];
  $('#contactLoc').textContent = t['contact.loc'];
  $('.email-copy').textContent = t['contact.copy'];
  document.documentElement.lang = lang;
  renderName();
  renderAbout();
  renderFilters();
  renderProjects();
}

/* ---------- View switching ---------- */
function getInitialView() {
  const redirected = new URLSearchParams(location.search).get('view');
  const path = location.pathname.replace(/\/$/, '') || '/';
  return ROUTE_VIEWS['/' + redirected] || ROUTE_VIEWS[path] || 'home';
}

function setView(next, opts = {}) {
  if (!ROUTES[next]) next = 'home';
  const shouldUpdateUrl = opts.updateUrl !== false;
  const route = ROUTES[next];
  if (shouldUpdateUrl && location.pathname !== route) {
    const method = opts.replace ? 'replaceState' : 'pushState';
    history[method]({ view: next }, '', route);
  }
  if (next === view) return;
  view = next;
  $$('.view').forEach(v => v.classList.toggle('is-active', v.id === next));
  $$('.nav-links a').forEach(a => a.classList.toggle('active', a.getAttribute('data-view') === next));
  $$('.view-scroll').forEach(v => { if (v.id === next) v.scrollTop = 0; });
  document.querySelector('.nav').classList.remove('open');
  document.body.classList.remove('no-scroll');
}

/* ---------- Theme & lang ---------- */
function applyTheme() {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}
function toggleTheme() { theme = theme === 'light' ? 'dark' : 'light'; applyTheme(); }
function toggleLang() { lang = lang === 'es' ? 'en' : 'es'; localStorage.setItem('lang', lang); applyI18n(); }

/* ---------- Mouse effects ---------- */
function initMouse() {
  const blobs = $('.blobs'), initials = $('.initials'), ring = $('.float-ring');
  let raf = null, tx = 0, ty = 0, cx = 0, cy = 0;
  window.addEventListener('pointermove', e => {
    if (e.pointerType === 'touch') return;
    document.body.classList.add('has-pointer');
    document.documentElement.style.setProperty('--mx', e.clientX + 'px');
    document.documentElement.style.setProperty('--my', e.clientY + 'px');
    tx = (e.clientX / window.innerWidth - 0.5);
    ty = (e.clientY / window.innerHeight - 0.5);
    if (!raf) raf = requestAnimationFrame(loop);
  });
  function loop() {
    cx += (tx - cx) * 0.06; cy += (ty - cy) * 0.06;
    blobs.style.transform = `translate(${cx * -26}px, ${cy * -26}px)`;
    initials.style.transform = `translate(${cx * 36}px, ${cy * 26}px)`;
    ring.style.transform = `translate(${cx * 50}px, ${cy * 50}px)`;
    if (Math.abs(tx - cx) > 0.001 || Math.abs(ty - cy) > 0.001) { raf = requestAnimationFrame(loop); }
    else raf = null;
  }
}

/* ---------- Events ---------- */
function initEvents() {
  document.addEventListener('click', e => {
    const navEl = e.target.closest('[data-view]');
    if (navEl) { e.preventDefault(); setView(navEl.getAttribute('data-view')); return; }
    const card = e.target.closest('.pcard');
    if (card) { openDrawer(card.getAttribute('data-id')); return; }
    const fbtn = e.target.closest('[data-filter]');
    if (fbtn) { filter = fbtn.getAttribute('data-filter'); renderFilters(); renderProjects(); return; }
    const gnav = e.target.closest('.g-nav');
    if (gnav) {
      const gal = gnav.closest('.d-shots').querySelector('.d-gallery');
      const item = gal.querySelector('img');
      const step = item ? item.offsetWidth + 16 : 300;
      gal.scrollBy({ left: gnav.classList.contains('next') ? step : -step, behavior: 'smooth' });
      return;
    }
  });

  $('#langBtn').addEventListener('click', toggleLang);
  $('#themeBtn').addEventListener('click', toggleTheme);
  $('#menuBtn').addEventListener('click', () => document.querySelector('.nav').classList.toggle('open'));
  $('#drawerClose').addEventListener('click', closeDrawer);
  $('#drawerOverlay').addEventListener('click', closeDrawer);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDrawer(); });
  window.addEventListener('popstate', () => setView(getInitialView(), { updateUrl: false }));

  $('#emailPill').addEventListener('click', () => {
    navigator.clipboard?.writeText(EMAIL);
    const pill = $('#emailPill');
    pill.classList.add('copied');
    $('.email-copy').textContent = I18N[lang]['contact.copied'];
    setTimeout(() => { pill.classList.remove('copied'); $('.email-copy').textContent = I18N[lang]['contact.copy']; }, 1600);
  });
}

/* ---------- Init ---------- */
function init() {
  applyTheme();
  renderSocials($('#homeSocials'));
  renderSocials($('#contactSocials'));
  const et = $('.email-text'); if (et) et.textContent = EMAIL;
  applyI18n();
  setView(getInitialView(), { replace: true });
  initEvents();
  initMouse();
}
init();
