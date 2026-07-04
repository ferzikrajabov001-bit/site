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
          900: "#150F0B",
          800: "#1E1710",
          700: "#2A1F15",
          600: "#3A2B1B",
        },
        accent: {
          DEFAULT: "#18966D",
          soft: "#4FE3AC",
          deep: "#0B4530",
        },
        secondary: {
          DEFAULT: "#E56A32",
          soft: "#FFA46A",
          deep: "#9C3F17",
        },
        brass: {
          DEFAULT: "#DDAC3C",
          soft: "#F5D573",
          deep: "#96721C",
        },
        wine: {
          DEFAULT: "#9C2F4E",
          soft: "#E0759A",
          deep: "#551A2C",
        },
        teal: {
          DEFAULT: "#178497",
          soft: "#5FD3E6",
          deep: "#0B4550",
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
        glow: "0 0 0 1px rgba(24,150,109,0.3), 0 20px 60px -20px rgba(24,150,109,0.5)",
        card: "0 24px 60px -30px rgba(8,6,4,0.8)",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(237,227,206,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(237,227,206,0.06) 1px, transparent 1px)",
        "radial-accent":
          "radial-gradient(60% 60% at 50% 0%, rgba(24,150,109,0.32) 0%, rgba(21,15,11,0) 70%)",
        "radial-secondary":
          "radial-gradient(55% 55% at 100% 20%, rgba(229,106,50,0.26) 0%, rgba(21,15,11,0) 70%)",
        "radial-brass":
          "radial-gradient(50% 50% at 0% 100%, rgba(221,172,60,0.22) 0%, rgba(21,15,11,0) 70%)",
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
