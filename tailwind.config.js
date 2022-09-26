/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
      openSans: ['Open Sans'],
      },

      colors: {
        cyberBlue: '#1A445F',
        cyberLightBlue: 'rgba(28, 89, 129, 0.13)',
        cyberOrange: '#F47E35',
        cyberGrey: 'rgba(229, 229, 229, 0.44)',
      }
    },
  },
  plugins: [],
}
