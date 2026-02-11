function enterSite() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("mainContent").classList.remove("hidden");
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

setInterval(() => {
  index = (index + 1) % images.length;
  updateSlide();
}, 4000);

updateSlide();

/* RED FLOATING HEARTS */
function createRedHeart() {
  const container = document.getElementById("floatingHearts");
  const heart = document.createElement("div");
  heart.classList.add("floating-heart");
  heart.innerHTML = "❤️";

  heart.style.fontSize = (Math.random() * 40 + 15) + "px";
  heart.style.left = Math.random() * 100 + "%";
  heart.style.animationDuration = (Math.random() * 5 + 5) + "s";

  container.appendChild(heart);

  setTimeout(() => heart.remove(), 8000);
}

setInterval(createRedHeart, 500);

/* BLUE STATIC HEARTS */
function generateStaticBlueHearts() {
  const container = document.getElementById("blueHearts");

  for (let i = 0; i < 40; i++) {
    const heart = document.createElement("div");
    heart.classList.add("blue-heart");
    heart.innerHTML = "♡";

    heart.style.fontSize = (Math.random() * 40 + 15) + "px";
    heart.style.left = Math.random() * 100 + "%";
    heart.style.top = Math.random() * 100 + "%";

    container.appendChild(heart);
  }
}

generateStaticBlueHearts();
