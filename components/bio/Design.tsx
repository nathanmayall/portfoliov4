export default function Design() {
  return (
    <div class="p-6 duration-150 bg-white rounded-lg shadow-lg bg-opacity-40 w-96 backdrop-filter backdrop-blur-sm hover:backdrop-blur-md">
      <h2 class="text-2xl text-shadow-sm">Design</h2>
      <div class="flex justify-between mx-4 my-3 text-6xl">
        <img
          class="w-16 h-16"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg"
        />
        <img
          class="w-16 h-16 bg-white rounded-full p-1"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
        />
        <div class="hover:animate-spin">
          <img
            class="w-16 h-16"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
          />
        </div>
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
