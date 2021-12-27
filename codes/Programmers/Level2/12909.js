// https://programmers.co.kr/learn/courses/30/lessons/12909
// 올바른 괄호
// -- Stack을 활용한 문제임.

// (2021.12.27) ---------------------
// 1차시
function solution(s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const lastIdx = stack.length - 1;
    if (!stack.length || stack[lastIdx] === char) stack.push(char);
    else if (stack[lastIdx] === '(' && char === ')') stack.pop();
  }

  return !Boolean(stack.length);
}

const pipeLog = (...funcs) => funcs.forEach((func) => console.log(func));
pipeLog(
  solution('()()'), // true
  solution('(())()'), // true
  solution(')()('), // false
  solution('(()('), // false
);
