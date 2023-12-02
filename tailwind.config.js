/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      keyframes: {
        'show': {
          '0%': { transform: 'scale(1,0)' },
          '100%': { transform: 'scale(1,1)' }
        },
        'show-inv': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'show-d': {
          '0%': { background: 'rgba(255,255,255,0)' },
          '100%': { background: 'rgba(255,255,255,1)' }
        }
      },
      animation: {
        'show': 'show .3s ease-out normal',
        'show-inv': 'show-inv .7s ease-out normal',
        'show-d': 'show-d .7s ease-out normal',
      },
      colors: {
        pastel: '#F2B3D6',
        purple: '#B7AEF2',
        greend: '#238C6E',
        greenl: '#2BD999',
        whited: '#F2EEEB'
      }
    },
  },
  plugins: [],
}

