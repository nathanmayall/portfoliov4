import { asset } from "fresh/runtime";
import { devicon } from "../devicon.ts";

export default function Design() {
  return (
    <div class="p-6 duration-150 bg-white/40 rounded-lg shadow-lg w-96 backdrop-blur-xs hover:backdrop-blur-md">
      <h2 class="text-2xl text-shadow-sm">Design</h2>
      <div class="flex justify-between mx-4 my-3 text-6xl">
        <img
          class="w-16 h-16"
          src={devicon("html5", "original-wordmark")}
          alt="HTML5 logo"
        />
        <img
          class="w-16 h-16 bg-white rounded-full p-1"
          src={devicon("tailwindcss")}
          alt="Tailwind CSS logo"
        />
        <div class="hover:animate-spin">
          <img
            class="w-16 h-16"
            src={devicon("react")}
            alt="React logo"
          />
        </div>
        <img
          class="w-16 h-16"
          src={asset("/logo.svg")}
          alt="Fresh logo"
        />
      </div>
      <p>
        Using Material Design, TailwindCSS and other component bootstraps,{" "}
        {"I've "}
        made a few sites and applications.
      </p>
      <p class="text-md">
        Check them out on my{" "}
        <a
          href="https://github.com/nathanmayall"
          target="_blank"
          rel="noopener noreferrer"
          class="duration-150 dark:hover:text-gray-700 hover:text-gray-400"
        >
          GitHub.
        </a>
      </p>
    </div>
  );
}
