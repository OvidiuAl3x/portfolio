import React, { useState } from "react";
import { FiDownload } from "@react-icons/all-files/fi/FiDownload";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import bgImg from "../assets/1.jpg";
import CV from "../assets/CV/CV.pdf";
import { MdDarkMode } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";

const buttonStyle = {
  resumeBTN:
    "flex items-center justify-center p-3 m-2 bg-emerald-500 text-2l md:text-4l font-semibold rounded-lg hover:shadow-lg hover:shadow-emerald-700/50",
  darkMode:
    "text-3xl font-bold  sm:text-3xl fixed right-[10px] top-[100px] md:right-[20px]  cursor-pointer text-zinc-800",
  lightMode:
    "text-3xl font-bold  sm:text-3xl fixed right-[10px] top-[100px] md:right-[20px]  cursor-pointer text-zinc-100",
};

const Home = () => {
  const [dark, setDark] = useState(false);

  const handleChange = () => {
    const html = document.getElementsByTagName(`html`)[0];
    html.classList.toggle("dark");
    setDark(!dark);
  };

  return (
    <div
      className="w-full h-screen flex flex-col justify-between bg-gradient-to-r from-[#6bc4c9] to-emerald-500 "
      id="home"
    >
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto animate-[opacity_2s_ease-in-out]">
        {!dark ? (
          <MdDarkMode className={buttonStyle.darkMode} onClick={handleChange} />
        ) : (
          <BsFillSunFill
            className={buttonStyle.lightMode}
            onClick={handleChange}
          />
        )}

        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8 order-last md:order-first rgb(16 185 129">
          <h1 className="py-3 text-5xl md:text-6xl font-bold">
            Hello, I'm Ovidiu Ciobanu
          </h1>
          <h2 className="text-4xl md:text-3xl font-bold">
            Front-End Developer
          </h2>
          <div className="flex w-full my-4 items-center">
            <a
              href={CV}
              download="CV-OvidiuCiobanu"
              target="_blank"
              rel="noreferrer"
            >
              <button className={buttonStyle.resumeBTN}>
                Resume <FiDownload className="mx-1" />
              </button>
            </a>

            <a
              href="https://www.linkedin.com/in/ovidiu-alexandru-ciobanu/"
              className="mx-2"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn className="text-4xl hover:scale-110" />
            </a>
            <a
              href="https://github.com/OvidiuAl3x"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="text-4xl hover:scale-110" />
            </a>
          </div>
        </div>
        <div className="m-auto">
          <img
            src={bgImg}
            alt="profile"
            className="w-64 max-h-full md:w-96 rounded-full drop-shadow-lg "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
