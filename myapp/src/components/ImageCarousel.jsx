import React, { useState, useEffect } from 'react';
import banner1 from '../assets/banner1.png';
import banner2 from '../assets/banner2.png';
import banner3 from '../assets/banner3.png';

const images = [banner2, banner1, banner3];

function ImageCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
    // हर 3 सेकंड में स्लाइड बदलने के लिए
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    // कॉम्पोनेंट अनमाउंट होने पर इंटरवल को साफ़ करें
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="carousel-container">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Banner ${index + 1}`}
          className={`carousel-image ${index === currentIndex ? 'active' : ''}`}
        />
      ))}
    </div>
  )
}

export default ImageCarousel
