import React from 'react';
import './Container.css';
import { App } from '../App';
import { ErrorBoundary } from '../ErrorBoundary';
import ReactGA from 'react-ga';

ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_ID);

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
