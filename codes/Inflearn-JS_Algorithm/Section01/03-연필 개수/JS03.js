// ME
const solution = (studentCnt) =>  Math.ceil(studentCnt / 12);
// const solution = (studentCnt) =>  (studentCnt % 12) !== 0 ? Math.floor(studentCnt / 12) + 1: (studentCnt / 12);
console.log(solution(25));      // 3
console.log(solution(175));     // 15

// ANSWER
/*
function solution(n){
    let answer;
    answer=Math.ceil(n/12);
    return answer;
}

console.log(solution(178));
*/