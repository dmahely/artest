// adds an array of artist objects to the artists array
// in the current round; returns the modified albums object

const setNextRoundArtistOptions = (albumsObj, relatedArtists, round) => {
    // add related artists to current round's artist array
    relatedArtists.forEach((artist) => {
        // random index between 0-2 to randmoize the index at which the artist will be added
        const randomIndex = Math.floor(Math.random() * 3);
        albumsObj[round - 1].artists.splice(randomIndex, 0, artist);
    });

    return albumsObj;
};

export { setNextRoundArtistOptions };
