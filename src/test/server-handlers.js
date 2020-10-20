import { rest } from 'msw';
import { roundsResponse } from './roundsResponse';
import { relatedArtistsResponse } from './relatedArtistsResponse';

const handlers = [
    rest.get('/token', async (req, res, ctx) => {
        return res(ctx.json({ access_token: 'mock_access_token' }));
    }),
    rest.post('/rounds', async (req, res, ctx) => {
        return res(ctx.json(roundsResponse));
    }),
    rest.post('/relatedArtists', async (req, res, ctx) => {
        return res(ctx.json(relatedArtistsResponse));
    }),
];

export { handlers };
