import { artists } from '../components/artists';

const extractThreeRelatedArtists = (data) => {
    const relatedArtists = data.artists.slice(0, 3).map((artist) => {
        const artistObj = {
            name: artist.name,
            id: artist.id,
            image: artist.images[0].url,
            isAnswer: false,
        };
        return artistObj;
    });

    // if there are less than 3 related artists, get a
    // random artist from fallback array and add it as an option
    while (relatedArtists.length < 3) {
        const randomArtist =
            artists[Math.floor(Math.random() * artists.length)];
        const randomIndex = Math.floor(Math.random() * relatedArtists.length);
        relatedArtists.splice(randomIndex, 0, randomArtist);
    }
    return relatedArtists;
};

export { extractThreeRelatedArtists };
