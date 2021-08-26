// ME (1), 오답 (중복되는 값이 1도 없어야 함!!)
function solution(m, arr) {
  const result = [];
  const tmp = [];
  function DFS(L) {
    if (L === m) {
      const isDup = tmp.every((v) => v === tmp[0]);
      return isDup || result.push([...tmp]);
    }
    for (let idx = 0; idx < arr.length; idx++) {
      tmp[L] = arr[idx];
      DFS(L + 1);
    }
  }
  DFS(0);
  return [result, result.length];
}

const arr = [3, 6, 9];
console.log(solution(2, arr));


// ME (2)
function solution(m, arr) {
  const result = [];
  const tmp = [];
  const checks = Array.from({ length: arr.length }, () => -1);
  function DFS(L) {
    if (L === m) return result.push([...tmp]);
    for (let idx = 0; idx < arr.length; idx++) {
      if (checks[idx] !== -1) continue;
      checks[idx] = 0;
      tmp[L] = arr[idx];
      DFS(L + 1);
      checks[idx] = -1;
    }
  }
  DFS(0);
  return [result, result.length];
}
const arr = [3, 6, 9];
console.log(solution(2, arr));

// --------------------------------

// ANSWER
function solution(m, arr) {
  let answer = [];
  n = arr.length;
  let ch = Array.from({ length: n }, () => 0);
  let tmp = Array.from({ length: m }, () => 0);
  function DFS(L) {
    if (L === m) {
      answer.push(tmp.slice());
    } else {
      for (let i = 0; i < n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          tmp[L] = arr[i];
          DFS(L + 1);
          ch[i] = 0;
        }
      }
    }
  }
  DFS(0);
  return answer;
}

let arr = [3, 6, 9];
console.log(solution(2, arr));