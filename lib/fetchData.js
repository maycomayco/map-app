import poolsData from './services/beonic.service';

export async function fetchData() {
  try {
    const data = await poolsData();

    return data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching occupancy data:', error);
    throw error;
  }
}
