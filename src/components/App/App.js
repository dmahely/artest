import React, { useState, useEffect, useReducer } from 'react';
import './App.css';
import { Start } from '../Start';
import { RoundSelection } from '../RoundSelection';
import { Round } from '../Round';
import { Result } from '../Result';
import { FinalResult } from '../FinalResult';
import { fetchAccessToken } from '../../api/fetchAccessToken';
import { isAccessTokenValid } from '../../utils/isAccessTokenValid';
import { saveAccessToken } from '../../utils/saveAccessToken';
import { ACTIONS } from '../hooks/actions';

const App = () => {
    // todo: refactor to look nicer, maybe in a useReducer

    const reducer = (state, action) => {
        switch (action.type) {
            case ACTIONS.SET_ROUTE:
                if (action.payload === 'reset') return { ...initialState };
                else {
                    state.route = action.payload;
                    return { ...state };
                }
            case ACTIONS.SET_ROUNDS_NUM:
                state.roundsNum = action.payload;
                return { ...state };
            case ACTIONS.SET_CURRENT_ROUND:
                state.currentRound = action.payload;
                return { ...state };
            default:
                throw new Error(`Unkown ${action.type} action`);
        }
    };

    const initialState = {
        route: 'start',
        roundsNum: 5,
        rounds: [],
        currentRound: 1,
        results: [],
    };

    const [state, dispatch] = useReducer(reducer, initialState);
    const [albums, setAlbums] = useState([]);
    const [results, setResults] = useState([]);

    useEffect(() => {
        // handle getting and refreshing access token
        // then saving it in localStorage
        const getToken = async () => {
            if (!(await isAccessTokenValid())) {
                const token = await fetchAccessToken();
                saveAccessToken(token);
            }
        };

        getToken();
    }, []);

    return (
        <div className="App--container">
            {state.route === 'start' && <Start dispatch={dispatch} />}
            {state.route === 'roundSelection' && (
                <RoundSelection
                    dispatch={dispatch}
                    setAlbums={setAlbums}
                    currentRound={state.currentRound}
                />
            )}
            {state.route === 'play' && (
                <Round
                    dispatch={dispatch}
                    albums={albums}
                    rounds={state.roundsNum}
                    currentRound={state.currentRound}
                    setResults={setResults}
                />
            )}
            {state.route === 'result' && (
                <Result
                    dispatch={dispatch}
                    currentRound={state.currentRound}
                    rounds={state.roundsNum}
                    albums={albums}
                    setAlbums={setAlbums}
                    results={results}
                />
            )}
            {state.route === 'end' && (
                <FinalResult
                    dispatch={dispatch}
                    results={results}
                    albums={albums}
                />
            )}
        </div>
    );
};

export { App };
