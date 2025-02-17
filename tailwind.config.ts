import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
  darkMode: "media",
  theme: {
    extend: {
      backgroundImage: {
        "bio-image": "url('/img/paintsplash.jpg')",
        "dark-bio-image": "url('/img/diver.jpg')",
        texture: "url('/img/cartographer.png')",
      },
    },
  },
} satisfies Config;
