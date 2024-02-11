import React from "react";
import "./waterSolutions.css";

import Footer from "../component/footer";
const videosData = [
  {
    url: require("../assets/waterTech.mp4"),
    text: "Video 1 - Introduction",
  },
];
const waterSolutions = () => {
  return (
    <>
      <div className="body">
        <div className="agritech">
          {videosData.map((video, index) => (
            <div key={index}>
              <video autoPlay muted playsInline className="VideoCarousel">
                <source src={video.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
        <div className="agriDetails">
          <h1 className="agriHeading">
            <strong> TayanH2O</strong>: Fortifying Water Security through
            Advanced Technology
          </h1>
          <p
            className="agriPara"
            style={{ textAlign: "justify", padding: "3% 10% 3% 10%" }}
          >
            Presenting <strong>tayanH2O</strong>, a robust platform equipped for
            hydro-meteorological monitoring and hydrologic forecasting. This
            innovative system offers actionable information for various domains,
            including flood warning, hydropower operations, water allocation,
            and agriculture operations.
          </p>
        </div>
        <div className="container marketing">
          <div className="row">
            <div className="col-lg-4" style={{ paddingBottom: "5%" }}>
              <svg
                className="rounded-circle AI"
                width="140"
                height="140"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
              </svg>
              <h2 className="fw-normal">Use of AI</h2>
              <p style={{ textAlign: "justify" }}>
                <strong> TayanH2O</strong> employs AI models combined with the
                strength of location intelligence, streamlining computations and
                running real-time hydrology, hydraulic, and crop models. This
                synergy of technologies provides farmers with quick and
                actionable insights, saving significant time and effort.
              </p>
              <p>
                <a className="btn btn-danger" href="#">
                  View details »
                </a>
              </p>
            </div>
            <div className="col-lg-4">
              <svg
                className="rounded-circle cloud"
                width="140"
                height="140"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
              </svg>
              <h2 className="fw-normal">Cloud-Powered Technology</h2>
              <p style={{ textAlign: "justify" }}>
                The platform is equipped with state-of-the-art technology,
                utilizing cloud features to process collected data and aggregate
                it effectively. TayanFarm ensures that users have access to
                advanced tools for deriving meaningful insights from the data
                gathered.
              </p>
              <p>
                <a className="btn btn-danger" href="#">
                  View details »
                </a>
              </p>
            </div>
            <div className="col-lg-4">
              <svg
                className="rounded-circle data"
                width="140"
                height="140"
                role="img"
                aria-label="Placeholder"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
              </svg>
              <h2 className="fw-normal">Ready for Data Integration</h2>
              <p style={{ textAlign: "justify" }}>
                <strong>TayanH2O's</strong> platform seamlessly supports data
                collected from diverse sources, including IoT sensors,
                satellites, API integrations, and crowd-sourcing. The collected
                data is processed for the next level of operations, enhancing
                the overall efficiency of the agricultural process.
              </p>
              <p>
                <a className="btn btn-danger" href="#">
                  View details »
                </a>
              </p>
            </div>
          </div>

          <hr className="featurette-divider" />
          {/* --------------------------agritech Section 1 ---------------------------------- */}

          <div className="row featurette agritechSection1">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">
                Comprehensive Platform Overview{" "}
              </h2>
              <br />

              <p
                className="lead"
                style={{ textAlign: "justify", padding: "5% 10% 0% 10%" }}
              >
                <strong> tayanH2O</strong> establishes an authoritative system
                for all water resource-related information, ensuring real-time
                visibility into diverse water sources. From rainfall and
                reservoirs to canals, minor irrigation tanks, ground water, and
                soil moisture,
                <strong>tayanH2O</strong> provides a holistic view. Integrated
                with insights into water demand, the Water Resource Information
                Management System (WRIMS) empowers key decision-makers for
                effective planning and management of water resources at the
                state or regional level.
              </p>
            </div>
            <div className="col-md-5">
              <svg
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto agritech3"
                width="600"
                height="400"
                role="img"
                aria-label="Placeholder: 500x500"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
              </svg>
            </div>
          </div>

          {/* -------------------------------------agritech section 2 ------------------------- */}
          <div className="row featurette agritechSection1 ">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading fw-normal lh-1">
                Enhanced Decision Support <br />
              </h2>
              <br />
              <p
                className="lead"
                style={{ textAlign: "justify", padding: "5% 10% 0% 10%" }}
              >
                <strong>tayanH2O</strong> stands as a vital tool for
                decision-makers, offering real-time visibility into water
                availability and demand. By seamlessly integrating data from
                multiple sources, including rainfall, reservoirs, and ground
                resources, <strong>tayanH2O</strong> facilitates informed
                decision-making in critical areas such as flood management,
                hydropower operations, water allocation, and agricultural
                planning.
              </p>
            </div>
            <div className="col-md-5 order-md-1">
              <svg
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto agritech4"
                width="600"
                height="400"
                role="img"
                aria-label="Placeholder: 500x500"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
              </svg>
            </div>
          </div>
          {/* ---------------------------------------------------------- */}
          <div className="row featurette agritechSection1">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">
                Ensuring Water Resource Sustainability <br />
              </h2>
              <br />
              <p
                className="lead"
                style={{ textAlign: "justify", padding: "5% 10% 0% 10%" }}
              >
                In the realm of water security, <strong>tayanH2O</strong> plays
                a pivotal role in promoting sustainable practices. By providing
                accurate and timely information, the platform aids
                decision-makers in planning and managing water resources
                effectively. <strong>tayanH2O</strong> is designed to be a
                comprehensive solution, supporting key stakeholders in their
                efforts towards sustainable water management. Experience the
                Future of Water Resource Management with{" "}
                <strong>tayanH2O</strong> – Where Intelligence Meets Innovation.
              </p>
            </div>
            <div className="col-md-5">
              <svg
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto watertech5"
                width="600"
                height="400"
                role="img"
                aria-label="Placeholder: 500x500"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
              </svg>
            </div>
          </div>
          {/* ------------------------------------------- */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default waterSolutions;
