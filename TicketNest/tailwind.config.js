/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          '400': 'rgba(156, 163, 175, 0)', // Set opacity to 0 for gray-400
        },
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      backgroundColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    },
  },
}
