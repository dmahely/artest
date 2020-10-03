import React from 'react';
import './Option.css';

const Option = ({ color, text, onClick }) => {
    return (
        <button className={`Option--button ${color}`} onClick={onClick}>
            <p>{text}</p>
        </button>
    );
};

export { Option };
