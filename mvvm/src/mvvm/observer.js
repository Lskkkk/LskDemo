import Dep from './dep';

const observe = (data) => {
    if (typeof (data) !== 'object') {
        return;
    }
    const observedData = data;
    Object.keys(observedData).forEach(key => {
        observeChild(observedData, key, observedData[key]);
    });
    return observedData;
};

const observeChild = (data, key, value) => {
    if (typeof (value) === 'object') {
        observe(value);
    } else {
        const dep = new Dep();
        Object.defineProperty(data, key, {
            configurable: false,
            get: () => { // get收集依赖
                console.log('getttttttttt');
                if (Dep.target) {
                    dep.depend(); // 完成依赖收集，将当前全局上的watcher加入到订阅者数组中
                }
                return value;
            },
            set: (newValue) => { // set向订阅者发送消息
                if (newValue !== value) {
                    value = newValue;
                    dep.notify();
                }
            }
        });
    }
};

export default observe;