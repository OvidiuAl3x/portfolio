import React, { useState } from "react";
import { FiMenu } from "@react-icons/all-files/fi/FiMenu";
import { GrClose } from "@react-icons/all-files/gr/GrClose";

const animation = {
  underline:
    "bg-left-bottom bg-gradient-to-r from-emerald-500 to-emerald-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out",
};

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full animate-navAnim">
        <div className="flex items-center w-full">
          <h1 className="text-3xl font-bold ml-2 md:ml-10 sm:text-4xl">
            Ovidiu
          </h1>
          <ul className="hidden md:flex ml-auto mr-10">
            <li className="group  transition-all duration-300 ease-in-out">
              <span className={animation.underline}>Home</span>
            </li>
            <li className="group  transition-all duration-300 ease-in-out">
              <span className={animation.underline}>Skills</span>
            </li>
            <li className="group  transition-all duration-300 ease-in-out">
              <span className={animation.underline}>Works</span>
            </li>
            <li className="group  transition-all duration-300 ease-in-out">
              <span className={animation.underline}>Resume</span>
            </li>
            <li className="group  transition-all duration-300 ease-in-out">
              <span className={animation.underline}>Contact</span>
            </li>
          </ul>
        </div>
        <div className="md:hidden" onClick={handleClick}>
          {!nav ? <FiMenu className="w-10 text-2xl" /> : <GrClose className="w-10 text-2xl" />}
        </div>
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute bg-zinc-200 w-full px-8 animate-opacity md:hidden"
        }
      >
        <li className="border-b-2  border-zinc-300 w-full p-4">
          <p className="animate-transform">Home</p>
        </li>
        <li className="border-b-2 border-zinc-300 w-full p-4">
          <p className="animate-[transform_1.5s]">Skills</p>
        </li>
        <li className="border-b-2 border-zinc-300 w-full p-4">
          <p className="animate-[transform_2s]">Works</p>
        </li>
        <li className="border-b-2 border-zinc-300 w-full p-4">
          <p className="animate-[transform_2.5s]">Resume</p>
        </li>
        <li className="border-b-2 border-zinc-300 w-full p-4">
          <p className="animate-[transform_3s]">Contact</p>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
