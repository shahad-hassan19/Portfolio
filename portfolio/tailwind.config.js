/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      fontSize:{
        'xl' : '21px',
        '1.25xl' : '24px',
        '1.5xl' : '28px',
        '2.6xl' : '32px',
        '3xl' : '36px',
        '3.25xl' : '38px',
        '3.5xl' : '40px',
        '4xl' : '44px',
        '4.5xl' : '48px',
        '5xl' : '58px',
        '6xl' : '68px',
        '7xl' : '76px',
        '8xl' : '92px',
        '9xl' : '104px',
      }
    },
  },
  plugins: [],
}

