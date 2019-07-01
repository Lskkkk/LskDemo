"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 验证<<深入浅出Node.js>>4.3.1中提到的利用事件队列解决雪崩问题
 */
const events_1 = __importDefault(require("events"));
const TIME_LIMIT = 500;
let status = 'ready';
const proxy = new events_1.default.EventEmitter();
const read = (callback) => {
    proxy.once('finish', callback);
    if (status === 'ready') {
        status = 'pending';
        console.log('waiting');
        setTimeout(() => {
            status = 'ready';
            proxy.emit('finish');
        }, TIME_LIMIT);
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
