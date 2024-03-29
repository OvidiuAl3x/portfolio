import React, { useState } from "react";
import { FiMenu } from "@react-icons/all-files/fi/FiMenu";
import { AiOutlineClose } from "react-icons/ai";
const style = {
  underline:
    "bg-left-bottom bg-gradient-to-r from-emerald-500 to-emerald-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out dark:from-white dark:to-white",
  li: "group  transition-all duration-300 ease-in-out",
  navSM: "border-b-2 border-zinc-300 w-full p-4",
};

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="h-[80px] z-10 bg-zinc-200 dark:bg-zinc-800 dark:text-emerald-500 fixed w-full drop-shadow-lg font-bold">
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
            <AiOutlineClose className="w-10 text-2xl" />
          )}
        </div>
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute bg-zinc-200 w-full px-8 animate-opacity md:hidden dark:bg-zinc-800 dark:text-emerald-500"
        }
      >
        <li className={style.navSM}>
          <a href="#home" onClick={handleClick}>
            <p className="animate-transform">Home</p>
          </a>
        </li>
        <li className={style.navSM}>
          <a href="#skills" onClick={handleClick}>
            <p className="animate-[transform_1.5s]">Skills</p>
          </a>
        </li>
        <li className={style.navSM}>
          <a href="#works" onClick={handleClick}>
            <p className="animate-[transform_2s]">Works</p>
          </a>
        </li>
        <li className={style.navSM}>
          <a href="#resume" onClick={handleClick}>
            <p className="animate-[transform_2.5s]">Resume</p>
          </a>
        </li>
        <li className={style.navSM}>
          <a href="#contact" onClick={handleClick}>
            <p className="animate-[transform_3s]">Contact</p>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
