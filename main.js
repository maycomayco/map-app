import { startClock } from './lib/clock';
import { fetchData } from './lib/fetchData';
import { updateMapAndPoolsSize } from './lib/utils'; // Importar la función

async function initApp() {
  updateMapAndPoolsSize(); // Llamar a la función para ajustar el tamaño
  startClock(); // Start the clock when the DOM is loaded
  await fetchData();
}

document.addEventListener('DOMContentLoaded', initApp);
