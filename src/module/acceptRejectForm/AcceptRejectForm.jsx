import React, { useState } from "react";
import "./AcceptRejectForm.scss";
import { vendorFormRightImage } from "./../../assests";

const AcceptRejectForm = () => {
  const [btn1, setBtn1] = useState(false);
  const [btn2, setBtn2] = useState(false);
  const [btn3, setBtn3] = useState(true);

  const handleBtn1 = () => {
    setBtn1(true);
    setBtn2(false);
    setBtn3(false);
  };

  const handleBtn2 = () => {
    console.log("btn2 is", btn2);
    console.log("btn1 is", btn1);
    console.log("btn3 is", btn3);
    setBtn1(false);
    setBtn2(true);
    setBtn3(false);
  };
  const handleBtn3 = () => {
    setBtn1(false);
    setBtn2(false);
    setBtn3(true);
  };
  return (
    <div className="accept_reject_form_container">
      <div className="accept_reject_form_container_left_box">
        <h3>Display Name</h3>
        <h2>Display Name</h2>
        <h3>Occasion</h3>
        <h2>Occasion</h2>
        <h3>Types of Service</h3>
        <h2>Types of Service</h2>
        <h3>how many poeple can this cater for?</h3>
        <h2>100</h2>
        <h3>Vendor Name</h3>
        <h2>Michael Scott</h2>
        <h3>Price Range</h3>
        <h2>$1000</h2>
        <h3>Description</h3>
        <h2>Lorem Ipsum</h2>
      </div>
      <div className="accept_reject_form_container_right_box">
        <img src={vendorFormRightImage} alt="vendorFormRightImage" />
        <div className="accept_reject_form_container_right_box_button">
          <button
            className="accept_reject_form_container_right_box_button_btn"
            style={{
              backgroundColor: btn1 && "#FFC841",
              border: btn1 ? "3px solid #FFC841" : "none",
              cursor: "pointer",
            }}
            onClick={() => handleBtn1()}
          >
            Hold
          </button>
          <button
            className="accept_reject_form_container_right_box_button_btn"
            style={{
              backgroundColor: btn2 && "#FFC841",
              border: btn2 ? "3px solid #FFC841" : "none",
              cursor: "pointer",
            }}
            onClick={() => handleBtn2()}
          >
            Reject
          </button>
          <button
            className="accept_reject_form_container_right_box_button_btn"
            style={{
              backgroundColor: btn3 && "#FFC841",
              border: btn3 ? "3px solid #FFC841" : "none",
              cursor: "pointer",
            }}
            onClick={() => handleBtn3()}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default AcceptRejectForm;
