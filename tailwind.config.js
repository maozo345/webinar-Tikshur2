/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Heebo', 'sans-serif'],
      },
      colors: {
        spiritual: {
          950: '#1a0b2e', // Deep cosmic purple
          900: '#2d1b4e',
          800: '#432c7a',
          100: '#e0d4fc',
          50: '#f3e8ff',
        },
        gold: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        }
      },
      backgroundImage: {
        'cosmic-gradient': 'radial-gradient(circle at center, #2d1b4e 0%, #0f0518 100%)',
      }
    },
  },
  plugins: [],
}