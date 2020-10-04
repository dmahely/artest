const getRoundArtistId = (rounds, currentRound) => {
    const artistId = rounds[currentRound - 1].artists[0].id;
    return artistId;
};

export { getRoundArtistId };
