import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useEffect } from "react";

import { NavLink } from "react-router-dom";

// import {
//   MdOutlineKeyboardArrowUp,
//   MdOutlineKeyboardArrowDown,
// } from "react-icons/md";
const menuAnimation = {
  hidden: {
    opacity: 0,
    height: 0,
    padding: 0,
    transition: { duration: 0.3, when: "afterChildren" },
  },
  show: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.3,
      when: "beforeChildren",
    },
  },
};
const menuItemAnimation = {
  hidden: (i) => ({
    padding: 0,
    x: "-100%",
    transition: {
      duration: (i + 1) * 0.1,
    },
  }),
  show: (i) => ({
    x: 0,
    transition: {
      duration: (i + 1) * 0.1,
    },
  }),
};

const SideBarMenu = ({ route, showAnimation, isOpen, setIsOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsOpen(true);
  };

  useEffect(() => {
    if (!isOpen) {
      setIsMenuOpen(false);
    }
  }, [isOpen]);
  return (
    <>
      <div className={isMenuOpen ? "background_menu" : ""}>
        <div className="menu" onClick={toggleMenu}>
          <div className="menu_item">
            <div className="icon">
              <img src={route.icon} alt="" />
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
          </div>
          {/* {isOpen && (
            <motion.div
              animate={
                isMenuOpen
                  ? {
                      rotate: -180,
                    }
                  : { rotate: 0 }
              }
            >
              <MdOutlineKeyboardArrowDown
                style={{ marginTop: ".6rem", fontSize: "2rem" }}
              />
            </motion.div>
          )} */}
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              variants={menuAnimation}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="menu_container"
            >
              {route.subRoutes.map((subRoute, i) => (
                <motion.div variants={menuItemAnimation} key={i} custom={i}>
                  <NavLink to={subRoute.path} className="link">
                    <motion.div className="link_text">
                      {subRoute.name}
                    </motion.div>
                  </NavLink>
                </motion.div>
              ))}
            </motion.div>
          )}{" "}
        </AnimatePresence>
      </div>
    </>
  );
};

export default SideBarMenu;
