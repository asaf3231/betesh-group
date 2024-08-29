import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
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
      onChange={handleChange}
    >
      <BottomNavigationAction
        label="Welcome"
        value={0}
        icon={<HomeIcon />}
        sx={{
          color: index === 0 ? 'grey' : 'inherit', // Change color when selected
          '&.Mui-selected': {
            color: 'grey', // Set the selected color to grey
          },
        }}
      />
      <BottomNavigationAction
        label="Hotels"
        value={1}
        icon={<RoomServiceIcon />}
        sx={{
          color: index === 1 ? 'grey' : 'inherit',
          '&.Mui-selected': {
            color: 'grey',
          },
        }}
      />
      <BottomNavigationAction
        label="Restaurants"
        value={2}
        icon={<RestaurantIcon />}
        sx={{
          color: index === 2 ? 'grey' : 'inherit',
          '&.Mui-selected': {
            color: 'grey',
          },
        }}
      />
      <BottomNavigationAction
        label="Bars"
        value={3}
        icon={<LocalBarIcon />}
        sx={{
          color: index === 3 ? 'grey' : 'inherit',
          '&.Mui-selected': {
            color: 'grey',
          },
        }}
      />
      <BottomNavigationAction
        label="Experiences"
        value={4}
        icon={<LocalActivityIcon />}
        sx={{
          color: index === 4 ? 'grey' : 'inherit',
          '&.Mui-selected': {
            color: 'grey',
          },
        }}
      />
      <BottomNavigationAction
        label="Map"
        value={5}
        icon={<MapIcon />}
        sx={{
          color: index === 5 ? 'grey' : 'inherit',
          '&.Mui-selected': {
            color: 'grey',
          },
        }}
      />
    </BottomNavigation>
  );
}