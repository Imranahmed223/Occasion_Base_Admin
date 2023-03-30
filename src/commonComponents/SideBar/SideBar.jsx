import { useState } from "react";
import "./SideBar.scss";
import SideBarMenu from "./SideBarMenu";
import { NavLink } from "react-router-dom";

import { AnimatePresence, motion } from "framer-motion";

import {
  dashboard,
  vendorService,
  analytics,
  userInterface,
  customers,
  vendor,
  message,
  membership,
  settings,
  faq,
  verificationRequest,
  wallet,
  menu,
} from "../../assests";

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: dashboard,
    subRoutes: [],
  },
  {
    path: "/vendorService",
    name: "Vendor Service",
    icon: vendorService,
    subRoutes: [],
  },
  {
    path: "/analytics",
    name: "Analytics",
    icon: analytics,
    exact: true,
    subRoutes: [],
  },
  {
    path: "/userInterface",
    name: "User Interface features",
    icon: userInterface,
    exact: true,
    subRoutes: [],
  },
  {
    path: "/customer",
    name: "Customer",
    icon: customers,
    exact: true,
    subRoutes: [],
  },
  {
    path: "/vendor",
    name: "Vendor",
    icon: vendor,
    exact: true,
    subRoutes: [],
  },
  {
    path: "/message",
    name: "Message",
    icon: message,
    exact: true,
    subRoutes: [],
  },
  {
    path: "/membership",
    name: "Membership",
    icon: membership,
    exact: true,
    subRoutes: [],
  },
  {
    path: "/settings",
    name: "Settings",
    icon: settings,
    exact: true,
    subRoutes: [],
  },
  {
    path: "/faq",
    name: "FAQs",
    icon: faq,
    exact: true,
    subRoutes: [],
  },
  {
    path: "/verificationRequest",
    name: "Verification Requests",
    icon: verificationRequest,
    exact: true,
    subRoutes: [],
  },
  {
    path: "/wallet",
    name: "Wallet",
    icon: wallet,
    exact: true,
    subRoutes: [],
  },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="sidebar-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <div className="bars">
              {/* <FaBars /> */}
              <img
                src={menu}
                alt="menu"
                onClick={toggle}
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>

          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SideBarMenu
                    key={index}
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  // activeClassName="active"
                >
                  <div className="icon">
                    <img src={route.icon} alt="icon" />
                  </div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_main"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>
      </div>
    </>
  );
};

export default Sidebar;
