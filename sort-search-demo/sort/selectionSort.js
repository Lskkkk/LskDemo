const sort = (A) => {
    const length = A.length;
    for (let i = 0; i < length; i++) {
        let minIndex = i;
        for (let j = i; j < length; j++) {
            if (A[j] < A[minIndex]) {
                minIndex = j;
            }
        }
        const minNum = A[i];
        A[i] = A[minIndex];
        A[minIndex] = minNum;
    }
};

test('正常数据', () => {
    const aaa = [3, 1, 2, 4];
    sort(aaa);
    expect(aaa).toStrictEqual([1, 2, 3, 4]);
});