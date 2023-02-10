/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('assets/backgrounds/backGroundHero.png')",
        "projects-pattern": "url('assets/backgrounds/backGroundProjects.png')"
      },
      backgroundPosition: {
        heroPosition: 'center 120%',
        projectsPosition: 'center 55%'
      },
      borderRadius: {
        cards: '48px'
      },
      boxShadow: {
        cards: '0px 4px 4px rgba(0, 0, 0, 0.25)'
      },
      colors: {
        darkGray: '#777990',
        darkViolet: '#14142B',
        footer: '#EBEBEB',
        lightGray: '#F1F7FF',
        servicesBg: 'rgba(224, 205, 193, 0.16)',
        violet: '#3B225D',
      },
      fontFamily: {
        satoshiBold: ['Satoshi-bold', 'sans-serif'],
        satoshiMedium: ['Satoshi-medium', 'sans-serif'],
      },
      fontSize: {
        h1: '60px',
        h1Sm: '30px',
        h2: '40px',
        h3: '25px',
        nav: '18px',
      },
      height: {
        servicesBg: '100%',
      },
      maxWidth: {
        heroImg: '418px',
        heroImgSm: '70%',
      },
      width: {
        container: '1240px',
        servicesBg: '85%'
      }
    },
  },
  plugins: [],

}