import Dep from './dep';
import { getExp } from './util';

class Watcher {
    constructor(props) {
        this.vm = props.vm;
        this.exp = props.exp;
        this.cb = props.cb;
        this.deps = {};
        this.value = this.get();
    }

    get() {
        Dep.target = this; // 绑定watcher到全局
        const value = getExp(this.vm, this.exp); // 获取当前值，过程中会触发observer的get，完成依赖收集
        Dep.target = null; // 依赖收集完成后清空全局
        return value;
    }

    // 收集并记录当前watcher已经存在于那些Dep中
    addDep(dep) {
        if (!this.deps[dep.id]) {
            this.deps[dep.id] = dep;
            dep.addSub(this);
        }
    }

    update() {
        const newestValue = this.get();
        if (newestValue !== this.value) {
            this.cb(this.value, newestValue);
            this.value = newestValue;
        }
    }
}

export default Watcher;