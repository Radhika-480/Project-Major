/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        versace: ['Optima', 'Goudy Old Style', 'serif'],
        zara: ['Didot', 'Playfair Display', 'serif'],
        gucci: ['Granjon', 'serif'],
        prada: ['Helvetica Neue', 'sans-serif'],
        calvin: ['Avant Garde Gothic', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

