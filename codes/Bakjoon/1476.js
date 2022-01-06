// https://www.acmicpc.net/problem/1476
// 날짜 계산
/*
    [테스트 케이스]
    - 입력: '1 16 16'
    - 출력: '16'

    - 입력: '1 1 1'
    - 출력: '1'

    - 입력: '1 2 3'
    - 출력: '5266'

    - 입력: '15 28 19'
    - 출력: '7980'
*/

// ------

// 2차시, 보류
function solution(input) {
  const [E, S, M] = input.split(' ').map((v) => +v);
  return;
}

// 1차시, 통과 실패 (메모리 초과)
/* 
    [1차시, 메모]
    어떠한 수식이 있을 줄 알았지만, 아니었음..
    괜한 고민에 시간만 날림.
    우리가 사는 세계의 년도는 1부터 순차적으로 증가하고,
    매치 될 준규가 사는 세계의 년도는 공식에 따라 증가시켜주면 됨.
    --> 주어진 입력값 (준규가 현재 사는 세계의 년도)와
        내가 세고 있는 준규가 사는 세계의 년도가 일치한다면
        우리가 사는 세계의 년도를 반환하면 됨
    + 많아봤자 15*28*19 = 7980년임.
 */
/* 
function solution(input) {
  const [E, S, M] = input.split(' ').map((v) => +v);
  let [e, s, m] = [1, 1, 1];
  let year = 1;

  while (true) {
    if (E === e && S === s && M === m) return year;
    e++; s++; m++; year++;
    (e > 15) && (e = 1);
    (s > 28) && (s = 1);
    (m > 19) && (m = 1);
    if (e === 15 && s === 28 && m === 19) break;
  }
  return year;
}
*/

// ⬇️⬇️⬇️⬇️ 지우지마셈! =====================================

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> ',
});

rl.prompt();
rl.on('line', (line) => {
  console.log(solution(line));
  rl.prompt();
  if (line === '@q') rl.close();
}).on('close', () => process.exit());

// ⬆️⬆️⬆️⬆️ 지우지마셈! =====================================
