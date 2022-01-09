// ME
function solution(s) {
  let cnt = 0;
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === ')' && stack.length && stack[stack.length - 1] === '(') {
      stack.pop();
      if (s[i - 1] === ")") cnt++;
      else cnt += stack.length;
    } else stack.push(char);
  }
  return cnt;
}

console.log(solution('()(((()())(())()))(())')); // 17
console.log(solution('(((()(()()))(())()))(()())')); // 24

// ---------------------------

// ANSWER
