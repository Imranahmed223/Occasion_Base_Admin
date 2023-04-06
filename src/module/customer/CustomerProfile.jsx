import React from "react";
import { profile, verified } from "./../../assests";

const CustomerProfile = () => {
  return (
    <>
      <div className="customer_profile_container">
        <div className="customer_profile_container_img">
          <img
            src={profile}
            alt="profile"
            className="customer_profile_container_img_info"
          />
          <p className="customer_profile_container_img_heading">Customer</p>
          <img
            src={verified}
            alt="verified"
            className="customer_profile_container_img_verified"
          />
        </div>
        <div className="customer_profile_container_btn">
          <button className="customer_profile_container_btn1">Message</button>
          <button>Delete Account</button>
        </div>
      </div>
      <div className="customer_profile_container_service">
        <div className="customer_profile_container_service_info">
          <p className="customer_profile_container_service_info_heading">
            Email
          </p>
          <p className="customer_profile_container_service_info_sub_heading">
            Coffee.Inc@gmail.com
          </p>
          <p className="customer_profile_container_service_info_heading">
            Phone
          </p>
          <p className="customer_profile_container_service_info_sub_heading">
            +1 4512 642 656
          </p>
          <p className="customer_profile_container_service_info_heading">
            Address
          </p>
          <p className="customer_profile_container_service_info_sub_heading">
            57th St. NYC, NY, USA
          </p>
          <p className="customer_profile_container_service_info_heading">
            Date Joined
          </p>
          <p className="customer_profile_container_service_info_sub_heading">
            16th February 2023
          </p>
        </div>
      </div>
    </>
  );
};

export default CustomerProfile;
