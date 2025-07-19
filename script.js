// Launch date for TechBiter OS (25 Dec 2025)
const launchDate = new Date("2025-12-25T00:00:00").getTime();

const countdownEl = document.getElementById("countdown");

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = launchDate - now;

  if (timeLeft <= 0) {
    countdownEl.innerHTML = "<strong>🎉 TechBiter OS is Live! Download Now!</strong>";
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((timeLeft / (1000 * 60)) % 60);
  const secs = Math.floor((timeLeft / 1000) % 60);

  countdownEl.innerHTML = `
    ⏳ <strong>Releasing in:</strong> ${days}d ${hours}h ${mins}m ${secs}s
  `;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Optional: Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))?.scrollIntoView({
      behavior: "smooth"
    });
  });
});
