/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#EC4899',
        'primary-light': '#F9A8D4',
        'pink': {
          400: '#f4a7b9',
          500: '#e88ca1',
        }
      },
    },
  },
  plugins: [],
}
