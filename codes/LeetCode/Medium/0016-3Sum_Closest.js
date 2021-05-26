// https://leetcode.com/problems/3sum-closest/
// 16. 3Sum Closest

// 2차시, 통과 성공 (이해 필요)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const threeSumClosest = (nums, target) => {
    nums.sort((a, b) => a - b);

    let result = nums[0] + nums[1] + nums[2];

    for (let pivot = 0; pivot < nums.length - 1; pivot++) {
        let left = pivot + 1;
        let right = nums.length - 1;

        while (left < right) {
            const pivotNum = nums[pivot];
            const leftNum = nums[left];
            const rightNum = nums[right];
            const sum = pivotNum + leftNum + rightNum;

            const absResult = Math.abs(result - target);
            const absSum = Math.abs(sum - target);

            if (absSum < absResult) result = sum;
            if (sum === target) return sum;

            if (sum > target) right--;
            else left++;
        }
    }

    return result;
};

// 1차시, 통과 실패
// while 하나로만 해보려했는데..
/*
const threeSumClosest = (nums, target) => {
    nums.sort((a, b) => a - b);
    let result = nums[0] + nums[1] + nums[2];

    let pivot = 0;
    let left = pivot + 1;
    let right = nums.length - 1;

    while (pivot < nums.length) {
        if (right === left) {
            pivot++;
            left = pivot + 1;
            right = nums.length - 1;
        }

        const pivotNum = nums[pivot];
        const leftNum = nums[left];
        const rightNum = nums[right];
        const sum = pivotNum + leftNum + rightNum;

        if (sum === target) return sum;
        if (Math.abs(result - target) > Math.abs(sum - target)) result = sum;

        if (sum > target) right--;
        else left++;
    }

    return result;
};
*/
