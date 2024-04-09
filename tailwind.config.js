/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  plugins: [require("flowbite/plugin")],
  theme: {
    extend: {
      colors: {
        primary: "#192d50", //lighter color
        secondary: "#f0f3fb", //dark color
        ternary: "#FFB404", //darker color
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
      fontWeight: {
        500: 500,
        300: 300,
        400: 400,
      },
    },
  },
  plugins: [],
};
