/* =========================================================
   AFONSO.DEV — script
   Para adicionar um projeto novo: copie um item do array
   PROJETOS, mude os dados e coloque a imagem em assets/projetos/.
   ========================================================= */

const PROJETOS = [
  {
    num: '01',
    nome: '7Edu du Corte',
    tipo: 'Site + painel para barbearia',
    descricao: 'Site próprio da barbearia com agendamento e painel de gestão para o dono.',
    tags: ['Agendamento', 'Painel de gestão'],
    status: 'No ar',
    link: 'https://7edu-du-corte.vercel.app',
    imagem: '7edu.jpg',
    categoria: 'sites',
    capa: { icone: 'scissors', arte: 'agenda', rotulo: 'Barbearia' },
    alt: 'Tela inicial do site da barbearia 7Edu du Corte'
  },
  {
    num: '02',
    nome: 'Black Bread Burger',
    tipo: 'Cardápio online interativo',
    descricao: 'Cardápio com identidade rock da hamburgueria; o pedido vai direto para o WhatsApp com a mensagem pronta.',
    tags: ['Cardápio digital', 'Pedido no WhatsApp'],
    status: 'No ar',
    link: 'https://black-bread-burger.vercel.app',
    imagem: 'black-bread.jpg',
    categoria: 'sites',
    capa: { icone: 'flame', arte: 'cardapio', rotulo: 'Hamburgueria' },
    alt: 'Tela inicial do cardápio online da Black Bread Burger'
  },
  {
    num: '03',
    nome: "Jacob's Music Pub",
    tipo: 'Cardápio digital para pub',
    descricao: 'Cardápio com identidade forte de bar com música ao vivo, aberto pelo QR code da placa na mesa.',
    tags: ['Cardápio digital', 'QR code de mesa'],
    status: 'Demonstração',
    link: '',
    imagem: 'jacobs-pub.jpg',
    categoria: 'sites',
    capa: { icone: 'beer', arte: 'pub', rotulo: 'Pub com música ao vivo' },
    alt: "Tela inicial do cardápio digital do Jacob's Music Pub"
  },
  {
    num: '04',
    nome: 'Villa Boulevard',
    tipo: 'Site-cardápio cinematográfico',
    descricao: 'Site do restaurante com vídeo de abertura "A Alameda", paleta verde-petróleo e dourado.',
    tags: ['Vídeo de abertura', 'Cardápio', 'Identidade própria'],
    status: 'Demonstração',
    link: '',
    imagem: 'villa-boulevard.jpg',
    categoria: 'sites',
    capa: { icone: 'utensils', arte: 'restaurante', rotulo: 'Restaurante' },
    alt: 'Tela inicial do site-cardápio do restaurante Villa Boulevard'
  },
  {
    num: '05',
    nome: 'Adocicada Confeitaria',
    tipo: 'Loja online de bolos e doces',
    descricao: 'Site de vendas da confeitaria com página de entrada em vitrine animada e loja completa.',
    tags: ['Vitrine animada', 'Loja online', 'Feito para celular'],
    status: 'No ar',
    link: 'https://adocicadaconfeitaria.vercel.app',
    imagem: 'adocicada.jpg',
    categoria: 'sites',
    capa: { icone: 'cake', arte: 'loja', rotulo: 'Confeitaria' },
    alt: 'Tela inicial do site da Adocicada Confeitaria'
  },
  {
    num: '06',
    nome: 'Pipeline de Vídeos Virais',
    tipo: 'Automação com IA',
    descricao: 'Fluxo automático em n8n/Make: pesquisa de tendências, roteiro com IA, narração, edição e postagem no TikTok.',
    tags: ['n8n', 'Make', 'IA', 'TikTok'],
    status: 'Protótipo',
    link: '',
    imagem: 'pipeline-videos.jpg',
    categoria: 'automacao',
    capa: { icone: 'workflow', arte: 'fluxo', rotulo: 'Automação' },
    alt: 'Fluxo de automação do pipeline de vídeos virais'
  },
  {
    num: '07',
    nome: 'Analisador de Memecoins',
    tipo: 'Agente de IA',
    descricao: 'Agente que avalia o risco de tokens lançados na pump.fun (Solana).',
    tags: ['IA', 'Solana', 'Análise de risco'],
    status: 'Em desenvolvimento',
    link: '',
    imagem: 'memecoins.jpg',
    categoria: 'automacao',
    capa: { icone: 'activity', arte: 'candles', rotulo: 'Agente de IA' },
    alt: 'Painel do analisador de risco de memecoins'
  }
];

