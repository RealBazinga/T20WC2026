// ---------------- VARIABLES ----------------
let messageIndex = 0;
let lastMoveTime = 0;
const noSpeed = 1;

// Nepali comedy slang for choosing Italy 😆
const messages = [
  "Italy re? Eh bhai seriously? 😂",
  "Italy lai vote? Aama le tharkauncha 😭",
  "Nepal chodera Italy? Galat track gayo 🚫"
];

// Buttons
const italyButton = document.querySelector(".italy-button");
const nepalButton = document.querySelector(".nepal-button");

if (!italyButton || !nepalButton) {
  console.error("Buttons not found in DOM");
}

// ---------------- ITALY BUTTON ----------------
function handleItalyClick(e) {
  italyButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  // Grow Nepal button (peer pressure 😏)
  const currentSize = parseFloat(
    window.getComputedStyle(nepalButton).fontSize
  );
  nepalButton.style.fontSize = `${currentSize * 1.3}px`;

  moveButtonAway(e, true);
}

function moveButtonAway(e, forced = false) {
  const now = Date.now();
  if (!forced && now - lastMoveTime < 1200) return;

  const btnRect = italyButton.getBoundingClientRect();
  const btnWidth = btnRect.width;
  const btnHeight = btnRect.height;

  lastMoveTime = now;

  const padding = 20; // keep button away from edges
  const maxX = window.innerWidth - btnWidth - padding;
  const maxY = window.innerHeight - btnHeight - padding;

  // Random position within visible screen only
  const randomX = padding + Math.random() * maxX;
  const randomY = padding + Math.random() * maxY;

  italyButton.style.position = "fixed";
  italyButton.style.left = randomX + "px";
  italyButton.style.top = randomY + "px";
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
    const el = document.createElement("div");
    el.className = "celebrate";
    el.textContent = "🇳🇵";

    el.style.setProperty("--x", (Math.random() - 0.5) * 700 + "px");
    el.style.setProperty("--y", (Math.random() - 0.5) * 700 + "px");

    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1100);
  }
}

// ---------------- EVENT LISTENERS ----------------
italyButton.addEventListener("click", handleItalyClick);

// Only trigger run-away when hovering Italy button (smoother UX)
italyButton.addEventListener("mousemove", moveButtonAway);
