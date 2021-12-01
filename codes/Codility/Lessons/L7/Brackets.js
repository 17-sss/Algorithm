// https://app.codility.com/programmers/lessons/7-stacks_and_queues/brackets/
// Lesson 7 : Stacks and Queues

// (2021.11.13) ---------------------
// 1차시, 통과 (시간복잡도: O(N))
class Stack {
  constructor() {
    this.values = [];
  }
  push(v) {
    this.values.push(v);
  }
  pop() {
    return this.values.pop();
  }
  get length() {
    return this.values.length;
  }
}

function solution(S) {
  const braketMap = new Map([
    ['}', '{'],
    [')', '('],
    [']', '['],
  ]);

  const stack = new Stack();
  for (let i = 0; i < S.length; i++) {
    const char = S[i];
    if (stack.length) {
      const prev = stack.pop();
      if (braketMap.get(char) === prev) continue;
      else stack.push(prev);
    }
    stack.push(char);
  }
  return stack.length ? 0 : 1;
}

solution('{[()()]}');
solution('([)()]');
