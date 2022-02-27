// ME
function solution(s, t) {
  const REG_EX = new RegExp(`[^${t}]`, 'g');
  return s.replace(REG_EX, '').length;
}

let str = 'COMPUTERPROGRAMMING';
console.log(solution(str, 'R'));

// ANSWER
function solution(s, t) {
  let answer = s.split(t).length;
  return answer - 1;
}

let str = 'COMPUTERPROGRAMMING';
console.log(solution(str, 'R'));