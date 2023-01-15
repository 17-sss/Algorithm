// ME
function solution(n, arr) {
  const map = arr.reduce((resultMap, value) => {
    resultMap.set(
      value,
      `${value}`.split('').reduce((prev, curr) => +prev + +curr),
    );
    return resultMap;
  }, new Map());

  const entriesMap = [...map.entries()];
  const maxSum = Math.max(...entriesMap.map((v) => v[1]));
  const filterEntries = entriesMap.filter((v) => v[1] === maxSum).sort((a, b) => b[0] - a[0]);
  const result = filterEntries.length > 0 ? filterEntries[0][0] : null;

  return result;
}

const arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr)); // 137

// ANSWER (답 2개임. 1번째 답)
function solution(n, arr) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;
  for (let x of arr) {
    let sum = 0,
      tmp = x;
    while (tmp) {
      sum += tmp % 10;
      tmp = Math.floor(tmp / 10);
    }
    if (sum > max) {
      max = sum;
      answer = x;
    } else if (sum === max) {
      if (x > answer) answer = x;
    }
  }
  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));