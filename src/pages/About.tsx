import profile from "../assets/profile.png";
import arrowRight from "../assets/icons/right-arrow.png";
import github from "../assets/icons/github.png";
import Animation from "../components/Animation";

const FrontEnd = [
  "Javascript",
  " / ",
  "ES6",
  " / ",
  "TypeScript",
  " / ",
  "React",
  " / ",
  "Redux Toolkit",
  " / ",
  "NextJs",
  " / ",
  "React Native",
];
const Styles = [
  "Tailwind CSS",
  " / ",
  "CSS",
  " / ",
  "SCSS",
  " / ",
  "Bootstrap",
  " / ",
  "Material UI",
];
const BackEnd = ["Node.JS", " / ", "Express.Js", " / ", "MongoDB"];

const About = () => {
  return (
    <Animation props="animate-opacity">
      <div id="about" className="flex flex-col gap-5 md:flex-row mb-10">
        <h1 className="text-lg font-firaCode">.../About me...</h1>
        <p className="flex-1 md:text-center text-grayLight font-openSans  text-xl">
          Hello! I'm Ovidiu a
          <span className="text-textWhite italic"> front-end developer</span>.
          <br />
          More than <span className="text-textWhite italic">2 years</span>{" "}
          experience.
        </p>
      </div>
      <div className="flex  items-start justify-between flex-wrap gap-5 ">
        <div className="font-firaCode flex flex-col gap-5 order-2 lg:order-1 mx-auto lg:mx-0">
          {/* Frontend section */}
          <Animation props="animate-[opacity_2s_ease-in-out] aboutHover flex flex-col max-w-[530px] gap-5 border-2 border-grayLight p-5 rounded-xl text-grayLight  hover:text-backgroundBlack duration-300 ">
            <h1 className="text-2xl">Front-end</h1>
            <div className="flex flex-wrap gap-1">
              {FrontEnd.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </Animation>

          {/* Styles Section */}
          <Animation props="animate-[opacity_2s_ease-in-out] flex gap-5 items-center justify-between">
            <div className="aboutHover flex flex-col max-w-[220px] md:max-w-[350px] gap-5 border-2 border-grayLight p-5 rounded-xl text-grayLight hover:text-backgroundBlack duration-300">
              <h1 className="text-2xl">Styles</h1>

              <div className="flex flex-wrap gap-1">
                {Styles.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
            </div>
            <a
              href="https://github.com/OvidiuAl3x"
              target="_blank"
              className="flex"
            >
              <div className="rounded-full border-2 border-l-grayLight w-12 h-12 p-2">
                <img src={github} alt="github" />
              </div>
              <div className="rounded-full border-2 border-l-grayLight w-12 h-12  p-2 bg-textWhite right-4 relative">
                <img src={arrowRight} alt="arrow" className="-rotate-45" />
              </div>
            </a>
          </Animation>

          {/* Backend  Section */}
          <Animation props="animate-[opacity_2s_ease-in-out] aboutHover flex flex-col  gap-5 border-2 border-grayLight p-5 rounded-xl text-grayLight hover:text-backgroundBlack duration-300 ">
            <h1 className="text-2xl">Back-end</h1>
            <div>
              <div className="flex flex-wrap gap-1">
                {BackEnd.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
            </div>
          </Animation>

          {/* Favorite  Section */}
          <Animation props="animate-[opacity_2s_ease-in-out] flex gap-5 flex-wrap items-center justify-between">
            <p className="text-grayLight max-w-[260px] font-openSans">
              Some of my favorite{" "}
              <span className="text-textWhite italic">
                technologies, topic, or tools{" "}
              </span>
              that i worked with
            </p>
            <div className="aboutHover  flex flex-col ml-auto max-w-[250px] gap-5 border-2 border-grayLight p-5 rounded-xl text-grayLight  hover:text-backgroundBlack duration-300 ">
              <h1 className="text-2xl">Favorite tools</h1>
              <div>
                <p>TypeScript / React / Tailwind CSS / Git</p>
              </div>
            </div>
          </Animation>
        </div>

        <Animation props="w-[300px] h-[300px] md:w-[350px] md:h-[400px] animate-[opacity_2s_ease-in-out] order-1 lg:order-2 mx-auto lg:mx-0 relative flex justify-center">
          {/* Profile Image */}
          <span className="w-[250px] h-[230px] md:w-[350px] md:h-[350px] bg-grayDark  absolute rounded-full top-12 z-0"></span>
          <img
            src={profile}
            alt="profile_pic"
            className="z-10 absolute rounded-full w-[250px] md:w-fit"
          />
        </Animation>
      </div>
    </Animation>
  );
};

export default About;
