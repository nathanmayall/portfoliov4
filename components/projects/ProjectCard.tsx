import { FunctionComponent } from "preact";

interface ProjectCardProps {
  id: number;
  name: string;
  description: string;
  image: string;
  url?: string;
}

const ProjectCard: FunctionComponent<{ project: ProjectCardProps }> = ({
  project: { name, description, image },
}) => {
  return (
    <div class="h-full flex justify-center items-center flex-col m-4 p-4 text-center text-gray-700 duration-150 bg-white bg-opacity-10 rounded-lg backdrop-filter backdrop-blur-sm hover:backdrop-blur-md dark:text-gray-300">
      <div>
        <h3 class="text-3xl text-shadow-sm">{name}</h3>
        <p class="mb-3">{description}</p>
      </div>
      <img
        src={image}
        alt={`${image} logo`}
        class="rounded-lg shadow-lg w-96 h-auto"
        placeholder="blur"
      />
    </div>
  );
};

export default ProjectCard;
