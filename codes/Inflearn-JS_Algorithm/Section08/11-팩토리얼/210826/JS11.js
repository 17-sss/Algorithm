// ME
function solution(n) {
  if (n <= 1) return n;
  let result = n;
  function DFS(L) {
    if (L === 0) return;
    result *= L;
    DFS(L - 1);
  }
  DFS(n - 1);
  return result;
}

console.log(solution(5));

// ANSWER
function solution(n) {
  let answer;
  function DFS(n) {
    if (n === 1) return 1;
    else return n * DFS(n - 1);
  }
  answer = DFS(n);
  return answer;
}

console.log(solution(5));
