import React from "react";
import "./VisitChart.scss";

const VisitChart = ({ title, count, img }) => {
  return (
    <>
      <div className="dashboard">
        <div className="dashboard-container">
          <div className="dashboard-container-left"></div>
          <div className="dashboard-container-right">
            <div className="payment">
              <div className="payment-container">
                <p>{title}</p>
                <h1>{count}</h1>
                <img src={img} alt="wave" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VisitChart;
