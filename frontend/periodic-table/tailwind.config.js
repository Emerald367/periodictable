/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      width: {
        '1/18': '5.555555%',
      },
      fontFamily: {
        'merri': ["Merriweather", 'serif'],
        'mont': ["Montserrat", 'sans-serif']
      },
      animation: {
        fade: 'fadeIn 2s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0},
          to: { opacity: 1},
        },
      },
    },
  },
  plugins: [],
}

