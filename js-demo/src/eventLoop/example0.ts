console.log('简单的例子');

const log = console.log;
setTimeout(() => log(1));
process.nextTick(() => log(2));
Promise.resolve().then(() => log(3));
console.log(4);

// 4,2,3,1