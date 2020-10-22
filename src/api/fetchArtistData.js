// gets the correct artist ids for the upcoming rounds and fetches their data

const fetchArtistData = async (albums) => {
    const accessToken = JSON.parse(localStorage.getItem('token'));

    const artists = await fetch('/artists', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ accessToken, albums }),
    });
    const jsonified = await artists.json();

    return jsonified;
};

export { fetchArtistData };
