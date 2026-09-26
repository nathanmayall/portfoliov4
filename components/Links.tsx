import projects from "./projects/index.tsx";
import ProjectCard from "./projects/ProjectCard.tsx";

const Links = () => {
  return (
    <div
      id="projects"
      class="w-full flex mb-4 flex-wrap items-center justify-center gap-x-8 gap-y-4 h-full py-3 align-middle"
    >
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Links;
