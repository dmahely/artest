import React from 'react';
import './Result.css'
import { Button } from '../Button/Button';
import { getCurrentRoundResult } from '../getCurrentRoundResult';

const Result = (props) => {
    const {setRoute, setCurrentRound, rounds, currentRound, albums, results} = props;

    const roundResult = getCurrentRoundResult(albums, currentRound, results);

    const { albumCoverArt, albumName, result, artistName } = roundResult;

    // for changing the route and updating current round
    const handleClick = (e) => {
        if(currentRound < rounds) {
            setCurrentRound(currentRound => currentRound + 1);
            setRoute('play');
        } else {
            setRoute('end');
        }
    }

    return (
        <div className={`Result--container ${result ? "correct" : "incorrect"}`}>
            <img className="Result--album-image" src={albumCoverArt} alt={albumName} />
            <p className="Result--result">{result ? "Correct" : "Incorrect"}</p>
            <p className="Result--payload">{artistName} is the artist behind {albumName}</p>
            <Button text="Continue" onClick={() => handleClick()}/>
        </div>
        )
    }

export { Result };