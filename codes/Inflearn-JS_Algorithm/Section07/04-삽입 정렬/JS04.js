// 삽입 정렬
// - 모르겠다..

// ME (참고함)
function solution(arr, isDesc = false) {
  for (let i = 1; i < arr.length; i++) {
    let tmp = arr[i];
    let j;
    for (j = i - 1; j >= 0; j--) {
      const flag = isDesc ? tmp > arr[j] : arr[j] > tmp;
      if (flag) arr[j + 1] = arr[j];
      else break;
    }
    arr[j + 1] = tmp;
  }
  return arr;
}

console.log(solution([11, 7, 5, 6, 10, 9], true));

// ---------------------------

// ANSWER
function solution(arr) {
  let answer = [];
  answer.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < answer.length; j++) {
      if (arr[i] < answer[j]) {
        answer.splice(j, 0, arr[i]);
        break;
      }
    }
  }
  return answer;
}

let arr = [11, 7, 5, 6, 10, 9];
console.log(solution(arr));
