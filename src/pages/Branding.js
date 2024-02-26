import React from "react";
import Footer from "../component/footer";
import "./Branding.css";
const videosData = [
  {
    url: require("../assets/branding.mp4"),
    text: "Video 1 - Introduction",
  },
];

const Branding = () => {
  return (
    <div>
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
      {/* ------ */}
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
          equipped to provide tailored IT solutions for diverse business needs.
          From advanced analytics and cybersecurity to cloud computing and
          application development, <strong>TaayanTech</strong> offers a holistic
          suite of services.
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
              <strong>TaayanTech</strong> employs <strong>AI models</strong> AI
              revolutionizes marketing by enabling predictive analytics,
              customer segmentation, and personalized content delivery. Machine
              learning algorithms analyze vast datasets to predict consumer
              behavior, optimize ad targeting, and automate routine tasks.
              Chatbots powered by AI enhance customer interactions, providing
              real-time assistance and engagement.
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
              Cloud technology transforms marketing operations by offering
              scalable, flexible, and secure solutions. Cloud platforms
              facilitate seamless collaboration, enabling marketing teams to
              work cohesively regardless of geographical locations. Cloud-based
              storage ensures easy access to vast datasets, fostering real-time
              analytics and collaboration on a global scale.
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
              Data integration in marketing involves aggregating and harmonizing
              diverse datasets from various sources, providing a unified view of
              customer interactions. Integrating customer relationship
              management (CRM) data, social media insights, and transactional
              information creates a comprehensive customer profile.
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
              SEO (Search Engine Optimization){" "}
            </h2>
            <br />

            <p
              className="lead"
              style={{ textAlign: "justify", padding: "5% 10% 0% 10%" }}
            >
              SEO is the cornerstone of online visibility, ensuring that your
              content is easily discoverable by search engines. By optimizing
              website structure, content, and keywords, SEO enhances organic
              search rankings, driving targeted traffic to your platform. A
              well-executed SEO strategy not only improves search engine
              visibility but also enhances user experience, contributing to
              sustained online success.
            </p>
          </div>
          <div className="col-md-5">
            <svg
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto platform1 branding3"
              width="300"
              height="300"
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
              Social Media & Content Marketing <br />
            </h2>
            <br />
            <p
              className="lead"
              style={{ textAlign: "justify", padding: "5% 10% 0% 10%" }}
            >
              Social media is a dynamic platform for building brand awareness,
              engaging with the audience, and fostering community. Through
              strategic social media marketing, businesses can reach their
              target audience, promote brand personality, and drive customer
              loyalty.
              <br />
              Content marketing revolves around creating and distributing
              valuable, relevant content to attract and engage a target
              audience. Whether through blog posts, videos, infographics, or
              other formats, compelling content establishes credibility,
              educates, and nurtures leads
            </p>
          </div>
          <div className="col-md-5 order-md-1">
            <svg
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto branding4"
              width="300"
              height="300"
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
              Analytics <br />
            </h2>
            <br />
            <p
              className="lead"
              style={{ textAlign: "justify", padding: "5% 10% 0% 10%" }}
            >
              Analytics is the backbone of informed decision-making in digital
              marketing. By leveraging tools and platforms, marketers gain
              insights into user behavior, campaign performance, and overall
              digital presence. Analytics helps measure the success of marketing
              efforts, track key performance indicators (KPIs), and refine
              strategies for optimal results. Through data-driven analysis,
              marketers can adapt and optimize campaigns, ensuring a continuous
              improvement cycle.
              <br />
              In the interconnected realm of SEO, social media, content
              marketing, and analytics, a holistic approach is key. By
              integrating these elements into a cohesive strategy, businesses
              can maximize their online presence, engage effectively with their
              audience, deliver valuable content, and measure the impact of
              their efforts for sustained digital success.
            </p>
          </div>
          <div className="col-md-5">
            <svg
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto branding5"
              width="300"
              height="300"
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
      <Footer />
    </div>
  );
};

export default Branding;
