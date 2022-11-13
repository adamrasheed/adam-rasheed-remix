/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],

  theme: {
    extend: {
      colors: {
        bgSecondary: "#f4f5f6",
        bgSecondaryHover: "#e9ebed",
        Instagram: "#E1306C",
        Facebook: "#4267B2",
        Youtube: "#FF0000",
        Dribbble: "#e43b81",
        LinkedIn: "#0076b5",
        Twitter: "#1DA1F2",
        Shopify: "#96bf48",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        sm: "2rem",
        lg: "0",
      },
      screens: {
        xl: "960px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
