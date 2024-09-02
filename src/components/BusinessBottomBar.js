import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import HotelIcon from '@mui/icons-material/Hotel';
import InfoIcon from '@mui/icons-material/Info';

export default function BusinessBottomBar({ currentSection, setCurrentSection }) {
  const handleChange = (event, newValue) => {
    setCurrentSection(newValue);
  };

  return (
    <BottomNavigation
      sx={{ 
        width: 'fit-content', // Adjust width to fit the buttons only
        position: 'absolute', 
        top: 'calc(90vh - 105px)', // Position 20px above the business name
        left: '50%',
        transform: 'translateX(-50%)', // Center horizontally
        backgroundColor: '#fff', 
        zIndex: 1000,
        borderRadius: '15px', // Rounded corners
        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)', // Add shadow for floating effect
        padding: '2px', // Add padding inside the bar
        display: 'flex',
        justifyContent: 'center',
        '& .Mui-selected': {
          color: 'grey !important', // Change the color of the selected item to grey
        },
        '& .MuiBottomNavigationAction-root': {
          color: 'grey !important', // Set default color for the icons to grey
          minWidth: '65px', // Set a minimum width for the action buttons

        },
        '& .MuiSvgIcon-root': {
          fontSize: '1.2rem', // Reduce the size of the icons
        },
      }}
      value={currentSection}
      onChange={handleChange}
    >
      <BottomNavigationAction
        label="Food"
        value="food"
        icon={<FastfoodIcon />}
      />
      <BottomNavigationAction
        label="Services"
        value="services"
        icon={<RoomServiceIcon />}
      />
      <BottomNavigationAction
        label="Rooms"
        value="rooms"
        icon={<HotelIcon />}
      />
      <BottomNavigationAction
        label="General"
        value="general"
        icon={<InfoIcon />}
      />
    </BottomNavigation>
  );
}