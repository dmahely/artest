import React from 'react';
import './ShareButton.css';

const ShareButton = ({ icon, onClick }) => {
    return (
        <button className="ShareButton--button" onClick={onClick}>
            <img className="ShareButton--icon" src={icon} alt={icon} />
        </button>
    );
};

export { ShareButton };
