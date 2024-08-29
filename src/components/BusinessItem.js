    import React from 'react';
    import '../Styles/BusinessItem.css';

    function BusinessItem({ name, description, imageUrl, onClick }) {
    return (
        <div className="business-item" onClick={onClick}>
        <div className="business-image-container">
        </div>
        <div className="business-info">
            <h2 className="business-name">{name}</h2>
            <p className="business-description">{description}</p>
        </div>
        </div>
    );
    }

    export default BusinessItem;