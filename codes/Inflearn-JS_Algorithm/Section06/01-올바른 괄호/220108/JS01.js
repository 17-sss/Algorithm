// ME
function solution(s) {
  const stack = [];
  for (const char of s) {
    if (stack.length && stack[stack.length - 1] === '(' && char === ')') stack.pop();
    else stack.push(char);
  }
  return !stack.length ? 'YES' : 'NO';
}
console.log(solution('(()(()))(()')); // "NO"

// ---------------------------

// ANSWER
function solution(s) {
  let answer = 'YES';
  stack = [];
  for (let x of s) {
    if (x === '(') stack.push(x);
    else {
      if (stack.length === 0) return 'NO';
      stack.pop();
    }
  }
  if (stack.length > 0) return 'NO';
  return answer;
}

let a = '(()(()))(()';
console.log(solution(a));
