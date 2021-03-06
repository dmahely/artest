// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import { server } from './test/server';

var localStorageMock = (function () {
    var store = {};
    return {
        getItem: function (key) {
            return store[key] || null;
        },
        setItem: function (key, value) {
            if (value) {
                store[key] = value.toString();
            }
        },
        clear: function () {
            store = {};
        },
    };
})();
Object.defineProperty(window, 'localStorage', { value: localStorageMock });

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
