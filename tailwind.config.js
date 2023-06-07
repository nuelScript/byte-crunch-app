/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideUp: {
          to: { transform: "translateY(-100%)", opacity: "0" },
        },
      },
      colors: {
        buttoncolor: "#F79327",
      },
      animation: {
        "slide-down": "slideDown 0.5s ease-in-out forwards",
        "slide-up": "slideUp 0.5s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
