import React, { useEffect } from 'react';
import './RoundSelection.css';
import { Option } from '../Option/Option';
import { fetchFiveRandomAlbums } from '../fetchFiveRandomAlbums';
import { fetchArtistData } from '../fetchArtistData';
import { fetchRelatedArtists } from '../fetchRelatedArtists';
import { getCurrentRoundArtistId } from '../getCurrentRoundArtistId';

const RoundSelection = (props) => {
    const {setRoute, setRounds, setAlbums, currentRound} = props;
    
    useEffect(() => {
        const getAlbums = async() => {
            // todo: structure these three calls in a better way

            const randomAlbums = await fetchFiveRandomAlbums();

            const albumsWithArtistImages = await fetchArtistData(randomAlbums, currentRound);

            const artistId = getCurrentRoundArtistId(randomAlbums, currentRound);

            const albums = await fetchRelatedArtists(albumsWithArtistImages, artistId, currentRound);
            setAlbums(albums);
        }

        getAlbums();
    }, [setAlbums, currentRound]);

    return (
        <div className="RoundSelection--container">
            <span className="RoundSelection--question">How many rounds do you want to play?</span>
            <div className="RoundSelection--options-container">
                <Option text="5" color="yellow" onClick={() => { setRoute('play'); setRounds(5) }} />
                <Option text="10" color="pink" onClick={() => { setRoute('play'); setRounds(10) }} />
                <Option text="15" color="green" onClick={() => { setRoute('play'); setRounds(15) }} />
                <Option text="20" color="navy" onClick={() => { setRoute('play'); setRounds(20) }} />
            </div>
        </div>
    );
}

export { RoundSelection };