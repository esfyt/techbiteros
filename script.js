// Countdown Timer
const countdown = document.getElementById("countdown");
const launchDate = new Date("2025-12-25T00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const diff = launchDate - now;

  if (diff <= 0) {
    countdown.innerHTML = "🎉 TechBiter OS is LIVE!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdown.innerHTML = `Launching in ${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
