// ME
function solution(n) {
  function DFS(current) {
    if (current > n) return;
    console.log(current);
    if (n > current) DFS(current + 1);
  }
  DFS(1);
}

solution(3);

// ANSWER
function solution(n) {
  function DFS(L) {
    if (L == 0) return;
    else {
      DFS(L - 1);
      console.log(L);
    }
  }
  DFS(n);
}

solution(3);