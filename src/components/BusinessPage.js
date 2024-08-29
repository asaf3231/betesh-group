import React from 'react';
import Slider from 'react-slick';
import '../Styles/BusinessPage.css';
import BusinessBottomBar from './BusinessBottomBar';
import StarIcon from '@mui/icons-material/Star';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function BusinessPage({ business }) {
  const [currentSection, setCurrentSection] = React.useState('general');

  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Loop through slides
    speed: 500, // Transition speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    adaptiveHeight: true, // Adjust height to the content
  };

  return (
    <div className="business-page">
      {/* Image Carousel Container */}
      <div className="business-image-container">
        <Slider {...settings}>
          {business.photos.map((photo, index) => (
            <div key={index}>
              <img src={photo} alt={`Slide ${index}`} className="business-image" />
            </div>
          ))}
        </Slider>
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

      {/* Bottom Navigation Bar */}
      <BusinessBottomBar currentSection={currentSection} setCurrentSection={setCurrentSection} />
    </div>
  );
}

export default BusinessPage;
