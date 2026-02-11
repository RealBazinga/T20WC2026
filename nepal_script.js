// ---------------- BACKGROUND MUSIC ----------------
const bgMusic = document.getElementById("bgMusic");
bgMusic.volume = 0.4;

// Play music once after first interaction (safe autoplay)
document.body.addEventListener("click", () => {
  if (bgMusic && bgMusic.paused) {
    bgMusic.play().catch(() => console.log("Autoplay blocked"));
  }
}, { once: true });


// ---------------- 🇳🇵 BIG CELEBRATION BURST ----------------
function celebrateNepal() {
  for (let i = 0; i < 50; i++) {
    const el = document.createElement("div");
    el.className = "celebrate";
    el.textContent = "🇳🇵";

    el.style.setProperty("--x", (Math.random() - 0.5) * 900 + "px");
    el.style.setProperty("--y", (Math.random() - 0.5) * 900 + "px");

    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1300);
  }
}

// Trigger burst once on load
celebrateNepal();


// ---------------- CONTINUOUS CELEBRATION EFFECT ----------------
const celebrationEmojis = ["🇳🇵", "🏏", "🔥", "🌟", "🎉"];

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

  el.style.fontSize = `${24 + Math.random() * 18}px`;
  el.style.transform = `rotate(${Math.random() * 40 - 20}deg)`;

  document.body.appendChild(el);

  setTimeout(() => el.remove(), 1800);
}

// Initial wave
for (let i = 0; i < 35; i++) {
  setTimeout(createCelebration, i * 35);
}

// Light continuous floating celebration
setInterval(createCelebration, 400);
