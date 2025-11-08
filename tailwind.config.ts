import type { Config } from "tailwindcss"

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: "#C2A34A",
          black: "#0B0B0B",
          white: "#FFFFFF"
        }
      }
    },
  },
  plugins: [],
} satisfies Config
