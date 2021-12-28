// ME
const isUndefined = (v) => typeof v === 'undefined';
function solution(n) {
  const arrDP = Array.from({ length: n + 1 }, (_, i) => (i <= 2 ? i : undefined));
  let nIdx = 0;
  while (nIdx < arrDP.length) {
    if (isUndefined(arrDP[nIdx])) arrDP[nIdx] = arrDP[nIdx - 1] + arrDP[nIdx - 2];
    nIdx++;
  }
  return arrDP[arrDP.length - 1];
}

console.log(solution(7)); // 21

// ANSWER
function solution(n) {
  let answer = 0;
  let dy = Array.from({ length: n + 1 }, () => 0);
  dy[1] = 1;
  dy[2] = 2;
  for (let i = 3; i <= n; i++) {
    dy[i] = dy[i - 2] + dy[i - 1];
  }
  answer = dy[n];
  return answer;
}

console.log(solution(7)); // 21
