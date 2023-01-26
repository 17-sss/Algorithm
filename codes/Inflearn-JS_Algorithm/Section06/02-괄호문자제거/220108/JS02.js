// ME
function solution(s) {
  const stack = [];
  for (const char of s) {
    if (char === ')') {
      let value = stack.pop();
      while (value !== '(') value = stack.pop();
    } else stack.push(char);
  }
  return stack.join('');
}
console.log(solution('(A(BC)D)EF(G(H)(IJ)K)LM(N)')); // "EFLM"

// ---------------------------

// ANSWER
function solution(s) {
  let answer;
  let stack = [];
  for (let x of s) {
    if (x === ')') {
      while (stack.pop() !== '(');
    } else stack.push(x);
  }
  answer = stack.join('');
  return answer;
}

let str = '(A(BC)D)EF(G(H)(IJ)K)LM(N)';
console.log(solution(str));
