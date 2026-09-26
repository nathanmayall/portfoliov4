import type { FunctionComponent } from "preact";
import { asset } from "fresh/runtime";

interface ProjectCardProps {
  id: number;
  name: string;
  description: string;
  /** Path to the screenshot without extension; .avif and .webp versions exist. */
  image: string;
  url?: string;
}

const ProjectCard: FunctionComponent<{ project: ProjectCardProps }> = ({
  project: { name, description, image },
}) => {
  return (
    <div class="h-full flex justify-center items-center flex-col m-4 p-4 text-center text-gray-700 duration-150 bg-white/10 rounded-lg backdrop-blur-xs hover:backdrop-blur-md dark:text-gray-300">
      <div>
        <h3 class="text-3xl text-shadow-sm">{name}</h3>
        <p class="mb-3">{description}</p>
      </div>
      <picture>
        <source srcset={asset(`${image}.avif`)} type="image/avif" />
        <img
          src={asset(`${image}.webp`)}
          alt={`Screenshot of ${name}`}
          width={768}
          height={385}
          loading="lazy"
          decoding="async"
          class="rounded-lg shadow-lg w-96 h-auto"
        />
      </picture>
    </div>
  );
};

export default ProjectCard;
