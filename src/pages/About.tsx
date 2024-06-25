import profile from "../assets/profile.png";
import arrowRight from "../assets/icons/right-arrow.png";
import github from "../assets/icons/github.png";

const About = () => {
  return (
    <div id="about">
      <div className="flex flex-col gap-5 md:flex-row  mt-28 md:mt-0 mb-10">
        <h1 className="text-lg font-firaCode">.../About me...</h1>
        <p className="flex-1 md:text-center text-grayLight font-openSans  text-xl">
          Hello! I'm Ovidiu a
          <span className="text-textWhite italic"> front-end developer</span>.
          <br />
          More than <span className="text-textWhite italic">1 year</span>{" "}
          experience.
        </p>
      </div>
      <div className="flex  items-start justify-between flex-wrap gap-5">
        <div className="font-firaCode flex flex-col gap-5 order-2 lg:order-1 mx-auto lg:mx-0">
          {/* Frontend section */}
          <div className="flex flex-col max-w-[530px] gap-5 border border-grayLight p-5 rounded-3xl text-grayLight hover:bg-textWhite hover:text-backgroundBlack duration-300 transition-all">
            <h1 className="text-2xl">Front-end</h1>
            <p>
              Javascript / ES6 / TypeScript / React / Redux Toolkit / NextJs /
              React Native
            </p>
          </div>
          {/* Styles Section */}
          <div className="flex gap-5 items-center justify-between">
            <div className="flex flex-col w-[220px] md:w-[300px] gap-5 border border-grayLight p-5 rounded-3xl text-grayLight hover:bg-textWhite hover:text-backgroundBlack duration-300 transition-all">
              <h1 className="text-2xl">Styles</h1>

              <p>Tailwind CSS / CSS / SCSS / Bootstrap / Material UI</p>
            </div>
            <a
              href="https://github.com/OvidiuAl3x"
              target="_blank"
              className="flex"
            >
              <div className="rounded-full border border-l-grayLight w-fit p-3">
                <img src={github} alt="github" className="w-8 h-8" />
              </div>
              <div className="rounded-full border border-l-grayLight w-fit p-3 bg-textWhite right-4 relative">
                <img
                  src={arrowRight}
                  alt="arrow"
                  className="w-8 h-8 -rotate-45"
                />
              </div>
            </a>
          </div>
          {/* Backend  Section */}
          <div className="flex flex-col  gap-5 border border-grayLight p-5 rounded-3xl text-grayLight hover:bg-textWhite hover:text-backgroundBlack duration-300 transition-all">
            <h1 className="text-2xl">Back-end</h1>
            <div>
              <p>Node.JS / Express.Js / MongoDB</p>
            </div>
          </div>
          {/* Favorite  Section */}
          <div className="flex gap-5 flex-wrap items-center justify-between">
            <p className="text-grayLight max-w-[260px] font-openSans">
              Some of my favorite{" "}
              <span className="text-textWhite italic">
                technologies, topic, or tools{" "}
              </span>
              that i worked with
            </p>
            <div className="flex flex-col ml-auto max-w-[250px] gap-5 border border-grayLight p-5 rounded-3xl text-grayLight hover:bg-textWhite hover:text-backgroundBlack duration-300 transition-all">
              <h1 className="text-2xl">Favorite tools</h1>
              <div>
                <p>TypeScript / React / Tailwind CSS / Git</p>
              </div>
            </div>
          </div>
        </div>
        {/* Profile Image */}
        <div className="w-[350px] h-[400px] order-1 lg:order-2 mx-auto lg:mx-0 relative">
          <span className="w-[350px] bg-grayDark h-[350px] absolute rounded-full top-12 z-0"></span>
          <img
            src={profile}
            alt="profile_pic"
            className="z-10 absolute rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
