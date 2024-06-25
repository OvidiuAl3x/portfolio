import { Link } from "react-router-dom";
import image from "../assets/animalsBlog.png";
import arrowRight from "../assets/icons/right-arrow.png";

const Activity = () => {
  const backgroundImage = `url("${image}")`;
  const backgroundStyle = {
    backgroundImage: backgroundImage,
    backgroundSize: "cover",
    backgroundPosition: "center",
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
      <div className="flex flex-col justify-between gap-2">
        <h1 className="text-2xl mt-4">Last Project</h1>
        <div
          className="md:w-[300px] lg:w-[400px] h-48 rounded-2xl hover:opacity-100 transition-opacity duration-300"
          style={backgroundStyle}
        >
          <div className="ml-auto w-[75%] flex flex-col items-center justify-center h-full pl-2 backdrop-blur-md rounded-r-[20px]">
            <h1 className="text-xl font-firaCode">Proiect despre Caini</h1>
            <p className="text-white p-4 text-end text-sm font-openSans">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
              del
            </p>
            <Link to="/projects" className="flex gap-2 items-center">
              <button className="bg-textWhite text-backgroundBlack rounded-full px-12 py-2 font-openSans italic">
                Project
              </button>
              <img
                src={arrowRight}
                alt="arrow_right"
                className="bg-textWhite text-backgroundBlack w-[35px] px-[10px] rounded-full py-[10px] cursor-pointer"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
