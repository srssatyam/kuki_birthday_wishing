function enterSite() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("mainContent").classList.remove("hidden");

  confetti({ particleCount: 200, spread: 120 });

  let music = document.getElementById("bgMusic");
  music.play();
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

/* SLIDESHOW AUTO */
let images = ["img1.jpg","img2.jpg","img3.jpg"];
let quotes = [
  "YOU MAKE MY LIFE BEAUTIFUL ❤️",
  "YOUR SMILE IS MY FAVORITE GIFT 🎂",
  "EVERY MOMENT WITH YOU IS SPECIAL ✨"
];

let index = 0;

function updateSlide() {
  document.getElementById("slideImage").src = images[index];
  document.getElementById("quote").innerText = quotes[index];
}

setInterval(() => {
  index = (index + 1) % images.length;
  updateSlide();
}, 4000);

updateSlide();

/* SURPRISE */
let surprise1Image = "surprise1.jpg";
let surprise2Image = "surprise2.jpg";

function showFirst() {
  document.getElementById("surpriseBox").classList.remove("hidden");
  document.getElementById("surpriseImage").src = surprise1Image;
  document.getElementById("surpriseQuote").innerText = "YOU ARE MY GREATEST GIFT ❤️";

  document.getElementById("btn1").style.display = "none";
  document.getElementById("btn2").classList.remove("hidden");

  confetti({ particleCount: 200, spread: 120 });
}

function showSecond() {
  document.getElementById("surpriseImage").src = surprise2Image;
  document.getElementById("surpriseQuote").innerText = "MY LIFE IS COMPLETE WITH YOU ❤️";

  document.getElementById("btn2").style.display = "none";

  confetti({ particleCount: 300, spread: 150 });
}
