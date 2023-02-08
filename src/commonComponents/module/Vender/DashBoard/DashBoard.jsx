import React from "react";
import "./DashBoard.scss";
import member from "../../../assests/dashboard/member.svg";

const DashBoard = () => {
  return (
    <>
      <div className="dashboard">
        <div className="dashboard-container">
          <div className="dashboard-container-content">
            <div className="dashboard-content">
              <h2>Welcome Back Robert,</h2>
              <div className="dashboard-content-card">
                <TextBox
                  heading="Upcoming Event"
                  number="5"
                  text="View your calender"
                />
                <TextBox
                  heading="My Rating"
                  number="8.6/10"
                  text="See how customers have rated you"
                />
                <TextBox
                  heading="Page Views"
                  number="1,958"
                  text="Monthly Views on your page"
                />
                <ImageBox heading=" Membership" img={member} text="Bronze" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;

const TextBox = ({ heading, number, text }) => {
  return (
    <>
      <div className="textbox">
        <div className="textbox-container">
          <h4>{heading}</h4>
          <h1>{number}</h1>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
};

const ImageBox = ({ heading, img, text }) => {
  return (
    <>
      <div className="imagebox">
        <div className="imagebox-container">
          <h4>{heading}</h4>
          {/* <h1>{number}</h1> */}
          <img src={img} alt="icons" />
          <p>{text}</p>
        </div>
      </div>
    </>
  );
};
