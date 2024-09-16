const BIG_SCREEN_BREAKPOINT = 1920;

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

/**
 * @function isBigScreen
 * @description Check if the window width is greater than a defined breakpoint.
 * @returns {boolean} - Returns true if the window width is greater than the defined breakpoint, otherwise false.
 */
export function isBigScreen() {
  return window.innerWidth > BIG_SCREEN_BREAKPOINT;
}
