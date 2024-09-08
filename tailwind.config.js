/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F2FDF2",
          100: "#E9FCE9",
          200: "#D3F8D3",
          300: "#BDF5BD",
          400: "#A7F1A7",
          500: "#90EE90",
          600: "#4EE44E",
          700: "#1FC71F",
          800: "#148514",
          900: "#0A420A",
          950: "#051F05",
        },
      },
    },
  },
  plugins: [],
};
