import React from "react";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import blog from "../assets/portofolio/animalsBlog.png";
import Movies_App from "../assets/portofolio/moviePHP.png";
import Recipe_App from "../assets/portofolio/recipeApp.png";
import Book_App from "../assets/portofolio/bookReact.png";
import Shopping_Cart from "../assets/portofolio/cart.png";
import Quizz from "../assets/portofolio/quiz.png";
import Quotes from "../assets/portofolio/quotes.png";
import to_do from "../assets/portofolio/to_do.png";
import Weather from "../assets/portofolio/weather.png";

const style = {
  imgStyle:
    "rounded border-black border-2 w-full h-full object-cover drop-shadow-lg group-hover:blur-sm",
  hoverDiv:
    "opacity-0 group-hover:opacity-100 duration-300 absolute left-0 bottom-20 right-0 z-2 flex text-xl font-medium",
  hoverLink:
    "bg-emerald-500 m-auto rounded-lg p-2 hover:scale-110 flex items-center",
  text: "text-center group-hover:text-red-300 mt-3 text-lg",
};

const images = [
  { project1: Book_App, title: "Book App" },
  { project1: Shopping_Cart, title: "Shopping Cart" },
  { project1: Recipe_App, title: "Recipe App" },
  { project1: Quotes, title: "Random Quotes App" },
  { project1: Movies_App, title: "Movies App" },
  {
    project1: blog,
    title: "Blog About Animals",
    linkMore:
      "https://stackoverflow.com/questions/63759410/selecting-images-and-displaying-titles-in-react",
  },
  { project1: Quizz, title: "Quizz APP" },
  { project1: to_do, title: "To Do APP" },
  { project1: Weather, title: "Weather APP" },
];

const Works = () => {
  return (
    <div className="max-w-[1240px] m-4 lg:mx-auto h-screen">
      <h1 className="mt-5 mb-2 mx-5 text-2xl md:text-3xl font-bold text-zinc-500">
        Works
      </h1>
      <hr className="w-full" />

      <div className="grid md:grid-cols-3 gap-16 m-5">
        {images.map((image, index) => (
          <div key={index} className="animate-scaleOp">
            <div className="relative group  h-full">
              <img
                src={image.project1}
                className={style.imgStyle}
                alt={image.title}
              />

              <div className={style.hoverDiv}>
                {image.linkMore ? (
                  <a
                    href={image.linkMore}
                    className={style.hoverLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    More
                  </a>
                ) : null}

                <a
                  href={image.linkMore}
                  className={style.hoverLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub className="mr-2" />
                  Code
                </a>
              </div>
            </div>

            <p className={style.text}>{image.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
