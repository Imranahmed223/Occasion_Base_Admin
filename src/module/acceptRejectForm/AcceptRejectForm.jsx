import React from "react";
import "./AcceptRejectForm.scss";
import { vendorFormRightImage } from "./../../assests";

const AcceptRejectForm = () => {
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
          <button className="accept_reject_form_container_right_box_button_button2">
            Hold
          </button>
          <button className="accept_reject_form_container_right_box_button_button3">
            Reject
          </button>
          <button className="accept_reject_form_container_right_box_button_button1">
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default AcceptRejectForm;
