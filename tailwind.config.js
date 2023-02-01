/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': {
        'dark-blue': '#202D41',
        'blue': '#3784F4',
        'success': '#34AD51',
        'danger': '#D83636',
        'warning': '#FFB502',
        'backgroud-blue': '#F4F8FF',
        'light-blue': '#71B2FF',
        'hover-blue': '#D8E8FF'
      },
      'neutral': {
        'black': '#000000',
        'dim-grey': '#5B5B5B',
        'silver': '#BDBDBD',
        'white-smoke': '#E9E9E9',
        'white': '#FFFFFF',
        'transparent': 'transparent',
      }
    },
    extend: {
      fontFamily: {
        'inter': ['"Inter"', 'sans-serif'],
      },
      dropShadow: {
        '3xl': '0 4px 16px 0 rgba(32, 45, 65, 0.2)',
      }
    },
    variants: {
      fill: ['hover', 'focus'], // this line does the trick
    },
  },
  plugins: [],
}