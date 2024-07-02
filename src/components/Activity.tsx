import arrowRight from "../assets/icons/right-arrow.png";
import { projectData } from "./ProjectsData";

const Activity = () => {
  const backgroundStyle = (image: string) => {
    const backgroundImage = `url("${image}")`;
    const backgroundStyle = {
      backgroundImage: backgroundImage,
      backgroundSize: "cover",
      backgroundPosition: "center",
    };

    return backgroundStyle;
  };

  return (
    <div className="grid gap-5 md:grid-cols-2">
      <div className="flex flex-col justify-between gap-2">
        <h1 className="text-2xl mt-4">Github Contributions</h1>
        <img
          src="https://streak-stats.demolab.com?user=OvidiuAl3x&locale=en&mode=weekly&theme=nord&hide_border=false&border_radius=12&order=3"
          height="150"
          alt="streak graph"
          className="md:w-[350px] lg:w-[400px]"
        />
      </div>
      {/* add real project */}

      {projectData.slice(0, 1).map((item, index) => (
        <div className="flex flex-col justify-between gap-2" key={index}>
          <h1 className="text-2xl mt-4">Last Project</h1>
          <div
            className="md:w-[300px] lg:w-[400px] h-48 rounded-2xl hover:opacity-100 transition-opacity duration-300"
            style={backgroundStyle(item.images[0])}
          >
            <div className="ml-auto w-[70%] lg:w-[55%] flex flex-col items-center justify-around h-full pl-2 backdrop-blur-2xl rounded-r-[16px]">
              <h1 className="text-xl font-firaCode  text-backgroundBlack text-center">
                {item.title}
              </h1>
              <a
                href="#projects"
                className="hover-container flex gap-2 items-center"
              >
                <button className="project-button bg-textWhite text-backgroundBlack rounded-full px-8 lg:px-12 py-2 font-openSans italic">
                  Project
                </button>
                <div className="arrow-container bg-textWhite w-[35px] px-[10px] rounded-full py-[10px] cursor-pointer">
                  <img src={arrowRight} alt="arrow_right" />
                </div>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Activity;
