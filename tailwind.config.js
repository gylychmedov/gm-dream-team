module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontFamily: {
      "lato-regular": ["Lato-Regular"],
      "lato-bold": ["Lato-Bold"],
    },
    extend: {
      colors: {
        blue: {
          850: "#2C4059",
        },
        pink: {
          650: "#F57280",
          850: "#BF6C82",
          890: "#6F5C7B",
        },
        violet: {
          850: "#6E5C7B",
        },
        teal: {
          850: "#365D7D",
        },
      },
    },
  },
  plugins: [],
};
