import poolsData from './services/beonic.service';

export async function fetchData() {
  const appDiv = document.getElementById('app');

  appDiv.innerHTML = `<p>LOADING...</p>`;
  try {
    const data = await poolsData();

    appDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching occupancy data:', error);
    // TODO: Error Handling: While logging the error to the console is good, consider adding more context to the error message for better debugging.
    // TODO: Retry Logic: Depending on the application, you might want to implement a retry mechanism for transient errors. For example, if the API is temporarily unavailable, you can retry the request after a short delay.
  }
}
