import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0F172A",
        primary: "#3B82F6",
        secondary: "#8B5CF6",
        accent: "#06B6D4",
        card: "rgba(255,255,255,0.08)",
        cardBorder: "rgba(255,255,255,0.12)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #3B82F6, #8B5CF6 55%, #06B6D4)",
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        blink: "blink 0.9s step-end infinite",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        blink: {
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
