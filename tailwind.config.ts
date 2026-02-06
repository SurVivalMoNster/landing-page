import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        game: "#ec4899",
      },
    },
  },
  plugins: [],
} satisfies Config;
