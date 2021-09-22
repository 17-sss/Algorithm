// https://app.codility.com/programmers/lessons/14-binary_search_algorithm/min_max_division/
// Lesson 14 : MinMaxDivision
/* 
    주어진 A 배열을 K만큼 배열을 나누어 나누어진 배열을 각각 합한 뒤 제일 큰 값을 return
    (위 설명처럼 한번만 구하는게 아님, 나눌 수 있는 모든 경우의 수를 구한 뒤 작업하면서 계속 업데이트 해야)
*/

// (2021.09.21) ---------------------
function solution(K, M, A) {
  let result = 0;
  const arrs = Array.from({length: K}, () => []);
  const DFS = (L) => {
  };
  DFS(0)
  return result;
}

console.log(solution(3, 5, [2, 1, 5, 1, 2, 2, 2]));
