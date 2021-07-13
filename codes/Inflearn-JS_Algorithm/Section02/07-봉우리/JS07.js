// ME
function solution(arr) {
    const isPossibleIdx = (rowIdx, colIdx, arr) => {
        const maxRowIdx = arr.length - 1;
        const maxColIdx = arr[0].length - 1;

        if ( rowIdx < 0 || rowIdx > maxRowIdx || colIdx < 0 || colIdx > maxColIdx ) return false;
        return true;
    };

    const isPeaks = (arr, currCoordinate) => {
        const coordCorrection = { top: [-1, 0], bottom: [1, 0], left: [0, -1], right: [0, 1] };
        const [currRowIdx, currColIdx] = currCoordinate;
        let rowIdx = (colIdx = -1);

        rowIdx = currRowIdx + coordCorrection.top[0];
        colIdx = currColIdx + coordCorrection.top[1];
        const top = isPossibleIdx(rowIdx, colIdx, arr) ? arr[rowIdx][colIdx] : 0;

        rowIdx = currRowIdx + coordCorrection.bottom[0];
        colIdx = currColIdx + coordCorrection.bottom[1];
        const bottom = isPossibleIdx(rowIdx, colIdx, arr) ? arr[rowIdx][colIdx] : 0;

        rowIdx = currRowIdx + coordCorrection.left[0];
        colIdx = currColIdx + coordCorrection.left[1];
        const left = isPossibleIdx(rowIdx, colIdx, arr) ? arr[rowIdx][colIdx] : 0;

        rowIdx = currRowIdx + coordCorrection.right[0];
        colIdx = currColIdx + coordCorrection.right[1];
        const right = isPossibleIdx(rowIdx, colIdx, arr) ? arr[rowIdx][colIdx] : 0;

        const curr = arr[currCoordinate[0]][currCoordinate[1]];

        if (curr > left && curr > right && curr > bottom && curr > top)
            return true;
        return false;
    };
    // -----

    const resultItems = [];
    for (let rowIdx = 0; rowIdx < arr.length; rowIdx++) {
        for (let colIdx = 0; colIdx < arr[0].length; colIdx++)
            isPeaks(arr, [rowIdx, colIdx]) &&
                resultItems.push(arr[rowIdx][colIdx]);
    }

    return { resultItems, count: resultItems.length };
}

let arr = [
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2],
];
console.log(solution(arr));


// ANSWER
function solution(arr) {
    let answer = 0;
    let n = arr.length;
    let dx = [-1, 0, 1, 0];
    let dy = [0, 1, 0, -1];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let flag = 1;
            for (let k = 0; k < 4; k++) {
                let nx = i + dx[k];
                let ny = j + dy[k];
                if (
                    nx >= 0 &&
                    nx < n &&
                    ny >= 0 &&
                    ny < n &&
                    arr[nx][ny] >= arr[i][j]
                ) {
                    flag = 0;
                    break;
                }
            }
            if (flag) answer++;
        }
    }

    return answer;
}

let arr = [
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2],
];
console.log(solution(arr));
