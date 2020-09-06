import React, { useContext, useEffect } from 'react';
import './RoundSelection.css';
import { Option } from '../Option/Option';
import { AccessTokenContext } from '../../hooks/TokenContext';

const baseURL = process.env.REACT_APP_SPOTIFY_BASE_URL;

const RoundSelection = (props) => {
    const {setRoute, setRounds, setAlbums, albums} = props;
    const accessToken = useContext(AccessTokenContext);
    
    useEffect(() => {
        const fetchRandomAlbums = async(accessToken) => {

        const queryParam = 'one%'; // to be randomized
        const offsetParam = 5; // a number between 1 and 2000
        const typeParam = 'album';
        const limitParam = 5; // initial batch

        const queryParams = new URLSearchParams({
            q: queryParam,
            type: typeParam,
            limit: limitParam,
            offset: offsetParam
          });

        const stringifiedQueryParams = queryParams.toString();

        // append params to baseURL
        const searchEndpoint = `${baseURL}/search?` + stringifiedQueryParams;

        const albums = await fetch(searchEndpoint, {
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + accessToken.token
            }
        })
        .then(response => response.json())
        .then(data => {
            // map over response and return an album object for each one
            // album object: {name, coverArt, artistId, artistName}
            const albums = data.albums.items.map(album => {
                const albumObj = {
                    coverArt: album.images[0].url,
                    name: album.name
                }
                const artistsArray = [{
                    name: album.artists[0].name,
                    id: album.artists[0].id,
                    isAnswer: true
                }];

                return { albumObj, artistsArray };
            });

            fetchArtistData(accessToken, albums);

            return albums;
        })
        .catch(err => console.log(err));

        setAlbums(albums);
    }

    const fetchArtistData = async(accessToken, albums) => {
        // get artist ids in a comma separated string
        const artistIds = albums.map(round => {
            return round.artistsArray[0].id
        }).join(',');

        const queryParams = new URLSearchParams({
            ids: artistIds
        });
        const stringifiedQueryParams = queryParams.toString();

        // append params to baseURL
        const severalArtistsEndpoint = `${baseURL}/artists?` + stringifiedQueryParams;

        const artistImages = await fetch(severalArtistsEndpoint, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken.token
            }
         })
        .then(response => response.json())
        .then(data => {
            // return artist images in an array
            const images = data.artists.map(artist => artist.images[0].url);
            return images;
        });
        
        // map each round's artists obj to an artist image
        albums.forEach((album, index) => {
            album.artistsArray[0].image = artistImages[index];
        });

        fetchRelatedArtists(accessToken, albums);
    }

    const fetchRelatedArtists = async(accessToken, albums) => {
        // returns the current round's artist id 
        const artistId = albums[0].artistsArray[0].id;

        // append params to baseURL
        const relatedArtistsEndpoint = `${baseURL}/artists/${artistId}/related-artists`;

        const relatedArtists = await fetch(relatedArtistsEndpoint, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken.token
            }
         })
        .then(response => response.json())
        .then(data => {
            // get 3 most related artists
            const relatedArtists = data.artists.slice(0, 3).map(artist => {
                const artistObj = {
                    name: artist.name,
                    id: artist.id,
                    image: artist.images[0].url,
                    isAnswer: false,
                }
                return artistObj;
            });
            return relatedArtists;
        });
        
        // map each album to an artist image
        relatedArtists.forEach(artist => {
            albums[0].artistsArray.push(artist);
        });
    }

    fetchRandomAlbums(accessToken);
    }, []);

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