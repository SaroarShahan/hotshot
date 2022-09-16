const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    spacing: {
      0: '0',
      0.1: '0.1rem',
      0.2: '0.2rem',
      0.4: '0.4rem',
      0.5: '0.5rem',
      0.8: '0.8rem',
      0.9: '0.9rem',
      1: '1rem',
      1.2: '1.2rem',
      1.4: '1.4rem',
      1.5: '1.5rem',
      1.6: '1.6rem',
      1.8: '1.8rem',
      2: '2rem',
      2.4: '2.4rem',
      2.5: '2.5rem',
      2.6: '2.6rem',
      2.7: '2.7rem',
      2.8: '2.8rem',
      3: '3rem',
      3.5: '3.5rem',
      4: '4rem',
      4.8: '4.8rem',
      5: '5rem',
      6: '6rem',
      7: '7rem',
      8: '8rem',
      9: '9rem',
      10: '10rem',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      white: '#fff',
      black: '#000',

      primary: {
        DEFAULT: '#007bff',
      },

      gray: {
        300: '#d1d5db',
        400: '#a7b0bd',
        DEFAULT: '#A7B5CA',
        800: '#2F313E',
        900: '#263C53',
      },
    },
    fontSize: {
      xs: ['1.2rem', '1.4'],
      sm: ['1.4rem', '1.6rem'],
      base: ['1.6rem', '1.7ren'],
      lg: ['1.8rem', '2.6rem'],
      xl: ['2rem', '2.8rem'],
      '2xl': ['2.4rem', '3.2rem'],
      '3xl': ['2.8rem', '3.8rem'],
    },
    extend: {
      container: {
        center: true,
        padding: '15px',
      },
    },
  },
  plugins: [
    function ({ addComponents, addBase }) {
      addBase({
        html: {
          fontSize: '62.5%',
        },
        body: {
          fontSize: '1.4rem',
        },
      });

      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen xl': {
            maxWidth: '1140px',
          },
        },
      });
    },
  ],
};
