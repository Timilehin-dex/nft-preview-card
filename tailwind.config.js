/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: "hsl(215, 51%, 70%)", // Soft blue
          cyan: "hsl(178, 100%, 50%)", // Cyan
        },
        neutral: {
          "dark-blue-bg": "hsl(217, 54%, 11%)", // Very dark blue (main BG)
          "dark-blue-card": "hsl(216, 50%, 16%)", // Very dark blue (card BG)
          "dark-blue-line": "hsl(215, 32%, 27%)", // Very dark blue (line)
          white: "hsl(0, 0%, 100%)", // White
        },
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
