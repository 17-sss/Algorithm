function solution(s) {
  const stack = [];
  for (const char of s) {
    const isOk = stack[stack.length - 1] === '(' && char === ')';
    if (!isOk) {
      stack.push(char);
      continue;
    }
    stack.pop();
  }
  return stack.length === 0 ? 'YES' : 'NO';
}
console.log(solution('(()(()))(()')); // "NO"
