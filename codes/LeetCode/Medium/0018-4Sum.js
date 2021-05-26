// https://leetcode.com/problems/4sum/
// 18. 4Sum

// 1차시, 통과 성공 (JSON.stringify 안쓰고 배열안의 배열아이템 체크하는 법은 없을까..?)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = (nums, target) => {
    nums.sort((a, b) => a - b);

    const result = [];

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let left = j + 1;
            let right = nums.length - 1;

            while (left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right];
                if (target === sum) {
                    const item = JSON.stringify([ nums[i], nums[j], nums[left], nums[right] ]);
                    if (result.indexOf(item) < 0) result.push(item);

                    left++;
                    right--;
                } else if (target > sum) left++;
                else right--;
            }
        }
    }
    return result.map((item) => JSON.parse(item));
};
