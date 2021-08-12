// ME : 1
function solution(s) {
  let nCount = 1;
  return s.split('').reduce((result, currChar, idx) => {
    const nextChar = s[idx + 1];
    if (currChar === nextChar) nCount++;
    else {
      result += currChar + (nCount > 1 ? `${nCount}` : '');
      nCount = 1;
    }
    return result;
  }, '');
}

let str = 'KKHSSSSSSSE';
console.log(solution(str)); // K2HS7E

// ME : 2
function solution(s) {
  let nCount = 1;
  let result = '';

  for (let i = 0; i < s.length; i++) {
    const currChar = s[i];
    const nextChar = s[i + 1];
    if (currChar === nextChar) nCount++;
    else {
      result += currChar + (nCount > 1 ? `${nCount}` : '');
      nCount = 1;
    }
  }
  return result;
}
let str = 'KKHSSSSSSSE';
console.log(solution(str)); // K2HS7E

// ANSWER
function solution(s) {
  let answer = '';
  let cnt = 1;
  s = s + ' ';
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) cnt++;
    else {
      answer += s[i];
      if (cnt > 1) answer += String(cnt);
      cnt = 1;
    }
  }
  return answer;
}

let str = 'KKHSSSSSSSE';
console.log(solution(str));
