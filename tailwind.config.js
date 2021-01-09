const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      colors: {
        orange: colors.orange
      },
      zIndex: {
        '-10': '-10',
      }
    },
  },
  variants: {
    extend: {

    },
  },
  plugins: [],
}
