import { fetchFiveRandomAlbums } from '../api/fetchFiveRandomAlbums';
import { fetchArtistData } from '../api/fetchArtistData';
import { fetchRelatedArtists } from '../api/fetchRelatedArtists';
import { getRoundArtistId } from './getRoundArtistId';
import { extractAlbumData } from './extractAlbumData';
import { extractArtistData } from './extractArtistData';
import { extractThreeRelatedArtists } from './extractThreeRelatedArtists';
import { setNextRoundArtistOptions } from '../utils/setNextRoundArtistOptions';

// gets 5 random albums with related artists

const prepareFiveRoundsData = async (currentRound = 1) => {
    const randomAlbumsData = await fetchFiveRandomAlbums();

    const randomAlbums = extractAlbumData(randomAlbumsData);

    const albumsWithArtistImages = await fetchArtistData(randomAlbums);

    const artistImages = extractArtistData(albumsWithArtistImages);

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
