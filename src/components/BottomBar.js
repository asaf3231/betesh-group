import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home'; // Import Home icon for Welcome
import RestaurantIcon from '@mui/icons-material/Restaurant';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import MapIcon from '@mui/icons-material/Map';

export default function BottomBar({ index, setIndex }) {
  const handleChange = (event, newValue) => {
    setIndex(newValue);
  };

  return (
    <BottomNavigation
      sx={{ width: '100%', position: 'fixed', bottom: 0, left: 0, backgroundColor: '#fff', zIndex: 1000 }}
      value={index}
      onChange={(event, newValue) => handleChange(event, newValue)}
    >
      <BottomNavigationAction
        label="Welcome"
        value={0}  // Corresponds to the Welcome section
        icon={<HomeIcon />}  // Home icon for the Welcome section
      />
      <BottomNavigationAction
        label="Hotels"
        value={1}  // Corresponds to the Hotels section
        icon={<RoomServiceIcon />}
      />
      <BottomNavigationAction
        label="Restaurants"
        value={2}  // Corresponds to the Restaurants section
        icon={<RestaurantIcon />}
      />
      <BottomNavigationAction
        label="Bars"
        value={3}  // Corresponds to the Bars section
        icon={<LocalBarIcon />}
      />
      <BottomNavigationAction
        label="Experiences"
        value={4}  // Corresponds to the Experiences section
        icon={<LocalActivityIcon />}
      />
      <BottomNavigationAction
        label="Map"
        value={5}  // Corresponds to the Map section
        icon={<MapIcon />}  // Map icon for the new section
      />
    </BottomNavigation>
  );
}