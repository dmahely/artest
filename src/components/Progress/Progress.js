import React from 'react';
import './Progress.css';

const Progress = ({ width, currentRound, rounds }) => {
    return (
        <div className="Progress--container">
            <span
                className="Progress--percentage"
                style={{ width: width + '%' }}
            >
                {currentRound}/{rounds}
            </span>
        </div>
    );
};

export { Progress };
