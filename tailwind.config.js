/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        normal: {
          300: "#B7B8B7",
          400: "#9fa19f",
        },
        fighting: {
          300: "#FFCC99",
          600: "#ff8000",
        },
        flying: {
          300: "#81b9ef",
        },
        poison: {
          300: "#BD8EE1",
          500: "#9040cc",
        },
        ground: {
          300: "#E5B28B",
          700: "#915121",
        },
        rock: {
          300: "#C7C3A8",
          400: "#afa981",
        },
        bug: {
          300: "#E0EC83",
          700: "#91a119",
        },
        ghost: {
          300: "#CBA4CB",
          500: "#704170",
        },
        steel: {
          300: "#9CC4D3",
          500: "#60a1b8",
        },
        fire: {
          300: "#F07F7F",
          500: "#e62829",
        },
        water: {
          300: "#7AAFF5",
          500: "#2980ef",
        },
        grass: {
          300: "#9EE28D",
          700: "#42a129",
        },
        electric: {
          300: "#FFDE70",
          500: "#fac000",
        },
        psychic: {
          300: "#F57AA1",
          400: "#f14179",
        },
        ice: {
          300: "#70E2FF",
          400: "#3fd8ff",
        },
        dragon: {
          300: "#8591EA",
          400: "#5061e1",
        },
        dark: {
          300: "#C0B1AF",
          800: "#50413f",
        },
        fairy: {
          300: "#f170f1",
        },
      },
    },
  },
  plugins: [],
  safelist: [
    "fill-slate-300",
    "fill-normal-300",
    "fill-fighting-300",
    "fill-flying-300",
    "fill-poison-300",
    "fill-ground-300",
    "fill-rock-300",
    "fill-bug-300",
    "fill-ghost-300",
    "fill-steel-300",
    "fill-fire-300",
    "fill-water-300",
    "fill-grass-300",
    "fill-electric-300",
    "fill-psychic-300",
    "fill-ice-300",
    "fill-dragon-300",
    "fill-dark-300",
    "fill-fairy-300",
  ],
};
