import React from 'react';
import { useParams } from 'react-router-dom';
import BusinessPage from '../../components/BusinessPage';
import HotelData from './Hotels/HotelData';

function TLVBusinessPage() {
  const { id } = useParams(); // Get the business ID from the URL parameters
  const business = HotelData.telAviv[id]; // Get the specific Tel Aviv business data

  if (!business) {
    return <div>Business not found</div>;
  }

  return <BusinessPage business={business} />;
}

export default TLVBusinessPage;