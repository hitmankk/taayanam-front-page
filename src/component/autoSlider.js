// Carousel.js
import React from 'react';
import Slider from 'react-slick';
import './autoSlider.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const videosData = [
  {
    url: require('../assets/flex1.mp4'),
    text: 'Video 1 - Introduction',
  },
  {
    url: require('../assets/flex2.mp4'),
    text: 'Video 2 - Tutorial',
  },
  {
    url: require('../assets/flex3.mp4'),
    text: 'Video 3 - Demo',
  },
];

const Carousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnFocus: false, // Do not pause on slide focus
    pauseOnHover: false, // Do not pause on hover
  };

  return (
    <div className='VideoCarousel1'>
      <Slider {...settings}>
        {videosData.map((video, index) => (
          <div key={index}>
            <video autoPlay muted loop playsInline className='VideoCarousel'>
              <source src={video.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
