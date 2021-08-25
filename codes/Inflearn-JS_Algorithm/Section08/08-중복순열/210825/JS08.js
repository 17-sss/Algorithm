// ME
function solution(n, m) {
  const result = [];
  const tmp = Array.from({ length: m }, () => -1);

  function DFS(L) {
    if (L === m) return result.push([...tmp]);
    for (let i = 1; i <= n; i++) {
      tmp[L] = i;
      DFS(L + 1); //  L + i 하면 에바 꽁치 넙치 됨!
    }
  }

  DFS(0);

  return [result, result.length];
}

console.log(solution(3, 2));

// ANSWER
