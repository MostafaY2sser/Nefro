

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "serif"], // إضافة الخط الجديد
      },
      colors :{
        maincolor : "#62A900",
        textcolor :"#333333",
        bgsection :"#D9D9D94D"
      }
    },
  },
  plugins: [],
}
