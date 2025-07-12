/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Avenir', 'sans-serif'],
      },
      colors: {
        black: {
          DEFAULT: '#000000',
          light: '#2c3e50',
        },
        green: {
          DEFAULT: '#00bc77',
        }
      },
    },
  },
  plugins: ['prettier-plugin-tailwind'],
};
