import React from 'react';
import './Error.css';
import { Button } from '../Button';
import albumCover from '../../assets/images/error-album-cover.jpg';

const Error = (hasError) => {
    // updates error state and reloads page
    const reloadPage = () => {
        hasError = false;
        window.location.reload();
    };
    return (
        <div className="Error--container">
            <h1 className="Error--heading">Oh no!</h1>
            <img
                className="Error--image"
                src={albumCover}
                alt="Please don't stop the music song cover"
            />
            <p className="Error--text">
                It seems that the music has unfortunately stopped.
            </p>
            <Button text="Try again" onClick={() => reloadPage()} />
        </div>
    );
};

export { Error };