const PASTA_IMAGENS = 'assets/projetos/';
const PRINT_AUTOMATICO = 'https://image.thum.io/get/width/1280/crop/800/';

const reduzMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const temGSAP = typeof window.gsap !== 'undefined';
const animar = temGSAP && !reduzMovimento;

/* ---------- Mini-ilustrações das capas geradas ---------- */
const ARTES = {
  fluxo: `
    <svg viewBox="0 0 200 140" fill="none" stroke="currentColor" stroke-width="1.5">
      <rect x="6" y="14" width="44" height="26" rx="3"/>
      <rect x="78" y="14" width="44" height="26" rx="3"/>
      <rect x="150" y="14" width="44" height="26" rx="3" fill="currentColor" fill-opacity=".18"/>
      <rect x="42" y="96" width="44" height="26" rx="3"/>
      <rect x="114" y="96" width="44" height="26" rx="3" fill="currentColor" fill-opacity=".18"/>
      <path d="M50 27h28M122 27h28M172 40v28H64v28M86 109h28" stroke-dasharray="3 3"/>
      <circle cx="78" cy="27" r="2.5" fill="currentColor"/><circle cx="150" cy="27" r="2.5" fill="currentColor"/>
      <circle cx="64" cy="96" r="2.5" fill="currentColor"/><circle cx="114" cy="109" r="2.5" fill="currentColor"/>
      <g stroke="#8c8c8c" stroke-width="1"><path d="M14 24h20M14 30h28M86 24h20M86 30h28M50 106h20M50 112h28M158 24h20M158 30h28M122 106h20M122 112h28"/></g>
    </svg>`,
  candles: `
    <svg viewBox="0 0 200 140" fill="none" stroke-width="1.5">
      <g stroke="#8c8c8c" stroke-width="1"><path d="M0 120h140"/></g>
      <g stroke="currentColor">
        <path d="M14 30v60"/><rect x="9" y="40" width="10" height="34" fill="currentColor"/>
        <path d="M34 50v52" stroke="#8c8c8c"/><rect x="29" y="58" width="10" height="30" fill="#2a2a2a" stroke="#8c8c8c"/>
        <path d="M54 22v48"/><rect x="49" y="28" width="10" height="30" fill="currentColor"/>
        <path d="M74 40v70" stroke="#8c8c8c"/><rect x="69" y="50" width="10" height="44" fill="#2a2a2a" stroke="#8c8c8c"/>
        <path d="M94 70v44" stroke="#8c8c8c"/><rect x="89" y="78" width="10" height="26" fill="#2a2a2a" stroke="#8c8c8c"/>
        <path d="M114 90v26"/><rect x="109" y="94" width="10" height="16" fill="currentColor"/>
      </g>
      <g transform="translate(168 104)">
        <path d="M-26 0a26 26 0 0 1 52 0" stroke="#2a2a2a" stroke-width="6"/>
        <path d="M-26 0a26 26 0 0 1 44-18.4" stroke="currentColor" stroke-width="6"/>
        <path d="M0 0L16 -16" stroke="#f2f2f2" stroke-width="2"/>
        <circle r="3" fill="#f2f2f2"/>
        <text y="18" text-anchor="middle" fill="#8c8c8c" font-size="9" font-family="Inter, sans-serif" letter-spacing="1">RISCO</text>
      </g>
    </svg>`,
  pub: `
    <svg viewBox="0 0 200 140" fill="currentColor">
      <rect x="20" y="70" width="12" height="50"/><rect x="40" y="40" width="12" height="80" fill-opacity=".55"/>
      <rect x="60" y="20" width="12" height="100"/><rect x="80" y="56" width="12" height="64" fill-opacity=".55"/>
      <rect x="100" y="34" width="12" height="86"/><rect x="120" y="80" width="12" height="40" fill-opacity=".55"/>
      <rect x="140" y="50" width="12" height="70"/><rect x="160" y="88" width="12" height="32" fill-opacity=".55"/>
      <g fill="none" stroke="#8c8c8c" stroke-width="1.5"><rect x="150" y="4" width="34" height="34"/><path d="M156 10h8v8h-8zM170 10h8v8h-8zM156 24h8v8h-8zM172 26h4v4h-4z"/></g>
    </svg>`,
  restaurante: `
    <svg viewBox="0 0 200 140" fill="none" stroke="currentColor" stroke-width="1.5">
      <path d="M20 130V60a30 30 0 0 1 60 0v70M120 130V60a30 30 0 0 1 60 0v70"/>
      <path d="M32 130V64a18 18 0 0 1 36 0v66M132 130V64a18 18 0 0 1 36 0v66" stroke="#8c8c8c" stroke-width="1"/>
      <path d="M0 130h200" stroke="#8c8c8c"/>
      <circle cx="100" cy="30" r="10" fill="currentColor" fill-opacity=".2"/>
      <path d="M90 50h20M100 50v80" stroke="#8c8c8c" stroke-dasharray="2 4"/>
    </svg>`,
  agenda: `
    <svg viewBox="0 0 200 140" fill="none" stroke-width="1.5">
      <rect x="10" y="10" width="180" height="120" rx="3" stroke="#8c8c8c" stroke-width="1"/>
      <path d="M10 34h180" stroke="#8c8c8c" stroke-width="1"/>
      <g stroke="#2a2a2a" fill="#161616">
        <rect x="22" y="46" width="44" height="18"/><rect x="78" y="46" width="44" height="18"/><rect x="134" y="46" width="44" height="18"/>
        <rect x="22" y="74" width="44" height="18"/><rect x="134" y="74" width="44" height="18"/>
        <rect x="22" y="102" width="44" height="18"/><rect x="78" y="102" width="44" height="18"/>
      </g>
      <rect x="78" y="74" width="44" height="18" fill="currentColor" stroke="currentColor"/>
      <rect x="134" y="102" width="44" height="18" stroke="currentColor"/>
      <path d="M24 22h40" stroke="currentColor"/>
    </svg>`,
  cardapio: `
    <svg viewBox="0 0 200 140" fill="none" stroke-width="1.5">
      <rect x="60" y="4" width="80" height="132" rx="10" stroke="#8c8c8c" stroke-width="1"/>
      <rect x="70" y="18" width="60" height="34" fill="currentColor" fill-opacity=".25" stroke="currentColor"/>
      <g stroke="#8c8c8c" stroke-width="1"><path d="M70 64h40M70 72h28M70 88h40M70 96h28"/></g>
      <g fill="currentColor"><circle cx="124" cy="68" r="5"/><circle cx="124" cy="92" r="5"/></g>
      <rect x="70" y="110" width="60" height="14" rx="2" fill="currentColor"/>
    </svg>`,
  loja: `
    <svg viewBox="0 0 200 140" fill="none" stroke-width="1.5">
      <g stroke="#8c8c8c" stroke-width="1"><rect x="10" y="20" width="56" height="70"/><rect x="72" y="20" width="56" height="70"/><rect x="134" y="20" width="56" height="70"/></g>
      <g fill="currentColor" fill-opacity=".25" stroke="currentColor"><circle cx="38" cy="50" r="16"/><circle cx="100" cy="50" r="16"/><circle cx="162" cy="50" r="16"/></g>
      <g stroke="#8c8c8c" stroke-width="1"><path d="M18 100h40M80 100h40M142 100h40"/></g>
      <rect x="18" y="112" width="40" height="12" fill="currentColor"/><rect x="80" y="112" width="40" height="12" fill="currentColor"/><rect x="142" y="112" width="40" height="12" fill="currentColor"/>
    </svg>`
};

