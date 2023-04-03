import React from "react";
import "./Vendor.scss";
import Grid from "@mui/material/Grid";
import { profile } from "./../../assests";
import { BiSearch } from "react-icons/bi";

const Vendor = () => {
  const vendorArray = [
    {
      image: profile,
      name: "Vendor",
    },
    {
      image: profile,
      name: "Vendor",
    },
    {
      image: profile,
      name: "Vendor",
    },
    {
      image: profile,
      name: "Vendor",
    },
    {
      image: profile,
      name: "Vendor",
    },
    {
      image: profile,
      name: "Vendor",
    },
    {
      image: profile,
      name: "Vendor",
    },
    {
      image: profile,
      name: "Vendor",
    },
    {
      image: profile,
      name: "Vendor",
    },
  ];
  return (
    <div className="vendor_main_div">
      <div className="vendor_sub_main_div">
        <div className="vendor_sub_main_div_search">
          <input
            type="text"
            placeholder="Search"
            className="vendor_sub_main_div_search_input"
          />
          <BiSearch className="vendor_sub_main_div_search_icon" />
        </div>
        <div className="vendor_sub_main_div_count">
          <div>
            <p>Active users</p>
          </div>
          <div>
            <p>1567</p>
          </div>
        </div>
      </div>
      <Grid container>
        {vendorArray.map((data, ind) => {
          return (
            <Grid item xs={6} sm={6} md={4} lg={4} key={ind}>
              <div className="vendor_info_container">
                <img
                  src={data.image}
                  alt="profile"
                  className="vendor_info_container_image"
                />
                <h1 className="vendor_info_container_heading">{data.name}</h1>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Vendor;
