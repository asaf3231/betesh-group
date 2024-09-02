import React, { useState } from 'react';
import '../Styles/BusinessPage.css';
import StarIcon from '@mui/icons-material/Star';

function BusinessPage({ business }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === business.photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? business.photos.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentImageIndex(index);
  };

  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipeGesture();
  };

  const handleSwipeGesture = () => {
    if (touchStartX - touchEndX > 75) {
      nextSlide(); // swipe left
    }
    if (touchEndX - touchStartX > 75) {
      prevSlide(); // swipe right
    }
  };

  return (
    <div className="business-page">
      {/* Image Carousel Container */}
      <div
        className="business-image-container"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={business.photos[currentImageIndex]}
          alt={`${business.name}`}
          className="business-image"
        />
      </div>

      {/* Navigation Dots */}
      <div className="dots-container">
        {business.photos.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentImageIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>

      {/* Information Container */}
      <div className="business-info-container">
        <div className="business-info-header">
          <h1 className="business-name">{business.name}</h1>
          <div className="business-rating">
            <StarIcon className="star-icon" />
            <span>{business.googleRating}</span>
          </div>
        </div>

        {/* Business Details */}
        <div className="business-details">
          <p>Location: {business.address}</p>
          <p>Contact: {business.phone}</p>
          <p>Description: {business.description}</p>
        </div>
      </div>
    </div>
  );
}

export default BusinessPage;