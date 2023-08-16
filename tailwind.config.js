/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "black": "#20272B",
        "dark-gray": "#393F47",
        "light-gray": "#C8C7C2",
        "blue": "#1C54A4",
        "orange": "#FA6A4D",
        "cream": "#E7E7E1",
      },
      fontFamily: {
        rocGrotesk: ["Roc Grotesk", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
}
