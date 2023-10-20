/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        'main-photo': "url('/src/assets/imgs/main-photo.jpg')"
      }
    },
    fontFamily: {
      merri: ['Merriweather', 'serif']
    }
  },
  plugins: [],
}