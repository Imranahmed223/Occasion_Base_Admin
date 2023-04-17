import React from "react";
import styles from "./BottomCard.module.css";

const BottomCard = () => {
  const genEntries = (count) => {
    const entries = [];
    for (let i = 0; i < count; i++) {
      let amount = Math.floor(Math.random() * 2000) + 1000;
      entries.push({
        amount,
        date: "03-04-23",
        transferredTo: "Paypal",
        vendor: "Vendor Business",
      });
    }
    return entries;
  };

  const data = genEntries(5);
  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <th>Vendor</th>
            <th>Transferred to</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={index}>
              <td>{entry.vendor}</td>
              <td>{entry.transferredTo}</td>
              <td>{entry.date}</td>
              <td>${entry.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BottomCard;
