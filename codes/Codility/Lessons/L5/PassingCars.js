// https://app.codility.com/programmers/lessons/5-prefix_sums/passing_cars/
// Lesson 4 :  PassingCars
// 배열(A)를 순회할 때 0이 왔을 때 뒤에 1이 몇개 있는지를 더하는 문제
// --> O(N)으로 통과해야 함

// (2021.09.20) ---------------------

// 2차시, 통과 : 참고(https://denken-y.tistory.com/entry/Codility-PassingCars) 
// 시간복잡도: O(N)
function solution(A) {
  let result = 0;
  let tmp = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] === 0) tmp++;
    else result += tmp;
  }
  if (result > 1000000000 || result < 0) return -1;
  return result;
}

console.log(solution([0, 1, 0, 1, 1]), solution([0, 1, 0, 1, 0, 1]));

// 1차시, 실패 : 타임아웃 ( 시간복잡도: O(N ** 2) )
/* 
function solution(A) {
  let result = 0;
  for (let i = 0; i < strA.length; i++) {
    if (strA[i] === '0') {
      const strASlice = strA.slice(i + 1, strA.length).replace(/0/g, '');
      result += strASlice.length;
    }
  }

  if (result > 1000000000 || result < 0) return -1;
  return result;
}
 */
