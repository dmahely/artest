import React from 'react';
import './Loading.css';

const Loading = () => {
    return (
        <div className="Loading--container">
            <p className="Loading--emojis-container">
                <span className="Loading--emoji" role="img" aria-label="Music">
                    🎷
                </span>
                <span className="Loading--emoji" role="img" aria-label="Music">
                    🎵
                </span>
                <span className="Loading--emoji" role="img" aria-label="Music">
                    🎸
                </span>
                <span className="Loading--emoji" role="img" aria-label="Music">
                    🎹
                </span>
                <span className="Loading--emoji" role="img" aria-label="Music">
                    🎶
                </span>
                <span className="Loading--emoji" role="img" aria-label="Music">
                    👩‍🎤
                </span>
            </p>
        </div>
    );
};

export { Loading };
