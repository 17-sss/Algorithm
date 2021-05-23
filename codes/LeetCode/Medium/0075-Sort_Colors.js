// https://leetcode.com/problems/sort-colors/
// 75. Sort Colors

// 3차시, 통과 성공 (강의 참고)
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = (nums) => {
    let pivot = 0;
    let left = 0;
    let right = nums.length - 1;

    while (pivot <= right) {
        if (nums[pivot] === 0) {
            let tmp = nums[pivot];
            nums[pivot] = nums[left];
            nums[left] = tmp;
            left++;
            pivot++;
        } else if (nums[pivot] === 2) {
            let tmp = nums[pivot];
            nums[pivot] = nums[right];
            nums[right] = tmp;
            right--;
        } else {
            pivot++;
        }
    }
};

// 2차시, 통과 실패

/*
const sortColors = (nums) => {
    let pivot = 0;
    let left = 0;
    let right = nums.length - 1;

    while (pivot <= right) {
        if (nums[pivot] === 2) {
            let tmp = nums[right];
            nums[right] = nums[pivot];
            nums[pivot] = tmp;
            right--;
        } else if (nums[pivot] === 0) {
            let tmp = nums[left];
            nums[left] = nums[pivot];
            nums[pivot] = tmp;
            left++;
        }

        pivot++;
    }
};
*/

// 1차시, 통과 실패
/*
 const sortColors = (nums) => {
    let pivot = 0;
    let left = 0;
    let right = nums.length - 1;

    while (pivot <= right) {
        if (pivot === left) {
            pivot++;
            continue;
        }
        if (nums[pivot] < nums[left]) {
            // p 0, l 2
            let tmp = nums[pivot];
            nums[pivot] = nums[left];
            nums[left] = tmp;

            if (nums[left] > nums[right]) {
                let tmp = nums[right];
                nums[right] = nums[left];
                nums[left] = tmp;
                right--;
            }
            left++;
        }
        // 뭔가 이상한데.. 0, 1, 2 뿐인데..
        // 다시 풀기!
    }
};
*/
