import React from 'react'
import './Progress.css'

const Progress = (props) => {
    return (
        <div className="Progress--container">
            <span
                className="Progress--percentage"
                style={{ width: props.width + '%' }}
            >
                {props.currentRound}/{props.rounds}
            </span>
        </div>
    )
}

export { Progress }
