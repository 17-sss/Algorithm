// ME
function solution(m, arr) {
  const arrDP = Array.from({ length: m + 1 }, () => 0);
  for (let i = 0; i < arr.length; i++) {
    const [score, time] = arr[i];
    for (let j = m; j >= time; j--) arrDP[j] = Math.max(arrDP[j], arrDP[j - time] + score);
  }
  return arrDP[m];
}

const arr = [
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3],
  [7, 4],
]; // 점수, 걸리는시간[]
console.log(solution(20, arr)); // 41

// ANSWER
function solution(m, arr) {
  let answer = 0;
  let dy = Array.from({ length: m + 1 }, () => 0);
  for (let i = 0; i < arr.length; i++) {
    let ps = arr[i][0];
    let pt = arr[i][1];
    for (let j = m; j >= pt; j--) {
      dy[j] = Math.max(dy[j], dy[j - pt] + ps);
    }
  }
  answer = dy[m];
  return answer;
}

const arr = [
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3],
  [7, 4],
];
console.log(solution(20, arr)); // 41
