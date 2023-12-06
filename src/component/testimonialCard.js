// TestimonialCard.js
import React from 'react';
import './testimonial.css';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="testimonial-card">
      <p className="testimonial-text">{testimonial.text}</p>
      <p className="testimonial-author">{testimonial.author}</p>
    </div>
  );
};

export default TestimonialCard;
