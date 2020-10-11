// fetches related artists for the passed in artist id
const baseURL = process.env.REACT_APP_SPOTIFY_BASE_URL;

const fetchRelatedArtists = async (artistId) => {
    const accessToken = JSON.parse(localStorage.getItem('token'));

    // append params to baseURL
    const relatedArtistsEndpoint = `${baseURL}/artists/${artistId}/related-artists`;

    const relatedArtistsResponse = await fetch(relatedArtistsEndpoint, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
        },
    });

    let relatedArtistsData;
    try {
        relatedArtistsData = await relatedArtistsResponse.json();
    } catch (err) {
        console.log(err);
        throw new Error(err);
    }

    return relatedArtistsData;
};

export { fetchRelatedArtists };
