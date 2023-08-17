import React, { useState } from "react";
import { FiMenu } from "@react-icons/all-files/fi/FiMenu";
import { GrClose } from "@react-icons/all-files/gr/GrClose";

const style = {
  underline:
    "bg-left-bottom bg-gradient-to-r from-emerald-500 to-emerald-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out",
  li: "group  transition-all duration-300 ease-in-out  hover:text-emerald-700",
};

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="h-[80px] z-10 bg-zinc-200  fixed w-full drop-shadow-lg font-bold">
      <div className="px-2 flex justify-between items-center w-full h-full animate-navAnim">
        <div className="flex items-center w-full">
          <h1 className="text-3xl font-bold ml-2 md:ml-10 sm:text-4xl">
            Ovidiu
          </h1>
          <ul className="hidden md:flex ml-auto mr-10">
            <li className={style.li}>
              <a href="#home" className={style.underline}>
                Home
              </a>
            </li>
            <li className={style.li}>
              <a href="#skills" className={style.underline}>
                Skills
              </a>
            </li>
            <li className={style.li}>
              <a href="#works" className={style.underline}>
                Works
              </a>
            </li>
            <li className={style.li}>
              <a href="#resume" className={style.underline}>
                Resume
              </a>
            </li>
            <li className={style.li}>
              <a href="#contact" className={style.underline}>
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="md:hidden" onClick={handleClick}>
          {!nav ? (
            <FiMenu className="w-10 text-2xl" />
          ) : (
            <GrClose className="w-10 text-2xl" />
          )}
        </div>
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute bg-zinc-200 w-full px-8 animate-opacity md:hidden"
        }
      >
        <a href="#home" className="animate-transform">
          <li className="border-b-2  border-zinc-300 w-full p-4">Home</li>
        </a>
        <a href="#skills" className="animate-[transform_1.5s]">
          <li className="border-b-2 border-zinc-300 w-full p-4">Skills</li>
        </a>
        <a href="#works" className="animate-[transform_2s]">
          <li className="border-b-2 border-zinc-300 w-full p-4">Works</li>
        </a>
        <a href="#resume" className="animate-[transform_2.5s]">
          <li className="border-b-2 border-zinc-300 w-full p-4">Resume</li>
        </a>
        <a href="#contact" className="animate-[transform_3s]">
          <li className="border-b-2 border-zinc-300 w-full p-4">Contact</li>
        </a>
      </ul>
    </div>
  );
};

export default Navbar;
