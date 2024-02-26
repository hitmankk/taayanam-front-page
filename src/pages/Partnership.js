import React, { Fragment } from "react";
import "./Partnership.css";
import ATOLLisP from "../assets/ATOLLisPartnership.png";
const Partnership = () => {
  return (
    <Fragment>
      <h1 className="sub-title">Partnership</h1>
      <div className="partnership">
        <div className="content">
          <img src={ATOLLisP} alt="Logo" />
        </div>
        <div className="content">
          <p>
            We are delighted to collaborate with ATOLLis, a visionary company
            that stands at the forefront of transformative technology solutions.
            ATOLLis brings a suite of innovative platforms that redefine the
            landscape of data management and digital transformation across
            various industries.
            <br />
            <br />
            <ul>
              <li>ATOLL Platform for Data Management Integration</li>
              <li>
                MIT-OIL: Digitization of Oil and Gas Production and Well
                Services
              </li>
              <li>
                Eldoka - ECM Platform: For robust file archives management,
                ATOLLis presents Eldoka, an Enterprise Content Management (ECM)
                platform.
              </li>
              <li>
                MINERAL: Digitization of Solid Mineral Extraction Processes
              </li>
            </ul>
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Partnership;
