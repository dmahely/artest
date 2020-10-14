import React, { Fragment } from 'react';
import { App } from '../App';
import { ErrorBoundary } from '../ErrorBoundary';

const Container = () => {
    return (
        <Fragment>
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        </Fragment>
    );
};

export { Container };
