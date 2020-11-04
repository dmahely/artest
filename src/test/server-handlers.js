import { rest } from 'msw';
import { roundsResponse } from './roundsResponse';
import { relatedArtistsResponse } from './relatedArtistsResponse';

/**
 * Here we can define the default mocked responses to certain requests the client
 * attempts to make. We intercept these requests and respond with fake data.
 *
 * Tests can also provide their custom fake responses, which can be useful
 * for example when testing failure cases (endpoint returning 500, etc.)
 */
const handlers = [
    rest.get(`${process.env.REACT_APP_BACKEND_URL}/token`, async (req, res, ctx) => {
        return res(ctx.json({ access_token: 'mock_access_token' }));
    }),
    rest.post(`${process.env.REACT_APP_BACKEND_URL}/rounds`, async (req, res, ctx) => {
        return res(ctx.json(roundsResponse));
    }),
    rest.post(`${process.env.REACT_APP_BACKEND_URL}/relatedArtists`, async (req, res, ctx) => {
        return res(ctx.json(relatedArtistsResponse));
    }),
];

export { handlers };
