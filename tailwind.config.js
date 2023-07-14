import { light } from '@mui/material/styles/createPalette'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#2196f3",
        "blue-dark": "#4339F2",
        "gray-dark": "#273444",
        oldgray: "#8492a6",
        gray: "#6B7280",
        "gray-light": "#d3dce6",
        "background-light": "#F5F5F5",
        green: "#34B53A",
        "green-light":"#81c784",
        "green-xlight":"#E2FBD7",
        "red": "#FF6B5F",
        "red-light":"#FFE5D3",
        "blue-light":"#DAD7FE",
      },
      backgroundImage: {
        "happy": "url('https://openmoji.org/data/color/svg/1F600.svg')",
      },
    },
  },
    plugins: [],
  }

