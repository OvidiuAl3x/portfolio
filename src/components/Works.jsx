import React from "react";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import Description from "./Description";
import { ImageDescription } from "./ImageDescription";
import Animation from "./Animation";

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
        {ImageDescription.map((image, index) => (
          <Animation props="animate-[scaleOp_2s]">
            <div key={index}>
              <div className="relative group  h-full">
                <img
                  src={image.project1}
                  className={style.imgStyle}
                  alt={image.title}
                />

                <div className={style.hoverDiv}>
                  {image.linkMore ? (
                    <Description
                      props={image.linkMore}
                      button={<button className={style.hoverLink}>More</button>}
                      LgUsed={image.LgUsed}
                      slide={image.slide}
                    />
                  ) : null}

                  {image.linkGit ? (
                    <a
                      href={image.linkGit}
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

              <p className={style.text}>{image.title}</p>
            </div>
          </Animation>
        ))}
      </div>
    </div>
  );
};

export default Works;
