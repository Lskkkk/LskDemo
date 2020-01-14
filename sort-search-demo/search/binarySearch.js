const binarySearch = (nums, value) => {
    let left = 0, right = nums.length;
    while (left < right) {
        let middle = Math.floor(right + left + 1) / 2;
        if (nums[middle] >= value) {
            left = middle;
        } else {
            right = middle - 1;
        }
    }
    return left;
};

test('测试', () => {
    expect(binarySearch([1, 2, 3, 4], 2)).toStrictEqual(1);
    expect(binarySearch([1, 3, 5, 7, 10], 7)).toStrictEqual(3);
});