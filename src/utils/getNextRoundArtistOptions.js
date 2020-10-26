import { getRoundArtistId } from './getRoundArtistId';
import { fetchRelatedArtists } from '../api/fetchRelatedArtists';

const getNextRoundArtistOptions = async (albumsObj, nextRound) => {
    const artistId = getRoundArtistId(albumsObj, nextRound);

    const artists = await fetchRelatedArtists(artistId);

    return artists;
};

export { getNextRoundArtistOptions };
