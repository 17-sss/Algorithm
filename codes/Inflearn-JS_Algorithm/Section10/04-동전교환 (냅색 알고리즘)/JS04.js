// ME
function solution(m, coin) {
  const MIN_COIN = Math.min(...coin);
  const arrDP = Array.from({ length: m + 1 }, (_, i) => (MIN_COIN > i ? 0 : Number.MAX_SAFE_INTEGER));
  for (let i = 0; i < coin.length; i++) {
    const currCoin = coin[i];
    for (let j = currCoin; j < arrDP.length; j++) {
      const tmp = arrDP[j - currCoin] + 1;
      arrDP[j] = Math.min(arrDP[j], tmp);
    }
  }
  return arrDP[arrDP.length - 1];
}
console.log(solution(15, [1, 2, 5])); // 3

// ANSWER
function solution(m, coin) {
  let answer = 0;
  let dy = Array.from({ length: m + 1 }, () => 1000);
  dy[0] = 0;
  for (let i = 1; i < arr.length; i++) {
    for (let j = coin[i]; j <= m; j++) {
      dy[j] = Math.min(dy[j], dy[j - coin[i]] + 1);
    }
  }
  answer = dy[m];
  return answer;
}

let arr = [1, 2, 5];
console.log(solution(15, arr));
