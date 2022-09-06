/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'aliceGrey': '#5C5C5C',
        'alicePink': '#EE5769'
      },
      borderRadius: {
        '4xl': '2rem',
      },
      spacing: {
        '4/15': '45%',
        '5/15': '55%',
        '34': '130px',
        '84': '340px',
      }
    },
  },
  plugins: [],
}