import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './ImageCarousel.css'; 

const ImageCarousel = () => {
  const images = [
    {
      src: require('../assets/Intro.jpg'), // Adjust the path as needed
      text: 'Head director Lebron James'
    },
    {
      src: require('../assets/Teacher1.jpg'), // Adjust the path as needed
      text: 'Professor Joe Shmoe'
    },
    {
      src: require('../assets/silly.jpg'), // Adjust the path as needed
      text: 'Mr Peter Parker'
    },
    {
      src: require('../assets/Teacher3.jpg'), // Adjust the path as needed
      text: 'Dr. Chip'
    },
    {
      src: require('../assets/Principal.jpg'),
      text: 'Principal Suzan'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change the interval time as needed

    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <button className="carousel-arrow left" onClick={handlePrev}>
          <FaArrowLeft />
        </button>
        <div className="carousel-content">
          <img src={images[currentIndex].src} alt={`Slide ${currentIndex + 1}`} className="carousel-image" />
          <div className="carousel-text">{images[currentIndex].text}</div>
        </div>
        <button className="carousel-arrow right" onClick={handleNext}>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
