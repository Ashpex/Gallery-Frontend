module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['"Barlow Condensed"', "sans-serif"],
      },
    },
    plugins: [require("flowbite/plugin")],
  },
};