function criarCapa(p) {
  const capa = document.createElement('div');
  capa.className = 'cover';
  capa.setAttribute('role', 'img');
  capa.setAttribute('aria-label', `Capa ilustrativa do projeto ${p.nome}`);
  capa.innerHTML = `
    <div class="cover-left">
      <span class="cover-icon"><i data-lucide="${p.capa.icone}"></i></span>
      <div class="cover-name">${p.nome}<span class="cover-tag">${p.capa.rotulo.toUpperCase()}</span></div>
    </div>
    <div class="cover-art" aria-hidden="true">${ARTES[p.capa.arte] || ''}</div>`;
  return capa;
}

/* Imagem com 3 tentativas: arquivo local → print automático do site → capa gerada */
function montarImagem(container, p, { lazy = true } = {}) {
  const img = new Image();
  img.alt = p.alt;
  img.width = 1280;
  img.height = 800;
  img.decoding = 'async';
  if (lazy) img.loading = 'lazy';

  let tentouPrint = false;
  const usarCapa = () => {
    p._src = null;
    p._capa = true;
    img.replaceWith(criarCapa(p));
    desenharIcones();
  };
  img.addEventListener('load', () => {
    // o thum.io devolve uma imagem de aviso (1280×853) quando recusa o print
    if (tentouPrint && img.naturalHeight !== 800) return usarCapa();
    img.classList.add('is-loaded');
    p._src = img.currentSrc || img.src;
  });
  img.addEventListener('error', () => {
    if (!tentouPrint && p.link) {
      tentouPrint = true;
      img.src = PRINT_AUTOMATICO + p.link;
      return;
    }
    usarCapa();
  });

  img.src = PASTA_IMAGENS + p.imagem;
  container.appendChild(img);
}

