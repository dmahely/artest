import React, { useEffect } from 'react';
import './Round.css'
import { Progress } from '../Progress/Progress.js';
import { Artist } from '../Artist/Artist.js';

const Round = (props) => {
    const {setRoute, rounds, setCurrentRound, currentRound, albums} = props;

    useEffect(() => {
        setCurrentRound(currentRound => currentRound + 1);
    }, []);

    // calculate current progress
    const width = (currentRound / rounds) * 100;

    const albumCoverArt = albums[currentRound].albumObj.coverArt;
    const albumName = albums[currentRound].albumObj.name;
    const artists = albums[currentRound].artistsArray;

    return (
        <div className="Round--container">
            <Progress width={width} currentRound={currentRound} rounds={rounds} />
            <img className="Round--album-image" src={albumCoverArt} alt={albumName} />
            <div className="Round--artists-container">
                {artists.map((artist, index) =>
                    <Artist number={index} key={index} name={artist.name} image={artist.image} setRoute={setRoute} />
                )}
            </div>
        </div>
    );
}

export { Round };