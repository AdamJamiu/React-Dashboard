const colors = require('./colors.config')

module.exports.tailwindcss = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  darkMode: true,
  theme: {
    extend: {
      colors,
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
