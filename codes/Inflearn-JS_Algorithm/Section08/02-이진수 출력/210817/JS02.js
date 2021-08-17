// ME
function solution(n) {
  let result = '';
  function DFS(curr) {
    const next = Math.floor(curr / 2);
    if (next > 0) DFS(next);
    result += curr % 2;
  }
  DFS(n);
  return result;
}

console.log(solution(11)); // 1011

// ANSWER
function solution(n) {
  let answer = '';
  function DFS(n) {
    if (n === 0) return;
    else {
      DFS(parseInt(n / 2));
      answer += String(n % 2);
    }
  }
  DFS(n);
  return answer;
}

console.log(solution(11));
