import { setNextRoundArtistOptions } from '../utils/setNextRoundArtistOptions';

// gets 5 random albums with related artists

const prepareFiveRoundsData = async (roundNum = 1) => {
    const accessToken = JSON.parse(localStorage.getItem('token'));

    const roundsResponse = await fetch('/rounds', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ accessToken, roundNum }),
    });
    const {
        rounds,
        relatedArtists,
        currentRound,
    } = await roundsResponse.json();

    const newRounds = setNextRoundArtistOptions(
        rounds,
        relatedArtists,
        currentRound
    );

    return newRounds;
};

export { prepareFiveRoundsData };
