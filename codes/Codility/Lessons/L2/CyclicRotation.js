// https://app.codility.com/programmers/lessons/2-arrays/cyclic_rotation/
// Lesson 2 : CyclicRotation
// 주어진 배열(A)를 K만큼 회전 (오른쪽으로!)

// (2021.09.16) ---------------------

function solution(A, K) {
  if (A.length === 0) return A;
  let nLoop = 0;
  while (nLoop !== K) {
    A.unshift(A.pop());
    nLoop++;
  }
  return A;
}

console.log(
  solution([3, 8, 9, 7, 6], 3), // [9, 7, 6, 3, 8]]
  solution([0, 0, 0], 1), // [0, 0, 0]
  solution([1, 2, 3, 4], 4), // [1, 2, 3, 4]
);
