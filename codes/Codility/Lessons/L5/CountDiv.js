// https://app.codility.com/programmers/lessons/5-prefix_sums/count_div/
// Lesson 5 : CountDiv

// (2021.09.20) ---------------------

// 4차시, 통과 : 참고 (https://sustainable-dev.tistory.com/12)
function solution(A, B, K) {
  const cnt = parseInt(B / K) - parseInt(A / K);
  return A % K === 0 ? cnt + 1 : cnt;
}

console.log(
  solution(6, 11, 2), // 3
  solution(1, 1, 1), // 1
  solution(100, 123456789, 2), //61728345
  solution(0, 0, 11), // 1
);

// 3차시, 실패 : 참고 (https://tram-devlog.tistory.com/entry/Codility-51-CountDiv)
/* 
function solution(A, B, K) {
  const result = Math.floor(B / K - A / K);
  return A % K === 0 ? result + 1 : result;
}
*/

// 2차시, 실패 (25%)
/* 
function solution(A, B, K) {
  if (K === 1) return B + 1 - A;
  return Math.floor(((B + 1) - A) / K);
}
*/

// 1차시, 실패 : 타임아웃 ( 시간복잡도: O(B-A) )
/* 
function solution(A, B, K) {
  let result = 0;
  if (K === 1) return B + 1 - A;
  for (let i = A; i <= B; i++) i % K === 0 && result++;
  return result;
}
*/
