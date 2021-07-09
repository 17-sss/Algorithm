// ME
// const solution = (arr) => Math.min(...arr);
function solution(arr) {
    let answer;
    let min = Number.MAX_VALUE;
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if (min > num) min = num;
    }
    answer = min;
    return answer;
}

let arr = [5, 3, 7, 11, 2, 15, 17];
console.log(solution(arr));

// ANSWER
function solution(arr) {
    let answer,
        min = Number.MAX_SAFE_INTEGER;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
    }
    answer = min;
    return answer;
}
