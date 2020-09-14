const extractArtistData = (data) => {
    // return artist images in an array
    const images = data.artists.map((artist) => artist.images[0].url)
    return images
}

export { extractArtistData }
