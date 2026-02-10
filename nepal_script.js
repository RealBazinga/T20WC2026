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
// Nepal-themed emojis
const celebrationEmojis = ["🇳🇵", "🏏", "🔥", "🌟", "🎉"];

function createCelebration() {
  const el = document.createElement("div");
  el.className = "celebrate";
  el.textContent =
    celebrationEmojis[Math.floor(Math.random() * celebrationEmojis.length)];

  // Start near bottom with slight random X
  const startX = Math.random() * window.innerWidth;
  const startY = window.innerHeight + 20;

  el.style.left = startX + "px";
  el.style.top = startY + "px";

  // Animate to random position upwards
  el.style.setProperty("--x", (Math.random() - 0.5) * 600 + "px");
  el.style.setProperty("--y", -(Math.random() * 700 + 300) + "px");

  // Slight random size
  el.style.fontSize = `${24 + Math.random() * 18}px`;

  // Slight rotation for fun
  el.style.transform = `rotate(${Math.random() * 40 - 20}deg)`;

  document.body.appendChild(el);

  // Remove after animation
  setTimeout(() => el.remove(), 1800);
}

// Burst at page load
for (let i = 0; i < 35; i++) {
  setTimeout(createCelebration, i * 35);
}

// Continuous light celebration
setInterval(createCelebration, 400);
