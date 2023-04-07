import React from "react";
import "./Review.scss";
import { backArrow } from "./../../assests";

const Review = () => {
  return (
    <div>
      <div className="review_container_heading">
        <img src={backArrow} alt="backArrow" />
        <p>Back</p>
      </div>
      <div className="review_container_input">
        <p
          className="review_container_input_heading"
          style={{ marginBottom: "1rem" }}
        >
          Add Review
        </p>
        <br />
        <div>
          <label>Name of customer</label>
          <br />
          <input type="text" />
        </div>
        <div className="review_container_input_box">
          <label>How long ago was review submitted?</label>
          <br />
          <input type="text" />
        </div>
        <div className="review_container_input_box">
          <label>Review</label>
          <br />
          <textarea className="review_container_input_textarea"></textarea>
        </div>
        <div className="review_container_btn">
          <button className="review_container_btn_txt">Save</button>
        </div>
      </div>
    </div>
  );
};

export default Review;
