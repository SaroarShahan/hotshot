/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
      },
    },
  },
  plugins: [
    function ({ addComponents, addBase }) {
      addBase({
        html: {
          fontSize: '62.5%',
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
