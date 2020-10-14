import React from 'react';
import './Round.css';
import { Progress } from '../Progress';
import { Artist } from '../Artist';
import { Loading } from '../Loading';

const Round = ({ setRoute, rounds, currentRound, albums, setResults }) => {
    // returns loading component if any data we need is still not set in state
    // usually whenever data in state is prepped or when related artists fetch is late
    if (
        !albums ||
        albums.length === 0 ||
        !albums[currentRound - 1] ||
        albums[currentRound - 1].length < 4
    )
        return <Loading />;

    // calculate current progress
    const width = (currentRound / rounds) * 100;

    const albumCoverArt = albums[currentRound - 1].album.coverArt;
    const albumName = albums[currentRound - 1].album.name;
    const artists = albums[currentRound - 1].artists;

    return (
        <div className="Round--container">
            <Progress
                width={width}
                currentRound={currentRound}
                rounds={rounds}
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
                        setRoute={setRoute}
                        answer={artist.isAnswer}
                        setResults={setResults}
                    />
                ))}
            </div>
        </div>
    );
};

export { Round };
