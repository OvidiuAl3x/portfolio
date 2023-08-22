import React from "react";
import Popup from "reactjs-popup";
import { ImageSlider } from "./ImgSlider";
import { AiOutlineClose } from "react-icons/ai";

const Description = ({ props, button, LgUsed, slide }) => {
  return (
    <Popup
      trigger={button}
      position={"right center"}
      modal
      closeOnDocumentClick
    >
      {(close) => (
        <div className="bg-emerald-500 p-3 rounded-lg animate-opacity m-2 md:w-[50em]">
          <AiOutlineClose
            className="text-2xl cursor-pointer ml-auto hover:scale-125 bg-black text-emerald-300 rounded-full"
            onClick={close}
          />

          <h1 className="font-bold text-lg">Short Description</h1>
          <div className="text-md leading-6">{props}</div>

          <p>
            <strong>Languages Used: </strong>
            {LgUsed}
          </p>

          {slide ? <ImageSlider slide={slide} /> : null}
        </div>
      )}
    </Popup>
  );
};

export default Description;
