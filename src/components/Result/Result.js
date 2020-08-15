import React from 'react';
import './Result.css'

const Result = (props) => {
    return (
        <div className="Result--container">
            <p className="Result--result">{props.result}</p>
            <p className="Result--payload">{props.payload}</p>
        </div>
        )
    }

export { Result };