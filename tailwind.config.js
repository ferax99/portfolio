// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'pulse-grow': {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.15)', opacity: '0.9' }, // Un poco más grande y transparente en el medio
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        // Mantiene otras animaciones si las tienes, como 'fade-in-up'
        'fade-in-up': {
            '0%': { opacity: '0', transform: 'translateY(20px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'pulse-grow': 'pulse-grow 1s ease-in-out', // 1 segundo de duración, ajusta según necesites
        'fade-in-up': 'fade-in-up 1s ease-out forwards', // Si no lo tenías ya
      },
    },
  },
  plugins: [],
}