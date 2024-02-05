import React from "react";
import Animation from "../components/Animation";
import Experience from "../components/Experience";

const Resume = () => {
  return (
    <div className="max-w-[1240px] my-32 md:mt-[10em] mx-4 lg:mx-auto">
      <span className="relative top-[-8em]" id="resume"></span>
      <Animation props="animate-[scaleOp_2s]">
        <h1 className="mt-5 mb-2 mx-5 text-2xl md:text-3xl font-bold text-zinc-500 dark:text-zinc-300">
          Resume
        </h1>
      </Animation>
      <hr className="w-full border-emerald-500" />

      <div className="grid md:grid-cols-2 m-5 md:gap-10">
        <div className="flex flex-col items-center">
          <Animation props="animate-[scaleOp_2s]">
            <h1 className="border-2 border-emerald-00 rounded-3xl py-1 px-8 font-semibold text-xl w-fit m-10 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] text-center dark:text-emerald-500">
              Experience
            </h1>
          </Animation>
          <Animation props="animate-[scaleOp_2s]">
            <Experience />
          </Animation>
        </div>

        <div className="flex flex-col items-center">
          <Animation props="animate-[scaleOp_2s]">
            <h1 className="border-2 border-emerald-00 rounded-3xl py-1 px-8 font-semibold text-xl w-fit m-10 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] text-center dark:text-emerald-500">
              Education And Training
            </h1>
          </Animation>
          <Animation props="animate-[scaleOp_2s]">
            <div className="smd:mx-4">
              <div className="border-2 border-emerald-500 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg dark:text-zinc-200 dark:border-emerald-700">
                <p className="font-bold text-base">
                  Web Development - Advanced Level (Digital Nation)
                </p>
                <span className="text-[16px] text-emerald-600">
                  09.2021-11.2021
                </span>
                <p className="text-sm">
                  <strong>Skills used: </strong>PHP, Bootstrap, MySql,
                  Javascript
                </p>

                <ul className="list-disc mt-2 marker:text-emerald-700 text-sm dark:marker:text-emerald-500">
                  <p>Skills acquired:</p>
                  <li>
                    usage of PHP arrays, looping, interactions with forms,
                  </li>
                  <li>
                    understanding syntax, functioning principles and
                    possibilities of Bootstrap in web pages design and
                    development
                  </li>
                  <li>
                    practical experience in web pages design and development
                    using HTML, CSS and frameworks
                  </li>
                  <li>build functionalities with PHP and SQL databases,</li>
                  <li>
                    implement websites with customized design and develop
                    functionalities of medium difficulty in Wordpress.
                  </li>
                </ul>
                <hr className="border-emerald-500 my-6" />
                <p className="font-bold text-base">
                  Web Page Design (Accredited)
                </p>
                <span className="text-[16px] text-emerald-600">2020-2021</span>
                <p className="text-sm">
                  <strong>Skills acquired: </strong>Html, Css, Javascript
                </p>
              </div>
            </div>
          </Animation>
        </div>
      </div>
    </div>
  );
};

export default Resume;
