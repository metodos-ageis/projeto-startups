/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgba(var(--color-primary), <alpha-value>)",
        "primary-dark": "rgba(var(--color-primary-dark), <alpha-value>)",
        "primary-darker": "rgba(var(--color-primary-darker), <alpha-value>)",
        secondary: "rgba(var(--color-secondary), <alpha-value>)",
        "secondary-dark": "rgba(var(--color-secondary-dark), <alpha-value>)",
        "secondary-darker":
          "rgba(var(--color-secondary-darker), <alpha-value>)",
      },
    },
  },
  safelist: [
    {
      pattern: /(bg|text|border)-(primary|secondary)((-dark)|(-darker))?/,
      variants: ["responsive", "hover", "focus", "active"],
    },
  ],
  plugins: [],
};
