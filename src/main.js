
const t = {
pt: {
    bio: '// sei la, não sei o que dizer',
    portfolio: 'Portfólio',
    substack: 'Newsletter',
    divider: 'REDES',
    htmlLang: 'pt-BR',
    footer: '// feito para centralizar minhas coisas &amp; bruh',
},
en: {
    bio: '// Idk what to say',
    portfolio: 'Portfolio',
    substack: 'Newsletter',
    divider: 'SOCIALS',
    htmlLang: 'en',
    footer: '// made to centralize my stuff &amp; bruh',
},
};

let lang = 'pt';
let mode = 'light';

function setLang(l) {
lang = l;
document.documentElement.lang = t[l].htmlLang;
document.getElementById('bio').textContent = t[l].bio;
document.getElementById('lbl-portfolio').textContent = t[l].portfolio;
document.getElementById('lbl-substack').textContent = t[l].substack;
document.getElementById('divider-label').textContent = t[l].divider;
document.getElementById('footer').textContent = t[l].footer;
document.getElementById('btn-pt').classList.toggle('active', l === 'pt');
document.getElementById('btn-en').classList.toggle('active', l === 'en');
document.getElementById('btn-pt').setAttribute('aria-pressed', l === 'pt');
document.getElementById('btn-en').setAttribute('aria-pressed', l === 'en');
}

function setMode(m) {
mode = m;
document.body.classList.toggle('dark', m === 'dark');
document.getElementById('btn-light').classList.toggle('active', m === 'light');
document.getElementById('btn-dark').classList.toggle('active', m === 'dark');
document.getElementById('btn-light').setAttribute('aria-pressed', m === 'light');
document.getElementById('btn-dark').setAttribute('aria-pressed', m === 'dark');
}

// Sistema de preferência do OS
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
setMode('dark');
}

setLang('pt');

const canvas = document.getElementById('bg');
const ctx = canvas.getContext('2d');
let W, H, shapes = [], raf;

function resize() {
W = canvas.width  = window.innerWidth;
H = canvas.height = window.innerHeight;
}

function isDark() { return document.body.classList.contains('dark'); }

function palette() {
return isDark()
    ? ['#ff3f3f55','#3b83f655','#22c55e42','#f59f0b3c','#a955f746']
    : ['#ff3f3fb7','#3b83f6a0','#22c55eae','#f59f0b9e','#a955f79b'];
}

function borderCol() {
return isDark() ? 'rgba(240, 235, 224, 0.2)' : 'rgba(26, 26, 26, 0.39)';
}

function initShapes() {
shapes = [];
const p = palette();
for (let i = 0; i < 20; i++) {
    shapes.push({
    x: Math.random() * W,
    y: Math.random() * H,
    w: 20 + Math.random() * 60,
    h: 20 + Math.random() * 60,
    rot: Math.random() * Math.PI * 2,
    rotV: (Math.random() - 0.5) * 0.013,
    dx: (Math.random() - 0.5) * 0.35,
    dy: (Math.random() - 0.5) * 0.35,
    ci: Math.floor(Math.random() * p.length),
    type: Math.random() > 0.42 ? 'rect' : 'circle',
    });
}
}

function drawShape(s) {
const p = palette();
ctx.save();
ctx.translate(s.x, s.y);
ctx.rotate(s.rot);
ctx.fillStyle = p[s.ci % p.length];
ctx.strokeStyle = borderCol();
ctx.lineWidth = 1.5;
if (s.type === 'rect') {
    ctx.fillRect(-s.w / 2, -s.h / 2, s.w, s.h);
    ctx.strokeRect(-s.w / 2, -s.h / 2, s.w, s.h);
} else {
    ctx.beginPath();
    ctx.arc(0, 0, s.w / 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
}
ctx.restore();
}

function tick() {
ctx.clearRect(0, 0, W, H);
shapes.forEach(s => {
    s.rot += s.rotV;
    s.x   += s.dx;
    s.y   += s.dy;
    if (s.x < -70) s.x = W + 70;
    if (s.x > W + 70) s.x = -70;
    if (s.y < -70) s.y = H + 70;
    if (s.y > H + 70) s.y = -70;
    drawShape(s);
});
raf = requestAnimationFrame(tick);
}

function start() {
cancelAnimationFrame(raf);
resize();
initShapes();
tick();
}

window.addEventListener('resize', () => { resize(); });
start();