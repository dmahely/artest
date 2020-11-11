import React, { useEffect } from 'react';
import './Result.css';
import { Button } from '../Button';
import { getCurrentRoundResult } from '../../utils/getCurrentRoundResult';
import { getNextRoundArtistOptions } from '../../utils/getNextRoundArtistOptions';
import { setNextRoundArtistOptions } from '../../utils/setNextRoundArtistOptions';
import { prepareFiveRoundsData } from '../../api/prepareFiveRoundsData';
import { ACTIONS } from '../hooks/actions';
import ReactGA from 'react-ga';

ReactGA.pageview('/result');

const Result = ({ dispatch, roundsNum, currentRound, rounds, results }) => {
    const roundResult = getCurrentRoundResult(rounds, currentRound, results);

    useEffect(() => {
        const albumsObj = rounds;
        const nextRound = currentRound + 1;

        const getNextRoundOptions = async () => {
            const artists = await getNextRoundArtistOptions(
                albumsObj,
                nextRound
            );

            const updatedAlbums = setNextRoundArtistOptions(
                albumsObj,
                artists,
                nextRound
            );
            dispatch({ type: ACTIONS.SET_ROUNDS, payload: updatedAlbums });
        };

        const getFiveMoreRounds = async () => {
            const newAlbums = await prepareFiveRoundsData();
            dispatch({
                type: ACTIONS.SET_ROUNDS,
                payload: [...rounds, ...newAlbums],
            });
        };

        // if we have five more rounds
        if (currentRound % 5 === 0 && roundsNum >= nextRound) {
            getFiveMoreRounds();
        }
        // if this is not the last round
        else if (roundsNum >= nextRound) getNextRoundOptions();
    }, [dispatch, roundsNum, currentRound, rounds]);

    const {
        albumCoverArt,
        albumName,
        result,
        artistName,
        albumReleaseYear,
    } = roundResult;

    let description = `${artistName} is the artist behind ${albumName}`;
    if (result) {
        description = `${albumName} was released by ${artistName} in ${albumReleaseYear}`;
    }

    // for changing the route and updating current round
    const handleClick = (e) => {
        if (currentRound < roundsNum) {
            dispatch({
                type: ACTIONS.SET_CURRENT_ROUND,
                payload: currentRound + 1,
            });
            dispatch({ type: ACTIONS.SET_ROUTE, payload: 'play' });
        } else {
            dispatch({ type: ACTIONS.SET_ROUTE, payload: 'end' });
        }
    };

    return (
        <div
            className={`Result--container ${result ? 'correct' : 'incorrect'}`}
        >
            <img
                className="Result--album-image"
                src={albumCoverArt}
                alt={albumName}
            />
            <p className="Result--result">{result ? 'Correct' : 'Incorrect'}</p>
            <p className="Result--payload">{description}</p>
            <Button text="Continue" onClick={() => handleClick()} />
        </div>
    );
};

export { Result };
