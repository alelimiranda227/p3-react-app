/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'lcct-pic': "url('./src/assets/images/LCCT_Building_1.png')"
      }
    },
    
  },
  plugins: [require('@tailwindcss/forms')],
  
}

