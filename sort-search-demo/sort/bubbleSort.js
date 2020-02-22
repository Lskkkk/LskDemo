const sort = (A) => {
    const length = A.length;
    let tmp = null;
    for (let i = 0; i < length; i++) {
        tmp = A[0];
        for (let j = 0; j < length; j++) {
            if (tmp > A[j]) {
                A[j - 1] = A[j];
                A[j] = tmp;
            }
        }
    }
};

test('正常数据', () => {
    const aaa = [3, 1, 2, 4];
    sort(aaa);
    expect(aaa).toStrictEqual([1, 2, 3, 4]);
});