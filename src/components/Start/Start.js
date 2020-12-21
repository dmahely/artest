import React, { useEffect } from 'react';
import './Start.css';
import logo from '../../assets/images/logo.svg';
import { Button } from '../Button';
import { ACTIONS } from '../hooks/actions';
import { analyticsHelper } from '../../utils/analyticsHelper';

const Start = ({ dispatch }) => {
    useEffect(() => {
        analyticsHelper.registerPageView('Start');
    }, []);

    return (
        <div className="Start--container">
            <div className="Start--top-shape"></div>
            <div className="Start--bottom-shape"></div>
            <img className="Start--logo" src={logo} alt="Artest logo" />
            <span className="Start--description">
                Guess which artist the album belongs to
            </span>
            <Button
                text="Start"
                onClick={() =>
                    dispatch({
                        type: ACTIONS.SET_ROUTE,
                        payload: 'roundSelection',
                    })
                }
            />

            <footer className="Start--footer">
                <p className="Start--footer-attribution">
                    <span className="Start--developer-text">
                        Developed by{' '}
                        <a
                            className="Start--github-link"
                            href="https://github.com/dmahely"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Doaa Mahely
                        </a>
                        .
                    </span>{' '}
                    <span className="Start--spotify-text">
                        Powered by Spotify.
                    </span>{' '}
                </p>
                <a
                    className="Start--api-status"
                    href="https://status.spotify.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Web API status.
                </a>
            </footer>
        </div>
    );
};

export { Start };
