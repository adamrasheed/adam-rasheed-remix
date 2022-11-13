import { HOME_COORDS, WEATHER_ENDPOINT } from "./constants";

export const fetchWeather = async (): Promise<Response> => {
  const endpoint = WEATHER_ENDPOINT;
  return fetch(
    endpoint +
      "?" +
      new URLSearchParams({
        lat: HOME_COORDS.lat.toString(),
        lon: HOME_COORDS.long.toString(),
        units: "imperial",
        appid: process.env.WEATHER_API_KEY!,
      })
  );
};
