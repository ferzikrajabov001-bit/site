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
        // Light investment-grade surfaces
        paper: {
          DEFAULT: "#F6F8FB",
          alt: "#EEF2F8",
        },
        // Text + intentional dark bands (footer, closing CTA)
        ink: {
          900: "#1B2430",
          800: "#28323F",
          700: "#3A4552",
          600: "#5B6777",
        },
        navy: {
          DEFAULT: "#0B1F3B",
          soft: "#132A4D",
          deep: "#071429",
        },
        accent: {
          DEFAULT: "#1E4ED8",
          soft: "#60A5FA",
          deep: "#163AA8",
        },
        success: {
          DEFAULT: "#16A34A",
          soft: "#4ADE80",
          deep: "#0F7C38",
        },
        muted: "#5B6777",
        hairline: "#E6EDF5",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "serif"],
      },
      maxWidth: {
        container: "1200px",
      },
      borderRadius: {
        xl2: "0.25rem",
        "3xl": "0.25rem",
      },
      boxShadow: {
        card: "0 2px 4px rgba(11,31,59,0.04), 0 12px 32px -16px rgba(11,31,59,0.12)",
        "card-hover": "0 4px 10px rgba(11,31,59,0.06), 0 20px 44px -16px rgba(11,31,59,0.16)",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(11,31,59,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(11,31,59,0.05) 1px, transparent 1px)",
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
