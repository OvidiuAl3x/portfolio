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
        navAnim: {
          "0%": { transform: "translate(0px,-100px)" },
          "100%": { transform: "translate(0px,0px)" },
        },
        scaleOp: {
          "0%": { scale: "0.5", opacity: "0%" },
          "100%": { scale: "1", opacity: "100%" },
        },
      },
      animation: {
        opacity: "opacity 0.5s ease-in-out",
        transform: "transform 1s",
        navAnim: "navAnim 1s ease-in-out",
        scaleOp: "scaleOp 1s ease-in-out",
      },
      gridTemplateRows: {
        8: "repeat(8, minmax(0, 5vw))",
      },
      gridTemplateColumns: {
        8: "repeat(8, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};
