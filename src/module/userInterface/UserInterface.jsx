import React from "react";
import "./UserInterface.scss";
import {
  firstUserInterfaceImage,
  secondUserInterfaceImage,
  thirdUserInterfaceImage,
} from "./../../assests";

const UserInterface = () => {
  return (
    <div className="userInterface_main">
      <div>
        <label>Text Edit</label>
        <br />
        <input />
      </div>
      <div className="userInterface_main_input">
        <label>Paste Video Link</label>
        <br />
        <input />
      </div>
      <div className="userInterface_main_input">
        <label>Upload Photos</label>
        <br />
        <div className="userInterface_main_images">
          <img src={firstUserInterfaceImage} alt="image" />
          <img src={secondUserInterfaceImage} alt="image" />
          <img src={thirdUserInterfaceImage} alt="image" />
          <br></br>
          <button>Upload From Device</button>
        </div>
      </div>
    </div>
  );
};

export default UserInterface;
