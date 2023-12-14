/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        third: "rgb(var(--color-third) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
      },
      textColor: {
        primary: "rgb(var(--text-primary) / <alpha-value>)",
        title: "rgb(var(--text-title) / <alpha-value>)",
      },
      fill: {
        primary: "rgb(var(--text-primary) / <alpha-value>)",
      },
      dropShadow: {
        // drop-shadow-[15px_-10px_0px_rgb(255,0,1)]
        primary: "10px -7px 0px rgb(var(--color-accent))",
        "md-primary": "15px -10px 0px rgb(var(--color-accent))",
      },
    },
  },
  // datatheme
  darkMode: ["class", '[data-mode="dark"]'],
  plugins: [],
};
