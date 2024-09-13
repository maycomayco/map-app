const mapAndPools = document.getElementById('map-and-pools');

let isBigScreenValue = window.innerWidth > 1920;

function isBigScreen() {
  return isBigScreenValue;
}

// Function to update the value on resize
function updateIsBigScreenValue() {
  console.log('window.innerWidth', window.innerWidth);
  isBigScreenValue = window.innerWidth > 1920;
  updateMapAndPoolsSize(); // Llama a la función aquí para actualizar el tamaño
}

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
window.addEventListener('resize', () => {
  updateIsBigScreenValue();
  console.log('resize');
});
