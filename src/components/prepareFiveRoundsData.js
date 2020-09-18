import { fetchFiveRandomAlbums } from './fetchFiveRandomAlbums';
import { fetchArtistData } from './fetchArtistData';
import { fetchRelatedArtists } from './fetchRelatedArtists';
import { getRoundArtistId } from './getRoundArtistId';

// gets 5 random albums with related artists

const prepareFiveRoundsData = async (currentRound) => {
    const randomAlbums = await fetchFiveRandomAlbums();

    const albumsWithArtistImages = await fetchArtistData(
        randomAlbums,
        currentRound
    );

    const artistId = getRoundArtistId(randomAlbums, currentRound);

    const albums = await fetchRelatedArtists(
        albumsWithArtistImages,
        artistId,
        currentRound
    );

    return albums;
};

export { prepareFiveRoundsData };
