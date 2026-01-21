const canvas = document.getElementById("bubbleCanvas");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

let mouse = { x: null, y: null };
window.addEventListener("mousemove", e => {
  mouse.x = e.x;
  mouse.y = e.y;
});

class Bubble {
  constructor(x, y, r, color) {
    this.x = x;
    this.y = y;
    this.baseX = x;
    this.baseY = y;
    this.r = r;
    this.color = color;
  }

  draw() {
    const g = ctx.createRadialGradient(
      this.x - this.r * 0.3,
      this.y - this.r * 0.3,
      this.r * 0.2,
      this.x,
      this.y,
      this.r
    );
    g.addColorStop(0, "rgba(255,255,255,0.9)");
    g.addColorStop(0.4, this.color);
    g.addColorStop(1, "rgba(0,0,0,0)");

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = g;
    ctx.shadowBlur = 25;
    ctx.shadowColor = this.color;
    ctx.fill();
    ctx.shadowBlur = 0;
  }

  update() {
    this.x += Math.sin(Date.now() * 0.001 + this.baseX) * 0.08;
    this.y += Math.cos(Date.now() * 0.001 + this.baseY) * 0.08;

    if (mouse.x) {
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const d = Math.sqrt(dx * dx + dy * dy);
      if (d < 150) {
        this.x -= dx * 0.02;
        this.y -= dy * 0.02;
      }
    }
    this.draw();
  }
}

let bubbles = [];
function init() {
  bubbles = [];
  const colors = ["#ff4fd8", "#00eaff", "#7f00ff"];
  for (let i = 0; i < 10; i++) {
    bubbles.push(
      new Bubble(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        Math.random() * 18 + 12,
        colors[Math.floor(Math.random() * colors.length)]
      )
    );
  }
}
init();

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  bubbles.forEach(b => b.update());
  requestAnimationFrame(animate);
}
animate();

