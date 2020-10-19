import React from 'react';
import './Container.css';
import { App } from '../App';
import { ErrorBoundary } from '../ErrorBoundary';

const Container = () => {
    return (
        <div className="Container--container">
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        </div>
    );
};

export { Container };
