/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blush: '#f7d6e8',
        rose: '#f6b5ce',
        lilac: '#d7c7ff',
        plum: '#201a2d',
        champagne: '#f9f3f9',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
        script: ['Parisienne', 'cursive'],
      },
      boxShadow: {
        glow: '0 0 30px rgba(255, 180, 210, 0.45)',
      },
    },
  },
  plugins: [],
};
