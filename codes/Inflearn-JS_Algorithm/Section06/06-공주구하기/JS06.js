// ME
function solution(n, k) {
  const queue = Array.from({ length: n }, (_, i) => i + 1);
  let cnt = 0;
  while (queue.length !== 1) {
    cnt++;
    const curr = queue.shift();
    if (cnt === k) cnt = 0;
    else queue.push(curr);
  }
  return queue.length ? queue[0] : null;
}

console.log(solution(8, 3)); // 7
// ---------------------------

// ANSWER
function solution(n, k) {
  let answer;
  let queue = Array.from({ length: n }, (v, i) => i + 1);
  while (queue.length) {
    for (let i = 1; i < k; i++) queue.push(queue.shift());
    queue.shift();
    if (queue.length === 1) answer = queue.shift();
  }
  return answer;
}

console.log(solution(8, 3));
