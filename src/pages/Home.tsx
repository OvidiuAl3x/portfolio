import arrowRight from "../assets/icons/right-arrow.png";
import linkedIn from "../assets/icons/linkedin.png";
import github from "../assets/icons/github.png";
import download from "../assets/icons/download.png";
import CV from "../assets/Resume-Ovidiu-Alexandru-Ciobanu.pdf";
import Activity from "../components/Activity";

const Home = () => {
  return (
    <div
      id="home"
      className="flex flex-col justify-center items-center md:h-[100vh] gap-5 font-firaCode mt-10 md:mt-0 animate-[opacity_2s_ease-in-out]"
    >
      <div className="grid md:grid-cols-2  xl:w-[80%] gap-5">
        <p className="text-5xl md:text-6xl tracking-wider order-1 md:order-1">
          Front-End
        </p>

        <a
          href="#projects"
          className="flex gap-2 items-center text-xl md:justify-end order-4 md:order-2"
        >
          <button className="bg-textWhite text-backgroundBlack rounded-full px-16 py-2 font-openSans italic">
            Projects
          </button>
          <img
            src={arrowRight}
            alt="arrow_right"
            className="bg-textWhite text-backgroundBlack w-12 px-3 rounded-full py-3 cursor-pointer"
          />
        </a>

        <p className="w-[350px] font-openSans text-grayLight order-3 md:order-3">
          I have a passion for{" "}
          <span className="italic text-textWhite">web development </span> and{" "}
          <span className="italic text-textWhite">digital technologies.</span>{" "}
          I'm a <span className="italic text-textWhite">self-taught coder</span>{" "}
          who enjoys working with others and{" "}
          <span className="italic text-textWhite">
            solving problems creatively
          </span>
          .
        </p>

        <p className="text-5xl md:text-6xl tracking-wider text-end order-2 md:order-4">
          Developer
        </p>
      </div>

      <div className="flex flex-wrap gap-5 font-openSans mt-5">
        <a
          href="https://github.com/OvidiuAl3x"
          target="_blank"
          className="flex items-center gap-3 text-grayLight hover:text-textWhite rounded-full border border-grayLight px-5 py-2 italic"
        >
          <img src={github} alt="" className="w-5" />
          <p>GitHub</p>
        </a>
        <a
          href="https://www.linkedin.com/in/ovidiu-alexandru-ciobanu/"
          target="_blank"
          className="flex items-center gap-3 text-grayLight hover:text-textWhite rounded-full border border-grayLight px-5 py-2 italic"
        >
          <img src={linkedIn} alt="" className="w-5" />
          <p>LinkedIn</p>
        </a>
        <a
          href={CV}
          target="_blank"
          rel="noreferrer"
          download="CV-OvidiuCiobanu"
          className="flex items-center gap-3 text-grayLight hover:text-textWhite rounded-full border border-grayLight px-5 py-2 italic"
        >
          <img src={download} alt="" className="w-5" />
          <p>Resume</p>
        </a>
      </div>

      <Activity />
    </div>
  );
};

export default Home;
