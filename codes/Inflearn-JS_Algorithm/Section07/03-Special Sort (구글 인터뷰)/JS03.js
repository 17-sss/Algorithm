// ME
function solution(arr) {
  let currLength = arr.length;
  while (currLength) {
    for (let i = 0; i < currLength; i++) {
      if (!arr[i + 1]) continue;
      if (arr[i] > 0 && arr[i + 1] < 0) [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
    currLength--;
  }
  return arr;
}
let arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));
// ---------------------------

// ANSWER
function solution(arr) {
  let answer = [];
  for (let x of arr) {
    if (x < 0) answer.push(x);
  }
  for (let x of arr) {
    if (x > 0) answer.push(x);
  }
  return answer;
}

let arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));
