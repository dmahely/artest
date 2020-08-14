import React from 'react';
import './Option.css'

const Option = (props) => {
    return (
        <div className={`circle ${props.color}`}>
            <p>{props.text}</p>
        </div>
        )
    }

export { Option };