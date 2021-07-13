// ME
function solution(arr) {
    const resultSet = new Set();

    // 각 행의 합
    arr.forEach((arrValue) =>
        resultSet.add(
            arrValue.reduce((result, curr) => ((result += curr), result), 0),
        ),
    );

    // 각 열의 합
    for (let colIdx = 0; colIdx < arr[0].length; colIdx++) {
        let sum = 0;
        for (let rowIdx = 0; rowIdx < arr.length; rowIdx++)
            sum += arr[rowIdx][colIdx];
        resultSet.add(sum);
    }

    let sum = 0;
    // 대각선의 합들 (1)
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i][i];
        resultSet.add(sum);
    }

    // 대각선의 합들 (2)
    sum = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        sum += arr[i][i];
        resultSet.add(sum);
    }
    return Math.max(...resultSet);
}

let arr = [
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
];
console.log(solution(arr)); // 155


// ANSWER
function solution(arr) {
    let answer = Number.MIN_SAFE_INTEGER;
    let n = arr.length;
    let sum1 = (sum2 = 0);

    // 각 행, 각 열의 합
    for (let i = 0; i < n; i++) {
        sum1 = sum2 = 0;
        for (let j = 0; j < n; j++) {
            sum1 += arr[i][j];  // 현재 행의 합
            sum2 += arr[j][i];  // 현재 열의 합
        }
        // 최대 값 업데이트
        answer = Math.max(answer, sum1, sum2);
    }

    // 대각선들
    sum1 = sum2 = 0;
    for (let i = 0; i < n; i++) {
        sum1 += arr[i][i];
        sum2 += arr[i][n - i - 1];
    }

    // 대각선들 값과 각 행, 각 열을 구할 때 구했던 최대값과 비교 후 최대값 업뎃
    answer = Math.max(answer, sum1, sum2);
    return answer;
}

let arr = [
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
];
console.log(solution(arr));
