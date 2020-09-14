const extractThreeRelatedArtists = (data) => {
    const relatedArtists = data.artists.slice(0, 3).map((artist) => {
        const artistObj = {
            name: artist.name,
            id: artist.id,
            image: artist.images[0].url,
            isAnswer: false,
        }
        return artistObj
    })
    return relatedArtists
}

export { extractThreeRelatedArtists }
