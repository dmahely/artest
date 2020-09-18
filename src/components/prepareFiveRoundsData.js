import { fetchFiveRandomAlbums } from './fetchFiveRandomAlbums';
import { fetchArtistData } from './fetchArtistData';
import { fetchRelatedArtists } from './fetchRelatedArtists';
import { getCurrentRoundArtistId } from './getCurrentRoundArtistId';

// gets 5 random albums with related artists

const prepareFiveRoundsData = async (currentRound) => {
    const randomAlbums = await fetchFiveRandomAlbums();

    const albumsWithArtistImages = await fetchArtistData(
        randomAlbums,
        currentRound
    );

    const artistId = getCurrentRoundArtistId(randomAlbums, currentRound);

    const albums = await fetchRelatedArtists(
        albumsWithArtistImages,
        artistId,
        currentRound
    );

    return albums;
};

export { prepareFiveRoundsData };
