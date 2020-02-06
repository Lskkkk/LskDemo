console.log('例子3，微任务嵌套宏任务，宏任务按照常规顺序入栈');

Promise.resolve().then(() => {
    console.log(1);
    setTimeout(() => console.log(2));
});

Promise.resolve().then(() => {
    console.log(3);
    setTimeout(() => console.log(4));
});

// 1,3,2,4

/**
 * 浏览器环境执行顺序相同
 */