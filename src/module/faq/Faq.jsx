import React from "react";
import "./faq.scss";
import { deleteIcon } from "./../../assests";

const Faq = () => {
  return (
    <>
      <div className="faq_container">
        <p className="faq_container_heading">Add FAQ</p>
        <div className="faq_container_input">
          <label>Question</label>
          <br />
          <input type="text" />
        </div>
        <div className="faq_container_input">
          <label>Answer</label>
          <br />
          <textarea></textarea>
        </div>
        <button className="question_button">Save</button>
      </div>
      <table className="faq_table">
        <thead>
          <tr>
            <th colspan="3">Question</th>
            <th colspan="7">Answer</th>
            <th colspan="2"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="3">First Question</td>
            <td colspan="7">First Answer</td>
            <td colspan="2">
              <img src={deleteIcon} alt="image" />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Faq;
