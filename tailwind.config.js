/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html, js}"],
  theme: {
    extend: {
      colors: {
        'very-dark-blue': 'hsl(233, 47%, 7%)',
        'dark-desaturated-blue': 'hsl(244, 38%, 16%)',
        'soft-violet': 'hsl(277, 64%, 61%)',
        'slightly-white-main-paragraph': 'hsla(0, 0%, 100%, 0.75)',
        'slightly-white-stat-headings': 'hsla(0, 0%, 100%, 0.6)',
      }
    },
  },
  plugins: [],
}

