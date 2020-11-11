import React, { useEffect } from 'react';
import './RoundSelection.css';
import { Option } from '../Option';
import { prepareFiveRoundsData } from '../../api/prepareFiveRoundsData';
import { ACTIONS } from '../hooks/actions';
import ReactGA from 'react-ga';

ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_ID);
ReactGA.pageview('/roundSelection');

const RoundSelection = ({ dispatch }) => {
    useEffect(() => {
        const getAlbums = async () => {
            const albums = await prepareFiveRoundsData();
            // ... below happens later

            dispatch({
                // <-- warning comes from here
                type: ACTIONS.SET_ROUNDS,
                payload: albums,
            });
        };

        getAlbums();
    }, [dispatch]);

    return (
        <div className="RoundSelection--container">
            <span className="RoundSelection--question">
                How many rounds do you want to play?
            </span>
            <div className="RoundSelection--options-container">
                <Option
                    text="5"
                    color="yellow"
                    onClick={() => {
                        dispatch({ type: ACTIONS.SET_ROUTE, payload: 'play' });
                        dispatch({
                            type: ACTIONS.SET_ROUNDS_NUM,
                            payload: 5,
                        });
                    }}
                />
                <Option
                    text="10"
                    color="pink"
                    onClick={() => {
                        dispatch({ type: ACTIONS.SET_ROUTE, payload: 'play' });
                        dispatch({
                            type: ACTIONS.SET_ROUNDS_NUM,
                            payload: 10,
                        });
                    }}
                />
                <Option
                    text="15"
                    color="green"
                    onClick={() => {
                        dispatch({ type: ACTIONS.SET_ROUTE, payload: 'play' });
                        dispatch({
                            type: ACTIONS.SET_ROUNDS_NUM,
                            payload: 15,
                        });
                    }}
                />
                <Option
                    text="20"
                    color="navy"
                    onClick={() => {
                        dispatch({ type: ACTIONS.SET_ROUTE, payload: 'play' });
                        dispatch({
                            type: ACTIONS.SET_ROUNDS_NUM,
                            payload: 20,
                        });
                    }}
                />
            </div>
        </div>
    );
};

export { RoundSelection };
