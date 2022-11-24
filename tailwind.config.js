/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      lemondeliver: ["LeMondeLivre", "sans-serif"],
      opensans: ["OpenSans", "serif"],
    },
    extend: {},
  },
  plugins: [],
};
