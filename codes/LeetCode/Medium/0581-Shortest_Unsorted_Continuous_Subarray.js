// https://leetcode.com/problems/shortest-unsorted-continuous-subarray/submissions/
// 581. Shortest Unsorted Continuous Subarray, 정렬된 Array의 item 갯수를 return 하는 문제랄까

// 1차시, 통과 성공 (무식하게(?) 풀기) (2021.05.22)
/**
 * @param {number[]} nums
 * @return {number}
 */
const findUnsortedSubarray = (nums) => {
    const originNums = nums.slice();
    nums.sort((a, b) => a - b);

    if (originNums.every((v, i) => v === nums[i])) return 0;

    let startIdx, endIdx;
    const numsLength = nums.length - 1;
    let pivot = 0;

    while (isNaN(startIdx) || isNaN(endIdx)) {
        if (isNaN(startIdx)) {
            if (nums[pivot] !== originNums[pivot]) {
                startIdx = pivot;
                pivot = numsLength;
            } else pivot++;
        } else if (isNaN(endIdx)) {
            if (nums[pivot] !== originNums[pivot]) endIdx = pivot;
            else pivot--;
        }
    }
    const result = endIdx - startIdx;
    return result ? result + 1 : 0;
};
