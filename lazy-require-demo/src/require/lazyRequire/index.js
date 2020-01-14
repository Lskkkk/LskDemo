const lazy = {
    get la() {
        return require('./la').la;
    },
    get lb() {
        return require('./lb').lb;
    },
};

module.exports = lazy;
