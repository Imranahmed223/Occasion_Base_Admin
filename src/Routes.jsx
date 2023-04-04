import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LayOut from "./commonComponents/LayOut/LayOut";

import {
  Login,
  DashBoard,
  VenderForms,
  Settings,
  Analytics,
  Customer,
  Faq,
  MemberShip,
  Message,
  UserInterface,
  VerificationRequest,
  Wallet,
  Vendor,
  CustomerProfile,
  VendorProfile,
} from "./module";

const Routess = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="" element={<LayOut />}>
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/vendorService" element={<VenderForms />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/userInterface" element={<UserInterface />} />
            <Route path="/customer" element={<Customer />} />
            <Route path="/vendor" element={<Vendor />} />
            <Route path="/message" element={<Message />} />
            <Route path="/membership" element={<MemberShip />} />
            <Route path="/faq" element={<Faq />} />
            <Route
              path="/verificationRequest"
              element={<VerificationRequest />}
            />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/customerProfile" element={<CustomerProfile />} />
            <Route path="/vendorProfile" element={<VendorProfile />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default Routess;
