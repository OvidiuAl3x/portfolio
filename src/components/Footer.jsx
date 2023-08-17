import React from "react";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-[#6bc4c9] to-emerald-500 h-[20vh] text-center flex flex-col justify-center items-center font-semibold ">
      <div className="m-auto">
        <a href="#home" className="mx-2">
          Home
        </a>
        <a href="#skills" className="mx-2">
          Skills
        </a>
        <a href="#works" className="mx-2">
          Works
        </a>
        <a href="#resume" className="mx-2">
          Resume
        </a>
        <a href="#contact" className="mx-2">
          Contact
        </a>
      </div>
      <h1 className="mb-2">|© 2023 Ovidiu Ciobanu | All rights reserved |</h1>
    </div>
  );
};

export default Footer;
