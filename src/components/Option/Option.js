import React from 'react';
import './Option.css'

const Option = (props) => {
    return (
    <div className='circle'>
        <p>{props.text}</p>
    </div>
    )
}

export { Option };