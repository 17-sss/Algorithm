// ME
function solution(arr) {
  const ARR_LENGTH = arr.length;
  const arrDP = Array.from({ length: ARR_LENGTH }, () => 1);

  for (let i = 0; i < ARR_LENGTH; i++) {
    let maxValue = Number.MIN_SAFE_INTEGER;
    const v1 = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      const v2 = arr[j];
      if (v1 > v2) maxValue = Math.max(maxValue, arrDP[j]);
    }
    if (maxValue !== Number.MIN_SAFE_INTEGER) arrDP[i] += maxValue;
  }

  return Math.max(...arrDP);
}
console.log(solution([5, 3, 7, 8, 6, 2, 9, 4])); // 4

// ANSWER
function solution(arr) {
  let answer = 0;
  let dy = Array.from({ length: arr.length }, () => 0);
  dy[0] = 1;
  for (let i = 1; i < arr.length; i++) {
    let max = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] < arr[i] && dy[j] > max) {
        max = dy[j];
      }
    }
    dy[i] = max + 1;
    answer = Math.max(answer, dy[i]);
  }
  return answer;
}

let arr = [5, 3, 7, 8, 6, 2, 9, 4];
console.log(solution(arr));
