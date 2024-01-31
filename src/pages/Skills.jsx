import React, { useEffect, useState } from "react";
import { FiFigma } from "@react-icons/all-files/fi/FiFigma";
import { IoLogoJavascript } from "@react-icons/all-files/io/IoLogoJavascript";
import { BsGit } from "react-icons/bs";
import {
  SiTailwindcss,
  SiPhp,
  SiCss3,
  SiMui,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import { FaNodeJs, FaSass, FaBootstrap, FaReact } from "react-icons/fa";
import { AiOutlineLoading3Quarters, AiFillHtml5 } from "react-icons/ai";
import Animation from "../components/Animation";

const style = {
  skills:
    "bg-emerald-500 m-3 rounded-lg flex flex-col items-center p-5 w-36 justify-center",
};

const skillsArray = [
  { name: "HTML", icon: <AiFillHtml5 /> },
  { name: "CSS", icon: <SiCss3 /> },
  { name: "SCSS", icon: <FaSass /> },
  { name: "Bootstrap", icon: <FaBootstrap /> },
  { name: "Javascript", icon: <IoLogoJavascript /> },
  { name: "Material UI", icon: <SiMui /> },
  { name: "Git", icon: <BsGit /> },
  { name: "Figma", icon: <FiFigma /> },
  { name: "PHP", icon: <SiPhp /> },
];

const mainSkillsArray = [
  { name: "React", icon: <FaReact />, width: "82%" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, width: "90%" },
  { name: "Node.Js", icon: <FaNodeJs />, width: "45%" },
  { name: "Express.Js", icon: <SiExpress />, width: "45%" },
  { name: "MongoDB", icon: <SiMongodb />, width: "30%" },
];

const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState(4);

  const [isLoading, setIsLoading] = useState(false);

  const handleShowMore = () => {
    const currentPosition = window.scrollY;
    const newPosition = currentPosition + 1;

    setIsLoading(true);

    setTimeout(() => {
      setVisibleSkills((prev) => prev + 4);

      setIsLoading(false);
      window.scrollTo({
        top: newPosition,
        behavior: "smooth",
      });
    }, 1000);
  };

  useEffect(() => {
    const handleRezize = () => {
      window.innerWidth <= 1024
        ? setVisibleSkills(4)
        : setVisibleSkills(skillsArray.length);
    };

    handleRezize();

    window.addEventListener("resize", handleRezize);

    return () => {
      window.removeEventListener("resize", handleRezize);
    };
  }, []);

  return (
    <div className="max-w-[1240px] m-4 lg:mx-auto md:my-16">
      <span className="relative top-[-8em]" id="skills"></span>
      <Animation props="animate-[scaleOp_2s]">
        <h1 className="mt-5 mb-2 mx-5 text-2xl md:text-3xl font-bold text-zinc-500 dark:text-zinc-300">
          My Skills
        </h1>
      </Animation>
      <hr className="w-full border-emerald-500" />

      <div className="grid xl:grid-cols-2 m-5 items-center">
        <div className="dark:text-emerald-500 md:w-[60%] md:mx-auto xl:w-full xl:mx-0">
          {mainSkillsArray.map((item, index) => (
            <div className="my-4" key={index}>
              <Animation props="animate-[transform_1.7s]">
                <div className="flex my-2 items-center">
                  <p className="text-emerald-700 text-lg dark:text-emerald-500">
                    {item.icon}
                  </p>
                  <p className="mx-2 text-lg font-medium">{item.name}</p>
                </div>
              </Animation>
              <Animation props="animate-[scaleOp_1.7s]">
                <div className="bg-zinc-200 w-full rounded-full">
                  <div
                    style={{ width: item.width }}
                    className={`bg-emerald-500  h-3 rounded-full`}
                  ></div>
                </div>
              </Animation>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center md:w-[80%] md:mx-auto lg:w-full lg:mx-0">
          <div className="flex flex-wrap font-semibold lg:ml-5 justify-center">
            {skillsArray.slice(0, visibleSkills).map((item, index) => (
              <Animation props="animate-[scaleOp_2s]" key={index}>
                <div className={style.skills}>
                  <p className="text-4xl mb-4">{item.icon}</p>
                  <p>{item.name}</p>
                </div>
              </Animation>
            ))}
          </div>
          <div>
            {window.innerWidth <= 1024 &&
              visibleSkills < skillsArray.length && (
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
      </div>
    </div>
  );
};

export default Skills;
