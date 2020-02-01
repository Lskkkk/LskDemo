// 实例对象
class Instance {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    };
}

// 代理实例的工具
let instance = null;
const proxySingle = (name) => {
    if (instance === null) instance = new Instance(name);
    return instance;
};

exports.proxySingle = proxySingle;