import React from "react";
import "./Settings.scss";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

import { FormInput, InputField } from "../../components";

const Settings = () => {
  const editvalidation = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.number(),
  });
  return (
    <>
      <div className="settings">
        <div className="settings-container">
          <div className="settings-container-edit">
            <center>
              <h3>Edit Information</h3>
            </center>
            <div className="settings-container-edit-form">
              <Formik
                initialValues={{
                  email: "",
                  content: "",
                }}
                validationSchema={editvalidation}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                {(formik) => (
                  <div className="login-form">
                    <Form>
                      {/* <YellowInput
                        label="Enter your Email"
                        name="email"
                        type="email"
                      />

                      <YellowInput
                        label="Password"
                        name="password"
                        type="password"
                      /> */}
                      <InputField name="email" type="email" />
                      <InputField name="email" type="email" />

                      <div className="login-forget">
                        <Link to="/">forgot password ?</Link>
                      </div>

                      <div className="login-form-btn">
                        {/* <Button text="login" type="submit" /> */}
                      </div>
                    </Form>
                  </div>
                )}
              </Formik>
            </div>
          </div>
          <div className="settings-container-password">
            <center>
              <h3>Change Password</h3>
            </center>
            <div className="settings-container-password-form"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
