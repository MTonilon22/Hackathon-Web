/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  plugins: [require("flowbite/plugin"), require("daisyui")],
  theme: {
    extend: {
      colors: {
        primary: "#192d50", //lighter color
        secondary: "#f0f3fb", //dark color
        ternary: "#FFB404", //darker color
      },
      screens: {
        cs: { max: "640px" }, //Custom breakpoint for 640px and below..hehehe
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
  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "light", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
