import React, { useEffect, useReducer } from 'react';
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
            case ACTIONS.SET_RESULTS:
                state.results = action.payload;
                return { ...state };
            case ACTIONS.SET_ROUNDS:
                state.rounds = action.payload;
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
    const { currentRound, results, rounds, roundsNum, route } = state;

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
            {route === 'start' && <Start dispatch={dispatch} />}
            {route === 'roundSelection' && (
                <RoundSelection
                    dispatch={dispatch}
                    currentRound={currentRound}
                />
            )}
            {state.route === 'play' && (
                <Round
                    dispatch={dispatch}
                    results={results}
                    rounds={rounds}
                    roundsNum={roundsNum}
                    currentRound={currentRound}
                />
            )}
            {state.route === 'result' && (
                <Result
                    dispatch={dispatch}
                    currentRound={currentRound}
                    roundsNum={roundsNum}
                    rounds={rounds}
                    results={results}
                />
            )}
            {state.route === 'end' && (
                <FinalResult
                    dispatch={dispatch}
                    results={results}
                    rounds={rounds}
                />
            )}
        </div>
    );
};

export { App };
