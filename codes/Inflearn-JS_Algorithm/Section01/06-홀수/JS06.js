// ME
function solution(arr) {
    const odds = arr.filter((v) => v % 2 === 1);
    const sum = odds.reduce((result, value) => ((result += value), result), 0);
    const min = Math.min(...odds);
    return { sum, min, output: `홀수들의 합: ${sum}, 홀수들중 최소값: ${min}` };
}

const arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));

// ANSWER
function solution(arr) {
    let answer = [];
    let sum = 0,
        min = 1000;
    for (let x of arr) {
        if (x % 2 === 1) {
            sum += x;
            if (x < min) min = x;
        }
    }
    answer.push(sum);
    answer.push(min);
    return answer;
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
