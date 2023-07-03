/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'flip-front-letter': 'flip-front-letter .3s cubic-bezier(0.455, 0.030, 0.515, 0.955) both',
        'flip-back-letter': 'flip-back-letter .3s cubic-bezier(0.455, 0.030, 0.515, 0.955) both',
        'shake': 'shake 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both',
      },
      keyframes: {
        'flip-front-letter': {
          '0%': {
            transform: 'rotateX(0deg)',
            animationTimingFunction: 'ease-out'
          },
          '100%': {
            transform: 'rotateX(90deg)',
            animationTimingFunction: 'ease-in',
          },
        },
        'flip-back-letter': {
          '0%': {
            transform: 'rotateX(90deg)',
            animationTimingFunction: 'ease-in',
          },
          '100%': {
            transform: 'rotateX(0deg)',
            animationTimingFunction: 'ease-out',
          },
        },
        'shake': {
          '0%,100%': {
              transform: 'translateX(0)'
          },
          '10%,30%,50%,70%': {
              transform: 'translateX(-10px)'
          },
          '20%,40%,60%': {
              transform: 'translateX(10px)'
          },
          '80%': {
              transform: 'translateX(8px)'
          },
          '90%': {
              transform: 'translateX(-8px)'
          },
        },
      }
    }
  },
  plugins: [],
}
