/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        normal: "#9fa19f",
        fighting: "#ff8000",
        flying: "#81b9ef",
        poison: "#9040cc",
        ground: "#915121",
        rock: "#afa981",
        bug: "#91a119",
        ghost: "#704170",
        steel: "#60a1b8",
        fire: "#e62829",
        water: "#2980ef",
        grass: "#42a129",
        electric: "#fac000",
        psychic: "#f14179",
        ice: "#3fd8ff",
        dragon: "#5061e1",
        dark: "#50413f",
        fairy: "#f170f1",
      },
    },
  },
  plugins: [],
};
