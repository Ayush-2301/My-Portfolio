/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        standardFont: "'Roboto Condensed', sans-serif",
      },
      backgroundColor: {
        "Light-Mode-color": "#EDE6F2",
        "Dark-black-color": "#0B0C10",
        "light-Color": "#EBF2FA",
        "Home-theme": "#279AF1",
        "Skill-theme": "#ef233c",
        "Projects-theme": "#06d6a0",
        "Contact-theme": "#ff9f1c",
      },
      colors: {
        "Dark-black-color": "#0B0C10",
        "light-Color": "#EBF2FA",
        "Home-theme": "#279AF1",
        "Skill-theme": "#ef233c",
        "Projects-theme": "#06d6a0",
        "Contact-theme": "#ff9f1c",
      },
    },
  },
  plugins: [],
};
