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
        typography: "rgba(var(--color-typography), <alpha-value>)",
        "typography-dark": "rgba(var(--color-typography-dark), <alpha-value>)",
        "typography-darker":
          "rgba(var(--color-typography-darker), <alpha-value>)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  safelist: [
    {
      pattern:
        /(bg|text|border)-(primary|secondary|typography)((-dark)|(-darker))?/,
      variants: ["responsive", "hover", "focus", "active"],
    },
  ],
  plugins: [],
};
