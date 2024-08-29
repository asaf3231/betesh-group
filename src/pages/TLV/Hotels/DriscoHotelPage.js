import React from 'react';
import BusinessPage from './BusinessPage';
import HotelData from './HotelData';

function DriscoHotelPage() {
  const business = HotelData.telAviv[1]; // Get the business data for The Drisco Hotel
  return <BusinessPage business={business} />;
}

export default DriscoHotelPage;