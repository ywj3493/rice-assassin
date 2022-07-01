/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,jsx,js,tsx,ts}"],
  mode: "jit",
  theme: {
    colors: {
      ...colors,
      ra: {
        100: "#D9CE96",
        200: "#F2913D",
        300: "#D95D30",
        400: "#8C2016",
        500: "#0D0D0D",
      },
    },
    extend: {
      animation: {
        larger: "larger 1s ease-in",
        spin1: "spin 0.5s linear",
        wiggle: "wiggle 1s ease-in-out ",
      },
      keyframes: {
        larger: {
          "0%": { transform: "scaleX(1)" },
          "100%": { transform: "scaleX(-1)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
    },
  },
  plugins: [],
};
