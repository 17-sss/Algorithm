// ME
function solution(m, arr) {
  let result = Number.MAX_SAFE_INTEGER;
  let prevCnt = Number.MAX_SAFE_INTEGER;

  function DFS(cnt, curr) {
    if (m < curr || prevCnt <= cnt) return;
    if (m === curr) {
      prevCnt = cnt;
      return (result = Math.min(result, cnt));
    }
    for (let i = 0; i < arr.length; i++) DFS(cnt + 1, curr + arr[i]);
  }
  DFS(0, 0);

  return result;
}

let arr = [1, 2, 5];
console.log(solution(15, arr));

// ANSWER
function solution(m, arr) {
  let answer = Number.MAX_SAFE_INTEGER;
  let n = arr.length;
  function DFS(L, sum) {
    if (sum > m) return;
    if (L >= answer) return;
    if (sum === m) {
      answer = Math.min(answer, L);
    } else {
      for (let i = 0; i < n; i++) {
        DFS(L + 1, sum + arr[i]);
      }
    }
  }
  DFS(0, 0);
  return answer;
}

let arr = [1, 2, 5];
console.log(solution(15, arr));
