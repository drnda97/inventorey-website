import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#16293C",       // app navy
        ground: "#F1F0EC",    // page ground
        accent: "#A4392B",    // rust
        accentDark: "#8E3025",
        accentSoft: "#F5D9D4",
        ochre: "#C09B4A",
        muted: "#6B7885",
        onDark: "#CFD8E0",
      },
    },
  },
  plugins: [],
};
export default config;
