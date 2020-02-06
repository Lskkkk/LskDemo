console.log('例子4，微任务嵌套微任务');

Promise.resolve().then(() => {
    console.log(1);
    Promise.resolve().then(() => console.log(2));
});

Promise.resolve().then(() => {
    console.log(3);
    Promise.resolve().then(() => console.log(4));
});

// 1,3,2,4

/**
 * 浏览器执行环境与Node一致
 */