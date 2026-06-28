import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#041B1F",
        "bg-alt": "#06262C",
        gold: "#C5A059",
        "gold-light": "#D4B67D",
        teal: "#144D58",
        "teal-light": "#1D6B7A",
        cream: "#F8F5F0",
        "cream-dim": "rgba(248, 245, 240, 0.6)",
        "cream-faint": "rgba(248, 245, 240, 0.1)",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-cormorant)", "ui-serif", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
