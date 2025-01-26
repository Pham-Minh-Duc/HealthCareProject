import { useTheme } from "../../../../context/themeContext";
import "./analytic.css";
import Time from "../../../../utils/time";
import { useState } from "react";
import Customer from "./sections/customer/customer"
import Doctor from "./sections/doctor/doctor"
import Hospital from "./sections/hospital/hospital";
import Predict from "./sections/predict/predict"

export default function Analytic() {
  const { activeTheme } = useTheme();

  const [activeTabAna, setActiveTabAna] = useState(null);
  const handleTabAna = (tab) => {
    setActiveTabAna(tab);
  };
  return (
    <>
      <div className={`frame ${activeTheme ? "bgBlack" : "bgWhite"}`}>
        <div
          id="admin--title"
          className={`${activeTheme ? "colorWhite" : "colorBlack"}`}
        >
          <h1>Dash Board</h1>
          <Time style={{ display: "block" }} />
        </div>
        <div className="analytic--overview">
          <div className="analytic--navbar">
            <div onClick={() => handleTabAna("customer")}>
              <h4
                className={`analytic--navbar__header ${
                  activeTabAna === "customer" ? "active" : ""
                }`}
              >
                Customer
              </h4>
            </div>
            <div onClick={() => handleTabAna("doctor")}>
              <h4
                className={`analytic--navbar__header ${
                  activeTabAna === "doctor" ? "active" : ""
                }`}
              >
                Doctor
              </h4>
            </div>
            <div onClick={() => handleTabAna("hospital")}>
              <h4
                className={`analytic--navbar__header ${
                  activeTabAna === "hospital" ? "active" : ""
                }`}
              >
                Hospital
              </h4>
            </div>
            <div onClick={() => handleTabAna("predict")}>
              <h4
                className={`analytic--navbar__header ${
                  activeTabAna === "predict" ? "active" : ""
                }`}
              >
                Predict
              </h4>
            </div>
          </div>
          <div className="analytic--content">
            {activeTabAna ? (
              <div className="analytic--content__frame">
                <div
                  className={`analytic--content__section ${
                    activeTabAna === "customer" ? "active" : ""
                  }`}
                >
                  <Customer/>
                </div>
                <div
                  className={`analytic--content__section ${
                    activeTabAna === "doctor" ? "active" : ""
                  }`}
                >
                  <Doctor/>
                </div>
                <div
                  className={`analytic--content__section ${
                    activeTabAna === "hospital" ? "active" : ""
                  }`}
                >
                  <Hospital/>
                </div>
                <div
                  className={`analytic--content__section ${
                    activeTabAna === "predict" ? "active" : ""
                  }`}
                >
                  <Predict/>  
                </div>
              </div>
            ) : (
              <div className="analytic--comment">
                <p>chọn mục trên thanh công cụ để xem chi tiết</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
