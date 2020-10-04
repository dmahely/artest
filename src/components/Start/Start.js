import React from 'react';
import './Start.css';
import logo from '../../assets/images/logo.png';
import { Button } from '../Button';

const Start = (props) => {
    const { setRoute } = props;

    return (
        <div className="Start--container">
            <div className="Start--top-shape"></div>
            <div className="Start--bottom-shape"></div>
            <img className="Start--logo" src={logo} alt="Artest logo" />
            <span className="Start--description">
                Guess which artist the album belongs to
            </span>
            <Button text="Start" onClick={() => setRoute('roundSelection')} />

            <footer className="Start--footer">
                <p className="Start--spotify-text">Powered by Spotify. </p>
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
