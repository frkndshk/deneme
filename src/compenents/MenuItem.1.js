import React, { useState } from 'react';

export const MenuItem = ({ item }) => {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    const shortenedDescription = item.description.length > 50 ? `${item.description.slice(0, 50)}...` : item.description;

    return (
        <div className="menu-item">
            <img src={item.image} alt={item.name} />
            <div className="item-details">
                <h3>{item.name}</h3>
                <p>{showDetails ? item.description : shortenedDescription}</p>
                {item.description.length > 50 && (
                    <button onClick={toggleDetails}>{showDetails ? 'Kısalt' : 'Detaylar'}</button>
                )}
                <p>Price: ${item.price}</p>

                {showDetails && (
                    <div className="modal">
                        <div className="modal-content">
                            <p>{item.description}</p>
                            <button onClick={toggleDetails}>Kapat</button>
                        </div>
                    </div>
                )} // MenuItem.js
                // MenuItem.js
                import React, {useState} from 'react';

                const MenuItem = ({item}) => {}
                const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {setShowDetails(!showDetails)};
  };

  const shortenedDescription = item.description.length > 50 ? `${item.description.slice(0, 50)}...` : item.description;

                return (
                <div className={`menu-item ${showDetails ? 'expanded' : ''}`}>
                    <img src={item.image} alt={item.name} />
                    <div className="item-details">
                        <h3>{item.name}</h3>
                        <p>{showDetails ? item.description : shortenedDescription}</p>
                        {item.description.length > 50 && (
                            <button onClick={toggleDetails}>{showDetails ? 'Kısalt' : 'Detaylar'}</button>
                        )}
                        <p>Price: ${item.price}</p>

                        {showDetails && (
                            <div className="modal">
                                <div className="modal-content">
                                    <p>{item.description}</p>
                                    <button onClick={toggleDetails}>Kapat</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                );
};

                export default MenuItem;

            </div>
        </div>
    );
};
