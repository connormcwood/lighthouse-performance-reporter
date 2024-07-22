module.exports = {
    roots: ['<rootDir>/src'],
    preset: 'ts-jest',
    testEnvironment: 'node',
    reporters: ["default", ["jest-junit", { outputDirectory: "./results/test" }]],
    moduleFileExtensions: ["ts", "js", "json", "node"],
    transform: {
        "^.+\\.ts?$": "ts-jest",
    },
    coverageDirectory: "<rootDir>/results/coverage",
    collectCoverageFrom: [
        "src/**/*.{js,ts}",
    ],
    coverageThreshold: {
        global: {
            branches: 70,
            functions: 70,
            lines: 70,
            statements: 70,
        },
    },
};
