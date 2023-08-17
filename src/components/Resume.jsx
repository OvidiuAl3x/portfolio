import React from "react";

const Resume = () => {
  return (
    <div className="max-w-[1240px] my-32 md:mt-[10em] mx-4 lg:mx-auto" id="resume">
      <h1 className="mt-5 mb-2 mx-5 text-2xl md:text-3xl font-bold text-zinc-500">
        Resume
      </h1>
      <hr className="w-full border-emerald-500" />

      <div className="grid md:grid-cols-2 m-5 md:gap-10">
        <div className="animate-scaleOp flex flex-col items-center">
          <h1 className="border-2 border-emerald-00 rounded-3xl py-1 px-8 font-semibold text-xl w-fit m-10 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] text-center">
            Experience
          </h1>
          <div className="relative md:mx-4">
            <div className="flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-180px]">
              <div className="w-[12px] h-[12px] rounded-full bg-emerald-500 border-2 border-black"></div>
              <div className="w-[230px] bg-emerald-500 h-[2px] sm:w-[300px]"></div>
              <div className="w-[12px] h-[12px] rounded-full bg-emerald-500 border-2 border-black"></div>
            </div>
            <div className="border-2 border-emerald-500 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
              <p className="font-bold text-md">
                Front End - React Participant (Endava)
              </p>
              <span className="text-[16px] text-emerald-600">
                09.2022-11.2022
              </span>
              <p className="text-sm">
                <strong>Skills used: </strong>React, Axios, Material UI, React
                Router, Agile Methodologies
              </p>

              <ul className="list-disc mt-2 marker:text-emerald-700 text-sm">
                <p>Skills acquired:</p>
                <li>
                  Successfully collaborated in a cross-functional team of 9
                  interns (3 Front-End, 3 Back-End and 3 DevOps) (plus
                  Front-End, Back-End, DevOps mentors, scrum master and product
                  owner) on an recipes application, meeting all project
                  deadlines,
                </li>
                <li>
                  Successfully built CRUD website while learning React and
                  utilizing an external API,
                </li>
                <li>
                  Utilized AXIOS to fetch data from back-end, displaying it in
                  an organized manner on the front-end,
                </li>
                <li>
                  Utilized Material UI to create an intuitive interface for
                  website users,
                </li>
                <li>Formik was used to create a new recipe form,</li>
                <li>
                  Successfully implemented Yup for form validation on [website],
                </li>
                <li>
                  Utilized React Router to create dynamic routes for a single
                  page application which provided optimal user experience.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="animate-scaleOp flex flex-col items-center">
          <h1 className="border-2 border-emerald-00 rounded-3xl py-1 px-8 font-semibold text-xl w-fit m-10 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] text-center">
            Education And Training
          </h1>
          <div className="relative md:mx-4">
            <div className="flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-180px]">
              <div className="w-[12px] h-[12px] rounded-full bg-emerald-500 border-2 border-black"></div>
              <div className="w-[230px] bg-emerald-500 h-[2px] sm:w-[300px]"></div>
              <div className="w-[12px] h-[12px] rounded-full bg-emerald-500 border-2 border-black"></div>
            </div>
            <div className="border-2 border-emerald-500 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
              <p className="font-bold text-md">
                Web Development - Advanced Level (Digital Nation)
              </p>
              <span className="text-[16px] text-emerald-600">
                09.2022-11.2022
              </span>
              <p className="text-sm">
                <strong>Skills used: </strong>PHP, Bootstrap, MySql, Javascript
              </p>

              <ul className="list-disc mt-2 marker:text-emerald-700 text-sm">
                <p>Skills acquired:</p>
                <li>usage of PHP arrays, looping, interactions with forms,</li>
                <li>
                  understanding syntax, functioning principles and possibilities
                  of Bootstrap in web pages design and development
                </li>
                <li>
                  practical experience in web pages design and development using
                  HTML, CSS and frameworks
                </li>
                <li>build functionalities with PHP and SQL databases,</li>
                <li>
                  implement websites with customized design and develop
                  functionalities of medium difficulty in Wordpress.
                </li>
              </ul>
              <hr className="border-emerald-500 my-6" />
              <p className="font-bold text-md">Web Page Design (Accredited)</p>
              <span className="text-[16px] text-emerald-600">2020-2021</span>
              <p className="text-sm">
                <strong>Skills acquired: </strong>Html, Css, Javascript
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
