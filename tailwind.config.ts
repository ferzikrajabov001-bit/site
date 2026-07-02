import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          900: "#0B1220",
          800: "#111C2E",
          700: "#16223A",
          600: "#1D2C48",
        },
        accent: {
          DEFAULT: "#2F6BFF",
          soft: "#5A88FF",
          deep: "#1E4FD6",
        },
        muted: "#AAB4C0",
        hairline: "#E6EAF2",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
      borderRadius: {
        xl2: "1.375rem",
        "3xl": "1.75rem",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(47,107,255,0.25), 0 20px 60px -20px rgba(47,107,255,0.45)",
        card: "0 24px 60px -30px rgba(4,10,24,0.75)",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(230,234,242,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(230,234,242,0.06) 1px, transparent 1px)",
        "radial-accent":
          "radial-gradient(60% 60% at 50% 0%, rgba(47,107,255,0.22) 0%, rgba(11,18,32,0) 70%)",
      },
      keyframes: {
        "gradient-pan": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "gradient-pan": "gradient-pan 12s ease infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
