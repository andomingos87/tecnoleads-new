import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00167A',
        secondary: '#d10413',
        accent: '#FF4B4B',
        background: '#f3f3f3',
        dark: '#1a1a1a',
      },
      maxWidth: {
        container: '1440px',
      },
    },
  },
  plugins: [],
}

export default config;
