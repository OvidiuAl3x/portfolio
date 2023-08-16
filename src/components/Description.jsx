import React from "react";
import Popup from "reactjs-popup";

const Description = ({ props, button, LgUsed }) => {
  return (
    <Popup
      trigger={button}
      position={"right center"}
      modal
      className="bg-black"
      closeOnDocumentClick
    >
      <div className="bg-emerald-500 p-3 rounded-lg animate-opacity m-2">
        <h1 className="font-bold text-lg">Short Description</h1>
        <div className="text-md leading-6">{props}</div>

        <p>
          <strong>Languages Used: </strong>
          {LgUsed}
        </p>
      </div>
    </Popup>
  );
};

export default Description;
