/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "node_modules/preline/dist/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#121212",
        secondary: "#1E1E1E",
        tertiary: "#1f1f1f",
        borderLine: "#333333",
      },
    },
  },
  plugins: [require("preline/plugin")],
};