function desenharIcones() {
  // troca todos os <i data-lucide> que ainda não viraram SVG
  if (!window.lucide) return;
  window.lucide.createIcons({ icons: window.lucide.icons, attrs: { 'stroke-width': 1.5, 'aria-hidden': 'true' } });
}

/* ---------- Cards de projetos ---------- */
const grade = document.getElementById('gradeProjetos');

function criarCard(p, indice) {
  const card = document.createElement('article');
  card.className = 'card';
  card.dataset.cat = p.categoria;

  const aoVivo = p.status.toLowerCase() === 'no ar';
  const nomeTag = p.link ? 'a' : 'button';
  const atribLink = p.link
    ? `href="${p.link}" target="_blank" rel="noopener"`
    : 'type="button"';

  card.innerHTML = `
    <button type="button" class="card-media" aria-label="Ampliar imagem do projeto ${p.nome}"></button>
    <div class="card-info">
      <span class="card-num" aria-hidden="true">${p.num}</span>
      <div>
        <${nomeTag} class="card-name" ${atribLink}>${p.nome}</${nomeTag}>
        <span class="card-type">${p.tipo}</span>
        <span class="badge ${aoVivo ? 'is-live' : ''}">${p.status}</span>
      </div>
      <${nomeTag} class="card-arrow" ${atribLink}
        aria-label="${p.link ? `Abrir o site ${p.nome} em nova aba` : `Ver detalhes do projeto ${p.nome}`}">
        <i data-lucide="arrow-right"></i>
      </${nomeTag}>
    </div>`;

  montarImagem(card.querySelector('.card-media'), p);

  card.querySelector('.card-media').addEventListener('click', (e) => abrirJanela(indice, e.currentTarget));
  if (!p.link) {
    card.querySelectorAll('.card-name, .card-arrow').forEach((el) =>
      el.addEventListener('click', (e) => abrirJanela(indice, e.currentTarget))
    );
  }
  return card;
}

PROJETOS.forEach((p, i) => grade.appendChild(criarCard(p, i)));

/* ---------- Filtros ---------- */
const filtros = document.querySelectorAll('.filter');
filtros.forEach((botao) => {
  botao.addEventListener('click', () => {
    if (botao.classList.contains('is-active')) return;
    filtros.forEach((b) => {
      b.classList.toggle('is-active', b === botao);
      b.setAttribute('aria-pressed', b === botao ? 'true' : 'false');
    });
    filtrar(botao.dataset.filter);
  });
});

function filtrar(cat) {
  const cards = [...grade.children];
  const mostrar = (c) => cat === 'todos' || c.dataset.cat === cat;

  if (!animar) {
    cards.forEach((c) => (c.hidden = !mostrar(c)));
    return;
  }

  const visiveis = cards.filter((c) => !c.hidden);
  gsap.to(visiveis, {
    opacity: 0,
    y: 16,
    duration: 0.25,
    stagger: 0.03,
    ease: 'power2.in',
    onComplete: () => {
      cards.forEach((c) => (c.hidden = !mostrar(c)));
      const novos = cards.filter((c) => !c.hidden);
      gsap.fromTo(
        novos,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.07, ease: 'power3.out', clearProps: 'transform' }
      );
      if (window.ScrollTrigger) ScrollTrigger.refresh();
    }
  });
}

/* ---------- Janela de ampliação ---------- */
const janela = document.getElementById('lightbox');
const lbMidia = document.getElementById('lbMidia');
const lbLink = document.getElementById('lbLink');
let ultimoFoco = null;

function abrirJanela(indice, origem) {
  const p = PROJETOS[indice];
  ultimoFoco = origem || document.activeElement;

  lbMidia.innerHTML = '';
  if (p._src) {
    const img = new Image();
    img.src = p._src;
    img.alt = p.alt;
    lbMidia.appendChild(img);
  } else if (p._capa) {
    lbMidia.appendChild(criarCapa(p));
    desenharIcones();
  } else {
    montarImagem(lbMidia, p, { lazy: false });
  }

  document.getElementById('lbNum').textContent = p.num;
  document.getElementById('lbTitulo').textContent = p.nome;
  document.getElementById('lbTipo').textContent = `${p.tipo} · ${p.status}`;
  document.getElementById('lbDesc').textContent = p.descricao;
  document.getElementById('lbTags').innerHTML = p.tags.map((t) => `<li>${t}</li>`).join('');

  if (p.link) {
    lbLink.href = p.link;
    lbLink.hidden = false;
  } else {
    lbLink.removeAttribute('href');
    lbLink.hidden = true;
  }

  janela.hidden = false;
  document.body.classList.add('no-scroll');
  requestAnimationFrame(() => janela.classList.add('is-open'));
  document.getElementById('lbFechar').focus();
}

