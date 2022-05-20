let canvas, ctx;
let particles, cols, rows, width, height, cw, ch;
let mouse, oldmouse, delta;

const init = () => {
  canvas = document.createElement('canvas');
  ctx = canvas.getContext('2d');
  document.body.appendChild(canvas);
  
  window.addEventListener('mousemove', mousemove);
  window.addEventListener('resize', resize);
  resize();
  
  // mouse = { x: 0, y: 0 };
  oldmouse = {x: 0, y: 0 };
  delta = 0;
  
  rows = 10;
  cols = 10;
  width = cols * 40;
  height = rows * 40;
  cw = width / (cols - 1);
  ch = height / (rows - 1);
  
  particles = [];
  for (let i = 0; i < cols * rows; i++) {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const ix = col * cw - width / 2;
    const iy = row * ch - height / 2;
    const x = ix;
    const y = iy;
    const vx = 0;
    const vy = 0;
    
    particles.push({ col, row, x, y, ix, iy, vx, vy });
  }
};

const animate = () => {
  update();
  draw();
  requestAnimationFrame(animate);
};

const update = () => {
  if (!mouse) return;
  
  delta *= 0.9;
  
  let dx, dy, dd;
  
  particles.forEach((p, index) => {
    dx = p.x - mouse.x;
    dy = p.y - mouse.y;
    dd = dx * dx + dy * dy;
    
    if (dd < 10000) {
      p.vx += dx * 0.00002 * delta;
      p.vy += dy * 0.00002 * delta;
    }
    
    p.vx *= 0.9;
    p.vy *= 0.9;
    
    dx = p.ix - p.x;
    dy = p.iy - p.y;
    dd = dx * dx + dy * dy;
    
    p.vx += dx * 0.01;
    p.vy += dy * 0.01;
    
    p.x += p.vx;
    p.y += p.vy;
  });
};

const draw = () => {
  ctx.fillStyle = '#222';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  ctx.save();
  ctx.translate(canvas.width * 0.5, canvas.height * 0.5);
  ctx.fillStyle = 'white';
  
  particles.forEach((p) => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
    ctx.fill();
  });
  
  ctx.restore();
};

const resize = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};

const mousemove = (e) => {
  if (!mouse) {
    mouse = {};
    mouse.x = e.clientX - canvas.width * 0.5;
    mouse.y = e.clientY - canvas.height * 0.5;
    return;
  }
  
  oldmouse.x = mouse.x;
  oldmouse.y = mouse.y;
  
  mouse.x = e.clientX - canvas.width * 0.5;
  mouse.y = e.clientY - canvas.height * 0.5;
  
  let dx, dy, dd;
  
  dx = mouse.x - oldmouse.x;
  dy = mouse.y - oldmouse.y;
  dd = dx * dx + dy * dy;
  
  delta += dd;
  if (delta > 1000) delta = 1000;
};

init();
animate();
