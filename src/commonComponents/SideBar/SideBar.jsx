import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./SideBar.scss";
// import menu from "../../assets/menu.svg";
// import plat from "../../assets/Sidebar/plat.svg";
// import user from "../../assets/Sidebar/user.svg";

import dashboard from "../../assests/sidebar/dashboard.svg";
import create from "../../assests/sidebar/create.svg";
import manage from "../../assests/sidebar/manage.svg";
import messange from "../../assests/sidebar/messange.svg";
import services from "../../assests/sidebar/services.svg";
import settings from "../../assests/sidebar/settings.svg";

//////
import menu from "../../assests/sidebar/menu.svg";
import { AnimatePresence, motion } from "framer-motion";
import SideBarMenu from "./SideBarMenu";
const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: dashboard,
    subRoutes: [],
  },
  {
    path: "/services",
    name: "My Services",
    icon: services,
    exact: true,
    subRoutes: [],
  },
  {
    path: "/create-event",
    name: "Create",
    icon: create,
    exact: true,
    subRoutes: [],
  },
  {
    path: "/manage-memberships",
    name: "Manage Memberships",
    icon: manage,
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
    path: "/message",
    name: "Message",
    icon: messange,
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
                  activeClassName="active"
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
