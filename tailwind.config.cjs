/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '976px',
      'xl': '1280px',
      '2xl': '1440px',
      '3xl': '1600px'
    },
    colors: {
      primary: {
        50: '#eff9ff',
        100: '#def2ff',
        200: '#b6e6ff',
        300: '#76d4ff',
        400: '#2ebfff',
        500: '#02a7f5',
        600: '#0085d1',
        700: '#006aa9',
        800: '#005a8c',
        900: '#021622'
      },
      secondary: {
        50: '#faf5ff',
        100: '#f3e8ff',
        200: '#e9d4ff',
        300: '#d9b3ff',
        400: '#c183fd',
        500: '#aa53f9',
        600: '#9f44ee',
        700: '#8020d0',
        800: '#6c1faa',
        900: '#591b88'
      }
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem'
      },
      borderRadius: {
        '4xl': '2rem'
      }
    }
  },
  plugins: []
}
