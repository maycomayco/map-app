import { poolsConfig } from '../data/pools.js';
import { beonicUsername, beonicPassword, beonicUrl } from '../env.js';

/**
 * @description add occupancy prop to pools
 * @param poolsConfig
 * @param apiData
 * @returns Array
 */
function addOccupancyToPools(poolsConfig, apiData) {
  return poolsConfig.map((pool) => {
    const apiItem = apiData.find((item) => item.counterId === pool.counterId);

    return {
      ...pool,
      name: apiItem ? apiItem.counterName : pool.name, // fallback to pool name if no data is found
      occupancy: apiItem ? apiItem.occupancy : 0, // fallback to 0 if no data is found
    };
  });
}

async function fetchOccupancyData() {
  const credentials = beonicUsername + ':' + beonicPassword;

  const headers = new Headers();

  headers.set('Authorization', 'Basic ' + btoa(credentials));

  try {
    const response = await fetch(beonicUrl, { headers });

    const data = await response.json();

    return data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error:', error);
    throw new Error('Failed to load data.');
  }
}

function transformData(data) {
  const poolsWithOccupancy = addOccupancyToPools(poolsConfig, data);

  return poolsWithOccupancy;
}

export default async function poolsData() {
  return transformData(await fetchOccupancyData());
}
