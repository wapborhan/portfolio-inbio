/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  corePlugins: {
    preflight: false,
  },
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
    },
    container: {
      center: true,
      padding: "15px",
    },
    extend: {
      colors: {
        primary: "#ff014f",
        subtitle: "#f9004d",
        darkbg: "#212428",
      },
    },
  },
  plugins: [],
};
