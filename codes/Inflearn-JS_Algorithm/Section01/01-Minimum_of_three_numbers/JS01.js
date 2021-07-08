// ME
function solution(...args) {
    return args.reduce((result, curr) => {
        if (result > curr) result = curr;
        return result;
    }, Number.MAX_VALUE);
}

console.log(solution(6, 5, 11)); // 5

// ANSWER
/*
function solution(a, b, c) {
    let answer;
    if (a < b) answer = a;
    else answer = b;
    if (c < answer) answer = c;
    return answer;
}
*/

