import React from "react";
import "./solutions.css";
import AI from "../assets/AI.png";
import IOT from "../assets/IOT.png";
import Bigdata from "../assets/BigData.png";
import GeoImg from "../assets/Geospatial Technology.png";
import Footer from "../component/footer";
const Solutions = () => {
  return (
    <>
      <div className="ai">
        <div className="ai-left">
          <h1 className="sub-title" style={{ padding: "3rem" }}>
            Artificial Intelligence
          </h1>
          <img className="aImg" src={AI} alt="" />
          <p className="para">
            Traditional agricultural practices often lack precision, leading to
            inefficiencies in crop management, pest control, and resource
            optimization. Farmers face challenges in making timely, informed
            decisions, impacting yields and livelihoods.
            <br />
            <br />
            Taayanam integrates AI into its Agritech platform, offering
            intelligent decision support. AI algorithms analyze real-time data
            from weather forecasts, soil conditions, and pest patterns to
            provide precise insights. Farmers receive actionable advisories on
            optimal planting times, fertilizer usage, and pest management. This
            precision enhances crop planning, reduces risks, and ultimately
            contributes to increased yields and farmer prosperity.
          </p>

          <h1 className="sub-title" style={{ padding: "3rem" }}>
            Big Data Analysis
          </h1>
          <img className="BigImg" src={Bigdata} alt="" />

          <p className="para">
            In the realm of IT solutions, businesses grapple with off-the-shelf
            options that may not meet specific needs, leading to inefficiencies,
            security vulnerabilities, and compromised performance. The
            one-size-fits-all approach hinders business operations and growth.
            <br />
            <br /> TayanTech employs Big Data analysis to customize IT
            solutions. By processing vast datasets encompassing user behaviors,
            system logs, and performance metrics, we extract valuable insights.
            These insights inform the tailoring of analytics, cybersecurity, and
            application development services. TayanTech ensures businesses have
            secure, high-performance IT infrastructure aligned with their unique
            requirements. This customized approach not only enhances operational
            efficiency but also strengthens cybersecurity measures, fostering a
            resilient and adaptable IT ecosystem.
          </p>
        </div>
        <div className="ai-right">
          <h1 className="sub-title" style={{ padding: "3rem" }}>
            Internet of Things
          </h1>
          <img className="IOmg" src={IOT} alt="" />
          <p className="para">
            Conventional water resource management systems face challenges in
            real-time monitoring, resulting in inefficient allocation,
            hydropower operations, and agricultural planning. Inaccurate data
            leads to suboptimal decision-making and potential water shortages.
            Taayanam leverages IoT to establish a connected network for
            real-time water resource monitoring. IoT sensors collect data on
            rainfall, reservoir levels, canal flow, and soil moisture. This
            comprehensive dataset enables accurate and timely decision-making
            for water allocation, flood warnings, and sustainable agricultural
            practices. By optimizing water management, aquaWISE ensures
            efficient resource utilization, mitigates water-related risks, and
            supports long-term water sustainability.
          </p>
          <h1 className="sub-title" style={{ padding: "3rem" }}>
            Geospatial Technology
          </h1>
          <img className="GeoImg" src={GeoImg} alt="" />
          <p className="para">
            Traditional decision-making lacks precision due to limited spatial
            insights, impacting areas such as urban planning, disaster
            management, and environmental conservation. Decisions made without
            accurate spatial context lead to suboptimal outcomes and increased
            risks.
            <br />
            <br />
            Taayanam integrates Geospatial Technology to enhance decision-making
            across various domains. Spatial intelligence provides advanced
            visualization and analysis capabilities for urban planning, disaster
            response, and environmental conservation. In urban planning, it aids
            in optimizing infrastructure layouts. In disaster management, it
            enables efficient resource allocation. In environmental
            conservation, it supports habitat monitoring and biodiversity
            preservation. By incorporating Geospatial Technology, Taayanam
            ensures that decisions are informed, precise, and contribute to
            sustainable outcomes.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Solutions;
