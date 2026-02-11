function enterSite() {
  const duration = 1500;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 50,
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

/* MUSIC */
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

/* SLIDESHOW */
let images = ["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg","img6.jpg"];
let quotes = [
  "YOU MAKE MY LIFE BEAUTIFUL ❤️",
  "YOUR SMILE IS MY FAVORITE GIFT 🎂",
  "EVERY MOMENT WITH YOU IS SPECIAL ✨",
  "YOU ARE MY HAPPINESS 💖",
  "WITH YOU LIFE IS A BLESSING 🎈",
  "TODAY IS SPECIAL BECAUSE YOU WERE BORN ❤️"
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

/* SURPRISE LOGIC */
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
let unlockedSecond = false;

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

  btn1.classList.add("hidden");
  btn2.classList.remove("hidden");

  currentSurprise = 1;
}

function showSecond() {
  fadeImage(surprise2Image, surprise2Text);

  btn2.classList.add("hidden");
  btn3.classList.remove("hidden");

  currentSurprise = 2;
  unlockedSecond = true;
}

function showPrevious() {
  if (!unlockedSecond) return;

  if (currentSurprise === 1) {
    fadeImage(surprise2Image, surprise2Text);
    currentSurprise = 2;
  } else {
    fadeImage(surprise1Image, surprise1Text);
    currentSurprise = 1;
  }
}
