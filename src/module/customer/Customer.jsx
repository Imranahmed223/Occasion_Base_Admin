import React from "react";
import "./Customer.scss";
import Grid from "@mui/material/Grid";
import { profile } from "./../../assests";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Customer = () => {
  const navigate = useNavigate();
  const customerArray = [
    {
      image: profile,
      name: "Customer",
    },
    {
      image: profile,
      name: "Customer",
    },
    {
      image: profile,
      name: "Customer",
    },
    {
      image: profile,
      name: "Customer",
    },
    {
      image: profile,
      name: "Customer",
    },
    {
      image: profile,
      name: "Customer",
    },
    {
      image: profile,
      name: "Customer",
    },
    {
      image: profile,
      name: "Customer",
    },
    {
      image: profile,
      name: "Customer",
    },
  ];
  return (
    <div className="customer_main_div">
      <div className="customer_sub_main_div">
        <div className="customer_sub_main_div_search">
          <input
            type="text"
            placeholder="Search"
            className="customer_sub_main_div_search_input"
          />
          <BiSearch className="customer_sub_main_div_search_icon" />
        </div>
        <div className="customer_sub_main_div_count">
          <div>
            <p>Active users</p>
          </div>
          <div>
            <p>1567</p>
          </div>
        </div>
      </div>
      <Grid container>
        {customerArray.map((data, ind) => {
          return (
            <Grid item xs={6} sm={6} md={4} lg={4} key={ind}>
              <div
                className="customer_info_container"
                onClick={() => navigate("/customerProfile")}
              >
                <img
                  src={data.image}
                  alt="profile"
                  className="customer_info_container_image"
                />
                <h1 className="customer_info_container_heading">{data.name}</h1>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Customer;
