import React from "react";
import "./PromoCode.scss";
import { backArrow } from "./../../assests";

const AddPromoCode = () => {
  return (
    <>
      <div className="add_promo_container_heading">
        <img src={backArrow} alt="backArrow" />
        <p>Back</p>
      </div>
      <div className="add_promo_container_box">
        <p className="add_promo_container_box_label">Promo Code Name</p>
        <input type="text" className="add_promo_container_box_input_1" />
        <p className="add_promo_container_box_label">Discount (%)</p>
        <span className="add_promo_container_box_span_1"> - </span>
        <input type="text" className="add_promo_container_box_input_2" />{" "}
        <span className="add_promo_container_box_span_2"> + </span>
        <p className="add_promo_container_box_label">Expires on: (dd/mm/yy)</p>
        <div>
          <input type="text" className="add_promo_container_box_input_3" />
          <input type="text" className="add_promo_container_box_input_3" />
          <input type="text" className="add_promo_container_box_input_3" />
        </div>
        <div className="add_promo_container_btn">
          <button className="add_promo_container_btn_txt">Save</button>
        </div>
      </div>
    </>
  );
};

export default AddPromoCode;
