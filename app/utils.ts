import { IWeatherResp } from "./types";

export const getFormattedDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-us", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

export const getStrippedHtml = (rawStr: string) => {};

const weatherIconMap: Record<string, string> = {
  Clear: "🌝",
};

const getWeatherIcon = (desc: string) => {
  const icon = weatherIconMap[desc];
  if (icon) {
    return ` ${icon}`;
  }
  return "";
};

export const getWeatherString = (weather: IWeatherResp): string => {
  const temp = Math.round(weather.main.temp);
  const desc = weather.weather[0].main;
  const sentence = `I’m based in ${
    weather.name
  }, where its ${temp}°F and ${desc}${getWeatherIcon(desc)}.`;

  return sentence;
};
