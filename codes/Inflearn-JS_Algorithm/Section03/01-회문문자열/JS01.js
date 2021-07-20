// ME
function solution(s) {
    const str = s.toUpperCase();
    const S_LENGTH = str.length;
    const MAX_LOOP_CNT = Math.floor(S_LENGTH / 2);

    let leftPivot = 0;
    let rightPivot = S_LENGTH - 1;

    while (leftPivot <= MAX_LOOP_CNT - 1) {
        if (str[leftPivot] !== str[rightPivot]) return 'NO';
        leftPivot++;
        rightPivot--;
    }
    return 'YES';
}

let str = 'gooG';
console.log(solution(str));

// ANSWER
// 답안 1
function solution(s) {
    let answer = 'YES';
    s = s.toLowerCase();
    let len = s.length;
    for (let i = 0; i < Math.floor(len / 2); i++) {
        if (s[i] != s[len - i - 1]) return 'NO';
    }
    return answer;
}

let str = 'goooG';
console.log(solution(str));

// 답안 2
function solution(s) {
    let answer = 'YES';
    s = s.toLowerCase();
    if (s.split('').reverse().join('') != s) return 'NO';
    return answer;
}

let str = 'gooG';
console.log(solution(str));
