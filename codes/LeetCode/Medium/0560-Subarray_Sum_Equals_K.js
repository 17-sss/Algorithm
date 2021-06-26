// https://leetcode.com/problems/subarray-sum-equals-k/
// 560. Subarray Sum Equals K

// (2021.06.20)

// 2차시, 통과 성공 (참고함 / 이해해보기..ㅠ)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraySum = (nums, k) => {
    if (!nums || nums.length <= 0) return 0;

    // 1. Array: cumulativeSum 계산
    const cumulativeArr = [];
    nums.reduce((sum, curr) => {
        const currSum = sum + curr;
        cumulativeArr.push(currSum);
        return currSum;
    }, 0);

    // 이 구간 이해해보기..
    const cumIndexesMap = new Map();
    cumIndexesMap.set(0, [-1]);
    let nLoop = 0,
        result = 0;
    while (nLoop < cumulativeArr.length) {
        const currSum = cumulativeArr[nLoop];
        const target = currSum - k;

        if (cumIndexesMap.has(target))
            result += cumIndexesMap.get(target).length;

        if (cumIndexesMap.has(currSum)) {
            const arrIdxValue = cumIndexesMap.get(currSum);
            cumIndexesMap.set(currSum, [...arrIdxValue, nLoop]);
        } else cumIndexesMap.set(currSum, [nLoop]);
        nLoop++;
    }

    return result;
};

// subarraySum([-1,-1,1], 0);   // 1
// subarraySum([1, 1, 1], 2)    // 2    ([])
subarraySum([6, 3, 2, 5, 3, -3], 10); // 3    ([3, 2, 5], [3, 2, 5, 3, -3], [2, 5, 3])

// 1차시, 통과 실패.
// [코딩테스트, 중급, Subarray Sum = K](https://youtu.be/mEeK-SB7hEk)의 영상의 풀이법대로 만들어봤으나 뭐지..?
/*
const subarraySum = (nums, k) => {
    if (!nums || nums.length <= 0) return 0;

    // 1. 먼저 cumulative Sum들을 구함
    const cumulativeArr = [];
    nums.reduce((sum, curr) => {
        const currSum = sum + curr;
        cumulativeArr.push(currSum);
        return currSum;
    }, 0);

    // 2. 1에서 구한 cumulativeArr의 값들을 Map에 넣음 (cumulativeArr를 순회)
        // map에 set 할 때
        //     key는
        //         cumulativeArr의 현재 index까지의 누적합
        //     value는
        //         cumulativeArr를 순회하면서의 현재 idx (배열 형식).
        //     - ex) key: 6 / value: [0]
        // + key로 들어가는 누적합이 이미 있다면 key의 value를 (배열 indexes) 를 업데이트!
    const cumIndexesMap = new Map();
    cumIndexesMap.set(0, [-1]); // edge case 추가 (Map)
    cumulativeArr.forEach((v, i) => {
        const arrIdxValue = cumIndexesMap.get(v);
        if (arrIdxValue) return cumIndexesMap.set(v, [...arrIdxValue, i]);
        else return cumIndexesMap.set(v, [i]);
    });

    // 3. Subarray 갯수 계산
    let resultCnt = 0;
    const arrCumIndexesMapKeys = [...cumIndexesMap.keys()];
    for (let i = 0; i < arrCumIndexesMapKeys.length; i++) {
        const currSum = arrCumIndexesMapKeys[i];  // key

        for (let j = i + 1; j < arrCumIndexesMapKeys.length; j++) {
            const tmpSum = arrCumIndexesMapKeys[j]; // key (tmp)
            const tmpSumValues = cumIndexesMap.get(tmpSum);    // value (tmp)
            if (Math.abs(currSum - tmpSum) === k)
                resultCnt += tmpSumValues.length;
        }
    }
    return resultCnt;
};
*/