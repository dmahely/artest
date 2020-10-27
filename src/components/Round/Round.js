import React, { useEffect } from 'react';
import './Round.css';
import { Progress } from '../Progress';
import { Artist } from '../Artist';
import { Loading } from '../Loading';

const Round = ({ dispatch, roundsNum, currentRound, rounds, results }) => {
    // returns loading component if any data we need is still not set in state
    // usually whenever data in state is prepped or when related artists fetch is late
    if (
        rounds.length === 0 ||
        !rounds[currentRound - 1] ||
        rounds[currentRound - 1].artists.length < 4
    )
        return <Loading />;

    // calculate current progress
    const width = (currentRound / roundsNum) * 100;

    const albumCoverArt = rounds[currentRound - 1].album.coverArt;
    const albumName = rounds[currentRound - 1].album.name;
    const artists = rounds[currentRound - 1].artists;

    return (
        <div className="Round--container">
            <Progress
                width={width}
                currentRound={currentRound}
                roundsNum={roundsNum}
            />
            <img
                loading="lazy"
                className="Round--album-image"
                src={albumCoverArt}
                alt={albumName}
            />
            <div className="Round--artists-container">
                {artists.map((artist, index) => (
                    <Artist
                        number={index + 1}
                        key={index}
                        name={artist.name}
                        image={artist.image}
                        dispatch={dispatch}
                        answer={artist.isAnswer}
                        results={results}
                    />
                ))}
            </div>
        </div>
    );
};

export { Round };
