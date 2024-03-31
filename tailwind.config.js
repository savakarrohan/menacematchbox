// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.tsx"], // Specify your React component files
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      fontWeight: {
        100: 100,
        200: 200,
        300: 300,
        400: 400,
        500: 500,
        600: 600,
        700: 700,
        800: 800,
        900: 900,
      },
    },
  },
  variants: {},
  plugins: [],
};
