/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "mobile": "375px",
      },
      
      backgroundImage: {
        'gradient241': 'linear-gradient(124.18deg, var(--tw-gradient-stops))'
      },

      fontFamily: {
        'rs-medium': 'medium',
        'rs-regular': 'regular',
        'rs-semibold': 'semibold'
      }
    },
  },
  plugins: [],
}

