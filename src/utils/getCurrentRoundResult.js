const getCurrentRoundResult = (rounds, currentRound, results) => {
    const albumCoverArt = rounds[currentRound - 1].album.coverArt;
    const albumName = rounds[currentRound - 1].album.name;
    const albumReleaseYear = rounds[currentRound - 1].album.releaseYear;
    const result = results[currentRound - 1];
    const artistObject = rounds[currentRound - 1].artists.filter(
        (artist) => artist.isAnswer
    )[0];
    const artistName = artistObject.name;

    return { albumCoverArt, albumName, result, artistName, albumReleaseYear };
};

export { getCurrentRoundResult };
