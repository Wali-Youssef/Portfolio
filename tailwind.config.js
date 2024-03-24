/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
      fontFamily: {
        'fira-code': ['"Fira Code"', 'monospace'],
      },
      colors: {
        'custom-blue': '#0a192f',
        'bleuneon': '#4BE6C8',
      },
    },
  },
  plugins: [],
}
