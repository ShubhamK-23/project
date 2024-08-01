/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'chart-1': 'hsl(12, 76%, 61%)',
        'chart-2': 'hsl(173, 58%, 39%)',
        'chart-3': 'hsl(197, 37%, 24%)',
        gray: {
          '400': 'rgba(156, 163, 175, 0)', // Set opacity to 0 for gray-400
        },
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
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