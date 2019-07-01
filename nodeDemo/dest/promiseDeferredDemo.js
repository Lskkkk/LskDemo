"use strict";
/**
 * <<深入浅出node.js>> 4.3.2，利用Events模块实现一个promise/deferred
 */
var EState;
(function (EState) {
    EState[EState["success"] = 0] = "success";
    EState[EState["fail"] = 1] = "fail";
    EState[EState["progress"] = 2] = "progress";
})(EState || (EState = {}));
class MyPromise {
    then(_resolve, _reject, _progress) {
        this._resolve = _resolve;
        this._reject = _reject;
        this._progress = _progress;
    }
    resolve(data) {
        if (this._resolve) {
            this._resolve(data);
        }
    }
    reject(err) {
        if (this._reject) {
            this._reject(err);
        }
    }
    progress(data) {
        if (this._progress) {
            this._progress(data);
        }
    }
}
class MyDefer {
    constructor() {
        this.state = EState.progress;
        this.promise = new MyPromise();
    }
    resolve(data) {
        if (this.state === EState.progress) {
            this.state = EState.success;
            this.promise.resolve(data);
        }
    }
    reject(err) {
        if (this.state === EState.progress) {
            this.state = EState.success;
            this.promise.reject(err);
        }
    }
    progress(data) {
        if (this.state === EState.progress) {
            this.promise.progress(data);
        }
    }
}
const TIME_LIMIT = 1000;
const setDelay = (callback) => setTimeout(callback, TIME_LIMIT);
const promiseSetDelay = () => {
    const myDefer = new MyDefer();
    setTimeout(() => myDefer.resolve(null), TIME_LIMIT);
    return myDefer.promise;
};
setDelay(() => console.log('callback: 延迟1秒输出'));
promiseSetDelay().then(() => console.log('promise: 延迟1秒输出'));
