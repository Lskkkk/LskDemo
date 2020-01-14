module.exports = {
    "transform": {},
    "testMatch": [
        "**/*.js",
    ],
    "moduleFileExtensions": [
        "js"
    ],
    "coverageDirectory": "./coverage",
    "collectCoverageFrom": [],
    "coveragePathIgnorePatterns": [
        "/@types/",
        "/Mock/"
    ],
    "coverageReporters": [
        "json-summary",
        "lcov",
        "text",
        "html",
    ],
    "reporters": [
        "default",
        "jest-junit",
    ],
    "testPathIgnorePatterns": [
        "node_modules",
        "jest.config.js"
    ]
};
