const getAlbumResults = (rounds, results) => {
    const covers = rounds.map((round) => round.album.coverArt);

    let finalResults = [];
    for (let i = 0; i < covers.length; i++) {
        finalResults.push({
            cover: covers[i],
            result: results[i],
        });
    }

    return finalResults;
};

export { getAlbumResults };
