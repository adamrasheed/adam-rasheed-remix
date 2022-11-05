/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],

  theme: {
    colors: {
      bgSecondary: "#f4f5f6",
      ...colors,
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
    extend: {},
  },
  plugins: [],
};
