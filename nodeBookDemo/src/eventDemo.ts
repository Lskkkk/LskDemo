/**
 * 验证<<深入浅出Node.js>>4.3.1中提到的利用事件队列解决雪崩问题
 */
import events from 'events';

const TIME_LIMIT = 500;
let status: string = 'ready';
const proxy = new events.EventEmitter();

const read = (callback: () => void) => {
    proxy.once('finish', callback);
    if (status === 'ready') {
        status = 'pending';
        console.log('waiting');
        setTimeout(
            () => {
                status = 'ready';
                proxy.emit('finish');
            },
            TIME_LIMIT
        );
    }
};

read(() => console.log('1'));
read(() => console.log('2'));
read(() => console.log('3'));

/**
 * 输出：
 * waiting
 * 1
 * 2
 * 3
 */