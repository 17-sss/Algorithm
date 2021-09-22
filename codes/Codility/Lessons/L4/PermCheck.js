// https://app.codility.com/programmers/lessons/4-counting_elements/perm_check/
// Lesson 4 :  PermCheck

// (2021.09.19) ---------------------

// 1차시, 통과 ( 시간복잡도 O(N) or O(N * log(N)) )
function solution(A) {
  A.sort((a, b) => a - b);
  const set = new Set(A);
  return set.size === A.length && set.size === A[A.length - 1] ? 1 : 0;
}

console.log(solution([4, 1, 3, 2]), solution([4, 1, 3]));
