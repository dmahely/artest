
const getCurrentRoundArtistId = (albums, currentRound) => {
    const artistId = albums[currentRound].artistsArray[0].id;
    return artistId;
}

export { getCurrentRoundArtistId };