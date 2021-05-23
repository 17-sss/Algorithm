// https://leetcode.com/problems/merge-intervals/
// 56. Merge Intervals, 범위가 겹치는 child array들을 merge하는 문제

// 1차시, 통과 성공 (2021.05.22)
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 const merge = (intervals) => {
    const arrResult = [];
    if (intervals.length === 1) return intervals;
    intervals.sort((a, b) => a[0] - b[0]);

    let tmp = intervals[0]; // tmp는 intervals의 0번째 아이템
    let idx = 1; // tmp는 intervals의 0번째의 값이니 비교할 값은 1번째부터 시작하길
    let maxIdx = intervals.length - 1;

    while (idx <= maxIdx) {
        const curr = intervals[idx];

        const tmpEnd = tmp[1];
        const currStart = curr[0];

        if (tmpEnd >= currStart) {
            if (curr[1] > tmp[1]) tmp[1] = curr[1];
            if (idx === maxIdx) arrResult.push(tmp);
        } else {
            arrResult.push(tmp);
            tmp = curr;
            if (idx === maxIdx) arrResult.push(tmp);
        }

        idx++;
    }

    return arrResult;
};

// merge([[1,3],[2,6],[8,10],[15,18]]); // [ [1, 6], [8, 10], [15, 18] ]
merge([ [1, 4], [4, 5] ]); // [[1, 5]]
