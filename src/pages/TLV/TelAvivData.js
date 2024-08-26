const TelAvivData = [
  {
    title: 'Welcome to Tel Aviv',
    description: 'Explore the best places in Tel Aviv',
    imageUrl: '/path/to/welcome-image.jpg',
    items: [], // This section has no items
  },
  {
    title: 'Hotels',
    description: '',
    imageUrl: '../public/Photos-from-Office/Hotel-Rooms.jepg',
    items: [
      { id: 1, name: 'Hotel 1', description: 'A luxurious experience in Tel Aviv.' },
      { id: 2, name: 'Hotel 2', description: 'Enjoy a serene and peaceful stay.' },
    ],
  },
  {
    title: 'Restaurants',
    description: 'The best restaurants in Tel Aviv.',
    imageUrl: '/path/to/restaurant-image.jpg',
    items: [
      { id: 3, name: 'Restaurant 1', description: 'Experience the finest Tel Aviv cuisine.' },
      { id: 4, name: 'Restaurant 2', description: 'A taste of the Mediterranean.' },
      { id: 3, name: 'Restaurant 1', description: 'Experience the finest Tel Aviv cuisine.' },
      { id: 4, name: 'Restaurant 2', description: 'A taste of the Mediterranean.' },
      { id: 3, name: 'Restaurant 1', description: 'Experience the finest Tel Aviv cuisine.' },
      { id: 4, name: 'Restaurant 2', description: 'A taste of the Mediterranean.' },
    ],
  },
  {
    title: 'Bars & NightLife',
    description: 'The best bars and nightlife in Tel Aviv.',
    imageUrl: '/path/to/bar-image.jpg',
    items: [
      { id: 5, name: 'Bar 1', description: 'A vibrant nightlife experience.' },
      { id: 6, name: 'Bar 2', description: 'Cocktails and music in Tel Aviv.' },
    ],
  },
  {
    title: 'Experiences',
    description: 'The best experiences in Tel Aviv.',
    imageUrl: '/path/to/experience-image.jpg',
    items: [
      { id: 7, name: 'Experience 1', description: 'A unique cultural experience in Tel Aviv.' },
      { id: 8, name: 'Experience 2', description: 'Adventure and fun in Tel Aviv.' },
    ],
  },
];

export default TelAvivData;