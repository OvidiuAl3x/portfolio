// Project.tsx
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ExternalButtons from "../components/ExternalButtons";

import github from "../assets/icons/github.png";
import site from "../assets/icons/site.png";
import Animation from "./Animation";

interface ProjectProps {
  title: string;
  technologies: string[];
  description: JSX.Element;
  images: string[];
  githubLink: string;
  liveLink?: string;
  index: number;
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  technologies,
  description,
  images,
  githubLink,
  liveLink,
  index,
}) => {
  const isEven = index % 2 === 0;
  return (
    <Animation props="animate-[opacity_2s_ease-in-out]">
      <div
        className={`flex font-firaCode gap-10 items-center flex-wrap ${
          !isEven ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <div className="flex order-2 lg:order-1 gap-5 flex-col flex-1">
          <h2 className="text-xl">{title}</h2>
          <div className="flex flex-wrap gap-5">
            {technologies.map((tech, index) => (
              <p
                key={index}
                className="aboutHover border-2 border-grayLight px-5 py-2 rounded-xl hover:text-backgroundBlack hover:bg-textWhite duration-300"
              >
                {tech}
              </p>
            ))}
          </div>
          <p className="text-grayLight">{description}</p>
        </div>

        <Carousel
          showThumbs={false}
          infiniteLoop={true}
          useKeyboardArrows={true}
          autoPlay={true}
          stopOnHover={true}
          className="lg:w-[50%] relative order-1 lg:order-2"
        >
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={image} />
              <h3 className="absolute bottom-8 right-0 left-0 bg-backgroundBlack backdrop-blur-md"></h3>
            </div>
          ))}
        </Carousel>
      </div>
      <div
        className={`${!isEven ? "lg:justify-end" : " justify-start"} flex mt-2`}
      >
        <ExternalButtons link={githubLink} image={github} />
        {liveLink && <ExternalButtons link={liveLink} image={site} />}
      </div>
    </Animation>
  );
};

export default ProjectCard;
