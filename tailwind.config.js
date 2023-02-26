/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        brand : "#C68B59",
        "dark-brand": "#865439",
        "brown-60" : "#F1D6AB",
        "brown-50": "#F1E3CB", 
        "brown-40": "#BB8760",
        "gray-70": "#837D7D",
        "gray-60" : "#F1D6AB"
      }
    },
  },
  plugins: [],
};
