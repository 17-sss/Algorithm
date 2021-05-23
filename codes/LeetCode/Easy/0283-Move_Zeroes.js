// https://leetcode.com/problems/move-zeroes/
// 283. Move Zeroes

// 3차시, 통과 성공 (강의 참고)
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums) => {
    let startIdx = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            if (nums[i] === nums[startIdx]) {
                startIdx++;
                continue;
            }
            const value = nums[i];
            nums[startIdx] = value;
            nums[i] = 0;

            startIdx++;
        }
    }
};

// 2차시, 통과 실패
    // [0, 0, 1] 처리 불가
    const moveZeroes = (nums) => {
        let idx = 0;
        while (true) {
            if (nums[idx] === 0) {
                nums.splice(idx, 1);
                nums.push(0);
            }
            if (nums.length - 1 === idx) break;
            idx++;
        }
        return nums;
    };

// 1차시, 통과 실패
    // [0, 1, 0, 3, 12] 처리 불가
const moveZeroes = (nums) => {
    let nLoopCnt = 0;
    while (nLoopCnt < nums.length) {
        const currValue = nums.shift();
        if (currValue === 0) nums.push(currValue);
        else nums.unshift(currValue);
        nLoopCnt++;
    }

    return nums;
};
