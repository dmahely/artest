import React from 'react';
import './Error.css';
import { Button } from '../Button';
const Error = () => {
    return (
        <div className="Error--container">
            <h1 className="Error--text">Something went wrong.</h1>
            <Button text="Try again" />
        </div>
    );
};

export { Error };
