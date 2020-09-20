import { extractThreeRelatedArtists } from './extractThreeRelatedArtists';

const baseURL = process.env.REACT_APP_SPOTIFY_BASE_URL;

const fetchRelatedArtists = async (albums, artistId, currentRound) => {
    const accessToken = JSON.parse(localStorage.getItem('token'));

    // append params to baseURL
    const relatedArtistsEndpoint = `${baseURL}/artists/${artistId}/related-artists`;

    const relatedArtistsResponse = await fetch(relatedArtistsEndpoint, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + accessToken,
        },
    });

    const relatedArtistsData = await relatedArtistsResponse.json();

    return relatedArtistsData;
};

export { fetchRelatedArtists };
