import { isBigScreen } from '../lib/utils';

const mapAndPools = document.getElementById('map-and-pools');

// Function to update the value on resize
// function updateIsBigScreenValue() {
// let isBigScreenValue = window.innerWidth > 1920;

// isBigScreenValue = window.innerWidth > 1920;
// updateMapAndPoolsSize(); // Llama a la función aquí para actualizar el tamaño
// }

export function updateMapAndPoolsSize() {
  if (isBigScreen()) {
    mapAndPools.style.width = '3200px';
    mapAndPools.style.height = '1800px';
  } else {
    mapAndPools.style.width = '1600px'; // Default size
    mapAndPools.style.height = '900px'; // Default size
  }
}

// Call the function initially and on resize
// updateMapAndPoolsSize();
// window.addEventListener('resize', () => {
// updateIsBigScreenValue();
// });
