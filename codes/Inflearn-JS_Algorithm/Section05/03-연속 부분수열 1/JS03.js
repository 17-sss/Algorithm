// ME (일반) - 시간복잡도: O(n³)
/* 
function solution(m, arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      const sum = arr.slice(i, j).reduce((prev, curr) => prev + curr, 0);
      if (sum === m) result++;
    }
  }
  return result;
}
const a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a)); // 3
*/

// ME (투포인터)
function solution(m, arr) {
  let sum = (left = cnt = 0);
  for (let right = 0; right < arr.length; right++) {
    const v1 = arr[right];
    sum += v1;
    while (sum >= m) {
      if (sum === m) cnt++;
      const v2 = arr[left++];
      sum -= v2;
    }
  }
  return cnt;
}
const a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a)); // 3

// ---------------------------

// ANSWER
function solution(m, arr) {
  let answer = 0,
    lt = 0,
    sum = 0;
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    if (sum === m) answer++;
    while (sum >= m) {
      sum -= arr[lt++];
      if (sum === m) answer++;
    }
  }
  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
