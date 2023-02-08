import React from "react";
import "./VenderForms.scss";
import { acceptedform, holdform, newform, rejectedform } from "../../assests";

const VenderForms = () => {
  return (
    <>
      <div className="venderform">
        <div className="venderform-container">
          <div className="venderform-container-cards">
            <FormsCard icon={newform} text="New" />
            <FormsCard icon={acceptedform} text="Accepted" />
            <FormsCard icon={rejectedform} text="Rejected" />
            <FormsCard icon={holdform} text="Hold" />
          </div>
          <div className="venderform-container-user"></div>
        </div>
      </div>
    </>
  );
};

export default VenderForms;

const FormsCard = ({ icon, text }) => {
  return (
    <>
      <div className="formscard">
        <div className="formscard-container">
          <div className="formscard-container-logo">
            <img src={icon} alt="icon" />
          </div>
          <div className="formscard-container-content">
            <p>{text}</p>
            <p>Forms</p>
          </div>
        </div>
      </div>
    </>
  );
};

const UserCard = ({ image, name }) => {
  return (
    <>
      <div className="user">
        <div className="user-container">
          <div className="user-container-logo">
            <img src={image} alt="icon" />
          </div>
          <div className="user-container-content">
            <p>{name}</p>
          </div>
        </div>
      </div>
    </>
  );
};
