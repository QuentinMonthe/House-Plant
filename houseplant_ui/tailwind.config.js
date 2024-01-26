/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "purple-blue": "#646cff",
        dark: "#242424",
        "dark-100": "#1a1a1a",
      },
    },
  },
  plugins: [],
};
