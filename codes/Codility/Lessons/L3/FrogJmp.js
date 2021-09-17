// https://app.codility.com/programmers/lessons/3-time_complexity/frog_jmp/
// Lesson 3 : FrogJmp
// 개구리가 몇번을 점프해야 주어진 값 Y를 넘거나 같아지는지
// (시작점 X, 점프 한번할 때마다 D만큼 추가)

// (2021.09.16) ---------------------

// 2차시, 실패 ( 시간복잡도: O(Y-X) )
/* 
function solution(X, Y, D) {
  let currX = X;
  let cnt = 0;
  while (currX < Y) {
    currX += D;
    cnt++;
  }
  return cnt;
}
*/


// 1차시, 통과 ( 시간복잡도: O(1) )
const solution = (X, Y, D) => Math.ceil((Y - X) / D);
console.log(solution(10, 85, 30));