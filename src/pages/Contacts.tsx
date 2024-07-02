import linkedIn from "../assets/icons/linkedin.png";
import github from "../assets/icons/github.png";
import email from "../assets/icons/email.png";

const Contacts = () => {
  return (
    <div id="contacts">
      <div className="flex flex-wrap md:flex-nowrap gap-5 items-center justify-between  md:mt-0  text-grayLight">
        <div className="flex flex-col text-4xl sm:text-6xl text-textWhite font-firaCode order-2 md:order-1 gap-5">
          <h1>Ovidiu</h1>
          <div className="flex gap-5">
            <p className="text-base md:text-xl text-grayLight">
              FrontEnd developer
            </p>
            <h1> Ciobanu</h1>
          </div>
        </div>
        <div className="flex flex-col font-openSans text-lg gap-8 order-1 md:order-2">
          <h1 className="text-xl font-firaCode text-textWhite">
            .../Contacts...
          </h1>
          <div className="flex justify-around ">
            <a href="#home" className="hover:text-textWhite">
              Main
            </a>
            <a href="#about" className="hover:text-textWhite">
              About
            </a>
            <a href="#projects" className="hover:text-textWhite">
              Projects
            </a>
          </div>
          <div className="border border-grayLight rounded-3xl p-5 flex flex-col gap-3 w-[280px] lg:w-[350px] font-firaCode">
            <p>Site</p>
            <p className="text-base">Handcrafted by Me / </p>
            <p className="text-base">
              Designed by{" "}
              <a
                href="https://www.behance.net/taisia_pro"
                target="_blank"
                className="underline italic text-textWhite"
              >
                Taisia
              </a>{" "}
              /
            </p>
            <p className="text-base">Powered by React</p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-5 font-openSans mt-5 mb-10">
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
        <div className="flex items-center gap-3 text-grayLight hover:text-textWhite rounded-full border border-grayLight px-5 py-2 italic">
          <img src={email} alt="" className="w-4" />
          <p>alexandruovidiu1999@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
