// https://leetcode.com/problems/search-a-2d-matrix-ii/
// 240. Search a 2D Matrix II

// 3차시, 통과 성공
/*
// 시나리오 끄적끄적
    rowIdx = matrix.length-1; (4)

    rowIdx: 4    colIdx: 0
    matrix[rowIdx][colIdx] (t5 < 18) --> matrix[rowIdx] 제거
        rowIdx--

    rowIdx: 3    colIdx: 0
    matrix[rowIdx][colIdx] (t5 < 10) --> matrix[rowIdx] 제거
        rowIdx--

    rowIdx: 2    colIdx: 0
    matrix[rowIdx][colIdx] (t5 > 3) --> matrix[ALLROW][colIdx] 제거 (반복문)
        colIdx++

    rowIdx: 2    colIdx: 1
    matrix[rowIdx][colIdx] (t5 < 6) --> matrix[rowIdx] 제거
        rowIdx--

    rowIdx: 1    colIdx: 1
    matrix[rowIdx][colIdx] (t5 > 5) --> return true
*/
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = (matrix, target) => {
    let colIdx = 0;
    let rowIdx = matrix.length - 1;

    const colLength = matrix[0].length;

    while (colIdx < colLength && rowIdx > -1) {
        const currValue = matrix[rowIdx][colIdx];
        if (currValue > target) rowIdx--;
        else if (currValue < target) colIdx++;
        else return true;
    }

    return false;
};

// -------------------------

// 1차시 & 2차시, 통과 실패 (시간 초과)
/*
const searchMatrix = (matrix, target) => {
    // 1 & 2차시 공통
    const arrTmp = matrix.reduce((arrResult, items) => {
        for (let i = 0; i < items.length; i++)
            arrResult.indexOf(items[i]) < 0 && arrResult.push(items[i]);
        return arrResult;
    }, []);

    if (arrTmp.length === 1) return arrTmp[0] === target;
    arrTmp.sort((a, b) => a - b);

    // 2차시
    return arrTmp.indexOf(target) > -1;

    // 1차시
    let left = 0,
        right = arrTmp.length - 1;
    while (left <= right) {
        let pivot = Math.floor((left + right) / 2);
        if (arrTmp[pivot] === target) return true;
        if (arrTmp[pivot] > target) right--;
        else left++;
    }

    return false;
};
*/
