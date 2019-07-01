"use strict";
/**
 * 这个例子说明了为什么在一个module中，
 * 使用exports={}是没用的，
 * 需要使用module.exports={}。
 *
 * js上的原因是，这里传递的参数是按照共享传递的方式，即参数传递的是原对象的指针的副本，
 * 这就解释了，为什么修改exports.a是可行的，但是直接对exports进行赋值是无用的。
 */
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
    /**
     * 结果输出：
     * 单独导出a方法
     * 单独导出a方法
     * 正确的导出一个包含a方法的对象
     */
})();
