import React from "react";
import "./CreateEvent.scss";
// Packages

import { Formik, Form } from "formik";
import * as Yup from "yup";

import FormInput from "../../../components/FormInput/FormInput";
import FormText from "../../../components/FormInput/FormText";
import plus from "../../../assests/plus.svg";
const CreateEvent = () => {
  const validate = Yup.object({
    name: Yup.string()
      .min(2, "Name must be 2 character")
      .max(20, "Must be 25 characters or less")
      .required("Required"),
    occasion: Yup.string()
      .min(2, "Occasion must be 2 character")
      .max(20, "Must be 25 characters or less")
      .required("Required"),
    service_type: Yup.string()
      .min(2, "Service must be 2 character")
      .max(20, "Must be 25 characters or less")
      .required("Required"),
    people: Yup.number()
      .min(2, "Number of people must be 2 character")
      .max(20, "Must be 25 characters or less")
      .required("Required"),
    v_name: Yup.string()
      .min(2, "Vender name must be 2 character")
      .max(20, "Must be 25 characters or less")
      .required("Required"),
    price: Yup.string()
      .min(2, "Name must be 2 character")
      .max(20, "Must be 25 characters or less")
      .required("Required"),
    // email: Yup.string().email("Email is invalid").required("Required"),
    // message: Yup.string()
    //   .min(6, "Must be at least 6 charaters")
    //   .max(100, "Must be 100 character or less.")
    //   .required("Required"),
  });

  return (
    <>
      <div className="createevent">
        <div className="save-button">
          <button>
            <img src={plus} alt="pluc" />
            save
          </button>
        </div>

        <div className="createevent-container">
          <div className="createevent-container-left">
            <Formik
              initialValues={{
                name: "",
                occasion: "",
                service_type: "",
                people: "",
                v_name: "",
                price: "",
              }}
              validationSchema={validate}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              {(formik) => (
                <div>
                  <Form className="contact-form">
                    <FormInput label="Full Name" name="name" type="text" />
                    <FormInput label="Occasion" name="occasion" type="text" />
                    <FormInput
                      label="Type of Service"
                      name="service_type"
                      type="text"
                    />
                    <FormInput
                      label="how many poeple can this cater for?"
                      name="people"
                      type="text"
                    />
                    <FormInput label="Vendor Name" name="v_name" type="text" />
                    <FormInput label="Price Range" name="price" type="text" />

                    {/* <FormInput
                      label="Email Address"
                      name="email"
                      type="email"
                    /> */}
                    <FormText label="Message" name="message" />
                    {/* <div className="contactform-btn">
                      <center>
                        <BlueBtn type="submit" text="Submit" />
                      </center>
                    </div> */}
                  </Form>
                </div>
              )}
            </Formik>




            
          </div>
          <div className="createevent-container-right"></div>
        </div>
      </div>
    </>
  );
};

export default CreateEvent;
