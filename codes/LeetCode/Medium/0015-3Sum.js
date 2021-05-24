// https://leetcode.com/problems/3sum/
// 15. 3Sum

// 2차시, 통과 성공 (겁나 느림)
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
    if (nums.every((v) => !v)) {
        if (nums.length >= 3) return [Array.from({ length: 3 }, (_) => 0)];
        else if (nums.length === 0) return [];
    }

    nums.sort((a, b) => a - b);

    const result = [];

    for (let nLoop = 0; nLoop < nums.length; nLoop++) {
        let left = nLoop + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[nLoop] + nums[left] + nums[right];
            if (sum === 0) {
                /*
                // 아 화난다.. 왜 확인 못해
                const item = [ nums[nLoop], nums[left], nums[right] ];
                if (!result.includes(item)) result.push(item);
                */

                const item = JSON.stringify([ nums[nLoop], nums[left], nums[right] ]);
                if (result.indexOf(item) <= -1) result.push(item);

                left++;
                right--;
            } else if (sum < 0) left++;
            else if (sum > 0) right--;
        }
    }

    return result.map((v) => JSON.parse(v));
};

threeSum([3, 0, -2, -1, 1, 2]); // [[-2,-1,3],[-2,0,2],[-1,0,1]]

// 1차시, 통과 실패
// 무한 루프...ㅠ
/*
const threeSum = (nums) => {
    if (nums.length === 0 || nums.every((v) => !v)) return [];
    nums.sort((a, b) => a - b);

    const result = [];

    let pivot = 0,
        pointer = pivot + 1;
    const maxIdx = nums.length - 1;

    while (pivot <= maxIdx) {
        if (pointer === maxIdx) break;
        const pivotNum = nums[pivot];
        const pointerNum = nums[pointer];
        const maxIdxNum = nums[maxIdx];

        const sum = pivotNum + pointerNum + maxIdxNum;
        if (sum === 0) result.push([pivotNum, pointerNum, maxIdxNum]);
        if (pointer === maxIdx - 1) {
            pivot++;
            pointer = pivot + 1;
        } else pointer++;
    }

    return result;
};
threeSum([-1, 0, 1, 2, -1, -4]);
*/
