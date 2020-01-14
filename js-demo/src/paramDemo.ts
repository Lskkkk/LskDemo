export default (() => {
    const a = 'a';
    const b = { bb: 'bb' };
    const c = { cc: { ccc: 'ccc' } };

    ((_a, _b, _c) => {
        // tslint:disable-next-line:no-parameter-reassignment
        _a = 'aaaa';
        _b.bb = 'bbbb';
        const newC = { ...c };
        newC.cc.ccc = 'newCCC'; // 解构赋值只能对一层对象有效
    })(a, b, c);

    console.log(a);
    console.log(b);
    console.log(c);
});