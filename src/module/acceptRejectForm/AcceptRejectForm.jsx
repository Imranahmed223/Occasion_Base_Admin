import React, { useState } from "react";
import "./AcceptRejectForm.scss";
import { vendorFormRightImage } from "./../../assests";
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
  height: 200,
  bgcolor: "background.paper",
  border: "1px solid #FFC841",
  borderRadius: "4rem",
  boxShadow: 24,
  p: 4,
};
const AcceptRejectForm = () => {
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
      >
        <Box md={style} lg={style} sm={style1} sx={style} className="web_modal">
          <div className="modal_box">
            <p className="modal_box_typography">Reject Service</p>
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
        open={model2}
        onClose={handleModel2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="modal_box">
            <p className="modal_box_typography">Accept Service</p>
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
        open={model3}
        onClose={handleModel3}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="modal_box">
            <p className="modal_box_typography">Hold Service</p>
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
      <div className="accept_reject_form_container">
        <div className="accept_reject_form_container_left_box">
          <h3>Display Name</h3>
          <h2>Display Name</h2>
          <h3>Occasion</h3>
          <h2>Occasion</h2>
          <h3>Types of Service</h3>
          <h2>Types of Service</h2>
          <h3>how many poeple can this cater for?</h3>
          <h2>100</h2>
          <h3>Vendor Name</h3>
          <h2>Michael Scott</h2>
          <h3>Price Range</h3>
          <h2>$1000</h2>
          <h3>Description</h3>
          <h2>Lorem Ipsum</h2>
        </div>
        <div className="accept_reject_form_container_right_box">
          <img src={vendorFormRightImage} alt="vendorFormRightImage" />
          <div className="accept_reject_form_container_right_box_button">
            <button
              className="accept_reject_form_container_right_box_button_btn"
              style={{
                backgroundColor: btn1 ? "#FFC841" : "inherit",
                border: btn1 ? "3px solid #FFC841" : "none",
                cursor: "pointer",
              }}
              onClick={() => handleBtn1()}
            >
              Hold
            </button>
            <button
              className="accept_reject_form_container_right_box_button_btn"
              style={{
                backgroundColor: btn2 ? "#FFC841" : "inherit",
                border: btn2 ? "3px solid #FFC841" : "none",
                cursor: "pointer",
              }}
              onClick={() => handleBtn2()}
            >
              Reject
            </button>
            <button
              className="accept_reject_form_container_right_box_button_btn"
              style={{
                backgroundColor: btn3 ? "#FFC841" : "inherit",
                border: btn3 ? "3px solid #FFC841" : "none",
                cursor: "pointer",
              }}
              onClick={() => handleBtn3()}
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AcceptRejectForm;
