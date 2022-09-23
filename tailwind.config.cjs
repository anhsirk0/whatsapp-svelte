const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      width: {
        18: "4.5rem",
      },
      fontFamily: {
        sans: ["Rubik"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#008069",
          "primary-focus": "#00a884",
          "primary-content": colors.white,
          secondary: "#e7ffdb",
          "secondary-focus": "#e7ffdb",
          "secondary-content": colors.slate[800],
          accent: "#f1e8df", // chat screen bg
          "accent-focus": "#f1e8df", // chat screen bg
          "accent-content": colors.slate[800],
          neutral: colors.slate[500],
          "neutral-focus": colors.slate[600],
          "neutral-content": colors.white,
          "base-100": colors.white,
          "base-200": colors.slate[100],
          "base-300": colors.slate[200],
          "base-content": colors.slate[800],
          info: colors.sky[500],
          success: colors.green[500],
          warning: colors.amber[500],
          error: colors.rose[500],
        },
      },
    ],
  },
};
