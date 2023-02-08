import React from "react";
import "./Button.scss";
const Button = ({ text, ...props }) => {
  return (
    <>
      <div className="btn">
        <button {...props}>{text}</button>
      </div>
    </>
  );
};

export default Button;
