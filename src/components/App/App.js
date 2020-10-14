import React, { useState, useEffect } from 'react';
import './App.css';
import { Start } from '../Start/Start';
import { RoundSelection } from '../RoundSelection/RoundSelection';
import { Round } from '../Round/Round';
import { Result } from '../Result/Result';
import { FinalResult } from '../FinalResult/FinalResult';
import { CleanUp } from '../CleanUp/CleanUp';
import { fetchAccessToken } from '../fetchAccessToken';
import { isAccessTokenValid } from '../isAccessTokenValid';
import { saveAccessToken } from '../saveAccessToken';

const App = () => {
    // todo: refactor to look nicer, maybe in a useReducer
    const [route, setRoute] = useState('start');
    const [rounds, setRounds] = useState(5);
    const [albums, setAlbums] = useState([]);
    const [currentRound, setCurrentRound] = useState(1);
    const [results, setResults] = useState([]);

    useEffect(() => {
        // handle getting and refreshing access token
        // then saving it in localStorage
        const getToken = async () => {
            if (!isAccessTokenValid()) {
                const token = await fetchAccessToken();
                saveAccessToken(token);
            }
        };

        getToken();
    }, []);

    return (
        <div className="App--container">
            {route === 'start' && <Start setRoute={setRoute} />}
            {route === 'roundSelection' && (
                <RoundSelection
                    setRoute={setRoute}
                    setRounds={setRounds}
                    setAlbums={setAlbums}
                    currentRound={currentRound}
                />
            )}
            {route === 'play' && (
                <Round
                    setRoute={setRoute}
                    albums={albums}
                    rounds={rounds}
                    setCurrentRound={setCurrentRound}
                    currentRound={currentRound}
                    setResults={setResults}
                />
            )}
            {route === 'result' && (
                <Result
                    setRoute={setRoute}
                    setCurrentRound={setCurrentRound}
                    currentRound={currentRound}
                    rounds={rounds}
                    albums={albums}
                    setAlbums={setAlbums}
                    results={results}
                />
            )}
            {route === 'end' && (
                <FinalResult
                    setRoute={setRoute}
                    results={results}
                    albums={albums}
                />
            )}
            {route === 'cleanup' && (
                <CleanUp
                    setRoute={setRoute}
                    setRounds={setRounds}
                    setAlbums={setAlbums}
                    setCurrentRound={setCurrentRound}
                    setResults={setResults}
                />
            )}
        </div>
    );
};

export { App };
