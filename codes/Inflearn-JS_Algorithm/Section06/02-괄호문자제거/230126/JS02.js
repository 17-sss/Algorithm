// ME (STACK)
function solution(s) {
  const stack = [];
  for (const char of s) {
    if (char === ')') {
      while (stack.pop() !== '(');
      continue;
    }
    stack.push(char);
  }
  return stack.join('');
}

console.log(solution('(A(BC)D)EF(G(H)(IJ)K)LM(N)')); // "EFLM"

// ME (REGEX)
/*
function solution(s) {
  const REGEX = /\(\w+\)/gi;
  let result = s;
  while (REGEX.test(result)) {
    result = result.replace(REGEX, '');
  }
  return result;
}
console.log(solution('(A(BC)D)EF(G(H)(IJ)K)LM(N)')); // "EFLM"
*/
