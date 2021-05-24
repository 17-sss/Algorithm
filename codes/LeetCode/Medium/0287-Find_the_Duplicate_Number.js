// https://leetcode.com/problems/find-the-duplicate-number/
// 0287. Find the Duplicate Number

// (2021.05.24)
// 3차시, 통과 성공
const findDuplicate = (nums) => {
    let nLoop = 0;
    while (nLoop < nums.length) {
        const curr = nums[nLoop] > 0 ? nums[nLoop] : nums[nLoop] * -1;
        if (nums[curr] !== 0)
            if (nums[curr] > 0) nums[curr] = -nums[curr];
            else return curr;

        nLoop++;
    }
};

// 2차시, 통과 성공
/*
    - O(n logN)
    - 시간 복잡도 안좋음. 너무 느림
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
 const findDuplicate = (nums) => {
    nums.sort((a, b) => a - b);
    let nLoopPoint = 0;
    let nTmpPoint;
    while (nLoopPoint < nums.length) {
        nTmpPoint = nLoopPoint + 1;
        if (nums[nLoopPoint] === nums[nTmpPoint]) return nums[nLoopPoint];
        nLoopPoint++;
    }
};

// 1차시, 통과 실패
/*
    -   _O(n²)_ 인가
    -   무수히 많은 값은 처리 불가.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        const value1 = nums[i];
        for (let j = 0; j < nums.length; j++) {
            if (i === j) continue;
            const value2 = nums[j];
            if (value1 === value2) return value2;
        }
    }
};