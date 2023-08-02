/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#00061c',
        secondary: '#1282a2',
        tertiary: '#151030',
        fourth: '#bdbacf',
        'black-100': '#100d25',
        'black-200': '#090325',
        'white-100': '#fefcfb'
      },
      boxShadow: {
        card: '0px 35px 120px -15px #211e35'
      },
      screens: {
        xs: '450px'
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/herobg-new.jpg')"
      }
    }
  },
  plugins: []
};
