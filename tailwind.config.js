const { translate } = require('tailwindcss/defaultTheme');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '7/6': '115%',
        '11/12': '91.666667vh',
        '4/5-scr': '80vh',
        '2/3-scr': '70vh'
      },
      minHeight: {
        '6/5-scr': '85vh',
        '4/5-scr': '80vh',
        '1/2-scr': '50vh',
        '2/5-scr': '40vh'
      },
      width: {
        '6/4': '150%',
        '95': '95%'
      },
      maxWidth: {
        'screen': '100vw'
      },
      colors: {
        primary: '#C8B8CC',
        secondary: '#B1D1D3',
      },
      fontFamily: {
        sans: ['Outfit', ...defaultTheme.fontFamily.sans],
      },
      borderRadius: {
        '2xl': '3rem',
      },
      translate: {
        '20px': '20px'
      },
      animation: {
        'float': 'float 5s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': {transform: 'translateY(-1rem)'},
          '50%': {transform: 'translateY(1rem)'}
        }
      }
    },
  },
  plugins: [],
}
