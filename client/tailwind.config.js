/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "lg-all": "0px 4px 20px 0px #0000004D",
        soft: "0px 2px 8px 0px #00000020",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        source_sans: ["Source Sans Pro", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        tinos: ["Tinos", "sans-serif"],
      },
      screens: {
        print: { raw: "print" },
        "mui-sm": "576px",
      },
      colors: {
        primary: "#1878F3",
        VerydarkBlue: "#00315F",
        primaryFocus: "#318cf5",
        overlay: "rgba(0, 0, 0, 0.65)",
        "theme-gray": "#505050",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
