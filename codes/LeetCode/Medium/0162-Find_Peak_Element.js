// https://leetcode.com/problems/find-peak-element/
// 162. Find Peak Element

// 2차시, 통과 성공
/**
 * @param {number[]} nums
 * @return {number}
 */
const findPeakElement = (nums) => {
    let left = 0;
    let right = nums.length - 1;

    if (nums.length <= 1) return 0;

    while (left < right) {
        let pivot = Math.floor((left + right) / 2);
        let num = nums[pivot];
        let nextNum = nums[pivot + 1];

        if (num < nextNum) left = pivot + 1;
        else right = pivot;
    }

    return left; // right해도 상관없어
};

// 1차시, 통과 성공
/**
 * @param {number[]} nums
 * @return {number}
 */
const findPeakElement = (nums) => {
    let pivot = 0;
    let max = nums.length - 1;

    while (pivot <= max) {
        const leftNum = nums[pivot - 1];
        const rightNum = nums[pivot + 1];
        const curr = nums[pivot];

        if (curr > leftNum && curr > rightNum) return pivot;
        else pivot++;
    }

    return nums.findIndex((v) => Math.max(...nums) === v);
};
