// ME (못품, 무엇을 만드려한걸까..)
/*
function solution(n, r) {
  const result = [];
  const nums = Array.from({ length: n }, (_, idx) => idx + 1);
  const DFS = (L, arr = []) => {
    if (arr.length === r) return result.push([...arr]);
    DFS(L + 1, arr);
    DFS(L + 1, arr.concat(nums[L]));
  };
  DFS(0);

  return result.length;
}
console.log(solution(5, 3)); // 10
*/

// ANSWER : 일반
function solution1(n, r) {
  let answer = [];
  function DFS(n, r) {
    if (n === r || r === 0) return 1;
    else return DFS(n - 1, r - 1) + DFS(n - 1, r);
  }
  answer = DFS(n, r);
  return answer;
}

console.log(solution1(5, 3));

// ANSWER : 메모이제이션
function solution2(n, r) {
  let answer = [];
  let dy = Array.from(Array(35), () => Array(35).fill(0));

  function DFS(n, r) {
    if (dy[n][r] > 0) return dy[n][r];
    if (n === r || r === 0) return 1;
    else return (dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
  }
  answer = DFS(n, r);

  return answer;
}

console.log(solution2(33, 19));
