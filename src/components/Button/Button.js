import React from 'react';
import './Button.css';

const Button = ({ text, onClick }) => {
    return (
        <button className="Button--button" onClick={onClick}>
            {text}
        </button>
    );
};

export { Button };
