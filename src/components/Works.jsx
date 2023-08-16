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
import Description from "./Description";

const style = {
  imgStyle:
    "rounded border-black border-2 w-full h-full object-cover drop-shadow-lg",
  hoverDiv:
    "hidden group-hover:flex duration-300 absolute left-0 bottom-0 right-0 h-full z-2  text-xl font-medium backdrop-blur-md bg-black/20",
  hoverLink:
    "bg-emerald-500 w-auto h-fit mt-auto ml-auto mr-auto mb-4 md:m-auto rounded-lg p-2 hover:scale-110 flex items-center",
  text: "text-center group-hover:text-red-300 mt-3 text-lg",
};

const images = [
  {
    project1: Book_App,
    title: "Book App",
    linkGit: "https://github.com/OvidiuAl3x/books.git",
    LgUsed: "HTML, CSS, JavaScript, React",
    linkMore: [
      "• Created a book app in React that utilized json data",
      <br />,
      "• Added login functionality (token)",
      <br />,
      "• Users after login are allowed to add to favorites they books",
      <br />,
      "• Admin can Add, Delete, Edit Books",
      <br />,
      "• Users can Search books by title or author or filter books by genre",
      <br />,
      "• Users can sort the book ascending and descending by year, review or pages",
    ],
  },
  {
    project1: Shopping_Cart,
    title: "Shopping Cart",
    linkGit: "https://github.com/OvidiuAl3x/shopping-cart",
    linkMore: [
      "• Created a book app in React that utilized json data",
      <br />,
      "• Added login functionality (token)",
    ],
  },
  { project1: Recipe_App, title: "Recipe App", linkMore: "" },
  {
    project1: Quotes,
    title: "Random Quotes App",
    linkGit: "https://github.com/OvidiuAl3x/random-quotes-app",
  },
  { project1: Movies_App, title: "Movies App", linkMore: "" },
  {
    project1: blog,
    title: "Blog About Animals",
    // linkMore: `${(<Home />)}`,
  },
  {
    project1: Quizz,
    title: "Quizz APP",
    linkGit: "https://github.com/OvidiuAl3x/Quizz-App",
  },
  {
    project1: to_do,
    title: "To Do APP",
    linkGit: "https://github.com/OvidiuAl3x/To-Do-App",
  },
  {
    project1: Weather,
    title: "Weather APP",
    linkGit: "https://github.com/OvidiuAl3x/Weather-App",
  },
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
                  <Description
                    props={image.linkMore}
                    button={<button className={style.hoverLink}>More</button>}
                    LgUsed={image.LgUsed}
                  />
                ) : null}
                {/* {image.linkMore ? (
                  <a
                    href={image.linkMore}
                    className={style.hoverLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    More
                  </a>

                ) : null} */}

                {image.linkGit ? (
                  <a
                    href={image.linkGit}
                    className={style.hoverLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub className="mr-2" />
                    Code
                  </a>
                ) : null}
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
