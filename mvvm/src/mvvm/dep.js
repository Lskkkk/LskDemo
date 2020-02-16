class Dep {
    static target; // 用于存放当前初始化的watcher
    constructor() {
        this.id = Date.now();
        this.subs = [];
    }

    addSub(watcher) {
        this.subs.push(watcher);
    }

    depend() {
        if (Dep.target) {
            Dep.target.addDep(this);
        }
    }

    notify() {
        this.subs.forEach(sub => sub.update());
    }
}

export default Dep;