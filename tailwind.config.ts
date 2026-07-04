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
        // Light institutional surfaces
        paper: {
          DEFAULT: "#F6F4EF",
          alt: "#EDEAE1",
        },
        // Dark charcoal used for text and for intentional dark bands
        // (footer, closing CTA, photo placeholders, nav-on-scroll).
        ink: {
          900: "#15130F",
          800: "#211D16",
          700: "#332C20",
          600: "#463C2A",
        },
        accent: {
          DEFAULT: "#0F4D3A",
          soft: "#1D7A5B",
          deep: "#0A3327",
        },
        brass: {
          DEFAULT: "#A97F2E",
          soft: "#C79A44",
          deep: "#7A5A1E",
        },
        muted: "#6B6459",
        hairline: "#DEDAD0",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "serif"],
      },
      maxWidth: {
        container: "1200px",
      },
      borderRadius: {
        xl2: "1.25rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        card: "0 2px 4px rgba(21,19,15,0.04), 0 12px 32px -16px rgba(21,19,15,0.12)",
        "card-hover": "0 4px 10px rgba(21,19,15,0.06), 0 20px 44px -16px rgba(21,19,15,0.16)",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(21,19,15,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(21,19,15,0.05) 1px, transparent 1px)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
