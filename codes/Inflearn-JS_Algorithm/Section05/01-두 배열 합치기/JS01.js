// ME (1차시, 일반)
/*
const solution = (arr1, arr2) => [...arr1, ...arr2].sort((a, b) => a - b);

const a = [1, 3, 5];
const b = [2, 3, 6, 7, 9];
console.log(solution(a, b)); // [1, 2, 3, 3, 5, 6, 7, 9]
*/

// ME (2차시, 투 포인터)
function solution(arr1, arr2) {
  const result = [];
  let p1 = (p2 = 0);
  while (arr1.length > p1 && arr2.length > p2) {
    const value = arr1[p1] < arr2[p2] ? arr1[p1++] : arr2[p2++];
    result.push(value);
  }
  while (arr1.length > p1) result.push(arr1[p1++]);
  while (arr2.length > p2) result.push(arr2[p2++]);
  return result;
}

const a = [1, 3, 5];
const b = [2, 3, 6, 7, 9];
console.log(solution(a, b)); // [1, 2, 3, 3, 5, 6, 7, 9]

// ANSWER
/*
function solution(arr1, arr2) {
  let answer = [];
  let n = arr1.length;
  let m = arr2.length;
  let p1 = (p2 = 0);
  while (p1 < n && p2 < m) {
    if (arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]);
    else answer.push(arr2[p2++]);
  }
  while (p1 < n) answer.push(arr1[p1++]);
  while (p2 < m) answer.push(arr2[p2++]);
  return answer;
}

const a = [1, 3, 5];
const b = [2, 3, 6, 7, 9];
console.log(solution(a, b));
*/