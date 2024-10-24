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
        "background-secondary": "var(--background-secondary)",
        "background-tertiary": "var(--background-tertiary)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        "button-primary": "var(--button-primary)",
        "button-hover": "var(--button-hover)",
        "button-disabled": "var(--button-disabled)",
        "text-body": "var(--text-body)",
        "text-heading": "var(--text-heading)",
        "text-link": "var(--text-link)",
        divider: "var(--divider)",
        error: "var(--error)",
      },
    },
  },
  plugins: [],
};
export default config;
