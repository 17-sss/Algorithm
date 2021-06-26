// https://leetcode.com/problems/contiguous-array/
// 525. Contiguous Array
/*
    cumulative sum과 hashMap을 활용하여 제일 긴 Subarray 길이를 출력  
    매개변수로 받아오는 배열 내에서 반복되는 규칙을 가지며 제일 긴 구간을 계산
*/

// (2021.06.21)
// 1차시, 통과 성공 / 매우 느림
/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxLength = (nums) => {
    const arrCumulative = [];
    // 0과 1을 조합하게 되면 0은 cumulative sum에 아무런 영향을 미치지 못해서 사용될수가 없다고 함.
    // 그러므로 0일때 -1로 변경하고 시작
    for (let i = 0; i < nums.length; i++) nums[i] === 0 && (nums[i] = -1);

    // 1. Array: cumulativeSum 계산
    nums.reduce((prev, curr) => {
        const tmp = prev + curr;
        arrCumulative.push(tmp);
        return tmp;
    }, 0);

    // 2. arrCumulative를 기준으로 순회하며 Map에 Index를 Value로 입력
    const cumIndexesMap = new Map();
    cumIndexesMap.set(0, [-1]);

    let nLoop = 0;
    while (nLoop < arrCumulative.length) {
        const currSum = arrCumulative[nLoop];
        if (cumIndexesMap.has(currSum)) {
            const arrIdxValue = cumIndexesMap.get(currSum);
            cumIndexesMap.set(currSum, [...arrIdxValue, nLoop]);
        } else cumIndexesMap.set(currSum, [nLoop]);
        nLoop++;
    }

    // 3. 제일 긴 Subarray의 length를 계산
    const arrMapValues = [...cumIndexesMap.values()];
    let maxLength = -1;
    arrMapValues.forEach((arrValue) => {
        const min = Math.min(...arrValue);
        const max = Math.max(...arrValue);
        const length = max - min;
        maxLength = Math.max(maxLength, length);
    });
    return maxLength;
};

findMaxLength([1, -1, 1, 1, 1, -1, -1, 1, 1]); // 6
findMaxLength([0, 1, 0]); // 2
