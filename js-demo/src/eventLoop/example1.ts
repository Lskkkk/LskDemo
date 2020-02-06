console.log('例子1，这个例子说明，宏任务中嵌套的宏任务还是会按照入队列顺序被执行，不会提前');

setTimeout(() => {
    console.log(1);
    setTimeout(() => console.log(2), 0);
},         0);

setTimeout(() => {
    console.log(3);
    setTimeout(() => console.log(4), 0);
},         0);

// 1,3,2,4

/**
 * 浏览器环境中仍为1，3，2，4，此场景与node环境相同
 */