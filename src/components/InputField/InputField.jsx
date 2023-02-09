import React from "react";
// import "./FormInput.scss";
import "./InputField.scss";
import { ErrorMessage, useField } from "formik";
const FormInput = ({ ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <div className="forminput-container" style={{ margin: "2rem" }}>
        <input
          type="text"
          className={`form-input ${meta.touched && meta.error && "is-invalid"}`}
          {...field}
          {...props}
          autoComplete="off"
        />
        <ErrorMessage
          component="div"
          name={field.name}
          className="form-error"
        />
      </div>
    </>
  );
};

export default FormInput;
