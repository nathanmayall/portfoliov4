import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
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
} as Options;
