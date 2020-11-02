import { getAlbumResults } from '../utils/getAlbumResults';
import { fiveRounds } from './fiveRoundsMock';

it('returns 5 results when there are 5 rounds', () => {
    let results = [true, false, false, true, true];
    expect(getAlbumResults(fiveRounds, results).length).toBe(5);
});
