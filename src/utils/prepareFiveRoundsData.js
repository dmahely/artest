import { fetchFiveRandomAlbums } from '../api/fetchFiveRandomAlbums';
import { fetchArtistData } from '../api/fetchArtistData';
import { fetchRelatedArtists } from '../api/fetchRelatedArtists';
import { getRoundArtistId } from './getRoundArtistId';
import { extractThreeRelatedArtists } from './extractThreeRelatedArtists';
import { setNextRoundArtistOptions } from '../utils/setNextRoundArtistOptions';

// gets 5 random albums with related artists

const prepareFiveRoundsData = async (currentRound = 1) => {
    const randomAlbums = await fetchFiveRandomAlbums();

    const artistImages = await fetchArtistData(randomAlbums);

    // map each round's artists obj to an artist image
    const albumsWithImages = randomAlbums.map((album, index) => {
        album.artists[currentRound - 1].image = artistImages[index];
        return album;
    });

    const artistId = getRoundArtistId(randomAlbums, currentRound);

    const relatedArtistsData = await fetchRelatedArtists(artistId);

    const relatedArtists = extractThreeRelatedArtists(relatedArtistsData);

    const updatedAlbums = setNextRoundArtistOptions(
        albumsWithImages,
        relatedArtists,
        currentRound
    );

    return updatedAlbums;
};

export { prepareFiveRoundsData };
