// MenuItem.js
import React, { useState } from 'react';
import './styles.css'; // CSS dosyanýzý içe aktarýn
import OpenDetails from './OpenDetails';

const MenuItem = ({ item }) => {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    const shortenedDescription = item.description.length > 30 ? `${item.description.slice(0, 30)}...` : item.description;

    return (
        <div className={`menu-item ${showDetails ? 'expanded' : ''}`}>
            <img src={item.image} alt={item.name} />
            <div className="item-details">
                <h3>{item.name}</h3>
                <p className="item-p" >{showDetails ? item.description : shortenedDescription}</p>
                {item.description.length > 30 && (
                    <button onClick={toggleDetails}>{showDetails ? 'Kýsalt' : 'Detaylar'}</button>
                )}
                <p>Price: ${item.price}</p>

                {showDetails && (
                    <OpenDetails show={toggleDetails} item={item} />
                )}
            </div>
        </div>
    );
};

export default MenuItem;
