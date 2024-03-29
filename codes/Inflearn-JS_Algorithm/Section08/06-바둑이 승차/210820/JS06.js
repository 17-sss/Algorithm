// ME
function solution(c, arr) {
  let currMax = Number.MIN_SAFE_INTEGER;
  function DFS(idx, sum) {
    if (sum > c) return;
    if (arr.length === idx) return c >= sum && (currMax = Math.max(currMax, sum));
    DFS(idx + 1, sum + arr[idx]);
    DFS(idx + 1, sum);
  }
  DFS(0, 0);
  return currMax;
}

let arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr));

// ANSWER
function solution(c, arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;
  function DFS(L, sum) {
    if (sum > c) return;
    if (L === n) {
      answer = Math.max(answer, sum);
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }
  DFS(0, 0);
  return answer;
}

let arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr));
