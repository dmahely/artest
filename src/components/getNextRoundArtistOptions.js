import { getRoundArtistId } from './getRoundArtistId';
import { fetchRelatedArtists } from './fetchRelatedArtists';

const getNextRoundArtistOptions = async (albumsObj, nextRound) => {
    const artistId = getRoundArtistId(albumsObj, nextRound);

    const artists = await fetchRelatedArtists(albumsObj, artistId, nextRound);

    return artists;
};

export { getNextRoundArtistOptions };
