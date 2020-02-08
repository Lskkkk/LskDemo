// 模拟发送http请求
const sendHttp = (message) => console.log(`send ${message}`);

// 代理sendHttp，合并发送http请求
const proxySendHttp = (() => {
    let caches = [];
    setInterval(() => {
        sendHttp(caches.join(', '));
        caches = [];
    }, 2000);
    return (message) => {
        caches.push(message);
    };
})();

const send = () => {
    let i = 0;
    setInterval(() => {
        i++;
        sendHttp(`sync ${i}`);
        proxySendHttp(`async ${i}`);
    }, 500);
};
send();