import React from "react";
import "./PromoCode.scss";
import { backArrow, deleteIcon } from "./../../assests";
import { useNavigate } from "react-router-dom";

const ShowPromoCode = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="show_promo_container">
        <div className="show_promo_container_heading">
          <img src={backArrow} alt="backArrow" />
          <p>Back</p>
        </div>
        <div className="show_promo_container_btn">
          <button
            className="show_promo_container_btn_txt"
            onClick={() => navigate("/addPromoCode")}
          >
            New Promo Codes
          </button>
        </div>
      </div>
      <div className="show_promo_list">
        <div className="show_promo_list_menu">
          <p className="show_promo_list_main">Promo Code</p>
          <p className="show_promo_list_sub_menu">Ocassion123</p>
          <p className="show_promo_list_second_menu show_promo_list_main">
            Discount
          </p>
          <p className="show_promo_list_sub_menu">10%</p>
        </div>
        <div>
          <img
            src={deleteIcon}
            alt="deleteIcon"
            className="show_promo_list_image"
          />
        </div>
      </div>

      <div className="show_promo_list">
        <div className="show_promo_list_menu">
          <p className="show_promo_list_main">Promo Code</p>
          <p className="show_promo_list_sub_menu">Ocassion123</p>
          <p className="show_promo_list_second_menu show_promo_list_main">
            Discount
          </p>
          <p className="show_promo_list_sub_menu">10%</p>
        </div>
        <div>
          <img
            src={deleteIcon}
            alt="deleteIcon"
            className="show_promo_list_image"
          />
        </div>
      </div>
    </>
  );
};

export default ShowPromoCode;
