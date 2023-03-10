/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'space': ['Space Grotesk'],
      },
      colors: {
        dark: "#090311",
        primary: "#F1F5F9",
        secondary: "#82798C",
        accent: "#7B03FC",
      }
    },
  },
  plugins: [],
}