import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import TelAvivData from './TelAvivData';
import SectionPage from '../../components/SectionPage';
import BottomBar from '../../components/BottomBar';
import { useNavigate } from 'react-router-dom';
import '../../Styles/SectionPage.css';

function TelAvivPage() {
  const [index, setIndex] = React.useState(0);
  const navigate = useNavigate();

  const handleChangeIndex = (index) => {
    setIndex(index);
  };

  const handleBusinessClick = (id) => {
    navigate(`/business/${id}`);
  };

  return (
    <div className="tel-aviv-page">
      <SwipeableViews index={index} onChangeIndex={handleChangeIndex}>
        {TelAvivData.map((section, idx) => (
          <div key={idx}>
            <SectionPage
              title={section.title}
              description={section.description}
              imageUrl={section.imageUrl}
              items={section.items}
              onBusinessClick={handleBusinessClick} // Pass the click handler
            />
          </div>
        ))}
      </SwipeableViews>
      <BottomBar index={index} setIndex={setIndex} />
    </div>
  );
}

export default TelAvivPage;