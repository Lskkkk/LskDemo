const value1 = require('./valueSetter');

module.exports = () => {
    console.log(value1.readA());
    value1.setA(2);
};
