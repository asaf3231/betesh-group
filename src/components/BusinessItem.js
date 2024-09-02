import React from 'react';
import '../Styles/BusinessItem.css';

function BusinessItem({ name, title, description, imageUrl, onClick }) {

    console.log(title);
  return (
    <div className="business-item" onClick={onClick}>
      <div className="business-image-container">
        {/* Optionally, add image handling here */}
      </div>
      <div className="business-info">
        {title && <h2 className="business-title">{title}</h2>} {/* Display the title if provided */}
        {name && <h2 className="business-name">{name}</h2>} {/* Display the name */}
        {description && <p className="business-description">{description}</p>} {/* Display the description */}
      </div>
    </div>
  );
}

export default BusinessItem;