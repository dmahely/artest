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

            const albums = await fetchFiveRandomAlbums();
            setAlbums({ albums });

            const albumsWithArtistImages = await fetchArtistData(albums, currentRound);
            setAlbums({albums: albumsWithArtistImages}); // bug todo: this makes me have to do albums.albums

            const artistId = getCurrentRoundArtistId(albums, currentRound);

            const albumsWithRelatedArtists = await fetchRelatedArtists(albums, artistId, currentRound);
            setAlbums({albums: albumsWithRelatedArtists}); // bug todo: this makes me have to do albums.albums
        }

        getAlbums();
    }, [setAlbums]);

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