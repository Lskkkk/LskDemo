console.log('例子2，这个例子说明，在node中，微任务也会入队列');
setTimeout(() => {
    console.log(1);
    Promise.resolve().then(() => console.log(2));
},         0);

setTimeout(() => {
    console.log(3);
    Promise.resolve().then(() => console.log(4));
},         0);

// 1，3，2，4

/**
 * 相同的代码在浏览器环境中输出 1，2，3，4
 * 说明浏览器和Node环境对微任务的处理不一致
 */