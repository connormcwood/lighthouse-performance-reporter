export const MOCKED_URL = {
    DEFAULT: 'https://www.example.com',
    SECOND: 'https://www.new.com'
}

export const MOCKED_MINIMIST_EMPTY = {
    _: [],
}

export const MOCKED_MINIMIST_WITH_A_URL = { _: [], url: MOCKED_URL.DEFAULT }

export const MOCKED_MINIMIST_WITH_TWO_URL = { _: [], url: `${MOCKED_URL.DEFAULT},${MOCKED_URL.SECOND}` }

export const MOCKED_MINIMIST_WITH_TWO_URL_AS_ARRAY = { _: [], url: [`${MOCKED_URL.DEFAULT}`, `${MOCKED_URL.SECOND}`] }