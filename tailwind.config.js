/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      keyframes: {
        opacity: {
          "0%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
        transform: {
          "0%": { transform: "translate(-200px,0px)" },
          "100%": { transform: "translate(0px,0px)" },
        },
      },
      animation: {
        opacity: "opacity 0.5s ease-in-out",
        transform: "transform 1s",
      },
    },
  },
  plugins: [],
};
