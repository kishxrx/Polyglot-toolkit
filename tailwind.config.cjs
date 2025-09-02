/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // This line scans main HTML file
    "./src/**/*.{js,jsx,ts,tsx}", // This line scans all relevant files in src folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
