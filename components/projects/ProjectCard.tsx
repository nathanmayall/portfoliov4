import { asset } from "fresh/runtime";
import type { FunctionComponent } from "preact";
import { devicon } from "../devicon.ts";

interface ProjectCardProps {
  id: number;
  name: string;
  /**
   * Path to the screenshot without extension. `.avif`/`.webp` are the card
   * thumbnails; `-full.avif`/`-full.webp` are shown in the lightbox.
   */
  image: string;
  description: string;
  /** Source code on GitHub. The live sites are no longer online. */
  repo?: string;
}

const ProjectCard: FunctionComponent<{ project: ProjectCardProps }> = ({
  project: { id, name, description, image, repo },
}) => {
  // The lightbox uses the Popover API, so it needs no JavaScript. It closes on
  // Esc, a click outside, or a click on the image.
  const lightboxId = `screenshot-${id}`;

  return (
    <div class="relative h-full flex justify-center items-center flex-col m-4 p-4 text-center text-gray-700 glass rounded-2xl dark:text-gray-300">
      {repo && (
        <a
          href={repo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${name} on GitHub`}
          class="absolute top-3 right-3 p-1 rounded-full bg-white/20 ring-0.5 ring-white/40 shadow-sm backdrop-blur-md transition duration-150 hover:bg-white/40 hover:scale-110"
        >
          <img
            src={devicon("github")}
            alt=""
            width={24}
            height={24}
            class="block size-6 opacity-80 dark:invert"
          />
        </a>
      )}
      {/* Capped at the screenshot's width so long descriptions wrap. */}
      <div class="max-w-96 mb-3">
        <h3 class="px-8 text-3xl text-shadow-sm">{name}</h3>
        <p>{description}</p>
      </div>
      <button
        type="button"
        popovertarget={lightboxId}
        class="cursor-zoom-in"
        aria-label={`Enlarge screenshot of ${name}`}
      >
        <picture>
          <source srcset={asset(`${image}.avif`)} type="image/avif" />
          <img
            src={asset(`${image}.webp`)}
            alt={`Screenshot of ${name}`}
            width={768}
            height={385}
            loading="lazy"
            decoding="async"
            class="rounded-lg shadow-lg w-96 h-auto duration-150 hover:shadow-2xl"
          />
        </picture>
      </button>
      <div
        id={lightboxId}
        popover="auto"
        class="m-auto p-0 border-0 bg-transparent backdrop:bg-black/80"
      >
        <button
          type="button"
          popovertarget={lightboxId}
          popovertargetaction="hide"
          class="block cursor-zoom-out"
          aria-label="Close"
        >
          <picture>
            <source srcset={asset(`${image}-full.avif`)} type="image/avif" />
            <img
              src={asset(`${image}-full.webp`)}
              alt={`Screenshot of ${name}`}
              width={1903}
              height={955}
              loading="lazy"
              decoding="async"
              class="rounded-lg shadow-2xl w-auto h-auto max-w-[90vw] max-h-[90vh]"
            />
          </picture>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
