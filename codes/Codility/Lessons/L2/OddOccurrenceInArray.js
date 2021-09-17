// https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/
// Lesson 2 : OddOccurrenceInArray
// 주어진 배열(A)에서 짝을 이루고 있지 않은 요소를 반환

// (2021.09.16) ---------------------

// 2차시, 통과 - 시간복잡도: O(N) or O(N*log(N))
function solution(A) {
  let result = -1;
  const map = new Map();
  for (let i = 0; i < A.length; i++) {
    const v = A[i];
    if (map.has(v)) map.set(v, map.get(v) + 1);
    else map.set(v, 1);
  }

  for (const [key, value] of map) {
    if (value % 2 === 1) {
      result = key;
      break;
    }
  }
  return result;
}

console.log(
  solution([9, 3, 9, 3, 9, 7, 9]), // 7
);

// 1차시, 통과 - 시간복잡도: O(N) or O(N*log(N))
/* 
function solution(A) {
  const map = new Map();
  A.forEach((v) => {
    if (map.has(v)) map.set(v, map.get(v) + 1);
    else map.set(v, 1);
  });
  return [...map].find(([_, value]) => value % 2 === 1)[0];
}
*/
