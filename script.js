// Select the first heading element on the page
const heading = document.querySelector('h1');

// Define a list of colors for cycling
const colors = ['#00ff00', '#00cc00', '#009900', '#006600'];

// Initialize index to 0 for color selection
let i = 0;

// Define a function to update the heading color
function updateHeadingColor() {
  // Set the heading's CSS color style to the color at position i
  heading.style.color = colors[i];

  // Increment i by 1
  i = i + 1;

  // If i equals the number of colors, reset i to 0 to cycle colors
  if (i === colors.length) {
    i = 0;
  }
}

// Call updateHeadingColor every 2 seconds indefinitely
setInterval(updateHeadingColor, 2000);
const modeToggle = document.getElementById('modeToggle');
modeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});

// Optional: CSS styles to support this toggle (add to your CSS)
const typewriterText = "Welcome to TechBiter OS";
const typewriterElement = document.getElementById('typewriter');
let idx = 0;

function typeWriter() {
  if (idx < typewriterText.length) {
    typewriterElement.textContent += typewriterText.charAt(idx);
    idx++;
    setTimeout(typeWriter, 100); // typing speed in ms
  }
}
typeWriter();

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});
const countdownElement = document.getElementById('countdown');
const launchDate = new Date('2025-12-31T00:00:00').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const diff = launchDate - now;

  if (diff < 0) {
    countdownElement.textContent = "TechBiter OS is Live!";
    clearInterval(intervalId);
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  countdownElement.textContent = `Launch in ${days}d ${hours}h ${minutes}m ${seconds}s`;
}

const intervalId = setInterval(updateCountdown, 1000);
updateCountdown();
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');

window.onload = () => {
  modal.style.display = 'flex';
};

closeModal.onclick = () => {
  modal.style.display = 'none';
};

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};
const images = document.querySelectorAll('.carousel-img');
let currentIndex = 0;

function showImage(index) {
  images.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

showImage(currentIndex);
setInterval(nextImage, 3000);
