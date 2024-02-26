import React from "react";
import "./customizedIt.css";

import Footer from "../component/footer";
const videosData = [
  {
    url: require("../assets/TaayanTech.mp4"),
    text: "Video 1 - Introduction",
  },
];
const customizedIt = () => {
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
            <strong>TaayanTech</strong>: Fortifying Business Security through
            Advanced Technology
          </h1>
          <p
            className="agriPara"
            style={{ textAlign: "justify", padding: "3% 10% 3% 10%" }}
          >
            Introducing <strong>TaayanTech</strong>, a comprehensive platform
            equipped to provide tailored IT solutions for diverse business
            needs. From advanced analytics and cybersecurity to cloud computing
            and application development, <strong>TaayanTech</strong> offers a
            holistic suite of services.
          </p>
        </div>
        <div className="containers">
          <div className="row">
            <div className="cardContain">
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
                <strong>TaayanTech</strong> employs <strong>AI models</strong>{" "}
                TaayanTech integrates AI algorithms into IT solutions, enabling
                predictive analytics, automated workflows, and intelligent
                decision support. This not only enhances operational efficiency
                but also positions businesses to adapt to dynamic market
                conditions through data-driven insights.
              </p>
              <p>
                <a className="btn btn-danger" href="#">
                  View details »
                </a>
              </p>
            </div>
            <div className="cardContain">
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
                it effectively. TaayanFarm ensures that users have access to
                advanced tools for deriving meaningful insights from the data
                gathered.
              </p>
              <p>
                <a className="btn btn-danger" href="#">
                  View details »
                </a>
              </p>
            </div>
            <div className="cardContain">
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
              <h2 className="fw-normal">Data Integration</h2>
              <p style={{ textAlign: "justify" }}>
                <strong> TaayanTech's platform</strong> seamlessly supports data
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
        </div>
        {/* --------------------------agritech Section 1 ---------------------------------- */}
        <div className="containerSection">
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
                <strong> TaayanTech</strong> establishes an authoritative system
                for all IT-related information, ensuring real-time visibility
                into diverse technological domains. From data analytics and
                cybersecurity to software development and cloud computing,
                <strong> TaayanTech</strong> provides a comprehensive view.
                Integrated with insights into business demand, the Customized IT
                Solutions Management System (CISM) empowers key decision-makers
                for effective planning and management of IT resources.
              </p>
            </div>
            <div className="col-md-5">
              <svg
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto platform1"
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
                <strong> TaayanTech</strong> stands as a vital tool for
                decision-makers, offering real-time visibility into IT solutions
                availability and demand. By seamlessly integrating data from
                multiple sources, including analytics, security logs, and
                application performance, <strong>TaayanTech</strong>
                facilitates informed decision-making in critical areas such as
                cybersecurity, software development, and IT infrastructure
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
                Ensuring IT Resource Sustainability <br />
              </h2>
              <br />
              <p
                className="lead"
                style={{ textAlign: "justify", padding: "5% 10% 0% 10%" }}
              >
                In the realm of business security, <strong>TaayanTech</strong>{" "}
                plays a pivotal role in promoting sustainable IT practices. By
                providing accurate and timely information, the platform aids
                decision-makers in planning and managing IT resources
                effectively. <strong>TaayanTech</strong> is designed to be a
                comprehensive solution, supporting key stakeholders in their
                efforts towards sustainable IT management. Experience the Future
                of Customized IT Solutions with <strong>TaayanTech</strong> –
                Where Intelligence Meets Innovation.
              </p>
            </div>
            <div className="col-md-5">
              <svg
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto agritech5"
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

export default customizedIt;
