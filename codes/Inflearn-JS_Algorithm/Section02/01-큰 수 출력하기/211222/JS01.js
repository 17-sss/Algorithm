// ME
function solution(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      result.push(arr[i]);
      continue;
    }
    if (arr[i - 1] < arr[i]) result.push(arr[i]);
  }
  return result;
}
let arr = [7, 3, 9, 5, 6, 12]; // [7, 9, 6, 12]
console.log(solution(arr));
