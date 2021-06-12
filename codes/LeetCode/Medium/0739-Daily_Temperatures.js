// https://leetcode.com/problems/daily-temperatures/
// 739. Daily Temperatures

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = (temperatures) => {
    const stack = [];
    const nMax = temperatures.length;
    let nIdx = nMax - 1;

    // result 배열의 길이는 temperatures.length 만큼 -1로 채워줌
    // nIdx(피벗)이 역순으로 순회하기에.
    const result = Array(nMax).fill(-1);

    while (nIdx >= 0) {
        const num = temperatures[nIdx];

        // 맨 처음엔 없으니까 stack에 push
        if (nMax - 1 === nIdx) {
            result[nIdx] = 0;
            stack.push([num, nIdx]);
            nIdx--;
            continue;
        }

        // stack의 top 값들을 가져오기 위한 변수 선언
        let topNum, topIdx;
        while (stack.length) {
            [topNum, topIdx] = stack[stack.length - 1];

            // 가져온 topNum이 현재 피벗이 가르키는 num이 더 크거나 같다면 pop()
            if (topNum <= num) stack.pop();
            else break; // 가져온 topNum이 num보다 크다면 이 반복문 break;
        }
        // result[nIdx]에
            // stack.length가 0일 경우 0을 넣음
            // 아니라면 위에서 계산한 top의 idx에서 현재 피벗의 idx를 빼주면
                // 오른쪽에 있는 큰 값과의 거리 값이 됨!
        result[nIdx] = !stack.length ? 0 : topIdx - nIdx;
        stack.push([num, nIdx]);
        nIdx--;
    }
    return result;
};

// dailyTemperatures([39, 20, 70, 36, 30, 60, 80, 1]); // [ 2, 1, 4, 2, 1, 1, 0, 0 ]
dailyTemperatures([89, 62, 70, 58, 47, 47, 46, 76, 100, 70]); // [8,1,5,4,3,2,1,1,0,0]
