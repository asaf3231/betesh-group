import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../Styles/BusinessPage.css';

function BusinessPage() {
  const { id } = useParams();
  const [business, setBusiness] = useState(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const businessData = {
      1: {
        name: 'The Drisco Hotel',
        imageUrl: '/path/to/image1.jpg',
        address: 'Nachmani St 23-25, Tel Aviv-Yafo, Israel',
        phone: '+972 3-543-5555',
        website: 'thedrisco.com',
        description: 'Historic, luxury boutique hotel in Tel Aviv.',
        details: 'Open 24 hours every day.',
      },
      2: {
        name: 'Hotel 2',
        imageUrl: '/path/to/image2.jpg',
        address: 'Another Address, Tel Aviv-Yafo, Israel',
        phone: '+972 3-543-5556',
        website: 'hotel2.com',
        description: 'Another luxurious experience in Tel Aviv.',
        details: 'Open 24 hours every day.',
      },
      // Add more businesses as needed
    };

    // Set the business data directly based on the ID
    if (businessData[id]) {
      setBusiness(businessData[id]);
    } else {
      // Handle the case where the ID does not exist
      console.error(`No business found for ID ${id}`);
    }

    // Trigger the slide-up animation after a short delay
    setTimeout(() => setIsActive(true), 100);
  }, [id]);

  if (!business) return <div>Loading...</div>;

  return (
    <div className={`business-page ${isActive ? 'active' : ''}`}>
      <div className="business-image" style={{ backgroundImage: `url(${business.imageUrl})` }}>
        <h1 className="business-name">{business.name}</h1>
      </div>
      <div className="business-details">
        <p>{business.description}</p>
        <p>{business.details}</p>
        <p><strong>Address:</strong> {business.address}</p>
        <p><strong>Phone:</strong> {business.phone}</p>
        <p><strong>Website:</strong> <a href={`https://${business.website}`} target="_blank" rel="noopener noreferrer">{business.website}</a></p>
      </div>
    </div>
  );
}

export default BusinessPage;