import { ProjectData, projectData } from "../components/ProjectsData";
import ProjectCard from "../components/ProjectsCard";
import { useState } from "react";
import Animation from "../components/Animation";

const Projects = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showProject, setShowProject] = useState(3);

  const handleShowMore = () => {
    const currentPosition = window.scrollY;
    const newPosition = currentPosition + 1;

    setIsLoading(true);

    setTimeout(() => {
      setShowProject((prev) => prev + 4);

      setIsLoading(false);
      window.scrollTo({
        top: newPosition,
        behavior: "smooth",
      });
    }, 1000);
  };
  return (
    <Animation props="animate-[opacity_2s_ease-in-out] mt-20">
      <h1 className="text-lg font-firaCode text-center mb-10" id="projects">
        .../Projects...
      </h1>
      <div className="flex flex-col gap-24">
        {projectData
          .slice(0, showProject)
          .map((project: ProjectData, index: number) => (
            <ProjectCard
              key={index}
              index={index}
              title={project.title}
              technologies={project.technologies}
              description={project.description}
              images={project.images}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
            />
          ))}
      </div>

      {showProject < projectData.length ? (
        <Animation props="animate-[opacity_2s_ease-in-out]">
          <button
            onClick={handleShowMore}
            className={`text-lg font-firaCode text-center mt-16 mx-auto flex ${
              isLoading ? "animate-bounce cursor-wait" : "cursor-pointer"
            }`}
          >
            {!isLoading ? ".../Show more Projects..." : ". . ."}
          </button>
        </Animation>
      ) : (
        <Animation props="animate-[opacity_2s_ease-in-out]">
          <h1 className="text-lg font-firaCode text-center pt-28 md:mt-0 mb-10">
            .../More Projects on{" "}
            <a
              href="https://github.com/OvidiuAl3x"
              target="_blank"
              className="underline"
            >
              Github
            </a>
            ...
          </h1>
        </Animation>
      )}
    </Animation>
  );
};

export default Projects;
