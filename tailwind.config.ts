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
          900: "#17130F",
          800: "#1F1A15",
          700: "#271F17",
          600: "#33291D",
        },
        accent: {
          DEFAULT: "#1F6F52",
          soft: "#4FA382",
          deep: "#123D2C",
        },
        secondary: {
          DEFAULT: "#C97C4A",
          soft: "#E2A374",
          deep: "#98572D",
        },
        brass: {
          DEFAULT: "#C6A15B",
          soft: "#DBC08A",
          deep: "#8F7238",
        },
        muted: "#B3A691",
        hairline: "#EDE3CE",
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
        glow: "0 0 0 1px rgba(31,111,82,0.25), 0 20px 60px -20px rgba(31,111,82,0.45)",
        card: "0 24px 60px -30px rgba(10,8,5,0.75)",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(237,227,206,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(237,227,206,0.06) 1px, transparent 1px)",
        "radial-accent":
          "radial-gradient(60% 60% at 50% 0%, rgba(31,111,82,0.24) 0%, rgba(23,19,15,0) 70%)",
        "radial-secondary":
          "radial-gradient(55% 55% at 100% 20%, rgba(201,124,74,0.20) 0%, rgba(23,19,15,0) 70%)",
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
