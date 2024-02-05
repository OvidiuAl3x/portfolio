import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

const experience = [
  {
    role: "Frontend Developer",
    company: "Asociatia Oportunitati si Cariere",
    date: "Sep 2023 - Present",
    skiilsUsed: "Html, Css, JavaScript, React, Tailwind",
    skillsAcquired: [
      "My work involved redesigning and enhancing the web scrapers that my colleagues had developed, making them responsive and adding new features. This improved the manual testing process for the testers, who could perform their tasks more efficiently.",
      "We developed a feature that allows users to search for cities using an endpoint from the backend. This endpoint connects to a database that contains information about various villages, cities and counties from Romania",
      "We helped new staff members who joined our project team to get familiar with the project goals, tasks, and tools",
      "We have resolved the bugs that the test team identified and documented in the GitHub repo.",
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
