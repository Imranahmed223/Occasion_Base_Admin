import React, { useState } from "react";
import "./VenderForms.scss";
import { acceptedform, holdform, newform, rejectedform } from "../../assests";
import Grid from "@mui/material/Grid";
import { profile1 } from "./../../assests";
import { useNavigate } from "react-router-dom";

const VenderForms = () => {
  const navigate = useNavigate();
  const [tab1, setTab1] = useState(true);
  const [tab2, setTab2] = useState(false);
  const [tab3, setTab3] = useState(false);
  const [tab4, setTab4] = useState(false);
  const [bgColor, setBgColor] = useState(true);

  const listArray = [
    {
      image: profile1,
      name: "Robert Hill",
    },
    {
      image: profile1,
      name: "Robert Hill",
    },
    {
      image: profile1,
      name: "Robert Hill",
    },
    {
      image: profile1,
      name: "Robert Hill",
    },
    {
      image: profile1,
      name: "Robert Hill",
    },
    {
      image: profile1,
      name: "Robert Hill",
    },
    {
      image: profile1,
      name: "Robert Hill",
    },
    {
      image: profile1,
      name: "Robert Hill",
    },
    {
      image: profile1,
      name: "Robert Hill",
    },
  ];

  const handleTab1 = () => {
    setTab1(true);
    setTab2(false);
    setTab3(false);
    setTab4(false);
  };

  const handleTab2 = () => {
    setTab1(false);
    setTab2(true);
    setTab3(false);
    setTab4(false);
  };
  const handleTab3 = () => {
    setTab1(false);
    setTab2(false);
    setTab3(true);
    setTab4(false);
  };
  const handleTab4 = () => {
    setTab1(false);
    setTab2(false);
    setTab3(false);
    setTab4(true);
  };
  return (
    <>
      <div className="venderform">
        <div className="venderform-container">
          <div className="venderform-container-cards">
            <div onClick={() => handleTab1()}>
              <FormsCard icon={newform} text="New" bgColor={tab1 && bgColor} />
            </div>
            <div onClick={() => handleTab2()}>
              <FormsCard
                icon={acceptedform}
                text="Accepted"
                bgColor={tab2 && bgColor}
              />
            </div>
            <div onClick={() => handleTab3()}>
              <FormsCard
                icon={rejectedform}
                text="Rejected"
                bgColor={tab3 && bgColor}
              />
            </div>
            <div onClick={() => handleTab4()}>
              <FormsCard
                icon={holdform}
                text="Hold"
                bgColor={tab4 && bgColor}
              />
            </div>
          </div>
          <div className="venderform-container-user"></div>
        </div>
      </div>
      {tab1 ? (
        <>
          <p className="vendor_application_info_heading">New Forms</p>
          <br />
          <Grid container>
            {listArray.map((data, ind) => {
              return (
                <Grid
                  item
                  xs={6}
                  sm={6}
                  md={4}
                  lg={4}
                  key={ind}
                  onClick={() => navigate("/acceptRejectForm")}
                >
                  <div className="vendor_application_info_container">
                    <img
                      src={data.image}
                      alt="profile"
                      className="vendor_application_info_container_image"
                    />
                    <h1 className="vendor_application_info_container_heading">
                      {data.name}
                    </h1>
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </>
      ) : tab2 ? (
        <>
          <p className="vendor_application_info_heading">Accepted Forms</p>
          <br />
          <Grid container className="vendor_application_info_main_container">
            {listArray.map((data, ind) => {
              return (
                <Grid item xs={6} sm={6} md={4} lg={4} key={ind}>
                  <div className="vendor_application_info_container">
                    <img
                      src={data.image}
                      alt="profile"
                      className="vendor_application_info_container_image"
                    />
                    <h1 className="vendor_application_info_container_heading">
                      {data.name}
                    </h1>
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </>
      ) : tab3 ? (
        <>
          <p className="vendor_application_info_heading">Rejected Forms</p>
          <br />
          <Grid container className="vendor_application_info_main_container">
            {listArray.map((data, ind) => {
              return (
                <Grid item xs={6} sm={6} md={4} lg={4} key={ind}>
                  <div className="vendor_application_info_container">
                    <img
                      src={data.image}
                      alt="profile"
                      className="vendor_application_info_container_image"
                    />
                    <h1 className="vendor_application_info_container_heading">
                      {data.name}
                    </h1>
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </>
      ) : tab4 ? (
        <>
          <p className="vendor_application_info_heading">Hold Forms</p>
          <br />
          <Grid container className="vendor_application_info_main_container">
            {listArray.map((data, ind) => {
              return (
                <Grid item xs={6} sm={6} md={4} lg={4} key={ind}>
                  <div className="vendor_application_info_container">
                    <img
                      src={data.image}
                      alt="profile"
                      className="vendor_application_info_container_image"
                    />
                    <h1 className="vendor_application_info_container_heading">
                      {data.name}
                    </h1>
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default VenderForms;

const FormsCard = ({ icon, text, bgColor }) => {
  return (
    <>
      <div
        className="formscard"
        style={{
          backgroundColor: bgColor ? "#FFC841" : "",
          cursor: "pointer",
        }}
      >
        <div className="formscard-container">
          <div className="formscard-container-logo">
            <img src={icon} alt="icon" />
          </div>
          <div className="formscard-container-content">
            <p>{text}</p>
            <p>Forms</p>
          </div>
        </div>
      </div>
    </>
  );
};

const UserCard = ({ image, name }) => {
  return (
    <>
      <div className="user">
        <div className="user-container">
          <div className="user-container-logo">
            <img src={image} alt="icon" />
          </div>
          <div className="user-container-content">
            <p>{name}</p>
          </div>
        </div>
      </div>
    </>
  );
};
