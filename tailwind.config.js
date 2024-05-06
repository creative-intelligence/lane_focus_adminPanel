/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      center:true,
      margin:{

      }

    },
    extend: {
      colors:{
        primary:"#095AFC",
        background:"#F1F5F95"

      }
    },
  },
  plugins: [],
}