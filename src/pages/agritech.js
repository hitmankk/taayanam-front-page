import React from "react";
import "./agritech.css";

import Footer from "../component/footer";

const videosData = [
  {
    url: require("../assets/agritech1.mp4"),
    text: "Video 1 - Introduction",
  },
];
const agritech = () => {
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
            Sustainable Farming Solutions by <strong>TaayanFarm</strong>
          </h1>
          <p
            className="agriPara"
            style={{ textAlign: "left", padding: "3% 10% 3% 10%" }}
          >
            Presenting <strong>agriTech</strong>, an integrated crop management
            system developed by <strong>TaayanFarm</strong>, offering decision
            support and advisories for stakeholders throughout the entire crop
            lifecycle – from planting to harvest.
          </p>
        </div>
        <div className="containers">
          <div className="row">
            <div className="cardContain">
              <svg
                className="rounded-circle Ai"
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
                <strong>TaayanFarm</strong> employs <strong>AI models</strong>{" "}
                combined with the strength of location intelligence,
                streamlining computations and running real-time hydrology,
                hydraulic, and crop models. This synergy of technologies
                provides farmers with quick and actionable insights.
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
                utilizing <strong>cloud features</strong> to process collected
                data and aggregate it effectively. <strong> TaayanFarm</strong>{" "}
                ensures that users have access to advanced tools for deriving
                meaningful insights from the data gathered.
              </p>
              <p>
                <a className="btn btn-danger" href="/">
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
                <strong> TaayanFarm's</strong> platform seamlessly supports data
                collected from diverse sources, including IoT sensors,
                satellites, API integrations, and crowd-sourcing. The collected
                data is processed for the next level of operations, enhancing
                the overall efficiency of the agricultural process.
              </p>
              <p>
                <a className="btn btn-danger" href="/">
                  View details »
                </a>
              </p>
            </div>
          </div>

          <hr className="featurette-divider" />
        </div>
        {/* --------------------------agritech Section 1 ---------------------------------- */}
        <div className="containerSection">
          <div className="row agritechSection1">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">
                <strong> TaayanFarm</strong> : Empowering Farmers{" "}
                <span className="text-body-secondary">
                  with AI-Driven Crop Management
                </span>
              </h2>
              <p
                className="lead"
                style={{ textAlign: "justify", padding: "10% 10% 0% 10%" }}
              >
                <strong>TaayanFarm's AI-based farm lifecycle management</strong>{" "}
                is tailored to empower farmers to make data-driven decisions,
                enhancing crop success rates and earnings in the face of adverse
                climatic changes. From identifying the right crop for the region
                to determining the optimal time for sowing, managing pest
                infestations, optimizing fertilizer usage, and estimating crop
                acreage and yield – <strong>TaayanFarm</strong> covers it all.
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
                Empowering Stakeholders{" "}
                <span className="text-body-secondary">
                  with Decision Support System.
                </span>
              </h2>
              <p
                className="lead"
                style={{ textAlign: "justify", padding: "10%" }}
              >
                <strong>TaayanFarm's</strong> not only secures farmers through
                technology-driven farming but also fosters collaboration among
                communities and governments. While the primary beneficiary is
                the farmer, the system extends its benefits to authorities.
                Considering that farm produce directly impacts food security,
                <strong> TaayanFarm</strong> emphasizes that sustainable
                agriculture is everyone's business. Explore the comprehensive
                activity table below for a detailed overview.
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
                User-Friendly Interface{" "}
                <span className="text-body-secondary">
                  <strong>TaayanFarm</strong>: Revolutionary Agriculture
                  Intelligence & Management Hub
                </span>
              </h2>
              <p
                className="lead"
                style={{ textAlign: "justify", padding: "10%" }}
              >
                Revolutionizing the agricultural landscape,{" "}
                <strong>TaayanFarm</strong> employs cutting-edge technologies
                such as AI, remote sensing, IoT, Big Data, and mobility to
                deliver precision farming advisories. This innovative platform
                is designed to elevate farmers' Gross Value Added (GVA) by
                providing invaluable insights throughout the crop lifecycle.
                Sustainable Farming Solutions by <strong>TaayanFarm</strong>{" "}
                Presenting an integrated crop management system developed by{" "}
                <strong>TaayanFarm</strong>, offering decision support and
                advisories for stakeholders throughout the entire crop lifecycle
                – from planting to harvest.
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

export default agritech;
