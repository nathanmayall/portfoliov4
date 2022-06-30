import { DiHtml5, DiReact } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";

export default function Design() {
  return (
    <div className="p-8 duration-150 bg-white rounded-lg shadow-lg bg-opacity-40 w-96 backdrop-filter backdrop-blur-sm hover:backdrop-blur-md">
      <h2 className="text-2xl text-shadow-sm">Design</h2>
      <div className="flex justify-between mx-4 my-3 text-6xl">
        <DiHtml5 className="text-html5" />
        <SiTailwindcss className="text-TailwindLogo" />
        <DiReact className="text-ReactLogo hover:animate-spin" />
      </div>
      <p>
        Using Material Design, TailwindCSS and other component bootstraps,{" "}
        {"I've"}
        made a few sites and applications.
      </p>
      <p className="text-md">
        Check them out on my{" "}
        <a
          href="https://github.com/nathanmayall"
          target="_blank"
          rel="noopener noreferrer"
          className="duration-150 dark:hover:text-gray-700 hover:text-gray-400"
        >
          GitHub.
        </a>
      </p>
    </div>
  );
}
