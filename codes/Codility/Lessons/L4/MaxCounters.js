// https://app.codility.com/programmers/lessons/4-counting_elements/max_counters/
// Lesson 4 :  MaxCounters

// (2021.09.20) ---------------------
// 1차시, 통과 ( 시간복잡도: O(N + M) )
function solution(N, A) {
  const result = Array.from({ length: N }, (_) => 0);
  const INIT_MAX = Number.MIN_SAFE_INTEGER;
  let max = INIT_MAX;

  for (let i = 0; i < A.length; i++) {
    const curr = A[i];
    if (curr > N)
      for (let j = 0; j < result.length; j++) {
        if (max === INIT_MAX) break;
        result[j] = max;
      }
    else {
      result[curr - 1] = result[curr - 1] + 1;
      max = Math.max(result[curr - 1], max);
    }
  }
  return result;
}

console.log(solution(5, [3, 4, 4, 6, 1, 4, 4]));
