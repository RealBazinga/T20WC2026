// ---------------- BACKGROUND MUSIC ----------------
const bgMusic = document.getElementById("bgMusic");
bgMusic.volume = 0.4;
let musicStarted = false;

function startMusic() {
  if (!musicStarted) {
    bgMusic.play().catch(() => console.log("Autoplay blocked"));
    musicStarted = true;
  }
}

// Start music on first interaction
document.addEventListener("click", startMusic, { once: true });
document.addEventListener("mousemove", startMusic, { once: true });

// ---------------- CELEBRATION EFFECT ----------------
const celebrationEmojis = ["🇳🇵", "🏏", "🔥"];

function createCelebration() {
  const el = document.createElement("div");
  el.className = "celebrate";
  el.textContent =
    celebrationEmojis[Math.floor(Math.random() * celebrationEmojis.length)];

  const startX = Math.random() * window.innerWidth;
  const startY = window.innerHeight + 20;

  el.style.left = startX + "px";
  el.style.top = startY + "px";

  el.style.setProperty("--x", (Math.random() - 0.5) * 600 + "px");
  el.style.setProperty("--y", -(Math.random() * 700 + 300) + "px");

  document.body.appendChild(el);

  setTimeout(() => el.remove(), 1800);
}

// Burst at page load
for (let i = 0; i < 35; i++) {
  setTimeout(createCelebration, i * 40);
}

// Continuous light celebration
setInterval(createCelebration, 450);
