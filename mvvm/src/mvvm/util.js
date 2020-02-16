const getExp = (vm, exp) => {
    const expList = exp.split('.').reverse();
    let value = null;
    expList.every((e) => {
        value = vm[e];
        return value === undefined;
    });
    return value;
};

export {
    getExp
};