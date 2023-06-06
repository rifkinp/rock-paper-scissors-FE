/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{html,js}"],
  theme: {
    // colors: {
    //   orange: "#FFB548",
    //   metal: "979797",
    // },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      orange: colors.orange,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      green: colors.green,
      blue: colors.blue,
      metal: "#d1d5db",
      mandarin: "#FFB548",
    },
    fontSize: {
      xs: ["14px", {lineHeight: "24px", letterSpacing: "-0.-0.03em,"}], //p
      sm: ["16px", {lineHeight: "28px", letterSpacing: "-0.-0.03em,"}], //h6
      lg: ["18px", {lineHeight: "28px", letterSpacing: "-0.-0.03em,"}], // h5
      xl: ["24px", {lineHeight: "36px", letterSpacing: "-0.-0.03em,"}],
      "2xl": ["36px", {lineHeight: "48px", letterSpacing: "-0.-0.032em,"}],
      "3xl": ["48px", {lineHeight: "56px", letterSpacing: "-0.-0.032em,"}],
      "4xl": ["64px", {lineHeight: "64px", letterSpacing: "-0.-0.032em,"}],
      "5xl": ["80px", {lineHeight: "80px", letterSpacing: "-0.-0.032em,"}], //h1
    },
    extend: {},
  },
  plugins: [],
};
