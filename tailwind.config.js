/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}", "./Components/*.{jsx,js,html,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.btn': {
          width: '8rem',           // Tailwind's equivalent for w-32
          height: '2.5rem',        // Tailwind's equivalent for h-10
          backgroundColor: '#7F00FF', // Tailwind's blue-500
          //marginTop: '0.75rem',    // Tailwind's equivalent for mt-3
          borderRadius: '9999px',  // Tailwind's rounded-full
          fontWeight: '400',       // Tailwind's font-normal
          color: '#000',           // Text color (white)
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background-color 0.3s ease',
          '&:hover': {
            backgroundColor: '#5F00FF', // Tailwind's blue-600 for hover
          },
        },
      });
    }),
  ],
}

