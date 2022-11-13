import { TAGS } from "./components/PostSidebar";

export const WEATHER_ENDPOINT = `https://api.openweathermap.org/data/2.5/weather`;

export const HOME_COORDS = {
  lat: 34.0266405,
  long: -118.3972219,
};

export const AFFILIATE_LINKS: Record<TAGS, string> = {
  [TAGS.DIGITAL_OCEAN]: `https://m.do.co/c/73cb4550a3de`,
  [TAGS.SHOPIFY]: `https://www.shopify.com/?ref=creatix-online-marketing&utm_campaign=Personal%20Site%20Ad&utm_medium=Blog&utm_source=adamrasheed.com`,
};

export const DEFAULT_CK_FORM_ID = "3765543";

export const META = {
  social: {
    twitter: {
      handle: "@ARasheedPhoto",
    },
  },
};
