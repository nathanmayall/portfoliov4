import ProjectCard from "./projects/ProjectCard.tsx";
import projects from "./projects/index.tsx";

const Links = () => {
  return (
    <div className="flex mb-4 flex-wrap items-center justify-center h-full p-3 align-middle lg:space-x-8 md:place-content-around">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Links;
