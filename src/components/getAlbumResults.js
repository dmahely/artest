const getAlbumResults = (albums, results) => {
    const covers = albums.map(album => album.albumObj.coverArt);

    let finalResults = [];
    for(let i = 0; i < covers.length; i++) {
        finalResults.push({
            cover: covers[i],
            result: results[i]
        });
    }

    return finalResults;
}

export { getAlbumResults };