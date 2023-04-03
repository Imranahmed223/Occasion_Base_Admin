import React from "react";
import "./Customer.scss";

const Customer = () => {
  return (
    <div className="customer_main_div">
      <div className="customer_sub_main_div">
        <div className="customer_sub_main_div_search">
          <input type="text" />
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
    </div>
  );
};

export default Customer;
