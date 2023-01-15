// ME
function solution(arr) {
  let result = 0;
  for (let rowIdx = 0; rowIdx < arr.length; rowIdx++) {
    const row = arr[rowIdx];
    for (let colIdx = 0; colIdx < row.length; colIdx++) {
      const currValue = row[colIdx];
      const top = arr[rowIdx - 1]?.[colIdx] ?? 0;
      const bottom = arr[rowIdx + 1]?.[colIdx] ?? 0;
      const left = arr[rowIdx][colIdx - 1] ?? 0;
      const right = arr[rowIdx][colIdx + 1] ?? 0;
      const isPeak = [top, bottom, left, right].every((v) => v < currValue);
      if (isPeak) {
        result++;
      }
    }
  }
  return result;
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr));
