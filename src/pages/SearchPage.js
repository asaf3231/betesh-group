import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import '../Styles/SearchPage.css';
import yourIcon from '../assets/Logo-3.png';
import videoFile from '../assets/infinity-pool.mp4'; // Import the video file

const videos = [videoFile]; // Use the imported video

function SearchPage() {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
        }, 7000); // Change video every 7 seconds

        return () => clearInterval(interval); // Clean up the interval on unmount
    }, []);

    return (
        <div className="search-page">
            <div className="icon-container">
                <img src={yourIcon} alt="Search Icon" className="icon-image" /> {/* Display the icon */}
            </div>
            <div className="slideshow-container">
                {videos.map((video, index) => (
                    <div
                        key={index}
                        className={`slideshow-video ${index === currentVideoIndex ? 'active' : ''}`}
                    >
                        <video
                            src={video}
                            autoPlay
                            loop
                            muted
                            className="video-element"
                        />
                    </div>
                ))}
            </div>
            <SearchBar />
        </div>
    );
}

export default SearchPage;
