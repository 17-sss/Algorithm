// ME
function solution(arr, isDesc = false) {
  let currLength = arr.length;
  while (currLength) {
    for (let i = 0; i < currLength; i++) {
      if (!arr[i + 1]) continue;
      const bCondition = isDesc ? arr[i] < arr[i + 1] : arr[i] > arr[i + 1];
      if (bCondition) [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
    console.log([...arr]);
    currLength--;
  }
  return arr;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));

// ---------------------------

// ANSWER
function solution(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));