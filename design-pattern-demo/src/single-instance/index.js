const proxySingle = require('./single').proxySingle;

const singleA = proxySingle('A');
const singleB = proxySingle('B');

console.log(singleA === singleB);
console.log(singleB.getName() === 'A');