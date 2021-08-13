function binarySearch(arr, elem) {
    let left = 0,
        right = arr.length - 1,
        mid = -1;

    while (left <= right) {
        // 注意是≤：考虑只剩1个元素的情况
        mid = Math.floor((left + right) / 2);

        if (arr[mid] === elem) {
            return true;
        }

        if (elem < arr[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return false;
}

/**
 * 测试代码
 */
console.log(binarySearch([1, 5, 7, 2, 10], 2))