// maps over GET albums endpoint response data, extracts album and artist details in an object
// returns an array of objects

const extractAlbumData = (data) => {
    const albums = data.albums.items.map((album) => {
        const albumObj = {
            coverArt: album.images[0].url,
            name: album.name,
        }
        const artistsArray = [
            {
                name: album.artists[0].name,
                id: album.artists[0].id,
                isAnswer: true,
            },
        ]
        return { albumObj, artistsArray }
    })

    return albums
}

export { extractAlbumData }
