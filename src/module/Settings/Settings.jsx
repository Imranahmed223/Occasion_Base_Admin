import React from "react";
import "./Settings.scss";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

import { FormInput, InputField } from "../../components";

const Settings = () => {
  const editvalidation = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    content: Yup.number(),
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
                  <Form>
                    <InputField name="email" type="email" />
                    <InputField name="content" type="number" />

                    <div className="button-for-update-forms">
                      <center>
                        <button>Save</button>
                      </center>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
          <div className="settings-container-password">
            <center>
              <h3>Change Password</h3>
            </center>
            <div className="settings-container-password-form">
              <Formik
                initialValues={{
                  current_password: "",
                  new: "",
                }}
                validationSchema={editvalidation}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                {(formik) => (
                  <Form>
                    <InputField name="email" type="email" />
                    <InputField name="content" type="number" />
                    <InputField name="content" type="number" />
                    <InputField name="content" type="number" />

                    <div className="button-for-update-forms">
                      <center>
                        <button>Save</button>
                      </center>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
