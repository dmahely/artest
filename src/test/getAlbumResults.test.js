import { getAlbumResults } from '../utils/getAlbumResults';
import { fiveRounds } from './fiveRoundsMock';

it('returns 5 results when there are 5 rounds', () => {
    let results = [true, false, false, true, true];
    expect(getAlbumResults(fiveRounds, results).length).toBe(5);
});

it('returns expected result', () => {
    let results = [true, false, false, true, true];
    let finalResults = [
        {
            cover:
                'https://i.scdn.co/image/ab67616d0000b273bbc87dd5388d9a98e80650a4',
            result: true,
        },
        {
            cover:
                'https://i.scdn.co/image/ab67616d0000b273ef063cb80508c55eb443a671',
            result: false,
        },
        {
            cover:
                'https://i.scdn.co/image/ab67616d0000b273648c824765ffe493d9947b62',
            result: false,
        },
        {
            cover:
                'https://i.scdn.co/image/ab67616d0000b2736ce61113662ecf693b605ee5',
            result: true,
        },
        {
            cover:
                'https://i.scdn.co/image/ab67616d0000b27315aa2dd8a8d040a5a93abf8b',
            result: true,
        },
    ];
    expect(getAlbumResults(fiveRounds, results)).toMatchObject(finalResults);
});
