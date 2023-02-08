import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LayOut from "./commonComponents/LayOut/LayOut";
// import Login from "./module/Login/Login";

import { Login } from "./module";

const Routess = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="" element={<Login />} />
          <Route path="" element={<LayOut />}>
            {/* <Route path="/dashboard" element={<DashBoard />}></Route>
            <Route path="/create_event" element={<CreateEvent />}></Route>
            <Route path="/settings" element={<Settings />}></Route> */}
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default Routess;
