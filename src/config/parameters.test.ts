import { getParameters } from "./parameters";
import { MOCKED_MINIMIST_EMPTY, MOCKED_MINIMIST_WITH_A_URL, MOCKED_MINIMIST_WITH_TWO_URL, MOCKED_MINIMIST_WITH_TWO_URL_AS_ARRAY, MOCKED_URL } from './parameters.fixture'

describe('parameters', () => {

    describe('url', () => {
        it("should return undefined when url is not supplied", () => {
            const { url } = getParameters(MOCKED_MINIMIST_EMPTY);
            expect(url).toEqual(undefined);
        });

        it("should return array when one url is supplied", () => {
            const { url } = getParameters(MOCKED_MINIMIST_WITH_A_URL);
            expect(url).toEqual([MOCKED_URL.DEFAULT]);
        });

        it("should return array when two urls are supplied", () => {
            const { url } = getParameters(MOCKED_MINIMIST_WITH_TWO_URL);
            expect(url).toEqual([MOCKED_URL.DEFAULT, MOCKED_URL.SECOND]);
        });

        it("should return array when two urls are supplied as array", () => {
            const { url } = getParameters(MOCKED_MINIMIST_WITH_TWO_URL_AS_ARRAY);
            expect(url).toEqual([MOCKED_URL.DEFAULT, MOCKED_URL.SECOND]);
        });
    })
})