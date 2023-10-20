/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Roboto: "'Roboto', sans-serif",
      Allura: "'Allura', cursive",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
