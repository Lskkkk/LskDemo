import observe from './observer';
import Watcher from './watcher';

// compile的原本是绑定observer到View，并且生成更新View的watcher
// 这里只模拟一些操作
export default (() => {
    let obj = {
        a: 1,
        b: 2
    };

    obj = observe(obj);

    // 一些render操作

    // 设置update view的方法
    const update = (old, current) => console.log('old: ' + old + ', current: ' + current);
    update(obj.a, obj.a); // 立即更新
    new Watcher({ // 设置后续订阅
        vm: obj,
        exp: 'a',
        cb: update
    });

    // 模拟VM改变
    obj.a = 2;
});