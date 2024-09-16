import { startClock as Clock } from './components/clock';
import { fetchData } from './lib/fetchData';
import { updateMapAndPoolsSize as Map } from './components/map';
import { pools } from './components/pools';

async function initApp() {
  Map();
  Clock();
  try {
    const poolsData = await fetchData();

    pools(poolsData);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error initializing app:', error);
  }
}

document.addEventListener('DOMContentLoaded', initApp);
