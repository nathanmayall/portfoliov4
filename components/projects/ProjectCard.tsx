/** @jsx h */
import { h, FunctionComponent } from "preact";
import { tw } from "@twind";

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
    <div
      class={tw`h-full flex justify-center items-center flex-col m-4 p-4 text-center text-gray-700 duration-150 bg-white bg-opacity-10 rounded-lg backdrop-filter backdrop-blur-sm hover:backdrop-blur-md dark:text-gray-300`}
    >
      <div>
        <h3 class={tw`text-3xl text-shadow-sm`}>{name}</h3>
        <p class={tw`mb-3`}>{description}</p>
      </div>
      <img
        src={image}
        alt={`${image} logo`}
        class={tw`rounded-lg shadow-lg w-96 h-auto`}
        placeholder="blur"
      />
    </div>
  );
};

export default ProjectCard;
