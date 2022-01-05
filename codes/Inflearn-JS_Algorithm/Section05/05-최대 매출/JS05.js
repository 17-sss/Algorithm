// ME
function solution(k, arr) {
  let left = 0;
  let right = k;

  let result = Number.MIN_SAFE_INTEGER;
  while (right <= arr.length) {
    const currSum = arr.slice(left, right).reduce((prev, curr) => prev + curr);
    result = Math.max(currSum, result);
    left++;
    right++;
  }
  return result;
}
const a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));

// ---------------------------

// ANSWER
function solution(k, arr) {
  let answer, sum = 0;
  for (let i = 0; i < k; i++) sum += arr[i];
  answer = sum;
  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    answer = Math.max(answer, sum);
  }
  return answer;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
