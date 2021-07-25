// ME
function solution(s) {
    const str = s.replace(/[^a-zA-Z]/g, '').toLowerCase();
    const reverseStr = str.split('').reverse().join('');
    return str === reverseStr ? 'YES' : 'NO';
}

let str = 'found7, time: study; Yduts; emit, 7Dnuof';
console.log(solution(str));

// ANSWER
function solution(s) {
    let answer = 'YES';
    s = s.toLowerCase().replace(/[^a-z]/g, '');
    if (s.split('').reverse().join('') !== s) return 'NO';
    return answer;
}

let str = 'found7, time: study; Yduts; emit, 7Dnuof';
console.log(solution(str));
