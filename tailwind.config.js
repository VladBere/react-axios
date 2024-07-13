/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    colors:{
      'dark-blue': "#111E4C",
      'dark-blue-border': "rgba(17, 30, 76, 0.500)",
      'light-blue': "#009DFF",
      'gray': "#A7B7E7",
      "btn-blue": "rgba(0, 157, 255, 0.15)",
      "light-gray": "rgba(167, 183, 231, 1)",
      "green-money": "#9FD356",
    }
  },
  plugins: [],
}

