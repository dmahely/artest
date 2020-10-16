import React from 'react';
import './Error.css';
import { Button } from '../Button';
const Error = (hasError) => {
    // updates error state and reloads page
    const reloadPage = () => {
        hasError = false;
        window.location.reload();
    };
    return (
        <div className="Error--container">
            <h1 className="Error--text">Something went wrong.</h1>
            <Button text="Try again" onClick={() => reloadPage()} />
        </div>
    );
};

export { Error };
