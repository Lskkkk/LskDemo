"use strict";
const myModule = {
    exports: {
        a: () => { }
    }
};
const myRequire1 = (exports, _require, _currentModule, _fileName, _dirName) => {
    exports.a = () => console.log('单独导出a方法');
};
const myRequire2 = (_exports, _require, _currentModule, _fileName, _dirName) => {
    // tslint:disable-next-line:no-parameter-reassignment
    _exports = {
        a: () => console.log('错误的导出一个包含a方法的对象')
    };
};
const myRequire3 = (_exports, _require, _currentModule, _fileName, _dirName) => {
    // tslint:disable-next-line:no-parameter-reassignment
    _currentModule.exports = {
        a: () => console.log('正确的导出一个包含a方法的对象')
    };
};
(() => {
    myRequire1(myModule.exports, null, myModule, null, null);
    myModule.exports.a();
    myRequire2(myModule.exports, null, myModule, null, null);
    myModule.exports.a();
    myRequire3(myModule.exports, null, myModule, null, null);
    myModule.exports.a();
})();
