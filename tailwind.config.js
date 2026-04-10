// filepath: c:\xampp\htdocs\Project\ujikom-pmk-idn\perdana-mitra-kencana-website\tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",  // Scan semua file HTML di root
    "./view/*.html",  // Jika ada subfolder seperti view/
    "./js/*.js",  // Jika ada file JS
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'plus-jakarta-sans': ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}