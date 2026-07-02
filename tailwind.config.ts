import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#F7F7F5",
          dim: "#EFEFEC",
          card: "#FFFFFF",
        },
        graphite: {
          DEFAULT: "#1C1F26",
          soft: "#2A2E37",
          900: "#141319",
        },
        ink: "#1C1F26",
        muted: "#5F646D",
        faint: "#9AA0A8",
        line: "#E4E4DE",
        accent: {
          DEFAULT: "#2F6BFF",
          deep: "#1E4FD6",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      maxWidth: {
        container: "1240px",
      },
      letterSpacing: {
        tightest: "-0.03em",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(28,31,38,0.04), 0 18px 40px -24px rgba(28,31,38,0.16)",
        lift: "0 2px 4px rgba(28,31,38,0.05), 0 28px 60px -30px rgba(28,31,38,0.22)",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
