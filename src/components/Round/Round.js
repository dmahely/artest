import React from 'react';
import './Round.css'
import { Progress } from '../Progress/Progress.js';
import { Artist } from '../Artist/Artist.js';

const Round = (props) => {
    const {setRoute, rounds, currentRound, albums, setResults} = props;

    if(albums.length === 0) return null; // todo: return loading component

    // calculate current progress
    const width = (currentRound / rounds) * 100;

    const albumCoverArt = albums[currentRound - 1].albumObj.coverArt;
    const albumName = albums[currentRound - 1].albumObj.name;
    const artists = albums[currentRound - 1].artistsArray;

    return (
        <div className="Round--container">
            <Progress width={width} currentRound={currentRound} rounds={rounds} />
            <img className="Round--album-image" src={albumCoverArt} alt={albumName} />
            <div className="Round--artists-container">
                {artists.map((artist, index) =>
                    <Artist number={index + 1} key={index} name={artist.name} image={artist.image} setRoute={setRoute} answer={artist.isAnswer} results={results} setResults={setResults} />
                )}
            </div>
        </div>
    );
}

export { Round };