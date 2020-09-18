const getRoundArtistId = (albums, currentRound) => {
    const artistId = albums[currentRound - 1].artistsArray[0].id;
    return artistId;
};

export { getRoundArtistId };
