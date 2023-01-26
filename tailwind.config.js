/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      height: {
        200: "50rem",
      },
      transitionProperty: {
        width: "width",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
