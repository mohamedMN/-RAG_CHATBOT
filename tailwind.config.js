/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'pulse-dot': 'pulse 1.4s ease-in-out infinite both',
      }
    },
  },
  plugins: [],
}