/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      backgroundBlack: "#121212",
      textWhite: "#F5F5F5",
      grayLight: "#A6A6A6",
      grayDark: "#3D3D3D",
    },
    fontFamily: {
      openSans: ["Open Sans", "sans-serif"],
      firaCode: ["Fira Code", "monospace"],
    },
    keyframes: {
      opacity: {
        "0%": { opacity: "0%" },
        "100%": { opacity: "100%" },
      },
      transform: {
        "0%": { transform: "translate(0px,-200px)" },
        "100%": { transform: "translate(0px,0px)" },
      },
      bounce: {
        "0%, 100%": {
          transform: "translateY(-25%)",
          "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
        },
        "50%": {
          transform: "translateY(0)",
          "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
        },
      },
    },
    animation: {
      opacity: "opacity 1s ease-in-out",
      transform: "transform 1s ease-in-out",
      bounce: "bounce 1s infinite",
    },
  },
  plugins: [],
};
