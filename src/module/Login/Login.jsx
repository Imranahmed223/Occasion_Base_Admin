import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { logo } from "../../assests";
import { Link } from "react-router-dom";

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
            <h2>LOGIN</h2>
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
                    <div className="login-forget">
                      <Link to="/">forgot password ?</Link>
                    </div>

                    <div className="login-form-btn">
                      <Button text="Submit" type="submit" />
                    </div>
                  </Form>
                </div>
              )}
            </Formik>
          </div>
          <div className="login-container-right">
            <img src={signimage} alt="Sign Up" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
