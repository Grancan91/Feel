/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    './src/tailwind.css',
    './src/Pages/Welcome/Welcome.jsx',
    './src/Pages/Signup/Singup.jsx'
  ],
  theme: {
    extend: {
      colors: {
      'blue': '#2196f3',
      'blue-dark':'#1976d2',
      'gray-dark': '#273444',
      'oldgray': '#8492a6',
      'gray': '#6B7280',      
      'gray-light': '#d3dce6',
    },},
  },
  plugins: [],
}

