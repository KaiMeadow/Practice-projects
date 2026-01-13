function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  let period = "AM";

  if (hours >= 12) {
    period = "PM";
 }

 if (hours === 0) {
  hours = 12;
 } else if (hours > 12) {
  hours -= 12
 }

  hours = String(hours).padStart(2, 0);
  minutes = String(minutes).padStart(2, 0);
  seconds = String(seconds).padStart(2, 0);

  const timeString = `${hours}:${minutes}:${seconds} ${period}`;
  document.getElementById("time").innerText = timeString;

  const dateString = now.toDateString();
  document.getElementById("date").innerText = dateString;

  const toggleBtn = document.getElementById("toggleBtn");
  const body = document.body;

  document.addEventListener("DOMContentLoaded", () => {

  const toggleBtn = document.getElementById("toggleBtn");
  const body = document.body;

  toggleBtn.addEventListener("click", () => {
    const theme = body.dataset.theme === "dark" ? "light" : "dark";
    body.dataset.theme = theme;
    toggleBtn.innerText = theme === "dark" ? "Light Mode" : "Dark Mode";
  });

});
}

setInterval(updateClock, 1000);
updateClock();