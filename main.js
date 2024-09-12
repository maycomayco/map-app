import { fetchOccupancyData } from "./lib/services/beonic.service";
import { startClock } from "./lib/clock"; // Import the startClock function

const appDiv = document.getElementById("app");

async function handleDOMContentLoaded() {
  startClock(); // Start the clock when the DOM is loaded
  try {
    // TODO: User Experience: Even if you don't want to show messages in the UI, consider implementing a fallback or a loading indicator while fetching data.
    const data = await fetchOccupancyData();
    appDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
  } catch (error) {
    console.error("Error fetching occupancy data:", error);

    // TODO: Error Handling: While logging the error to the console is good, consider adding more context to the error message for better debugging.

    // TODO: Retry Logic: Depending on the application, you might want to implement a retry mechanism for transient errors. For example, if the API is temporarily unavailable, you can retry the request after a short delay.
  }
}

document.addEventListener("DOMContentLoaded", handleDOMContentLoaded);
