// ME
function solution(arr) {
  let max = Number.MIN_SAFE_INTEGER;
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    const curr = arr[i];
    if (curr > max) {
      result++;
      max = curr;
    }
  }

  return result;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));
