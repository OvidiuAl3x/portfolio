import React, { useEffect, useRef, useState } from "react";
import Popup from "reactjs-popup";
import { AiOutlineClose } from "react-icons/ai";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Description = ({ button, item }) => {
  const { languageUsed, descriptionProject, slide } = item;

  const [maxHeight, setMaxHeight] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const updateMaxHeight = () => {
      const sliderInnerContainer = sliderRef.current?.innerSlider?.list;

      if (sliderInnerContainer) {
        const slides = Array.from(sliderInnerContainer.children);

        const maxHeight = slides.reduce((max, slide) => {
          const slideHeight = slide.offsetHeight;
          return slideHeight > max ? slideHeight : max;
        }, 0);

        setMaxHeight(maxHeight);
      }
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

  useEffect(() => {
    document.body.style.overflow = "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handlePopupOpen = () => {
    document.body.style.overflow = "hidden";
  };

  const handlePopupClose = () => {
    document.body.style.overflow = "auto";
  };

  return (
    <Popup
      trigger={button}
      position={"right center"}
      modal
      closeOnDocumentClick
      onOpen={handlePopupOpen}
      onClose={handlePopupClose}
    >
      {(close) => (
        <div className="bg-emerald-500 p-3 rounded-lg animate-opacity m-2">
          <AiOutlineClose
            className="text-2xl cursor-pointer ml-auto hover:scale-125 bg-black text-emerald-300 rounded-full"
            onClick={close}
          />
          {slide && (
            <div className="p-4 py-6 w-[23em] md:w-[40em] lg:w-auto">
              <Slider {...sliderSettings} ref={sliderRef}>
                {slide.map((slideItem, index) => (
                  <div key={index} style={slideStyle}>
                    <p className="backdrop-blur-md bg-black/100 rounded-full px-2 py-1 text-emerald-300 w-fit my-2">
                      {slideItem.title}
                    </p>
                    <img
                      src={slideItem.img}
                      alt={slideItem.title}
                      className="w-full h-auto"
                      style={{ maxWidth: "100%" }}
                    />
                    {slideItem.descriptionImage ? (
                      <div className="mt-2">
                        <h1 className="font-bold text-lg">Pages Description</h1>
                        <p>{slideItem.descriptionImage}</p>
                      </div>
                    ) : null}
                  </div>
                ))}
              </Slider>
            </div>
          )}
          <p>
            <strong>Languages Used: </strong>
            {languageUsed}
          </p>

          <h1 className="font-bold text-lg">Short Description</h1>
          <p>{descriptionProject}</p>
        </div>
      )}
    </Popup>
  );
};

export default Description;
