import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import './Styles/SearchPage.css';
import yourIcon from './assets/Logo-3.png'; // Update the path as needed

const images = [
    '/Photos-from-Office/Hotel-Lobby.jpeg',
    '/Photos-from-Office/Hotel-Pool.jpeg',
    '/Photos-from-Office/Inside-Pool.jpeg'
];

function SearchPage() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 7000); // Change image every 7 seconds

        return () => clearInterval(interval); // Clean up the interval on unmount
    }, []);

    return (
        <div className="search-page">
            <div className="icon-container">
                <img src={yourIcon} alt="Search Icon" className="icon-image" /> {/* Display the icon */}
            </div>
            <div className="slideshow-container">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`slideshow-image ${index === currentImageIndex ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${image})` }} // Set the background image
                    />
                ))}
            </div>
            <SearchBar />
        </div>
    );
}

export default SearchPage;