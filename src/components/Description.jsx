import React, { useEffect } from "react";
import Popup from "reactjs-popup";
import { AiOutlineClose } from "react-icons/ai";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Description = ({ button, item }) => {
  const { languageUsed, descriptionProject, slide } = item;

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    // Add a class to the body when the popup is open
    document.body.style.overflow = "auto"; // Default value

    return () => {
      // Remove the class when the component is unmounted
      document.body.style.overflow = "auto";
    };
  }, []);

  const handlePopupOpen = () => {
    // Add a class to the body when the popup is open
    document.body.style.overflow = "hidden";
  };

  const handlePopupClose = () => {
    // Remove the class when the popup is closed
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
              <Slider {...sliderSettings}>
                {slide.map((slideItem, index) => (
                  <div key={index}>
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
