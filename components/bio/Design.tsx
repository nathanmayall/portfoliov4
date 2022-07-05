/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Design() {
  return (
    <div
      class={tw`p-8 duration-150 bg-white rounded-lg shadow-lg bg-opacity-40 w-96 backdrop-filter backdrop-blur-sm hover:backdrop-blur-md`}
    >
      <h2 class={tw`text-2xl text-shadow-sm`}>Design</h2>
      <div class={tw`flex justify-between mx-4 my-3 text-6xl`}>
        <i class="devicon-html5-plain-wordmark colored" />
        <i class="devicon-tailwindcss-plain colored" />
        <div class={tw`hover:animate-spin`}>
          <i class={"devicon-react-original colored"} />
        </div>
      </div>
      <p>
        Using Material Design, TailwindCSS and other component bootstraps,{" "}
        {"I've"}
        made a few sites and applications.
      </p>
      <p class="text-md">
        Check them out on my{" "}
        <a
          href="https://github.com/nathanmayall"
          target="_blank"
          rel="noopener noreferrer"
          class={tw`duration-150 dark:hover:text-gray-700 hover:text-gray-400`}
        >
          GitHub.
        </a>
      </p>
    </div>
  );
}
