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
        '11/12': '91.666667vh'
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
