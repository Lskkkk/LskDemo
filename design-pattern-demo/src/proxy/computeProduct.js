const computeProduct = (numList) => {
    console.log(`computing... ...`);
    return numList.reduce((s, c) => s * c, 1);
};

// 缓存代理计算
const proxyComputeProduct = (() => {
    const caches = {};
    return (numList) => {
        const key = numList.join('|');
        if (caches[key] === undefined) {
            caches[key] = computeProduct(numList);
        }
        return caches[key];
    };
})();

console.log(proxyComputeProduct([1, 2, 3, 4]));
console.log(proxyComputeProduct([1, 2, 3, 4]));