import React, { useEffect, useRef, useState } from 'react';
// import '../component/nav.css';

import Loader from '../loader';

import Img4 from '../assets/AnimationImage1.png';

import About from '../assets/company-logo.jpg';
import Agritech from '../assets/agritech.png';
import CustomizedIT from '../assets/customizedIT.png';
import datbaseIT from '../assets/databaseIT.png';
import './home.css';

import Swiper from 'swiper';
import 'swiper/css/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Footer from '../component/footer';
import emailjs from "@emailjs/browser";
import Testimonials from '../component/testimonial';






function Home() {
  const [isVisible, setIsVisible] = useState(false);
   const swiperContainerRef = useRef(null);
   const swiperRef = useRef(null);
   const slideInSectionRef1 = useRef(null);
   const slideInSectionRef2 = useRef(null);
   const slideInSectionRef3 = useRef(null);
   const slideInSectionRef4 = useRef(null);
   


   useEffect(() => {
      const swiperContainer = swiperContainerRef.current;

      if (!swiperContainer) {
         return;
      }

      swiperRef.current = new Swiper(swiperContainer, {
         direction: 'horizontal',
         slidesPerView: 1,
         spaceBetween: 10,
         loop: true,
         autoplay: {
            delay: 3000, // Set the delay for autoplay
            disableOnInteraction: false, // Allow autoplay to continue even after user interactions
         },
         effect: 'slide', // Use slide effect
         slidesPerGroup: 1, // Use 1 slide per group to make slides move one by one
         slidesPerColumn: 1, // Use 1 slide per column
         speed: 1000, // Adjust the speed as needed
      });

      return () => {
         // Cleanup when the component is unmounted
         const swiper = swiperRef.current;
         if (swiper && swiper.destroy) {
            swiper.destroy();
         }
      };
   }, []);

   useEffect(() => {
    const createObserver = (ref, className) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible((prev) => ({ ...prev, [className]: entry.isIntersecting }));
        },
        { threshold: 0.5 }
      );
  
      if (ref.current) {
        observer.observe(ref.current);
      }
  
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    };
  
    createObserver(slideInSectionRef1, 'slideInSection1');
    createObserver(slideInSectionRef2, 'slideInSection2');
    createObserver(slideInSectionRef3, 'slideInSection3');
    createObserver(slideInSectionRef4, 'slideInSection4');
  }, []);
  
  
  const testimonialData = [
    { text: 'This is an amazing product!', author: 'John Doe' },
    { text: 'I love using this service every day.', author: 'Jane Smith' },
    { text: 'This is an amazing product!', author: 'John Doe' },
    { text: 'I love using this service every day.', author: 'Jane Smith' },
    { text: 'This is an amazing product!', author: 'John Doe' },
    { text: 'I love using this service every day.', author: 'Jane Smith' },
    { text: 'This is an amazing product!', author: 'John Doe' },
    { text: 'I love using this service every day.', author: 'Jane Smith' },
    // Add more testimonials as needed
  ];

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_49j5nvd', 'template_wifux6d', form.current, 'Z6eTCcOSDCZT9gFGS')
      .then((result) => {
          console.log(result.text);
          alert('Email sent successfully!'); // Display a success message
      }, (error) => {
          console.log(error.text);
          alert('Error sending email. Please try again.'); // Display an error message
      });
  };
 
   return (
     


      <>

  <Loader/>
  


<div ref={swiperContainerRef} className="swiper-container">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <div className="content">
            <div className="slide-text">
            <div>
                
              <p>we provide best IT-services</p>
            </div>
            </div>
            <div className="slide-text2 sub-title">
              <p>Best IT & Agritech <br/>
              Solutions </p>
            </div>
            <div className="slide-text3">
              <p>In the rapidly evolving world of agriculture, our team specializes <br/>in harnessing technology to empower farmers and agricultural businesses. </p>
            </div>
            <img
              src={Img4}
              alt="Slide 1"
              className="slide-image homeImg"
            />
          </div>
        </div>
    
      </div>
      
      {/* Add navigation buttons if needed */}
    </div>
    <div className='appointmentcontain'>
    <div className='Appointment'>
<h2>Book Appointment</h2>
<p>Book your Appointment with us and get direct consultancy with our team</p>

<input className='input' type='text' placeholder='Your Name'/>
<input className='input' type='email' placeholder='Your email'/>

<button type='submit'>Get Appointment</button>
    </div>
</div>
   
       

{/* services start */}

<div id="services">
<div class="container">
  <h1 class="sub-title tit">World best IT-Services<br/>
we provide</h1>
  <div class="services-list">
    <div className='servicesDiv'>
    
   
    
      <img className='servicesImg'src={Agritech} alt=''/>
      <h2>Agritech Sector</h2>
      <h4>*Farmer Data Collection
     * Monitoring:<br/><br/> 
     *Market Linkage:
*Advisory: 
* Traceability:




      </h4>
      <a href="/">Learn More</a>
    </div>
    <div className='servicesDiv'>
    <img className='servicesImg2' src={CustomizedIT} alt=''/>
      <h2>Customized IT Solutions:

</h2>
      <p>I have done many course and deigned several
        website with favourable UI/UX design and can
        promise to offer the same.
      </p>
      <a href="/">Learn More</a>
    </div>
    <div className='servicesDiv'>
      <img className='servicesImg3' src={datbaseIT} alt=''/>
      <h2>Database Optimisation</h2>
      <p>Have learned MySQL and fully <br/>capable to optimise
        the database i.e. Normalize the database and fetch
        all the data when required.
      </p>
      <a href="/">Learn More</a>
    </div>

  </div>
</div>

</div>
<div  className='testimonial'>
<h1 class="sub-title">Testimonials</h1>
<Testimonials data={testimonialData}/>
</div>
<div className='Products'>
<h1 class="sub-title">Products</h1>
<div className='Product1'>

<div className={`slideInSection1 ${isVisible.slideInSection1 ? 'visible' : ''}`} ref={slideInSectionRef1}>
  {/* Your slide-in section content goes here */}
  
  <h1>Product1</h1>
</div>
</div>
<div className='Product2'>

<div className={`slideInSection2 ${isVisible.slideInSection2 ? 'visible' : ''}`} ref={slideInSectionRef2}>
  {/* Your slide-in section content goes here */}
  
  <h1>Product2</h1>
</div>
</div>
<div className='Product3'>

<div className={`slideInSection3 ${isVisible.slideInSection3 ? 'visible' : ''}`} ref={slideInSectionRef3}>
  {/* Your slide-in section content goes here */}
  
  <h1>Product3</h1>
</div>
</div>
<div className='Product4'>


<div className={`slideInSection4 ${isVisible.slideInSection4 ? 'visible' : ''}`} ref={slideInSectionRef4}>
  {/* Your slide-in section content goes here */}
  
  <h1>Product4</h1>
</div>
</div>
</div>



     
<div class="about" id="about">
    <div class="container">
      <div class="row">
        <div class="about-col-1">
          <img className='aboutImg' src={About} alt=''/>
        </div>
        <div class="about-col-2">
          <h1 class="sub-title">About Us</h1>
          <p className='aboutText'>
        
At Taayanam, we are passionate about leveraging technology to drive innovation and transformation across various sectors. 
Our core expertise lies in three key areas - Agritech, Customized IT Solutions, and Policing. With a deep commitment to excellence,
 we provide a range of services and solutions tailored to meet the unique needs of our clients.

          </p>
          </div>
          </div>
          </div>
          </div>
          <div className="contactForm">
          <div className="contact-left">
          <h1 className="sub-title">Contact Us</h1>
       
        
        
        </div>

         <div className="contact-right">
         <form ref={form} onSubmit={sendEmail}>
            <input type="text"  name="user_name" placeholder="Your Name" required/>
            <input type="email" name="user_email" placeholder="Your Email" required/>
            <textarea name="message" rows="6" placeholder="Your Message"></textarea>
            <button type="submit" class="btn btn2">Submit</button>
          </form>
          
        </div>
          </div>
  <Footer/>
  
</>


   );
}

export default Home;