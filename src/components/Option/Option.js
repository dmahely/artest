import React from 'react';
import './Option.css'

const Option = (props) => {
    return (
        <button className={`circle ${props.color}`} onClick={props.onClick}>
            <p>{props.text}</p>
        </button>
        )
    }

export { Option };