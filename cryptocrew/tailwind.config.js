/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      header: 'Montserrat',
    },
    extend: {
      colors: {
        'light-dark': '#14161A',
      },
    },
  },
  plugins: [],
}
