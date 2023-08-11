import React from "react";
import { FiDownload } from "@react-icons/all-files/fi/FiDownload";
import bgImg from "../assets/1.jpg";

const Home = () => {
  return (
    <div className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8 order-last md:order-first">
          <h1 className="py-3 text-5xl md:text-6xl font-bold">
            Hello, I'm Ovidiu Ciobanu
          </h1>
          <h2 className="text-4xl md:text-3xl font-bold">
            Front-End Developer
          </h2>
          <div className="flex w-full my-4">
            <button className="p-3 m-2  text-emerald-500 bg-zinc-950 text-2l md:text-4l  font-semibold rounded-lg hover:shadow-lg hover:shadow-zinc-700">
              Hire Me
            </button>

            <button className="flex items-center justify-center p-3 m-2 bg-emerald-500 text-2l md:text-4l font-semibold rounded-lg hover:shadow-lg hover:shadow-emerald-700/50">
              Resume <FiDownload className="mx-1 " />
            </button>
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
