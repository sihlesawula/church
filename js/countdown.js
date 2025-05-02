// countdown.js

const sermonDate = new Date("June 2, 2025 10:00:00").getTime();

const countdownFunction = setInterval(() => {
  const now = new Date().getTime();
  const distance = sermonDate - now;

  if (distance < 0) {
    clearInterval(countdownFunction);
    document.getElementById("countdown").innerHTML = "The sermon is happening now!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = 
    `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);
