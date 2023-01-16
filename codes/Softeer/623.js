// https://softeer.ai/practice/info.do?idx=1&eid=623
// [21년 재직자 대회 예선] 비밀 메뉴

// 1차시, 통과 성공
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function solution(secretKey, userInput) {
  const removeSpaces = (str) => str.replace(/\s+/g, '');
  const isSecret = removeSpaces(userInput).indexOf(removeSpaces(secretKey)) > -1;
  return isSecret ? 'secret' : 'normal';
}

function main() {
  const params = [];
  rl.on('line', (line) => {
    params.push(line);
    if (params.length === 3) {
      rl.close();
    }
  }).on('close', () => {
    const [_, secretKey, userInput] = params;
    console.log(solution(secretKey, userInput));
    process.exit();
  });
}

main();