function fecharJanela() {
  if (janela.hidden) return;
  janela.classList.remove('is-open');
  document.body.classList.remove('no-scroll');
  setTimeout(() => {
    janela.hidden = true;
    lbMidia.innerHTML = '';
  }, reduzMovimento ? 0 : 300);
  if (ultimoFoco) ultimoFoco.focus();
}

document.getElementById('lbFechar').addEventListener('click', fecharJanela);
janela.addEventListener('click', (e) => {
  if (e.target === janela) fecharJanela();
});
document.addEventListener('keydown', (e) => {
  if (janela.hidden) return;
  if (e.key === 'Escape') fecharJanela();
  if (e.key === 'Tab') {
    // mantém o foco dentro da janela
    const focaveis = [...janela.querySelectorAll('button, a[href]')].filter((el) => !el.hidden);
    const primeiro = focaveis[0];
    const ultimo = focaveis[focaveis.length - 1];
    if (e.shiftKey && document.activeElement === primeiro) { e.preventDefault(); ultimo.focus(); }
    else if (!e.shiftKey && document.activeElement === ultimo) { e.preventDefault(); primeiro.focus(); }
  }
});

/* ---------- Notebook do rodapé (mostra o projeto 02, depois o 01) ---------- */
(function telaNotebook() {
  const tela = document.getElementById('telaNotebook');
  const p = { ...PROJETOS[1] };
  montarImagem(tela, p);
})();

/* ---------- "PORTFÓLIO" letra por letra + ajuste à largura ---------- */
const palavra = document.getElementById('heroWord');
palavra.innerHTML = [...palavra.textContent.trim()].map((l) => `<span class="l">${l}</span>`).join('');

function ajustarPalavra() {
  const largura = palavra.parentElement.clientWidth -
    parseFloat(getComputedStyle(palavra.parentElement).paddingLeft) * 2;
  palavra.style.fontSize = '100px';
  const medida = [...palavra.children].reduce((soma, l) => soma + l.getBoundingClientRect().width, 0);
  if (medida > 0) palavra.style.fontSize = `${Math.floor((100 * largura) / medida * 0.995)}px`;
}
ajustarPalavra();
if (document.fonts && document.fonts.ready) document.fonts.ready.then(ajustarPalavra);
let tempoRedim;
window.addEventListener('resize', () => {
  clearTimeout(tempoRedim);
  tempoRedim = setTimeout(() => {
    ajustarPalavra();
    if (window.ScrollTrigger) ScrollTrigger.refresh();
  }, 120);
});

/* ---------- Ícones ---------- */
desenharIcones();

/* ---------- Animações ---------- */
const contadores = document.querySelectorAll('[data-count]');

function contar(el) {
  const alvo = Number(el.dataset.count);
  const obj = { v: 0 };
  el.textContent = '0';
  gsap.to(obj, {
    v: alvo,
    duration: 1.4,
    ease: 'power2.out',
    onUpdate: () => (el.textContent = Math.round(obj.v))
  });
}

if (animar) {
  window.__animOk = true;
  if (window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

  const letras = palavra.querySelectorAll('.l');
  const esquerda = document.querySelectorAll('.hero-left [data-intro]');
  const direita = document.querySelectorAll('.hero-right [data-intro]');

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  tl.fromTo(letras, { yPercent: 110, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1, duration: 0.9, stagger: 0.05 })
    .fromTo('.hero-photo', { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, duration: 1 }, '-=0.35')
    .fromTo(esquerda, { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.08 }, '-=0.55')
    .fromTo(direita, { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.08 }, '<0.15')
    .add(() => contadores.forEach(contar), '<');

  if (window.ScrollTrigger) {
    // profundidade: PORTFÓLIO anda mais devagar que a foto
    gsap.to('.hero-word-wrap', {
      yPercent: 35,
      ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
    });

    gsap.utils.toArray('[data-reveal]').forEach((el) => {
      gsap.from(el, {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 85%', once: true }
      });
    });

    ScrollTrigger.batch('.card', {
      start: 'top 90%',
      once: true,
      onEnter: (lote) =>
        gsap.fromTo(lote, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out', clearProps: 'transform' })
    });
    gsap.set('.card', { opacity: 0 });
  }
} else {
  document.documentElement.classList.remove('js-anim');
}
