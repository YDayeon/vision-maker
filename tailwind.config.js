/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      width: {
        152: "38rem",
        168: "42rem",
      },
      height: {
        76: "19rem",
        152: "38rem",
        168: "42rem",
        200: "50rem",
      },
      gridTemplateColumns: {
        "1rem": "1rem 1fr 1rem",
      },
      gridTemplateRows: {
        "1rem": "1rem 1fr 1rem",
      },
      transitionProperty: {
        width: "width",
      },
      inset: {
        36: "9rem",
      },
      boxShadow: {
        "direct-l": "4px 4px gray",
        "direct-xl": "8px 8px gray",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("tailwindcss")("./src/tailwind.config.js"),
    require("autoprefixer"),
  ],
};
