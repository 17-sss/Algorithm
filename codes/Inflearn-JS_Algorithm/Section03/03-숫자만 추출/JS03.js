// ME
const solution = (str) => Number(str.replace(/[^\d]/g, ''));

let str = 'g0en2T0s8eSoft';
console.log(solution(str));

// ANSWER
function solution(str) {
    let answer = '';
    for (let x of str) {
        if (!isNaN(x)) answer += x;
    }
    return parseInt(answer);
}

let str = 'g0en2T0s8eSoft';
console.log(solution(str));
