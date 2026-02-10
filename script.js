// ---------------- VARIABLES ----------------
let messageIndex = 0;
let lastMoveTime = 0;
let noSpeed = 1;

// Nepali comedy slang for choosing Italy 😆
const messages = [
  "Italy re? Eh bhai seriously? 😂",
  "Yo ta direct penalty ho hai 🇳🇵😤",
  "Italy click garyo bhane momo jharera jancha 😭",
  "Gorkhali le yo dekhera ris uthcha 🔥",
  "Bro, T20 ho pizza league haina 🍕❌",
  "Italy lai vote? Aama le tharkauncha 😭",
  "Nepal chodera Italy? Galat track gayo 🚫",
  "Yo button ta bhagera hidna parcha 🏃‍♂️",
  "Last warning: Nepal nai ho 🇳🇵👊"
];

// Buttons
const italyButton = document.querySelector(".italy-button");
const nepalButton = document.querySelector(".nepal-button");

// ---------------- ITALY BUTTON ----------------
function handleItalyClick(e) {
  italyButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  // Grow Nepal button (crowd pressure 😏)
  const currentSize = parseFloat(window.getComputedStyle(nepalButton).fontSize);
  nepalButton.style.fontSize = `${currentSize * 1.35}px`;

  moveButtonAway(e, true);
}

function moveButtonAway(e, forced = false) {
  const now = Date.now();
  if (!forced && now - lastMoveTime < 1200) return;

  const btnRect = italyButton.getBoundingClientRect();
  const centerX = btnRect.left + btnRect.width / 2;
  const centerY = btnRect.top + btnRect.height / 2;

  const distance = e
    ? Math.hypot(e.clientX - centerX, e.clientY - centerY)
    : 0;

  if (!forced && distance > 80) return;

  lastMoveTime = now;

  const padding = 60;
  const maxX = window.innerWidth - btnRect.width - padding;
  const maxY = window.innerHeight - btnRect.height - padding;

  const randomX = Math.random() * maxX * noSpeed;
  const randomY = Math.random() * maxY * noSpeed;

  italyButton.style.position = "fixed";
  italyButton.style.left = Math.min(randomX, maxX) + "px";
  italyButton.style.top = Math.min(randomY, maxY) + "px";
}

// ---------------- NEPAL BUTTON ----------------
nepalButton.addEventListener("click", () => {
  createCelebration();
  setTimeout(() => {
    window.location.href = "nepal_win.html";
  }, 900);
});

// ---------------- CELEBRATION ----------------
function createCelebration() {
  for (let i = 0; i < 40; i++) {
    const flag = document.createElement("div");
    flag.className = "celebrate";
    flag.textContent = "🇳🇵";

    const x = (Math.random() - 0.5) * 700 + "px";
    const y = (Math.random() - 0.5) * 700 + "px";

    flag.style.setProperty("--x", x);
    flag.style.setProperty("--y", y);

    document.body.appendChild(flag);
    setTimeout(() => flag.remove(), 1100);
  }
}

// ---------------- EVENT LISTENERS ----------------
italyButton.addEventListener("click", handleItalyClick);
document.addEventListener("mousemove", moveButtonAway);
