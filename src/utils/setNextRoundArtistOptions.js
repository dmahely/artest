// adds an array of artist objects in the current round
// returns the modified rounds object

const setNextRoundArtistOptions = (rounds, relatedArtists, currentRound) => {
    relatedArtists.forEach((artist) => {
        // random index between 0-2 to randmoize the index at which the artist will be added
        const randomIndex = Math.floor(Math.random() * 3);
        rounds[currentRound - 1].artists.splice(randomIndex, 0, artist);
    });

    return rounds;
};

export { setNextRoundArtistOptions };
