/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      maxWidth:{
        "container":"1200px"
      },
      colors:{
        primary: "#4F46BA"
      },
      fontFamily:{
        pops:['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}
