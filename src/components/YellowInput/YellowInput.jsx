import React from "react";
import "./YellowInput.scss";
import { ErrorMessage, useField } from "formik";
const YellowInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor="" className="yellow-form-label">
        {label}
      </label>
      <input
        // placeholder={label}
        type="text"
        className={`yellow-form-input ${
          meta.touched && meta.error && "is-invalid"
        }`}
        {...field}
        {...props}
        autoComplete="off"
      />

      <ErrorMessage
        component="div"
        name={field.name}
        className="yellow-form-error"
      />

    </>
  );
};

export default YellowInput;
