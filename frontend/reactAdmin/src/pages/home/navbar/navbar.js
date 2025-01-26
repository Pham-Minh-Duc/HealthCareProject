import "./navbar.css";
import React, { useState } from "react";
import { useTheme } from "../../../context/themeContext";
import Overview from "../navbarsItem/overview/overview";
import Account from "../navbarsItem/account/account";
import Analytic from "../navbarsItem/analytic/analytic";
import Doctor from "../navbarsItem/doctor/doctor";
import Schedule from "../navbarsItem/schedule/schedule";
import Note from "../navbarsItem/note/note";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("admin");
  const { activeTheme, toggleTheme } = useTheme();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div id="navbar">
        <div id="navbar--frame">
          <div id="btn--menu">
            <i className="ti-menu"></i>
          </div>
          <div id="frame--navbar__avatar">
            <img src="\adminLogin.jpg" alt="Admin Login" />
          </div>
          <ol>
            <a href="#admin" onClick={() => handleTabClick("admin")}>
              <li className={`items ${activeTab === "admin" ? "active" : ""}`}>
                <i className="ti-home"></i>Overview
              </li>
            </a>
            <a href="#account" onClick={() => handleTabClick("account")}>
              <li
                className={`items ${activeTab === "account" ? "active" : ""}`}
              >
                <i className="ti-user"></i>Account
              </li>
            </a>
            <a href="#schedule" onClick={() => handleTabClick("schedule")}>
              <li
                className={`items ${activeTab === "schedule" ? "active" : ""}`}
              >
                <i className="ti-write"></i>Schedule
              </li>
            </a>
            <a href="#doctors" onClick={() => handleTabClick("doctors")}>
              <li
                className={`items ${activeTab === "doctors" ? "active" : ""}`}
              >
                <i className="ti-heart"></i>Docs & Hos
              </li>
            </a>
            <a href="#analytics" onClick={() => handleTabClick("analytics")}>
              <li
                className={`items ${activeTab === "analytics" ? "active" : ""}`}
              >
                <i className="ti-bar-chart-alt"></i>analytics
              </li>
            </a>
            <a href="#note" onClick={() => handleTabClick("note")}>
              <li className={`items ${activeTab === "note" ? "active" : ""}`}>
                <i className="ti-bell"></i>Notification
              </li>
            </a>
            <a href="#logout">
              <li className="items">
                <i className="ti-back-left"></i>Log out
              </li>
            </a>
          </ol>
          <div id="navbar--wrapper">
            <i className="ti-star"></i>
            <p>Dark Theme</p>
            <div id="navbar--darklight__btn" onClick={() => toggleTheme()}>
              <div
                id="navbar--darklight__ball"
                className={`${activeTheme ? "move" : ""}`}
              ></div>
            </div>
          </div>
        </div>
        <div id="navbar--content">
          <AnimatePresence mode="wait">
            {activeTab === "admin" && (
              <motion.div
                key="admin"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="items-content active"
              >
                <Overview />
              </motion.div>
            )}

            {activeTab === "account" && (
              <motion.div
                key="account"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="items-content active"
              >
                <Account />
              </motion.div>
            )}

            {activeTab === "schedule" && (
              <motion.div
                key="schedule"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="items-content active"
              >
                <Schedule />
              </motion.div>
            )}

            {activeTab === "doctors" && (
              <motion.div
                key="doctors"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="items-content active"
              >
                <Doctor />
              </motion.div>
            )}

            {activeTab === "analytics" && (
              <motion.div
                key="analytics"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="items-content active"
              >
                <Analytic />
              </motion.div>
            )}

            {activeTab === "note" && (
              <motion.div
                key="note"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="items-content active"
              >
                <Note />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
