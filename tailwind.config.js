/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '327': '327px',
      },
      padding: {
        'sm-1': '14px',
        'sm-2': '16px'
      },
      margin: {
        '8': '8px',
        '16': '16px',
        '24': '24px'
      },
      height: {
        '40': '40px',
        '48': '48px'
      },
      colors: {
        'primary': '#FFE202',
        'gray': '#3A3A3A',
        'greyLight': '#CBCBD4'
      },
      borderRadius: {
        'sm': '15px'
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif']
      }
    },
  },
  plugins: [],
}

