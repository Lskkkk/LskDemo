const sort = (A) => {
    quickSort(A, 0, A.length - 1);
};

const quickSort = (array, l, r) => {
    let i = l, j = r;
    let middle = Math.floor((i + j) / 2);
    let middleV = array[middle];
    while (i <= j) {
        while (array[i] < middleV) i++; // 寻找比支点大的数
        while (array[j] > middleV) j--; // 寻找比支点小的数

        if (i <= j) {
            let tmp = array[i];
            array[i] = array[j];
            array[j] = tmp;
            i++;  // 交换之后记得向后查找，i === j 时会无限循环
            j--;
        }
    }

    if (l < j) {
        quickSort(array, l, j);
    }
    if (i < r) {
        quickSort(array, i, r);
    }

};

test('正常数据', () => {
    const aaa = [3, 1, 6, 2, 4, 7, 9, 5, 8];
    sort(aaa);
    expect(aaa).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});