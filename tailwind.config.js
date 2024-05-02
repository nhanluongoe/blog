// @ts-check
const customerColors = require('./customercolors')

module.exports = {
  content: [
    './node_modules/pliny/**/*.js',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    './layouts/**/*.{js,ts,tsx}',
    './data/**/*.mdx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        ibm: ['var(--font-ibm-plex-mono)'],
      },
      colors: {
        ...customerColors,
      },
      boxShadow: ({ theme }) => ({
        primary: `5px 5px 0px 0px ${theme('colors.primary.500')}`,
        secondary: `5px 5px 0px 0px ${theme('colors.secondary.500')}`,
        gray: `5px 5px 0px 0px ${theme('colors.gray.600')}`,
      }),
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
