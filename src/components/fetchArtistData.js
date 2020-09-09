import { extractArtistData } from './extractArtistData';

const baseURL = process.env.REACT_APP_SPOTIFY_BASE_URL;

const fetchArtistData = async(albums, currentRound) => {

    // todo: add check for token validity

    const accessToken = JSON.parse(localStorage.getItem('token'));

    // get artist ids in a comma separated string
    const artistIds = albums.map(round => {
        return round.artistsArray[currentRound - 1].id
    }).join(',');

    const queryParams = new URLSearchParams({
        ids: artistIds
    });
    const stringifiedQueryParams = queryParams.toString();

    // append params to baseURL
    const severalArtistsEndpoint = `${baseURL}/artists?${stringifiedQueryParams}`;

    const artistImagesResponse = await fetch(severalArtistsEndpoint, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + accessToken
        }
    });

    const artistImagesData = await artistImagesResponse.json()
    const artistImages = extractArtistData(artistImagesData);
    
    // map each round's artists obj to an artist image
    albums.forEach((album, index) => {
        album.artistsArray[currentRound - 1].image = artistImages[index];
    });

    return albums;

}

export { fetchArtistData };