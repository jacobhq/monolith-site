module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#08C168",
          DEFAULT: "#01974F",
          dark: "#00743C"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("kutty")],
}
