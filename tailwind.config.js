/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8eb826',
        secondary: '#a1cb36',
        background: '#f5f5f5',
        third: '#778899'
      }
    },
  },
  plugins: [],
}