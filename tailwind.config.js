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
      greyDark: "#3D3D3D",
    },
  },
  plugins: [],
};
