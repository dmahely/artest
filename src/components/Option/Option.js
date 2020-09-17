import React from 'react';
import './Option.css';

const Option = (props) => {
    return (
        <button
            className={`Option--button ${props.color}`}
            onClick={props.onClick}
        >
            <p>{props.text}</p>
        </button>
    );
};

export { Option };
