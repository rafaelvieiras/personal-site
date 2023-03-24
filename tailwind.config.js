/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#F5F4F4",
      red: "#BB004B",
      green: "#2BD6D6",
      blue: "#00C9F6",
      orange: "#FFA500",
      "orange-light": "#F6C867",
      grafiti: "#353535",
    },
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
      serif: ["var(--font-roboto)", "serif"],
    },
  },
  plugins: [require("daisyui")],
};
