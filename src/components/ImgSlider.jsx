import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { BsDot } from "react-icons/bs";

const style = {
  leftArrow:
    "absolute top-1/2 translate-x-0 -translate-y-1/2 left-[10px] text-[30px] text-emerald-500  bg-black z-[1] cursor-pointer rounded-full",
  rightArrow:
    "absolute top-1/2 translate-x-0 -translate-y-1/2 right-[10px] text-[30px] text-emerald-500  bg-black z-[1] cursor-pointer rounded-full",
};

export const ImageSlider = ({ slide }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slide.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slide.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <>
      <div className="w-full h-[300px] mt-2 mx-auto">
        <div className="h-full relative">
          <AiOutlineArrowLeft
            className={style.leftArrow}
            onClick={goToPrevious}
          />
          <AiOutlineArrowRight
            className={style.rightArrow}
            onClick={goToNext}
          />
          <div
            style={{ backgroundImage: `url(${slide[currentIndex].img})` }}
            className="w-full h-full rounded-xl bg-center bg-cover duration-300"
          ></div>
        </div>
      </div>
      <div className="flex justify-center">
        {slide.map((slide, slideIndex) => (
          <BsDot
            key={slideIndex}
            className="m-[3px] cursor-pointer text-[40px] hover:scale-150"
            onClick={() => goToSlide(slideIndex)}
          />
        ))}
      </div>
    </>
  );
};
