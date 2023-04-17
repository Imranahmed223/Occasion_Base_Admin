import React from "react";
import styles from "./LeftCard.module.css";

const LeftCard = () => {
  let EMembership = {
    BRONZE: "Bronze",
    SILVER: "Silver",
    GOLD: "Gold",
    PLATINUM: "Platinum",
  };
  const generateEntries = (count) => {
    let entries = [];
    for (let i = 0; i < count; i++) {
      let randomNumber = Math.floor(Math.random() * 4) + 1;
      let membership = EMembership;
      if (randomNumber === 1) {
        membership = EMembership.BRONZE;
      } else if (randomNumber === 2) {
        membership = EMembership.SILVER;
      } else if (randomNumber === 3) {
        membership = EMembership.GOLD;
      } else {
        membership = EMembership.PLATINUM;
      }
      entries.push({ date: "04-03-23", membership, vendor: "Vendor Business" });
    }
    return entries;
  };

  const data = generateEntries(17);
  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <th>Vendor</th>
            <th>Date</th>
            <th>Membership</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={index}>
              <td>{entry.vendor}</td>
              <td>{entry.date}</td>
              <td>{entry.membership}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeftCard;
