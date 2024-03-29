// https://app.codility.com/programmers/lessons/3-time_complexity/perm_missing_elem/
// Lesson 3 :  PermMissingElem
// 주어진 배열(A)는 1...N 의 값이 있는데 이 사이의 값중 없는 값을 반환

// (2021.09.16) ---------------------

// 2차시, 통과 ( 시간복잡도: O(N) or O(N * log(N)) )
const solution = (A) => {
  A.sort((a, b) => a - b);
  if (A[0] !== 1) return 1;
  for (let i = 0; i < A.length; i++) {
    const value = A[i];
    const nextValue = A[i + 1];
    if (nextValue !== value + 1) return value + 1;
  }
};
console.log(
  solution([2, 3, 1, 5]), // 4
);

/*
// 1차시, 실패 (70%) : 나중에 해보기
function solution(A) {
  if (A.length === 0) return 1;
  if (A.length === 1) return A[0];
  A.sort((a, b) => a - b);
  if (A[0] !== 1) return 1;

  let left = 0;
  let right = A.length - 1;
  while (left !== right) {
    const vLeft = A[left];
    const vRight = A[right];
    if (vLeft + 1 !== A[left + 1]) return vLeft + 1;
    if (vRight - 1 !== A[right - 1]) return vRight - 1;
    left++;
    right--;
  }
  return 0;
}
*/
