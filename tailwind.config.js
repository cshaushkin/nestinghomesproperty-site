/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",   // scan your pages
    "./components/**/*.{js,ts,jsx,tsx}", // scan your components
    "./app/**/*.{js,ts,jsx,tsx}"      // safe in case you add app router later
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}