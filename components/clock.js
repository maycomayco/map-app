function updateTime() {
  const timeElement = document.getElementById('time');
  const now = new Date();

  timeElement.textContent = now.toLocaleTimeString('en-US', {
    timeZone: 'America/Chicago',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
}

export function startClock() {
  updateTime();
  setInterval(updateTime, 60000); // update every minute
}

document.addEventListener('DOMContentLoaded', startClock);
