import { getRoundArtistId } from './getRoundArtistId';
import { fetchRelatedArtists } from '../api/fetchRelatedArtists';
import { extractThreeRelatedArtists } from './extractThreeRelatedArtists';

const getNextRoundArtistOptions = async (albumsObj, nextRound) => {
    const artistId = getRoundArtistId(albumsObj, nextRound);

    const artistsResponse = await fetchRelatedArtists(artistId);

    const artists = extractThreeRelatedArtists(artistsResponse);

    return artists;
};

export { getNextRoundArtistOptions };
