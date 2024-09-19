/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "#000",
      white: "#fff",
      beaver: "#9e7f66",
      "cod-gray": "#111111",
      mirage: "#17192b",
      "ebony-clay": "#242b37",
      "shuttle-gray": "#5c6779",
    },
    fontFamily: {
      spartan: ['"League Spartan"', "sans-serif"],
    },
    fontSize: {
      "body-sm": ["16px", { fontWeight: "400", lineHeight: "26px" }],
      "body-base": ["20px", { fontWeight: "400", lineHeight: "30px" }],
      "heading-sm": [
        "17px",
        { fontWeight: "600", lineHeight: "28px", letterSpacing: "2.5px" },
      ],
      "heading-base": [
        "20px",
        { fontWeight: "700", lineHeight: "24px", letterSpacing: "-0.25px" },
      ],
      "heading-lg": [
        "48px",
        { fontWeight: "700", lineHeight: "48px", letterSpacing: "-0.5px" },
      ],
      "heading-xl": [
        "80px",
        { fontWeight: "300", lineHeight: "80px", letterSpacing: "-1px" },
      ],
    },
    extend: {
      screens: {
        tablet: "768px",
        desktop: "1440px",
      },
    },
  },
  plugins: [],
};
