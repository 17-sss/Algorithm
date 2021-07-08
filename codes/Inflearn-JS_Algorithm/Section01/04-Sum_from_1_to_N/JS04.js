// ME
const solution = (n) => {
    let answer = 0;
    for (let i = 1; i <= n; i++) answer += i;
    return answer;
};
console.log(solution(6)); // 21
console.log(solution(10)); // 55

// ANSWER
/*
function solution(n) {
    let answer = 0;
    for (let i = 1; i <= n; i++) {
        answer = answer + i;
    }
    return answer;
}
console.log(solution(10));
*/