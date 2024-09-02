const HotelData = {
  telAviv: {
    1: {
      id: 1,
      name: 'The Drisco Hotel',
      address: 'Nachmani St 23-25, Tel Aviv-Yafo, Israel',
      phone: '+972 3-543-5555',
      website: 'thedrisco.com',
      description: 'Historic, luxury boutique hotel in Tel Aviv.',
      details: 'Open 24 hours every day.',
      photos: [ 
        require('../../../assets/HOTEL-Pool.jpeg'),
        require('../../../assets/Hotel-Rooms.jpeg'),
        require('../../../assets/room-with-a-view.avif'),
        require('../../../assets/Room-With-A-View-2.avif'),
        require('../../../assets/pool-and-couch.avif'),
        // Add more photos as needed
      ],
      googleRating: 4.8,
    },
    // Add more businesses as needed
  },
  // Add more cities and businesses as needed
};

export default HotelData;