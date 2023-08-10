import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center w-full">
          <h1 className="text-3xl font-bold ml-10 sm:text-4xl">Ovidiu</h1>
          <ul className="hidden md:flex ml-auto mr-10">
            <li>Home</li>
            <li>Skills</li>
            <li>Works</li>
            <li>Resume</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="md:hidden" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute bg-zinc-200 w-full px-8 transform animate-opacity md:hidden"
        }
      >
        <li className="border-b-2  border-zinc-300 w-full p-4">
          <p className="transform animate-transform">Home</p>
        </li>
        <li className="border-b-2 border-zinc-300 w-full p-4">
          <p className="transform animate-[transform_1.5s]">Skills</p>
        </li>
        <li className="border-b-2 border-zinc-300 w-full p-4">
          <p className="transform animate-[transform_2s]">Works</p>
        </li>
        <li className="border-b-2 border-zinc-300 w-full p-4">
          <p className="transform animate-[transform_2.5s]">Resume</p>
        </li>
        <li className="border-b-2 border-zinc-300 w-full p-4">
          <p className="transform animate-[transform_3s]">Contact</p>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
