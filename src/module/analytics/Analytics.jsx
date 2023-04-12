import React from "react";
import "./Analytics.scss";
import line from "./../../assests/line.png";

const Analytics = () => {
  return (
    <div className="analytics_main">
      <div className="analytics_main_services">
        <div className="analytics_main_services_box">
          <center className="analytics_main_services_box_heading">
            Top 5 Customers
          </center>
          <ol className="analytics_main_services_box_list">
            <li>
              <span>Customer number 1</span>
            </li>
            <li>
              <span>Customer number 2</span>
            </li>
            <li>
              <span>Customer number 3</span>
            </li>
            <li>
              <span>Customer number 4</span>
            </li>
            <li>
              <span>Customer number 5</span>
            </li>
          </ol>
        </div>
        <div className="analytics_main_services_box">
          <center className="analytics_main_services_box_heading">
            Top 5 Services
          </center>
          <ol className="analytics_main_services_box_list">
            <li>
              <span>Customer number 1</span>
            </li>
            <li>
              <span>Customer number 2</span>
            </li>
            <li>
              <span>Customer number 3</span>
            </li>
            <li>
              <span>Customer number 4</span>
            </li>
            <li>
              <span>Customer number 5</span>
            </li>
          </ol>
        </div>
        <div className="analytics_main_services_box">
          <center className="analytics_main_services_box_heading">
            Top 5 Vendors
          </center>
          <ol className="analytics_main_services_box_list">
            <li>
              <span>Customer number 1</span>
            </li>
            <li>
              <span>Customer number 2</span>
            </li>
            <li>
              <span>Customer number 3</span>
            </li>
            <li>
              <span>Customer number 4</span>
            </li>
            <li>
              <span>Customer number 5</span>
            </li>
          </ol>
        </div>
      </div>
      <div className="analytics_main_users">
        <div className="analytics_main_users_box">
          <center>
            <p className="analytics_main_users_box_p">
              Users
              <br />
              Today
            </p>
            <h1>1.2 k</h1>
          </center>
        </div>
        <div className="analytics_main_users_box">
          <center>
            <p>
              Users
              <br />
              Weekly
            </p>
            <h1>12 k</h1>
          </center>
        </div>
        <div className="analytics_main_users_box">
          <center>
            <p>
              Users
              <br />
              Monthly
            </p>
            <h1>12 k</h1>
          </center>
        </div>
        <div className="analytics_main_users_box1 analytics_main_users_last_box">
          <center>
            <span>Real time Active Users by channel</span>
            <img src={line} alt="line" width="50%" />
            <p>
              Right
              <br />
              Now
            </p>
            <h1>15</h1>
            <h6 style={{ marginTop: "2rem" }}>Active users on this site</h6>
          </center>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
