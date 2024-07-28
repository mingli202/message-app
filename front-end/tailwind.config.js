/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#EEF7FF",
      black: "#15191C",
      1: "#a2d2ff",
      2: "#bde0fe",
      3: "#ffafcc",
      4: "#ffc8dd",
      5: "#cdb4db",
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
