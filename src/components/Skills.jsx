import React from "react";
import { AiFillHtml5 } from "@react-icons/all-files/ai/AiFillHtml5";
import { SiCss3 } from "@react-icons/all-files/si/SiCss3";
import { FaSass } from "@react-icons/all-files/fa/FaSass";
import { FaBootstrap } from "@react-icons/all-files/fa/FaBootstrap";
import { FaReact } from "@react-icons/all-files/fa/FaReact";
import { FiFigma } from "@react-icons/all-files/fi/FiFigma";
import { IoLogoJavascript } from "@react-icons/all-files/io/IoLogoJavascript";
import { SiPhp } from "@react-icons/all-files/si/SiPhp";
import { SiMui } from "react-icons/si";
import { BsGit } from "react-icons/bs";



const style = {
  skills:
    "bg-emerald-500 m-3 rounded-lg flex flex-col items-center p-5 w-36 justify-center",
};

const Skills = () => {
  return (
    <div className="max-w-[1240px] m-4 lg:mx-auto md:my-16 ">
      <h1 className="mt-5 mb-2 mx-5 text-2xl md:text-3xl font-bold text-zinc-500">
        My Skills
      </h1>
      <hr className="w-full" />

      <div className="grid md:grid-cols-2 m-5">
        <div className="animate-[scaleOp_2s_ease-in-out]">
          <div className="my-4">
            <div className="flex my-2 items-center">
              <AiFillHtml5 className="text-emerald-700 text-lg" />
              <p className="mx-2 text-lg font-medium">HTML</p>
            </div>
            <div className="bg-zinc-200 w-full rounded-full">
              <div className="bg-emerald-500 w-[90%] h-3 rounded-full"></div>
            </div>
          </div>

          <div className="my-4">
            <div className="flex my-2 items-center">
              <SiCss3 className="text-emerald-700 text-lg" />
              <p className="mx-2 text-lg font-medium">CSS</p>
            </div>
            <div className="bg-zinc-200 w-full rounded-full">
              <div className="bg-emerald-500 w-[85%] h-3 rounded-full"></div>
            </div>
          </div>

          <div className="my-4">
            <div className="flex my-2 items-center">
              <IoLogoJavascript className="text-emerald-700 text-lg" />
              <p className="mx-2 text-lg font-medium">Javascript</p>
            </div>
            <div className="bg-zinc-200 w-full rounded-full">
              <div className="bg-emerald-500 w-[65%] h-3 rounded-full"></div>
            </div>
          </div>

          <div className="my-4">
            <div className="flex my-2 items-center">
              <FaReact className="text-emerald-700 text-lg" />
              <p className="mx-2 text-lg font-medium">React</p>
            </div>
            <div className="bg-zinc-200 w-full rounded-full">
              <div className="bg-emerald-500 w-[76%] h-3 rounded-full"></div>
            </div>
          </div>

          <div className="my-4">
            <div className="flex my-2 items-center">
              <SiMui className="text-emerald-700 text-lg" />
              <p className="mx-2 text-lg font-medium">Material UI</p>
            </div>
            <div className="bg-zinc-200 w-full rounded-full">
              <div className="bg-emerald-500 w-[90%] h-3 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap font-semibold md:ml-5 justify-center animate-[scaleOp_3s_ease-in-out] md:animate-[scaleOp_2s_ease-in-out]">
          <div className={style.skills}>
            <FaSass className="text-4xl mb-4" />
            <p>SCSS</p>
          </div>
          <div className={style.skills}>
            <FaBootstrap className="text-4xl mb-4" />
            <p>Bootstrap</p>
          </div>
          <div className={style.skills}>
            <SiPhp className="text-4xl mb-4" />
            <p>PHP</p>
          </div>
          <div className={style.skills}>
            <BsGit className="text-4xl mb-4" />
            <p>Git</p>
          </div>
          <div className={style.skills}>
            <FiFigma className="text-4xl mb-4" />
            <p>Figma</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
