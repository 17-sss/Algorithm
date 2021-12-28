// ME
function solution(n) {
  const arrDP = Array.from({ length: n + 2 }, (_, i) => (i <= 2 ? i : undefined));
  for (let i = 3; i < arrDP.length; i++) arrDP[i] = arrDP[i - 1] + arrDP[i - 2];
  return arrDP[arrDP.length - 1];
}
console.log(solution(7)); // 34

// ANSWER
function solution(n) {
  let answer = 0;
  let dy = Array.from({ length: n + 2 }, () => 0);
  dy[1] = 1;
  dy[2] = 2;
  for (let i = 3; i <= n + 1; i++) {
    dy[i] = dy[i - 2] + dy[i - 1];
  }
  answer = dy[n + 1];
  return answer;
}

console.log(solution(7)); // 34
