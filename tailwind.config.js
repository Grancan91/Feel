/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#2196f3",
        "blue-dark": "#1976d2",
        "gray-dark": "#273444",
        oldgray: "#8492a6",
        gray: "#6B7280",
        "gray-light": "#d3dce6",
        "background-light": "#F5F5F5",
        green: "#34B53A",
        red: "#FF6B5F",
      },
      backgroundImage: {
        "happy": "url('https://openmoji.org/data/color/svg/1F600.svg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
    plugins: [],
  }

