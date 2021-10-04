
const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      opacity: '#0000009e',
      black: '#000000',
      white: '#ffffff',
      gold: '#6c572f',
      price: '#A6AEAF',
      grey:'#101010',
    },
    fontFamily: {
      oswald1: ['Oswald', 'sans-serif'],
      serif: ['Open Sans', 'serif'],
    },
    fontSize:{
      title: '30px',
      normal: '24px',
      smoll: '12px',
      xs: '11px',
      md: '14px'
    }
   
  },
  variants: {
    extend: {},
  },
  plugins: [
    
    plugin(function({ addUtilities }) {
      const newUtilities = {
       
        '.amber_caviar': {
          fontSize : '0.9em',
          fontFamily: 'Oswald',
          color: '#6c572f',
        },
        '.amber_caviar_cart': {
          fontSize : '1.5em',
          fontFamily: 'Oswald',
          color: '#6c572f',
        },
       
     
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    })


  ],
}



