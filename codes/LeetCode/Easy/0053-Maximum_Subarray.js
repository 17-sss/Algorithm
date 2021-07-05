// https://leetcode.com/problems/maximum-subarray/
// 53. Max SubArray Sum
/*
    주어진 배열 (nums)에서 제일 큰 SubArray를 계산의 합을 계산
    (DP를 활용하여 풀이해보기!)
*/


// 1차시, 통과 성공
/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
    const sumValues = [];

    let nPivot = 0;
    while (nums.length > nPivot) {
        let sumValue = nums[nPivot];

        const prevSumValue = sumValues[nPivot - 1];
        if (prevSumValue) {
            const prevCurrSum = prevSumValue + sumValue;
            sumValue = Math.max(sumValue, prevCurrSum);
        }
        sumValues.push(sumValue);
        nPivot++;
    }

    return Math.max(...sumValues);
}
// maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]); // 6 ([4,-1,2,1])


// ++ 기타, 최종 SubArray의 정보 & 제일 큰 값 Return ---------
const getResultSubArray = (nums, arrSubArrayInfo, finalMaxVal) => {
    const resultItemIdx = arrSubArrayInfo.findIndex(({ maxVal }) => maxVal === finalMaxVal);
    const resultItem = arrSubArrayInfo[resultItemIdx];
    return nums.slice(resultItem.startIdx, (resultItemIdx + 1));
}

const maxSubArray = (nums) => {
    const arrSubArrayInfo = [];

    let nPivot = 0;
    while (nums.length > nPivot) {
        const currInput = nums[nPivot];
        const subArrayInfo = { startIdx: nPivot, maxVal: currInput };

        const prevSubArrayInfo = arrSubArrayInfo[nPivot - 1];
        if (prevSubArrayInfo) {
            const { maxVal: prevMaxVal, startIdx: prevStartIdx } = prevSubArrayInfo;
            const prevCurrInput = prevMaxVal + currInput;

            subArrayInfo.maxVal = Math.max(currInput, prevCurrInput);
            if (subArrayInfo.maxVal === prevCurrInput)
                subArrayInfo.startIdx = prevStartIdx;
        }

        arrSubArrayInfo.push(subArrayInfo);
        nPivot++;
    }
    const finalMaxVal = Math.max(...arrSubArrayInfo.map(({ maxVal }) => maxVal));
    const resultSubArray = getResultSubArray(nums, arrSubArrayInfo, finalMaxVal);

    return { finalMaxVal, resultSubArray };
};
// ----