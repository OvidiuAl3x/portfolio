import React, { useEffect, useState } from "react";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import Description from "../components/Description";
import Animation from "../components/Animation";
import { projectData } from "../components/ProjectsData";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const style = {
  imgStyle:
    "rounded border-black border-2 w-full h-full object-cover drop-shadow-lg",
  hoverDiv:
    "hidden group-hover:flex duration-300 absolute left-0 bottom-0 right-0 h-full z-2  text-xl font-medium backdrop-blur-md bg-black/20",
  hoverLink:
    "bg-emerald-500 w-auto h-fit mt-auto ml-auto mr-auto mb-4 md:m-auto rounded-lg p-2 hover:scale-110 flex items-center ",
  text: "text-center group-hover:text-red-300 mt-3 text-lg dark:text-emerald-500",
};

const Works = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [isLoading, setIsLoading] = useState(false);

  const handleShowMore = () => {
    const currentPosition = window.scrollY;
    const newPosition = currentPosition + 1;

    setIsLoading(true);

    setTimeout(() => {
      setVisibleProjects((prev) => prev + 3);

      setIsLoading(false);
      window.scrollTo({
        top: newPosition,
        behavior: "smooth",
      });
    }, 1000);
  };

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 600) {
        setVisibleProjects(3);
      } else {
        setVisibleProjects(6);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="max-w-[1240px] m-4  lg:mx-auto ">
      <span className="relative top-[-8em]" id="works"></span>
      <Animation props="animate-[scaleOp_2s]">
        <h1 className="mb-2 mx-5 text-2xl md:text-3xl font-bold text-zinc-500 dark:text-zinc-300">
          Works
        </h1>
      </Animation>
      <hr className="w-full border-emerald-500" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 m-5">
        {projectData.slice(0, visibleProjects).map((item, index) => (
          <Animation props="animate-[scaleOp_2s]" key={index}>
            <div>
              <div className="relative group  h-full">
                <img
                  src={item.project}
                  className={style.imgStyle}
                  alt={item.title}
                />

                <div className={style.hoverDiv}>
                  {item.descriptionProject ? (
                    <Description
                      button={
                        <button type="button" className={style.hoverLink}>
                          More
                        </button>
                      }
                      item={item}
                    />
                  ) : null}

                  {item.linkGit ? (
                    <a
                      href={item.linkGit}
                      className={style.hoverLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub className="mr-2" />
                      Code
                    </a>
                  ) : null}
                </div>
              </div>

              <p className={style.text}>{item.title}</p>
            </div>
          </Animation>
        ))}
      </div>
      <div className="flex justify-center">
        {visibleProjects < projectData.length && (
          <Animation props="animate-[scaleOp_2s]">
            <button
              disabled={isLoading}
              onClick={handleShowMore}
              className="flex items-center justify-center p-3 m-2 bg-emerald-500 text-2l md:text-4l font-semibold rounded-lg hover:shadow-lg hover:shadow-emerald-700/50"
            >
              {isLoading ? (
                <AiOutlineLoading3Quarters className="animate-spin" />
              ) : (
                "Show More"
              )}
            </button>
          </Animation>
        )}
      </div>
    </div>
  );
};

export default Works;
