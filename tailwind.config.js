/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        nav: "#1C1D27",
        page: "#161720",
        card: "#1C1D27",
        "card-hover": "#262731",
        "card-border": "#2f303e",
        "card-text": "#a7a9be",
        "default-text": "#f1f3f5",
        "grey-accent": "#3f4050",
        "grey-accent-hover": "#2a2a35",
      },
    },
  },
  plugins: [],
};
