/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#9e59d4'
      },
      gridTemplateColumns:{
        'auto':'repeat(auto-fill, minmax(270px, 1fr))'
      }
    },
  },
  plugins: [],
}