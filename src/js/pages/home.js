// Rasto de cor que segue o cursor ("let the colours appear").
const canvas = document.getElementById('color-trail');
const ctx = canvas.getContext('2d');
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

// Mesmas cores do gradiente definido em tokens.css
const PALETTE = ['#2a9d8f', '#8ab72d', '#f4b400', '#f08a24', '#d9462f', '#8c3f8f'];
const dots = [];
let hue = 0;

function resize() {
  const dpr = devicePixelRatio || 1;
  canvas.width = canvas.clientWidth * dpr;
  canvas.height = canvas.clientHeight * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function addDot(x, y) {
  hue = (hue + 0.08) % PALETTE.length;
  dots.push({ x, y, r: 40 + Math.random() * 30, life: 1, color: PALETTE[Math.floor(hue)] });
}

function frame() {
  ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
  for (let i = dots.length - 1; i >= 0; i--) {
    const d = dots[i];
    d.life -= 0.012;
    if (d.life <= 0) {
      dots.splice(i, 1);
      continue;
    }
    ctx.globalAlpha = d.life * 0.7;
    ctx.fillStyle = d.color;
    ctx.beginPath();
    ctx.arc(d.x, d.y, d.r * (0.6 + d.life * 0.4), 0, Math.PI * 2);
    ctx.fill();
  }
  requestAnimationFrame(frame);
}

resize();
addEventListener('resize', resize);

if (!reduceMotion) {
  addEventListener('pointermove', (e) => {
    const rect = canvas.getBoundingClientRect();
    addDot(e.clientX - rect.left, e.clientY - rect.top);
  });
  frame();
}
