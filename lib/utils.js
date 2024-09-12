let isBigScreenValue = window.innerWidth > 1920;

export function isBigScreen() {
  return isBigScreenValue;
}

// Function to update the value on resize
const updateIsBigScreenValue = () => {
  isBigScreenValue = window.innerWidth > 1920;
};

// Add event listener to update the value on resize
window.addEventListener("resize", updateIsBigScreenValue);
