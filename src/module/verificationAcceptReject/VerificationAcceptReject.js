import React, { useState } from "react";
import "./VerficationAcceptReject.scss";
import { verificationAccpetReject } from "./../../assests";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "48%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 420,
  height: 430,
  bgcolor: "background.paper",
  border: "1px solid #FFC841",
  borderRadius: "4rem",
  boxShadow: 24,
  p: 4,
};

const style1 = {
  position: "absolute",
  top: "48%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  height: 250,
  bgcolor: "background.paper",
  border: "1px solid #FFC841",
  borderRadius: "4rem",
  boxShadow: 24,
  p: 4,
};
const VerificationAcceptReject = () => {
  const [btn1, setBtn1] = useState(false);
  const [btn2, setBtn2] = useState(false);
  const [btn3, setBtn3] = useState(true);
  const [open, setOpen] = React.useState(false);
  const [model2, setModel2] = React.useState(false);
  const [model3, setModel3] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleModel2 = () => setModel2(false);
  const handleModel3 = () => setModel3(false);

  const handleBtn1 = () => {
    setBtn1(true);
    setBtn2(false);
    setBtn3(false);
    setModel3(true);
  };

  const handleBtn2 = () => {
    setBtn1(false);
    setBtn2(true);
    setBtn3(false);
    setOpen(true);
  };
  const handleBtn3 = () => {
    setBtn1(false);
    setBtn2(false);
    setBtn3(true);
    setModel2(true);
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="web_modal"
      >
        <Box sx={style}>
          <div className="modal_box">
            <p className="modal_box_typography">Reject Verification</p>
            <textarea
              rows="20"
              cols="40"
              type="text"
              placeholder="provide a reason for rejection"
            />
            <button>Submit</button>
          </div>
        </Box>
      </Modal>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="mobile_modal"
      >
        <Box sx={style1}>
          <div className="modal_box">
            <p className="modal_box_typography">Reject Service</p>
            <textarea
              rows="10"
              cols="30"
              type="text"
              placeholder="provide a reason for rejection"
            />
            <button>Submit</button>
          </div>
        </Box>
      </Modal>
      <Modal
        open={model2}
        onClose={handleModel2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="web_modal"
      >
        <Box sx={style}>
          <div className="modal_box">
            <p className="modal_box_typography">Accept Verification</p>
            <textarea
              rows="20"
              cols="40"
              type="text"
              placeholder="provide a reason for accept"
            />
            <button>Submit</button>
          </div>
        </Box>
      </Modal>

      <Modal
        open={model2}
        onClose={handleModel2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="mobile_modal"
      >
        <Box sx={style1}>
          <div className="modal_box">
            <p className="modal_box_typography">Accept Service</p>
            <textarea
              rows="10"
              cols="30"
              type="text"
              placeholder="provide a reason for accept"
            />
            <button>Submit</button>
          </div>
        </Box>
      </Modal>

      <Modal
        open={model3}
        onClose={handleModel3}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="web_modal"
      >
        <Box sx={style}>
          <div className="modal_box">
            <p className="modal_box_typography">Hold Verification</p>
            <textarea
              rows="20"
              cols="40"
              type="text"
              placeholder="provide a reason for hold"
            />
            <button>Submit</button>
          </div>
        </Box>
      </Modal>

      <Modal
        open={model3}
        onClose={handleModel3}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="mobile_modal"
      >
        <Box sx={style1}>
          <div className="modal_box">
            <p className="modal_box_typography">Hold Service</p>
            <textarea
              rows="10"
              cols="30"
              type="text"
              placeholder="provide a reason for hold"
            />
            <button>Submit</button>
          </div>
        </Box>
      </Modal>
      <div className="verification_accept_reject_container">
        <div className="verification_accept_reject_container_left">
          <h3>Name</h3>
          <h2>Name</h2>
          <h3>Email</h3>
          <h2>example@gmail.com</h2>
          <h3>Company Name</h3>
          <h2>example@gmail.com</h2>
          <h3>Are you Part time or full time?</h3>
          <h2>Part time</h2>
          <h3>Street Address</h3>
          <h2>57th st, NYC, NY</h2>
          <h3>How long have you been working for?</h3>
          <h2>12 months</h2>
          <h3>Do you have any customer testimonials?</h3>
          <h2>Yes</h2>
          <h3>Social Links (Facebook, Insta, Website)</h3>
        </div>
        <div className="verification_accept_reject_container_right">
          <h2>Surname</h2>
          <h3>Sur Name</h3>
          <h2>Town/City</h2>
          <h3>NYC,NY</h3>
          <h2>Type of Business</h2>
          <h3>Party organizer</h3>
        </div>
      </div>
      <div className="verification_accept_reject_container_image_box">
        <h3 className="verification_accept_reject_container_image_heading">
          Add pictures of your store / product
        </h3>
        <div className="verification_accept_reject_image_container">
          <img src={verificationAccpetReject} alt="verificationAccpetReject " />
          <img src={verificationAccpetReject} alt="verificationAccpetReject " />
          <img src={verificationAccpetReject} alt="verificationAccpetReject " />
        </div>
        <div className="verification_accept_reject_btn_container">
          <button
            className="verification_accept_reject_btn_container_button"
            style={{
              backgroundColor: btn1 ? "#FFC841" : "white",
              border: btn1 ? "3px solid #FFC841" : "none",
              cursor: "pointer",
            }}
            onClick={() => handleBtn1()}
          >
            Hold
          </button>
          <button
            className="verification_accept_reject_btn_container_button"
            style={{
              backgroundColor: btn2 ? "#FFC841" : "white",
              border: btn2 ? "3px solid #FFC841" : "none",
              cursor: "pointer",
            }}
            onClick={() => handleBtn2()}
          >
            Reject
          </button>
          <button
            className="verification_accept_reject_btn_container_button"
            style={{
              backgroundColor: btn3 ? "#FFC841" : "white",
              border: btn3 ? "3px solid #FFC841" : "none",
              cursor: "pointer",
            }}
            onClick={() => handleBtn3()}
          >
            Accept
          </button>
        </div>
      </div>
    </>
  );
};

export default VerificationAcceptReject;
