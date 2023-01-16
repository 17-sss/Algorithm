// https://softeer.ai/practice/info.do?idx=1&eid=1016
// 주행거리 비교하기

// 2차시, 통과 성공
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function solution(a, b) {
  if ([a, b].some((v) => v > 100000 || v < 0)) {
    return;
  }
  if (a === b) {
    return 'same';
  }
  return a > b ? 'A' : 'B';
}

function main() {
  rl.on('line', (line) => {
    const [a, b] = line
      .trim()
      .split(' ')
      .map((v) => +v);
    console.log(solution(a, b));
    rl.close();
  }).on('close', () => {
    process.exit();
  });
}

main();

// 1차시, 통과 실패
/**
 * - 받은 값을 숫자로 변환하지 않았음.
 * - 제약 조건 처리도 하지 않음.
 */
/*
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


function solution(a, b) {
    if (a > b) {
        return 'A';
    }
    if (a < b) {
        return 'B';
    }
    if (a === b) {
        return 'same';
    }
    return;
}

function main() {
    rl.on('line', (line) => {
        const [a, b] = line.trim().split(' ');
        console.log(solution(a, b));
        rl.close();
    }).on('close', () => {
        process.exit();
    });
}

main();
*/
