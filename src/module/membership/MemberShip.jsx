import React from "react";
import { promo, deleteIcon, editIcon } from "./../../assests";
import "./MemberShip.scss";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

const MemberShip = () => {
  const navigate = useNavigate();
  const headingArray = [
    {
      heading: "Basic",
    },
    {
      heading: "Standard",
    },
    {
      heading: "Premium",
    },
    {
      heading: "Premium",
    },
  ];

  return (
    <>
      <div className="membership_heading">
        <p className="membership_heading_package">Membership Package</p>
        <div
          className="membership_heading_promo_code"
          onClick={() => navigate("/showPromoCode")}
        >
          <img src={promo} alt="promo" />
          <p>Promo Codes</p>
        </div>
      </div>
      <Grid container>
        {headingArray.map((data, ind) => {
          return (
            <Grid item xs={6} sm={6} md={3} lg={3} key={ind}>
              <div className="membership_card">
                <div className="membership_card_box">
                  <div className="membership_card_box_heading">
                    <p>{data.heading}</p>
                  </div>
                </div>
                <div className="membership_card_list">
                  <p>Sample text</p>
                  <div className="membership_card_list_icons">
                    <img src={deleteIcon} alt="deleteIcon" />
                    <img src={editIcon} alt="editIcon" />
                  </div>
                </div>
                <div className="membership_card_list">
                  <p>Sample text</p>
                  <div className="membership_card_list_icons">
                    <img src={deleteIcon} alt="deleteIcon" />
                    <img src={editIcon} alt="editIcon" />
                  </div>
                </div>
                <div className="membership_card_list">
                  <p>Sample text</p>
                  <div className="membership_card_list_icons">
                    <img src={deleteIcon} alt="deleteIcon" />
                    <img src={editIcon} alt="editIcon" />
                  </div>
                </div>
                <div className="membership_card_list">
                  <p>Sample text</p>
                  <div className="membership_card_list_icons">
                    <img src={deleteIcon} alt="deleteIcon" />
                    <img src={editIcon} alt="editIcon" />
                  </div>
                </div>
                <div className="membership_card_box1">
                  <div className="membership_card_box1_heading">
                    <div className="membership_card_box1_heading_btn">
                      <p>$100</p>
                      <img src={editIcon} alt="deleteIcon" />
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default MemberShip;
