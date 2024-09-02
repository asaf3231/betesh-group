import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/SectionPage.css';
import BusinessItem from './BusinessItem';

const SectionPage = ({ title, description, imageUrl, items }) => {
  const navigate = useNavigate();

  const handleBusinessClick = (id) => {
    navigate(`/telAviv/business/${id}`);
  };

  return (
    <div 
      className="section-page"
      style={{ 
        backgroundImage: `url(${imageUrl})`, /* Dynamically set the background image */
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="scrollable-container">
        {items.map((item) => (
          <BusinessItem
            key={item.id}
            name={item.name}
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
            onClick={() => handleBusinessClick(item.id)} 
          />
        ))}
      </div>
    </div>
  );
};

export default SectionPage;