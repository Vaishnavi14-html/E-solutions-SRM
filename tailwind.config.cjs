/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./{components,pages,hooks,constants,src}/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#14b8a6', // teal-500
        'primary-dark': '#0d9488', // teal-600
        'primary-light': '#5eead4', // teal-300
        sidebar: '#1a202c',
        'sidebar-hover': '#2d3748',
        'sidebar-active': '#2d3748',
        'sidebar-submenu': '#2d3748',
        accent: '#8b5cf6', // A shade of purple
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}