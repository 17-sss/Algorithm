// https://softeer.ai/practice/info.do?idx=1&eid=408
// 8단 변속기

// 1차시, 통과 성공
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function solution(values) {
  let prevValue, result;
  for (let i = 0; i < values.length; i++) {
    const value = values[i];
    if (prevValue && typeof result === 'undefined') {
      if (value > prevValue) {
        result = 'ascending';
      } else {
        result = 'descending';
      }
    }
    if ((result === 'ascending' && value < prevValue) || (result === 'descending' && value > prevValue)) {
      return 'mixed';
    }
    prevValue = value;
  }
  return result;
}

function main() {
  rl.on('line', (line) => {
    const values = line.split(' ').map((v) => +v);
    console.log(solution(values));
    rl.close();
  }).on('close', () => {
    process.exit();
  });
}

main();
