// https://programmers.co.kr/learn/courses/30/lessons/60058
// 2020 KAKAO BLIND RECRUITMENT : 괄호 변환

// (2021.12.30) ---------------------
// 1차시, 통과 실패 (76 / 100) - 참고 https://yjyoon-dev.github.io/kakao/2020/11/09/kakao-convbrackets/
// (solution에서 재귀하는 부분부터 참고함. ==> 이해가 안감. 공부 필요)
function isCorrectString(str) {
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const lastIdx = stack.length - 1;
    if (!stack.length || stack[lastIdx] === char) stack.push(char);
    else if (stack[lastIdx] === '(' && char === ')') stack.pop();
  }
  return !Boolean(stack.length);
}
function isBalancedString(str) {
  if (str.length % 2 !== 0) return false;
  let cnt = 0;
  for (let i = 0; i < str.length; i++) if (str[i] === '(') cnt++;
  return Math.floor(str.length / 2) === str.length - cnt;
}

function createBalancedStrings(str) {
  if (str.length <= 2) return [str, ''];
  for (let i = 1; i < str.length; i++) {
    const v1 = str.slice(0, i);
    const v2 = str.slice(i, str.length);
    if (isBalancedString(v1) && isBalancedString(v2)) return [v1, v2];
  }
  return [null, null];
}
function solution(p) {
  if (!p || isCorrectString(p)) return p;
  const [u, v] = createBalancedStrings(p);
  if ([u, v].every((v) => !v)) return p;

  if (isCorrectString(u)) return u + solution(v);
  const recursionValue = solution(v);
  let result = `(${recursionValue})`;
  for (let i = 1; i < u.length - 1; i++) result += u[i] === '(' ? ')' : '(';
  return result;
}

const pipeLog = (...funcs) => funcs.forEach((func) => console.log(func));
pipeLog(
  solution('(()())()'), // "(()())()"
  solution(')('), // "()"
  solution('()))((()'), // "()(())()"
);
