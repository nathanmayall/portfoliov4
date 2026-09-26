export default function Design() {
  return (
    <div class="p-6 duration-150 bg-white/40 rounded-lg shadow-lg w-96 backdrop-blur-xs hover:backdrop-blur-md">
      <h2 class="text-2xl text-shadow-sm">Design</h2>
      <div class="flex justify-between mx-4 my-3 text-6xl">
        <img
          class="w-16 h-16"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@2.17.0/icons/html5/html5-original-wordmark.svg"
          alt="HTML5 logo"
        />
        <img
          class="w-16 h-16 bg-white rounded-full p-1"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@2.17.0/icons/tailwindcss/tailwindcss-original.svg"
          alt="Tailwind CSS logo"
        />
        <div class="hover:animate-spin">
          <img
            class="w-16 h-16"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@2.17.0/icons/react/react-original.svg"
            alt="React logo"
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
