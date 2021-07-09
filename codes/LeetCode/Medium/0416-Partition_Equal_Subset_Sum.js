// https://leetcode.com/problems/partition-equal-subset-sum/
// 416. Partition Equal Subset Sum
// 양의 정수만으로 이루어진 숫자들을 합이 같은 두 subset으로 분류가 가능한지 판별
/*
    ** 메모
        - colIdx 값의 경우 주어진 element들을 활용하여 해당 colIdx(sum)을 만들 수 있는지 판별하기.
        - rowIdx의 경우 주어진 element들을 뜻함 
            예) rowIdx가 0일 경우 ==> 아무것도 주어지지 않음
            예) rowIdx가 3일 경우 ==> 2, 1, 2 가 주어졌음
        - 두 subset으로 분류할 때 기준은, nums를 전부 합하고 나누기 2 해준 값이 되는지 체크하면 됨.
*/

// 1차시 (BottomUp), 통과 성공
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canPartition = function (nums) {
    const halfSum =
        nums.reduce((result, curr) => ((result += curr), result), 0) / 2;
    if (halfSum % 1 !== 0) return false;

    const arrDP = Array.from({ length: nums.length + 1 }, () =>
        Array.from({ length: halfSum + 1 }, () => null),
    );

    // 현재 가지고 있는 element들로 0을 만들 수 있는 경우 처리 (어떠한 ele가 주어져도 주어진 ele들이 다 없을 수도 있으니까 0은 만들 수 있음)
    for (let rowIdx = 0; rowIdx < arrDP.length; rowIdx++)
        arrDP[rowIdx][0] = true;
    // 애초에 아무것도 주어지지 않았을 때 colIdx(sum) 중 0 이외엔 만들 수 있는 게 없음
    for (let colIdx = 1; colIdx < halfSum + 1; colIdx++)
        arrDP[0][colIdx] = false;

    // arrDP 순회
    for (let rowIdx = 1; rowIdx < arrDP.length; rowIdx++) {
        const currNum = nums[rowIdx - 1]; // ?

        for (let colIdx = 1; colIdx < halfSum + 1; colIdx++) {
            let isSum = false;
            const prevCol = colIdx - currNum; // ?

            if (prevCol < 0) isSum = isSum || arrDP[rowIdx - 1][colIdx];
            else
                isSum = arrDP[rowIdx - 1][prevCol] || arrDP[rowIdx - 1][colIdx];

            arrDP[rowIdx][colIdx] = isSum;
        }
    }

    return arrDP[arrDP.length - 1][halfSum];
};
canPartition([2, 1, 2, 3, 4]);  // true
