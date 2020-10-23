import React from 'react';
import './Progress.css';

const Progress = ({ width, currentRound, roundsNum }) => {
    return (
        <div className="Progress--container">
            <span
                className="Progress--percentage"
                style={{ width: width + '%' }}
            >
                {currentRound}/{roundsNum}
            </span>
        </div>
    );
};

export { Progress };
