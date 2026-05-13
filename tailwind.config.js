/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html", 
    "./view/*.html",
    "./js/*.js", 
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