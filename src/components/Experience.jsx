import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

const experience = [
  {
    role: "Frontend Developer",
    company: "Asociatia Oportunitati si Cariere",
    date: "Sep 2023 - Present",
    skiilsUsed: "Html, Css, JavaScript, React, Tailwind, Next.JS",
    projects: "City Search Application, Scraper-UI",
    skillsAcquired: [
      "Enhanced understanding of JavaScript ES6 features, including Promises, async/await, template literals, let/const, and arrow functions",
      "Experience in building responsive and user-friendly interfaces to improve usability and enhance user experience",
      "Skill development in identifying and resolving bugs to ensure smooth functionality and optimal performance",
      "Strengthened documentation skills, including the creation of comprehensive guidelines for project usage, maintenance, and troubleshooting",
      "Improved collaboration and communication skills through working with colleagues and providing technical support and guidance",
    ],
  },
  {
    role: "Front End - React Participant",
    company: "Endava",
    date: "Apprenticeship 09.2022-11.2022",
    skiilsUsed: "React, Axios, Material UI, React Router, Agile Methodologies",
    skillsAcquired: [
      "Successfully collaborated in a cross-functional team of 9 interns (3ront-End, 3 Back-End and 3 DevOps) (plus Front-End, Back-End, DevOps mentors, scrum master and product owner) on an recipes application, meeting all project deadlines,",
      "Successfully built CRUD website while learning React and utilizing an external API,",
      " Utilized AXIOS to fetch data from back-end, displaying it in an organized manner on the front-end,",
      "Formik was used to create a new recipe form,",
      "Successfully implemented Yup for form validation on [website],",
      "Utilized React Router to create dynamic routes for a single page application which provided optimal user experience.",
    ],
  },
];

function Experience() {
  const [maxHeight, setMaxHeight] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const updateMaxHeight = () => {
      const sliderInnerContainer = sliderRef.current.innerSlider.list;
      const slides = Array.from(sliderInnerContainer.children);

      const maxHeight = slides.reduce((max, slide) => {
        const slideHeight = slide.offsetHeight;
        return slideHeight > max ? slideHeight : max;
      }, 0);

      setMaxHeight(maxHeight);
    };

    updateMaxHeight();
    window.addEventListener("resize", updateMaxHeight);

    return () => {
      window.removeEventListener("resize", updateMaxHeight);
    };
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  const slideStyle = {
    height: `${maxHeight}px`,
  };
  return (
    <div className="w-full max-w-[20em] sm:max-w-[35em] md:max-w-[25em] lg:max-w-[35em]">
      <Slider {...sliderSettings} ref={sliderRef}>
        {experience.map((item, index) => (
          <div
            key={index}
            style={slideStyle}
            className="border-2 border-emerald-500 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg dark:text-zinc-200 dark:border-emerald-700"
          >
            <p className="font-bold text-base">{item.role}</p>
            <p className="text-sm">{item.company}</p>
            <span className="text-[16px] text-emerald-600">{item.date}</span>
            <p className="text-sm">
              <strong>Skills used: </strong>
              {item.skiilsUsed}
            </p>
            {item.projects && (
              <p className="text-sm">
                <strong>Projects: </strong>
                {item.projects}
              </p>
            )}

            <ul className="list-disc mt-2 marker:text-emerald-700 text-sm dark:marker:text-emerald-500">
              <p>Skills acquired:</p>
              {item.skillsAcquired.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Experience;
