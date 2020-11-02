// fetches related artists for the passed in artist id

const fetchRelatedArtists = async (artistId) => {
    const accessToken = JSON.parse(localStorage.getItem('token'));
    const relatedArtists = await fetch(`${process.env.REACT_APP_BACKEND_URL}/relatedArtists`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ accessToken, artistId }),
    });
    const jsonified = await relatedArtists.json();

    return jsonified;
};

export { fetchRelatedArtists };
