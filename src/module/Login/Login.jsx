import React from "react";
import "./Login.scss";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { logo, loginImage } from "../../assests";
import { Link } from "react-router-dom";

import { YellowInput, Button } from "../../components";

const Login = () => {
  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <>
      <div className="login">
        <div className="login-container">
          <div className="login-container-left">
            <img src={logo} alt="logo" />
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={validate}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              {(formik) => (
                <div className="login-form">
                  <Form autoComplete="off">
                    <YellowInput
                      label="Enter your Email"
                      name="email"
                      type="email"
                    />

                    <YellowInput
                      label="Enter Password"
                      name="password"
                      type="password"
                    />
                    <div className="login-forget">
                      <Link to="/">forgot password ?</Link>
                    </div>

                    <div className="login-form-btn">
                      <Button text="login" type="submit" />
                    </div>
                  </Form>
                </div>
              )}
            </Formik>
          </div>
          <div className="login-container-right">
            <img src={loginImage} alt="Sign In" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
