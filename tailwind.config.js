/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'lcct-pic': "url('/assets/images/LCCT_Building_1.png')",
      },
    },
    
  },
  plugins: [require('@tailwindcss/forms')],
  
}

