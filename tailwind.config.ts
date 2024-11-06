import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary_one: "#10A8F1",
        primary_two: "#64FFE7",
        secondary_one: "#6F3AFA",
        secondary_two: "#B473F3",
        secondary_dark: "#111215",
      },
    },
  },
  plugins: [],
};
export default config;
