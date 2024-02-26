import React, { useEffect, useRef, useState } from "react";

import Loader from "../loader";
import AI from "../assets/AIBG.png";
import About from "../assets/aboutus-logo.png";
import Agritech from "../assets/agritech.png";
import CustomizedIT from "../assets/customizedIT.png";
import datbaseIT from "../assets/databaseIT.png";
import IOT from "../assets/IOT.png";
import BigDAta from "../assets/BigData.png";
import Geo from "../assets/Geospatial Technology.png";
import Law from "../assets/Law.svg";
import Branding from "../assets/Branding.png";
import Atollis from "../assets/ATOLLis.png";
import "./home.css";

import Footer from "../component/footer";
import emailjs from "@emailjs/browser";
import Testimonials from "../component/testimonial";
import Carousel from "../component/autoSlider";

function Home() {
  const testimonialData = [
    {
      text: "Reliable and innovative solutions! They surpassed our expectations,delivering cutting-edge IT services. Their proactive approach to problem-solving sets them apart.",
      author:
        "Former Vice Chancellor, Dr Rajendra Prasad Central Agricultural University, Pusa, Bihar",
    },
    {
      text: "Apoorva/ Founder & Promoter of Taayanam is a women of dreams, she not only acheives her dreams with great persuasion but also assist others fo acheive their dreams. She is focussed, multi talented and work with strong discipline. It has always been pleasure working with her.",
      author: "Ranjeet Singh Uppal, Hopeberry Ventures Private limited",
    },
    {
      text: "Reliable and innovative solutions! They surpassed our expectations,delivering cutting-edge IT services. Their proactive approach to problem-solving sets them apart.",
      author:
        "Former Vice Chancellor, Dr Rajendra Prasad Central Agricultural University, Pusa, Bihar",
    },
    {
      text: "Apoorva/ Founder & Promoter of Taayanam is a women of dreams, she not only acheives her dreams with great persuasion but also assist others fo acheive their dreams. She is focussed, multi talented and work with strong discipline. It has always been pleasure working with her.",
      author: "Ranjeet Singh Uppal, Hopeberry Ventures Private limited",
    },
    {
      text: "Reliable and innovative solutions! They surpassed our expectations,delivering cutting-edge IT services. Their proactive approach to problem-solving sets them apart.",
      author:
        "Former Vice Chancellor, Dr Rajendra Prasad Central Agricultural University, Pusa, Bihar",
    },
    {
      text: "Apoorva/ Founder & Promoter of Taayanam is a women of dreams, she not only acheives her dreams with great persuasion but also assist others fo acheive their dreams. She is focussed, multi talented and work with strong discipline. It has always been pleasure working with her.",
      author: "Ranjeet Singh Uppal, Hopeberry Ventures Private limited",
    },
    {
      text: "Reliable and innovative solutions! They surpassed our expectations,delivering cutting-edge IT services. Their proactive approach to problem-solving sets them apart.",
      author:
        "Former Vice Chancellor, Dr Rajendra Prasad Central Agricultural University, Pusa, Bihar",
    },
    {
      text: "Apoorva/ Founder & Promoter of Taayanam is a women of dreams, she not only acheives her dreams with great persuasion but also assist others fo acheive their dreams. She is focussed, multi talented and work with strong discipline. It has always been pleasure working with her.",
      author: "Ranjeet Singh Uppal, Hopeberry Ventures Private limited",
    },
    // Add more testimonials as needed
  ];

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_49j5nvd",
        "template_wifux6d",
        form.current,
        "Z6eTCcOSDCZT9gFGS"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email sent successfully!"); // Display a success message
        },
        (error) => {
          console.log(error.text);
          alert("Error sending email. Please try again."); // Display an error message
        }
      );
  };

  return (
    <>
      <Loader />

      <Carousel />

      <div className="about" id="about">
        <div className="containers1">
          <div className="row">
            <div className="about-col-1">
              <img className="aboutImg" src={About} alt="" />
            </div>
            <div className="about-col-2">
              <h1 className="sub-title">About Us</h1>
              <p className="aboutText">
                At <strong>Taayanam</strong>, we are passionate about leveraging
                technology to drive innovation and transformation across various
                sectors. Our core expertise lies in three key areas - Agritech,
                Customized IT Solutions, and Policing. With a deep commitment to
                excellence, we provide a range of services and solutions
                tailored to meet the unique needs of our clients.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* services start */}

      <div id="services">
        <div className="containers1">
          <h1 className="sub-title">Solutions</h1>
          <div className="services-list">
            <div className="servicesDiv">
              <img className="servicesImg" src={Agritech} alt="" />
              <h2>Agritech Sector</h2>
              <p>
                In traditional farming, unpredictable weather patterns and
                inadequate pest control measures lead to yield uncertainties,
                impacting farmers' livelihoods. Our Agritech platform employs AI
                and IoT to deliver real-time weather insights, pest forecasts,
                and precision farming advisories, ensuring optimal crop
                management for enhanced yields and farmer prosperity.
              </p>
              <a href="/">Learn More</a>
            </div>

            <div className="servicesDiv">
              <img className="servicesImg" src={datbaseIT} alt="" />
              <h2>Water Resource</h2>
              <p>
                Current water management practices lack real-time visibility,
                causing inefficiencies in allocation, hydropower operations, and
                agricultural planning, exacerbated by climate change.
                Introducing our tayan-h2O platform, leveraging advanced
                hydro-meteorological monitoring and forecasting to provide
                actionable insights for flood warnings, sustainable water
                allocation, and efficient management of water resources.
              </p>
              <a href="/">Learn More</a>
            </div>
            <div className="servicesDiv">
              <img className="servicesImg" src={CustomizedIT} alt="" />
              <h2>Customized IT Solutions</h2>
              <p>
                Businesses struggle with off-the-shelf IT solutions that fail to
                meet specific needs, leading to inefficiencies, security risks,
                and compromised performance. TayanTech offers tailor-made IT
                solutions, encompassing analytics, cybersecurity, and
                application development, ensuring businesses have customized,
                secure, and high-performance IT infrastructure aligned with
                their unique requirements.
              </p>

              <a href="/">Learn More</a>
            </div>
          </div>
        </div>

        <div className="containers1">
          <div className="services-list">
            <div className="servicesDiv">
              <img className="servicesImg" src={Law} alt="" />
              <h2>Law Enforcement</h2>
              <p>
                TaayanTech provides cutting-edge Automation and Security
                Hardware Solutions tailored for law enforcement agencies,
                ensuring streamlined operations and enhanced security measures.
                TaayanTech introduces advanced automation, incorporating
                AI-driven technologies for predictive policing, facial
                recognition, and automated data analysis. TaayanTech integrates
                state-of-the-art Security Hardware, including smart cameras,
                biometric scanners, and secure communication systems.
              </p>
              <a href="/">Learn More</a>
            </div>

            <div className="servicesDiv">
              <img className="servicesImg" src={Branding} alt="" />
              <h2>Branding and Digital Marketing</h2>
              <p>
                TaayanTech implements a comprehensive Digital Marketing
                strategy, encompassing Search Engine Optimization (SEO):
                Enhancing online visibility through optimized content, keywords,
                and website structure. Social Media Marketing, Content
                Marketing, , whitepapers, Email Marketing, Meme Marketing, Lead
                Generation.
              </p>
              <a href="/">Learn More</a>
            </div>
            <div className="servicesDiv">
              <img className="servicesImg" src={Atollis} alt="" />
              <h2>ATOLLis</h2>
              <p>
                <ul />
                <li>Data Management</li>
                <li>
                  Digitalization of the oil, mining and electric power
                  industries
                </li>
                <li>Own Domestic software</li>
                <li>Digital Passports</li>
                <li>Digital analytics KPI management</li>
              </p>

              <a href="/" style={{ paddingBottom: "5vmax" }}>
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="portfolio" id="portfolio">
        <div class="container1">
          <h1 class="sub-title">Stacks</h1>
          <div class="work-list">
            <div class="work">
              <img src={AI} alt="" />
              <div class="layer">
                <h3>Artificial Intelligence</h3>
              </div>
            </div>
            <div class="work">
              <img src={IOT} alt="" />
              <div class="layer">
                <h3>Internet Of Things</h3>

                <i class="fa-solid fa-up-right-from-square"></i>
              </div>
            </div>
            <div class="work">
              <img src={BigDAta} alt="" />
              <div class="layer">
                <h3>Big Data Analysis</h3>
              </div>
            </div>
            <div class="work">
              <img src={Geo} alt="" />
              <div class="layer">
                <h3>Geospatial Technology</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonial">
        <h1 className="sub-title">Testimonials</h1>
        <Testimonials data={testimonialData} />
      </div>

      <div className="contactForm">
        <div className="contact-left">
          <h1 className="sub-title">Contact Us</h1>
        </div>

        <div className="contact-right">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
            />
            <input
              type="number"
              name="user_number"
              placeholder="Your Number"
              required
            />
            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
            ></textarea>
            <button type="submit" className="btn btn2">
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
