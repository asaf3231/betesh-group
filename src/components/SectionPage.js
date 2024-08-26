import React from 'react';
import './SectionPage.css';

function Section({ title, description, imageUrl, items }) {
  return (
    <div className="section" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="section-content">
        <h2>{title}</h2>
        {description && <p>{description}</p>}
        <div className="business-list">
          {items.map((item) => (
            <div key={item.id} className="business-item">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section;