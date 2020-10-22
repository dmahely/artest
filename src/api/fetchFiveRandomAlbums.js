const fetchFiveRandomAlbums = async () => {
    const accessToken = JSON.parse(localStorage.getItem('token'));

    const albums = await fetch('/albums', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ accessToken }),
    });
    const jsonified = await albums.json();

    return jsonified;
};

export { fetchFiveRandomAlbums };
