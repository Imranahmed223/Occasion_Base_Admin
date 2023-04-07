import React from "react";
import { profile, verified, service, rating } from "./../../assests";
import Grid from "@mui/material/Grid";

const VendorProfile = () => {
  const isMobile = window.innerWidth <= 768;
  return (
    <>
      <div className="vendor_profile_container">
        <div className="vendor_profile_container_img">
          <img
            src={profile}
            alt="profile"
            className="vendor_profile_container_img_info"
          />
          <p className="vendor_profile_container_img_heading">Vendor</p>
          <img
            src={verified}
            alt="verified"
            className="vendor_profile_container_img_verified"
          />
        </div>
        <div className="vendor_profile_container_btn">
          <button className={`button ${isMobile ? "" : "button-show"}`}>
            Visit Shop
          </button>
          <button className={`button ${isMobile ? "" : "button-show"}`}>
            Message
          </button>
          <button className={`button ${isMobile ? "" : "button-show"}`}>
            Delete Account
          </button>
          <button className={`button1 ${isMobile ? "" : "button-hide"}`}>
            Shop
          </button>
          <button className={`button1 ${isMobile ? "" : "button-hide"}`}>
            Message
          </button>
          <button className={`button1 ${isMobile ? "" : "button-hide"}`}>
            Account
          </button>
        </div>
      </div>
      <div className="vendor_profile_container_service">
        <div className="vendor_profile_container_service_info">
          <p className="vendor_profile_container_service_info_heading">Email</p>
          <p className="vendor_profile_container_service_info_sub_heading">
            Coffee.Inc@gmail.com
          </p>
          <p className="vendor_profile_container_service_info_heading">Phone</p>
          <p className="vendor_profile_container_service_info_sub_heading">
            +1 4512 642 656
          </p>
          <p className="vendor_profile_container_service_info_heading">
            Address
          </p>
          <p className="vendor_profile_container_service_info_sub_heading">
            57th St. NYC, NY, USA
          </p>
          <p className="vendor_profile_container_service_info_heading">
            Date Joined
          </p>
          <p className="vendor_profile_container_service_info_sub_heading">
            16th February 2023
          </p>
        </div>
        <div className="vendor_profile_container_service_images">
          <p>Services</p>
          <Grid conatiner>
            <Grid item lg={6} md={6}>
              <div className="container">
                <img src={service} alt="girls" />
                <div className="top">
                  <h3>price starts from £108/person</h3>
                  <img src={rating} alt="rating" />
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default VendorProfile;
