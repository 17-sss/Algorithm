// https://leetcode.com/problems/find-pivot-index/
// 724. Find Pivot Index

// 1차시, 통과 성공 (강의 참고)
const pivotIndex = (nums) => {
    const sum = nums.reduce((init, value) => (init += value), 0);

    let leftSum = 0;
    let rightSum = sum;
    let tmpValue = 0;

    for (let idx = 0; idx < nums.length; idx++) {
        const currValue = nums[idx];

        leftSum += tmpValue;
        rightSum -= currValue;

        if (leftSum === rightSum) return idx;
        tmpValue = currValue;
    }
    return -1;
};