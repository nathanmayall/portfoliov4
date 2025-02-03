import { Design, Languages, Tools } from "./bio/index.tsx";
import Links from "./Links.tsx";

export default function Body() {
  return (
    <div
      class="w-auto h-auto pb-5 bg-center md:pb-0 md:bg-cover dark:bg-dark-bio-image bg-bio-image"
    >
      <div
        class="bg-gradient-to-b to-transparent from-white dark:from-gray-900"
      >
        <div class="text-center text-gray-700 dark:text-gray-300">
          <h1 class="mb-2 text-6xl text-shadow-md">My Expertise</h1>
          <p class="px-2 mb-3">
            I&apos;m a Software Engineer. This is a collection of my work so far.
          </p>
        </div>
        <div
          class="flex flex-wrap m-auto space-y-3 text-center text-gray-700 md:space-y-2 w-80 md:w-auto dark:text-gray-200 md:place-content-around"
        >
          <Design />
          <Languages />
          <Tools />
          <Links />
        </div>
      </div>
    </div>
  );
}
