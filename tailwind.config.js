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
        larger0: "origin-top-left scale-[3] 1s linear",
        larger1: "origin-top scale-[3] 1s linear",
        larger2: "origin-top-right scale-[3] 1s linear",
        larger3: "origin-left scale-[3] 1s linear",
        larger5: "origin-right scale-[3] 1s linear",
        larger6: "origin-bottom-left scale-[3] 1s linear",
        larger7: "origin-bottom scale-[3] 1s linear",
        larger8: "orifin-bottom-right scale-[3] 1s linear",
        // larger0: "origin-top-left larger 1s",
        // larger1: "origin-top larger 2s ease-in",
        // larger2: "origin-top-right larger 2s ease-in",
        // larger3: "origin-left larger 2s ease-in",
        // larger5: "origin-right larger 2s ease-in",
        // larger6: "origin-bottom-left larger 2s ease-in",
        // larger7: "origin-bottom larger 2s ease-in",
        // larger8: "orifin-bottom-right larger 2s ease-in",
        spin1: "spin 0.5s linear",
      },
      keyframes: {
        larger: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(3)" },
        },
      },
    },
  },
  plugins: [],
};
