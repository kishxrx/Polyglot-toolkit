/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // This line scans your main HTML file
    "./src/**/*.{js,jsx,ts,tsx}", // This line scans all relevant files in your src folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
