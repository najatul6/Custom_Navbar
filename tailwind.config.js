/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'gradient-back':'#0000001a',
      },
      container:{
        center:true,
        padding:{
          default:'1rem',
          sm:'1rem',
          md:'2rem',
          lg:'3rem',
          xl:'4rem',
          '2xl':'6rem',
        },
      }
    },
  },
  plugins: [],
}

