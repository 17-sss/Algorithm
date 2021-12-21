// ME
function solution(a, b, c) {
  const MAX = Math.max(a, b, c);
  let isMaxFilter = false;

  const anotherSum = [a, b, c].reduce((result, value) => {
    if (!isMaxFilter && value === MAX) {
      isMaxFilter = true;
      return result;
    }
    return result + value;
  }, 0);

  return anotherSum >= MAX ? 'YES' : 'NO';
}

console.log(solution(6, 7, 11)); // YES
console.log(solution(13, 33, 17)); // NO