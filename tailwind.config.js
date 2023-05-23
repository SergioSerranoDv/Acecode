/**
 * @format
 * @type {import('tailwindcss').Config}
 */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      Roboto: 'Roboto Condensed, sans-serif',
      Inter: 'Inter, sans-serif',
      Sedwick: 'Yanone Kaffeesatz, sans-serif',
      Ubuntu: 'Ubuntu, sans-serif',
    },
    colors: {
      pinkSpace: '#DA8AF7',
      blue: '#0B0B22',
      space: '#6F1AB6',
      purple: '#3D1766',
      spceBlack: '#251B37',
      vinoTinto: '#370617',
      grayMouse: '#333333',
      blueDesign: '#171819',
      ceniza: '#171810',
      aquamarine: '#08EEF2',
      newRed: '#FB1713',
      transparent: 'transparent',
      orange: '#FFA500',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      zinc: colors.zinc,
    },
    extend: {},
  },
  plugins: [],
}
