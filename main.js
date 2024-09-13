import { startClock } from './lib/clock';
import { fetchData } from './lib/fetchData';
import { updateMapAndPoolsSize } from './lib/utils';
import { renderPools } from './lib/renderPools';

async function initApp() {
  updateMapAndPoolsSize();
  startClock();
  try {
    const poolsData = await fetchData();

    renderPools(poolsData);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error initializing app:', error);
  }
}

document.addEventListener('DOMContentLoaded', initApp);
