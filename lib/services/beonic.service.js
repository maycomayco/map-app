export const fetchOccupancyData = async () => {
  const url =
    "https://api-us.beonic.io/v1/api/accounts/4000000721/occupancy?counter=20104,20105,20106,20107,20108,20109,20110,20111,20112,20113,20093,20094,20095,20096,20097,20098,20099,20100,20101,20102,20080,20081,20082,20083,20084,20085,20086,20087,20088,20089,20079,20090,20091,20119,20070,20071,20072,20073,20074,20075,20076,20077,20078,20092,20103,20114";

  const BEONIC_USERNAME = "9VGjqtUwau5HqFkG";
  const BEONIC_PASSWORD = "Fnk6kHXMGi196yUsV5xarsMd";

  const credentials = BEONIC_USERNAME + ":" + BEONIC_PASSWORD;
  const headers = new Headers();
  headers.set("Authorization", "Basic " + btoa(credentials));

  try {
    const response = await fetch(url, { headers });
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Failed to load data.");
  }
};
