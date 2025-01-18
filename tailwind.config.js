/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'slide': 'slide 20s linear infinite',
        'slide-reverse': 'slide-reverse 15s linear infinite',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(-50%) rotate(45deg)' },
          '100%': { transform: 'translateX(0%) rotate(45deg)' },
        },
        'slide-reverse': {
          '0%': { transform: 'translateX(0%) rotate(-45deg)' },
          '100%': { transform: 'translateX(-50%) rotate(-45deg)' },
        },
      },
    },
  },
  plugins: [],
}

