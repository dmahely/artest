import React, { useEffect } from 'react';
import './RoundSelection.css';
import { Option } from '../Option';
import { prepareFiveRoundsData } from '../../utils/prepareFiveRoundsData';
import { ACTIONS } from '../hooks/actions';

const RoundSelection = ({ dispatch, setRounds, setAlbums, currentRound }) => {
    useEffect(() => {
        const getAlbums = async () => {
            const albums = await prepareFiveRoundsData();
            setAlbums(albums);
        };

        getAlbums();
    }, [setAlbums, currentRound]);

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
                        setRounds(5);
                    }}
                />
                <Option
                    text="10"
                    color="pink"
                    onClick={() => {
                        dispatch({ type: ACTIONS.SET_ROUTE, payload: 'play' });
                        setRounds(10);
                    }}
                />
                <Option
                    text="15"
                    color="green"
                    onClick={() => {
                        dispatch({ type: ACTIONS.SET_ROUTE, payload: 'play' });
                        setRounds(15);
                    }}
                />
                <Option
                    text="20"
                    color="navy"
                    onClick={() => {
                        dispatch({ type: ACTIONS.SET_ROUTE, payload: 'play' });
                        setRounds(20);
                    }}
                />
            </div>
        </div>
    );
};

export { RoundSelection };
