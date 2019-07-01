/**
 * <<深入浅出node.js>> 4.3.2，利用Events模块实现一个promise/deferred
 */

enum EState {
    success,
    fail,
    progress
}

class MyPromise {
    private _resolve: ((data: any) => void) | undefined;
    private _reject: ((err: any) => void) | undefined;
    private _progress: ((data: any) => void) | undefined;

    public then(
        _resolve?: (data: any) => void,
        _reject?: (err: any) => void,
        _progress?: (data: any) => void
    ) {
        this._resolve = _resolve;
        this._reject = _reject;
        this._progress = _progress;
    }

    public resolve(data: any) {
        if (this._resolve) {
            this._resolve(data);
        }
    }

    public reject(err: any) {
        if (this._reject) {
            this._reject(err);
        }
    }

    public progress(data: any) {
        if (this._progress) {
            this._progress(data);
        }
    }
}

class MyDefer {
    private state: EState = EState.progress;
    public promise: MyPromise = new MyPromise();

    public resolve(data: any) {
        if (this.state === EState.progress) {
            this.state = EState.success;
            this.promise.resolve(data);
        }
    }

    public reject(err: any) {
        if (this.state === EState.progress) {
            this.state = EState.success;
            this.promise.reject(err);
        }
    }

    public progress(data: any) {
        if (this.state === EState.progress) {
            this.promise.progress(data);
        }
    }
}

const TIME_LIMIT = 1000;
const setDelay = (callback: any) => setTimeout(callback, TIME_LIMIT);

const promiseSetDelay = () => {
    const myDefer = new MyDefer();
    setTimeout(() => myDefer.resolve(null), TIME_LIMIT);
    return myDefer.promise;
};

setDelay(() => console.log('callback: 延迟1秒输出'));
promiseSetDelay().then(() => console.log('promise: 延迟1秒输出'));