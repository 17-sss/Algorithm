// https://app.codility.com/programmers/lessons/4-counting_elements/frog_river_one/
// Lesson 4 :  FrogRiverOne
// 개구리가 강을 건너려면 X개의 나뭇잎이 떨어져있어야 함. 배열 A의 각 요소들은 떨어진 나뭇잎의 위치를 나타냄

// (2021.09.19) ---------------------

// 2차시, 통과. Set 활용 ( 시간복잡도 O(N) )
function solution(X, A) {
  let result = -1;
  const set = new Set();
  for (let i = 0; i < A.length; i++) {
    const value = A[i];
    if (value > X) continue;
    set.add(value);
    if (set.size === X) return i;
  }
  return result;
}
console.log(solution(5, [1, 3, 1, 4, 2, 3, 5, 4]));

// 1차시, 실패. 배열 활용 ( 시간복잡도 O(N ** 2) )
/* 
function solution(X, A) {
  let result = -1;
  const arrTmp = [];
  for (let i = 0; i < A.length; i++) {
    const value = A[i];
    if (arrTmp.includes(value)) continue;
    else {
      if (value > X) continue;
      arrTmp.push(value);
    }
    if (arrTmp.length === X) {
      result = i;
      break;
    };
  }
  return result;
}
*/