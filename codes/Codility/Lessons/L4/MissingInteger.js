// https://app.codility.com/programmers/lessons/4-counting_elements/missing_integer/
// Lesson 4 :  MissingInteger

// (2021.09.20) ---------------------
// 2차시, 통과 (참고함) ( 시간복잡도: O(N) or O(N * log(N)) )
function solution(A) {
  A.sort((a, b) => a - b);
  const set = new Set(A);
  const MAX = Number.MAX_SAFE_INTEGER;
  for (let i = 1; i < MAX; i++) {
    if (!set.has(i)) return i;
  }
  return -1;
}

console.log(
  solution([1, 3, 6, 4, 1, 2]),
  solution([1, 2, 3]),
  solution([-1, -3]),
  solution([4, 5, 6, 2]),
  solution([...Array.from({ length: 101 }, (_, idx) => idx), ...Array.from({ length: 99 }, (_, idx) => idx + 102)]), // 0 ~ 100 && 102 ~ 200
  solution([-1000000, 1000000]),
);

// 1차시, 실패 (66%)
/* 
function solution(A) {
  if (!A || A.length === 0) return 1;
  if (A.length === 1) {
    if (A[0] !== 1) return 1;
    else return A[0] + 1;
  }

  const currMax = Math.max(...A);
  const currMin = Math.min(...A);
  if (currMax < 0 || currMin < 0) return 1;
  A.sort((a, b) => a - b);
  const ASort = [...new Set(A)];
  for (let i = 0; i < ASort.length; i++) {
    const curr = ASort[i];
    if (i === 0 && curr > 1) return 1;

    const next = ASort[i + 1];
    const isWrongNext = next && next !== curr + 1;
    const isLastValue = !next && i === ASort.length - 1;
    if (isWrongNext || isLastValue) return curr + 1;
  }
}
*/
