// ME
function solution(n) {
  if (n < 1) return;
  const arrChecks = Array.from({ length: n + 1 }, () => false);
  const result = [];
  function DFS(v) {
    const isLast = v === n + 1;
    if (isLast)
      return result.push(
        arrChecks.reduce((arrResult, flag, idx) => {
          flag && arrResult.push(idx);
          return arrResult;
        }, []),
      );

    arrChecks[v] = true;
    DFS(v + 1);
    arrChecks[v] = false;
    DFS(v + 1);
  }
  DFS(1);

  return result.filter((arr) => arr.length > 0);
}

console.log(solution(3));

// ANSWER
function solution(n) {
  let answer = [];
  let ch = Array.from({ length: n + 1 }, () => 0);
  function DFS(L) {
    if (L === n + 1) {
      let tmp = '';
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 1) tmp += i + ' ';
      }
      if (tmp.length > 0) answer.push(tmp.trim());
    } else {
      ch[L] = 1;
      DFS(L + 1);
      ch[L] = 0;
      DFS(L + 1);
    }
  }
  DFS(1);
  return answer;
}

console.log(solution(3));
