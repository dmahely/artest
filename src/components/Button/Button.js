import React from 'react';
import './Button.css';

const Button = (props) => {
    return (
        <button className="Button--button" onClick={props.onClick}>
            {props.text}
        </button>
    );
};

export { Button };
