import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";

const Contact = () => {
  return (
    <div className="max-w-[1240px] mb-10 mx-4 lg:mx-auto md:h-[50vh]">
      <span className="relative top-[-8em]" id="contact"></span>

      <h1 className="mt-5 mb-2 mx-5 text-2xl md:text-3xl font-bold text-zinc-500">
        Contact
      </h1>
      <hr className="w-full border-emerald-500" />

      <div className="text-center">
        <h1 className="text-emerald-700 font-bold md:text-xl mt-10 mb-3">
          Have You Any Questions ?
        </h1>
        <p className="text-zinc-400 text-sm md:text-md">
          I'AM AT YOUR SERVICES
        </p>
      </div>
      <div className="md:grid md:grid-cols-3 mt-10">
        <div className="flex flex-col items-center mt-10">
          <a
            href="https://github.com/OvidiuAl3x"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="text-4xl text-emerald-600 hover:scale-125" />
          </a>
          <p className="font-bold">Github</p>
          <p className="text-sm">OvidiuAl3x</p>
        </div>

        <div className="flex flex-col items-center mt-10">
          <a
            href="https://www.linkedin.com/in/ovidiu-alexandru-ciobanu/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn className="text-4xl text-emerald-600 hover:scale-125" />
          </a>
          <p className="font-bold">Linkedin</p>
          <p className="text-sm">Ciobanu Ovidiu-Alexandru</p>
        </div>

        <div className="flex flex-col items-center mt-10">
          <MdEmail className="text-4xl text-emerald-600" />

          <p className="font-bold">E-Mail</p>
          <p className="text-sm">alexandruovidu1999@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
