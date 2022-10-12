module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'title-kr': ['Do Hyeon', 'sans-serif'],
      secondary: ['Gamja Flower', 'Nanum Gothic'],
      'secondary-title': ['Do Hyeon'],
      primary: ['Black Han Sans', 'Arial'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
