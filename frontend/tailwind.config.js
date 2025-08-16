/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors:{
            "gold":"#F5DEB3",
            "royal_purple":"#6A0DAD",
            "bergundy":"#800020"
        },
        fontFamily:{
          abel: ['Abel', 'sans-serif'],
          brigends:['Brigends', 'sans-serif'],
          coolvetica:['Coolvetica', 'sans-serif'],
        }
      },
    },
    plugins: [],
  }