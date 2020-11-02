import { getFinalScore } from '../utils/getFinalScore';

it('returns expected result', () => {
    let results = [true, false, false, true, true];
    const expectedResponse = [3, 5];
    expect(getFinalScore(results)).toMatchObject(expectedResponse);
});

it('returns number less than or equal to number of rounds', () => {
    let results = [true, true, true, true, true, true, true, true, true, true];
    const [score, rounds] = getFinalScore(results);
    expect(score).toBeLessThanOrEqual(results.length);
});
