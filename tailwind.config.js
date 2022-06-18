/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      small: '480px',
      medium: '768px',
      large: '1020px',
      extraLarge: '1440px',
    },
    extend: {
      colors: {
        softBlue: 'hsl(231,69%,60%)',
        softRed: 'hsl(0,94%,66%)',
        grayishBlue: 'hsl(299,8%,60%)',
        veryDarkBlue: 'hsl(299,31%,21%)',
      },
      fontFamily: {
        sans: ['Rubik','sans-serif'],
      },
      backgroundImage: () => ({
        dots: 'url("../images/bg-dots.svg")',
      }),
    },
  },
  plugins: [],
}