const getCurrentRoundArtistId = (albums, currentRound) => {
    const artistId = albums[currentRound - 1].artistsArray[0].id;
    return artistId;
};

export { getCurrentRoundArtistId };
