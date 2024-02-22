/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryColor:"#00ce7d",
        secundaryColor:"white",
        bgColor:"#121212"
      }
    },
    screens:{
      xs:"320px",
      sm: '600px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    }
    

  },
  plugins: [],
}


