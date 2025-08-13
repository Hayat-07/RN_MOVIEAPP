/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      gradientColorStops: {
        primary: '#9500B2',
        secondary: '#00B2A4',
      },
      backgroundColor: {
        "black": "#000000",
      },
      textColor: {
        "white": "#FFFFFF",
        "gray": "#808080",
        "primary": "#9500B2",
        "secondary": "#00B2A4",
      },
    },
  },
  plugins: [],
}



// const { colors } = require('tailwindcss/colors');

// module.exports = {
//   content: ["./App.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         primary: colors.blue,
//         secondary: colors.green,
//         accent: colors.pink,
//         background: colors.gray[900],
//         text: colors.white,
//       },
//     },
//   },
//   plugins: [],
// };
