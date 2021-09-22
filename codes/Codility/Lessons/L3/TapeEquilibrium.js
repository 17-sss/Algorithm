// https://app.codility.com/programmers/lessons/3-time_complexity/perm_missing_elem/
// Lesson 3 :  TapeEquilibrium
// 두 구간으로 쪼갰을 때, 구간별 합의 차가 가장 적은 곳 찾기

// (2021.09.19) ---------------------

// 2차시, 통과 (참고함)
// 처음부터 계산해나가는 leftSum, 배열의 요소를 미리 합한 후 for문에서 사용하는 rightSum
function solution(A) {
  let result = Number.MAX_SAFE_INTEGER;
  let leftSum = A[0];
  let rightSum = A.reduce((a, b) => (a + b)) - A[0];
  for (let i = 1; i < A.length; i++) {
    result = Math.min(result, Math.abs(leftSum - rightSum));
    leftSum += A[i];
    rightSum -= A[i];
  }
  return result;
}

console.log(solution([3, 1, 2, 4, 3]));

// 1차시, 실패
// 시간복잡도: O(N * N)
/* 
function solution(A) {
  let result = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < A.length; i++) {
    const value1 = A.slice(0, i + 1).reduce((result, curr) => ((result += curr), result), 0);
    const value2 = A.slice(i + 1, A.length).reduce((result, curr) => ((result += curr), result), 0);
    const calc = Math.abs(value1 - value2);
    result = Math.min(calc, result);
  }
  return result;
}
*/
