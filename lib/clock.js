function updateTime() {
  const timeElement = document.getElementById("time");
  const now = new Date();
  timeElement.textContent = now.toLocaleTimeString("es-ES", {
    hour: "2-digit",
    minute: "2-digit",
    // TODO: remove this after testing
    second: "2-digit",
    hour12: true,
  });
}

export function startClock() {
  updateTime();
  // setInterval(updateTime, 60000); // Luego actualiza cada minuto
  setInterval(updateTime, 1000); // Luego actualiza cada segundo
}

document.addEventListener("DOMContentLoaded", startClock);
