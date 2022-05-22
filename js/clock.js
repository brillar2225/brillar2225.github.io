const getDate = document.querySelector('#date-element');
const getTime = document.querySelector('#time-element');

function displayClock() {
  const currentDate = new Date();

  const year = String(currentDate.getFullYear());
  const month = currentDate.toLocaleString('en-us', { month: 'long' });
  const day = String(currentDate.getDate()).padStart(2, '0');

  const hours = String(currentDate.getHours()).padStart(2, '0');
  const minutes = String(currentDate.getMinutes()).padStart(2, '0');
  const seconds = String(currentDate.getSeconds()).padStart(2, '0');

  getDate.innerHTML = `${month} ${day}, ${year}`;
  getTime.innerHTML = `${hours}:${minutes}:${seconds}`;
}

displayClock();
setInterval(displayClock, 1000);
