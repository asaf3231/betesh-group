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
    <div className="section-page">
      <div 
        className="imgbackground" 
        style={{ 
          backgroundImage: `url(${imageUrl})`
        }}
      ></div>
      <div className="section-header">
        <h1>{title}</h1>
        <p className="section-description">{description}</p>
      </div>
      <div className="section-content">
        {items.map((item) => (
          <BusinessItem
            key={item.id}
            name={item.name}
            description={item.description}
            imageUrl={item.imageUrl}
            onClick={() => handleBusinessClick(item.id)} // Directly handle click event here
          />
        ))}
      </div>
    </div>
  );
};

export default SectionPage;
