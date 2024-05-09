/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{jsx,js}","./index.html"],
  theme: {
    extend: {
      colors:{
        primary: '#c31b4b',
        secondary: '#6ec24a',
        light: '#d77b95',
      }
    },
  },
  plugins: [],
}

