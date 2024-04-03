/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#446063", //lighter color
        secondary: "#7F1D1D", //dark color
        ternary: "#996515", //darker color
        // active: "#E5E5E5",
        // stroke: "#818589",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
      fontWeight: {
        500: 500,
        300: 300,
        400: 400,
      },
      plugins: [require("flowbite/plugin")],
    },
  },
  plugins: [],
};
