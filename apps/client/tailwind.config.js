/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#1f1f1f",
        light_grey: " #99a4af",
        shamiri_green: " #438f78",
        hard_green: "#143029",
        grey: "#626a72",
        dark_grey: "#33383f",
        back_grey: "#f7f9fa",
        soft_blue: "#e6f7ff",
        shamiri_light_green: "#bcd9d1",
        cream_blue: " #cce5f3",
        light_blue: "#2c90c9",
        dark_green: "#143029",
        faint_blue: " #66a2cd",
        soft_grey: "#c2cdd8",
        silver: "#dee5eb",
        shamiri_orange: " #e3a89f",
        pink: "#dd7e6f",
        light_blue_2: "#a8d1eb",
      },
      fontFamily: {
        playwrite: ["playwrite"],
        spaceMono: ["spaceMono"],
        workSansItalic: ["workSansItalic"],
        workSans: ["workSans"],
        latoThinItalic: ["latoThinItalic"],
        latoBlack: ["latoBlack"],
        latpBolditalick: ["latpBolditalick"],
      },
    },
  },
  plugins: [],
};
