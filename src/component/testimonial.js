// Testimonials.js
import React, { useState, useEffect } from 'react';
import TestimonialCard from './testimonialCard';
import './testimonials.css';

const Testimonials = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 3000); // Change the interval as needed

    return () => clearInterval(intervalId);
  }, [data]);

  return (
    <div className="testimonials-container">
    <div className="testimonials-slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
      {data.map((testimonial, index) => (
        <TestimonialCard key={index} testimonial={testimonial} />
      ))}
      {data.length > 1 && (
        <TestimonialCard key={data.length} testimonial={data[0]} /> 
      )}
    </div>
  </div>
  );
};

export default Testimonials;
