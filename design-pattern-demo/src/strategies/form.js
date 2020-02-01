/**
 * 表单有三种验证，
 * 1. 名字不为空
 * 2. 密码长度不小于6位
 * 3. 手机号为数字
 * 
 * 对于表单1，检验名字和密码；
 * 对于表单2，检验名字、密码和手机号
 */

// 原实现
(() => {
    const validate = (data1, data2) => {
        const checkName = (value) => value !== '';
        const checkPassword = (value) => value.length >= 6;
        const checkPhone = (value) => /(^1[3|5|8][0-9]{9}$)/.test(value);

        const result1 = checkName(data1.name) && checkPassword(data1.password);
        const result2 = checkName(data2.name) && checkPassword(data2.password) && checkPhone(data2.phone);
        return result1 && result2;
    }

    console.log(validate(
        { name: 'zhang', password: '123', phone: '13333333333' },
        { name: 'liu', password: '123456', phone: '13333333333' },
    ));
})();

// JavaScript版本实现
(() => {
    const validator = {
        name: (value) => value !== '',
        password: (value) => value.length >= 6,
        phone: (value) => /(^1[3|5|8][0-9]{9}$)/.test(value)
    };
    class Context {
        constructor(rules) { this.setRules(rules); }
        setRules(rules) { this.rules = rules; }
        doRules(data) { return this.rules.every(rule => validator[rule](data[rule])); }
    }

    const validate = (data1, data2) => {
        const context = new Context([]);
        context.setRules(['name', 'password']);
        const result1 = context.doRules(data1);
        
        context.setRules(['name', 'password', 'phone']);
        const result2 = context.doRules(data1);
        return result1 && result2;
    }

    console.log(validate(
        { name: 'zhang', password: '123', phone: '13333333333' },
        { name: 'liu', password: '123456', phone: '13333333333' },
    ));
})();