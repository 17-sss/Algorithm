// https://leetcode.com/problems/binary-search/
// 704. Binary Search

// 1차시, 통과 성공 (강의 참고)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// const search = (nums, target) => nums.indexOf(target);
const search = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let pivot = Math.floor((left + right) / 2);

        if (nums[pivot] === target) return pivot;
        else if (nums[pivot] > target) right -= 1;
        else left += 1;
    }

    return -1;
};