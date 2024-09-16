const mapAndPools = document.getElementById('map-and-pools');

// function isBigScreen() {
//   return isBigScreenValue;
// }

// Function to update the value on resize
function updateIsBigScreenValue() {
  // let isBigScreenValue = window.innerWidth > 1920;

  // isBigScreenValue = window.innerWidth > 1920;
  updateMapAndPoolsSize(); // Llama a la función aquí para actualizar el tamaño
}

export function updateMapAndPoolsSize() {
  // if (isBigScreen()) {
  // mapAndPools.style.width = '3200px';
  // mapAndPools.style.height = '1800px';
  // } else {
  mapAndPools.style.width = '1600px'; // Default size
  mapAndPools.style.height = '900px'; // Default size
  // }
}

// Call the function initially and on resize
// updateMapAndPoolsSize();
window.addEventListener('resize', () => {
  updateIsBigScreenValue();
});

/**
 * @description get the color to display based on the occupancy and the thresholds
 * @param thresholds
 * @param occupancy
 * @returns string
 */
export function getUIColor(thresholds, occupancy) {
  // 1. validate the thresholds and occupancy
  if (!Array.isArray(thresholds) || thresholds.length === 0) return 'gray';
  if (typeof occupancy !== 'number' || isNaN(occupancy)) return 'gray';

  // 2. get the tight color to show in the UI
  for (const threshold of thresholds) {
    if (occupancy <= threshold.maxPeople) {
      return threshold.color;
    }
  }

  // 3. if no threshold is found, return gray
  return 'gray';
}
