import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#09090b",
        foreground: "#fafafa",
        muted: "#a1a1aa",
        card: "#111116",
        border: "rgba(255,255,255,0.08)",
        primary: "#8b5cf6",
        secondary: "#22d3ee",
        accent: "#f59e0b"
      },
      boxShadow: {
        glow: "0 0 80px rgba(139, 92, 246, 0.22)"
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
