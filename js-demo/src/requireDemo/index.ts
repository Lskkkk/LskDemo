const value1 = require('./require/valueSetter');
const value2 = require('./require/valueSetter');
const valueTest = require('./require/requireTest');

export default () => {
    console.log(value2.readA());
    value1.setA(1);
    console.log(value1.readA());
    console.log(value2.readA());
    valueTest();
    console.log(value1.readA());
};
