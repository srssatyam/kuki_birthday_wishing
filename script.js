/* ========================= */
/* ENTER SITE + CONFETTI + MUSIC */
/* ========================= */

function enterSite() {

  const duration = 1500;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 60,
      spread: 180,
      startVelocity: 60,
      gravity: 0.8,
      scalar: 1.6,
      origin: {
        x: Math.random(),
        y: Math.random() - 0.2
      },
      colors: ['#ff0000', '#ff3333', '#cc0000']
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();

  let music = document.getElementById("bgMusic");
  music.volume = 0;
  music.play();

  let fade = setInterval(() => {
    if (music.volume < 0.8) {
      music.volume += 0.05;
    } else {
      clearInterval(fade);
    }
  }, 200);

  setTimeout(() => {
    document.getElementById("intro").style.display = "none";
    document.getElementById("mainContent").classList.remove("hidden");
  }, 1000);
}


/* ========================= */
/* MUSIC TOGGLE */
/* ========================= */

function toggleMusic() {
  let music = document.getElementById("bgMusic");
  let btn = document.getElementById("musicBtn");

  if (music.paused) {
    music.play();
    btn.innerText = "🔊 MUSIC";
  } else {
    music.pause();
    btn.innerText = "🔇 MUTED";
  }
}


/* ========================= */
/* SLIDESHOW */
/* ========================= */

let images = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpg",
  "img6.jpg"
];

let quotes = [
  "YOU ARE MY HAPPINESS 💖",
  "YOUR SMILE IS MY FAVORITE GIFT 🎂",
  "EVERY MOMENT WITH YOU IS SPECIAL ✨",
  "YOU MAKE MY WORLD BEAUTIFUL ❤️",
  "WITH YOU LIFE IS A BLESSING 💕",
  "TODAY IS SPECIAL BECAUSE YOU WERE BORN 🎉"
];

let index = 0;
let slideImage = document.getElementById("slideImage");
let quoteText = document.getElementById("quote");

function updateSlide() {
  slideImage.src = images[index];
  quoteText.innerText = quotes[index];
}

function nextSlide() {
  index = (index + 1) % images.length;
  updateSlide();
}

setInterval(nextSlide, 4000);
updateSlide();


/* ========================= */
/* SURPRISE SYSTEM */
/* ========================= */

let surpriseBox = document.getElementById("surpriseBox");
let surpriseImage = document.getElementById("surpriseImage");
let surpriseQuote = document.getElementById("surpriseQuote");
let loveLetter = document.getElementById("loveLetter");

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");

let surprise1Image = "surprise1.jpg";
let surprise2Image = "surprise.jpg";

let surprise1Text = "YOU ARE MY GREATEST GIFT ❤️";
let surprise2Text = "MY LIFE IS COMPLETE WITH YOU ✨";

let letterText =
"FROM THE MOMENT YOU CAME INTO MY LIFE,\nEVERYTHING BECAME BEAUTIFUL.\nI AM SO GRATEFUL FOR YOU ❤️";

let currentSurprise = 1;

function typeWriter(text) {
  loveLetter.innerText = "";
  let i = 0;

  function typing() {
    if (i < text.length) {
      loveLetter.innerText += text.charAt(i);
      i++;
      setTimeout(typing, 40);
    }
  }

  typing();
}

function fadeImage(newSrc, newText) {
  surpriseImage.style.opacity = 0;

  setTimeout(() => {
    surpriseImage.src = newSrc;
    surpriseQuote.innerText = newText;
    surpriseImage.style.opacity = 1;
  }, 300);
}

function showFirst() {
  surpriseBox.classList.remove("hidden");

  fadeImage(surprise1Image, surprise1Text);
  typeWriter(letterText);

  btn1.style.display = "none";
  btn2.style.display = "block";

  currentSurprise = 1;
}

function showSecond() {
  fadeImage(surprise2Image, surprise2Text);

  btn2.style.display = "none";
  btn3.style.display = "block";

  currentSurprise = 2;
}

function showPrevious() {
  if (currentSurprise === 1) {
    fadeImage(surprise2Image, surprise2Text);
    currentSurprise = 2;
  } else {
    fadeImage(surprise1Image, surprise1Text);
    currentSurprise = 1;
  }
}


/* ========================= */
/* RANDOM BLUE ♡ BACKGROUND */
/* ========================= */

function generateBlueHearts() {
  const container = document.getElementById("randomBlueHearts");

  for (let i = 0; i < 30; i++) {
    let heart = document.createElement("div");
    heart.classList.add("random-blue");
    heart.innerText = "♡";

    // random size
    let size = Math.random() * 50 + 15;
    heart.style.fontSize = size + "px";

    // random position
    heart.style.left = Math.random() * 100 + "%";
    heart.style.top = Math.random() * 100 + "%";

    // random gentle movement speed
    heart.style.animationDuration = (Math.random() * 5 + 6) + "s";

    container.appendChild(heart);
  }
}

// Generate blue hearts when page loads
generateBlueHearts();
