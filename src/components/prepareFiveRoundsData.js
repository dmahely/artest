import { fetchFiveRandomAlbums } from './fetchFiveRandomAlbums';
import { fetchArtistData } from './fetchArtistData';
import { fetchRelatedArtists } from './fetchRelatedArtists';
import { getRoundArtistId } from './getRoundArtistId';
import { extractAlbumData } from './extractAlbumData';
import { extractArtistData } from './extractArtistData';
import { extractThreeRelatedArtists } from './extractThreeRelatedArtists';

// gets 5 random albums with related artists

const prepareFiveRoundsData = async (currentRound) => {
    const randomAlbumsData = await fetchFiveRandomAlbums();

    const randomAlbums = extractAlbumData(randomAlbumsData);

    const albumsWithArtistImages = await fetchArtistData(
        randomAlbums,
        currentRound
    );

    const artistImages = extractArtistData(albumsWithArtistImages);

    // map each round's artists obj to an artist image
    const albumsWithImages = randomAlbums.map((album, index) => {
        album.artists[currentRound - 1].image = artistImages[index];
        return album;
    });

    const artistId = getRoundArtistId(randomAlbums, currentRound);

    const relatedArtistsData = await fetchRelatedArtists(
        albumsWithImages,
        artistId,
        currentRound
    );

    const relatedArtists = extractThreeRelatedArtists(relatedArtistsData);

    // add related artists to current round's artist array
    relatedArtists.forEach((artist) => {
        // random index between 0-2 to randmoize the index at which the artist will be added
        const randomIndex = Math.floor(Math.random() * 3);
        randomAlbums[currentRound - 1].artists.splice(randomIndex, 0, artist);
    });

    return albumsWithImages;
};

export { prepareFiveRoundsData };
