const getCurrentRoundResult = (albums, currentRound, results) => {
    const albumCoverArt = albums[currentRound - 1].albumObj.coverArt;
    const albumName = albums[currentRound - 1].albumObj.name;
    const result = results[currentRound - 1];
    const artistObject = albums[currentRound - 1].artistsArray.filter(
        (artist) => artist.isAnswer
    )[0];
    const artistName = artistObject.name;

    return { albumCoverArt, albumName, result, artistName };
};

export { getCurrentRoundResult };
